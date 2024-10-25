// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

abstract contract AssetPool {
  enum AssetType {
    ERC20,
    Main
  }

  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal virtual;

  function _processExecutorFeeTransfer(address executor, uint256 amount) internal virtual;

  function _processRollupFeeTransfer(uint256 amount) internal virtual;

  function _processWithdrawTransfer(address recipient, uint256 amount) internal virtual;

  function assetType() public view virtual returns (AssetType);

  function assetAddress() public view virtual returns (address);
}
