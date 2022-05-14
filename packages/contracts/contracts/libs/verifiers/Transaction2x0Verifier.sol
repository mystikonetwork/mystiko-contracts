// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
      uint256(0x2f669af2bde28c3afb697c8196470fba7f087dd08c23389467668c18d6c2d64c),
      uint256(0x13f692a655a64502d6a0d6adefc338659905f04ab45ff8308d204f8da3422105)
    );
    vk.beta = Transaction2x0Pairing.G2Point(
      [
        uint256(0x2d504fc74d28a22795893dc267a40c069ab7fee0394b22b3ad32a149b96e38c7),
        uint256(0x2aac24637230a232c8c56135a6376f08e1555639ac5b3cc67564569bc205a62c)
      ],
      [
        uint256(0x10121e1f29cae1590e553f8e0d72f08cbe3d7092853b5d8bd30f7c876b29df42),
        uint256(0x0019470c507162f162d15a2feda34a82bf34fcf1906586c157e77f6985e62b1c)
      ]
    );
    vk.gamma = Transaction2x0Pairing.G2Point(
      [
        uint256(0x0f3547633fc64dc710f04375cf4609cd43ce960e55f69d0bb33c7c3475e156eb),
        uint256(0x1a159c9049a70f1287136f24b8630259b95c489c233017414aee32a3c25c75de)
      ],
      [
        uint256(0x119be9b78300543e93f25b3ce6244e904772a06243b12701796562d13d050526),
        uint256(0x0527c3ba353815897029edac9d6e4b92be152500b119519b1ab27889d866f531)
      ]
    );
    vk.delta = Transaction2x0Pairing.G2Point(
      [
        uint256(0x2f25ee1c3a83696a079dbcb948b9e84f9e9f568f3bf6b6e8aa4d44596d65b1be),
        uint256(0x05bc72f0316d6492155d27fede25c68303558460a4f04235a75a09758cb0e61c)
      ],
      [
        uint256(0x08ae029654c1518b23007d82474431da0ee69fc393dd5aca674c7dbd4b152137),
        uint256(0x2c26f36b7fa236fba50afc13388bb0c8810fb88d476101b52d7b7c5aa2c15dd7)
      ]
    );
    vk.gamma_abc = new Transaction2x0Pairing.G1Point[](9);
    vk.gamma_abc[0] = Transaction2x0Pairing.G1Point(
      uint256(0x23ed62276a20a2bf3ed4250dd64dfe466a1f808a25e9603dc7617d6f30a10ce8),
      uint256(0x14a6099abd495ae65b2bf939f6009a7952776bce13547761a962bf50c4aaa7de)
    );
    vk.gamma_abc[1] = Transaction2x0Pairing.G1Point(
      uint256(0x2a5fccb262b6463af2503a49de693c2ade30e8cd0031cb2148d17abaa8608902),
      uint256(0x26e397bfbdca674bb6e2a60a15e0c0b71479033843e1a41a09a197d546719cfa)
    );
    vk.gamma_abc[2] = Transaction2x0Pairing.G1Point(
      uint256(0x1ccedfc8cf5a524a0c8c7ec0d965c8703485ac5689c30fa936db5c9d5306190f),
      uint256(0x0d582ded4082c162df9527af0b343f4740c119b8a57a724db1bf73e66e11883e)
    );
    vk.gamma_abc[3] = Transaction2x0Pairing.G1Point(
      uint256(0x19a89cc4d8ea73977852c9dcd09a3bbdbbb53e5a11bd47887f8c2cab265cd403),
      uint256(0x2643c5bee2e011d5c35c649ac1659ee6b3081261be24837c1766dba4ae10143c)
    );
    vk.gamma_abc[4] = Transaction2x0Pairing.G1Point(
      uint256(0x021d593e84dba3a75b5a6ff799b1d08e6354c91f862d2d89facaed037a4cfcfd),
      uint256(0x14405d17f0128ef323eedf1a67d202a799bd1dcf4ddd592c19075f5e54de4f6f)
    );
    vk.gamma_abc[5] = Transaction2x0Pairing.G1Point(
      uint256(0x2f59c9332f55612c0b5e2ef47530653b13d3bb8d74f8437ada32e777fbb28339),
      uint256(0x16ca21e5b60a7e372a27646c7e11c5c1c86ee66f085c497b54d0cb8db44277c7)
    );
    vk.gamma_abc[6] = Transaction2x0Pairing.G1Point(
      uint256(0x049e095b321a1b718e2689969669d0ae3dd1e877f28a9dfbb8558d2c2a86b47c),
      uint256(0x2b28771a5d1c7acf7261505a72b493089c8e0b434d483784466ba03a99d79bc7)
    );
    vk.gamma_abc[7] = Transaction2x0Pairing.G1Point(
      uint256(0x2f9159a6f24091070df45b7cf9c5d6d740c40f1f2b93256d1308a03509872516),
      uint256(0x0098d503f24b0d318775ce640b5159e54ae08cbc39fd60a56ea012000c53223b)
    );
    vk.gamma_abc[8] = Transaction2x0Pairing.G1Point(
      uint256(0x0e33d23255985cfaa7af61d7e7a95eff5c75bdb5f5c6159e8e39b4eb1b48ab2a),
      uint256(0x2dfbef77260827b8e1b5f4f9882f39dd9b4bf319d8ef1ff25a6277cae6ad3868)
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
