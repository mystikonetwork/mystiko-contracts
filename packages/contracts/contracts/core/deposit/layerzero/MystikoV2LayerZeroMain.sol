// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2LayerZero.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2LayerZeroMain is MystikoV2LayerZero, MainAssetPool {
  constructor(IHasher3 _hasher3, address _daoRegistry) MystikoV2LayerZero(_hasher3, _daoRegistry) {
    // implemented in MystikoV2LayerZero
  }
}
