// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../base/MystikoV2Loop.sol";
import "../../../libs/asset/MainAssetPool.sol";
import "../../../interface/IHasher3.sol";

contract MystikoV2LoopMain is MystikoV2Loop, MainAssetPool {
  constructor(
    IHasher3 _hasher3,
    address _daoCenter,
    address _txFeeProxy
  ) MystikoV2Loop(_hasher3, _daoCenter, _txFeeProxy) {
    // implemented in MystikoV2Loop
  }
}
