// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../interface/ISanctionsList.sol";

abstract contract Sanctions {
  ISanctionsList public chainalysisSanctionsList = ISanctionsList(0x40C57923924B5c5c5455c48D93317139ADDaC8fb);
  ISanctionsList public mystikoSanctionsList;

  bool public sanctionsCheck = true;

  event SanctionsCheck(bool state);
  event ChainalysisSanctionsList(ISanctionsList sanctions);
  event MystikoSanctionsList(ISanctionsList sanctions);

  function isSanctioned(address _addr) internal returns (bool) {
    if (!sanctionsCheck) {
      return false;
    }

    if (mystikoSanctionsList.isSanctioned(_addr) || chainalysisSanctionsList.isSanctioned(_addr)) {
      return true;
    } else {
      return false;
    }
  }
}
