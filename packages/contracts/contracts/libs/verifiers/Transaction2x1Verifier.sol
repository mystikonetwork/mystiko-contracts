// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Transaction2x1Pairing {
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

contract Transaction2x1Verifier {
  using Transaction2x1Pairing for *;
  struct VerifyingKey {
    Transaction2x1Pairing.G1Point alpha;
    Transaction2x1Pairing.G2Point beta;
    Transaction2x1Pairing.G2Point gamma;
    Transaction2x1Pairing.G2Point delta;
    Transaction2x1Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Transaction2x1Pairing.G1Point a;
    Transaction2x1Pairing.G2Point b;
    Transaction2x1Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Transaction2x1Pairing.G1Point(
      uint256(0x0fdb8019af4ed0a405f7dc1f1e7774ea25aea668b049cd0a4b49d466851a088b),
      uint256(0x1917746246ba6de4f78fb34c7f66ac59cd2cd154c5db503eb5473019442bbde2)
    );
    vk.beta = Transaction2x1Pairing.G2Point(
      [
        uint256(0x04f6a77fd27ca6e7e0bf158a5df9ea16435570c6245cc247d740f59e7cbc3816),
        uint256(0x1fb2cc24967362037797b562a44be62587e4b69bb1d02f979d2116acd8125f4d)
      ],
      [
        uint256(0x25cfda2c7c8b9cb28dc650b41b59432413b6a6629c3d8f68dc3b5025b5012f88),
        uint256(0x148e8269b3bb1caddb7d8b3d71f59eb952852900b7aa507ece31ca4dbff081f1)
      ]
    );
    vk.gamma = Transaction2x1Pairing.G2Point(
      [
        uint256(0x2548c52fdf7f35a8b56cdc5907179f02600f5a1c35ffd5b18395ab1ca84729cd),
        uint256(0x27380b1a74538979ec4df247a4dba3f261fb65f10f44d847cd2750c2a95d457d)
      ],
      [
        uint256(0x27c585e9f5c2143deb6368d5f77415acafc5d6a03b12a80439259966a116b583),
        uint256(0x264a28749fed1399256217b663be44931913d35d4148badfe0503000d07ea5f5)
      ]
    );
    vk.delta = Transaction2x1Pairing.G2Point(
      [
        uint256(0x113263460aa3501a4cc41cbd72b23772c46d45d2799c6e207143e05506d07b29),
        uint256(0x2d0fb2b8ef45a745a6b34c72b22e718c96513c88b5228abf15f7f700a141605a)
      ],
      [
        uint256(0x1324b0791e3a4becb8163d87cac4c7f53d296e40b473a7de35c5a132167dc7ae),
        uint256(0x11315e74d819280bda4ed18e18c2a593a0216570f71ac038b763c912a270bfe4)
      ]
    );
    vk.gamma_abc = new Transaction2x1Pairing.G1Point[](11);
    vk.gamma_abc[0] = Transaction2x1Pairing.G1Point(
      uint256(0x23fcb88b64512b820c68e9078b931de14223d4392d2efaf21284dac7f692d55e),
      uint256(0x19655f57393c9674e7e24f539eddfee962bd9ed0137a70cd396846bf3f227df9)
    );
    vk.gamma_abc[1] = Transaction2x1Pairing.G1Point(
      uint256(0x134c8c0fc442e893475ea5fb0cdbdbfac78cbcf7b560111747d4de474ed72d0a),
      uint256(0x187eac9ca769afc85c74b6b89321648b5cec0997f8b372b98f94be204bb38e4b)
    );
    vk.gamma_abc[2] = Transaction2x1Pairing.G1Point(
      uint256(0x2fa0f51fa3d405e25f6f124c69d40b9f4ced2091d32fd16364ba2950eece9e5c),
      uint256(0x02bcb2ff9a8a8407ab4e5adefe4db7e52a0145e4974617ef504ca95f773cf034)
    );
    vk.gamma_abc[3] = Transaction2x1Pairing.G1Point(
      uint256(0x297d1877052078faecff15d996fb01b66fc890cfc477c64f7ed056bb1ff2a90b),
      uint256(0x1d5499af1e5b6f07cc258e212fcd40ae9a76b6df218e840cc1bcac9765e0c230)
    );
    vk.gamma_abc[4] = Transaction2x1Pairing.G1Point(
      uint256(0x1f3d47f4148ef9a9fc9730049f98684daea7dbac014441af03396d86d040da8f),
      uint256(0x15cd00027541f480a52f807841e1a3ebe06e2b3fee5e43d814bedea5320f7748)
    );
    vk.gamma_abc[5] = Transaction2x1Pairing.G1Point(
      uint256(0x1a74183ea24d99d1b419a9a22031abec9b71fdb557bea4e7da2a9926ddd7ebe9),
      uint256(0x18659f10c6e86f124781a3d00c7a5a1b9e8dce76c05e177ba2790653df8fd0be)
    );
    vk.gamma_abc[6] = Transaction2x1Pairing.G1Point(
      uint256(0x04fc3bf14136dc1c8d1a847ae53955d619bddc095afc7287ea4547af5055a54a),
      uint256(0x1664c457cba86442de2bbd50db57b981b00558b004a7edc9671e62dcc436b880)
    );
    vk.gamma_abc[7] = Transaction2x1Pairing.G1Point(
      uint256(0x1a84eb7865aa9637fb59a3683c60d697f90e79b4e18aebb4f63e16f2ea0b515f),
      uint256(0x038f83136c439262faf869ed409b6bc574edd109c0c659acad6876dff27b9547)
    );
    vk.gamma_abc[8] = Transaction2x1Pairing.G1Point(
      uint256(0x13eaaf541c65087eb417e1c8e83851ff656da513f66238082e9d1f7a4d377065),
      uint256(0x1f61a76cc925a4aa8bb8ed9c50d57045a3a843a55a494e5f05882cf2ad2dbab4)
    );
    vk.gamma_abc[9] = Transaction2x1Pairing.G1Point(
      uint256(0x09f425ad0803dc5704ca1cca879b9824d74c194c8ee8cf338ca51a5c1c95600c),
      uint256(0x28496bf3e85e9f8dbe3ca327fcfaf62ad197b7c8a44953b8e64595c610d2c97f)
    );
    vk.gamma_abc[10] = Transaction2x1Pairing.G1Point(
      uint256(0x306348d57ebe99c317ae0c81dc3079aa9c63f224a48404ed6e72a26726918e53),
      uint256(0x12e0bfcda728ad983b9022d376c5447f6226eebe1a5f3bad71697a31ad9bd145)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    // Compute the linear combination vk_x
    Transaction2x1Pairing.G1Point memory vk_x = Transaction2x1Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Transaction2x1Pairing.addition(
        vk_x,
        Transaction2x1Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i])
      );
    }
    vk_x = Transaction2x1Pairing.addition(vk_x, vk.gamma_abc[0]);
    if (
      !Transaction2x1Pairing.pairingProd4(
        proof.a,
        proof.b,
        Transaction2x1Pairing.negate(vk_x),
        vk.gamma,
        Transaction2x1Pairing.negate(proof.c),
        vk.delta,
        Transaction2x1Pairing.negate(vk.alpha),
        vk.beta
      )
    ) return 1;
    return 0;
  }

  function verifyTx(Proof memory proof, uint256[] memory input) public view returns (bool r) {
    require(input.length == 10, "invalid input length");
    if (verify(input, proof) == 0) {
      return true;
    } else {
      return false;
    }
  }
}
