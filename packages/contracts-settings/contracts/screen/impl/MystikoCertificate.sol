// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IMystikoCertificate, CertificateParams} from "../interfaces/IMystikoCertificate.sol";
import {MystikoSettingsErrors} from "../../MystikoSettingsErrors.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

contract MystikoCertificate is IMystikoCertificate, MystikoDAOAccessControl {
  address public issuer;
  bool public certificateCheck = true;

  event CertificateCheck(bool state);
  event IssuerChanged(address issuer);

  constructor(address _daoRegistry, address _issuer) MystikoDAOAccessControl(_daoRegistry) {
    issuer = _issuer;
  }

  function getIssuerAddress() external view returns (address) {
    return issuer;
  }

  function checkEnabled() external view returns (bool){
    return certificateCheck;
  }

  function verifyCertificate(CertificateParams memory _params) external view returns (bool) {
    if (block.timestamp > _params.deadline) {
      return false;
    }

    bytes32 hash = keccak256(
      abi.encodePacked(block.chainid, _params.account, _params.asset, _params.deadline)
    );
    address signer = ECDSA.recover(hash, _params.signature);
    if (signer != issuer) {
      return false;
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


  function updateIssuerAddress(address _newIssuer) external onlyMystikoDAO {
    issuer = _newIssuer;
    emit IssuerChanged(issuer);
  }
}
