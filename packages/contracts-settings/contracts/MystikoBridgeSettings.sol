// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {MystikoBridgeConfig} from "./config/impl/MystikoBridgeConfig.sol";
import {IMystikoRollerPool} from "@mystikonetwork/contracts-roller/contracts/interfaces/IMystikoRollerPool.sol";
import {IMystikoRelayerPool} from "@mystikonetwork/contracts-relayer/contracts/interfaces/IMystikoRelayerPool.sol";
import {IMystikoCertificate} from "@mystikonetwork/contracts-certificate/contracts/interfaces/IMystikoCertificate.sol";
import {MystikoSettingsBase} from "./MystikoSettings.sol";

contract MystikoBridgeSettings is MystikoSettingsBase, MystikoBridgeConfig {
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
