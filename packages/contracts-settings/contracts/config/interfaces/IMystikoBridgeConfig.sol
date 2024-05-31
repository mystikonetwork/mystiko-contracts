// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMystikoBridgeConfig {
  function queryMinBridgeFee(address _pool) external view returns (uint256);
  function queryMinPeerExecutorFee(address _pool) external view returns (uint256);
  function queryMinPeerRollupFee(address _pool) external view returns (uint256);
}
