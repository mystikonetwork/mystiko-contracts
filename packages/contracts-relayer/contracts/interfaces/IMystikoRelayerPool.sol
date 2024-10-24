// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

struct RelayerValidateParams {
  address pool;
  address relayer;
}

interface IMystikoRelayerPool {
  function validateRelayer(RelayerValidateParams calldata _params) external view returns (bool);
}
