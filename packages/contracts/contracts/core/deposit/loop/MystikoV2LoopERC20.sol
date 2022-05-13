// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../base/MystikoV2Loop.sol";
import "../../../libs/asset/ERC20AssetPool.sol";

contract MystikoV2LoopERC20 is MystikoV2Loop, ERC20AssetPool {
  constructor(address _hasher3, address _token) MystikoV2Loop(_hasher3) ERC20AssetPool(_token) {}
}
