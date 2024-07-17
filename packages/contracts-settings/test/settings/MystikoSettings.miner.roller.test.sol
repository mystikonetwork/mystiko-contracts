// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "../mock/MockMystikoToken.sol";
import "contracts-certificate/contracts/MystikoCertificate.sol";
import "contracts-roller/contracts/interfaces/IMystikoRollerPool.sol";
import "contracts-relayer/contracts/MystikoRelayerErrors.sol";
import "contracts-relayer/contracts/MystikoRelayerPool.sol";
import "contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "contracts-roller/contracts/MystikoRollerPool.sol";
import "lib/mystiko-governance/packages/contracts/contracts/token/MystikoVoteToken.sol";
import "lib/mystiko-governance/packages/contracts/contracts/impl/MystikoGovernorRegistry.sol";
import "lib/mystiko-governance/packages/contracts/contracts/GovernanceErrors.sol";
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

  event RollerPoolChanged(address indexed rollerPool);

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
    vm.prank(dao);
    settings.setAdminRole();
    vm.prank(dao);
    rollerPool.setAdminRole();
    vm.prank(dao);
    relayerPool.setAdminRole();
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

  function test_change_roller_pool() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setRollerPool(address(rollerPool));

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setRollerPool(address(rollerPool));

    IMystikoRollerPool newPool = IMystikoRollerPool(
      address(uint160(uint256(keccak256(abi.encodePacked(_random())))))
    );
    vm.expectEmit(address(settings));
    emit RollerPoolChanged(address(newPool));
    vm.prank(dao);
    settings.setRollerPool(address(newPool));

    assertEq(address(settings.rollerPool()), address(newPool));
  }
}
