// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2Celer.sol";
import "../../../libs/asset/ERC20AssetPool.sol";

contract MystikoV2CelerERC20 is MystikoV2Celer, ERC20AssetPool {
  constructor(address _hasher3, address _token) MystikoV2Celer(_hasher3) ERC20AssetPool(_token) {}
}
