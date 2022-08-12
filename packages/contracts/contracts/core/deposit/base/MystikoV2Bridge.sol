// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../../libs/asset/AssetPool.sol";
import "../../../libs/common/CustomErrors.sol";
import "../../../libs/verifiers/Pairing.sol";
import "../../../interface/IMystikoBridge.sol";
import "../../../interface/IHasher3.sol";
import "../../../interface/ICommitmentPool.sol";
import "../../../interface/ISanctionsList.sol";
import "./CrossChainDataSerializable.sol";
import "../../rule/Sanctions.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

abstract contract MystikoV2Bridge is IMystikoBridge, AssetPool, CrossChainDataSerializable, Sanctions {
  using SafeMath for uint256;

  // Hasher related.
  IHasher3 private hasher3;

  address private associatedCommitmentPool;
  uint64 public peerChainId;
  string public peerChainName;
  address public peerContract;

  //bridge proxy address
  address public bridgeProxyAddress;

  //local chain fee
  uint256 private minAmount;
  uint256 private maxAmount;
  uint256 private minBridgeFee;
  uint256 private minExecutorFee;

  //remote chain fee
  uint256 private peerMinExecutorFee;
  uint256 private peerMinRollupFee;

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

  modifier onlyBridgeProxy() {
    if (msg.sender != bridgeProxyAddress) revert CustomErrors.SenderIsNotBridgeProxy();
    _;
  }

  event OperatorChanged(address indexed operator);
  event MinAmount(uint256 minAmount);
  event MaxAmount(uint256 maxAmount);
  event MinBridgeFee(uint256 minBridgeFee);
  event MinExecutorFee(uint256 minExecutorFee);
  event PeerMinExecutorFee(uint256 peerMinExecutorFee);
  event PeerMinRollupFee(uint256 peerMinRollupFee);
  event DepositsDisabled(bool state);
  event ServiceFeeCollectorChanged(address indexed collector);
  event ServiceFeeChanged(uint256 serviceFee);
  event ServiceFeeDividerChanged(uint256 serviceFeeDivider);
  event CommitmentCrossChain(uint256 indexed commitment);

  constructor(IHasher3 _hasher3) {
    operator = msg.sender;
    hasher3 = _hasher3;
    serviceFee = 1000;
    serviceFeeDivider = 1000000;
  }

  function setBridgeProxyAddress(address _bridgeProxyAddress) external onlyOperator {
    bridgeProxyAddress = _bridgeProxyAddress;
  }

  function setMinAmount(uint256 _minAmount) external onlyOperator {
    minAmount = _minAmount;
    emit MinAmount(_minAmount);
  }

  function setMaxAmount(uint256 _maxAmount) external onlyOperator {
    if (_maxAmount < minAmount)
      revert CustomErrors.MaxAmountLessThanMinAmount();
    maxAmount = _maxAmount;
    emit MaxAmount(_maxAmount);
  }

  function setMinBridgeFee(uint256 _minBridgeFee) external onlyOperator {
    minBridgeFee = _minBridgeFee;
    emit MinBridgeFee(_minBridgeFee);
  }

  function setMinExecutorFee(uint256 _minExecutorFee) external onlyOperator {
    minExecutorFee = _minExecutorFee;
    emit MinExecutorFee(_minExecutorFee);
  }

  function setPeerMinExecutorFee(uint256 _peerMinExecutorFee) external onlyOperator {
    peerMinExecutorFee = _peerMinExecutorFee;
    emit PeerMinExecutorFee(_peerMinExecutorFee);
  }

  function setPeerMinRollupFee(uint256 _peerMinRollupFee) external onlyOperator {
    if (_peerMinRollupFee == 0) revert CustomErrors.Invalid("peer minimal rollup fee");
    peerMinRollupFee = _peerMinRollupFee;
    emit PeerMinRollupFee(_peerMinRollupFee);
  }

  function setAssociatedCommitmentPool(address _commitmentPoolAddress) external onlyOperator {
    associatedCommitmentPool = _commitmentPoolAddress;
  }

  function setPeerContract(
    uint64 _peerChainId,
    string memory _peerChainName,
    address _peerContract
  ) external onlyOperator {
    peerChainId = _peerChainId;
    peerChainName = _peerChainName;
    peerContract = _peerContract;
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

  function deposit(DepositRequest memory _request) external payable override {
    if (depositsDisabled) revert CustomErrors.DepositsDisabled();
    if (_request.amount < minAmount) revert CustomErrors.AmountTooSmall();
    if (_request.amount > maxAmount) revert CustomErrors.AmountTooLarge();
    if (_request.bridgeFee < minBridgeFee) revert CustomErrors.BridgeFeeTooFew();
    if (_request.executorFee < peerMinExecutorFee) revert CustomErrors.ExecutorFeeTooFew();
    if (_request.rollupFee < peerMinRollupFee) revert CustomErrors.RollupFeeToFew();
    uint256 calculatedCommitment = _commitmentHash(_request.hashK, _request.amount, _request.randomS);
    if (_request.commitment != calculatedCommitment) revert CustomErrors.CommitmentHashIncorrect();
    if (isSanctioned(msg.sender)) revert CustomErrors.SanctionedAddress();

    // todo check commitment ?
    ICommitmentPool.CommitmentRequest memory cmRequest = ICommitmentPool.CommitmentRequest({
      amount: _request.amount,
      commitment: _request.commitment,
      executorFee: _request.executorFee,
      rollupFee: _request.rollupFee,
      encryptedNote: _request.encryptedNote
    });

    bytes memory cmRequestBytes = serializeTxData(cmRequest);
    _processDeposit(_request.bridgeFee, cmRequestBytes);
    _processDepositTransfer(
      associatedCommitmentPool,
      serviceFeeCollector,
      serviceFee.mul(_request.amount).div(serviceFeeDivider),
      _request.amount + _request.executorFee + _request.rollupFee,
      _request.bridgeFee
    );
    emit CommitmentCrossChain(_request.commitment);
  }

  function _processDeposit(uint256 _bridgeFee, bytes memory _requestBytes) internal virtual;

  function bridgeCommitment(
    uint64 _fromChainId,
    address _fromContract,
    address _executor,
    ICommitmentPool.CommitmentRequest memory _request
  ) internal {
    if (_fromContract != peerContract) revert CustomErrors.FromProxyAddressNotMatched();
    if (_fromChainId != peerChainId) revert CustomErrors.FromChainIdNotMatched();
    if (_request.amount == 0) revert CustomErrors.AmountLessThanZero();
    ICommitmentPool(associatedCommitmentPool).enqueue(_request, _executor);
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

  function bridgeType() public pure virtual returns (string memory);

  function getMinAmount() public view returns (uint256) {
    return minAmount;
  }

  function getMaxAmount() public view returns (uint256) {
    return maxAmount;
  }

  function getMinBridgeFee() public view returns (uint256) {
    return minBridgeFee;
  }

  function getMinExecutorFee() public view returns (uint256) {
    return minExecutorFee;
  }

  function getPeerMinExecutorFee() public view returns (uint256) {
    return peerMinExecutorFee;
  }

  function getPeerMinRollupFee() public view returns (uint256) {
    return peerMinRollupFee;
  }

  function getAssociatedCommitmentPool() public view returns (address) {
    return associatedCommitmentPool;
  }

  function isDepositsDisabled() public view returns (bool) {
    return depositsDisabled;
  }
}
