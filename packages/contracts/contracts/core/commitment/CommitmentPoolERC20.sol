// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CommitmentPool.sol";
import "../../libs/asset/ERC20AssetPool.sol";

contract CommitmentPoolERC20 is CommitmentPool, ERC20AssetPool {
  constructor(
    uint8 _treeHeight,
    IERC20Metadata _token,
    uint256 _minRollupFee,
    address _settingsCenter
  ) CommitmentPool(_treeHeight, _minRollupFee, _settingsCenter) ERC20AssetPool(_token) {
    // implemented in CommitmentPool
  }
}
