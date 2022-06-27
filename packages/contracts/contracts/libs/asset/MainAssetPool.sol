// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AssetPool.sol";
import "../../libs/common/CustomErrors.sol";

abstract contract MainAssetPool is AssetPool {
  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal virtual override {
    if (msg.value != amount + bridgeFee)
      revert CustomErrors.InsufficientBalance("insufficient token");
    (bool success, ) = commitmentPool.call{value: amount}("");
    if (!success)
      revert CustomErrors.Failed("amount transfer failed");
  }

  function _processExecutorFeeTransfer(address executor, uint256 amount) internal override {
    (bool success, ) = executor.call{value: amount}("");
    if (!success)
      revert CustomErrors.Failed("executor fee transfer failed");
  }

  function _processRollupFeeTransfer(uint256 amount) internal override {
    (bool success, ) = msg.sender.call{value: amount}("");
    if (!success)
      revert CustomErrors.Failed("rollup fee transfer failed");
  }

  function _processWithdrawTransfer(address recipient, uint256 amount) internal override {
    (bool success, ) = recipient.call{value: amount}("");
    if (!success)
      revert CustomErrors.Failed("withdraw failed");
  }

  function assetType() public pure override returns (AssetType) {
    return AssetType.Main;
  }
}
