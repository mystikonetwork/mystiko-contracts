// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMystikoLoop {
  struct DepositRequest {
    uint256 amount;
    uint256 commitment;
    uint256 hashK;
    uint128 randomS;
    bytes encryptedNote;
    uint256 rollupFee;
  }

  function deposit(DepositRequest memory _request) external payable;
}
