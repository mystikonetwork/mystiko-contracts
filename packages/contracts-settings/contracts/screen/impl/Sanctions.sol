// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ISanctions} from "../interfaces/ISanctions.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract Sanctions is ISanctions, MystikoDAOAccessControl {
  ISanctions public sanctionsList = ISanctions(0x40C57923924B5c5c5455c48D93317139ADDaC8fb);
  bool public sanctionsCheck = true;

  event SanctionsCheck(bool state);
  event SanctionsListChanged(address list);

  function isSanctioned(address _account) external view returns (bool) {
    if (!sanctionsCheck) {
      return false;
    }

    return sanctionsList.isSanctioned(_account);
  }

  function enableSanctionsCheck() external onlyMystikoDAO {
    sanctionsCheck = true;
    emit SanctionsCheck(sanctionsCheck);
  }

  function disableSanctionsCheck() external onlyMystikoDAO {
    sanctionsCheck = false;
    emit SanctionsCheck(sanctionsCheck);
  }

  function updateSanctionsListAddress(ISanctions _sanction) external onlyMystikoDAO {
    sanctionsList = _sanction;
    emit SanctionsListChanged(address(_sanction));
  }
}
