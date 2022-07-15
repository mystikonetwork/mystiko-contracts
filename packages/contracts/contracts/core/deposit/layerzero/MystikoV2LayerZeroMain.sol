// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./MystikoV2LayerZero.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2LayerZeroMain is MystikoV2LayerZero, MainAssetPool {
  constructor(IHasher3 _hasher3) MystikoV2LayerZero(_hasher3) {
    // implemented in MystikoV2LayerZero
  }
}
