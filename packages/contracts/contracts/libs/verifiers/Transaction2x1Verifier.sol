// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.4;

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
      uint256(0x1d51adaae24b4976096d55485355b5c06873f11bf52d68d91d93c866f43b87b4),
      uint256(0x1517fd8925069dccab2db91692d4877a8ee91d60dda298c53c9f8df0c1c8ba5d)
    );
    vk.beta = Transaction2x1Pairing.G2Point(
      [
        uint256(0x015b99a9fa52d480abf6c66ce52fcbf12d2c731b808215378e4e5a65b23674c1),
        uint256(0x257021259c30d3c273d9cf5cbd5ebb66dca9e7dd2b3dbaa620be1a3bb11c0865)
      ],
      [
        uint256(0x0c2c6958821d76042f5188f7f3df0c441055bf9465d437d14363733dd73c42a9),
        uint256(0x26d12f8e724ec23ddf4fbb8c4b9a821b61adcf8b74e834a8fdb2867796862224)
      ]
    );
    vk.gamma = Transaction2x1Pairing.G2Point(
      [
        uint256(0x056ef461327a580c40ace77c1dffc09b0b09e86b0e810d8637721ad7ba738818),
        uint256(0x1ed796827a328031969371da16090f72ef49b8ead413203ffd52074573ec6f19)
      ],
      [
        uint256(0x0d1cbd32bfdf899e5a61a0812ee3aff69fb3339685bb62fca2ec7f807887a8f3),
        uint256(0x2f8867140fd5e4c507b0cae6a5c5b92625a4c6e033d89c264269c629283da5e5)
      ]
    );
    vk.delta = Transaction2x1Pairing.G2Point(
      [
        uint256(0x1780c45f9872996a93e609cb057a20a7984059b780bd4bd24f35e600d8e4a7f9),
        uint256(0x094553d21c8267b52038815c889f630d08ee9992f9739f1488e977bd14db4e93)
      ],
      [
        uint256(0x09c3de9d3374d9bab56491bf436ef74c873c478e14e55d8e213225cc5eec6b05),
        uint256(0x0e1ea50c227a66c90b083b82cdc2c9019031989e09f56eab88a8829ddd75ca7c)
      ]
    );
    vk.gamma_abc = new Transaction2x1Pairing.G1Point[](11);
    vk.gamma_abc[0] = Transaction2x1Pairing.G1Point(
      uint256(0x1cdae2ff2c1c2d2e7825e28fe7f65c5e1e49b257bf219adc3c34d38c61cea69d),
      uint256(0x2ee00a9ad5bfdff302efbf6ef3734f61c269c5c9adaf30fe62e4975e7fa34290)
    );
    vk.gamma_abc[1] = Transaction2x1Pairing.G1Point(
      uint256(0x25fc6eb00cce6100256dbd3dda4aa6d1fcddc5b012aa9f0e7eed8600ee221781),
      uint256(0x087e94842f647469bce476838443145ca810b55fc7fab93ab47322abffba3875)
    );
    vk.gamma_abc[2] = Transaction2x1Pairing.G1Point(
      uint256(0x03d2aa2f39bd556e3d0d77d7eae2d7d5983bdf85dbd49bc2ed922aff0030136f),
      uint256(0x1d841fb4a9aa4e5669a7b6b6fc0892d25973d13c048f2068bc05e6c7d83f45c6)
    );
    vk.gamma_abc[3] = Transaction2x1Pairing.G1Point(
      uint256(0x1f34f1a60d0838a7651474f30d3d3c7a05e8c650864272e201d9287982d7c26e),
      uint256(0x259bf8743e35407da85632e66e66cb232369550ee6ed374ab19b8471534c0631)
    );
    vk.gamma_abc[4] = Transaction2x1Pairing.G1Point(
      uint256(0x03dec9f8aafe6ae5b1c2c34bb717037acf0e37e573a2d169f46f7d1dc4f48ec1),
      uint256(0x032eb683711d0fdb7a3c83176df77d721ef84517f4109c77a39c2b45bd6ff159)
    );
    vk.gamma_abc[5] = Transaction2x1Pairing.G1Point(
      uint256(0x09479eb6ad5eeea7726760cbb700bc00c8173d5e2984c711aaa931fe8bf49ce4),
      uint256(0x1518caa32b54040661758faa52cbcab180db59344289b05d4113f910ee8647c1)
    );
    vk.gamma_abc[6] = Transaction2x1Pairing.G1Point(
      uint256(0x10ed06072045eddb86a44797185aa488ec8db0289b7d63f44fbefc253524ae6d),
      uint256(0x093d29be7e56766f214cb6dbbaed3f8c0f74a6a05de2c1fc088a83ef5f99c97f)
    );
    vk.gamma_abc[7] = Transaction2x1Pairing.G1Point(
      uint256(0x1ec73b6a217004ea2cfb2ce3457bc3c39824a816cd1fa149197180df5556048c),
      uint256(0x1695fc2c686c22078f3fa7f6415efba5cd0d531bcf99a68b4342b5994c4d8adb)
    );
    vk.gamma_abc[8] = Transaction2x1Pairing.G1Point(
      uint256(0x07a6c9ff0a878092759716d938f4fa8bbf9b1fb885e15d7bdd87f58518cf15e3),
      uint256(0x11bd1b41bd93613ba46ed81f690b45261a1c3f09f74d815fcabb12526a57d910)
    );
    vk.gamma_abc[9] = Transaction2x1Pairing.G1Point(
      uint256(0x0a9b0c0fca004e0dd7d5f01f96ddab7aaf7a996ced6f8506c8e5aa6e61c35c44),
      uint256(0x17d95c8a7a66a84d92bb7548034b1181f0db8c304cebb67fb6551a5edf711f22)
    );
    vk.gamma_abc[10] = Transaction2x1Pairing.G1Point(
      uint256(0x002a8a02376dd72dfaec18e6e06af8e740a737a45156a38c7e38bac86881ec4c),
      uint256(0x25a9f1661aac0aed41ae8dfdcd649eac1f40d5334397297af1c0058709bba8b0)
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
