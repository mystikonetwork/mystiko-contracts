// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {ISanctions} from "../interfaces/ISanctions.sol";
import {MystikoDAOAccessControl} from "lib/mystiko-governance/packages/contracts/contracts/MystikoDAOAccessControl.sol";

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

  function setSanctionsListAddress(address _sanction) external onlyMystikoDAO {
    sanctionsList = ISanctions(_sanction);
    emit SanctionsListChanged(_sanction);
  }
}
