// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2WithTBridge.sol";
import "../../../libs/asset/MainAssetPool.sol";

contract MystikoV2WithTBridgeMain is MystikoV2WithTBridge, MainAssetPool {
  constructor(address _hasher3) MystikoV2WithTBridge(_hasher3) {}
}
