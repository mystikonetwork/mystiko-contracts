// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "../base/MystikoV2Loop.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2LoopMain is MystikoV2Loop, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _settingsCenter,
    LoopLocalConfig memory _localConfig
  ) MystikoV2Loop(_hasher3, _settingsCenter, _localConfig) {
    // implemented in MystikoV2Loop
  }
}
