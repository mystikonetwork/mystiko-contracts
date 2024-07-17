// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "contracts-certificate/contracts/MystikoCertificate.sol";
import "contracts-relayer/contracts/MystikoRelayerErrors.sol";
import "contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "contracts-relayer/contracts/MystikoRelayerPool.sol";
import "contracts-roller/contracts/MystikoRollerPool.sol";
import "../mock/MockMystikoToken.sol";
import "lib/mystiko-governance/packages/contracts/contracts/token/MystikoVoteToken.sol";
import "lib/mystiko-governance/packages/contracts/contracts/impl/MystikoGovernorRegistry.sol";
import "lib/mystiko-governance/packages/contracts/contracts/GovernanceErrors.sol";
import "../utils/Random.sol";

contract MystikoSettingsCenterTest is Test, Random {
  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoSettings public settings;

  event AuditorPublicKeyChanged(uint256 indexed index, uint256 publicKey);

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
    vm.prank(dao);
    MystikoGovernorRegistry daoRegistry = new MystikoGovernorRegistry();
    certificateChecker = new MystikoCertificate(address(daoRegistry), address(0), true);
    address[] memory zero = new address[](0);
    rollerPool = new MystikoRollerPool(address(daoRegistry), address(vXZK), 100_000e18, zero);
    relayerPool = new MystikoRelayerPool(address(daoRegistry), address(vXZK), 100_000e18);

    settings = new MystikoSettings(
      address(daoRegistry),
      IMystikoCertificate(certificateChecker),
      IMystikoRollerPool(rollerPool),
      IMystikoRelayerPool(relayerPool),
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
    settings.setAuditorPublicKey(0, newAuditor);

    vm.expectEmit(address(settings));
    emit AuditorPublicKeyChanged(0, newAuditor);
    vm.prank(dao);
    settings.setAuditorPublicKey(0, newAuditor);
    assertEq(settings.queryAuditorPublicKey(0), newAuditor);
    vm.prank(dao);
    settings.setAuditorPublicKey(1, newAuditor);
    assertEq(settings.queryAuditorPublicKey(1), newAuditor);
    vm.prank(dao);
    settings.setAuditorPublicKey(2, newAuditor);
    assertEq(settings.queryAuditorPublicKey(2), newAuditor);
    vm.prank(dao);
    settings.setAuditorPublicKey(3, newAuditor);
    assertEq(settings.queryAuditorPublicKey(3), newAuditor);
    vm.prank(dao);
    settings.setAuditorPublicKey(4, newAuditor);
    assertEq(settings.queryAuditorPublicKey(4), newAuditor);

    vm.prank(dao);
    vm.expectRevert(MystikoSettingsErrors.AuditorIndexError.selector);
    settings.setAuditorPublicKey(5, newAuditor);

    vm.prank(dao);
    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    settings.setAuditorPublicKey(4, newAuditor);
  }
}
