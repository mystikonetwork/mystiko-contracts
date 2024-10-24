// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

struct RollerValidateParams {
  address pool;
  address roller;
  uint256 rollupSize;
  uint256 queueCount;
  uint256 includedCount;
}

interface IMystikoRollerPool {
  function validateRoller(RollerValidateParams calldata _params) external view returns (bool);
}
