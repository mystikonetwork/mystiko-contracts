// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IMystikoAuditor} from "../interfaces/IMystikoAuditor.sol";
import {SettingsCenterErrors} from "../../SettingsCenterErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoAuditor is IMystikoAuditor, MystikoDAOAccessControl {
  uint256 public constant AUDITOR_COUNT = 5;
  uint256[AUDITOR_COUNT] private auditorPublicKeys;

  event AuditorPublicKeyUpdated(uint256 indexed index, uint256 publicKey);

  constructor(uint256[AUDITOR_COUNT] memory _auditors) {
    for (uint256 i = 0; i < AUDITOR_COUNT; i++) {
      auditorPublicKeys[i] = _auditors[i];
    }
  }

  function queryAuditorPublicKey(uint256 _index) external view returns (uint256) {
    if (_index >= AUDITOR_COUNT) revert SettingsCenterErrors.AuditorIndexError();
    return auditorPublicKeys[_index];
  }

  function queryAllAuditorPublicKeys() external view returns (uint256[] memory) {
    uint256[] memory allKeys = new uint256[](AUDITOR_COUNT);
    for (uint256 i = 0; i < AUDITOR_COUNT; i++) {
      allKeys[i] = auditorPublicKeys[i];
    }
    return allKeys;
  }

  function updateAuditorPublicKey(uint256 _index, uint256 _publicKey) external onlyMystikoDAO {
    if (_index >= AUDITOR_COUNT) revert SettingsCenterErrors.AuditorIndexError();
    if (auditorPublicKeys[_index] == _publicKey) revert SettingsCenterErrors.NotChanged();
    auditorPublicKeys[_index] = _publicKey;
    emit AuditorPublicKeyUpdated(_index, _publicKey);
  }
}
