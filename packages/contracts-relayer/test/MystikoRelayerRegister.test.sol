// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

import {Test} from "forge-std/Test.sol";
import "./mock/MockMystikoToken.sol";
import "../contracts/MystikoRelayerErrors.sol";
import "../contracts/MystikoRelayerRegister.sol";
import "./utils/Random.sol";
import "lib/mystiko-governance/packages/contracts/contracts/GovernanceErrors.sol";
import "lib/mystiko-governance/packages/contracts/contracts/token/MystikoVoteToken.sol";
import "lib/mystiko-governance/packages/contracts/contracts/impl/MystikoGovernorRegistry.sol";

contract MystikoRelayerRegisterTest is Test, Random {
  address public dao;
  MystikoGovernorRegistry public daoRegistry;
  MystikoRelayerRegister public relayerRegister;

  event RelayerRegistered(address indexed relayer, string url, string name);
  event RelayerDeRegistered(address indexed relayer, string url, string name);
  event RelayerUrlUpdate(address indexed relayer, string url);
  event RelayerNameUpdate(address indexed relayer, string name);

  function setUp() public {
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.prank(dao);
    daoRegistry = new MystikoGovernorRegistry();
    relayerRegister = new MystikoRelayerRegister(address(daoRegistry));
  }

  function test_register_relayer() public {
    string memory url = "https://mystiko.network";
    string memory name = "Mystiko Network";
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    relayerRegister.registerRelayer(relayer, url, name);

    vm.prank(dao);
    vm.expectEmit(address(relayerRegister));
    emit RelayerRegistered(relayer, url, name);
    relayerRegister.registerRelayer(relayer, url, name);
    (string memory rUrl, string memory rName) = relayerRegister.getRelayerUrlAndName(relayer);
    assertEq(rUrl, url);
    assertEq(rName, name);
    assertEq(relayerRegister.relayerUrlMap(url), true);
    assertEq(relayerRegister.relayerNameMap(name), true);
    assertEq(relayerRegister.relayers(0), relayer);
    assertEq(relayerRegister.getRelayerCount(), 1);

    vm.expectRevert(MystikoRelayerErrors.AlreadyRegistered.selector);
    vm.prank(dao);
    relayerRegister.registerRelayer(relayer, url, name);

    address relayer2 = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(MystikoRelayerErrors.DuplicateUrl.selector);
    vm.prank(dao);
    relayerRegister.registerRelayer(relayer2, url, "Mystiko Network 2");

    vm.expectRevert(MystikoRelayerErrors.DuplicateName.selector);
    vm.prank(dao);
    relayerRegister.registerRelayer(relayer2, "https://mystiko.network2", name);

    vm.expectRevert(MystikoRelayerErrors.NameLengthTooShort.selector);
    vm.prank(dao);
    relayerRegister.registerRelayer(relayer2, "https://mystiko.network2", "Mys");

    string memory longName = buildLongString("Myst", 80);
    string memory longUrl = buildLongString("https://mystiko.network2", 300);

    vm.expectRevert(MystikoRelayerErrors.NameLengthTooBig.selector);
    vm.prank(dao);
    relayerRegister.registerRelayer(relayer2, "https://mystiko.network2", longName);

    vm.expectRevert(MystikoRelayerErrors.UrlLengthTooBig.selector);
    vm.prank(dao);
    relayerRegister.registerRelayer(relayer2, longUrl, "MystMyst");
  }

  function test_deregister_relayer_by_dao() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    relayerRegister.deregisterRelayer(relayer);

    vm.prank(dao);
    vm.expectRevert(MystikoRelayerErrors.RelayerUnregistered.selector);
    relayerRegister.deregisterRelayer(relayer);

    string memory url = "https://mystiko.network";
    string memory name = "Mystiko Network";
    vm.prank(dao);
    relayerRegister.registerRelayer(relayer, url, name);
    assertEq(relayerRegister.getRelayerCount(), 1);
    assertEq(relayerRegister.relayers(0), relayer);
    assertEq(relayerRegister.relayerUrlMap(url), true);
    assertEq(relayerRegister.relayerNameMap(name), true);

    vm.expectEmit(address(relayerRegister));
    emit RelayerDeRegistered(relayer, "", "");
    vm.prank(dao);
    relayerRegister.deregisterRelayer(relayer);
    assertEq(relayerRegister.getRelayerCount(), 0);
    assertEq(relayerRegister.relayerUrlMap(url), false);
    assertEq(relayerRegister.relayerNameMap(name), false);
  }

  function test_deregister_relayer_by_self() public {
    for (uint i = 0; i < 10; i++) {
      address relayer = address(uint160(uint256(keccak256(abi.encodePacked(block.timestamp, i)))));
      string memory url = string(abi.encodePacked("https://mystiko.network", i));
      string memory name = string(abi.encodePacked("Mystiko Network", i));

      vm.prank(dao);
      relayerRegister.registerRelayer(relayer, url, name);

      assertEq(relayerRegister.relayers(i), relayer);
      assertEq(relayerRegister.relayerUrlMap(url), true);
      assertEq(relayerRegister.relayerNameMap(name), true);
      assertEq(relayerRegister.getRelayerCount(), i + 1);
    }

    (string[] memory urls, string[] memory names, address[] memory relayers) = relayerRegister
      .getAllRelayerInfo();
    assertEq(urls.length, 10);
    assertEq(names.length, 10);
    assertEq(relayers.length, 10);

    for (uint i = 0; i < 10; i++) {
      assertEq(relayers[i], relayerRegister.relayers(i));
      assertEq(urls[i], string(abi.encodePacked("https://mystiko.network", i)));
      assertEq(names[i], string(abi.encodePacked("Mystiko Network", i)));
    }

    for (uint i = 0; i < 5; i++) {
      address relayer = relayerRegister.relayers(4);
      (string memory url, string memory name) = relayerRegister.getRelayerUrlAndName(relayer);

      vm.prank(relayer);
      relayerRegister.deregisterRelayer();
      assertEq(relayerRegister.getRelayerCount(), 9 - i);
      assertEq(relayerRegister.relayerUrlMap(url), false);
      assertEq(relayerRegister.relayerNameMap(name), false);

      (string memory url2, string memory name2) = relayerRegister.getRelayerUrlAndName(relayer);
      assertEq(url2, "");
      assertEq(name2, "");
    }

    for (uint i = 0; i < 5; i++) {
      address relayer = relayerRegister.relayers(0);
      (string memory url, string memory name) = relayerRegister.getRelayerUrlAndName(relayer);

      vm.prank(relayer);
      relayerRegister.deregisterRelayer();
      assertEq(relayerRegister.getRelayerCount(), 4 - i);
      assertEq(relayerRegister.relayerUrlMap(url), false);
      assertEq(relayerRegister.relayerNameMap(name), false);

      (string memory url2, string memory name2) = relayerRegister.getRelayerUrlAndName(relayer);
      assertEq(url2, "");
      assertEq(name2, "");
    }

    assertEq(relayerRegister.getRelayerCount(), 0);
  }

  function test_set_name() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    string memory url = "https://mystiko.network";
    string memory name = "Mystiko Network";
    string memory name2 = "Mystiko Network 2";

    vm.prank(dao);
    relayerRegister.registerRelayer(relayer, url, name);
    assertEq(relayerRegister.relayerNameMap(name), true);
    assertEq(relayerRegister.relayerNameMap(name2), false);

    vm.expectEmit(address(relayerRegister));
    emit RelayerNameUpdate(relayer, name2);
    vm.prank(relayer);
    relayerRegister.setRelayerName(name2);
    (string memory rUrl, string memory rName) = relayerRegister.getRelayerUrlAndName(relayer);
    assertEq(rUrl, url);
    assertEq(rName, name2);
    assertEq(relayerRegister.relayerNameMap(name), false);
    assertEq(relayerRegister.relayerNameMap(name2), true);

    vm.expectRevert(MystikoRelayerErrors.OnlyRelayer.selector);
    relayerRegister.setRelayerName(name2);

    vm.expectRevert(MystikoRelayerErrors.DuplicateName.selector);
    vm.prank(relayer);
    relayerRegister.setRelayerName(name2);
  }

  function test_set_url() public {
    address relayer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    string memory url = "https://mystiko.network";
    string memory name = "Mystiko Network";
    string memory url2 = "https://mystiko.network2";

    vm.prank(dao);
    relayerRegister.registerRelayer(relayer, url, name);
    assertEq(relayerRegister.relayerUrlMap(url), true);
    assertEq(relayerRegister.relayerUrlMap(url2), false);

    vm.expectEmit(address(relayerRegister));
    emit RelayerUrlUpdate(relayer, url2);
    vm.prank(relayer);
    relayerRegister.setRelayerUrl(url2);
    (string memory rUrl, string memory rName) = relayerRegister.getRelayerUrlAndName(relayer);
    assertEq(rUrl, url2);
    assertEq(rName, name);
    assertEq(relayerRegister.relayerUrlMap(url), false);
    assertEq(relayerRegister.relayerUrlMap(url2), true);

    vm.expectRevert(MystikoRelayerErrors.OnlyRelayer.selector);
    relayerRegister.setRelayerUrl(url2);

    vm.expectRevert(MystikoRelayerErrors.DuplicateUrl.selector);
    vm.prank(relayer);
    relayerRegister.setRelayerUrl(url2);
  }

  function buildLongString(string memory base, uint256 repeatCount) internal pure returns (string memory) {
    bytes memory result = bytes(base);
    for (uint256 i = 1; i < repeatCount; i++) {
      result = abi.encodePacked(result, base);
    }
    return string(result);
  }
}
