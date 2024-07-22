// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract MockSanctionList {
  mapping(address => bool) sanctionsList;

  fallback() external payable {
    revert("Fallback function MockSanctionList");
  }

  function addToSanctionsList(address addr) external {
    sanctionsList[addr] = true;
  }

  function removeFromSanctionsList(address addr) external {
    sanctionsList[addr] = false;
  }

  function isSanctioned(address addr) external view returns (bool) {
    return sanctionsList[addr];
  }
}
