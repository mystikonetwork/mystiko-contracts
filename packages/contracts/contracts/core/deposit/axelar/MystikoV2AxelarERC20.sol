// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./MystikoV2Axelar.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2AxelarERC20 is MystikoV2Axelar, ERC20AssetPool {
  constructor(IHasher3 _hasher3, IERC20Metadata _token) MystikoV2Axelar(_hasher3) ERC20AssetPool(_token) {
    // implemented in MystikoV2Axelar
  }
}
