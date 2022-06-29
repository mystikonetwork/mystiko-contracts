// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;

library Rollup4Pairing {
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

contract Rollup4Verifier {
  using Rollup4Pairing for *;
  struct VerifyingKey {
    Rollup4Pairing.G1Point alpha;
    Rollup4Pairing.G2Point beta;
    Rollup4Pairing.G2Point gamma;
    Rollup4Pairing.G2Point delta;
    Rollup4Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Rollup4Pairing.G1Point a;
    Rollup4Pairing.G2Point b;
    Rollup4Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Rollup4Pairing.G1Point(
      uint256(0x1580bcd09fdfda69480d5389a6bda4791a4abba58a3786cdf43cf38c4aebd2f6),
      uint256(0x276286a69866ae2802069a78fa1105780a95e03363af6fcdfd8090c72a4cc339)
    );
    vk.beta = Rollup4Pairing.G2Point(
      [
        uint256(0x2d4d1b4dde7a55a6a40970f2616cd9768e11002c497d28cacc747cb724a8ad5e),
        uint256(0x2c751a31268c5281b10bd5f539bfe696e23f59618d523bd5c22edf3bdec29a3d)
      ],
      [
        uint256(0x033dae0485443b344275a226a92dd1266d5356fedd97ab342e03fe80fc82d3c0),
        uint256(0x2729405948ff151ac7b6522f280417748bce3b8b6889d62e94ddbb169b4187b2)
      ]
    );
    vk.gamma = Rollup4Pairing.G2Point(
      [
        uint256(0x0f68be9a281ab95764a4084a051dfc86db6312ee5eeeaa4a5e45183da8bbbfb5),
        uint256(0x02c152527562832f7892b17089f3af834be76a0693b0bb616fd6daff0cb6d327)
      ],
      [
        uint256(0x0a677b625ca403f3300198b450dc851b92729636d9cc20f444fd775e15769720),
        uint256(0x106df3c4ecd4d4f3c9f1968069ee2a960767c3eaed3e927164a427d5502e930f)
      ]
    );
    vk.delta = Rollup4Pairing.G2Point(
      [
        uint256(0x184353db032b5c89e718343b308471df862708461bbabdf06f8dbf30d0713b1e),
        uint256(0x002853319478313f0d49a60b738e9903fb9d332ca0cad2844ffa8fda48564f18)
      ],
      [
        uint256(0x299ca633fd54d3c70af9f5ef99a94b959015de23fdfe2ed2d1233ae2d1249f29),
        uint256(0x12d5a9b81c64184cedf1f155fc1dc31445a9565f9da662454e49cd015066b29f)
      ]
    );
    vk.gamma_abc = new Rollup4Pairing.G1Point[](5);
    vk.gamma_abc[0] = Rollup4Pairing.G1Point(
      uint256(0x2de9ce78fa530c4366b1209c0cf1b0f5ec40a01aa7ea05c08a6482c237a6dc2c),
      uint256(0x227cb0dc9c4558e89403f157b1e19a7cc696f6bbba6f7ddb22fcfbdeb4bca8a4)
    );
    vk.gamma_abc[1] = Rollup4Pairing.G1Point(
      uint256(0x29a9a9d3f057e4bc51fba306cf731651f80d98cc7d21183c8ebf248b0cdc80cd),
      uint256(0x126ea5f4f2e8170706bde6ce6a39dd09c528d015fed8400514739aa7c76d190f)
    );
    vk.gamma_abc[2] = Rollup4Pairing.G1Point(
      uint256(0x169156adee136df7e05239577ea15f13038e2b23b57f7a72a0acc947c602f5de),
      uint256(0x08f724c6c21a77d6c5498ec4a8e616275d8907932a7a1ae76eb55f69fad50603)
    );
    vk.gamma_abc[3] = Rollup4Pairing.G1Point(
      uint256(0x0ddb47f9ea85238133cb90432746cfd5571de68df39c404d55652784a76b8251),
      uint256(0x19ed8c55723a2306f1b944abd5f7e789e76125d8afcae603884e0e6890f2b640)
    );
    vk.gamma_abc[4] = Rollup4Pairing.G1Point(
      uint256(0x05144bfd2254000f7b9e72b248de666eef789870e081ca50d05d86e139f52c58),
      uint256(0x1879b882bbe4680c0983b9ef4349706a5de35d0c054baf75ffb036d85b9b6964)
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
    require(Rollup4Pairing.isOnCurve(proof.a));
    require(Rollup4Pairing.isOnCurve(proof.b));
    require(Rollup4Pairing.isOnCurve(proof.c));
    // Compute the linear combination vk_x
    Rollup4Pairing.G1Point memory vk_x = Rollup4Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Rollup4Pairing.addition(vk_x, Rollup4Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i]));
    }
    vk_x = Rollup4Pairing.addition(vk_x, vk.gamma_abc[0]);
    require(Rollup4Pairing.isOnCurve(vk_x));
    if (
      !Rollup4Pairing.pairingProd4(
        proof.a,
        proof.b,
        Rollup4Pairing.negate(vk_x),
        vk.gamma,
        Rollup4Pairing.negate(proof.c),
        vk.delta,
        Rollup4Pairing.negate(vk.alpha),
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
