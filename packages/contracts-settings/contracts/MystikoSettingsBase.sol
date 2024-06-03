// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

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
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

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

  event CertificateRegistryChanged(address indexed registry);
  event RollerRegistryChanged(address indexed registry);
  event RelayerRegistryChanged(address indexed registry);

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

  function getIssuerAddress() external view returns (address) {
    return certificate.getIssuerAddress();
  }

  function checkEnabled() external view returns (bool) {
    return certificate.checkEnabled();
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

  function changeCertificateRegistry(IMystikoCertificate _newCertificateRegistry) external onlyMystikoDAO {
    if (certificate == _newCertificateRegistry) revert MystikoSettingsErrors.NotChanged();
    certificate = _newCertificateRegistry;
    emit CertificateRegistryChanged(address(certificate));
  }

  function changeRollerRegistry(IMystikoRollerPool _newRollerRegistry) external onlyMystikoDAO {
    if (rollerPool == _newRollerRegistry) revert MystikoSettingsErrors.NotChanged();
    rollerPool = _newRollerRegistry;
    emit RollerRegistryChanged(address(rollerPool));
  }

  function changeRelayerRegistry(IMystikoRelayerPool _newRelayerRegistry) external onlyMystikoDAO {
    if (relayerPool == _newRelayerRegistry) revert MystikoSettingsErrors.NotChanged();
    relayerPool = _newRelayerRegistry;
    emit RelayerRegistryChanged(address(relayerPool));
  }
}
