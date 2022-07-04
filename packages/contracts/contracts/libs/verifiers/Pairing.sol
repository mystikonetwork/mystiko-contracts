// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;

library Pairing {
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
    uint256 FIELD_MODULUS = 0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47;
    if (p.Y == 0) return G1Point(p.X % FIELD_MODULUS, 0);
    return G1Point(p.X % FIELD_MODULUS, FIELD_MODULUS - (p.Y % FIELD_MODULUS));
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
      switch success
      case 0 {
        revert(0, 0)
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
      switch success
      case 0 {
        revert(0, 0)
      }
    }
    require(success);
  }

  /// @return the result of computing the pairing check
  /// e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
  /// For example pairing([P1(), P1().negate()], [P2(), P2()]) should
  /// return true.
  function pairing(uint256[] memory input) internal view returns (bool) {
    uint256 inputSize = input.length;
    uint256[1] memory out;
    bool success;
    assembly {
      success := staticcall(sub(gas(), 2000), 8, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
      switch success
      case 0 {
        revert(0, 0)
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
    uint256 inputSize = 12;
    uint256[] memory input = new uint256[](inputSize);

    input[0] = a1.X;
    input[1] = a1.Y;
    input[2] = a2.X[1];
    input[3] = a2.X[0];
    input[4] = a2.Y[1];
    input[5] = a2.Y[0];

    input[6] = b1.X;
    input[7] = b1.Y;
    input[8] = b2.X[1];
    input[9] = b2.X[0];
    input[10] = b2.Y[1];
    input[11] = b2.Y[0];

    return pairing(input);
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
    uint256 inputSize = 18;
    uint256[] memory input = new uint256[](inputSize);

    input[0] = a1.X;
    input[1] = a1.Y;
    input[2] = a2.X[1];
    input[3] = a2.X[0];
    input[4] = a2.Y[1];
    input[5] = a2.Y[0];

    input[6] = b1.X;
    input[7] = b1.Y;
    input[8] = b2.X[1];
    input[9] = b2.X[0];
    input[10] = b2.Y[1];
    input[11] = b2.Y[0];

    input[12] = c1.X;
    input[13] = c1.Y;
    input[14] = c2.X[1];
    input[15] = c2.X[0];
    input[16] = c2.Y[1];
    input[17] = c2.Y[0];

    return pairing(input);
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
    uint256 inputSize = 24;
    uint256[] memory input = new uint256[](inputSize);

    input[0] = a1.X;
    input[1] = a1.Y;
    input[2] = a2.X[1];
    input[3] = a2.X[0];
    input[4] = a2.Y[1];
    input[5] = a2.Y[0];

    input[6] = b1.X;
    input[7] = b1.Y;
    input[8] = b2.X[1];
    input[9] = b2.X[0];
    input[10] = b2.Y[1];
    input[11] = b2.Y[0];

    input[12] = c1.X;
    input[13] = c1.Y;
    input[14] = c2.X[1];
    input[15] = c2.X[0];
    input[16] = c2.Y[1];
    input[17] = c2.Y[0];

    input[18] = d1.X;
    input[19] = d1.Y;
    input[20] = d2.X[1];
    input[21] = d2.X[0];
    input[22] = d2.Y[1];
    input[23] = d2.Y[0];

    return pairing(input);
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
    uint256 FIELD_MODULUS = 0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47;
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
    uint256 FIELD_MODULUS = 0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47;
    return (submod(xx, yx, FIELD_MODULUS), submod(xy, yy, FIELD_MODULUS));
  }

  function isOnCurve(G2Point memory p) internal pure returns (bool) {
    uint256 TWISTBX = 0x2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5;
    uint256 TWISTBY = 0x9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d2;
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
    uint256 FIELD_MODULUS = 0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47;
    return
      mulmod(p.Y, p.Y, FIELD_MODULUS) - mulmod(mulmod(p.X, p.X, FIELD_MODULUS), p.X, FIELD_MODULUS) ==
      3 % FIELD_MODULUS;
  }
}
