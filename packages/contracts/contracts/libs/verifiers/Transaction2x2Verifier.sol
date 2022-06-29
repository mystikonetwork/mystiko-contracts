// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.4;

library Transaction2x2Pairing {
  uint256 internal constant FIELD_MODULUS =
    0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47;
  uint256 internal constant TWISTBX = 0x2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5;
  uint256 internal constant TWISTBY = 0x9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d2;

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
    if (p.Y == 0) return G1Point(p.X, 0);
    return G1Point(p.X, FIELD_MODULUS - (p.Y % FIELD_MODULUS));
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

  function submod(
    uint256 a,
    uint256 b,
    uint256 n
  ) internal pure returns (uint256) {
    return addmod(a, n - b, n);
  }

  function _FQ2Mul(
    uint256 xx,
    uint256 xy,
    uint256 yx,
    uint256 yy
  ) internal pure returns (uint256, uint256) {
    return (
      submod(mulmod(xx, yx, FIELD_MODULUS), mulmod(xy, yy, FIELD_MODULUS), FIELD_MODULUS),
      addmod(mulmod(xx, yy, FIELD_MODULUS), mulmod(xy, yx, FIELD_MODULUS), FIELD_MODULUS)
    );
  }

  function _FQ2Sub(
    uint256 xx,
    uint256 xy,
    uint256 yx,
    uint256 yy
  ) internal pure returns (uint256 rx, uint256 ry) {
    return (submod(xx, yx, FIELD_MODULUS), submod(xy, yy, FIELD_MODULUS));
  }

  function isOnCurve(G2Point memory p) internal pure returns (bool) {
    uint256 yyx;
    uint256 yyy;
    uint256 xxxx;
    uint256 xxxy;
    (yyx, yyy) = _FQ2Mul(p.Y[0], p.Y[1], p.Y[0], p.Y[1]);
    (xxxx, xxxy) = _FQ2Mul(p.X[0], p.X[1], p.X[0], p.X[1]);
    (xxxx, xxxy) = _FQ2Mul(xxxx, xxxy, p.X[0], p.X[1]);
    (yyx, yyy) = _FQ2Sub(yyx, yyy, xxxx, xxxy);
    (yyx, yyy) = _FQ2Sub(yyx, yyy, TWISTBX, TWISTBY);
    return yyx == 0 && yyy == 0;
  }

  function isOnCurve(G1Point memory p) internal pure returns (bool) {
    return
      mulmod(p.Y, p.Y, FIELD_MODULUS) - mulmod(mulmod(p.X, p.X, FIELD_MODULUS), p.X, FIELD_MODULUS) ==
      3 % FIELD_MODULUS;
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
      uint256(0x065d5bb66d1e5d5404d87a83b556bd2029ff0eabe82b77630701183d51639544),
      uint256(0x08dd321aab63b4a8c23bd09d585505008009a88ba7c3fba9638c3c0ddcbea9fa)
    );
    vk.beta = Transaction2x2Pairing.G2Point(
      [
        uint256(0x17175121abb6c818acbae333687834b781bd65ac86ead079d6665c57e92e8c3e),
        uint256(0x20498321b07a3f2e7ed423f1a8deac0356f222a63d70700fe30bbce6c4b3dce9)
      ],
      [
        uint256(0x1b23a650a27e7e4037e6802c26583033e38140b4650b712f9383a256fd4dc79b),
        uint256(0x2e1b73811dd9f433ce81ccf90dc01697eb3045acd39caa8d7f79006f9e2c64bb)
      ]
    );
    vk.gamma = Transaction2x2Pairing.G2Point(
      [
        uint256(0x285bfb022b14af3dcb15dd0b9236ec4331caf95d9c62b0f9228997ddb6ee00d5),
        uint256(0x0c446cadb9f62fa0d7d4fc5acd60cd434584883bcce09fc09ad0116d0546baeb)
      ],
      [
        uint256(0x09066cc0d305d39f17d541cf0bb7b46033e90756ad3d55c8e4fd465a931d3f96),
        uint256(0x12238a87848f2f6fbdda2eb2464fedd705e7f6d61510ac1a94922af0e25a6bf5)
      ]
    );
    vk.delta = Transaction2x2Pairing.G2Point(
      [
        uint256(0x26b884ce2d792dffb4f0726b2b162b5ba2839d67248de37b7eeed92f50f556c9),
        uint256(0x2e142687c06e33bbdc8543f4420d988ab6c71e4782bc405968b91a0bb4435467)
      ],
      [
        uint256(0x048a0a5edcd421010b1afe70530440dde5af1a1ae0857b2e00aa19b037ac317c),
        uint256(0x291db466d4457af5512a449a306daebfa93b83bea4b5d009591af80ba276e2e3)
      ]
    );
    vk.gamma_abc = new Transaction2x2Pairing.G1Point[](13);
    vk.gamma_abc[0] = Transaction2x2Pairing.G1Point(
      uint256(0x14de4c8a80c809fd6e2b6c8cba481abf2e42ef961d7425138f30976be08891ca),
      uint256(0x17cd58993a4976d717177f65dd37c476e94c5b90e0099f6077051b4c41ed8a0b)
    );
    vk.gamma_abc[1] = Transaction2x2Pairing.G1Point(
      uint256(0x1fc679e2d31bb98b18f2e56e9d97853815761d296b856e77d2c2be2aa0c1be26),
      uint256(0x0417588679766a60b4fb1d9315cbba0556d5baa68dbe3e37b0ef004bfc2f3342)
    );
    vk.gamma_abc[2] = Transaction2x2Pairing.G1Point(
      uint256(0x2b21633684bd6157e6053f882d363d7a644e2c3ea0988dc51866c9d7c4ee2b41),
      uint256(0x1217536a983d50ade3970714fc647666fa7b5250ee089ab0deb597d17f39d25d)
    );
    vk.gamma_abc[3] = Transaction2x2Pairing.G1Point(
      uint256(0x137c92ffcd4ee8da0b20c6578def3b8fd4e87f06ad884036cd0a336f3db1e954),
      uint256(0x153b74478c7708ba11473492c989b2e32a6d6fcebc130a18db581b2ab04f5aa1)
    );
    vk.gamma_abc[4] = Transaction2x2Pairing.G1Point(
      uint256(0x11c299a3f272e142ef97661a486ae2083c6c700c498ee3a2cdb584ea9e55201e),
      uint256(0x2e9d87519fb6bdd1fda29270d3f53644221bd842e05fadc0ba88b8627b15a0bc)
    );
    vk.gamma_abc[5] = Transaction2x2Pairing.G1Point(
      uint256(0x263a1166ce2ad3b9c3d4310ffb7d768b7d09b444a4b5f9bcdc964836c4891a1a),
      uint256(0x15933c4eefe48714be292abcf264025de9948248d6d563da42e67d3fbf42feda)
    );
    vk.gamma_abc[6] = Transaction2x2Pairing.G1Point(
      uint256(0x114d3067d1fe4e08a7c03a9f3eabefb439809463f88867618d13d5c37e7df49e),
      uint256(0x243161e6b3590b9f05cc05681ee45e23dffbda7b6a22147c43a9f3944cac0fd8)
    );
    vk.gamma_abc[7] = Transaction2x2Pairing.G1Point(
      uint256(0x0a3a423e141ec936aa3bae3b7781eb785eb3ac126bb603c90b8dd58a32246e6e),
      uint256(0x0f9eb08f041ff1b8fd266798458e82e63b39bbe65e23bf0a53fe16273bdee114)
    );
    vk.gamma_abc[8] = Transaction2x2Pairing.G1Point(
      uint256(0x1e742e7acb744dcff64b901123da42b7db70602e26ac80a0166622edf18215c0),
      uint256(0x18d6c97501e2f1a23697e3dc35f29fd892ab9dd8eb57fb091caa42d09256d9a3)
    );
    vk.gamma_abc[9] = Transaction2x2Pairing.G1Point(
      uint256(0x29e6d126854d425bd4081a60b39c0a3184eefdb7d23c41cc192c7ffb4ec606f5),
      uint256(0x178440ef5d9add32370fe98e0b05a4ddcb1cba9f7ab5858cdcecc3c9b7e3ca0f)
    );
    vk.gamma_abc[10] = Transaction2x2Pairing.G1Point(
      uint256(0x0226b2abbe854d25d050f9f96ac77b72d137246b97280f08568f59deaf4c03b3),
      uint256(0x17732912427b5f244ba6ed5dd672fba7d6221c1f824ad1cc487acf3112f1798f)
    );
    vk.gamma_abc[11] = Transaction2x2Pairing.G1Point(
      uint256(0x23e860d94ddb6c98db77f096ff7fedfc21d93e03d06ad88b1a7af1e2b47f34bc),
      uint256(0x238ecee727f142c8bd84047f5da4bd4ff21426bb848f6d127dac2ab8fedb7721)
    );
    vk.gamma_abc[12] = Transaction2x2Pairing.G1Point(
      uint256(0x297515785b32be6514f96a8359a94e6e48eb8e387066205098fac78ee4314051),
      uint256(0x145057f2c0e4c04eca0e85d121f36e1c37b526afa513d73b08379dfa5c23b946)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    require(proof.a.X < snark_scalar_field);
    require(proof.a.Y < snark_scalar_field);
    require(proof.b.X[0] < snark_scalar_field);
    require(proof.b.Y[0] < snark_scalar_field);
    require(proof.b.X[1] < snark_scalar_field);
    require(proof.b.Y[1] < snark_scalar_field);
    require(proof.c.X < snark_scalar_field);
    require(proof.c.Y < snark_scalar_field);
    require(Transaction2x2Pairing.isOnCurve(proof.a));
    require(Transaction2x2Pairing.isOnCurve(proof.b));
    require(Transaction2x2Pairing.isOnCurve(proof.c));
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
    require(Transaction2x2Pairing.isOnCurve(vk_x));
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
