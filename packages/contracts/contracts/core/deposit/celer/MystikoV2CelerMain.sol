// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2Celer.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2CelerMain is MystikoV2Celer, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    LocalConfig memory _localConfig,
    PeerConfig memory _peerConfig
  ) MystikoV2Celer(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig) {
    // implemented in MystikoV2Celer
  }
}
