// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ICertificate, CertificateParams} from "../interfaces/ICertificate.sol";
import {SettingsCenterErrors} from "../../SettingsCenterErrors.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

contract CertificateRegistry is ICertificate, MystikoDAOAccessControl {
  address public issuer;
  bool public certificateCheck = true;

  event CertificateCheck(bool state);
  event IssuerChanged(address issuer);

  constructor(address _daoRegistry, address _issuer) MystikoDAOAccessControl(_daoRegistry) {
    issuer = _issuer;
  }

  function verifyCertificate(CertificateParams memory _params) external view returns (bool) {
    if (!certificateCheck) {
      return true;
    }

    if (block.timestamp > _params.deadline) {
      revert SettingsCenterErrors.ExpiredCertificate(_params.deadline);
    }

    bytes32 hash = keccak256(
      abi.encodePacked(block.chainid, _params.account, _params.asset, _params.deadline)
    );
    address signer = ECDSA.recover(hash, _params.signature);
    if (signer != issuer) {
      revert SettingsCenterErrors.InvalidIssuer();
    }

    return true;
  }

  function enableCertificateCheck() external onlyMystikoDAO {
    certificateCheck = true;
    emit CertificateCheck(certificateCheck);
  }

  function disableCertificateCheck() external onlyMystikoDAO {
    certificateCheck = false;
    emit CertificateCheck(certificateCheck);
  }

  function getIssuerAddress() external view returns (address) {
    return issuer;
  }

  function updateIssuerAddress(address _newIssuer) external onlyMystikoDAO {
    issuer = _newIssuer;
    emit IssuerChanged(issuer);
  }
}
