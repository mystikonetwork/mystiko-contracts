// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CommitmentPool.sol";
import "../../libs/asset/MainAssetPool.sol";

contract CommitmentPoolMain is CommitmentPool, MainAssetPool {
  constructor(
    uint8 _treeHeight,
    address _daoRegistry,
    address _settingsCenter
  ) CommitmentPool(_treeHeight, _daoRegistry, _settingsCenter) {
    // implemented in CommitmentPool
  }

  receive() external payable {}
}
