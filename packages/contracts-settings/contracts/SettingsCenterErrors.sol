// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library SettingsCenterErrors {
  error NotChanged();
  error UnauthorizedRole();
  error InsufficientBalanceForAction();
  error RollupSizeTooSmall();
  error AuditorIndexError();
  error NumInputsGreaterThanZero();
  error InvalidRollupSize();
  error RollupSizeNotPowerOfTwo();
  error ExpiredCertificate(uint256 deadline);
  error InvalidIssuer();
  error InvalidRollupFee();
  error InvalidDepositAmount();
}
