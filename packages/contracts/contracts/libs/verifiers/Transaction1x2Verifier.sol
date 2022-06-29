// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;

library Transaction1x2Pairing {
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

contract Transaction1x2Verifier {
  using Transaction1x2Pairing for *;
  struct VerifyingKey {
    Transaction1x2Pairing.G1Point alpha;
    Transaction1x2Pairing.G2Point beta;
    Transaction1x2Pairing.G2Point gamma;
    Transaction1x2Pairing.G2Point delta;
    Transaction1x2Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Transaction1x2Pairing.G1Point a;
    Transaction1x2Pairing.G2Point b;
    Transaction1x2Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Transaction1x2Pairing.G1Point(
      uint256(0x0b6d93d64afe82e54c4909fc07d6d327818c0a8704214a2b23b3895aeb1a443c),
      uint256(0x10092e7f9879f51eb56708bc127b1f31219c64d3578e804a66f009cca27d3878)
    );
    vk.beta = Transaction1x2Pairing.G2Point(
      [
        uint256(0x2cf222c07fe2f3b58f939023a57f87af9ddd6117632c1dbb389425ee6b4b479b),
        uint256(0x069fb5a6799a711b22eb0f4b4c98beac47a457b2aceae04c5c412056a8df24ba)
      ],
      [
        uint256(0x09bf04bda24043621f144313fc6fa39b50dfe1173f73221d29a93670de0dbeb9),
        uint256(0x06dd35fc6157b8db49969910f3fc2df262b80f96d92271685c358754cff7f9de)
      ]
    );
    vk.gamma = Transaction1x2Pairing.G2Point(
      [
        uint256(0x1bd2f537abec4d11ef865b285dcf07e7065a01dd7cb562655338470639303d95),
        uint256(0x00f6984a9d6d4dfaf5889b79e31483f360a9e0be46ddb1dc3e3854d9648b7011)
      ],
      [
        uint256(0x1bdbdb1b6a1ac153f56812f665512f892038449a6494721e61b0901ed06bdbf5),
        uint256(0x0a806ef9c17e2e8f07a7ccaff8534b3da58eed6e0e1bfbbdeb6968927e3aa240)
      ]
    );
    vk.delta = Transaction1x2Pairing.G2Point(
      [
        uint256(0x08e8726e27933bdefbad557501287e292cb596aa2e30626bcef1c38be2969d24),
        uint256(0x2d688bff1352ffdb1601d4c15be31a1017cc49af1ace6fb124eefdc94d628e2e)
      ],
      [
        uint256(0x093d8bf0cc7265b1413e70af5d1e48fe7ad8e039de0c1188536ca6f961b88296),
        uint256(0x0a9955676c9b3015f83ff59a2170a91b86b01f82d66d2b115dbd33e9d12d733f)
      ]
    );
    vk.gamma_abc = new Transaction1x2Pairing.G1Point[](11);
    vk.gamma_abc[0] = Transaction1x2Pairing.G1Point(
      uint256(0x11ab7e03c0d18f511d1bad62dc684a797f237b2b1ba758a6b3ad433815c45afd),
      uint256(0x1c60a75dfa7b54c5f5829aae9a2dc0d15fa6ee08b212727ee46935ecb69f3bb7)
    );
    vk.gamma_abc[1] = Transaction1x2Pairing.G1Point(
      uint256(0x29baa55131e71d4604b79643c106123daf498a14b870d89ec8fde68d114322ec),
      uint256(0x2676986e2cd287d6e1ac144fd7d44454b917297f4b4daba684b2119d28bc0ec3)
    );
    vk.gamma_abc[2] = Transaction1x2Pairing.G1Point(
      uint256(0x1e4f5b98793d4337ffa982d76eb9f3f234c9225271ebbfbd5e679e86e73cf01e),
      uint256(0x1d9cb2ea71f31766a3fc67d1adfd3b6b45ef5e563db78735df65be75fedccd96)
    );
    vk.gamma_abc[3] = Transaction1x2Pairing.G1Point(
      uint256(0x2938e10c4b6945997fa2a9e25b94d0d3591bcd07696ae187e35290470167e2a2),
      uint256(0x19f265c169fe839e16fa6ba631da81444c7ae3e0048b45eeb6b5413e113336bd)
    );
    vk.gamma_abc[4] = Transaction1x2Pairing.G1Point(
      uint256(0x22b5521c05eb39eca9b63dc8c813059869559f8ef9b19eb9c0eaa96bca087781),
      uint256(0x22612fbfe4382631fd9f5443bb32be5795b0bff99b5c96c8c85c4b4ec5534cdd)
    );
    vk.gamma_abc[5] = Transaction1x2Pairing.G1Point(
      uint256(0x1018231b686e04177d2fb20c9bf7e8465bb4fb039d70281130a28126b8ee8f5c),
      uint256(0x2bd21bfe65b95d709b1ea81ab2ddd611d2b0f211eb273add3789369e27ad8820)
    );
    vk.gamma_abc[6] = Transaction1x2Pairing.G1Point(
      uint256(0x0b7699b00bd8de8cc728827391a423bc06ddc83da8396c94b490d85e1c18441b),
      uint256(0x0bc8f2b5ebce80115631be6f45a8c5dfda71930cf15bef613a8f407d8ba90524)
    );
    vk.gamma_abc[7] = Transaction1x2Pairing.G1Point(
      uint256(0x1444235a2fc84d8c0fea2846070e375d679e6e6d70d65c3899b863cfe36925ad),
      uint256(0x121baf65f1c944b9781341892d890997a63fb64641b08999267dfcbd0b02e70b)
    );
    vk.gamma_abc[8] = Transaction1x2Pairing.G1Point(
      uint256(0x2ea2fb6db26612bf59e02c0ce5f53e5d5b37fa49f1d033478d44e800aa5e532f),
      uint256(0x13eb31d20fbfd66a2e57d8b2a6cc4d21a1b09d08fc3b9a4e17ec58b07e25fcf9)
    );
    vk.gamma_abc[9] = Transaction1x2Pairing.G1Point(
      uint256(0x2386eb69c5dc327045e69c0813aac0836235972c7b4ef99a1dfa808d6e503c77),
      uint256(0x0da60583d7e83f264a8d8ad8756b12cbaa8e374b41605aa297e94bf39e1b2fd7)
    );
    vk.gamma_abc[10] = Transaction1x2Pairing.G1Point(
      uint256(0x20db1b3e26545a43e7c32997f4881ed06192f39e9c3ded72c6eee6860244b4e6),
      uint256(0x27bc02463b6dba1f6b7a1530126ed6d79d4d4980f7137bc57bae3b04552477d9)
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
    require(Transaction1x2Pairing.isOnCurve(proof.a));
    require(Transaction1x2Pairing.isOnCurve(proof.b));
    require(Transaction1x2Pairing.isOnCurve(proof.c));
    // Compute the linear combination vk_x
    Transaction1x2Pairing.G1Point memory vk_x = Transaction1x2Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Transaction1x2Pairing.addition(
        vk_x,
        Transaction1x2Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i])
      );
    }
    vk_x = Transaction1x2Pairing.addition(vk_x, vk.gamma_abc[0]);
    require(Transaction1x2Pairing.isOnCurve(vk_x));
    if (
      !Transaction1x2Pairing.pairingProd4(
        proof.a,
        proof.b,
        Transaction1x2Pairing.negate(vk_x),
        vk.gamma,
        Transaction1x2Pairing.negate(proof.c),
        vk.delta,
        Transaction1x2Pairing.negate(vk.alpha),
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
