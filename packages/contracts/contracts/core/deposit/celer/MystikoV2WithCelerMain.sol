// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2WithCeler.sol";
import "../../../libs/asset/MainAssetPool.sol";

contract MystikoV2WithCelerMain is MystikoV2WithCeler, MainAssetPool {
  constructor(address _hasher3) MystikoV2WithCeler(_hasher3) {}
}
