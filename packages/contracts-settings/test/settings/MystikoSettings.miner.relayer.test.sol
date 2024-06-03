// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettings.sol";
import "../mock/MockMystikoToken.sol";
import "@mystikonetwork/contracts-certificate/contracts/MystikoCertificate.sol";
import "@mystikonetwork/contracts-relayer/contracts/interfaces/IMystikoRelayerPool.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPoolErrors.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPool.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPool.sol";
import "@mystikonetwork/governance/contracts/token/MystikoVoteToken.sol";
import "@mystikonetwork/governance/contracts/impl/MystikoGovernorRegistry.sol";
import "@mystikonetwork/governance/contracts/GovernanceErrors.sol";
import "../utils/Random.sol";

contract MystikoSettingsCenterTest is Test, Random {
  bytes32 public constant RELAYER_ROLE = keccak256("MYSTIKO_RELAYER_ROLE");

  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoSettings public settings;

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

  function test_can_do_relay() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    RelayerValidateParams memory p1 = RelayerValidateParams({pool: pool, relayer: relayer});
    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    settings.validateRelayer(p1);

    vm.prank(dao);
    relayerPool.grantRole(RELAYER_ROLE, relayer);

    vm.expectRevert(MystikoSettingsErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    settings.validateRelayer(p1);

    vm.prank(dao);
    relayerPool.changeRelayerMinVoteTokenAmount(0);
    vm.prank(pool);
    bool canDo = settings.validateRelayer(p1);
    assertTrue(canDo);
  }

  function test_change_relayer_registry() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.changeRelayerRegistry(IMystikoRelayerPool(relayerPool));

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.changeRelayerRegistry(IMystikoRelayerPool(relayerPool));

    IMystikoRelayerPool newRegistry = IMystikoRelayerPool(
      address(uint160(uint256(keccak256(abi.encodePacked(_random())))))
    );
    vm.expectEmit(address(settings));
    emit RelayerRegistryChanged(address(newRegistry));
    vm.prank(dao);
    settings.changeRelayerRegistry(newRegistry);
    assertEq(address(settings.relayerPool()), address(newRegistry));
  }
}
