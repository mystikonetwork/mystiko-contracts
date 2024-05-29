// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SettingsCenterErrors} from "../../SettingsCenterErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoDepositConfig is MystikoDAOAccessControl {
  mapping(address => uint256) public minDepositAmountMap;
  mapping(address => uint256) public maxDepositAmountMap;
  mapping(address => address) public associatedPool;
  mapping(address => bool) public depositDisableMap;

  event MinDepositAmountUpdated(address indexed deposit, uint256 minDepositAmount);
  event MaxDepositAmountUpdated(address indexed deposit, uint256 maxDepositAmount);
  event AssociatedPoolUpdated(address indexed deposit, address indexed pool);
  event DepositDisableUpdated(address indexed deposit, bool disable);

  function queryMinDepositAmount(address _pool) external view returns (uint256) {
    return minDepositAmountMap[_pool];
  }

  function updateMinDepositAmount(address _pool, uint256 _minDepositAmount) external onlyMystikoDAO {
    uint256 currentMaxDepositAmount = maxDepositAmountMap[_pool];
    if (_minDepositAmount == 0 || _minDepositAmount > currentMaxDepositAmount)
      revert SettingsCenterErrors.InvalidDepositAmount();
    if (minDepositAmountMap[_pool] == _minDepositAmount) revert SettingsCenterErrors.NotChanged();
    minDepositAmountMap[_pool] = _minDepositAmount;
    emit MinDepositAmountUpdated(_pool, _minDepositAmount);
  }

  function queryMaxDepositAmount(address _pool) external view returns (uint256) {
    return maxDepositAmountMap[_pool];
  }

  function updateMaxDepositAmount(address _pool, uint256 _maxDepositAmount) external onlyMystikoDAO {
    uint256 currentMinDepositAmount = minDepositAmountMap[_pool];
    if (_maxDepositAmount == 0 || _maxDepositAmount < currentMinDepositAmount)
      revert SettingsCenterErrors.InvalidDepositAmount();
    if (maxDepositAmountMap[_pool] == _maxDepositAmount) revert SettingsCenterErrors.NotChanged();
    maxDepositAmountMap[_pool] = _maxDepositAmount;
    emit MaxDepositAmountUpdated(_pool, _maxDepositAmount);
  }

  function queryAssociatedPool(address _depositAddress) external view returns (address) {
    return associatedPool[_depositAddress];
  }

  function updateAssociatedPool(address _depositAddress, address _poolAddress) external onlyMystikoDAO {
    if (associatedPool[_depositAddress] == _poolAddress) revert SettingsCenterErrors.NotChanged();
    associatedPool[_depositAddress] = _poolAddress;
    emit AssociatedPoolUpdated(_depositAddress, _poolAddress);
  }

  function queryDepositDisable(address _depositAddress) external view returns (bool) {
    return depositDisableMap[_depositAddress];
  }

  function updateDepositDisable(address _depositAddress, bool _disable) external onlyMystikoDAO {
    if (depositDisableMap[_depositAddress] == _disable) revert SettingsCenterErrors.NotChanged();
    depositDisableMap[_depositAddress] = _disable;
    emit DepositDisableUpdated(_depositAddress, _disable);
  }
}
