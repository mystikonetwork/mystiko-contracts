// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

library MystikoSettingsErrors {
  error NotChanged();
  error AuditorIndexError();
  error InvalidNumInputs();
  error InvalidRollupSize();
  error RollupSizeNotPowerOfTwo();
  error InvalidDepositAmount();
}
