// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {MystikoSettingsErrors} from "../../MystikoSettingsErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoBridgeConfig is MystikoDAOAccessControl {
  mapping(address => uint256) public minBridgeFeeAmount;
  mapping(address => uint256) public minPeerExecutorFeeAmount;
  mapping(address => uint256) public minPeerRollupFeeAmount;

  event MinBridgeFeeChanged(address indexed deposit, uint256 minBridgeFee);
  event MinPeerExecutorFeeChanged(address indexed deposit, uint256 minPeerExecutorFee);
  event MinPeerRollupFeeChanged(address indexed deposit, uint256 minPeerRollupFee);

  function queryMinBridgeFee(address _pool) external view returns (uint256) {
    return minBridgeFeeAmount[_pool];
  }

  function setMinBridgeFee(address _pool, uint256 _minBridgeFee) external onlyMystikoDAO {
    if (minBridgeFeeAmount[_pool] == _minBridgeFee) revert MystikoSettingsErrors.NotChanged();
    minBridgeFeeAmount[_pool] = _minBridgeFee;
    emit MinBridgeFeeChanged(_pool, _minBridgeFee);
  }

  function queryMinPeerExecutorFee(address _pool) external view returns (uint256) {
    return minPeerExecutorFeeAmount[_pool];
  }

  function setMinPeerExecutorFee(address _pool, uint256 _minPeerExecutorFee) external onlyMystikoDAO {
    if (minPeerExecutorFeeAmount[_pool] == _minPeerExecutorFee) revert MystikoSettingsErrors.NotChanged();
    minPeerExecutorFeeAmount[_pool] = _minPeerExecutorFee;
    emit MinPeerExecutorFeeChanged(_pool, _minPeerExecutorFee);
  }

  function queryMinPeerRollupFee(address _pool) external view returns (uint256) {
    return minPeerRollupFeeAmount[_pool];
  }

  function setMinPeerRollupFee(address _pool, uint256 _minPeerRollupFee) external onlyMystikoDAO {
    if (minPeerRollupFeeAmount[_pool] == _minPeerRollupFee) revert MystikoSettingsErrors.NotChanged();
    minPeerRollupFeeAmount[_pool] = _minPeerRollupFee;
    emit MinPeerRollupFeeChanged(_pool, _minPeerRollupFee);
  }
}
