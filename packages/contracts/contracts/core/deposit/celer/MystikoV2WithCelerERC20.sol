// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2WithCeler.sol";
import "../../../libs/asset/ERC20AssetPool.sol";

contract MystikoV2WithCelerERC20 is MystikoV2WithCeler, ERC20AssetPool {
  constructor(address _hasher3, address _token) MystikoV2WithCeler(_hasher3) ERC20AssetPool(_token) {}
}
