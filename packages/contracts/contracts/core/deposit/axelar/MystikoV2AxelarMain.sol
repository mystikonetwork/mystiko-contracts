// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MystikoV2Axelar.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2AxelarMain is MystikoV2Axelar, MainAssetPool {
  constructor(IHasher3 _hasher3, address _daoRegistry) MystikoV2Axelar(_hasher3, _daoRegistry) {
    // implemented in MystikoV2Axelar
  }
}
