// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Transaction2x0Pairing {
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

contract Transaction2x0Verifier {
  using Transaction2x0Pairing for *;
  struct VerifyingKey {
    Transaction2x0Pairing.G1Point alpha;
    Transaction2x0Pairing.G2Point beta;
    Transaction2x0Pairing.G2Point gamma;
    Transaction2x0Pairing.G2Point delta;
    Transaction2x0Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Transaction2x0Pairing.G1Point a;
    Transaction2x0Pairing.G2Point b;
    Transaction2x0Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Transaction2x0Pairing.G1Point(
      uint256(0x3056157bc9be8f9d5597fd14ba4c9c70d15646f79b5a9cbe6f34728833875453),
      uint256(0x29daf346f0d24923bd7dd69ed7e0e7c0bdd9dc67ed440764d68dca0d11293e4e)
    );
    vk.beta = Transaction2x0Pairing.G2Point(
      [
        uint256(0x1c69eab04a03db2c2c52a7856258d1dc60d26c2ea31a84832c43122bb029253c),
        uint256(0x00494bbd5eb8cb5a774e37fd9cd3df28da64141c484bdc61ff85b41efe275ca5)
      ],
      [
        uint256(0x26256e613e03eae28dc850610f8f6d24648488396ed829feb55cef8553871b3b),
        uint256(0x041caaef6ede5ba810b78fac59e420f5334ce884f42ae7b785f8480b1e5184dd)
      ]
    );
    vk.gamma = Transaction2x0Pairing.G2Point(
      [
        uint256(0x042d3269dce83df2085d653e417fae1d8264de9756fa4e778553dd2ac8424da3),
        uint256(0x2b0e602068f11fd03e23200e23f2b8e3272345ced976bbc73d28cff67a8960b1)
      ],
      [
        uint256(0x2588bff9db0930edc722614bea744f9ed72fd54e34aad5ad1ac610f18033a4d0),
        uint256(0x1bdef5a0f6d468679636a68ecc176e45eb9df944123f6a2f0de81fba63b5a4f1)
      ]
    );
    vk.delta = Transaction2x0Pairing.G2Point(
      [
        uint256(0x20976960423c837bd873ba87f3a75aebb0232bd25569bfc92f79102e9b767c9d),
        uint256(0x0c57672bee6c9cb4eb28417d536b7519db048e267073777b3abb8ef0f024ec44)
      ],
      [
        uint256(0x16e2cb4ce4108d43c77936fbcb033de6d52337c8e2a4ec2d3dadf49406bdcf17),
        uint256(0x1aacbcd25be67f01f1bd0a9bf76292817ec08c54be37f893ac27a193d7526bdd)
      ]
    );
    vk.gamma_abc = new Transaction2x0Pairing.G1Point[](9);
    vk.gamma_abc[0] = Transaction2x0Pairing.G1Point(
      uint256(0x0a0b15a33a4206481865912da089f8d25156173bef5d6f013a36bc668d911a62),
      uint256(0x1280361e7bc60f849b9ce1ba2af3f9da80bc506e503674d28b320199766c4a94)
    );
    vk.gamma_abc[1] = Transaction2x0Pairing.G1Point(
      uint256(0x29e275bb89f095f41c83f7d143569971b43b218d09cc6e70513e00be4791eb28),
      uint256(0x12da0c841f1b78e6de4f9add2965a29e3093706b5873cfce7aea232819ffab76)
    );
    vk.gamma_abc[2] = Transaction2x0Pairing.G1Point(
      uint256(0x0a92ba236977082e6f43b3ea3322ac8a001d7b9fd266a087be9be486d187c6db),
      uint256(0x00094301992cfa65b38d6d2ed52c9067d2eda97e3e1b1bd8f09a040f7f304190)
    );
    vk.gamma_abc[3] = Transaction2x0Pairing.G1Point(
      uint256(0x2c11f5dc534dad456562c7c9bf7dadea5f5dd257e71ac5dfd32f96de45eaf4a5),
      uint256(0x2fa2b2cf44ba4b547aa134cb787a35778b88f55351605f7be5207d9cc89fdec5)
    );
    vk.gamma_abc[4] = Transaction2x0Pairing.G1Point(
      uint256(0x0d117631b2c82c3667cd1ea413090d2f73614a884806a773ac223656aa143b57),
      uint256(0x1b24ec66598f96cb4ff7fe47a6ea9441cc076a4ce6b3cd9ea93928ca63121d56)
    );
    vk.gamma_abc[5] = Transaction2x0Pairing.G1Point(
      uint256(0x210e90a152708d88b25568f03e69f3f13336bf6487ba8865336778c9fb986de2),
      uint256(0x262391049e61cffc04e029f690d5857a388c0bf87046f1c7f9f33fd820a0064d)
    );
    vk.gamma_abc[6] = Transaction2x0Pairing.G1Point(
      uint256(0x0dcb1f354816341b49b1ae4fd4d03a186258f78816405594e3744a52915db6e8),
      uint256(0x274e452d2e44436bd76d2c54eb81efb80a2041c0770dba9e79fb7a1a490f0665)
    );
    vk.gamma_abc[7] = Transaction2x0Pairing.G1Point(
      uint256(0x1541bca6818ad6bc6fa6f7ad62afdaf5c4958f0a14836bbd365a045f3418af1a),
      uint256(0x1a1057e111114426960968e3112780a826ec56f5c3c1022c8c51486a93b55aeb)
    );
    vk.gamma_abc[8] = Transaction2x0Pairing.G1Point(
      uint256(0x195f79f41a813463f26092e64765fb7b022001ca302fc4d5c9048d51bb4c2021),
      uint256(0x2a460b413c8b16824163a3b55f6e7f071d791b8fd418a904110dc79e53606bd5)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    // Compute the linear combination vk_x
    Transaction2x0Pairing.G1Point memory vk_x = Transaction2x0Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Transaction2x0Pairing.addition(
        vk_x,
        Transaction2x0Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i])
      );
    }
    vk_x = Transaction2x0Pairing.addition(vk_x, vk.gamma_abc[0]);
    if (
      !Transaction2x0Pairing.pairingProd4(
        proof.a,
        proof.b,
        Transaction2x0Pairing.negate(vk_x),
        vk.gamma,
        Transaction2x0Pairing.negate(proof.c),
        vk.delta,
        Transaction2x0Pairing.negate(vk.alpha),
        vk.beta
      )
    ) return 1;
    return 0;
  }

  function verifyTx(Proof memory proof, uint256[] memory input) public view returns (bool r) {
    require(input.length == 8, "invalid input length");
    if (verify(input, proof) == 0) {
      return true;
    } else {
      return false;
    }
  }
}
