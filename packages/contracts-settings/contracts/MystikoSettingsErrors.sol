// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library MystikoSettingsErrors {
  error NotChanged();
  error InsufficientBalanceForAction();
  error RollupSizeTooSmall();
  error AuditorIndexError();
  error InvalidNumInputs();
  error InvalidRollupSize();
  error RollupSizeNotPowerOfTwo();
  error InvalidRollupFee();
  error InvalidDepositAmount();
}
