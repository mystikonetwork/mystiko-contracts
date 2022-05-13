// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/MainAssetPool.sol";

contract MystikoV2TBridgeMain is MystikoV2TBridge, MainAssetPool {
  constructor(address _hasher3) MystikoV2TBridge(_hasher3) {}
}
