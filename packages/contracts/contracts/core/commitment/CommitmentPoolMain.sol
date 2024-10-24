// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "./CommitmentPool.sol";
import "../../libs/asset/MainAssetPool.sol";

contract CommitmentPoolMain is CommitmentPool, MainAssetPool {
  constructor(
    uint8 _treeHeight,
    uint256 _minRollupFee,
    address _settingsCenter
  ) CommitmentPool(_treeHeight, _minRollupFee, _settingsCenter) {
    // implemented in CommitmentPool
  }

  receive() external payable {}
}
