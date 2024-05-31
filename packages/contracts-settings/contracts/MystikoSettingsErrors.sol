// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library MystikoSettingsErrors {
  error NotChanged();
  error UnauthorizedRole();
  error InsufficientBalanceForAction();
  error RollupSizeTooSmall();
  error AuditorIndexError();
  error InvalidInputsNumber();
  error InvalidRollupSize();
  error RollupSizeNotPowerOfTwo();
  error InvalidRollupFee();
  error InvalidDepositAmount();
}
