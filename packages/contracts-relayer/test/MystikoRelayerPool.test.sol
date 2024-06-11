// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";
import "./mock/MockMystikoToken.sol";
import "../contracts/MystikoRelayerPool.sol";
import "../contracts/interfaces/IMystikoRelayerPool.sol";
import "../contracts/MystikoRelayerPoolErrors.sol";
import "./utils/Random.sol";
import "@mystikonetwork/contracts-governance/contracts/GovernanceErrors.sol";
import "@mystikonetwork/contracts-governance/contracts/token/MystikoVoteToken.sol";
import "@mystikonetwork/contracts-governance/contracts/impl/MystikoGovernorRegistry.sol";

contract MystikoRelayerPoolTest is Test, Random {
  bytes32 public constant RELAYER_ROLE = keccak256("MYSTIKO_RELAYER_ROLE");

  address public dao;
  MystikoGovernorRegistry public daoRegistry;
  MockMystikoToken public XZK;
  MystikoVoteToken public vXZK;
  MystikoRelayerPool public relayerPool;

  event RelayerMinVoteTokenAmountChanged(uint256 _amount);
  event RoleGranted(address indexed account);
  event RoleRevoked(address indexed account);

  function setUp() public {
    XZK = new MockMystikoToken();
    vXZK = new MystikoVoteToken(XZK);
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.prank(dao);
    daoRegistry = new MystikoGovernorRegistry();
    relayerPool = new MystikoRelayerPool(address(daoRegistry), address(vXZK), 100_000e18);
    vm.prank(dao);
    relayerPool.setAdminRole();
  }

  function test_canDoRelay() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    RelayerValidateParams memory p1 = RelayerValidateParams({pool: pool, relayer: relayer});
    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    relayerPool.validateRelayer(p1);

    vm.prank(dao);
    relayerPool.grantRole(RELAYER_ROLE, relayer);

    vm.expectRevert(MystikoRelayerPoolErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    relayerPool.validateRelayer(p1);

    uint256 voteAmount = 100_000e18;
    XZK.transfer(relayer, voteAmount);
    vm.prank(relayer);
    XZK.approve(address(vXZK), voteAmount);
    vm.prank(relayer);
    vXZK.depositFor(relayer, voteAmount);
    vm.prank(pool);
    bool canDo = relayerPool.validateRelayer(p1);
    assertTrue(canDo);

    vm.prank(dao);
    relayerPool.revokeRole(RELAYER_ROLE, relayer);

    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    relayerPool.validateRelayer(p1);

    // open role
    vm.prank(dao);
    relayerPool.grantRole(RELAYER_ROLE, address(0));

    bool canDo2 = relayerPool.validateRelayer(p1);
    assertTrue(canDo2);
  }

  function test_canDoRelay_with_zero_token() public {
    MystikoRelayerPool registryZero = new MystikoRelayerPool(address(daoRegistry), address(vXZK), 0);
    vm.prank(dao);
    registryZero.setAdminRole();
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    RelayerValidateParams memory p1 = RelayerValidateParams({pool: pool, relayer: relayer});
    vm.expectRevert(GovernanceErrors.UnauthorizedRole.selector);
    vm.prank(pool);
    registryZero.validateRelayer(p1);

    vm.prank(dao);
    registryZero.grantRole(RELAYER_ROLE, relayer);

    vm.prank(pool);
    bool canDo = registryZero.validateRelayer(p1);
    assertTrue(canDo);
  }

  function test_changeRelayerMinVoteTokenAmount() public {
    address operator = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    vm.prank(operator);
    relayerPool.setRelayerMinVoteTokenAmount(100_000e18);

    vm.expectRevert(MystikoRelayerPoolErrors.NotChanged.selector);
    vm.prank(dao);
    relayerPool.setRelayerMinVoteTokenAmount(100_000e18);

    vm.expectEmit(address(relayerPool));
    emit RelayerMinVoteTokenAmountChanged(200_000e18);
    vm.prank(dao);
    relayerPool.setRelayerMinVoteTokenAmount(200_000e18);
    assertEq(relayerPool.minVoteTokenAmount(), 200_000e18);
  }

  function test_grant_and_revoke_relayer() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertFalse(relayerPool.hasRole(RELAYER_ROLE, relayer));

    vm.expectRevert();
    relayerPool.grantRole(RELAYER_ROLE, relayer);

    vm.prank(dao);
    relayerPool.grantRole(RELAYER_ROLE, relayer);
    assertTrue(relayerPool.hasRole(RELAYER_ROLE, relayer));

    vm.expectRevert();
    relayerPool.revokeRole(RELAYER_ROLE, relayer);

    vm.prank(dao);
    relayerPool.revokeRole(RELAYER_ROLE, relayer);
    assertFalse(relayerPool.hasRole(RELAYER_ROLE, relayer));
  }
}
