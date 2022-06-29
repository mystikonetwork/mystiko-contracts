// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../../libs/asset/AssetPool.sol";
import "../../../libs/common/DataTypes.sol";
import "../../../interface/IMystikoLoop.sol";
import "../../../interface/IHasher3.sol";
import "../../../interface/ICommitmentPool.sol";
import "../../../interface/ISanctionsList.sol";
import "../../rule/Sanctions.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

abstract contract MystikoV2Loop is IMystikoLoop, AssetPool, Sanctions {
  // Hasher related.
  IHasher3 private hasher3;

  address private associatedCommitmentPool;
  uint256 private minAmount;

  // Admin related.
  address private operator;

  // Some switches.
  bool private depositsDisabled;

  modifier onlyOperator() {
    require(msg.sender == operator, "only operator.");
    _;
  }

  constructor(IHasher3 _hasher3) {
    operator = msg.sender;
    hasher3 = _hasher3;
  }

  event MinAmount(uint256 minAmount);
  event DepositsDisabled(bool state);
  event OperatorChanged(address operator);

  function setAssociatedCommitmentPool(address _commitmentPoolAddress) external onlyOperator {
    associatedCommitmentPool = _commitmentPoolAddress;
  }

  function setMinAmount(uint256 _minAmount) external onlyOperator {
    minAmount = _minAmount;
    emit MinAmount(_minAmount);
  }

  function _commitmentHash(
    uint256 _hashK,
    uint256 _amount,
    uint128 _randomS
  ) internal view returns (uint256) {
    require(_hashK < DataTypes.FIELD_SIZE, "hashK should be less than FIELD_SIZE");
    require(_randomS < DataTypes.FIELD_SIZE, "randomS should be less than FIELD_SIZE");
    return hasher3.poseidon([_hashK, _amount, _randomS]);
  }

  /* @notice              Check deposit request parameter and process deposit
   *  @param _request     The transact request parameter
   */
  function deposit(DepositRequest memory _request) external payable override {
    require(!depositsDisabled, "deposits are disabled");
    require(_request.amount >= minAmount, "amount too small");
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
    ICommitmentPool.CommitmentRequest memory cmRequest = ICommitmentPool.CommitmentRequest({
      amount: _amount,
      commitment: _commitment,
      executorFee: 0,
      rollupFee: _rollupFee,
      encryptedNote: _encryptedNote
    });

    // todo 1 check commitment in queue
    ICommitmentPool(associatedCommitmentPool).enqueue(cmRequest, address(0));
    _processDepositTransfer(associatedCommitmentPool, _amount + _rollupFee, 0);
  }

  function setDepositsDisabled(bool _state) external onlyOperator {
    depositsDisabled = _state;
    emit DepositsDisabled(_state);
  }

  function changeOperator(address _newOperator) external onlyOperator {
    operator = _newOperator;
    emit OperatorChanged(_newOperator);
  }

  function setSanctionCheckDisabled(bool _state) external onlyOperator {
    sanctionsCheckDisabled = _state;
    emit SanctionsCheckDisabled(_state);
  }

  function updateSanctionsListAddress(ISanctionsList _sanction) external onlyOperator {
    sanctionsList = _sanction;
    emit SanctionsList(_sanction);
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
