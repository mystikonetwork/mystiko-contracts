// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2Axelar.sol";
import "../../../libs/asset/ERC20AssetPool.sol";

contract MystikoV2AxelarERC20 is MystikoV2Axelar, ERC20AssetPool {
  constructor(address _hasher3, address _token) MystikoV2Axelar(_hasher3) ERC20AssetPool(_token) {}
}
