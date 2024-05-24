// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SettingsCenterErrors} from "../../SettingsCenterErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoPoolConfig is MystikoDAOAccessControl {
  mapping(address => uint256) public minRollupFeeMap;

  event MinRollupFeeUpdated(address indexed pool, uint256 minRollupFee);

  function queryMinRollupFee(address _pool) external view returns (uint256) {
    return minRollupFeeMap[_pool];
  }

  function updateMinRollupFee(address _pool, uint256 _minRollupFee) external onlyMystikoDAO {
    if (minRollupFeeMap[_pool] == _minRollupFee) revert SettingsCenterErrors.NotChanged();
    minRollupFeeMap[_pool] = _minRollupFee;
    emit MinRollupFeeUpdated(_pool, _minRollupFee);
  }
}
