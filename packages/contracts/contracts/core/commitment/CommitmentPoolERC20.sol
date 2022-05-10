// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CommitmentPool.sol";
import "../../libs/asset/ERC20AssetPool.sol";

contract CommitmentPoolERC20 is CommitmentPool, ERC20AssetPool {
  constructor(
    uint32 _treeHeight,
    uint32 _rootHistoryLength,
    address _token
  ) CommitmentPool(_treeHeight, _rootHistoryLength) ERC20AssetPool(_token) {}
}
