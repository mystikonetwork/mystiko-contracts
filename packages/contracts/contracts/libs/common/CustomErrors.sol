pragma solidity ^0.8.4;

library CustomErrors {
  error Unauthorized(string message);
  error Unexpected(string message);
  error InsufficientBalance(string message);
  error Duplicated(string message);
  error Invalid(string message);
  error RollupFeeToLow(string message);
  error Failed(string message);
  error Err();
}
