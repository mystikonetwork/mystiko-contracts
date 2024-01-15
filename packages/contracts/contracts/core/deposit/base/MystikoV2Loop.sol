// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../../libs/asset/AssetPool.sol";
import "../../../libs/common/CustomErrors.sol";
import "../../../libs/common/DataTypes.sol";
import "../../../interface/IMystikoLoop.sol";
import "../../../interface/IHasher3.sol";
import "../../../interface/ICommitmentPool.sol";
import "../../../interface/ISanctionsList.sol";
import "../../rule/Sanctions.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

abstract contract MystikoV2Loop is IMystikoLoop, AssetPool, Sanctions {
  using SafeMath for uint256;

  // Hasher related.
  IHasher3 private hasher3;

  address private associatedCommitmentPool;
  uint256 private minAmount;
  uint256 private maxAmount;

  // Admin related.
  address private operator;

  // service fee related.
  address private serviceFeePool;
  uint256 private serviceFeeRate;
  uint256 private serviceFeeBase;

  // Some switches.
  bool private depositsDisabled;

  modifier onlyOperator() {
    if (msg.sender != operator) revert CustomErrors.OnlyOperator();
    _;
  }

  constructor(IHasher3 _hasher3) {
    operator = msg.sender;
    hasher3 = _hasher3;
    serviceFeeRate = 10;
    serviceFeeBase = 10000;
  }

  event OperatorChanged(address indexed operator);
  event DepositAmountLimits(uint256 maxAmount, uint256 minAmount);
  event DepositsDisabled(bool state);
  event ServiceFeePoolChanged(address indexed feePool);
  event ServiceFeeRateChanged(uint256 feeRate);
  event ServiceFeeBaseChanged(uint256 feeBase);

  function setAssociatedCommitmentPool(address _commitmentPoolAddress) external onlyOperator {
    associatedCommitmentPool = _commitmentPoolAddress;
  }

  function updateDepositAmountLimits(uint256 _maxAmount, uint256 _minAmount) external onlyOperator {
    if (_minAmount > _maxAmount) revert CustomErrors.MinAmountGreaterThanMaxAmount();
    maxAmount = _maxAmount;
    minAmount = _minAmount;
    emit DepositAmountLimits(_maxAmount, _minAmount);
  }

  function _commitmentHash(
    uint256 _hashK,
    uint256 _amount,
    uint128 _randomS
  ) internal view returns (uint256) {
    uint256 fieldSize = DataTypes.FIELD_SIZE;
    if (_hashK >= fieldSize) revert CustomErrors.HashKGreaterThanFieldSize();
    if (_randomS >= fieldSize) revert CustomErrors.RandomSGreaterThanFieldSize();
    return hasher3.poseidon([_hashK, _amount, _randomS]);
  }

  /* @notice              Check deposit request parameter and process deposit
   *  @param _request     The transact request parameter
   */
  function deposit(DepositRequest memory _request) external payable override {
    if (depositsDisabled) revert CustomErrors.DepositsDisabled();
    if (_request.amount < minAmount) revert CustomErrors.AmountTooSmall();
    if (_request.amount > maxAmount) revert CustomErrors.AmountTooLarge();
    uint256 calculatedCommitment = _commitmentHash(_request.hashK, _request.amount, _request.randomS);
    if (_request.commitment != calculatedCommitment) revert CustomErrors.CommitmentHashIncorrect();
    if (isSanctioned(msg.sender)) revert CustomErrors.SanctionedAddress();

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

    ICommitmentPool(associatedCommitmentPool).enqueue(cmRequest, address(0));
    _processDepositTransfer(
      associatedCommitmentPool,
      serviceFeePool,
      _amount + _rollupFee,
      serviceFeeRate.mul(_amount).div(serviceFeeBase),
      0
    );
  }

  function setDepositsDisabled(bool _state) external onlyOperator {
    depositsDisabled = _state;
    emit DepositsDisabled(_state);
  }

  function changeOperator(address _newOperator) external onlyOperator {
    if (operator == _newOperator) revert CustomErrors.NotChanged();
    operator = _newOperator;
    emit OperatorChanged(_newOperator);
  }

  function getServiceFeePool() public view returns (address) {
    return serviceFeePool;
  }

  function changeServiceFeePool(address _newServiceFeePool) external onlyOperator {
    if (serviceFeePool == _newServiceFeePool) revert CustomErrors.NotChanged();
    serviceFeePool = _newServiceFeePool;
    emit ServiceFeePoolChanged(serviceFeePool);
  }

  function getServiceFeeRate() public view returns (uint256) {
    return serviceFeeRate;
  }

  function setServiceFeeRate(uint256 _newServiceFeeRate) external onlyOperator {
    if (serviceFeeRate == _newServiceFeeRate) revert CustomErrors.NotChanged();
    serviceFeeRate = _newServiceFeeRate;
    emit ServiceFeeRateChanged(serviceFeeRate);
  }

  function getServiceFeeBase() public view returns (uint256) {
    return serviceFeeBase;
  }

  function setServiceFeeBase(uint256 _newServiceFeeBase) external onlyOperator {
    if (serviceFeeBase == _newServiceFeeBase) revert CustomErrors.NotChanged();
    if (_newServiceFeeBase == 0) revert CustomErrors.ServiceFeeBaseTooSmall();
    serviceFeeBase = _newServiceFeeBase;
    emit ServiceFeeBaseChanged(serviceFeeBase);
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

  function bridgeType() public pure returns (string memory) {
    return "loop";
  }

  function getMinAmount() public view returns (uint256) {
    return minAmount;
  }

  function getMaxAmount() public view returns (uint256) {
    return maxAmount;
  }

  function getAssociatedCommitmentPool() public view returns (address) {
    return associatedCommitmentPool;
  }

  function isDepositsDisabled() public view returns (bool) {
    return depositsDisabled;
  }
}
