// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

import {Test} from "forge-std/Test.sol";
import "./mock/MockMystikoToken.sol";
import "../contracts/MystikoRollerPool.sol";
import "../contracts/interfaces/IMystikoRollerPool.sol";
import "../contracts/MystikoRollerPoolErrors.sol";
import "./utils/Random.sol";
import "lib/mystiko-governance/packages/contracts/contracts/GovernanceErrors.sol";
import "lib/mystiko-governance/packages/contracts/contracts/token/MystikoVoteToken.sol";
import "lib/mystiko-governance/packages/contracts/contracts/impl/MystikoGovernorRegistry.sol";

contract MystikoRollerPoolTest is Test, Random {
  bytes32 public constant ROLLER_ROLE = keccak256("MYSTIKO_ROLLER_ROLE");

  address public dao;
  MystikoGovernorRegistry public daoRegistry;
  MockMystikoToken public XZK;
  MystikoVoteToken public vXZK;
  MystikoRollerPool public rollerPool;

  event RollerMinVoteTokenAmountChanged(uint256 _amount);
  event MinRollupSizeChanged(uint256 _size);
  event RoleGranted(address indexed account);
  event RoleRevoked(address indexed account);

  function setUp() public {
    XZK = new MockMystikoToken();
    vXZK = new MystikoVoteToken(XZK);
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.prank(dao);
    daoRegistry = new MystikoGovernorRegistry();
    address[] memory rollers = new address[](0);
    rollerPool = new MystikoRollerPool(address(daoRegistry), address(vXZK), 1_000_000e18, rollers);
    vm.prank(dao);
    rollerPool.setAdminRole();
  }

  function test_construct() public {
    address roller1 = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address roller2 = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address[] memory rollers = new address[](2);
    rollers[0] = roller1;
    rollers[1] = roller2;
    MystikoRollerPool rollerPool = new MystikoRollerPool(address(daoRegistry), address(vXZK), 0, rollers);
    assertTrue(rollerPool.hasRole(ROLLER_ROLE, roller1));
    assertTrue(rollerPool.hasRole(ROLLER_ROLE, roller2));
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
    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    rollerPool.validateRoller(p1);

    vm.prank(dao);
    rollerPool.grantRole(ROLLER_ROLE, roller);

    vm.expectRevert(MystikoRollerPoolErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    rollerPool.validateRoller(p1);

    uint256 voteAmount = 1_000_000e18;
    XZK.transfer(roller, voteAmount);
    vm.prank(roller);
    XZK.approve(address(vXZK), voteAmount);
    vm.prank(roller);
    vXZK.depositFor(roller, voteAmount);
    vm.prank(pool);
    bool canDo = rollerPool.validateRoller(p1);
    assertTrue(canDo);

    RollerValidateParams memory p2 = RollerValidateParams({
      pool: pool,
      roller: roller,
      rollupSize: 0,
      queueCount: 0,
      includedCount: 0
    });
    vm.expectRevert(MystikoRollerPoolErrors.RollupSizeTooSmall.selector);
    vm.prank(pool);
    rollerPool.validateRoller(p2);

    vm.prank(dao);
    rollerPool.revokeRole(ROLLER_ROLE, roller);

    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    rollerPool.validateRoller(p1);

    // open role
    vm.prank(dao);
    rollerPool.grantRole(ROLLER_ROLE, address(0));

    bool canDo2 = rollerPool.validateRoller(p1);
    assertTrue(canDo2);
  }

  function test_canDoRollup_with_zero_token() public {
    address[] memory rollers = new address[](0);
    MystikoRollerPool rollerPool = new MystikoRollerPool(address(daoRegistry), address(vXZK), 0, rollers);
    vm.prank(dao);
    rollerPool.setAdminRole();

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
    rollerPool.validateRoller(p1);

    vm.prank(dao);
    rollerPool.grantRole(ROLLER_ROLE, roller);

    vm.prank(pool);
    bool canDo = rollerPool.validateRoller(p1);
    assertTrue(canDo);

    MystikoRollerPool rollerPool2 = new MystikoRollerPool(address(daoRegistry), address(0), 0, rollers);
    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    rollerPool2.validateRoller(p1);

    vm.prank(dao);
    rollerPool2.setAdminRole();
    vm.prank(dao);
    rollerPool2.grantRole(ROLLER_ROLE, roller);
    vm.prank(pool);
    bool canDo2 = rollerPool2.validateRoller(p1);
    assertTrue(canDo2);
  }

  function test_changeRollerMinVoteTokenAmount() public {
    address operator = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    vm.prank(operator);
    rollerPool.setRollerMinVoteTokenAmount(1_000_000e18);

    vm.expectRevert(MystikoRollerPoolErrors.NotChanged.selector);
    vm.prank(dao);
    rollerPool.setRollerMinVoteTokenAmount(1_000_000e18);

    vm.expectEmit(address(rollerPool));
    emit RollerMinVoteTokenAmountChanged(2_000_000e18);
    vm.prank(dao);
    rollerPool.setRollerMinVoteTokenAmount(2_000_000e18);
    assertEq(rollerPool.minVoteTokenAmount(), 2_000_000e18);
  }

  function test_changeMinRollupSize() public {
    address operator = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    vm.prank(operator);
    rollerPool.setMinRollupSize(1);

    vm.expectRevert(MystikoRollerPoolErrors.NotChanged.selector);
    vm.prank(dao);
    rollerPool.setMinRollupSize(1);

    vm.expectEmit(address(rollerPool));
    emit MinRollupSizeChanged(2);
    vm.prank(dao);
    rollerPool.setMinRollupSize(2);
    assertEq(rollerPool.minRollupSize(), 2);
  }

  function test_grant_and_revoke_roller() public {
    address roller = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertFalse(rollerPool.hasRole(ROLLER_ROLE, roller));

    vm.expectRevert();
    rollerPool.grantRole(ROLLER_ROLE, roller);

    vm.prank(dao);
    rollerPool.grantRole(ROLLER_ROLE, roller);
    assertTrue(rollerPool.hasRole(ROLLER_ROLE, roller));

    vm.expectRevert();
    rollerPool.revokeRole(ROLLER_ROLE, roller);

    vm.prank(dao);
    rollerPool.revokeRole(ROLLER_ROLE, roller);
    assertFalse(rollerPool.hasRole(ROLLER_ROLE, roller));
  }
}
