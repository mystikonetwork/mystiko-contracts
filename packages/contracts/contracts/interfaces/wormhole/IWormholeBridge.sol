// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

struct BridgeWormholeCCTPConfig {
  uint16 peerWormholeChainId;
  uint256 bridgeGasLimit;
  address wormholeRelayer;
  address wormhole;
  address circleMessageTransmitter;
  address circleTokenMessenger;
  address USDCToken;
}

struct BridgeWormholeTokenConfig {
  uint16 peerWormholeChainId;
  uint256 bridgeGasLimit;
  address wormholeRelayer;
  address tokenBridge;
  address wormhole;
  address token;
}
