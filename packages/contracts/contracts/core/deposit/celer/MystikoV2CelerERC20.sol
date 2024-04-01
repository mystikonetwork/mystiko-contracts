// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2Celer.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2CelerERC20 is MystikoV2Celer, ERC20AssetPool {
  constructor(IHasher3 _hasher3, IERC20Metadata _token) MystikoV2Celer(_hasher3) ERC20AssetPool(_token) {
    // implemented in MystikoV2Celer
  }
}
