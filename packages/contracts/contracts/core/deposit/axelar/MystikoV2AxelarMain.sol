// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MystikoV2Axelar.sol";
import "../../../libs/asset/MainAssetPool.sol";

contract MystikoV2AxelarMain is MystikoV2Axelar, MainAssetPool {
  constructor(address _hasher3) MystikoV2Axelar(_hasher3) {}
}
