// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../interface/ISanctionsList.sol";

abstract contract Sanctions {
  ISanctionsList public sanctionsList = ISanctionsList(0x40C57923924B5c5c5455c48D93317139ADDaC8fb);
  bool public sanctionsCheckDisabled = false;

  event SanctionsCheckDisabled(bool state);
  event SanctionsList(ISanctionsList sanctions);

  function isSanctioned(address _addr) internal returns (bool) {
    if (sanctionsCheckDisabled) {
      return false;
    }

    return sanctionsList.isSanctioned(_addr);
  }
}
