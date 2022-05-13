// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/ERC20AssetPool.sol";

contract MystikoV2TBridgeERC20 is MystikoV2TBridge, ERC20AssetPool {
  constructor(address _hasher3, address _token) MystikoV2TBridge(_hasher3) ERC20AssetPool(_token) {}
}
