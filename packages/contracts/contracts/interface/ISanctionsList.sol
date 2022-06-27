// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface ISanctionsList {
  function isSanctioned(address addr) external view returns (bool);
}
