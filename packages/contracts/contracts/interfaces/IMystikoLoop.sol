// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

interface IMystikoLoop {
  struct LoopLocalConfig {
    uint256 minAmount;
    uint256 maxAmount;
  }

  struct LoopDepositRequest {
    uint256 amount;
    uint256 commitment;
    uint256 hashK;
    uint128 randomS;
    bytes encryptedNote;
    uint256 rollupFee;
  }

  function deposit(LoopDepositRequest memory _request) external payable;

  function certDeposit(
    LoopDepositRequest memory _request,
    uint256 certificateDeadline,
    bytes memory certificateSignature
  ) external payable;
}
