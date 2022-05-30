// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2LayerZero.sol";
import "../../../libs/asset/MainAssetPool.sol";

contract MystikoV2LayerZeroMain is MystikoV2LayerZero, MainAssetPool {
  constructor(address _hasher3) MystikoV2LayerZero(_hasher3) {}
}
