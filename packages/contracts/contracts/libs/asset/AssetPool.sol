// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract AssetPool {
  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal virtual;

  function _processExecutorFeeTransfer(address executor, uint256 amount) internal virtual;

  function _processRollupFeeTransfer(uint256 amount) internal virtual;

  function _processWithdrawTransfer(address recipient, uint256 amount) internal virtual;

  function assetType() public view virtual returns (string memory);
}
