// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../libs/utils/Utils.sol";
import "../../../interfaces/IHasher3.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interfaces/wormhole/IWormholeBridge.sol";
import "lib/wormhole-sdk/src/WormholeRelayerSDK.sol";
import {IWETH} from "lib/wormhole-sdk/src/interfaces/token/IWETH.sol";

contract MystikoV2WormholeERC20 is MystikoV2Bridge, TokenSender, TokenReceiver, ERC20AssetPool {
  using SafeERC20 for IERC20Metadata;

  uint16 public peerWormholeChainId;

  constructor(
    IHasher3 _hasher3,
    address _settingsCenter,
    BridgeLocalConfig memory _localConfig,
    BridgePeerConfig memory _peerConfig,
    BridgeWormholeTokenConfig memory _wormhole
  )
    MystikoV2Bridge(_hasher3, address(0), _settingsCenter, _localConfig, _peerConfig)
    TokenBase(_wormhole.wormholeRelayer, _wormhole.tokenBridge, _wormhole.wormhole)
    ERC20AssetPool(IERC20Metadata(_wormhole.token))
  {
    if (_localConfig.minBridgeFee != 0) revert CustomErrors.Invalid("min bridge fee");
    if (_peerConfig.peerMinExecutorFee != 0) revert CustomErrors.Invalid("peer min executor fee");
    peerWormholeChainId = _wormhole.peerWormholeChainId;
  }

  function getMinBridgeFee() public view override(MystikoV2Bridge) returns (uint256 cost) {
    uint256 deliveryCost;
    uint256 bridgeGasLimit = getBridgeGasLimit();
    (deliveryCost, ) = wormholeRelayer.quoteEVMDeliveryPrice(peerWormholeChainId, 0, bridgeGasLimit);
    cost = deliveryCost + wormhole.messageFee();
  }

  function _processDeposit(
    uint256 _bridgeAmount,
    uint256 _bridgeFee,
    bytes memory _requestBytes
  ) internal override {
    uint256 cost = getMinBridgeFee();
    if (_bridgeFee < cost) revert CustomErrors.BridgeFeeTooFew();
    if (_bridgeFee != msg.value) revert CustomErrors.Invalid("msg value");
    asset.safeTransferFrom(msg.sender, address(this), _bridgeAmount);
    uint256 bridgeGasLimit = getBridgeGasLimit();
    sendTokenWithPayloadToEvm(
      peerWormholeChainId,
      peerContract,
      _requestBytes,
      0,
      bridgeGasLimit,
      address(asset),
      _bridgeAmount
    );
  }

  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal override(AssetPool, ERC20AssetPool) {}

  function receivePayloadAndTokens(
    bytes memory _payload,
    TokenReceived[] memory _receivedTokens,
    bytes32, //_sourceAddress
    uint16, //_sourceChain
    bytes32 //_deliveryHash
  ) internal override onlyWormholeRelayer {
    if (_receivedTokens.length != 1) revert CustomErrors.Invalid("tokens received");
    uint256 _bridgeAmount = _receivedTokens[0].amount;
    ICommitmentPool.CommitmentRequest memory cmRequest = deserializeTxData(_payload);
    if (cmRequest.amount + cmRequest.rollupFee != _bridgeAmount)
      revert CustomErrors.Invalid("amount received");
    if (cmRequest.executorFee != 0) revert CustomErrors.Invalid("executor fee");
    address pool = getAssociatedCommitmentPool();
    asset.safeTransfer(pool, _bridgeAmount);
    bridgeCommitment(peerChainId, peerContract, pool, cmRequest);
  }

  function bridgeType() public pure override returns (string memory) {
    return "wormhole";
  }
}
