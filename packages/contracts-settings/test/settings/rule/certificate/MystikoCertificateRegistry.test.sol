// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import "../../../../contracts/rule/impl/CertificateRegistry.sol";
import "../../../../contracts/SettingsCenterErrors.sol";
import "../../../utils/Random.sol";
import "@mystikonetwork/governance/contracts/impl/MystikoGovernorRegistry.sol";

contract MystikoCertificateRegistryTest is Test, Random {
  address public dao;
  uint256 public privateKey;
  address public issuer;
  MystikoGovernorRegistry public daoRegistry;
  CertificateRegistry public registry;

  event CertificateCheck(bool state);
  event IssuerChanged(address issuer);

  function setUp() public {
    dao = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    daoRegistry = new MystikoGovernorRegistry(dao);
    privateKey = uint256(keccak256(abi.encodePacked(_random())));
    issuer = vm.addr(privateKey);
    registry = new CertificateRegistry(address(daoRegistry), issuer);
  }

  function test_enable_certificate_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    registry.enableCertificateCheck();

    vm.expectEmit(address(registry));
    emit CertificateCheck(true);
    vm.prank(dao);
    registry.enableCertificateCheck();
    assertTrue(registry.certificateCheck());
  }

  function test_disable_certificate_check() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    registry.disableCertificateCheck();

    vm.expectEmit(address(registry));
    emit CertificateCheck(false);
    vm.prank(dao);
    registry.disableCertificateCheck();
    assertFalse(registry.certificateCheck());
  }

  function test_get_issuer_address() public {
    assertEq(registry.getIssuerAddress(), issuer);
  }

  function test_update_issuer_address() public {
    address newIssuer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    registry.updateIssuerAddress(newIssuer);

    vm.expectEmit(address(registry));
    emit IssuerChanged(newIssuer);
    vm.prank(dao);
    registry.updateIssuerAddress(newIssuer);
    assertEq(registry.getIssuerAddress(), newIssuer);
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

    bool result = registry.verifyCertificate(params);
    assertTrue(result);

    address newIssuer = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    vm.prank(dao);
    registry.updateIssuerAddress(newIssuer);
    assertEq(registry.getIssuerAddress(), newIssuer);

    vm.expectRevert(SettingsCenterErrors.InvalidIssuer.selector);
    bool result2 = registry.verifyCertificate(params);
    assertFalse(result2);

    vm.prank(dao);
    registry.disableCertificateCheck();
    bool result3 = registry.verifyCertificate(params);
    assertTrue(result3);
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
    vm.expectRevert(abi.encodeWithSelector(SettingsCenterErrors.ExpiredCertificate.selector, deadline));
    bool result = registry.verifyCertificate(params);
    assertFalse(result);
  }
}
