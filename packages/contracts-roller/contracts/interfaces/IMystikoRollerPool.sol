// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

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
