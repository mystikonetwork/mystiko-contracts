// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2WithTBridge.sol";
import "../../../libs/asset/ERC20AssetPool.sol";

contract MystikoV2WithTBridgeERC20 is MystikoV2WithTBridge, ERC20AssetPool {
  constructor(address _hasher3, address _token) MystikoV2WithTBridge(_hasher3) ERC20AssetPool(_token) {}
}
