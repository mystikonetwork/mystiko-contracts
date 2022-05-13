// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2Celer.sol";
import "../../../libs/asset/MainAssetPool.sol";

contract MystikoV2CelerMain is MystikoV2Celer, MainAssetPool {
  constructor(address _hasher3) MystikoV2Celer(_hasher3) {}
}
