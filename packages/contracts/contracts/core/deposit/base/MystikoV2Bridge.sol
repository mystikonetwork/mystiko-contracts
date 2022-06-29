// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../../../libs/asset/AssetPool.sol";
import "../../../libs/common/DataTypes.sol";
import "../../../libs/common/CustomErrors.sol";
import "../../../interface/IMystikoBridge.sol";
import "../../../interface/IHasher3.sol";
import "../../../interface/ICommitmentPool.sol";
import "../../../interface/ISanctionsList.sol";
import "./CrossChainDataSerializable.sol";
import "../../rule/Sanctions.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

abstract contract MystikoV2Bridge is IMystikoBridge, AssetPool, CrossChainDataSerializable, Sanctions {
  // Hasher related.
  IHasher3 hasher3;

  address associatedCommitmentPool;
  uint64 peerChainId;
  string peerChainName;
  address peerContract;

  //bridge proxy address
  address bridgeProxyAddress;

  //local chain fee
  uint256 minAmount;
  uint256 minBridgeFee;
  uint256 minExecutorFee;

  //remote chain fee
  uint256 peerMinExecutorFee;
  uint256 peerMinRollupFee;

  // Admin related.
  address operator;

  // Some switches.
  bool depositsDisabled;

  modifier onlyOperator() {
    if (msg.sender != operator)
      revert CustomErrors.Unauthorized("only operator.");
    _;
  }

  modifier onlyBridgeProxy() {
    if (msg.sender != bridgeProxyAddress)
      revert CustomErrors.Unexpected("msg sender is not bridge proxy");
    _;
  }

  event CommitmentCrossChain(uint256 indexed commitment);

  constructor(IHasher3 _hasher3) {
    operator = msg.sender;
    hasher3 = _hasher3;
  }

  function setBridgeProxyAddress(address _bridgeProxyAddress) external onlyOperator {
    bridgeProxyAddress = _bridgeProxyAddress;
  }

  function setMinAmount(uint256 _minAmount) external onlyOperator {
    minAmount = _minAmount;
  }

  function setMinBridgeFee(uint256 _minBridgeFee) external onlyOperator {
    minBridgeFee = _minBridgeFee;
  }

  function setMinExecutorFee(uint256 _minExecutorFee) external onlyOperator {
    minExecutorFee = _minExecutorFee;
  }

  function setPeerMinExecutorFee(uint256 _peerMinExecutorFee) external onlyOperator {
    peerMinExecutorFee = _peerMinExecutorFee;
  }

  function setPeerMinRollupFee(uint256 _peerMinRollupFee) external onlyOperator {
    if (_peerMinRollupFee <= 0)
      revert CustomErrors.Invalid("invalid peer minimal rollup fee");
    peerMinRollupFee = _peerMinRollupFee;
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
    if (_hashK >= DataTypes.FIELD_SIZE)
      revert CustomErrors.Unexpected("hashK should be less than FIELD_SIZE");
    if (_randomS >= DataTypes.FIELD_SIZE)
      revert CustomErrors.Unexpected("randomS should be less than FIELD_SIZE");
    return hasher3.poseidon([_hashK, _amount, uint256(_randomS)]);
  }

  function deposit(DepositRequest memory _request) external payable override {
    if (depositsDisabled)
      revert CustomErrors.Unexpected("deposits are disabled");
    if (_request.amount < minAmount)
      revert CustomErrors.Unexpected("amount too small");
    if (_request.bridgeFee < minBridgeFee)
      revert CustomErrors.Unexpected("bridge fee too few");
    if (_request.executorFee < peerMinExecutorFee)
      revert CustomErrors.Unexpected("executor fee too few");
    if (_request.rollupFee < peerMinRollupFee)
      revert CustomErrors.Unexpected("rollup fee too few");
    uint256 calculatedCommitment = _commitmentHash(_request.hashK, _request.amount, _request.randomS);
    if (_request.commitment != calculatedCommitment)
      revert CustomErrors.Unexpected("commitment hash incorrect");
    if (isSanctioned(msg.sender))
      revert CustomErrors.Unexpected("sanctioned address");

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
    if (_fromContract != peerContract)
      revert CustomErrors.Unexpected("from proxy address not matched");
    if (_fromChainId != peerChainId)
      revert CustomErrors.Unexpected("from chain id not matched");
    if (_request.amount <= 0)
      revert CustomErrors.Unexpected("amount should be greater than 0");
    ICommitmentPool(associatedCommitmentPool).enqueue(_request, _executor);
  }

  function setDepositsDisabled(bool _state) external onlyOperator {
    depositsDisabled = _state;
  }

  function changeOperator(address _newOperator) external onlyOperator {
    operator = _newOperator;
  }

  function setSanctionCheckDisabled(bool _state) external onlyOperator {
    sanctionsCheckDisabled = _state;
    emit SanctionsCheckDisabled(_state);
  }

  function updateSanctionsListAddress(ISanctionsList _sanction) external onlyOperator {
    sanctionsList = _sanction;
    emit SanctionsList(_sanction);
  }

  function bridgeType() public pure virtual returns (string memory);

  function getMinAmount() public view returns (uint256) {
    return minAmount;
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
