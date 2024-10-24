// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

import {Test} from "forge-std/Test.sol";
import "../contracts/MystikoCertificate.sol";
import "./utils/Random.sol";
import "lib/mystiko-governance/packages/contracts/contracts/GovernanceErrors.sol";
import "lib/mystiko-governance/packages/contracts/contracts/impl/MystikoGovernorRegistry.sol";

contract MystikoCertificateTest is Test, Random {
  address public dao;
  uint256 public privateKey;
  address public issuer;
  MystikoGovernorRegistry public daoRegistry;
  MystikoCertificate public checker;

  event CertificateCheck(bool state);
  event IssuerChanged(address issuer);

  function setUp() public {
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.prank(dao);
    daoRegistry = new MystikoGovernorRegistry();
    privateKey = uint256(keccak256(abi.encodePacked(_random())));
    issuer = vm.addr(privateKey);
    checker = new MystikoCertificate(address(daoRegistry), issuer, true);
    vm.prank(dao);
    checker.setAdminRole();
  }

  function test_construct() public {
    MystikoCertificate checker = new MystikoCertificate(address(daoRegistry), issuer, true);
    assertEq(checker.getCertificateIssuer(), issuer);
    assertTrue(checker.isCertificateCheckEnabled());

    MystikoCertificate checker2 = new MystikoCertificate(address(daoRegistry), issuer, false);
    assertEq(checker2.getCertificateIssuer(), issuer);
    assertFalse(checker2.isCertificateCheckEnabled());
  }

  function test_enable_certificate_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    checker.enableCertificateCheck();

    vm.expectEmit(address(checker));
    emit CertificateCheck(true);
    vm.prank(dao);
    checker.enableCertificateCheck();
    assertTrue(checker.isCertificateCheckEnabled());
  }

  function test_disable_certificate_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    checker.disableCertificateCheck();

    vm.expectEmit(address(checker));
    emit CertificateCheck(false);
    vm.prank(dao);
    checker.disableCertificateCheck();
    assertFalse(checker.isCertificateCheckEnabled());
  }

  function test_get_issuer_address() public {
    assertEq(checker.getCertificateIssuer(), issuer);
  }

  function test_update_issuer_address() public {
    address newIssuer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    checker.setIssuerAddress(newIssuer);

    vm.expectEmit(address(checker));
    emit IssuerChanged(newIssuer);
    vm.prank(dao);
    checker.setIssuerAddress(newIssuer);
    assertEq(checker.getCertificateIssuer(), newIssuer);
  }

  function test_verify_certificate() public {
    uint256 deadline = block.timestamp + 1 days;
    address account = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address asset = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    bytes32 paramHash = keccak256(abi.encodePacked(block.chainid, account, asset, deadline));
    bytes32 digest = MessageHashUtils.toEthSignedMessageHash(paramHash);
    (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, digest);
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
    checker.setIssuerAddress(newIssuer);
    assertEq(checker.getCertificateIssuer(), newIssuer);

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

    bytes32 paramHash = keccak256(abi.encodePacked(block.chainid, account, asset, deadline));
    bytes32 digest = MessageHashUtils.toEthSignedMessageHash(paramHash);
    (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, digest);
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
