// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

library MystikoRelayerErrors {
  error NotChanged();
  error InsufficientBalanceForAction();
  error OnlyRelayer();
  error UrlLengthTooBig();
  error NameLengthTooBig();
  error NameLengthTooShort();
  error AlreadyRegistered();
  error DuplicateUrl();
  error DuplicateName();
  error RelayerUnregistered();
  error RelayerIndexError();
}
