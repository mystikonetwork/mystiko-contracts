// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2LayerZero.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2LayerZeroERC20 is MystikoV2LayerZero, ERC20AssetPool {
  constructor(IHasher3 _hasher3, IERC20Metadata _token) MystikoV2LayerZero(_hasher3) ERC20AssetPool(_token) {
    // implemented in MystikoV2LayerZero
  }
}
