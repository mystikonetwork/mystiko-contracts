// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {MystikoVerifierPool} from "./verifier/impl/MystikoVerifierPool.sol";
import {MystikoAuditorPool} from "./auditor/impl/MystikoAuditorPool.sol";
import {Sanctions} from "./screen/impl/Sanctions.sol";
import {IMystikoRollerPool, RollerValidateParams} from "./miner/interfaces/IMystikoRollerPool.sol";
import {IMystikoRelayerPool, RelayerValidateParams} from "./miner/interfaces/IMystikoRelayerPool.sol";
import {IMystikoCertificate, CertificateParams} from "./screen/interfaces/IMystikoCertificate.sol";
import {MystikoSettingsErrors} from "./MystikoSettingsErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";
import {MystikoDepositConfig} from "./config/impl/MystikoDepositConfig.sol";
import {MystikoPoolConfig} from "./config/impl/MystikoPoolConfig.sol";
import {MystikoBridgeConfig} from "./config/impl/MystikoBridgeConfig.sol";

contract MystikoSettings is
  IMystikoCertificate,
  IMystikoRollerPool,
  IMystikoRelayerPool,
  MystikoDAOAccessControl,
  MystikoVerifierPool,
  MystikoAuditorPool,
  MystikoDepositConfig,
  MystikoPoolConfig,
  MystikoBridgeConfig,
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

  function checkEnabled() external view returns (bool){
    return certificate.checkEnabled();
  }

  function verifyCertificate(CertificateParams memory _params) external view returns (bool) {
    return certificate.verifyCertificate(_params);
  }

  function validate(RollerValidateParams calldata _params) external view returns (bool) {
    return rollerPool.validate(_params);
  }

  function validate(RelayerValidateParams calldata _params) external view returns (bool) {
    return relayerPool.validate(_params);
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
