// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./MystikoV2Celer.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2CelerMain is MystikoV2Celer, MainAssetPool {
  constructor(IHasher3 _hasher3) MystikoV2Celer(_hasher3) {
    // implemented in MystikoV2Celer
  }
}
