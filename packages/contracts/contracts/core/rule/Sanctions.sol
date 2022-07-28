// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../interface/ISanctionsList.sol";

abstract contract Sanctions {
  ISanctionsList public sanctionsList = ISanctionsList(0x40C57923924B5c5c5455c48D93317139ADDaC8fb);
  bool public sanctionsCheck = true;

  event SanctionsCheck(bool state);
  event SanctionsList(ISanctionsList sanctions);

  function isSanctioned(address _addr) internal returns (bool) {
    if (!sanctionsCheck) {
      return false;
    }

    return sanctionsList.isSanctioned(_addr);
  }
}
