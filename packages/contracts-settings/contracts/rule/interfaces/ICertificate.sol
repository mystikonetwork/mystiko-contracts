// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

struct CertificateParams {
  address account;
  address asset;
  uint256 deadline;
  bytes signature;
}

interface ICertificate {
  function getIssuerAddress() external view returns (address);
  function verifyCertificate(CertificateParams memory _params) external view returns (bool);
}
