// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "./AssetPool.sol";
import "../../interfaces/IERC20Metadata.sol";
import "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";

abstract contract ERC20AssetPool is AssetPool {
  using SafeERC20 for IERC20Metadata;
  IERC20Metadata immutable asset;

  constructor(IERC20Metadata _assetAddress) {
    asset = _assetAddress;
  }

  function _processDepositTransfer(
    address commitmentPool,
    uint256 amount,
    uint256 bridgeFee
  ) internal virtual override {
    require(msg.value == bridgeFee, "bridge fee mismatch");
    asset.safeTransferFrom(msg.sender, commitmentPool, amount);
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

  function assetAddress() public view override returns (address) {
    return address(asset);
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
