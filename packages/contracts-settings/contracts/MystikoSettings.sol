// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import {IMystikoRollerPool} from "contracts-roller/contracts/interfaces/IMystikoRollerPool.sol";
import {IMystikoRelayerPool} from "contracts-relayer/contracts/interfaces/IMystikoRelayerPool.sol";
import {IMystikoCertificate} from "contracts-certificate/contracts/interfaces/IMystikoCertificate.sol";
import {MystikoSettingsBase} from "./MystikoSettingsBase.sol";
import {MystikoBridgeConfig} from "./config/impl/MystikoBridgeConfig.sol";

contract MystikoSettings is MystikoSettingsBase, MystikoBridgeConfig {
  constructor(
    address _daoRegistry,
    IMystikoCertificate _certificateVerifier,
    IMystikoRollerPool _rollerPool,
    IMystikoRelayerPool _relayerPool,
    address[11] memory _rollupVerifiers,
    address[6] memory _transactVerifiers,
    uint256[AUDITOR_COUNT] memory _auditors
  )
    MystikoSettingsBase(
      _daoRegistry,
      _certificateVerifier,
      _rollerPool,
      _relayerPool,
      _rollupVerifiers,
      _transactVerifiers,
      _auditors
    )
    MystikoBridgeConfig()
  {}
}
