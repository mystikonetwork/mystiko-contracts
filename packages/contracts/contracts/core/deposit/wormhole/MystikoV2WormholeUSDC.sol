// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../libs/utils/Utils.sol";
import "../../../interfaces/IHasher3.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interfaces/wormhole/IWormholeBridge.sol";
import "lib/wormhole-sdk/src/WormholeRelayerSDK.sol";

contract MystikoV2WormholeUSDC is MystikoV2Bridge, CCTPSender, CCTPReceiver, ERC20AssetPool {
  using SafeERC20 for IERC20Metadata;

  uint16 public peerWormholeChainId;

  constructor(
    IHasher3 _hasher3,
    address _settingsCenter,
    BridgeLocalConfig memory _localConfig,
    BridgePeerConfig memory _peerConfig,
    BridgeWormholeCCTPConfig memory _wormhole
  )
    MystikoV2Bridge(_hasher3, address(0), _settingsCenter, _localConfig, _peerConfig)
    CCTPBase(
      _wormhole.wormholeRelayer,
      _wormhole.wormhole,
      _wormhole.circleMessageTransmitter,
      _wormhole.circleTokenMessenger,
      _wormhole.USDCToken
    )
    ERC20AssetPool(IERC20Metadata(_wormhole.USDCToken))
  {
    if (_localConfig.minBridgeFee != 0) revert CustomErrors.Invalid("min bridge fee");
    if (_peerConfig.peerMinExecutorFee != 0) revert CustomErrors.Invalid("peer min executor fee");
    peerWormholeChainId = _wormhole.peerWormholeChainId;
    setCCTPDomain(2, 0); //Ethereum
    setCCTPDomain(5, 7); //Polygon Pos
    setCCTPDomain(6, 1); //Avalanche / Avalanche Fuji
    setCCTPDomain(23, 3); //Arbitrum
    setCCTPDomain(24, 2); //OP (Optimism)
    setCCTPDomain(30, 6); //Base
    setCCTPDomain(10002, 0); //Ethereum Sepolia
    setCCTPDomain(10004, 6); //Base Sepolia
  }

  function getMinBridgeFee() public view override(MystikoV2Bridge) returns (uint256 cost) {
    uint256 bridgeGasLimit = getBridgeGasLimit();
    (cost, ) = wormholeRelayer.quoteEVMDeliveryPrice(peerWormholeChainId, 0, bridgeGasLimit);
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
    sendUSDCWithPayloadToEvm(
      peerWormholeChainId,
      peerContract, // address (on targetChain) to send token and payload to
      _requestBytes,
      0, // receiver value
      bridgeGasLimit,
      _bridgeAmount
    );
  }

  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal override(AssetPool, ERC20AssetPool) {}

  function receivePayloadAndUSDC(
    bytes memory _payload,
    uint256 _amountUSDCReceived,
    bytes32, //_sourceAddress
    uint16, //_sourceChain
    bytes32 //_deliveryHash
  ) internal override onlyWormholeRelayer {
    // if (_sourceChain != peerWormholeChainId) revert CustomErrors.PeerChainIdNotMatched();
    // if (address(uint160(uint256(_sourceAddress))) != peerContract) revert CustomErrors.PeerContractNotMatched();
    ICommitmentPool.CommitmentRequest memory cmRequest = deserializeTxData(_payload);
    if (cmRequest.amount + cmRequest.rollupFee != _amountUSDCReceived)
      revert CustomErrors.Invalid("amount received");
    if (cmRequest.executorFee != 0) revert CustomErrors.Invalid("executor fee");
    address pool = getAssociatedCommitmentPool();
    asset.safeTransfer(pool, _amountUSDCReceived);
    bridgeCommitment(peerChainId, peerContract, pool, cmRequest);
  }

  function bridgeType() public pure override returns (string memory) {
    return "wormhole";
  }
}
