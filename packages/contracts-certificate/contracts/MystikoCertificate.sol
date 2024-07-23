// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {IMystikoCertificate, CertificateParams} from "./interfaces/IMystikoCertificate.sol";
import {ECDSA} from "lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol";
import {MystikoDAOAccessControl} from "lib/mystiko-governance/packages/contracts/contracts/MystikoDAOAccessControl.sol";

contract MystikoCertificate is IMystikoCertificate, MystikoDAOAccessControl {
  address public issuer;
  bool public certCheckEnabled;

  event CertificateCheck(bool state);
  event IssuerChanged(address issuer);

  constructor(
    address _daoRegistry,
    address _issuer,
    bool _certCheckEnabled
  ) MystikoDAOAccessControl(_daoRegistry) {
    issuer = _issuer;
    certCheckEnabled = _certCheckEnabled;
  }

  function getCertificateIssuer() external view returns (address) {
    return issuer;
  }

  function isCertificateCheckEnabled() external view returns (bool) {
    return certCheckEnabled;
  }

  function verifyCertificate(CertificateParams memory _params) external view returns (bool) {
    if (block.timestamp > _params.deadline) {
      return false;
    }

    bytes32 hash = keccak256(
      abi.encodePacked(block.chainid, _params.account, _params.asset, _params.deadline)
    );
    address signer = ECDSA.recover(hash, _params.signature);
    return signer == issuer;
  }

  function enableCertificateCheck() external onlyMystikoDAO {
    certCheckEnabled = true;
    emit CertificateCheck(certCheckEnabled);
  }

  function disableCertificateCheck() external onlyMystikoDAO {
    certCheckEnabled = false;
    emit CertificateCheck(certCheckEnabled);
  }

  function setIssuerAddress(address _newIssuer) external onlyMystikoDAO {
    issuer = _newIssuer;
    emit IssuerChanged(_newIssuer);
  }
}
