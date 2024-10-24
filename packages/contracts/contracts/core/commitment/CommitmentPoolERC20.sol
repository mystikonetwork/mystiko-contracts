// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "./CommitmentPool.sol";
import "../../libs/asset/ERC20AssetPool.sol";

contract CommitmentPoolERC20 is CommitmentPool, ERC20AssetPool {
  constructor(
    uint8 _treeHeight,
    uint256 _minRollupFee,
    IERC20Metadata _token,
    address _settingsCenter
  ) CommitmentPool(_treeHeight, _minRollupFee, _settingsCenter) ERC20AssetPool(_token) {
    // implemented in CommitmentPool
  }
}
