// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2TBridgeMain is MystikoV2TBridge, MainAssetPool {
  constructor(IHasher3 _hasher3, address _daoRegistry) MystikoV2TBridge(_hasher3, _daoRegistry) {
    // implemented in MystikoV2TBridge
  }
}
