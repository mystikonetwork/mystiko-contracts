// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2TBridgeMain is MystikoV2TBridge, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    BridgeLocalConfig memory _localConfig,
    BridgePeerConfig memory _peerConfig
  ) MystikoV2TBridge(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig) {
    // implemented in MystikoV2TBridge
  }
}
