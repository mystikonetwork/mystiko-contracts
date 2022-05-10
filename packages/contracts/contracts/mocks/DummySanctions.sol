// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DummySanctionsList {
  mapping(address => bool) sanctionsList;

  function addToSanctionsList(address addr) external {
    sanctionsList[addr] = true;
  }

  function removeToSanctionsList(address addr) external {
    sanctionsList[addr] = false;
  }

  function isSanctioned(address addr) external view returns (bool) {
    return sanctionsList[addr];
  }
}
