// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

interface IMystikoPoolConfig {
  function queryMinRollupFee(address _pool) external view returns (uint256);
  function isTransferDisable(address _pool) external view returns (bool);
}
