// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../../libs/asset/AssetPool.sol";
import "../../../interface/IMystikoLoop.sol";
import "../../../interface/IHasher3.sol";
import "../../../interface/ICommitmentPool.sol";
import "../../rule/Sanctions.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

abstract contract MystikoV2Loop is IMystikoLoop, AssetPool, Sanctions {
  uint256 constant FIELD_SIZE = 21888242871839275222246405745257275088548364400416034343698204186575808495617;

  // Hasher related.
  IHasher3 hasher3;

  address associatedCommitmentPool;
  uint256 minAmount;

  // Admin related.
  address operator;

  // Some switches.
  bool depositsDisabled;

  modifier onlyOperator() {
    require(msg.sender == operator, "only operator.");
    _;
  }

  constructor(address _hasher3) {
    operator = msg.sender;
    hasher3 = IHasher3(_hasher3);
  }

  function setAssociatedCommitmentPool(address _commitmentPoolAddress) external onlyOperator {
    associatedCommitmentPool = _commitmentPoolAddress;
  }

  function setMinAmount(uint256 _minAmount) external onlyOperator {
    minAmount = _minAmount;
  }

  function _commitmentHash(
    uint256 _hashK,
    uint256 _amount,
    uint128 _randomS
  ) internal view returns (uint256) {
    require(_hashK < FIELD_SIZE, "hashK should be less than FIELD_SIZE");
    require(_amount < FIELD_SIZE, "randomS should be less than FIELD_SIZE");
    return hasher3.poseidon([_hashK, _amount, uint256(_randomS)]);
  }

  /* @notice              Check deposit request parameter and process deposit
   *  @param _request     The transact request parameter
   */
  function deposit(DepositRequest memory _request) external payable override {
    require(!depositsDisabled, "deposits are disabled");
    require(_request.amount >= minAmount, "amount too few");
    uint256 calculatedCommitment = _commitmentHash(_request.hashK, _request.amount, _request.randomS);
    require(_request.commitment == calculatedCommitment, "commitment hash incorrect");
    require(!isSanctioned(msg.sender), "sanctioned address");

    _processDeposit(_request.amount, _request.commitment, _request.rollupFee, _request.encryptedNote);
  }

  function _processDeposit(
    uint256 _amount,
    uint256 _commitment,
    uint256 _rollupFee,
    bytes memory _encryptedNote
  ) internal {
    _processDepositTransfer(associatedCommitmentPool, _amount + _rollupFee, 0);

    ICommitmentPool.CommitmentRequest memory cmRequest = ICommitmentPool.CommitmentRequest({
      amount: _amount,
      commitment: _commitment,
      executorFee: 0,
      rollupFee: _rollupFee,
      encryptedNote: _encryptedNote
    });

    // todo 1 check commitment in queue
    require(ICommitmentPool(associatedCommitmentPool).enqueue(cmRequest, address(0)), "call enqueue error");
  }

  function toggleDeposits(bool _state) external onlyOperator {
    depositsDisabled = _state;
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

  function bridgeType() public pure returns (string memory) {
    return "loop";
  }

  function getMinAmount() public view returns (uint256) {
    return minAmount;
  }

  function getAssociatedCommitmentPool() public view returns (address) {
    return associatedCommitmentPool;
  }

  function isDepositsDisabled() public view returns (bool) {
    return depositsDisabled;
  }
}
