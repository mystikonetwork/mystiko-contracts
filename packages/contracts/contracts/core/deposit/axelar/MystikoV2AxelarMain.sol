// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "./MystikoV2Axelar.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2AxelarMain is MystikoV2Axelar, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    LocalConfig memory _localConfig,
    PeerConfig memory _peerConfig,
    address _gasReceiver
  ) MystikoV2Axelar(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig, _gasReceiver) {
    // implemented in MystikoV2Axelar
  }
}
