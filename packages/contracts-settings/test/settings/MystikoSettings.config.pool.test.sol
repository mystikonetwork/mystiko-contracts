// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "@mystikonetwork/contracts-certificate/contracts/MystikoCertificate.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPoolErrors.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "@mystikonetwork/contracts-relayer/contracts/MystikoRelayerPool.sol";
import "@mystikonetwork/contracts-roller/contracts/MystikoRollerPool.sol";
import "../mock/MockMystikoToken.sol";
import "@mystikonetwork/governance/contracts/token/MystikoVoteToken.sol";
import "@mystikonetwork/governance/contracts/impl/MystikoGovernorRegistry.sol";
import "@mystikonetwork/governance/contracts/GovernanceErrors.sol";
import "../utils/Random.sol";

contract MystikoSettingsCenterTest is Test, Random {
  address public dao;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoSettings public settings;

  event MinRollupFeeChanged(address indexed deposit, uint256 minRollupFee);
  event TransferDisableChanged(address indexed deposit, bool disable);

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

  function test_min_rollup_fee() public {
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinRollupFee(pool), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setMinRollupFee(pool, 500);
    assertEq(settings.queryMinRollupFee(pool), 0);

    vm.expectEmit(address(settings));
    emit MinRollupFeeChanged(pool, 600);
    vm.prank(dao);
    settings.setMinRollupFee(pool, 600);
    assertEq(settings.queryMinRollupFee(pool), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setMinRollupFee(pool, 600);
    assertEq(settings.queryMinRollupFee(pool), 600);
  }

  function test_transfer_disable() public {
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.isTransferDisable(pool), false);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setTransferDisable(pool, true);
    assertEq(settings.isTransferDisable(pool), false);

    vm.expectEmit(address(settings));
    emit TransferDisableChanged(pool, true);
    vm.prank(dao);
    settings.setTransferDisable(pool, true);
    assertEq(settings.isTransferDisable(pool), true);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setTransferDisable(pool, true);
    assertEq(settings.isTransferDisable(pool), true);

    vm.expectEmit(address(settings));
    emit TransferDisableChanged(pool, false);
    vm.prank(dao);
    settings.setTransferDisable(pool, false);
    assertEq(settings.isTransferDisable(pool), false);
  }
}
