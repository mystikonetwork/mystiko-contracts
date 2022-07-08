// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2TBridgeMain is MystikoV2TBridge, MainAssetPool {
  constructor(IHasher3 _hasher3) MystikoV2TBridge(_hasher3) {
    // implemented in MystikoV2TBridge
  }
}
