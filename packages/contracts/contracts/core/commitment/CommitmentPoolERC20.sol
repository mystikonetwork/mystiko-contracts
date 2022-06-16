// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CommitmentPool.sol";
import "../../libs/asset/ERC20AssetPool.sol";

contract CommitmentPoolERC20 is CommitmentPool, ERC20AssetPool {
  constructor(
    uint8 _treeHeight,
    uint32 _rootHistoryLength,
    IERC20Metadata _token
  ) CommitmentPool(_treeHeight, _rootHistoryLength) ERC20AssetPool(_token) {
    // implemented in CommitmentPool
  }
}
