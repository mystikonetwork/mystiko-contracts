// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

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

  event MinDepositAmountChanged(address indexed pool, uint256 minDepositAmount);
  event MaxDepositAmountChanged(address indexed pool, uint256 maxDepositAmount);
  event AssociatedPoolChanged(address indexed deposit, address indexed pool);
  event DepositDisableChanged(address indexed deposit, bool disable);

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

  function test_min_deposit_amount() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.prank(dao);
    settings.setMaxDepositAmount(deposit, 1000);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setMinDepositAmount(deposit, 500);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.setMinDepositAmount(deposit, 0);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.setMinDepositAmount(deposit, 1200);
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinDepositAmountChanged(deposit, 600);
    vm.prank(dao);
    settings.setMinDepositAmount(deposit, 600);
    assertEq(settings.queryMinDepositAmount(deposit), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setMinDepositAmount(deposit, 600);
    assertEq(settings.queryMinDepositAmount(deposit), 600);
  }

  function test_max_deposit_amount() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinDepositAmount(deposit), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setMaxDepositAmount(deposit, 500);
    assertEq(settings.queryMaxDepositAmount(deposit), 0);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.setMaxDepositAmount(deposit, 0);
    assertEq(settings.queryMaxDepositAmount(deposit), 0);

    vm.expectEmit(address(settings));
    emit MaxDepositAmountChanged(deposit, 600);
    vm.prank(dao);
    settings.setMaxDepositAmount(deposit, 600);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setMaxDepositAmount(deposit, 600);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);

    vm.prank(dao);
    settings.setMinDepositAmount(deposit, 400);
    assertEq(settings.queryMinDepositAmount(deposit), 400);

    vm.expectRevert(MystikoSettingsErrors.InvalidDepositAmount.selector);
    vm.prank(dao);
    settings.setMaxDepositAmount(deposit, 300);
    assertEq(settings.queryMaxDepositAmount(deposit), 600);
  }

  function test_associate_pool() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryAssociatedPool(deposit), address(0));

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setAssociatedPool(deposit, pool);
    assertEq(settings.queryAssociatedPool(deposit), address(0));

    vm.expectEmit(address(settings));
    emit AssociatedPoolChanged(deposit, pool);
    vm.prank(dao);
    settings.setAssociatedPool(deposit, pool);
    assertEq(settings.queryAssociatedPool(deposit), pool);

    vm.expectRevert(GovernanceErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setAssociatedPool(deposit, pool);
    assertEq(settings.queryAssociatedPool(deposit), pool);
  }

  function test_deposit_disable() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.isDepositDisable(deposit), false);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setDepositDisable(deposit, true);
    assertEq(settings.isDepositDisable(deposit), false);

    vm.expectEmit(address(settings));
    emit DepositDisableChanged(deposit, true);
    vm.prank(dao);
    settings.setDepositDisable(deposit, true);
    assertEq(settings.isDepositDisable(deposit), true);

    vm.expectRevert(GovernanceErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setDepositDisable(deposit, true);
    assertEq(settings.isDepositDisable(deposit), true);

    vm.expectEmit(address(settings));
    emit DepositDisableChanged(deposit, false);
    vm.prank(dao);
    settings.setDepositDisable(deposit, false);
    assertEq(settings.isDepositDisable(deposit), false);
  }
}
