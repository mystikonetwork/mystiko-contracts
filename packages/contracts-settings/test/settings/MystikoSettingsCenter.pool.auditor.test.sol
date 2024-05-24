// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsCenter.sol";
import "../../contracts/rule/impl/CertificateRegistry.sol";
import "../../contracts/miner/impl/MystikoRelayerRegistry.sol";
import "../../contracts/miner/impl/MystikoRollerRegistry.sol";
import "../mock/MockMystikoToken.sol";
import "@mystikonetwork/governance/contracts/token/MystikoVoteToken.sol";
import "@mystikonetwork/governance/contracts/impl/MystikoGovernorRegistry.sol";
import "@mystikonetwork/governance/contracts/GovernanceErrors.sol";
import "../utils/Random.sol";

contract MystikoSettingsCenterTest is Test, Random {
  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  CertificateRegistry public certificateRegistry;
  MystikoRollerRegistry public rollerRegistry;
  MystikoRelayerRegistry public relayerRegistry;
  MystikoSettingsCenter public settings;

  event AuditorPublicKeyUpdated(uint256 indexed index, uint256 publicKey);

  function setUp() public {
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    for (uint256 i = 0; i < 11; i++) {
      rollupVerifiers[i] = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    }
    for (uint256 i = 0; i < 6; i++) {
      transactVerifiers[i] = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    }
    for (uint256 i = 0; i < 5; i++) {
      auditors[i] = uint256(keccak256(abi.encodePacked(_random())));
    }

    MockMystikoToken XZK = new MockMystikoToken();
    MystikoVoteToken vXZK = new MystikoVoteToken(XZK);
    MystikoGovernorRegistry daoRegistry = new MystikoGovernorRegistry(dao);
    certificateRegistry = new CertificateRegistry(address(daoRegistry), address(0));
    rollerRegistry = new MystikoRollerRegistry(address(daoRegistry), address(vXZK), 100_000e18);
    relayerRegistry = new MystikoRelayerRegistry(address(daoRegistry), address(vXZK), 100_000e18);

    settings = new MystikoSettingsCenter(
      address(daoRegistry),
      ICertificate(certificateRegistry),
      IMystikoRoller(rollerRegistry),
      IMystikoRelayer(relayerRegistry),
      rollupVerifiers,
      transactVerifiers,
      auditors
    );
  }

  function test_query_auditor_public_key() public {
    assertEq(settings.queryAuditorPublicKey(0), auditors[0]);
    assertEq(settings.queryAuditorPublicKey(1), auditors[1]);
    assertEq(settings.queryAuditorPublicKey(2), auditors[2]);
    assertEq(settings.queryAuditorPublicKey(3), auditors[3]);
    assertEq(settings.queryAuditorPublicKey(4), auditors[4]);
  }

  function test_query_all_auditor_public_keys() public {
    uint256[] memory keys = settings.queryAllAuditorPublicKeys();
    for (uint256 i = 0; i < 5; i++) {
      assertEq(keys[i], auditors[i]);
    }
  }

  function test_update_auditor_public_key() public {
    uint256 newAuditor = uint256(keccak256(abi.encodePacked(_random())));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateAuditorPublicKey(0, newAuditor);

    vm.expectEmit(address(settings));
    emit AuditorPublicKeyUpdated(0, newAuditor);
    vm.prank(dao);
    settings.updateAuditorPublicKey(0, newAuditor);
    assertEq(settings.queryAuditorPublicKey(0), newAuditor);
    vm.prank(dao);
    settings.updateAuditorPublicKey(1, newAuditor);
    assertEq(settings.queryAuditorPublicKey(1), newAuditor);
    vm.prank(dao);
    settings.updateAuditorPublicKey(2, newAuditor);
    assertEq(settings.queryAuditorPublicKey(2), newAuditor);
    vm.prank(dao);
    settings.updateAuditorPublicKey(3, newAuditor);
    assertEq(settings.queryAuditorPublicKey(3), newAuditor);
    vm.prank(dao);
    settings.updateAuditorPublicKey(4, newAuditor);
    assertEq(settings.queryAuditorPublicKey(4), newAuditor);

    vm.prank(dao);
    vm.expectRevert(SettingsCenterErrors.AuditorIndexError.selector);
    settings.updateAuditorPublicKey(5, newAuditor);

    vm.prank(dao);
    vm.expectRevert(SettingsCenterErrors.NotChanged.selector);
    settings.updateAuditorPublicKey(4, newAuditor);
  }
}
