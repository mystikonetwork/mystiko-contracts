// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "./MystikoV2LayerZero.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2LayerZeroMain is MystikoV2LayerZero, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    BridgeLocalConfig memory _localConfig,
    BridgePeerConfig memory _peerConfig
  ) MystikoV2LayerZero(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig) {
    // implemented in MystikoV2LayerZero
  }
}
