// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2LayerZero.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2LayerZeroMain is MystikoV2LayerZero, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _daoCenter
  ) MystikoV2LayerZero(_hasher3, _daoCenter) {
    // implemented in MystikoV2LayerZero
  }
}
