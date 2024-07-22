// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

interface IMystikoLoop {
  struct LocalConfig {
    uint256 minAmount;
    uint256 maxAmount;
  }

  struct DepositRequest {
    uint256 amount;
    uint256 commitment;
    uint256 hashK;
    uint128 randomS;
    bytes encryptedNote;
    uint256 rollupFee;
  }

  function deposit(DepositRequest memory _request) external payable;

  function certDeposit(
    DepositRequest memory _request,
    uint256 certificateDeadline,
    bytes memory certificateSignature
  ) external payable;
}
