// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

struct RelayerValidateParams {
  address pool;
  address relayer;
}

interface IMystikoRelayerPool {
  function validateRelayer(RelayerValidateParams calldata _params) external view returns (bool);
}
