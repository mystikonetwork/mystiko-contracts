// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {MystikoSettingsErrors} from "../../MystikoSettingsErrors.sol";
import {MystikoDAOAccessControl} from "lib/mystiko-governance/packages/contracts/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoDepositConfig is MystikoDAOAccessControl {
  mapping(address => uint256) public minDepositAmountMap;
  mapping(address => uint256) public maxDepositAmountMap;
  mapping(address => address) public associatedPool;
  mapping(address => bool) public depositDisableMap;

  event MinDepositAmountChanged(address indexed deposit, uint256 minDepositAmount);
  event MaxDepositAmountChanged(address indexed deposit, uint256 maxDepositAmount);
  event AssociatedPoolChanged(address indexed deposit, address indexed pool);
  event DepositDisableChanged(address indexed deposit, bool disable);

  function queryMinDepositAmount(address _pool) external view returns (uint256) {
    return minDepositAmountMap[_pool];
  }

  function setMinDepositAmount(address _pool, uint256 _minDepositAmount) external onlyMystikoDAO {
    uint256 currentMaxDepositAmount = maxDepositAmountMap[_pool];
    if (_minDepositAmount == 0 || _minDepositAmount > currentMaxDepositAmount)
      revert MystikoSettingsErrors.InvalidDepositAmount();
    if (minDepositAmountMap[_pool] == _minDepositAmount) revert MystikoSettingsErrors.NotChanged();
    minDepositAmountMap[_pool] = _minDepositAmount;
    emit MinDepositAmountChanged(_pool, _minDepositAmount);
  }

  function queryMaxDepositAmount(address _pool) external view returns (uint256) {
    return maxDepositAmountMap[_pool];
  }

  function setMaxDepositAmount(address _pool, uint256 _maxDepositAmount) external onlyMystikoDAO {
    uint256 currentMinDepositAmount = minDepositAmountMap[_pool];
    if (_maxDepositAmount == 0 || _maxDepositAmount < currentMinDepositAmount)
      revert MystikoSettingsErrors.InvalidDepositAmount();
    if (maxDepositAmountMap[_pool] == _maxDepositAmount) revert MystikoSettingsErrors.NotChanged();
    maxDepositAmountMap[_pool] = _maxDepositAmount;
    emit MaxDepositAmountChanged(_pool, _maxDepositAmount);
  }

  function queryAssociatedPool(address _depositAddress) external view returns (address) {
    return associatedPool[_depositAddress];
  }

  function setAssociatedPool(address _depositAddress, address _poolAddress) external onlyMystikoDAO {
    if (associatedPool[_depositAddress] == _poolAddress) revert MystikoSettingsErrors.NotChanged();
    associatedPool[_depositAddress] = _poolAddress;
    emit AssociatedPoolChanged(_depositAddress, _poolAddress);
  }

  function isDepositDisable(address _depositAddress) external view returns (bool) {
    return depositDisableMap[_depositAddress];
  }

  function setDepositDisable(address _depositAddress, bool _disable) external onlyMystikoDAO {
    if (depositDisableMap[_depositAddress] == _disable) revert MystikoSettingsErrors.NotChanged();
    depositDisableMap[_depositAddress] = _disable;
    emit DepositDisableChanged(_depositAddress, _disable);
  }
}
