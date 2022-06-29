// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./MystikoV2Axelar.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2AxelarMain is MystikoV2Axelar, MainAssetPool {
  constructor(IHasher3 _hasher3) MystikoV2Axelar(_hasher3) {
    // implemented in MystikoV2Axelar
  }
}
