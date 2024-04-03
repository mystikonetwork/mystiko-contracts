// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

abstract contract AssetPool {
  enum AssetType {
    ERC20,
    Main
  }

  function _processDepositTransfer(
    address commitmentPool,
    address txFeePool,
    uint256 amount,
    uint256 txFeeAmount,
    uint256 bridgeFee
  ) internal virtual;

  function _processExecutorFeeTransfer(address executor, uint256 amount) internal virtual;

  function _processRollupFeeTransfer(uint256 amount) internal virtual;

  function _processWithdrawTransfer(address recipient, uint256 amount) internal virtual;

  function assetType() public view virtual returns (AssetType);

  function assetAddress() public view virtual returns (address);
}
