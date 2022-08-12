// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../../libs/asset/AssetPool.sol";
import "../../../libs/common/CustomErrors.sol";
import "../../../libs/verifiers/Pairing.sol";
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
  address private serviceFeeCollector;
  // the service fee takes from depositer
  uint256 private serviceFee;
  uint256 private serviceFeeDivider;

  // Some switches.
  bool private depositsDisabled;

  modifier onlyOperator() {
    if (msg.sender != operator) revert CustomErrors.OnlyOperator();
    _;
  }

  constructor(IHasher3 _hasher3) {
    operator = msg.sender;
    hasher3 = _hasher3;
    serviceFee = 1000;
    serviceFeeDivider = 1000000;
  }

  event OperatorChanged(address indexed operator);
  event MinAmount(uint256 minAmount);
  event MaxAmount(uint256 maxAmount);
  event DepositsDisabled(bool state);
  event ServiceFeeCollectorChanged(address indexed collector);
  event ServiceFeeChanged(uint256 serviceFee);
  event ServiceFeeDividerChanged(uint256 serviceFeeDivider);

  function setAssociatedCommitmentPool(address _commitmentPoolAddress) external onlyOperator {
    associatedCommitmentPool = _commitmentPoolAddress;
  }

  function setMinAmount(uint256 _minAmount) external onlyOperator {
    minAmount = _minAmount;
    emit MinAmount(_minAmount);
  }

  function setMaxAmount(uint256 _maxAmount) external onlyOperator {
    maxAmount = _maxAmount;
    emit MaxAmount(_maxAmount);
  }

  function _commitmentHash(
    uint256 _hashK,
    uint256 _amount,
    uint128 _randomS
  ) internal view returns (uint256) {
    uint256 fieldSize = Pairing.FIELD_SIZE;
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

    // todo 1 check commitment in queue
    ICommitmentPool(associatedCommitmentPool).enqueue(cmRequest, address(0));
    _processDepositTransfer(
      associatedCommitmentPool,
      serviceFeeCollector,
      serviceFee.mul(_amount).div(serviceFeeDivider),
      _amount + _rollupFee,
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

  function getServiceFeeCollector() public view returns (address) {
    return serviceFeeCollector;
  }

  function changeServiceFeeCollector(address _newCollector) external onlyOperator {
    if (serviceFeeCollector == _newCollector) revert CustomErrors.NotChanged();
    serviceFeeCollector = _newCollector;
    emit ServiceFeeCollectorChanged(_newCollector);
  }

  function getServiceFee() public view returns (uint256) {
    return serviceFee;
  }

  function changeServiceFee(uint256 _newServiceFee) external onlyOperator {
    if (serviceFee == _newServiceFee) revert CustomErrors.NotChanged();
    serviceFee = _newServiceFee;
    emit ServiceFeeChanged(_newServiceFee);
  }

  function getServiceFeeDivider() public view returns (uint256) {
    return serviceFeeDivider;
  }

  function changeServiceFeeDivider(uint256 _newServiceFeeDivider) external onlyOperator {
    if (serviceFeeDivider == _newServiceFeeDivider) revert CustomErrors.NotChanged();
    if (_newServiceFeeDivider == 0) revert CustomErrors.ServiceFeeDividerTooSmall();
    serviceFeeDivider = _newServiceFeeDivider;
    emit ServiceFeeDividerChanged(_newServiceFeeDivider);
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
