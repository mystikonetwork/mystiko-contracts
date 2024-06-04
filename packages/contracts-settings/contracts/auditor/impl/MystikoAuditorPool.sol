// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IMystikoAuditorPool} from "../interfaces/IMystikoAuditorPool.sol";
import {MystikoSettingsErrors} from "../../MystikoSettingsErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoAuditorPool is IMystikoAuditorPool, MystikoDAOAccessControl {
  uint256 public constant AUDITOR_COUNT = 5;
  uint256[AUDITOR_COUNT] private auditorPublicKeys;

  event AuditorPublicKeyChanged(uint256 indexed index, uint256 publicKey);

  constructor(uint256[AUDITOR_COUNT] memory _auditors) {
    for (uint256 i = 0; i < AUDITOR_COUNT; i++) {
      auditorPublicKeys[i] = _auditors[i];
    }
  }

  function queryAuditorPublicKey(uint256 _index) external view returns (uint256) {
    if (_index >= AUDITOR_COUNT) revert MystikoSettingsErrors.AuditorIndexError();
    return auditorPublicKeys[_index];
  }

  function queryAllAuditorPublicKeys() external view returns (uint256[] memory) {
    uint256[] memory allKeys = new uint256[](AUDITOR_COUNT);
    for (uint256 i = 0; i < AUDITOR_COUNT; i++) {
      allKeys[i] = auditorPublicKeys[i];
    }
    return allKeys;
  }

  function setAuditorPublicKey(uint256 _index, uint256 _publicKey) external onlyMystikoDAO {
    if (_index >= AUDITOR_COUNT) revert MystikoSettingsErrors.AuditorIndexError();
    if (auditorPublicKeys[_index] == _publicKey) revert MystikoSettingsErrors.NotChanged();
    auditorPublicKeys[_index] = _publicKey;
    emit AuditorPublicKeyChanged(_index, _publicKey);
  }
}
