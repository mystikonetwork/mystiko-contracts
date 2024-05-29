// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettings.sol";
import "../../contracts/screen/impl/MystikoCertificate.sol";
import "../../contracts/miner/impl/MystikoRelayerPool.sol";
import "../../contracts/miner/impl/MystikoRollerPool.sol";
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

  event MinRollupFeeUpdated(address indexed deposit, uint256 minRollupFee);
  event TransferDisableUpdated(address indexed deposit, bool disable);

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

  function test_min_rollup_fee() public {
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryMinRollupFee(pool), 0);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateMinRollupFee(pool, 500);
    assertEq(settings.queryMinRollupFee(pool), 0);

    vm.expectEmit(address(settings));
    emit MinRollupFeeUpdated(pool, 600);
    vm.prank(dao);
    settings.updateMinRollupFee(pool, 600);
    assertEq(settings.queryMinRollupFee(pool), 600);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateMinRollupFee(pool, 600);
    assertEq(settings.queryMinRollupFee(pool), 600);
  }

  function test_transfer_disable() public {
    address pool = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    assertEq(settings.queryTransferDisable(pool), false);

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.updateTransferDisable(pool, true);
    assertEq(settings.queryTransferDisable(pool), false);

    vm.expectEmit(address(settings));
    emit TransferDisableUpdated(pool, true);
    vm.prank(dao);
    settings.updateTransferDisable(pool, true);
    assertEq(settings.queryTransferDisable(pool), true);

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.updateTransferDisable(pool, true);
    assertEq(settings.queryTransferDisable(pool), true);

    vm.expectEmit(address(settings));
    emit TransferDisableUpdated(pool, false);
    vm.prank(dao);
    settings.updateTransferDisable(pool, false);
    assertEq(settings.queryTransferDisable(pool), false);
  }
}
