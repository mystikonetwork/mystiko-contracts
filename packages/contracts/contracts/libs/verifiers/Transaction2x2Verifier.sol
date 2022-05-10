// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Transaction2x2Pairing {
  struct G1Point {
    uint256 X;
    uint256 Y;
  }
  // Encoding of field elements is: X[0] * z + X[1]
  struct G2Point {
    uint256[2] X;
    uint256[2] Y;
  }

  /// @return the generator of G1
  function P1() internal pure returns (G1Point memory) {
    return G1Point(1, 2);
  }

  /// @return the generator of G2
  function P2() internal pure returns (G2Point memory) {
    return
      G2Point(
        [
          10857046999023057135944570762232829481370756359578518086990519993285655852781,
          11559732032986387107991004021392285783925812861821192530917403151452391805634
        ],
        [
          8495653923123431417604973247489272438418190587263600148770280649306958101930,
          4082367875863433681332203403145435568316851327593401208105741076214120093531
        ]
      );
  }

  /// @return the negation of p, i.e. p.addition(p.negate()) should be zero.
  function negate(G1Point memory p) internal pure returns (G1Point memory) {
    // The prime q in the base field F_q for G1
    uint256 q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;
    if (p.X == 0 && p.Y == 0) return G1Point(0, 0);
    return G1Point(p.X, q - (p.Y % q));
  }

  /// @return r the sum of two points of G1
  function addition(G1Point memory p1, G1Point memory p2) internal view returns (G1Point memory r) {
    uint256[4] memory input;
    input[0] = p1.X;
    input[1] = p1.Y;
    input[2] = p2.X;
    input[3] = p2.Y;
    bool success;
    assembly {
      success := staticcall(sub(gas(), 2000), 6, input, 0xc0, r, 0x60)
      // Use "invalid" to make gas estimation work
      switch success
      case 0 {
        invalid()
      }
    }
    require(success);
  }

  /// @return r the product of a point on G1 and a scalar, i.e.
  /// p == p.scalar_mul(1) and p.addition(p) == p.scalar_mul(2) for all points p.
  function scalar_mul(G1Point memory p, uint256 s) internal view returns (G1Point memory r) {
    uint256[3] memory input;
    input[0] = p.X;
    input[1] = p.Y;
    input[2] = s;
    bool success;
    assembly {
      success := staticcall(sub(gas(), 2000), 7, input, 0x80, r, 0x60)
      // Use "invalid" to make gas estimation work
      switch success
      case 0 {
        invalid()
      }
    }
    require(success);
  }

  /// @return the result of computing the pairing check
  /// e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
  /// For example pairing([P1(), P1().negate()], [P2(), P2()]) should
  /// return true.
  function pairing(G1Point[] memory p1, G2Point[] memory p2) internal view returns (bool) {
    require(p1.length == p2.length);
    uint256 elements = p1.length;
    uint256 inputSize = elements * 6;
    uint256[] memory input = new uint256[](inputSize);
    for (uint256 i = 0; i < elements; i++) {
      input[i * 6 + 0] = p1[i].X;
      input[i * 6 + 1] = p1[i].Y;
      input[i * 6 + 2] = p2[i].X[1];
      input[i * 6 + 3] = p2[i].X[0];
      input[i * 6 + 4] = p2[i].Y[1];
      input[i * 6 + 5] = p2[i].Y[0];
    }
    uint256[1] memory out;
    bool success;
    assembly {
      success := staticcall(sub(gas(), 2000), 8, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
      // Use "invalid" to make gas estimation work
      switch success
      case 0 {
        invalid()
      }
    }
    require(success);
    return out[0] != 0;
  }

  /// Convenience method for a pairing check for two pairs.
  function pairingProd2(
    G1Point memory a1,
    G2Point memory a2,
    G1Point memory b1,
    G2Point memory b2
  ) internal view returns (bool) {
    G1Point[] memory p1 = new G1Point[](2);
    G2Point[] memory p2 = new G2Point[](2);
    p1[0] = a1;
    p1[1] = b1;
    p2[0] = a2;
    p2[1] = b2;
    return pairing(p1, p2);
  }

  /// Convenience method for a pairing check for three pairs.
  function pairingProd3(
    G1Point memory a1,
    G2Point memory a2,
    G1Point memory b1,
    G2Point memory b2,
    G1Point memory c1,
    G2Point memory c2
  ) internal view returns (bool) {
    G1Point[] memory p1 = new G1Point[](3);
    G2Point[] memory p2 = new G2Point[](3);
    p1[0] = a1;
    p1[1] = b1;
    p1[2] = c1;
    p2[0] = a2;
    p2[1] = b2;
    p2[2] = c2;
    return pairing(p1, p2);
  }

  /// Convenience method for a pairing check for four pairs.
  function pairingProd4(
    G1Point memory a1,
    G2Point memory a2,
    G1Point memory b1,
    G2Point memory b2,
    G1Point memory c1,
    G2Point memory c2,
    G1Point memory d1,
    G2Point memory d2
  ) internal view returns (bool) {
    G1Point[] memory p1 = new G1Point[](4);
    G2Point[] memory p2 = new G2Point[](4);
    p1[0] = a1;
    p1[1] = b1;
    p1[2] = c1;
    p1[3] = d1;
    p2[0] = a2;
    p2[1] = b2;
    p2[2] = c2;
    p2[3] = d2;
    return pairing(p1, p2);
  }
}

