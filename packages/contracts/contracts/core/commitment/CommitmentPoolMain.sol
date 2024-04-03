// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CommitmentPool.sol";
import "../../libs/asset/MainAssetPool.sol";

contract CommitmentPoolMain is CommitmentPool, MainAssetPool {
  constructor(
    uint8 _treeHeight,
    address _daoCenter,
    address _settingsCenter
  ) CommitmentPool(_treeHeight, _daoCenter, _settingsCenter) {
    // implemented in CommitmentPool
  }

  receive() external payable {}
}
