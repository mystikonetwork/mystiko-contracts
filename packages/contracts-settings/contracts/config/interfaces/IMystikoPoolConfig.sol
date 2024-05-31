// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMystikoPoolConfig {
  function queryMinRollupFee(address _pool) external view returns (uint256);
  function queryTransferDisable(address _pool) external view returns (bool);
}
