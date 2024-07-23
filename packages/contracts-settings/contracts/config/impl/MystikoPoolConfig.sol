// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {MystikoSettingsErrors} from "../../MystikoSettingsErrors.sol";
import {MystikoDAOAccessControl} from "lib/mystiko-governance/packages/contracts/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoPoolConfig is MystikoDAOAccessControl {
  mapping(address => uint256) public minRollupFeeMap;
  mapping(address => bool) public transferDisableMap;

  event MinRollupFeeChanged(address indexed pool, uint256 minRollupFee);
  event TransferDisableChanged(address indexed pool, bool disable);

  function queryMinRollupFee(address _pool) external view returns (uint256) {
    return minRollupFeeMap[_pool];
  }

  function setMinRollupFee(address _pool, uint256 _minRollupFee) external onlyMystikoDAO {
    if (minRollupFeeMap[_pool] == _minRollupFee) revert MystikoSettingsErrors.NotChanged();
    minRollupFeeMap[_pool] = _minRollupFee;
    emit MinRollupFeeChanged(_pool, _minRollupFee);
  }

  function isTransferDisable(address _pool) external view returns (bool) {
    return transferDisableMap[_pool];
  }

  function setTransferDisable(address _pool, bool _disable) external onlyMystikoDAO {
    if (transferDisableMap[_pool] == _disable) revert MystikoSettingsErrors.NotChanged();
    transferDisableMap[_pool] = _disable;
    emit TransferDisableChanged(_pool, _disable);
  }
}
