// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../base/MystikoV2Loop.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2LoopMain is MystikoV2Loop, MainAssetPool {
  constructor(IHasher3 _hasher3) MystikoV2Loop(_hasher3) {
    // implemented in MystikoV2Loop
  }
}
