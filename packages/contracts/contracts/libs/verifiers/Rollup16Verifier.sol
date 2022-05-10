// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Rollup16Pairing {
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

contract Rollup16Verifier {
  using Rollup16Pairing for *;
  struct VerifyingKey {
    Rollup16Pairing.G1Point alpha;
    Rollup16Pairing.G2Point beta;
    Rollup16Pairing.G2Point gamma;
    Rollup16Pairing.G2Point delta;
    Rollup16Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Rollup16Pairing.G1Point a;
    Rollup16Pairing.G2Point b;
    Rollup16Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Rollup16Pairing.G1Point(
      uint256(0x2343cbd8d4983aec15bb189e2a96a598110a5255dce870ff1959d1352a084b86),
      uint256(0x1f53b04aad4d61e69bd5d622da4416b19572c1710a0b60a07091ff7109fbc534)
    );
    vk.beta = Rollup16Pairing.G2Point(
      [
        uint256(0x2c6250f036da057868cc78f7f24b9c92cb2acb2946d89bea5b418f52fb2c37a9),
        uint256(0x1220094901e1e81b377026a6ebdd6a4884e101a4947abd32bd32c76664654446)
      ],
      [
        uint256(0x25c0f7796cdf73170fa43b9387dfa1276ca1ec5cc294d12299a6d3fd1c49bb98),
        uint256(0x02d6d2fde0c1630a9e9e5e863f60f11243400ddd011aff1b53cc61665d9f0774)
      ]
    );
    vk.gamma = Rollup16Pairing.G2Point(
      [
        uint256(0x17d5646de16a93d6df8388ad9f188a2b96375d2ed4feffb1a4159a39c283e864),
        uint256(0x091469d885f51194364102c389935e34e98ee0c29a835682ff904c60bc21752f)
      ],
      [
        uint256(0x0f9c7e5cb043508ec62083eac58f95e6ef656928327368dfcee5c8fe8ffd96e3),
        uint256(0x11533e23b0032385d7d4d94a8433a0e3d815dc68499964476cc9bc30adc5c421)
      ]
    );
    vk.delta = Rollup16Pairing.G2Point(
      [
        uint256(0x1363faa2d7cddd5d047683e8020426f95887778a89d6e2599cad8fe0d94ea857),
        uint256(0x21659548f8816da819b8877764918b2298a5e1e7da3747eb6e86bc33b6493d5c)
      ],
      [
        uint256(0x0e4cef62818570a45ef27f3c153ce4d4a86b49a4a115231ebda3d7908cab6c76),
        uint256(0x22890d66731426165d3a4665d1cbc85f15128be4a8d1e03a48edca382dcdf670)
      ]
    );
    vk.gamma_abc = new Rollup16Pairing.G1Point[](5);
    vk.gamma_abc[0] = Rollup16Pairing.G1Point(
      uint256(0x28e78c2427a3f67f8e3e08021ed8ac9632cf68ca7ff20d0ed2778802254f62b3),
      uint256(0x1f744cba3f38532fea8f7a8a4ce7fd69f07c4048b0fb7356ac2f080f180e43b0)
    );
    vk.gamma_abc[1] = Rollup16Pairing.G1Point(
      uint256(0x0e89a0475f1a7fac670ebdffc64a53235143c7610082125621e5295941d4c9b1),
      uint256(0x22c481017f4cd712bb5216a91c191ee58d9a997158e2a387e9ffd39792e77eee)
    );
    vk.gamma_abc[2] = Rollup16Pairing.G1Point(
      uint256(0x2b059ecc389296c8c018e6be1a9cedcda2cfef5d866d17ca847b1502384a826f),
      uint256(0x219873f2af5bbb693666a1a64385d1c7353f807ecdfa5a1e83e7731f33b36ef6)
    );
    vk.gamma_abc[3] = Rollup16Pairing.G1Point(
      uint256(0x2f721dd06675f438979ce46a24cf0cb4e6fbef374501b4f0c2e0e22b83dacf5c),
      uint256(0x0577de4b80f34d170276110b0e176d490635758ace11a9f24cba46c9e13a1dbf)
    );
    vk.gamma_abc[4] = Rollup16Pairing.G1Point(
      uint256(0x2411ba5dbb28aa424849c905445d990a5acade2c2f1653bb4450156b5526ba4c),
      uint256(0x14fcd2d15f86949d189901d43a0bbe88360332be5e471807049ec545d6823c81)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    // Compute the linear combination vk_x
    Rollup16Pairing.G1Point memory vk_x = Rollup16Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Rollup16Pairing.addition(vk_x, Rollup16Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i]));
    }
    vk_x = Rollup16Pairing.addition(vk_x, vk.gamma_abc[0]);
    if (
      !Rollup16Pairing.pairingProd4(
        proof.a,
        proof.b,
        Rollup16Pairing.negate(vk_x),
        vk.gamma,
        Rollup16Pairing.negate(proof.c),
        vk.delta,
        Rollup16Pairing.negate(vk.alpha),
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
