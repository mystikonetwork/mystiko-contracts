// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

interface ISanctions {
  function isSanctioned(address addr) external view returns (bool);
}
