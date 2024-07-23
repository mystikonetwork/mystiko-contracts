// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

import {Test} from "forge-std/Test.sol";
import "../../contracts/MystikoSettingsErrors.sol";
import "../../contracts/MystikoSettings.sol";
import "../mock/MockMystikoToken.sol";
import "contracts-certificate/contracts/MystikoCertificate.sol";
import "contracts-relayer/contracts/MystikoRelayerErrors.sol";
import "contracts-relayer/contracts/MystikoRelayerPool.sol";
import "contracts-roller/contracts/MystikoRollerPoolErrors.sol";
import "contracts-roller/contracts/MystikoRollerPool.sol";
import "lib/mystiko-governance/packages/contracts/contracts/token/MystikoVoteToken.sol";
import "lib/mystiko-governance/packages/contracts/contracts/impl/MystikoGovernorRegistry.sol";
import "lib/mystiko-governance/packages/contracts/contracts/GovernanceErrors.sol";
import "contracts-certificate/contracts/interfaces/IMystikoCertificate.sol";
import "../utils/Random.sol";

contract MystikoSettingsCenterTest is Test, Random {
  address public dao;
  uint256 public privateKey;
  address public issuer;
  address[11] public rollupVerifiers;
  address[6] public transactVerifiers;
  uint256[5] public auditors;
  MystikoCertificate public certificateChecker;
  MystikoRollerPool public rollerPool;
  MystikoRelayerPool public relayerPool;
  MystikoSettings public settings;

  event CertificateVerifierChanged(address indexed verifier);

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
    privateKey = uint256(keccak256(abi.encodePacked(_random())));
    issuer = vm.addr(privateKey);
    certificateChecker = new MystikoCertificate(address(daoRegistry), issuer, true);
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

  function test_get_issuer_address() public {
    assertEq(settings.getCertificateIssuer(), issuer);
  }

  function test_change_certificate_verifier() public {
    vm.expectRevert(GovernanceErrors.OnlyMystikoDAO.selector);
    settings.setCertificateVerifier(address(certificateChecker));

    vm.expectRevert(MystikoSettingsErrors.NotChanged.selector);
    vm.prank(dao);
    settings.setCertificateVerifier(address(certificateChecker));

    IMystikoCertificate newCertificate = IMystikoCertificate(
      address(uint160(uint256(keccak256(abi.encodePacked(_random())))))
    );
    vm.expectEmit(address(settings));
    emit CertificateVerifierChanged(address(newCertificate));
    vm.prank(dao);
    settings.setCertificateVerifier(address(newCertificate));
    assertEq(address(settings.certificate()), address(newCertificate));
  }

  function test_verify_certificate() public {
    uint256 deadline = block.timestamp + 1 days;
    address account = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));
    address asset = address(uint160(uint256(keccak256(abi.encodePacked(_random())))));

    // Create a valid signature
    bytes32 hash = keccak256(abi.encodePacked(block.chainid, account, asset, deadline));
    (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, hash);
    bytes memory signature = abi.encodePacked(r, s, v);

    CertificateParams memory params = CertificateParams({
      account: account,
      asset: asset,
      deadline: deadline,
      signature: signature
    });

    bool result = settings.verifyCertificate(params);
    assertTrue(result);
  }
}
