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
import "../../contracts/pool/interfaces/IMystikoVerifier.sol";

contract MystikoSettingsCenterTest is Test, Random {
  bytes32 public constant RELAYER_ROLE = keccak256("MYSTIKO_RELAYER_ROLE");

  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  CertificateRegistry public certificateRegistry;
  MystikoRollerRegistry public rollerRegistry;
  MystikoRelayerRegistry public relayerRegistry;
  MystikoSettingsCenter public settings;

  event RelayerRegistryChanged(address indexed registry);

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

  function test_can_do_relay() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    CanDoRelayParams memory p1 = CanDoRelayParams({pool: pool, relayer: relayer});
    vm.expectRevert(SettingsCenterErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    settings.canDoRelay(p1);

    vm.prank(dao);
    relayerRegistry.grantRole(RELAYER_ROLE, relayer);

    vm.expectRevert(SettingsCenterErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    settings.canDoRelay(p1);

    vm.prank(dao);
    relayerRegistry.changeRelayerMinVoteTokenAmount(0);
    vm.prank(pool);
    bool canDo = settings.canDoRelay(p1);
    assertTrue(canDo);
  }

  function test_change_relayer_registry() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.changeRelayerRegistry(IMystikoRelayer(relayerRegistry));

    vm.expectRevert(SettingsCenterErrors.NotChanged.selector);
    vm.prank(dao);
    settings.changeRelayerRegistry(IMystikoRelayer(relayerRegistry));

    IMystikoRelayer newRegistry = IMystikoRelayer(
      address(uint160(uint256(keccak256(abi.encodePacked(_random())))))
    );
    vm.expectEmit(address(settings));
    emit RelayerRegistryChanged(address(newRegistry));
    vm.prank(dao);
    settings.changeRelayerRegistry(newRegistry);
    assertEq(address(settings.relayerRegistry()), address(newRegistry));
  }
}
