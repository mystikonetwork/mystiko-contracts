// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../libs/asset/AssetPool.sol";
import "../../interface/IHasher3.sol";
import "../../interface/IVerifier.sol";
import "../../interface/ICommitmentPool.sol";
import "../rule/Sanctions.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

struct CommitmentLeaf {
  uint256 commitment;
  uint256 rollupFee;
}

struct WrappedVerifier {
  IVerifier verifier;
  bool enabled;
}

abstract contract CommitmentPool is ICommitmentPool, AssetPool, ReentrancyGuard, Sanctions {
  uint256 constant FIELD_SIZE = 21888242871839275222246405745257275088548364400416034343698204186575808495617;

  // Verifier related.
  mapping(uint32 => mapping(uint32 => WrappedVerifier)) transactVerifiers;
  mapping(uint32 => WrappedVerifier) rollupVerifiers;

  // For checking duplicates.
  mapping(uint256 => bool) historicCommitments;
  mapping(uint256 => bool) spentSerialNumbers;

  // Commitment queue related.
  mapping(uint256 => CommitmentLeaf) commitmentQueue;
  uint256 commitmentQueueSize = 0;
  uint256 commitmentIncludedCount = 0;

  // merkle tree roots;
  uint256 immutable treeCapacity;
  mapping(uint32 => uint256) rootHistory;
  uint256 currentRoot;
  uint32 currentRootIndex = 0;
  uint32 immutable rootHistoryLength;

  // Admin related.
  address operator;
  uint256 minRollupFee;
  mapping(address => bool) rollupWhitelist;
  mapping(address => bool) enqueueWhitelist;

  // Some switches.
  bool verifierUpdateDisabled;
  bool rollupWhitelistDisabled;

  modifier onlyOperator() {
    require(msg.sender == operator, "only operator.");
    _;
  }

  modifier onlyRollupWhitelisted() {
    require(rollupWhitelistDisabled || rollupWhitelist[msg.sender], "only whitelisted roller.");
    _;
  }

  modifier onlyEnqueueWhitelisted() {
    require(enqueueWhitelist[msg.sender], "only whitelisted sender.");
    _;
  }

  event CommitmentQueued(
    uint256 indexed commitment,
    uint256 rollupFee,
    uint256 leafIndex,
    bytes encryptedNote
  );
  event CommitmentIncluded(uint256 indexed commitment);
  event CommitmentSpent(uint256 indexed rootHash, uint256 indexed serialNumber);

  constructor(uint32 _treeHeight, uint32 _rootHistoryLength) {
    require(_rootHistoryLength > 0, "_rootHistoryLength should be greater than 0");
    operator = msg.sender;
    rootHistoryLength = _rootHistoryLength;
    treeCapacity = 2**uint256(_treeHeight);
    currentRoot = _zeros(_treeHeight);
    rootHistory[currentRootIndex] = currentRoot;
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
    returns (bool)
  {
    // todo should do check in upper layer call
    require(_request.rollupFee >= minRollupFee, "rollup fee too few");
    require(commitmentIncludedCount + commitmentQueueSize < treeCapacity, "tree is full");
    require(!historicCommitments[_request.commitment], "the commitment has been submitted");

    historicCommitments[_request.commitment] = true;
    _enqueueCommitment(_request.commitment, _request.rollupFee, _request.encryptedNote);

    if (_request.executorFee > 0) {
      _processExecutorFeeTransfer(_executor, _request.executorFee);
    }
    return true;
  }

  /* @notice              Check rollup request parameter、verify rollup proof and update commitment merkle tree
   *  @param _request     The rollup request parameter
   */
  function rollup(RollupRequest memory _request) external override onlyRollupWhitelisted {
    require(!isKnownRoot(_request.newRoot), "newRoot is duplicated");
    require(
      _request.rollupSize > 0 &&
        _request.rollupSize <= commitmentQueueSize &&
        rollupVerifiers[_request.rollupSize].enabled,
      "invalid rollupSize"
    );
    require(commitmentIncludedCount % _request.rollupSize == 0, "invalid rollupSize at current state");
    uint256 pathIndices = _pathIndices(commitmentIncludedCount, _request.rollupSize);
    uint256[] memory leaves = new uint256[](_request.rollupSize);
    uint256 totalRollupFee = 0;
    for (
      uint256 index = commitmentIncludedCount;
      index < commitmentIncludedCount + _request.rollupSize;
      index++
    ) {
      require(commitmentQueue[index].commitment != 0, "index out of bound");
      uint256 commitment = commitmentQueue[index].commitment;
      leaves[index - commitmentIncludedCount] = commitment;
      totalRollupFee = totalRollupFee + commitmentQueue[index].rollupFee;
      delete commitmentQueue[index];
      commitmentQueueSize = commitmentQueueSize - 1;
      emit CommitmentIncluded(commitment);
    }
    uint256 expectedLeafHash = uint256(keccak256(abi.encodePacked(leaves))) % FIELD_SIZE;
    require(_request.leafHash == expectedLeafHash, "invalid leafHash");
    uint256[] memory inputs = new uint256[](4);
    inputs[0] = currentRoot;
    inputs[1] = _request.newRoot;
    inputs[2] = _request.leafHash;
    inputs[3] = pathIndices;
    bool verified = rollupVerifiers[_request.rollupSize].verifier.verifyTx(_request.proof, inputs);
    require(verified, "invalid proof");
    _processRollupFeeTransfer(totalRollupFee);
    commitmentIncludedCount = commitmentIncludedCount + _request.rollupSize;
    currentRoot = _request.newRoot;
    currentRootIndex = (currentRootIndex + 1) % rootHistoryLength;
    rootHistory[currentRootIndex] = _request.newRoot;
  }

  /* @notice              Check transact request parameter、verify transact proof and do spend
   *  @param _request     The transact request parameter
   *  @param _signature   The signature of the transact request by proffer
   */
  function transact(TransactRequest memory _request, bytes memory _signature)
    external
    payable
    override
    nonReentrant
  {
    uint32 numInputs = uint32(_request.serialNumbers.length);
    uint32 numOutputs = uint32(_request.outCommitments.length);

    // check input and output lengths.
    require(transactVerifiers[numInputs][numOutputs].enabled, "invalid i/o length");
    require(_request.sigHashes.length == numInputs, "invalid sigHashes length");
    require(_request.outRollupFees.length == numOutputs, "invalid outRollupFees length");
    require(_request.outEncryptedNotes.length == numOutputs, "invalid outEncryptedNotes length");
    require(commitmentIncludedCount + commitmentQueueSize + numOutputs <= treeCapacity, "tree is full");
    require(!isSanctioned(_request.publicRecipient), "sanctioned address");

    // check signature
    bytes32 hash = _transactRequestHash(_request);
    address recoveredSigPk = ECDSA.recover(hash, _signature);
    require(_request.sigPk == bytes32(uint256(uint160(recoveredSigPk))), "invalid signature");

    // initialize inputs array for verifying proof.
    uint256[] memory inputs = new uint256[](4 + 2 * numInputs + 2 * numOutputs);

    // check whether valid root.
    require(isKnownRoot(_request.rootHash), "invalid root");
    inputs[0] = _request.rootHash;

    // check serial numbers.
    for (uint32 i = 0; i < numInputs; i++) {
      require(!spentSerialNumbers[_request.serialNumbers[i]], "the note has been spent");
      inputs[i + 1] = _request.serialNumbers[i];
      inputs[i + 1 + numInputs] = _request.sigHashes[i];
    }
    inputs[2 * numInputs + 1] = uint256(_request.sigPk);
    inputs[2 * numInputs + 2] = uint256(_request.publicAmount);
    inputs[2 * numInputs + 3] = uint256(_request.relayerFeeAmount);

    // check rollup fees and output commitments.
    for (uint32 i = 0; i < numOutputs; i++) {
      require(!historicCommitments[_request.outCommitments[i]], "duplicate commitment");
      require(_request.outRollupFees[i] >= minRollupFee, "rollup fee too low");
      inputs[2 * numInputs + 4 + i] = _request.outCommitments[i];
      inputs[2 * numInputs + numOutputs + 4 + i] = _request.outRollupFees[i];
    }

    // verify proof.
    bool verified = transactVerifiers[numInputs][numOutputs].verifier.verifyTx(_request.proof, inputs);
    require(verified, "invalid transact proof");

    // set spent flag for serial numbers.
    for (uint32 i = 0; i < numInputs; i++) {
      spentSerialNumbers[_request.serialNumbers[i]] = true;
      emit CommitmentSpent(_request.rootHash, _request.serialNumbers[i]);
    }

    // enqueue output commitments.
    for (uint32 i = 0; i < numOutputs; i++) {
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
  }

  function toggleRollupWhitelist(bool _state) external onlyOperator {
    rollupWhitelistDisabled = _state;
  }

  function toggleVerifierUpdate(bool _state) external onlyOperator {
    verifierUpdateDisabled = _state;
  }

  function enableTransactVerifier(
    uint32 _numInputs,
    uint32 _numOutputs,
    address _transactVerifier
  ) external onlyOperator {
    require(!verifierUpdateDisabled, "verifier updates have been disabled.");
    require(_numInputs > 0, "numInputs should > 0");
    require(_numOutputs >= 0, "numOutputs should >= 0");
    transactVerifiers[_numInputs][_numOutputs] = WrappedVerifier(IVerifier(_transactVerifier), true);
  }

  function disableTransactVerifier(uint32 _numInputs, uint32 _numOutputs) external onlyOperator {
    require(!verifierUpdateDisabled, "verifier updates have been disabled.");
    require(_numInputs > 0, "numInputs should > 0");
    require(_numOutputs >= 0, "numOutputs should >= 0");
    if (transactVerifiers[_numInputs][_numOutputs].enabled) {
      transactVerifiers[_numInputs][_numOutputs].enabled = false;
    }
  }

  function enableRollupVerifier(uint32 _rollupSize, address _rollupVerifier) external onlyOperator {
    require(!verifierUpdateDisabled, "verifier updates have been disabled.");
    require(_rollupSize > 0, "invalid rollupSize");
    rollupVerifiers[_rollupSize] = WrappedVerifier(IVerifier(_rollupVerifier), true);
  }

  function disableRollupVerifier(uint32 _rollupSize) external onlyOperator {
    require(_rollupSize > 0, "invalid rollupSize");
    require(!verifierUpdateDisabled, "verifier updates have been disabled.");
    if (rollupVerifiers[_rollupSize].enabled) {
      rollupVerifiers[_rollupSize].enabled = false;
    }
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
    require(_minRollupFee > 0, "invalid _minRollupFee");
    minRollupFee = _minRollupFee;
  }

  function changeOperator(address _newOperator) external onlyOperator {
    operator = _newOperator;
  }

  function toggleSanctionCheck(bool _check) external onlyOperator {
    sanctionCheckDisabled = _check;
  }

  function updateSanctionContractAddress(address _sanction) external onlyOperator {
    sanctionsContract = _sanction;
  }

  function isHistoricCommitment(uint256 _commitment) public view returns (bool) {
    return historicCommitments[_commitment];
  }

  function isSpentSerialNumber(uint256 _serialNumber) public view returns (bool) {
    return spentSerialNumbers[_serialNumber];
  }

  function isKnownRoot(uint256 root) public view returns (bool) {
    uint32 i = currentRootIndex;
    do {
      if (root == rootHistory[i]) {
        return true;
      }
      if (i == 0) {
        i = rootHistoryLength;
      }
      i--;
    } while (i != currentRootIndex);
    return false;
  }

  function getTreeCapacity() public view returns (uint256) {
    return treeCapacity;
  }

  function getRootHistoryLength() public view returns (uint32) {
    return rootHistoryLength;
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

  function _enqueueCommitment(
    uint256 _commitment,
    uint256 _rollupFee,
    bytes memory _encryptedNote
  ) internal {
    uint256 leafIndex = commitmentQueueSize + commitmentIncludedCount;
    commitmentQueue[leafIndex] = CommitmentLeaf(_commitment, _rollupFee);
    commitmentQueueSize = commitmentQueueSize + 1;
    emit CommitmentQueued(_commitment, _rollupFee, leafIndex, _encryptedNote);
  }

  function _zeros(uint32 _nth) internal pure returns (uint256) {
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
    }
    return 0;
  }

  function _pathIndices(uint256 _fullPath, uint32 _rollupSize) internal pure returns (uint256) {
    _rollupSize >>= 1;
    while (_rollupSize != 0) {
      _fullPath >>= 1;
      _rollupSize >>= 1;
    }
    return _fullPath;
  }

  function _transactRequestHash(TransactRequest memory _request) internal pure returns (bytes32) {
    bytes memory requestBytes = abi.encodePacked(_request.publicRecipient, _request.relayerAddress);
    for (uint32 i = 0; i < _request.outEncryptedNotes.length; i++) {
      requestBytes = abi.encodePacked(requestBytes, _request.outEncryptedNotes[i]);
    }
    return ECDSA.toEthSignedMessageHash(keccak256(requestBytes));
  }
}
