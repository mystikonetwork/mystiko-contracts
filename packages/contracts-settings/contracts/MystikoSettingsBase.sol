// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {MystikoVerifierPool} from "./verifier/impl/MystikoVerifierPool.sol";
import {MystikoAuditorPool} from "./auditor/impl/MystikoAuditorPool.sol";
import {Sanctions} from "./screen/impl/Sanctions.sol";
import {MystikoSettingsErrors} from "./MystikoSettingsErrors.sol";
import {MystikoDepositConfig} from "./config/impl/MystikoDepositConfig.sol";
import {MystikoPoolConfig} from "./config/impl/MystikoPoolConfig.sol";
import {IMystikoRollerPool, RollerValidateParams} from "@mystikonetwork/contracts-roller/contracts/interfaces/IMystikoRollerPool.sol";
import {IMystikoRelayerPool, RelayerValidateParams} from "@mystikonetwork/contracts-relayer/contracts/interfaces/IMystikoRelayerPool.sol";
import {IMystikoCertificate, CertificateParams} from "@mystikonetwork/contracts-certificate/contracts/interfaces/IMystikoCertificate.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/contracts-governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoSettingsBase is
  IMystikoCertificate,
  IMystikoRollerPool,
  IMystikoRelayerPool,
  MystikoDAOAccessControl,
  MystikoVerifierPool,
  MystikoAuditorPool,
  MystikoDepositConfig,
  MystikoPoolConfig,
  Sanctions
{
  IMystikoCertificate public certificate;
  IMystikoRollerPool public rollerPool;
  IMystikoRelayerPool public relayerPool;

  event CertificateVerifierChanged(address indexed verifier);
  event RollerPoolChanged(address indexed rollerPool);
  event RelayerPoolChanged(address indexed relayerPool);

  constructor(
    address _daoRegistry,
    IMystikoCertificate _certificateVerifier,
    IMystikoRollerPool _rollerPool,
    IMystikoRelayerPool _relayerPool,
    address[11] memory _rollupVerifiers,
    address[6] memory _transactVerifiers,
    uint256[AUDITOR_COUNT] memory _auditors
  )
    MystikoDAOAccessControl(_daoRegistry)
    MystikoVerifierPool(_rollupVerifiers, _transactVerifiers)
    MystikoAuditorPool(_auditors)
  {
    certificate = _certificateVerifier;
    rollerPool = _rollerPool;
    relayerPool = _relayerPool;
  }

  function getCertificateIssuer() external view returns (address) {
    return certificate.getCertificateIssuer();
  }

  function isCertificateCheckEnabled() external view returns (bool) {
    return certificate.isCertificateCheckEnabled();
  }

  function verifyCertificate(CertificateParams memory _params) external view returns (bool) {
    return certificate.verifyCertificate(_params);
  }

  function validateRoller(RollerValidateParams calldata _params) external view returns (bool) {
    return rollerPool.validateRoller(_params);
  }

  function validateRelayer(RelayerValidateParams calldata _params) external view returns (bool) {
    return relayerPool.validateRelayer(_params);
  }

  function setCertificateVerifier(address _newCertificateVerifier) external onlyMystikoDAO {
    IMystikoCertificate newCertificate = IMystikoCertificate(_newCertificateVerifier);
    if (certificate == newCertificate) revert MystikoSettingsErrors.NotChanged();
    certificate = newCertificate;
    emit CertificateVerifierChanged(_newCertificateVerifier);
  }

  function setRollerPool(address _newRollerPool) external onlyMystikoDAO {
    IMystikoRollerPool newRollerPool = IMystikoRollerPool(_newRollerPool);
    if (rollerPool == newRollerPool) revert MystikoSettingsErrors.NotChanged();
    rollerPool = newRollerPool;
    emit RollerPoolChanged(_newRollerPool);
  }

  function setRelayerPool(address _newRelayerPool) external onlyMystikoDAO {
    IMystikoRelayerPool newRelayerPool = IMystikoRelayerPool(_newRelayerPool);
    if (relayerPool == newRelayerPool) revert MystikoSettingsErrors.NotChanged();
    relayerPool = newRelayerPool;
    emit RelayerPoolChanged(_newRelayerPool);
  }
}
