// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "@mystikonetwork/contracts-certificate/contracts/MystikoCertificate.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPoolErrors.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPool.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPool.sol";
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
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoSettings public settings;

  event MinDepositAmountUpdated(address indexed pool, uint256 minDepositAmount);
  event MaxDepositAmountUpdated(address indexed pool, uint256 maxDepositAmount);
  event AssociatedPoolUpdated(address indexed deposit, address indexed pool);
  event DepositDisableUpdated(address indexed deposit, bool disable);

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
    certificateChecker = new MystikoCertificate(address(daoRegistry), address(0));
    rollerPool = new MystikoRollerPool(address(daoRegistry), address(vXZK), 100_000e18);
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

  function test_min_deposit_amount() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 1000);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateMinDepositAmount(deposit, 500);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 0);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 1200);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinDepositAmountUpdated(deposit, 600);
    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 600);
    assertEq(settings.queryMinDepositAmount(deposit), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 600);
    assertEq(settings.queryMinDepositAmount(deposit), 600);
  }

  function test_max_deposit_amount() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateMaxDepositAmount(deposit, 500);
    assertEq(settings.queryMaxDepositAmount(deposit), 0);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 0);
    assertEq(settings.queryMaxDepositAmount(deposit), 0);

    vm.expectEmit(address(settings));
    emit MaxDepositAmountUpdated(deposit, 600);
    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 600);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 600);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);

    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 400);
    assertEq(settings.queryMinDepositAmount(deposit), 400);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 300);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);
  }

  function test_associate_pool() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryAssociatedPool(deposit), address(0));

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateAssociatedPool(deposit, pool);
    assertEq(settings.queryAssociatedPool(deposit), address(0));

    vm.expectEmit(address(settings));
    emit AssociatedPoolUpdated(deposit, pool);
    vm.prank(dao);
    settings.updateAssociatedPool(deposit, pool);
    assertEq(settings.queryAssociatedPool(deposit), pool);

    vm.expectRevert(GovernanceErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateAssociatedPool(deposit, pool);
    assertEq(settings.queryAssociatedPool(deposit), pool);
  }

  function test_deposit_disable() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryDepositDisable(deposit), false);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateDepositDisable(deposit, true);
    assertEq(settings.queryDepositDisable(deposit), false);

    vm.expectEmit(address(settings));
    emit DepositDisableUpdated(deposit, true);
    vm.prank(dao);
    settings.updateDepositDisable(deposit, true);
    assertEq(settings.queryDepositDisable(deposit), true);

    vm.expectRevert(GovernanceErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateDepositDisable(deposit, true);
    assertEq(settings.queryDepositDisable(deposit), true);

    vm.expectEmit(address(settings));
    emit DepositDisableUpdated(deposit, false);
    vm.prank(dao);
    settings.updateDepositDisable(deposit, false);
    assertEq(settings.queryDepositDisable(deposit), false);
  }
}
