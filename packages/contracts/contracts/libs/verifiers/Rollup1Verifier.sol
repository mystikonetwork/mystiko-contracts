// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library Rollup1Pairing {
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

contract Rollup1Verifier {
  using Rollup1Pairing for *;
  struct VerifyingKey {
    Rollup1Pairing.G1Point alpha;
    Rollup1Pairing.G2Point beta;
    Rollup1Pairing.G2Point gamma;
    Rollup1Pairing.G2Point delta;
    Rollup1Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Rollup1Pairing.G1Point a;
    Rollup1Pairing.G2Point b;
    Rollup1Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Rollup1Pairing.G1Point(
      uint256(0x0c4dd0ffbf5c0fdfb5a643f136a855cc8a2bcbae3d492f5dd5eb55f6a52f0119),
      uint256(0x1fef20c8903873d5291e18da782fa848cac11d1f608ebb462ad9f6eef0ae00bd)
    );
    vk.beta = Rollup1Pairing.G2Point(
      [
        uint256(0x0ce31200f558b0b967d1e46c87b19359d114ed91ca42a6b03da22cadaf9a20c1),
        uint256(0x222e74ebfd2f71a21ff6daf32d81a2531cd5034295cb7b6576d35d34a13a0213)
      ],
      [
        uint256(0x158aaf2b35114932d2a9e43691006c03534238d9c96e6f8f98fbc67a3a1679d3),
        uint256(0x121b8bf8d7f71a4ea7b92606499fa8b069f0555db10f9698afdc3d1ed0f8b2a9)
      ]
    );
    vk.gamma = Rollup1Pairing.G2Point(
      [
        uint256(0x2ef542277ceaba03403474f9dd470f33623c1f1ad9d763dcc8ab2a42b5dc7ade),
        uint256(0x13321cd86c90515779531491bef7dd4893e82d5cdc89c5b649392d9d53e1ffd2)
      ],
      [
        uint256(0x12f0901e6c11352616e3767cb9daa861732d04e18eba8b1d02971034d99b99da),
        uint256(0x105a2141c628aaa34a646fe0acbb703e1f6dbeca6c46ec15fb54d71d9cb87c70)
      ]
    );
    vk.delta = Rollup1Pairing.G2Point(
      [
        uint256(0x0b16d0bf4a4f184c217eac98caffc091e6ffa86afaae21f577d7ca8b88e5f31e),
        uint256(0x1a45e7a18cf51f1216e9d1a3183485369f113df91650f17e12ef6edbe6260754)
      ],
      [
        uint256(0x220803acaa74db55bc7a519941ac10afbd31ffad8347527697db2de6fee91861),
        uint256(0x04908f78ce131c4442fb9f0e66faaff84eff93eeb7ae745d99ff3ebaa385d958)
      ]
    );
    vk.gamma_abc = new Rollup1Pairing.G1Point[](5);
    vk.gamma_abc[0] = Rollup1Pairing.G1Point(
      uint256(0x264999f6cb4c4a2cdf07866877d69ea94c1d5b0053366451afdfab2c80ba0331),
      uint256(0x0986e2b51c59176e19b5ce0ed76cedd88ff1d0007dc15ffdc3ac5b326f4fda6b)
    );
    vk.gamma_abc[1] = Rollup1Pairing.G1Point(
      uint256(0x260d2dd6ef29cf3d79a117e7cd05d7a5068e04238b1bfe4e37c3097256abf980),
      uint256(0x1dd243eefc411f2bf0c39b6ca1e3fe41a5db0f2e133e6286de898bb2bf341745)
    );
    vk.gamma_abc[2] = Rollup1Pairing.G1Point(
      uint256(0x1e7473cdc5977cc5ff5890e207368596fc592b30bf16a0c6c7ad4df545b3ffd9),
      uint256(0x1459b5314ec612a40dbeffdade8b176803d811f3b8f65ad174d2c4c0881e081c)
    );
    vk.gamma_abc[3] = Rollup1Pairing.G1Point(
      uint256(0x228673df42305c669af4389f09c3b55cb38a32d6eecc4596960af693b9a9d4f3),
      uint256(0x2ffc4e1cbb82834a819891f5da241d67930e5ede57cd3b2e7b2adfd444b650d0)
    );
    vk.gamma_abc[4] = Rollup1Pairing.G1Point(
      uint256(0x2de57a284b8716de7fd08472c865bbf1f85de0406d53d959d0a9ae499486974a),
      uint256(0x0d8e181a6e462bd7dc59cc31baef1e3619a321181fa8637f4f93a4907d3a5f4d)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    // Compute the linear combination vk_x
    Rollup1Pairing.G1Point memory vk_x = Rollup1Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Rollup1Pairing.addition(vk_x, Rollup1Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i]));
    }
    vk_x = Rollup1Pairing.addition(vk_x, vk.gamma_abc[0]);
    if (
      !Rollup1Pairing.pairingProd4(
        proof.a,
        proof.b,
        Rollup1Pairing.negate(vk_x),
        vk.gamma,
        Rollup1Pairing.negate(proof.c),
        vk.delta,
        Rollup1Pairing.negate(vk.alpha),
        vk.beta
      )
    ) return 1;
    return 0;
  }

  function verifyTx(Proof memory proof, uint256[] memory input) public view returns (bool r) {
    require(input.length == 4, "invalid input length");
    if (verify(input, proof) == 0) {
      return true;
    } else {
      return false;
    }
  }
}
