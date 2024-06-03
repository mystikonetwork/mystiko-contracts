// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../contracts/MystikoCertificate.sol";
import "./utils/Random.sol";
import "@mystikonetwork/governance/contracts/impl/MystikoGovernorRegistry.sol";

contract MystikoCertificateRegistryTest is Test, Random {
  address public dao;
  uint256 public privateKey;
  address public issuer;
  MystikoGovernorRegistry public daoRegistry;
  MystikoCertificate public checker;

  event CertificateCheck(bool state);
  event IssuerChanged(address issuer);

  function setUp() public {
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    daoRegistry = new MystikoGovernorRegistry(dao);
    privateKey = uint256(keccak256(abi.encodePacked(_random())));
    issuer = vm.addr(privateKey);
    checker = new MystikoCertificate(address(daoRegistry), issuer);
  }

  function test_enable_certificate_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    checker.enableCertificateCheck();

    vm.expectEmit(address(checker));
    emit CertificateCheck(true);
    vm.prank(dao);
    checker.enableCertificateCheck();
    assertTrue(checker.checkEnabled());
  }

  function test_disable_certificate_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    checker.disableCertificateCheck();

    vm.expectEmit(address(checker));
    emit CertificateCheck(false);
    vm.prank(dao);
    checker.disableCertificateCheck();
    assertFalse(checker.checkEnabled());
  }

  function test_get_issuer_address() public {
    assertEq(checker.getIssuerAddress(), issuer);
  }

  function test_update_issuer_address() public {
    address newIssuer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    checker.updateIssuerAddress(newIssuer);

    vm.expectEmit(address(checker));
    emit IssuerChanged(newIssuer);
    vm.prank(dao);
    checker.updateIssuerAddress(newIssuer);
    assertEq(checker.getIssuerAddress(), newIssuer);
  }

  function test_verify_certificate() public {
    uint256 deadline = block.timestamp + 1 days;
    address account = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address asset = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    bytes32 hash = keccak256(abi.encodePacked(block.chainid, account, asset, deadline));
    (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, hash);
    bytes memory signature = abi.encodePacked(r, s, v);

    CertificateParams memory params = CertificateParams({
      account: account,
      asset: asset,
      deadline: deadline,
      signature: signature
    });

    bool result = checker.verifyCertificate(params);
    assertTrue(result);

    address newIssuer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.prank(dao);
    checker.updateIssuerAddress(newIssuer);
    assertEq(checker.getIssuerAddress(), newIssuer);

    bool result2 = checker.verifyCertificate(params);
    assertFalse(result2);

    vm.prank(dao);
    checker.disableCertificateCheck();
    bool result3 = checker.verifyCertificate(params);
    assertFalse(result3);
  }

  function test_verify_expired_certificate() public {
    uint256 deadline = block.timestamp - 1;
    address account = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address asset = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    bytes32 hash = keccak256(abi.encodePacked(block.chainid, account, asset, deadline));
    (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, hash);
    bytes memory signature = abi.encodePacked(r, s, v);

    CertificateParams memory params = CertificateParams({
      account: account,
      asset: asset,
      deadline: deadline,
      signature: signature
    });
    bool result = checker.verifyCertificate(params);
    assertFalse(result);
  }
}
