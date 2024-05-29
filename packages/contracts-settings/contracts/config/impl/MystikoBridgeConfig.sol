// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SettingsCenterErrors} from "../../SettingsCenterErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoBridgeConfig is MystikoDAOAccessControl {
  mapping(address => uint256) public minBridgeFeeAmount;
  mapping(address => uint256) public minPeerExecutorFeeAmount;
  mapping(address => uint256) public minPeerRollupFeeAmount;

  event MinBridgeFeeUpdated(address indexed deposit, uint256 minBridgeFee);
  event MinPeerExecutorFeeUpdated(address indexed deposit, uint256 minPeerExecutorFee);
  event MinPeerRollupFeeUpdated(address indexed deposit, uint256 minPeerRollupFee);

  function queryMinBridgeFee(address _pool) external view returns (uint256) {
    return minBridgeFeeAmount[_pool];
  }

  function updateMinBridgeFee(address _pool, uint256 _minBridgeFee) external onlyMystikoDAO {
    if (minBridgeFeeAmount[_pool] == _minBridgeFee) revert SettingsCenterErrors.NotChanged();
    minBridgeFeeAmount[_pool] = _minBridgeFee;
    emit MinBridgeFeeUpdated(_pool, _minBridgeFee);
  }

  function queryMinPeerExecutorFee(address _pool) external view returns (uint256) {
    return minPeerExecutorFeeAmount[_pool];
  }

  function updateMinPeerExecutorFee(address _pool, uint256 _minPeerExecutorFee) external onlyMystikoDAO {
    if (minPeerExecutorFeeAmount[_pool] == _minPeerExecutorFee) revert SettingsCenterErrors.NotChanged();
    minPeerExecutorFeeAmount[_pool] = _minPeerExecutorFee;
    emit MinPeerExecutorFeeUpdated(_pool, _minPeerExecutorFee);
  }

  function queryMinPeerRollupFee(address _pool) external view returns (uint256) {
    return minPeerRollupFeeAmount[_pool];
  }

  function updateMinPeerRollupFee(address _pool, uint256 _minPeerRollupFee) external onlyMystikoDAO {
    if (minPeerRollupFeeAmount[_pool] == _minPeerRollupFee) revert SettingsCenterErrors.NotChanged();
    minPeerRollupFeeAmount[_pool] = _minPeerRollupFee;
    emit MinPeerRollupFeeUpdated(_pool, _minPeerRollupFee);
  }
}
