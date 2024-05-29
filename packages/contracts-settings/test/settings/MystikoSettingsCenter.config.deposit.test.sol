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

  function test_min_deposit_amount() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 1000);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateMinDepositAmount(deposit, 500);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(SettingsCenterErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 0);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(SettingsCenterErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 1200);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinDepositAmountUpdated(deposit, 600);
    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 600);
    assertEq(settings.queryMinDepositAmount(deposit), 600);

    vm.expectRevert(SettingsCenterErrors.NotChanged.selector);
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

    vm.expectRevert(SettingsCenterErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 0);
    assertEq(settings.queryMaxDepositAmount(deposit), 0);

    vm.expectEmit(address(settings));
    emit MaxDepositAmountUpdated(deposit, 600);
    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 600);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);

    vm.expectRevert(SettingsCenterErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateMaxDepositAmount(deposit, 600);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);

    vm.prank(dao);
    settings.updateMinDepositAmount(deposit, 400);
    assertEq(settings.queryMinDepositAmount(deposit), 400);

    vm.expectRevert(SettingsCenterErrors.InvalidDepositAmount.selector);
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
