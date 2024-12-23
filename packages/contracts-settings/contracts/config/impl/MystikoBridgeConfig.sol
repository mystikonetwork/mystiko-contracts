// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import {MystikoSettingsErrors} from "../../MystikoSettingsErrors.sol";
import {MystikoDAOAccessControl} from "lib/mystiko-governance/packages/contracts/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoBridgeConfig is MystikoDAOAccessControl {
  mapping(address => uint256) public bridgeGasLimit;
  mapping(address => uint256) public minBridgeFeeAmount;
  mapping(address => uint256) public minPeerExecutorFeeAmount;
  mapping(address => uint256) public minPeerRollupFeeAmount;

  event BridgeGasLimitChanged(address indexed _localDeposit, uint256 _bridgeGasLimit);
  event MinBridgeFeeChanged(address indexed _localDeposit, uint256 _minBridgeFee);
  event MinPeerExecutorFeeChanged(address indexed _localDeposit, uint256 _minPeerExecutorFee);
  event MinPeerRollupFeeChanged(address indexed _localDeposit, uint256 _minPeerRollupFee);

  function queryBridgeGasLimit(address _localDeposit) external view returns (uint256) {
    return bridgeGasLimit[_localDeposit];
  }

  function setBridgeGasLimit(address _localDeposit, uint256 _bridgeGasLimit) external onlyMystikoDAO {
    if (bridgeGasLimit[_localDeposit] == _bridgeGasLimit) revert MystikoSettingsErrors.NotChanged();
    bridgeGasLimit[_localDeposit] = _bridgeGasLimit;
    emit BridgeGasLimitChanged(_localDeposit, _bridgeGasLimit);
  }

  function queryMinBridgeFee(address _localDeposit) external view returns (uint256) {
    return minBridgeFeeAmount[_localDeposit];
  }

  function setMinBridgeFee(address _localDeposit, uint256 _minBridgeFee) external onlyMystikoDAO {
    if (minBridgeFeeAmount[_localDeposit] == _minBridgeFee) revert MystikoSettingsErrors.NotChanged();
    minBridgeFeeAmount[_localDeposit] = _minBridgeFee;
    emit MinBridgeFeeChanged(_localDeposit, _minBridgeFee);
  }

  function queryMinPeerExecutorFee(address _localDeposit) external view returns (uint256) {
    return minPeerExecutorFeeAmount[_localDeposit];
  }

  function setMinPeerExecutorFee(address _localDeposit, uint256 _minPeerExecutorFee) external onlyMystikoDAO {
    if (minPeerExecutorFeeAmount[_localDeposit] == _minPeerExecutorFee)
      revert MystikoSettingsErrors.NotChanged();
    minPeerExecutorFeeAmount[_localDeposit] = _minPeerExecutorFee;
    emit MinPeerExecutorFeeChanged(_localDeposit, _minPeerExecutorFee);
  }

  function queryMinPeerRollupFee(address _localDeposit) external view returns (uint256) {
    return minPeerRollupFeeAmount[_localDeposit];
  }

  function setMinPeerRollupFee(address _localDeposit, uint256 _minPeerRollupFee) external onlyMystikoDAO {
    if (minPeerRollupFeeAmount[_localDeposit] == _minPeerRollupFee) revert MystikoSettingsErrors.NotChanged();
    minPeerRollupFeeAmount[_localDeposit] = _minPeerRollupFee;
    emit MinPeerRollupFeeChanged(_localDeposit, _minPeerRollupFee);
  }
}
