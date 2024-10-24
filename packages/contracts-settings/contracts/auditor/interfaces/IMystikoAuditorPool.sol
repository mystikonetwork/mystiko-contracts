// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

interface IMystikoAuditorPool {
  function queryAuditorPublicKey(uint256 _index) external view returns (uint256);
  function queryAllAuditorPublicKeys() external view returns (uint256[] memory);
}
