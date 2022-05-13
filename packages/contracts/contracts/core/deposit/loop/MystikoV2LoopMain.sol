// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../base/MystikoV2Loop.sol";
import "../../../libs/asset/MainAssetPool.sol";

contract MystikoV2LoopMain is MystikoV2Loop, MainAssetPool {
  constructor(address _hasher3) MystikoV2Loop(_hasher3) {}
}
