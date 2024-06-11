// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "@mystikonetwork/contracts-certificate/contracts/MystikoCertificate.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerErrors.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPool.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPool.sol";
import "../mock/MockMystikoToken.sol";
import "@mystikonetwork/contracts-governance/contracts/token/MystikoVoteToken.sol";
import "@mystikonetwork/contracts-governance/contracts/impl/MystikoGovernorRegistry.sol";
import "@mystikonetwork/contracts-governance/contracts/GovernanceErrors.sol";
import "../utils/Random.sol";
import "../../contracts/screen/interfaces/ISanctions.sol";

contract MystikoSettingsCenterTest is Test, Random {
  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoSettings public settings;

  event SanctionsCheck(bool state);
  event SanctionsListChanged(address list);

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

  function test_enable_sanction_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.enableSanctionsCheck();

    vm.expectEmit(address(settings));
    emit SanctionsCheck(true);
    vm.prank(dao);
    settings.enableSanctionsCheck();
    assertTrue(settings.sanctionsCheck());
  }

  function test_disable_sanction_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.disableSanctionsCheck();

    vm.expectEmit(address(settings));
    emit SanctionsCheck(false);
    vm.prank(dao);
    settings.disableSanctionsCheck();
    assertFalse(settings.sanctionsCheck());
  }

  function test_update_sanction_list() public {
    address list = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setSanctionsListAddress(list);

    vm.expectEmit(address(settings));
    emit SanctionsListChanged(list);
    vm.prank(dao);
    settings.setSanctionsListAddress(list);
    assertEq(address(settings.sanctionsList()), list);
  }

  function test_is_sanctioned() public {
    address account = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    vm.prank(dao);
    settings.disableSanctionsCheck();
    assertFalse(settings.isSanctioned(account));

    vm.prank(dao);
    settings.enableSanctionsCheck();
    vm.expectRevert();
    assertFalse(settings.isSanctioned(account));
  }
}
