// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "../base/MystikoV2Loop.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2LoopERC20 is MystikoV2Loop, ERC20AssetPool {
  constructor(
    IHasher3 _hasher3,
    IERC20Metadata _token,
    address _settingsCenter,
    LoopLocalConfig memory _localConfig
  ) MystikoV2Loop(_hasher3, _settingsCenter, _localConfig) ERC20AssetPool(_token) {
    // implemented in MystikoV2Loop
  }
}
