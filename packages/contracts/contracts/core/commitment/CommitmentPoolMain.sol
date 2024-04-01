// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CommitmentPool.sol";
import "../../libs/asset/MainAssetPool.sol";

contract CommitmentPoolMain is CommitmentPool, MainAssetPool {
  constructor(uint8 _treeHeight) CommitmentPool(_treeHeight) {
    // implemented in CommitmentPool
  }

  receive() external payable {}
}
