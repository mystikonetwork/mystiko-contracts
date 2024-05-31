// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "@mystikonetwork/governance/contracts/token/MystikoVoteToken.sol";
import "../../../mock/MockMystikoToken.sol";
import "@mystikonetwork/governance/contracts/impl/MystikoGovernorRegistry.sol";
import "../../../../contracts/miner/impl/MystikoRollerPool.sol";
import "../../../../contracts/miner/interfaces/IMystikoRollerPool.sol";
import "../../../../contracts/MystikoSettingsErrors.sol";
import "../../../utils/Random.sol";

contract MystikoRollerRegistryTest is Test, Random {
  bytes32 public constant ROLLER_ROLE = keccak256("MYSTIKO_ROLLER_ROLE");

  address public dao;
  MystikoGovernorRegistry public daoRegistry;
  MockMystikoToken public XZK;
  MystikoVoteToken public vXZK;
  MystikoRollerPool public registry;

  event RollerMinVoteTokenAmountChanged(uint256 _amount);
  event MinRollupSizeChanged(uint256 _size);
  event RoleGranted(address indexed account);
  event RoleRevoked(address indexed account);

  function setUp() public {
    XZK = new MockMystikoToken();
    vXZK = new MystikoVoteToken(XZK);
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    daoRegistry = new MystikoGovernorRegistry(dao);
    registry = new MystikoRollerPool(address(daoRegistry), address(vXZK), 1_000_000e18);
  }

  function test_canDoRollup() public {
    address roller = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    RollerValidateParams memory p1 = RollerValidateParams({
      pool: pool,
      roller: roller,
      rollupSize: 1,
      queueCount: 0,
      includedCount: 0
    });
    vm.expectRevert(MystikoSettingsErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    registry.validate(p1);

    vm.prank(dao);
    registry.grantRole(ROLLER_ROLE, roller);

    vm.expectRevert(MystikoSettingsErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    registry.validate(p1);

    uint256 voteAmount = 1_000_000e18;
    XZK.transfer(roller, voteAmount);
    vm.prank(roller);
    XZK.approve(address(vXZK), voteAmount);
    vm.prank(roller);
    vXZK.depositFor(roller, voteAmount);
    vm.prank(pool);
    bool canDo = registry.validate(p1);
    assertTrue(canDo);

    RollerValidateParams memory p2 = RollerValidateParams({
      pool: pool,
      roller: roller,
      rollupSize: 0,
      queueCount: 0,
      includedCount: 0
    });
    vm.expectRevert(MystikoSettingsErrors.RollupSizeTooSmall.selector);
    vm.prank(pool);
    registry.validate(p2);

    vm.prank(dao);
    registry.revokeRole(ROLLER_ROLE, roller);

    vm.expectRevert(MystikoSettingsErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    registry.validate(p1);

    // open role
    vm.prank(dao);
    registry.grantRole(ROLLER_ROLE, address(0));

    bool canDo2 = registry.validate(p1);
    assertTrue(canDo2);
  }

  function test_canDoRollup_with_zero_token() public {
    MystikoRollerPool registryZero = new MystikoRollerPool(address(daoRegistry), address(vXZK), 0);

    address roller = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    RollerValidateParams memory p1 = RollerValidateParams({
      pool: pool,
      roller: roller,
      rollupSize: 1,
      queueCount: 0,
      includedCount: 0
    });
    vm.expectRevert(MystikoSettingsErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    registryZero.validate(p1);

    vm.prank(dao);
    registryZero.grantRole(ROLLER_ROLE, roller);

    vm.prank(pool);
    bool canDo = registryZero.validate(p1);
    assertTrue(canDo);
  }

  function test_changeRollerMinVoteTokenAmount() public {
    address operator = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    vm.prank(operator);
    registry.changeRollerMinVoteTokenAmount(1_000_000e18);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    registry.changeRollerMinVoteTokenAmount(1_000_000e18);

    vm.expectEmit(address(registry));
    emit RollerMinVoteTokenAmountChanged(2_000_000e18);
    vm.prank(dao);
    registry.changeRollerMinVoteTokenAmount(2_000_000e18);
    assertEq(registry.minVoteTokenAmount(), 2_000_000e18);
  }

  function test_changeMinRollupSize() public {
    address operator = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    vm.prank(operator);
    registry.changeMinRollupSize(1);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    registry.changeMinRollupSize(1);

    vm.expectEmit(address(registry));
    emit MinRollupSizeChanged(2);
    vm.prank(dao);
    registry.changeMinRollupSize(2);
    assertEq(registry.minRollupSize(), 2);
  }

  function test_grant_and_revoke_roller() public {
    address roller = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertFalse(registry.hasRole(ROLLER_ROLE, roller));

    vm.expectRevert();
    registry.grantRole(ROLLER_ROLE, roller);

    vm.prank(dao);
    registry.grantRole(ROLLER_ROLE, roller);
    assertTrue(registry.hasRole(ROLLER_ROLE, roller));

    vm.expectRevert();
    registry.revokeRole(ROLLER_ROLE, roller);

    vm.prank(dao);
    registry.revokeRole(ROLLER_ROLE, roller);
    assertFalse(registry.hasRole(ROLLER_ROLE, roller));
  }
}
