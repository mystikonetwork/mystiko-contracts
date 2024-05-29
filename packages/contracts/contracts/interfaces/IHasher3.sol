// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IHasher3 {
  function poseidon(uint256[3] memory data) external pure returns (uint256);
}