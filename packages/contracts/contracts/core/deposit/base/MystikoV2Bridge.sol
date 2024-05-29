// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../../../libs/asset/AssetPool.sol";
import "../../../libs/common/CustomErrors.sol";
import "../../../libs/common/DataTypes.sol";
import "../../../interfaces/IMystikoBridge.sol";
import "../../../interfaces/IHasher3.sol";
import "../../../interfaces/ICommitmentPool.sol";
import "./CrossChainDataSerializable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {SafeCast} from "@openzeppelin/contracts/utils/math/SafeCast.sol";
import {MystikoSettings} from "@mystikonetwork/contracts-settings/contracts/MystikoSettings.sol";
import {CertificateParams} from "@mystikonetwork/contracts-settings/contracts/screen/interfaces/IMystikoCertificate.sol";

abstract contract MystikoV2Bridge is IMystikoBridge, AssetPool, CrossChainDataSerializable {
  using SafeCast for uint256;

  // Hasher related.
  IHasher3 private hasher3;

  bool private isPeerContractSet = false;
  uint64 public peerChainId;
  string public peerChainName;
  address public peerContract;

  //default configure
  uint256 public defaultMinAmount;
  uint256 public defaultMaxAmount;
  uint256 public defaultMinBridgeFee;
  uint256 public defaultPeerMinExecutorFee;
  uint256 public defaultPeerMinRollupFee;

  //bridge proxy address
  address public bridgeProxyAddress;
  // configure related.
  MystikoSettings public settingsCenter;

  modifier onlySetPeerContractOnce() {
    if (isPeerContractSet) revert CustomErrors.PeerContractAlreadySet();
    _;
  }

  modifier onlyBridgeProxy() {
    if (msg.sender != bridgeProxyAddress) revert CustomErrors.SenderIsNotBridgeProxy();
    _;
  }

  event CommitmentCrossChain(uint256 indexed commitment);

  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    LocalConfig memory _localConfig,
    PeerConfig memory _peerConfig
  ) {
    hasher3 = _hasher3;
    bridgeProxyAddress = _bridgeProxyAddress;
    defaultMinAmount = _localConfig.minAmount;
    defaultMaxAmount = _localConfig.maxAmount;
    defaultMinBridgeFee = _localConfig.minBridgeFee;
    defaultPeerMinExecutorFee = _peerConfig.peerMinExecutorFee;
    defaultPeerMinRollupFee = _peerConfig.peerMinRollupFee;
    settingsCenter = MystikoSettings(_settingsCenter);
  }

  function setPeerContract(PeerContract memory _peerContract) external onlySetPeerContractOnce {
    peerChainId = _peerContract.peerChainId;
    peerChainName = _peerContract.peerChainName;
    peerContract = _peerContract.peerContract;
    isPeerContractSet = true;
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

  function deposit(DepositRequest memory _request) external payable override {
    revert CustomErrors.NotSupport();
  }

  function certDeposit(
    DepositRequest memory _request,
    uint256 _certificateDeadline,
    bytes memory _certificateSignature
  ) external payable {
    if (settingsCenter.queryDepositDisable(address(this))) revert CustomErrors.DepositsDisabled();
    if(settingsCenter.checkEnabled()){
      CertificateParams memory params = CertificateParams({
        account: tx.origin,
        asset: assetAddress(),
        deadline: _certificateDeadline,
        signature: _certificateSignature
      });
      if (!settingsCenter.verifyCertificate(params)) revert CustomErrors.CertificateInvalid();
    }
    if (_request.amount < getMinAmount()) revert CustomErrors.AmountTooSmall();
    if (_request.amount > getMaxAmount()) revert CustomErrors.AmountTooLarge();
    if (_request.bridgeFee < getMinBridgeFee()) revert CustomErrors.BridgeFeeTooFew();
    if (_request.executorFee < getPeerMinExecutorFee()) revert CustomErrors.ExecutorFeeTooFew();
    if (_request.rollupFee < getPeerMinRollupFee()) revert CustomErrors.RollupFeeToFew();
    uint256 calculatedCommitment = _commitmentHash(_request.hashK, _request.amount, _request.randomS);
    if (_request.commitment != calculatedCommitment) revert CustomErrors.CommitmentHashIncorrect();
    if (settingsCenter.isSanctioned(tx.origin)) revert CustomErrors.SanctionedAddress();

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
      getAssociatedCommitmentPool(),
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
    ICommitmentPool(getAssociatedCommitmentPool()).enqueue(_request, _executor);
  }

  function bridgeType() public pure virtual returns (string memory);

  function getMinAmount() public view returns (uint256) {
    uint256 minAmount = settingsCenter.queryMinDepositAmount(address(this));
    return minAmount == 0 ? defaultMinAmount : minAmount;
  }

  function getMaxAmount() public view returns (uint256) {
    uint256 maxAmount = settingsCenter.queryMaxDepositAmount(address(this));
    return maxAmount == 0 ? defaultMaxAmount : maxAmount;
  }

  function getMinBridgeFee() public view returns (uint256) {
    uint256 minBridgeFee = settingsCenter.queryMinBridgeFee(address(this));
    return minBridgeFee == 0 ? defaultMinBridgeFee : minBridgeFee;
  }

  function getPeerMinExecutorFee() public view returns (uint256) {
    uint256 minExecutorFee = settingsCenter.queryMinPeerExecutorFee(address(this));
    return minExecutorFee == 0 ? defaultPeerMinExecutorFee : minExecutorFee;
  }

  function getPeerMinRollupFee() public view returns (uint256) {
    uint256 minRollupFee = settingsCenter.queryMinPeerRollupFee(address(this));
    return minRollupFee == 0 ? defaultPeerMinRollupFee : minRollupFee;
  }

  function getAssociatedCommitmentPool() public view returns (address) {
    address pool = settingsCenter.queryAssociatedPool(address(this));
    if (pool == address(0)) revert CustomErrors.AssociatedPoolNotSet();
    return pool;
  }

  function isDepositsDisabled() public view returns (bool) {
    return settingsCenter.queryDepositDisable(address(this));
  }
}
