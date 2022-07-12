// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IHasher3 {
  function poseidon(uint256[3] memory data) external pure returns (uint256);
}
