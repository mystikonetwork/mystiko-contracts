// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../libs/asset/AssetPool.sol";
import "../../libs/common/CustomErrors.sol";
import "../../libs/verifiers/Pairing.sol";
import "../../interface/IHasher3.sol";
import "../../interface/IVerifier.sol";
import "../../interface/ICommitmentPool.sol";
import "../../interface/ISanctionsList.sol";
import "../rule/Sanctions.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";

abstract contract CommitmentPool is ICommitmentPool, AssetPool, ReentrancyGuard, Sanctions {
  uint256 public constant auditorCount = 5;

  struct CommitmentLeaf {
    uint256 commitment;
    uint256 rollupFee;
  }

  struct WrappedVerifier {
    IVerifier verifier;
    bool enabled;
  }

  struct UnpackedPublicKey {
    uint256 xSign;
    uint256 y;
  }

  // Transact proof verifier related contract
  mapping(uint32 => mapping(uint32 => WrappedVerifier)) private transactVerifiers;
  // Rollup proof verifier related contract
  mapping(uint32 => WrappedVerifier) private rollupVerifiers;

  // For checking duplicates.
  mapping(uint256 => bool) private historicCommitments;
  mapping(uint256 => bool) private spentSerialNumbers;

  // Commitment in queue.
  mapping(uint256 => CommitmentLeaf) private commitmentQueue;
  uint256 private commitmentQueueSize = 0;
  uint256 private commitmentIncludedCount = 0;

  // merkle tree roots;
  uint256 private immutable treeCapacity;
  mapping(uint256 => bool) private rootHistory;
  uint256 private currentRoot;

  // Admin related.
  address private operator;
  uint256 private minRollupFee;
  mapping(address => bool) private rollupWhitelist;
  mapping(address => bool) private enqueueWhitelist;

  // Some switches.
  bool private verifierUpdateDisabled;
  bool private rollupWhitelistDisabled;

  // auditor public keys
  uint256[auditorCount] private auditorPublicKeys;

  modifier onlyOperator() {
    if (msg.sender != operator) revert CustomErrors.OnlyOperator();
    _;
  }

  modifier onlyRollupWhitelisted() {
    if (!rollupWhitelistDisabled && !rollupWhitelist[msg.sender]) revert CustomErrors.OnlyWhitelistedRoller();
    _;
  }

  modifier onlyEnqueueWhitelisted() {
    if (!enqueueWhitelist[msg.sender]) revert CustomErrors.OnlyWhitelistedSender();
    _;
  }

  event OperatorChanged(address indexed operator);
  event CommitmentQueued(
    uint256 indexed commitment,
    uint256 rollupFee,
    uint256 leafIndex,
    bytes encryptedNote
  );
  event CommitmentIncluded(uint256 indexed commitment);
  event CommitmentSpent(uint256 indexed rootHash, uint256 indexed serialNumber);
  event EncryptedAuditorNote(uint64 id, uint256 auditorPublicKey, uint256 encryptedAuditorNote);
  event VerifierUpdateDisabled(bool state);
  event RollupWhitelistDisabled(bool state);
  event AuditorPublicKeyChanged(uint256 indexed index, uint256 publicKey);

  constructor(uint8 _treeHeight) {
    if (_treeHeight == 0) revert CustomErrors.TreeHeightLessThanZero();
    operator = msg.sender;
    treeCapacity = 1 << _treeHeight;
    currentRoot = _zeros(_treeHeight);
    rootHistory[currentRoot] = true;
  }

  /* @notice              Check commitment request parameter and insert commitment into commitment queue
   *  @param _request     The commitment request parameter
   *  @param _executor    Specific address that send enqueue transaction, only be valid address when do cross chain transaction
   *  @return             True means commitment success insert into commitment queue , or exception and return false.
   */
  function enqueue(CommitmentRequest memory _request, address _executor)
    external
    override
    onlyEnqueueWhitelisted
  {
    // todo should do check in upper layer call
    if (_request.rollupFee < minRollupFee) revert CustomErrors.RollupFeeToFew();
    if (commitmentIncludedCount + commitmentQueueSize >= treeCapacity) revert CustomErrors.TreeIsFull();
    if (historicCommitments[_request.commitment]) revert CustomErrors.CommitmentHasBeenSubmitted();

    historicCommitments[_request.commitment] = true;
    _enqueueCommitment(_request.commitment, _request.rollupFee, _request.encryptedNote);

    if (_request.executorFee > 0) {
      _processExecutorFeeTransfer(_executor, _request.executorFee);
    }
  }

  /* @notice              Check rollup request parameter、verify rollup proof and update commitment merkle tree
   *  @param _request     The rollup request parameter
   */
  function rollup(RollupRequest memory _request) external override onlyRollupWhitelisted {
    if (rootHistory[_request.newRoot]) revert CustomErrors.NewRootIsDuplicated();
    if (_request.rollupSize > commitmentQueueSize || !rollupVerifiers[_request.rollupSize].enabled)
      revert CustomErrors.Invalid("rollupSize");
    uint256 includedCount = commitmentIncludedCount;
    if (includedCount % _request.rollupSize != 0) revert CustomErrors.Invalid("rollupSize");
    uint256 pathIndices = _pathIndices(includedCount, _request.rollupSize);
    uint256[] memory leaves = new uint256[](_request.rollupSize);
    uint256 totalRollupFee = 0;
    for (uint256 index = 0; index < _request.rollupSize; index++) {
      uint256 includedCursor = includedCount + index;
      CommitmentLeaf memory leaf = commitmentQueue[includedCursor];
      if (leaf.commitment == 0) revert CustomErrors.IndexOutOfBound();
      leaves[index] = leaf.commitment;
      totalRollupFee += leaf.rollupFee;
      delete commitmentQueue[includedCursor];
      emit CommitmentIncluded(leaf.commitment);
    }
    commitmentQueueSize -= _request.rollupSize;
    uint256 expectedLeafHash = uint256(keccak256(abi.encodePacked(leaves))) % Pairing.FIELD_SIZE;
    if (_request.leafHash != expectedLeafHash) revert CustomErrors.Invalid("leafHash");
    uint256[] memory inputs = new uint256[](4);
    inputs[0] = currentRoot;
    inputs[1] = _request.newRoot;
    inputs[2] = expectedLeafHash;
    inputs[3] = pathIndices;
    bool verified = rollupVerifiers[_request.rollupSize].verifier.verifyTx(_request.proof, inputs);
    if (!verified) revert CustomErrors.Invalid("proof");
    commitmentIncludedCount += _request.rollupSize;
    currentRoot = _request.newRoot;
    rootHistory[_request.newRoot] = true;
    _processRollupFeeTransfer(totalRollupFee);
  }

  /* @notice              Check transact request parameter、verify transact proof and do spend
   *  @param _request     The transact request parameter
   *  @param _signature   The signature of the transact request by proffer
   */
  function transact(TransactRequest memory _request, bytes memory _signature) external override nonReentrant {
    uint32 numInputs = SafeCast.toUint32(_request.serialNumbers.length);
    uint32 numOutputs = SafeCast.toUint32(_request.outCommitments.length);

    // check input and output lengths.
    if (!transactVerifiers[numInputs][numOutputs].enabled) revert CustomErrors.Invalid("i/o length");
    if (_request.sigHashes.length != numInputs) revert CustomErrors.Invalid("sigHashes length");
    if (_request.outRollupFees.length != numOutputs) revert CustomErrors.Invalid("outRollupFees length");
    if (_request.outEncryptedNotes.length != numOutputs)
      revert CustomErrors.Invalid("outEncryptedNotes length");
    if (commitmentIncludedCount + commitmentQueueSize + numOutputs > treeCapacity)
      revert CustomErrors.TreeIsFull();
    if (isSanctioned(tx.origin)) revert CustomErrors.SanctionedAddress();
    if (isSanctioned(_request.publicRecipient)) revert CustomErrors.SanctionedAddress();
    if (_request.encryptedAuditorNotes.length != numInputs * auditorCount)
      revert CustomErrors.AuditorNotesLengthError();

    // check signature
    bytes32 hash = _transactRequestHash(_request);
    if (_request.sigPk != bytes32(uint256(uint160(ECDSA.recover(hash, _signature)))))
      revert CustomErrors.Invalid("signature");

    // initialize inputs array for verifying proof.
    uint256 totalInput = 2 * numInputs;
    uint256 allInput = 2 * numInputs + 4;
    uint256 allInputAndOutput = allInput + 2 * numOutputs;
    uint256[] memory inputs = new uint256[](allInputAndOutput + 2 + (2 + numInputs) * auditorCount);

    // check whether valid root.
    if (!rootHistory[_request.rootHash]) revert CustomErrors.Invalid("root");
    inputs[0] = _request.rootHash;

    // check serial numbers.
    uint256 offsetSigHash = numInputs + 1;
    for (uint256 i = 0; i < numInputs; i++) {
      uint256 sn = _request.serialNumbers[i];
      if (spentSerialNumbers[sn]) revert CustomErrors.NoteHasBeenSpent();
      inputs[i + 1] = sn;
      inputs[i + offsetSigHash] = _request.sigHashes[i];
    }

    inputs[totalInput + 1] = uint256(_request.sigPk);
    inputs[totalInput + 2] = _request.publicAmount;
    inputs[totalInput + 3] = _request.relayerFeeAmount;

    // check rollup fees and output commitments.
    uint256 offsetRollupFee = allInput + numOutputs;
    for (uint256 i = 0; i < numOutputs; i++) {
      if (historicCommitments[_request.outCommitments[i]]) revert CustomErrors.Duplicated("commitment");
      if (_request.outRollupFees[i] < minRollupFee) revert CustomErrors.RollupFeeToFew();
      inputs[i + allInput] = _request.outCommitments[i];
      inputs[i + offsetRollupFee] = _request.outRollupFees[i];
    }

    // set auditor related inputs
    _setAuditingInputs(_request, inputs, allInputAndOutput);

    // verify proof.
    bool verified = transactVerifiers[numInputs][numOutputs].verifier.verifyTx(_request.proof, inputs);
    if (!verified) revert CustomErrors.Invalid("transact proof");

    // set spent flag for serial numbers.
    for (uint256 i = 0; i < numInputs; i++) {
      spentSerialNumbers[_request.serialNumbers[i]] = true;
      emit CommitmentSpent(_request.rootHash, _request.serialNumbers[i]);
    }

    // enqueue output commitments.
    for (uint256 i = 0; i < numOutputs; i++) {
      historicCommitments[_request.outCommitments[i]] = true;
      _enqueueCommitment(
        _request.outCommitments[i],
        _request.outRollupFees[i],
        _request.outEncryptedNotes[i]
      );
    }

    // withdraw tokens to public recipient.
    if (_request.publicAmount > 0) {
      _processWithdrawTransfer(_request.publicRecipient, _request.publicAmount);
    }

    // withdraw tokens to relayer.
    if (_request.relayerFeeAmount > 0) {
      _processWithdrawTransfer(_request.relayerAddress, _request.relayerFeeAmount);
    }

    // emit encrypted auditing notes.
    _emitAuditingNotes(_request);
  }

  function setRollupWhitelistDisabled(bool _state) external onlyOperator {
    rollupWhitelistDisabled = _state;
    emit RollupWhitelistDisabled(_state);
  }

  function setVerifierUpdateDisabled(bool _state) external onlyOperator {
    verifierUpdateDisabled = _state;
    emit VerifierUpdateDisabled(_state);
  }

  function enableTransactVerifier(
    uint32 _numInputs,
    uint32 _numOutputs,
    IVerifier _transactVerifier
  ) external onlyOperator {
    if (verifierUpdateDisabled) revert CustomErrors.VerifierUpdatesHasBeenDisabled();
    if (_numInputs == 0) revert CustomErrors.NumInputsGreaterThanZero();
    transactVerifiers[_numInputs][_numOutputs] = WrappedVerifier(_transactVerifier, true);
  }

  function disableTransactVerifier(uint32 _numInputs, uint32 _numOutputs) external onlyOperator {
    if (verifierUpdateDisabled) revert CustomErrors.VerifierUpdatesHasBeenDisabled();
    if (_numInputs == 0) revert CustomErrors.NumInputsGreaterThanZero();
    transactVerifiers[_numInputs][_numOutputs].enabled = false;
  }

  function enableRollupVerifier(uint32 _rollupSize, IVerifier _rollupVerifier) external onlyOperator {
    if (verifierUpdateDisabled) revert CustomErrors.VerifierUpdatesHasBeenDisabled();
    if (_rollupSize == 0 || _rollupSize > 1024) revert CustomErrors.Invalid("rollupSize");
    if (_rollupSize & (_rollupSize - 1) != 0) revert CustomErrors.RollupSizeNotPowerOfTwo();
    rollupVerifiers[_rollupSize] = WrappedVerifier(_rollupVerifier, true);
  }

  function disableRollupVerifier(uint32 _rollupSize) external onlyOperator {
    if (verifierUpdateDisabled) revert CustomErrors.VerifierUpdatesHasBeenDisabled();
    if (_rollupSize == 0 || _rollupSize > 1024) revert CustomErrors.Invalid("rollupSize");
    if (_rollupSize & (_rollupSize - 1) != 0) revert CustomErrors.RollupSizeNotPowerOfTwo();
    rollupVerifiers[_rollupSize].enabled = false;
  }

  function addRollupWhitelist(address _roller) external onlyOperator {
    rollupWhitelist[_roller] = true;
  }

  function removeRollupWhitelist(address _roller) external onlyOperator {
    rollupWhitelist[_roller] = false;
  }

  function addEnqueueWhitelist(address _actor) external onlyOperator {
    enqueueWhitelist[_actor] = true;
  }

  function removeEnqueueWhitelist(address _actor) external onlyOperator {
    enqueueWhitelist[_actor] = false;
  }

  function setMinRollupFee(uint256 _minRollupFee) external onlyOperator {
    if (_minRollupFee == 0) revert CustomErrors.Invalid("_minRollupFee");
    minRollupFee = _minRollupFee;
  }

  function changeOperator(address _newOperator) external onlyOperator {
    if (operator == _newOperator) revert CustomErrors.NotChanged();
    operator = _newOperator;
    emit OperatorChanged(_newOperator);
  }

  function enableSanctionsCheck() external onlyOperator {
    sanctionsCheck = true;
    emit SanctionsCheck(sanctionsCheck);
  }

  function disableSanctionsCheck() external onlyOperator {
    sanctionsCheck = false;
    emit SanctionsCheck(sanctionsCheck);
  }

  function updateSanctionsListAddress(ISanctionsList _sanction) external onlyOperator {
    sanctionsList = _sanction;
    emit SanctionsList(_sanction);
  }

  function updateAuditorPublicKey(uint256 _index, uint256 _publicKey) external onlyOperator {
    if (_index + 1 > auditorCount) revert CustomErrors.AuditorIndexError();
    if (auditorPublicKeys[_index] == _publicKey) revert CustomErrors.AuditorPublicKeyNotChanged();
    auditorPublicKeys[_index] = _publicKey;
    emit AuditorPublicKeyChanged(_index, _publicKey);
  }

  function isHistoricCommitment(uint256 _commitment) public view returns (bool) {
    return historicCommitments[_commitment];
  }

  function isSpentSerialNumber(uint256 _serialNumber) public view returns (bool) {
    return spentSerialNumbers[_serialNumber];
  }

  function isKnownRoot(uint256 root) public view returns (bool) {
    return rootHistory[root];
  }

  function getTreeCapacity() public view returns (uint256) {
    return treeCapacity;
  }

  function isVerifierUpdateDisabled() public view returns (bool) {
    return verifierUpdateDisabled;
  }

  function isRollupWhitelistDisabled() public view returns (bool) {
    return rollupWhitelistDisabled;
  }

  function getMinRollupFee() public view returns (uint256) {
    return minRollupFee;
  }

  function getCommitmentIncludedCount() public view returns (uint256) {
    return commitmentIncludedCount;
  }

  function getAuditorPublicKey(uint256 _index) public view returns (uint256) {
    if (_index + 1 > auditorCount) {
      return 0;
    }
    return auditorPublicKeys[_index];
  }

  function getAllAuditorPublicKeys() public view returns (uint256[] memory) {
    uint256[] memory publicKeys = new uint256[](auditorCount);
    for (uint256 i = 0; i < auditorCount; i++) {
      publicKeys[i] = auditorPublicKeys[i];
    }
    return publicKeys;
  }

  function _enqueueCommitment(
    uint256 _commitment,
    uint256 _rollupFee,
    bytes memory _encryptedNote
  ) internal {
    uint256 leafIndex = commitmentQueueSize + commitmentIncludedCount;
    commitmentQueue[leafIndex] = CommitmentLeaf(_commitment, _rollupFee);
    commitmentQueueSize += 1;
    emit CommitmentQueued(_commitment, _rollupFee, leafIndex, _encryptedNote);
  }

  function _zeros(uint8 _nth) internal pure returns (uint256) {
    if (_nth == 0) {
      return 4506069241680023110764189603658664710592327039412547147745745078424755206435;
    } else if (_nth == 1) {
      return 11970986605677607431310473423176184560047228481560615908426980545799110088554;
    } else if (_nth == 2) {
      return 7738458864445542950035640909064911813760082193622764438647303881621331058401;
    } else if (_nth == 3) {
      return 1824110265544309188449535094624170286636245442276303308874119852616011569117;
    } else if (_nth == 4) {
      return 439876057652168043934546800930066844791837722960866592010071331117924956099;
    } else if (_nth == 5) {
      return 12148869658182608721880798177538135429676415436078660143891999467741175137753;
    } else if (_nth == 6) {
      return 19053554365366326893907951819376775362002701838241631566910091576437078877172;
    } else if (_nth == 7) {
      return 10852150351752357373309416331902947839408978407172036283446975657659303929195;
    } else if (_nth == 8) {
      return 6566746118285923398615130593102917883145176519985675587853568572822039375467;
    } else if (_nth == 9) {
      return 11417224681467267073071367078086518555025552633367123694305661076901745684286;
    } else if (_nth == 10) {
      return 13146739646829761771013347284695047890376017649809716402068931193605641442310;
    } else if (_nth == 11) {
      return 13459844126372070230208178859743367134654673422311448382103194318897111588993;
    } else if (_nth == 12) {
      return 14583232149490424807206413850907122884313879413776985151786010057621431694070;
    } else if (_nth == 13) {
      return 2518967593166921945692229141011622021498534525148812865797548053589389731063;
    } else if (_nth == 14) {
      return 19430810468586029191888627527380085964985035379281934526683112683473563049974;
    } else if (_nth == 15) {
      return 1897867614655011189086460938574526976583854364278605894377849343324624277074;
    } else if (_nth == 16) {
      return 18754984716384146963617729123402842399317045829379373763323387175769990714598;
    } else if (_nth == 17) {
      return 405949121641363157950726008207114912594987007836580877922134622675538021820;
    } else if (_nth == 18) {
      return 1088017070740705619214203129319291293539718028549242800354988860810207454418;
    } else if (_nth == 19) {
      return 21353011710845911836996543245897491023336659221412024163427506108383429011430;
    } else if (_nth == 20) {
      return 17749238747541177922260023106539184144732198174810064796938596694265936155259;
    } else if (_nth == 21) {
      return 2075393378094693254774654573545142692544561637317244351058483052393751634703;
    } else if (_nth == 22) {
      return 16722505204088094412486203391222218829920348347221074175055753816911628645782;
    } else if (_nth == 23) {
      return 12363952950807080168581550733914407510536975151639310957950584477670860711847;
    } else if (_nth == 24) {
      return 10329604628575281453151767624989354700984823669533380647141683321011842904387;
    } else if (_nth == 25) {
      return 6786932317737336481836453155794576859076099363706263920807867623375002220051;
    } else if (_nth == 26) {
      return 1095762658628848651950133756531023934995326201606239762241842229511708432973;
    } else if (_nth == 27) {
      return 15972138919465776163920491001484366021008021716324328852925101476359351519255;
    } else if (_nth == 28) {
      return 16129330525015604662646302893604911744769665677133181295582480658744807402110;
    } else if (_nth == 29) {
      return 16704502504460675449846784815849025989402638612907582712659689210169156075769;
    } else if (_nth == 30) {
      return 13519934288458064102175830458858015936170401683429767173542225128161091455592;
    } else if (_nth == 31) {
      return 13202030544264649816737469308990869537826379298057211734249690002947353708909;
    } else if (_nth == 32) {
      return 17318897336142888270342651912033539049925356757640177789706671990424346301218;
    } else {
      revert CustomErrors.TreeHeightOutOfBounds();
    }
  }

  function _pathIndices(uint256 _fullPath, uint32 _rollupSize) public pure returns (uint256) {
    if (_rollupSize >= 0x100) {
      _rollupSize >>= 8;
      _fullPath >>= 8;
    }

    if (_rollupSize >= 0x10) {
      _rollupSize >>= 4;
      _fullPath >>= 4;
    }
    if (_rollupSize >= 0x4) {
      _rollupSize >>= 2;
      _fullPath >>= 2;
    }
    if (_rollupSize >= 0x2) {
      /* _rollupSize >>= 1; */
      _fullPath >>= 1;
    }

    return _fullPath;
  }

  function _transactRequestHash(TransactRequest memory _request) internal returns (bytes32) {
    uint256 outNotesLen = _request.outEncryptedNotes.length;
    if (outNotesLen >= 3) revert CustomErrors.OutputNotesLessThanThree();

    bytes memory requestBytes;
    if (outNotesLen == 0) {
      requestBytes = abi.encodePacked(_request.publicRecipient, _request.relayerAddress);
    } else if (outNotesLen == 1) {
      requestBytes = abi.encodePacked(
        _request.publicRecipient,
        _request.relayerAddress,
        _request.outEncryptedNotes[0]
      );
    } else {
      requestBytes = abi.encodePacked(
        _request.publicRecipient,
        _request.relayerAddress,
        _request.outEncryptedNotes[0],
        _request.outEncryptedNotes[1]
      );
    }

    return ECDSA.toEthSignedMessageHash(keccak256(requestBytes));
  }

  function _unpackPublicKey(uint256 _publicKey) internal returns (UnpackedPublicKey memory) {
    UnpackedPublicKey memory unpacked;
    unpacked.xSign = _publicKey >> 255;
    unpacked.y = _publicKey & 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;
    return unpacked;
  }

  function _setAuditingInputs(
    TransactRequest memory _request,
    uint256[] memory inputs,
    uint256 previousIndex
  ) internal {
    UnpackedPublicKey memory unpackedAuditingPublicKey = _unpackPublicKey(_request.randomAuditingPublicKey);
    inputs[previousIndex] = unpackedAuditingPublicKey.xSign;
    inputs[previousIndex + 1] = unpackedAuditingPublicKey.y;
    for (uint256 i = 0; i < auditorCount; i++) {
      UnpackedPublicKey memory unpackedAuditorPublicKey = _unpackPublicKey(auditorPublicKeys[i]);
      inputs[previousIndex + 2 + i] = unpackedAuditorPublicKey.xSign;
      inputs[previousIndex + 2 + auditorCount + i] = unpackedAuditorPublicKey.y;
    }
    for (uint256 i = 0; i < _request.encryptedAuditorNotes.length; i++) {
      inputs[previousIndex + 2 + 2 * auditorCount + i] = _request.encryptedAuditorNotes[i];
    }
  }

  function _emitAuditingNotes(TransactRequest memory _request) internal {
    for (uint32 i = 0; i < _request.serialNumbers.length; i++) {
      for (uint32 j = 0; j < auditorCount; j++) {
        uint64 id = (uint64(i) << 32) | uint64(j);
        emit EncryptedAuditorNote(
          id,
          auditorPublicKeys[j],
          _request.encryptedAuditorNotes[i * auditorCount + j]
        );
      }
    }
  }
}
