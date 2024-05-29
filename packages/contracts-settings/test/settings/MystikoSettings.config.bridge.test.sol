// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettings.sol";
import "../../contracts/screen/impl/MystikoCertificate.sol";
import "../../contracts/miner/impl/MystikoRelayerPool.sol";
import "../../contracts/miner/impl/MystikoRollerPool.sol";
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

  event MinBridgeFeeUpdated(address indexed deposit, uint256 minBridgeFee);
  event MinPeerExecutorFeeUpdated(address indexed deposit, uint256 minPeerExecutorFee);
  event MinPeerRollupFeeUpdated(address indexed deposit, uint256 minPeerRollupFee);

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

  function test_min_bridge_fee() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinBridgeFee(deposit), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateMinBridgeFee(deposit, 100);
    assertEq(settings.queryMinBridgeFee(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinBridgeFeeUpdated(deposit, 200);
    vm.prank(dao);
    settings.updateMinBridgeFee(deposit, 200);
    assertEq(settings.queryMinBridgeFee(deposit), 200);
  }

  function test_min_peer_executor_fee() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinPeerExecutorFee(deposit), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateMinPeerExecutorFee(deposit, 300);
    assertEq(settings.queryMinPeerExecutorFee(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinPeerExecutorFeeUpdated(deposit, 400);
    vm.prank(dao);
    settings.updateMinPeerExecutorFee(deposit, 400);
    assertEq(settings.queryMinPeerExecutorFee(deposit), 400);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateMinPeerExecutorFee(deposit, 400);
    assertEq(settings.queryMinPeerExecutorFee(deposit), 400);
  }

  function test_min_peer_rollup_fee() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinPeerRollupFee(deposit), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateMinPeerRollupFee(deposit, 500);
    assertEq(settings.queryMinPeerRollupFee(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinPeerRollupFeeUpdated(deposit, 600);
    vm.prank(dao);
    settings.updateMinPeerRollupFee(deposit, 600);
    assertEq(settings.queryMinPeerRollupFee(deposit), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateMinPeerRollupFee(deposit, 600);
    assertEq(settings.queryMinPeerRollupFee(deposit), 600);
  }
}
