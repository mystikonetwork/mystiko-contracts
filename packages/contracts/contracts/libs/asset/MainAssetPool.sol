// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./AssetPool.sol";

abstract contract MainAssetPool is AssetPool {
  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal virtual override {
    require(msg.value == amount + bridgeFee, "insufficient token");
    (bool bc, ) = commitmentPool.call{value: amount}("");
    require(bc, "amount transfer failed");
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

  function assetAddress() public view override returns (address) {
    return address(0);
  }

  function assetType() public view override returns (AssetType) {
    return AssetType.Main;
  }
}
