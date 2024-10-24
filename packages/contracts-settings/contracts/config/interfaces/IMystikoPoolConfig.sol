// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

interface IMystikoPoolConfig {
  function queryMinRollupFee(address _pool) external view returns (uint256);
  function isTransferDisable(address _pool) external view returns (bool);
}
