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
  bytes32 public constant ROLLER_ROLE = keccak256("MYSTIKO_ROLLER_ROLE");

  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  CertificateRegistry public certificateRegistry;
  MystikoRollerRegistry public rollerRegistry;
  MystikoRelayerRegistry public relayerRegistry;
  MystikoSettingsCenter public settings;

  event RollerRegistryChanged(address indexed registry);

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

  function test_can_do_rollup() public {
    address roller = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    CanDoRollupParams memory p1 = CanDoRollupParams({
      pool: pool,
      roller: roller,
      rollupSize: 1,
      queueCount: 0,
      includedCount: 0
    });
    vm.expectRevert(SettingsCenterErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    settings.canDoRollup(p1);

    vm.prank(dao);
    rollerRegistry.grantRole(ROLLER_ROLE, roller);

    vm.expectRevert(SettingsCenterErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    settings.canDoRollup(p1);

    vm.prank(dao);
    rollerRegistry.changeRollerMinVoteTokenAmount(0);
    vm.prank(pool);
    bool canDo = settings.canDoRollup(p1);
    assertTrue(canDo);
  }

  function test_change_roller_registry() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.changeRollerRegistry(IMystikoRoller(rollerRegistry));

    vm.expectRevert(SettingsCenterErrors.NotChanged.selector);
    vm.prank(dao);
    settings.changeRollerRegistry(IMystikoRoller(rollerRegistry));

    IMystikoRoller newRegistry = IMystikoRoller(
      address(uint160(uint256(keccak256(abi.encodePacked(_random())))))
    );
    vm.expectEmit(address(settings));
    emit RollerRegistryChanged(address(newRegistry));
    vm.prank(dao);
    settings.changeRollerRegistry(newRegistry);
    assertEq(address(settings.rollerRegistry()), address(newRegistry));
  }
}
