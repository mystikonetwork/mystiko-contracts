// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "../mock/MockMystikoToken.sol";
import "@mystikonetwork/contracts-certificate/contracts/MystikoCertificate.sol";
import "@mystikonetwork/contracts-roller/contracts/interfaces/IMystikoRollerPool.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPoolErrors.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPool.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPool.sol";
import "@mystikonetwork/contracts-governance/contracts/token/MystikoVoteToken.sol";
import "@mystikonetwork/contracts-governance/contracts/impl/MystikoGovernorRegistry.sol";
import "@mystikonetwork/contracts-governance/contracts/GovernanceErrors.sol";
import "../utils/Random.sol";

contract MystikoSettingsCenterTest is Test, Random {
  bytes32 public constant ROLLER_ROLE = keccak256("MYSTIKO_ROLLER_ROLE");

  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoSettings public settings;

  event RollerPoolChanged(address indexed registry);

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

  function test_can_do_rollup() public {
    address roller = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    RollerValidateParams memory p1 = RollerValidateParams({
      pool: pool,
      roller: roller,
      rollupSize: 1,
      queueCount: 0,
      includedCount: 0
    });
    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    settings.validateRoller(p1);

    vm.prank(dao);
    rollerPool.grantRole(ROLLER_ROLE, roller);

    vm.expectRevert(MystikoSettingsErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    settings.validateRoller(p1);

    vm.prank(dao);
    rollerPool.setRollerMinVoteTokenAmount(0);
    vm.prank(pool);
    bool canDo = settings.validateRoller(p1);
    assertTrue(canDo);
  }

  function test_change_roller_registry() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setRollerPool(IMystikoRollerPool(rollerPool));

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setRollerPool(IMystikoRollerPool(rollerPool));

    IMystikoRollerPool newRegistry = IMystikoRollerPool(
      address(uint160(uint256(keccak256(abi.encodePacked(_random())))))
    );
    vm.expectEmit(address(settings));
    emit RollerPoolChanged(address(newRegistry));
    vm.prank(dao);
    settings.setRollerPool(newRegistry);
    assertEq(address(settings.rollerPool()), address(newRegistry));
  }
}
