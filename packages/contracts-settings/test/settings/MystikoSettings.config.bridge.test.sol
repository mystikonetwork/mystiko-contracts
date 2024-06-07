// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoBridgeSettings.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../mock/MockMystikoToken.sol";
import "../utils/Random.sol";
import "@mystikonetwork/contracts-certificate/contracts/MystikoCertificate.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPoolErrors.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPool.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPool.sol";
import "@mystikonetwork/governance/contracts/token/MystikoVoteToken.sol";
import "@mystikonetwork/governance/contracts/impl/MystikoGovernorRegistry.sol";
import "@mystikonetwork/governance/contracts/GovernanceErrors.sol";

contract MystikoSettingsCenterTest is Test, Random {
  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoBridgeSettings public settings;

  event MinBridgeFeeChanged(address indexed deposit, uint256 minBridgeFee);
  event MinPeerExecutorFeeChanged(address indexed deposit, uint256 minPeerExecutorFee);
  event MinPeerRollupFeeChanged(address indexed deposit, uint256 minPeerRollupFee);

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
    certificateChecker = new MystikoCertificate(address(daoRegistry), address(0));
    rollerPool = new MystikoRollerPool(address(daoRegistry), address(vXZK), 100_000e18);
    relayerPool = new MystikoRelayerPool(address(daoRegistry), address(vXZK), 100_000e18);

    settings = new MystikoBridgeSettings(
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
    settings.setMinBridgeFee(deposit, 100);
    assertEq(settings.queryMinBridgeFee(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinBridgeFeeChanged(deposit, 200);
    vm.prank(dao);
    settings.setMinBridgeFee(deposit, 200);
    assertEq(settings.queryMinBridgeFee(deposit), 200);
  }

  function test_min_peer_executor_fee() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinPeerExecutorFee(deposit), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setMinPeerExecutorFee(deposit, 300);
    assertEq(settings.queryMinPeerExecutorFee(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinPeerExecutorFeeChanged(deposit, 400);
    vm.prank(dao);
    settings.setMinPeerExecutorFee(deposit, 400);
    assertEq(settings.queryMinPeerExecutorFee(deposit), 400);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setMinPeerExecutorFee(deposit, 400);
    assertEq(settings.queryMinPeerExecutorFee(deposit), 400);
  }

  function test_min_peer_rollup_fee() public {
    address deposit = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinPeerRollupFee(deposit), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setMinPeerRollupFee(deposit, 500);
    assertEq(settings.queryMinPeerRollupFee(deposit), 0);

    vm.expectEmit(address(settings));
    emit MinPeerRollupFeeChanged(deposit, 600);
    vm.prank(dao);
    settings.setMinPeerRollupFee(deposit, 600);
    assertEq(settings.queryMinPeerRollupFee(deposit), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setMinPeerRollupFee(deposit, 600);
    assertEq(settings.queryMinPeerRollupFee(deposit), 600);
  }
}
