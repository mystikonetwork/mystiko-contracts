// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../../interfaces/ISanctionsList.sol";
import {MystikoDAOGoverned} from "@mystikonetwork/governance/contracts/governance/MystikoDAOGoverned.sol";

abstract contract Sanctions is MystikoDAOGoverned {
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

  function enableSanctionsCheck() external onlyMystikoDAO {
    sanctionsCheck = true;
    emit SanctionsCheck(sanctionsCheck);
  }

  function disableSanctionsCheck() external onlyMystikoDAO {
    sanctionsCheck = false;
    emit SanctionsCheck(sanctionsCheck);
  }

  function updateSanctionsListAddress(ISanctionsList _sanction) external onlyMystikoDAO {
    sanctionsList = _sanction;
    emit SanctionsList(_sanction);
  }
}
