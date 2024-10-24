// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

interface IVerifier {
  struct G1Point {
    uint256 X;
    uint256 Y;
  }

  struct G2Point {
    uint256[2] X;
    uint256[2] Y;
  }

  struct Proof {
    G1Point a;
    G2Point b;
    G1Point c;
  }

  function verifyTx(Proof memory proof, uint256[] memory input) external returns (bool);
}
