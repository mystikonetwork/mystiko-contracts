// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

abstract contract Random {
  uint256 private nonce = 0;

  function _random() internal returns (uint256) {
    nonce++;
    return uint256(keccak256(abi.encodePacked(block.timestamp, block.number, msg.sender, nonce)));
  }
}
