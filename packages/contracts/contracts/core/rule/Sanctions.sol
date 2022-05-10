// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface SanctionsList {
  function isSanctioned(address addr) external view returns (bool);
}

abstract contract Sanctions {
  address sanctionsContract = 0x40C57923924B5c5c5455c48D93317139ADDaC8fb;
  bool sanctionCheckDisabled = false;

  function isSanctionCheckDisabled() public view returns (bool) {
    return sanctionCheckDisabled;
  }

  function getSanctionsContract() public view returns (address) {
    return sanctionsContract;
  }

  function isSanctioned(address _addr) internal returns (bool) {
    if (sanctionCheckDisabled) {
      return false;
    }

    SanctionsList sanctionsList = SanctionsList(sanctionsContract);
    return sanctionsList.isSanctioned(_addr);
  }
}