contract Transaction2x2Verifier {
  using Transaction2x2Pairing for *;
  struct VerifyingKey {
    Transaction2x2Pairing.G1Point alpha;
    Transaction2x2Pairing.G2Point beta;
    Transaction2x2Pairing.G2Point gamma;
    Transaction2x2Pairing.G2Point delta;
    Transaction2x2Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Transaction2x2Pairing.G1Point a;
    Transaction2x2Pairing.G2Point b;
    Transaction2x2Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Transaction2x2Pairing.G1Point(
      uint256(0x1579f0d6e2b03848c9770ec60baa47bc6373ec54c23a83d48ae7505921b27e2c),
      uint256(0x10e1d9488a02a0da329f847120643868de0e8d663b50d5c0b12061c33e19eb2c)
    );
    vk.beta = Transaction2x2Pairing.G2Point(
      [
        uint256(0x09e6929eb1ae0c1f0f93e6850e545b8995459abae6780ce4a4a67aa97dc52e50),
        uint256(0x2038bbe6857afeda340fc542b5971b0df631ec10a63a00bce5b97eb22e0b9833)
      ],
      [
        uint256(0x287e3ff156033bff1b20a6ada8175eb1e56438536f173b4082c9c1234c753a8e),
        uint256(0x22a815692d8aa9e9ffdc84bdb5c247cb3eba437a99b8f2deb8280d49688b6689)
      ]
    );
    vk.gamma = Transaction2x2Pairing.G2Point(
      [
        uint256(0x17f43296924620e0e95d47afa252293d84c6992853af3d79f792106b6590876b),
        uint256(0x21017970ff35c78bf74bcf868181f02a3838785b1d648bf4d143c0f73983cbab)
      ],
      [
        uint256(0x216b9bb324da1cd5c158df6d7c2fd63f14980767c9dde7d94de197dec9d449b2),
        uint256(0x21bbbd21043e50cabbd4b1dbadb0efb4a6100eeccf7984933d99449f56054a43)
      ]
    );
    vk.delta = Transaction2x2Pairing.G2Point(
      [
        uint256(0x00cd96449d450ed92f452d319080cfa169bbe7dce30a0ff743de53c709a8834d),
        uint256(0x1bfdd14006595e39aa7450d2e82212631aa27ce07a7e9be0fd1b708380f47057)
      ],
      [
        uint256(0x1c43bbab2d862674aaba664816380d6872aa3b8a5c9f62bb769d7dfac3bf8297),
        uint256(0x261f57e269b7362af94c6510245f6210e04c5cda8cc1fe5e5d5c239502fec2a2)
      ]
    );
    vk.gamma_abc = new Transaction2x2Pairing.G1Point[](13);
    vk.gamma_abc[0] = Transaction2x2Pairing.G1Point(
      uint256(0x3059e4f20cd752001e886a8d7638b83e7ef905b863ec15094cc9324a4209afc1),
      uint256(0x28ec83ec4339699c188253558cb8f7e34776dd1f52137c185016625a3116671a)
    );
    vk.gamma_abc[1] = Transaction2x2Pairing.G1Point(
      uint256(0x13757c7b382ae35f27d0d9c9a7c1c94dc5d8e4956fbb50b76498e57911305938),
      uint256(0x023cc27cca5b16a578ad71a28769e8985a8b68ee41b3c4c5504212983d3171b8)
    );
    vk.gamma_abc[2] = Transaction2x2Pairing.G1Point(
      uint256(0x0eead86a69204418a13af7bd1ce3b40dd4b5f1046f4ec9abca7b6f8fb2bb8e37),
      uint256(0x16bacc61dd5d2e3b89004b3ae74cce4b0244b4c1a14335f0364a840e3f4a2a1e)
    );
    vk.gamma_abc[3] = Transaction2x2Pairing.G1Point(
      uint256(0x250cd2d24102622284704edd477980b063595e7436bb29349af2e74fcfef5ebe),
      uint256(0x186ca9ffefaaa85e80b40bc67df9d498c87b1da35da4a5bae15f87c0d685efee)
    );
    vk.gamma_abc[4] = Transaction2x2Pairing.G1Point(
      uint256(0x02c73ed9d0487c74a11f39765b84919c3abe0d9c9357667e46395a0907be3288),
      uint256(0x1ec142dc7c7783a2e6501040de21e43c133b84104920bb9cee5b03d857eeed81)
    );
    vk.gamma_abc[5] = Transaction2x2Pairing.G1Point(
      uint256(0x2410ed3bb8b59b6d00a16b0bb4cc7504a046a8eebb9537c40fac0072fd5d0fcc),
      uint256(0x269ef7f0fa9f3ade9087da19f0aef560278af9970238b54763af06fa14af050a)
    );
    vk.gamma_abc[6] = Transaction2x2Pairing.G1Point(
      uint256(0x27b48bc5ab806acb3874bcc3f2b8776e9a1cca442093d793e5471c73ecdf860c),
      uint256(0x23e5d412dddf62a14fdc4e787ef5308c917b29fc6164bd793170c8eaf9d29d0f)
    );
    vk.gamma_abc[7] = Transaction2x2Pairing.G1Point(
      uint256(0x12ab3385ddffbaecc11d5b0a21a54061aed9ee4773d77c536ef87514d5ccf6f7),
      uint256(0x29b3940f11722575520ad2e96ae5182b890cb94478ffb741b4a15c4505b4f784)
    );
    vk.gamma_abc[8] = Transaction2x2Pairing.G1Point(
      uint256(0x02ea88246c3fd30ae75c3727483eba166f841e1cb45702ad11f93b38b12456f4),
      uint256(0x1951fc93546dd9a90eb5b42554a8d824491dbd8b6be14147d8e6091ccd475542)
    );
    vk.gamma_abc[9] = Transaction2x2Pairing.G1Point(
      uint256(0x01bdad7ac2ad2dede4351ecd7b3a9950f38cb2a02259c5895b908f3c884a6716),
      uint256(0x0b0109424cf3aa8f4d4b599d6738094c082d0951de5338579b8a59e7ec4cf915)
    );
    vk.gamma_abc[10] = Transaction2x2Pairing.G1Point(
      uint256(0x2b2a8bbccf700eab274995badfa21a9e70596de7f4cc359f46255d5e242461f1),
      uint256(0x1a03c79f8b589176591ce5b819060209bfad3c5177719ebcb5c60ae1c473cc34)
    );
    vk.gamma_abc[11] = Transaction2x2Pairing.G1Point(
      uint256(0x2efd836e62d9291dacaa004cf0b42152a44f6e2cc84ae60e1431eb457eb9d7e8),
      uint256(0x0c5f519784c9ac3794efa076afb0b51a83cf0df0c04767058833a1c3479c02a3)
    );
    vk.gamma_abc[12] = Transaction2x2Pairing.G1Point(
      uint256(0x2b191a706bc4da7409b83bcc974fad4abf5eec57441b0870e883db650ad13cfe),
      uint256(0x2d4369fa95e80e89c4f639be4293544c457004cc69362deace5b080479a2c89a)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    // Compute the linear combination vk_x
    Transaction2x2Pairing.G1Point memory vk_x = Transaction2x2Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Transaction2x2Pairing.addition(
        vk_x,
        Transaction2x2Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i])
      );
    }
    vk_x = Transaction2x2Pairing.addition(vk_x, vk.gamma_abc[0]);
    if (
      !Transaction2x2Pairing.pairingProd4(
        proof.a,
        proof.b,
        Transaction2x2Pairing.negate(vk_x),
        vk.gamma,
        Transaction2x2Pairing.negate(proof.c),
        vk.delta,
        Transaction2x2Pairing.negate(vk.alpha),
        vk.beta
      )
    ) return 1;
    return 0;
  }

  function verifyTx(Proof memory proof, uint256[] memory input) public view returns (bool r) {
    require(input.length == 12, "invalid input length");
    if (verify(input, proof) == 0) {
      return true;
    } else {
      return false;
    }
  }
}
