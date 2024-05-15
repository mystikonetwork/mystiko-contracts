// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2TBridgeMain is MystikoV2TBridge, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _daoCenter
  ) MystikoV2TBridge(_hasher3, _daoCenter) {
    // implemented in MystikoV2TBridge
  }
}
