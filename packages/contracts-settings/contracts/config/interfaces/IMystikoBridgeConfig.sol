// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

interface IMystikoBridgeConfig {
  function queryMinBridgeFee(address _pool) external view returns (uint256);
  function queryMinPeerExecutorFee(address _pool) external view returns (uint256);
  function queryMinPeerRollupFee(address _pool) external view returns (uint256);
}
