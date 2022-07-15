// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./AssetPool.sol";
import "../../interface/IERC20Metadata.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

abstract contract ERC20AssetPool is AssetPool {
  using SafeERC20 for IERC20Metadata;
  IERC20Metadata private asset;

  constructor(IERC20Metadata _assetAddress) {
    asset = _assetAddress;
  }

  function _processDepositTransfer(
    address commitmentPool,
    address serviceFeeCollector,
    uint256 serviceFee,
    uint256 amount,
    uint256 bridgeFee
  ) internal virtual override {
    require(msg.value == bridgeFee, "bridge fee mismatch");
    asset.safeTransferFrom(msg.sender, commitmentPool, amount);
    if (serviceFee > 0) {
      asset.safeTransferFrom(msg.sender, serviceFeeCollector, serviceFee);
    }
  }

  function _processExecutorFeeTransfer(address executor, uint256 amount) internal override {
    asset.safeTransfer(executor, amount);
  }

  function _processRollupFeeTransfer(uint256 amount) internal override {
    asset.safeTransfer(msg.sender, amount);
  }

  function _processWithdrawTransfer(address recipient, uint256 amount) internal override {
    asset.safeTransfer(recipient, amount);
  }

  function assetType() public pure override returns (AssetType) {
    return AssetType.ERC20;
  }

  function assetName() public view returns (string memory) {
    return asset.name();
  }

  function assetSymbol() public view returns (string memory) {
    return asset.symbol();
  }

  function assetDecimals() public view returns (uint8) {
    return asset.decimals();
  }
}
