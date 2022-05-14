// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
      uint256(0x2b8d66f3ed3683a4d81eb9ae7a63d3e26f5c02cfa4ac99f849c8b6ccfe6d6408),
      uint256(0x302a0e735f209f980e3029609d68fa4796d2af3cefab3c9ede7036681f0ea5a2)
    );
    vk.beta = Transaction1x0Pairing.G2Point(
      [
        uint256(0x15d243f7b20a46947d52feddc27551570af452179562a9a9ad2d40f28a4c9f39),
        uint256(0x1381c183bfce16a9b9fc8a0e00d424e98e381053dabbe907c864ce0f1d965fca)
      ],
      [
        uint256(0x19ab7b19090096fdb4ff0f082c50c25f38a85a57c606450eba6bc745b718b0b2),
        uint256(0x03fa717034cda32cdef38a97d61f764cdb097b89fa12b823379d29339d65f4f4)
      ]
    );
    vk.gamma = Transaction1x0Pairing.G2Point(
      [
        uint256(0x27aa27554d5afc55467b7f7b9ef8f21b515045b9db1ff9a9414ebbf4363cf146),
        uint256(0x0d763c0c197a37ae791feaeda947a6670822d798eef6aada3a376682f9bf6191)
      ],
      [
        uint256(0x1dd1dff54796364f60716a8f13faa52576c39d1eb58a9b19d5cf876f6ab7d33d),
        uint256(0x2b0d7a3cedc0c8a6f733cc47f3055f323b6c82a45313ff162cf86c3569e28c95)
      ]
    );
    vk.delta = Transaction1x0Pairing.G2Point(
      [
        uint256(0x0329a029ea55d0a78fabd3f56b057a0802e2e3d31b1019cb7e1715d0bcbef8bc),
        uint256(0x1c3c2d15b2d23ab409546e3261f64c969d0b8ddda7f3fb1c6f6ecc267da82db6)
      ],
      [
        uint256(0x2d84fb386fa7b62460707181f0115611fca290f8a5a3bf2d26813824f0d71800),
        uint256(0x062e9deac01069aab59c07db808550466625f89389c42756c14245e43f08361e)
      ]
    );
    vk.gamma_abc = new Transaction1x0Pairing.G1Point[](7);
    vk.gamma_abc[0] = Transaction1x0Pairing.G1Point(
      uint256(0x2fe1fa2dc8f4f71eb4f6a7e42822e82f9be0069bfdbd40d7a4f1fe3fed98419a),
      uint256(0x1a6791e58b4a2ef03632413497e39f07a1d9f881c33201b80d8f19a6228744a7)
    );
    vk.gamma_abc[1] = Transaction1x0Pairing.G1Point(
      uint256(0x21ddc3600c6d6de7e4ddcde454d065d437c8f011b61ebd22555377650d1cc5f1),
      uint256(0x04906ae984827b7b016c23f75b50ddc2e75a4e4d8932e6fd941403f8d6dae479)
    );
    vk.gamma_abc[2] = Transaction1x0Pairing.G1Point(
      uint256(0x1887a84f56f8fb8707b9869334d24f6e315ab05a4c9dd3f18ed99107d31e2cd8),
      uint256(0x06b6bdbc2674f934ed4f83eddb57656af7a7e7fe02b03af37b06b0d40208db3b)
    );
    vk.gamma_abc[3] = Transaction1x0Pairing.G1Point(
      uint256(0x26556fa26ebee22acea82ca2f483e9c55c87f3f3ad9bb619b68b2d56849feb72),
      uint256(0x29c11971b5b70eb4b38ca6577c804cd8cfa43fcf5d7a304879ed7093bc539c00)
    );
    vk.gamma_abc[4] = Transaction1x0Pairing.G1Point(
      uint256(0x08d84d6ca5490a688d52d7334731602658f1a34f2056031be0b579c78973a903),
      uint256(0x24acb2fed526f191d44363da410e6e5d6553b57921b2c6cb9d8f8f1b10d30f93)
    );
    vk.gamma_abc[5] = Transaction1x0Pairing.G1Point(
      uint256(0x1cf585afc2f7a7d0f1ba259cbd1c8ae776af179aac13f0743fec6d2ca4d58ce3),
      uint256(0x001c431150dd66e9d3fc4188b8ead2f8aea41e1809f00d5cfb98b610d082b124)
    );
    vk.gamma_abc[6] = Transaction1x0Pairing.G1Point(
      uint256(0x1dca364a14db6ddb369d101e080c31b4aaaf6e04a22aee08ec14207c64dd2094),
      uint256(0x1b86a00e265ca1e82b5eb8ae23fede583be1c32d275d4b1bb803d172cd56c389)
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
