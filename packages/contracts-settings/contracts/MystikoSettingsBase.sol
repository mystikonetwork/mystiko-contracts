// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {MystikoVerifierPool} from "./verifier/impl/MystikoVerifierPool.sol";
import {MystikoAuditorPool} from "./auditor/impl/MystikoAuditorPool.sol";
import {Sanctions} from "./screen/impl/Sanctions.sol";
import {MystikoSettingsErrors} from "./MystikoSettingsErrors.sol";
import {MystikoDepositConfig} from "./config/impl/MystikoDepositConfig.sol";
import {MystikoPoolConfig} from "./config/impl/MystikoPoolConfig.sol";
import {MystikoBridgeConfig} from "./config/impl/MystikoBridgeConfig.sol";
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

  event CertificateVerifierChanged(address indexed registry);
  event RollerPoolChanged(address indexed registry);
  event RelayerPoolChanged(address indexed registry);

  constructor(
    address _daoRegistry,
    IMystikoCertificate _certificateRegistry,
    IMystikoRollerPool _rollerRegistry,
    IMystikoRelayerPool _relayerRegistry,
    address[11] memory _rollupVerifiers,
    address[6] memory _transactVerifiers,
    uint256[AUDITOR_COUNT] memory _auditors
  )
    MystikoDAOAccessControl(_daoRegistry)
    MystikoVerifierPool(_rollupVerifiers, _transactVerifiers)
    MystikoAuditorPool(_auditors)
  {
    certificate = _certificateRegistry;
    rollerPool = _rollerRegistry;
    relayerPool = _relayerRegistry;
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

  function setCertificateVerifier(IMystikoCertificate _newCertificateRegistry) external onlyMystikoDAO {
    if (certificate == _newCertificateRegistry) revert MystikoSettingsErrors.NotChanged();
    certificate = _newCertificateRegistry;
    emit CertificateVerifierChanged(address(certificate));
  }

  function setRollerPool(IMystikoRollerPool _newRollerRegistry) external onlyMystikoDAO {
    if (rollerPool == _newRollerRegistry) revert MystikoSettingsErrors.NotChanged();
    rollerPool = _newRollerRegistry;
    emit RollerPoolChanged(address(rollerPool));
  }

  function setRelayerPool(IMystikoRelayerPool _newRelayerRegistry) external onlyMystikoDAO {
    if (relayerPool == _newRelayerRegistry) revert MystikoSettingsErrors.NotChanged();
    relayerPool = _newRelayerRegistry;
    emit RelayerPoolChanged(address(relayerPool));
  }
}
