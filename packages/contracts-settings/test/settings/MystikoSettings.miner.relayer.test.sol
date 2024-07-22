// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "../mock/MockMystikoToken.sol";
import "contracts-certificate/contracts/MystikoCertificate.sol";
import "contracts-relayer/contracts/interfaces/IMystikoRelayerPool.sol";
import "contracts-relayer/contracts/MystikoRelayerErrors.sol";
import "contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "contracts-relayer/contracts/MystikoRelayerPool.sol";
import "contracts-roller/contracts/MystikoRollerPool.sol";
import "lib/mystiko-governance/packages/contracts/contracts/token/MystikoVoteToken.sol";
import "lib/mystiko-governance/packages/contracts/contracts/impl/MystikoGovernorRegistry.sol";
import "lib/mystiko-governance/packages/contracts/contracts/GovernanceErrors.sol";
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

  event RelayerPoolChanged(address indexed relayerPool);

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

  function test_can_do_relay() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    RelayerValidateParams memory p1 = RelayerValidateParams({pool: pool, relayer: relayer});
    vm.expectRevert(MystikoSettingsErrors.InsufficientBalanceForAction.selector);
    vm.prank(pool);
    settings.validateRelayer(p1);

    vm.prank(dao);
    relayerPool.setRelayerMinVoteTokenAmount(0);
    vm.prank(pool);
    bool canDo = settings.validateRelayer(p1);
    assertTrue(canDo);
  }

  function test_change_relayer_pool() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setRelayerPool(address(relayerPool));

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setRelayerPool(address(relayerPool));

    IMystikoRelayerPool newPool = IMystikoRelayerPool(
      address(uint160(uint256(keccak256(abi.encodePacked(_random())))))
    );
    vm.expectEmit(address(settings));
    emit RelayerPoolChanged(address(newPool));
    vm.prank(dao);
    settings.setRelayerPool(address(newPool));

    assertEq(address(settings.relayerPool()), address(newPool));
  }
}
