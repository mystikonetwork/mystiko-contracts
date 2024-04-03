// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2TBridgeMain is MystikoV2TBridge, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _daoCenter,
    address _txFeeProxy
  ) MystikoV2TBridge(_hasher3, _daoCenter, _txFeeProxy) {
    // implemented in MystikoV2TBridge
  }
}
