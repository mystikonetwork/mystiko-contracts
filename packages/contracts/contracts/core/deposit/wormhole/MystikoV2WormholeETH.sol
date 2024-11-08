// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../libs/utils/Utils.sol";
import "../../../interfaces/IHasher3.sol";
import "../../../interfaces/IERC20Metadata.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/wormhole/IWormholeBridge.sol";
import "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
import "lib/wormhole-sdk/src/WormholeRelayerSDK.sol";
import {IWETH} from "lib/wormhole-sdk/src/interfaces/token/IWETH.sol";

contract MystikoV2WormholeETH is MystikoV2Bridge, TokenSender, TokenReceiver, MainAssetPool {
  using SafeERC20 for IERC20Metadata;

  //todo add to settings center config
  uint256 public bridgeGasLimit;
  uint16 public peerWormholeChainId;

  receive() external payable {}

  constructor(
    IHasher3 _hasher3,
    address _settingsCenter,
    BridgeLocalConfig memory _localConfig,
    BridgePeerConfig memory _peerConfig,
    BridgeWormholeTokenConfig memory _wormhole
  )
    MystikoV2Bridge(_hasher3, address(0), _settingsCenter, _localConfig, _peerConfig)
    TokenBase(_wormhole.wormholeRelayer, _wormhole.tokenBridge, _wormhole.wormhole)
  {
    if (_localConfig.minBridgeFee != 0) revert CustomErrors.Invalid("min bridge fee");
    if (_peerConfig.peerMinExecutorFee != 0) revert CustomErrors.Invalid("peer min executor fee");
    if (_wormhole.bridgeGasLimit < 400_000) revert CustomErrors.Invalid("bridge gas limit");

    bridgeGasLimit = _wormhole.bridgeGasLimit;
    peerWormholeChainId = _wormhole.peerWormholeChainId;
  }

  function getMinBridgeFee() public view override(MystikoV2Bridge) returns (uint256 cost) {
    uint256 deliveryCost;
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
    if (_bridgeFee + _bridgeAmount != msg.value) revert CustomErrors.Invalid("msg value");
    IWETH wrappedNativeToken = IWETH(tokenBridge.WETH());
    wrappedNativeToken.deposit{value: _bridgeAmount}();
    sendTokenWithPayloadToEvm(
      peerWormholeChainId,
      peerContract,
      _requestBytes,
      0,
      bridgeGasLimit,
      address(wrappedNativeToken),
      _bridgeAmount
    );
  }

  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal override(AssetPool, MainAssetPool) {}

  function receivePayloadAndTokens(
    bytes memory _payload,
    TokenReceived[] memory _receivedTokens,
    bytes32, // sourceAddress
    uint16, //_sourceChain,
    bytes32 // deliveryHash
  ) internal override onlyWormholeRelayer {
    if (_receivedTokens.length != 1) revert CustomErrors.Invalid("tokens received");
    uint256 _bridgeAmount = _receivedTokens[0].amount;
    ICommitmentPool.CommitmentRequest memory cmRequest = deserializeTxData(_payload);
    if (cmRequest.amount + cmRequest.rollupFee != _bridgeAmount)
      revert CustomErrors.Invalid("amount received");
    if (cmRequest.executorFee != 0) revert CustomErrors.Invalid("executor fee");

    IWETH wrappedNativeToken = IWETH(tokenBridge.WETH());
    wrappedNativeToken.withdraw(_bridgeAmount);
    address pool = getAssociatedCommitmentPool();
    (bool success, ) = pool.call{value: _bridgeAmount}("");
    if (!success) revert CustomErrors.Invalid("transfer to pool");
    bridgeCommitment(peerChainId, peerContract, pool, cmRequest);
  }

  function bridgeType() public pure override returns (string memory) {
    return "wormhole";
  }
}
