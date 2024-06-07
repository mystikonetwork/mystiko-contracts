// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

struct CertificateParams {
  address account;
  address asset;
  uint256 deadline;
  bytes signature;
}

interface IMystikoCertificate {
  function getCertificateIssuer() external view returns (address);
  function isCertificateCheckEnabled() external view returns (bool);
  function verifyCertificate(CertificateParams memory _params) external view returns (bool);
}
