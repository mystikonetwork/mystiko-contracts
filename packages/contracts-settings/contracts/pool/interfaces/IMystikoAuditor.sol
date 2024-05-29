// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMystikoAuditor {
  function queryAuditorPublicKey(uint256 _index) external view returns (uint256);
  function queryAllAuditorPublicKeys() external view returns (uint256[] memory);
}
