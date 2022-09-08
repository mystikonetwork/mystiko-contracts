// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./AssetPool.sol";

abstract contract MainAssetPool is AssetPool {
  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal virtual override {
    require(msg.value == amount + bridgeFee, "insufficient token");
    (bool ba, ) = commitmentPool.call{value: amount}("");
    require(ba, "amount transfer failed");
  }

  function _processExecutorFeeTransfer(address executor, uint256 amount) internal override {
    (bool success, ) = executor.call{value: amount}("");
    require(success, "executor fee transfer failed");
  }

  function _processRollupFeeTransfer(uint256 amount) internal override {
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "rollup fee transfer failed");
  }

  function _processWithdrawTransfer(address recipient, uint256 amount) internal override {
    (bool success, ) = recipient.call{value: amount}("");
    require(success, "withdraw failed");
  }

  function assetType() public pure override returns (AssetType) {
    return AssetType.Main;
  }
}
