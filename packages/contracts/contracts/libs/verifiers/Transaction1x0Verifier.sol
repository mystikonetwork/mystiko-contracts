// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Transaction1x0Pairing {
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

contract Transaction1x0Verifier {
  using Transaction1x0Pairing for *;
  struct VerifyingKey {
    Transaction1x0Pairing.G1Point alpha;
    Transaction1x0Pairing.G2Point beta;
    Transaction1x0Pairing.G2Point gamma;
    Transaction1x0Pairing.G2Point delta;
    Transaction1x0Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Transaction1x0Pairing.G1Point a;
    Transaction1x0Pairing.G2Point b;
    Transaction1x0Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Transaction1x0Pairing.G1Point(
      uint256(0x05b12dddbf7992689dc541f91e1b58438ae34ed30172e95b63fec2ad00a0c3bd),
      uint256(0x2f47d483e2ac092f761d72ca9cb0a801ce75014c93f0342b40e6928578cb79ac)
    );
    vk.beta = Transaction1x0Pairing.G2Point(
      [
        uint256(0x05ccd5e66ce20318b2c3066ca9c84a87dc4f75a608b21477368912444fd334b5),
        uint256(0x2215ddc740ff4a5a204c19a1070bb52559a61d0fbf13c0f56aae1b99154dd615)
      ],
      [
        uint256(0x09a12b89983ffb97e6602ca423af63ac1fd9e417023b32f671ed68179aaf0445),
        uint256(0x11d7781ed8d96963b46508c77a4b02cc178503fe4b1cd2b138c0c3081ffbab32)
      ]
    );
    vk.gamma = Transaction1x0Pairing.G2Point(
      [
        uint256(0x0cc4e694e2cf7092b29df0e36d6072196e5d2bcb6ebeb57acaa53f0b7f808013),
        uint256(0x10bc019add8c0fc7481c5b7e5c8c8df134510ab3b707475fc5c8279ebc57505e)
      ],
      [
        uint256(0x15ffd46cbe2535adaf280bfb4c27975aa3af978332b0eab69c9515bfca5306c3),
        uint256(0x224c6a64abf902bdc41faab6eb00918724cc1bfc3f420a8176ff904d53413e79)
      ]
    );
    vk.delta = Transaction1x0Pairing.G2Point(
      [
        uint256(0x2021ba524db9febf65019c73a6d79f0a923d63f48115af791bf464cffa80f746),
        uint256(0x2a34ccdfeb12cefe3b58eaebfbe6faffc0fd00bcaa8a1b927ed4d5619dba7560)
      ],
      [
        uint256(0x27b1b66d76922d5988c45843d280e37eed4cc870b79a6f59de76771e30579a0d),
        uint256(0x06b3a085756bbf88b018a5f6036ae79e4e7ce009f48a56774704fda53be1dd0e)
      ]
    );
    vk.gamma_abc = new Transaction1x0Pairing.G1Point[](7);
    vk.gamma_abc[0] = Transaction1x0Pairing.G1Point(
      uint256(0x16f81c48438816f8dbbb881df77c5f39e933ef7e8d2a845d48e332d65f24a7b5),
      uint256(0x2abe5cd4c8564d360de64b9ddf0c55936c3e55715bd25fbee8ae45d6bd3ddf31)
    );
    vk.gamma_abc[1] = Transaction1x0Pairing.G1Point(
      uint256(0x1705704c8a11838d7aa674462325b29777cef383da1d00b7217b9ba59204cd17),
      uint256(0x19d35a294f6d1bc4ee0b22280df658355398e229890624341e4e4d509b020e09)
    );
    vk.gamma_abc[2] = Transaction1x0Pairing.G1Point(
      uint256(0x1611b1530119bd0da648ec82894286d3a13bb0b0b699110aad37ae9e783a2398),
      uint256(0x17b0a910df0e17349d27dc474894491e287935a1f47b1168c9979cffbce291eb)
    );
    vk.gamma_abc[3] = Transaction1x0Pairing.G1Point(
      uint256(0x1b6fe5864efabeca54d1e7a8997bffc863f5385755f120b3633043763624b9bc),
      uint256(0x0732b88fdbd3f28944aa87cbc19e78d6f72bc0d68181a583bbf06a22222b9526)
    );
    vk.gamma_abc[4] = Transaction1x0Pairing.G1Point(
      uint256(0x097cb24b8063a9d07919bd053d163a32f0218342e172fa1579c5cc40114557d2),
      uint256(0x0225b480cda39a566734f6f3da3cd175097c7d636f9418cf4d2a1c7574bdddd4)
    );
    vk.gamma_abc[5] = Transaction1x0Pairing.G1Point(
      uint256(0x1633cc396bb198c71830df9631e37a7ee7d7d3df14b70f9f2782d35477907b76),
      uint256(0x00eb3b8f197a4c4aea6f5a6d8ddc70a269e75f0b63ca0887d15d2560e67be5ca)
    );
    vk.gamma_abc[6] = Transaction1x0Pairing.G1Point(
      uint256(0x1647044434fe8f606f4b4b3f1956051e9a4d09b1248ea6b5c93b7e39adf51781),
      uint256(0x125feee0a5f9f6627ad0b80f027424ea30ae013c0b0d6ff0a4c66e875bd32329)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    // Compute the linear combination vk_x
    Transaction1x0Pairing.G1Point memory vk_x = Transaction1x0Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Transaction1x0Pairing.addition(
        vk_x,
        Transaction1x0Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i])
      );
    }
    vk_x = Transaction1x0Pairing.addition(vk_x, vk.gamma_abc[0]);
    if (
      !Transaction1x0Pairing.pairingProd4(
        proof.a,
        proof.b,
        Transaction1x0Pairing.negate(vk_x),
        vk.gamma,
        Transaction1x0Pairing.negate(proof.c),
        vk.delta,
        Transaction1x0Pairing.negate(vk.alpha),
        vk.beta
      )
    ) return 1;
    return 0;
  }

  function verifyTx(Proof memory proof, uint256[] memory input) public view returns (bool r) {
    require(input.length == 6, "invalid input length");
    if (verify(input, proof) == 0) {
      return true;
    } else {
      return false;
    }
  }
}
