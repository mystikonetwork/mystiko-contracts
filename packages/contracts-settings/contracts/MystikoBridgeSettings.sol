// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {MystikoBridgeConfig} from "./config/impl/MystikoBridgeConfig.sol";
import {IMystikoRollerPool} from "@mystikonetwork/contracts-roller/contracts/interfaces/IMystikoRollerPool.sol";
import {IMystikoRelayerPool} from "@mystikonetwork/contracts-relayer/contracts/interfaces/IMystikoRelayerPool.sol";
import {IMystikoCertificate} from "@mystikonetwork/contracts-certificate/contracts/interfaces/IMystikoCertificate.sol";
import {MystikoSettingsBase} from "./MystikoSettings.sol";

contract MystikoBridgeSettings is MystikoSettingsBase, MystikoBridgeConfig {
  constructor(
    address _daoRegistry,
    IMystikoCertificate _certificateRegistry,
    IMystikoRollerPool _rollerRegistry,
    IMystikoRelayerPool _relayerRegistry,
    address[11] memory _rollupVerifiers,
    address[6] memory _transactVerifiers,
    uint256[AUDITOR_COUNT] memory _auditors
  )
    MystikoSettingsBase(
      _daoRegistry,
      _certificateRegistry,
      _rollerRegistry,
      _relayerRegistry,
      _rollupVerifiers,
      _transactVerifiers,
      _auditors
    )
    MystikoBridgeConfig()
  {}
}