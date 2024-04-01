// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2TBridgeERC20 is MystikoV2TBridge, ERC20AssetPool {
  constructor(IHasher3 _hasher3, IERC20Metadata _token) MystikoV2TBridge(_hasher3) ERC20AssetPool(_token) {
    // implemented in MystikoV2TBridge
  }
}
