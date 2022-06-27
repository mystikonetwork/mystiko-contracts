// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.4;

library Transaction1x1Pairing {
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

contract Transaction1x1Verifier {
  using Transaction1x1Pairing for *;
  struct VerifyingKey {
    Transaction1x1Pairing.G1Point alpha;
    Transaction1x1Pairing.G2Point beta;
    Transaction1x1Pairing.G2Point gamma;
    Transaction1x1Pairing.G2Point delta;
    Transaction1x1Pairing.G1Point[] gamma_abc;
  }
  struct Proof {
    Transaction1x1Pairing.G1Point a;
    Transaction1x1Pairing.G2Point b;
    Transaction1x1Pairing.G1Point c;
  }

  function verifyingKey() internal pure returns (VerifyingKey memory vk) {
    vk.alpha = Transaction1x1Pairing.G1Point(
      uint256(0x240dbe0d917b669acf6d9707aa556c1caae7103510a0f3b51f0813c5953d8b06),
      uint256(0x1932a16097016a0994145cdc5829635a89692fac1683a1fbb6efc84d962053c3)
    );
    vk.beta = Transaction1x1Pairing.G2Point(
      [
        uint256(0x21fd4c5ea51dd3cf9c0f30d76ff87ee3f768307c2d7f7b6b461a56a70a0b379d),
        uint256(0x3038a8567dc4f49526833be5274f4ab75fadc9d54acfdf854fe5bc330eb1400b)
      ],
      [
        uint256(0x2d3cd48b586dbb250fe25db49722bccfb8031187e71085d58ad722d7afd06752),
        uint256(0x21621eae61598a2ea835dfe9ad42c7569e07b22b4c519930198786d35ebea4e4)
      ]
    );
    vk.gamma = Transaction1x1Pairing.G2Point(
      [
        uint256(0x024e9331ebcbc29d00bb274cf7c6a36369e7d15b695c37e6e688f7aba4a479be),
        uint256(0x149970b5fdb94f4078bdeafb60a8a24b7255c97870b85e9f6f8f1bf7b4208215)
      ],
      [
        uint256(0x2f3a0678d107deac9af7b48c031dd0f833673e6f5a109665f9c79a406728e8e1),
        uint256(0x1b3988e62f1b5b40cb588dd4f9832261762da1805205f6319faa792dd2672093)
      ]
    );
    vk.delta = Transaction1x1Pairing.G2Point(
      [
        uint256(0x28e22bcf70457f35753e4ab2f3e26c291461834781309b540e951ce118dad095),
        uint256(0x274f4b27d7c6c391ed6ff89cd0cb15efab222faaa063669eba2d7496cf0a4008)
      ],
      [
        uint256(0x0fa4d83b80e738df12b765a1707e8e9b10676fe6b8b3e069affefb9f2e3929bd),
        uint256(0x102646b828300be66610436f11e33961fcf31d364d4f3a40b0bf69e08083d6af)
      ]
    );
    vk.gamma_abc = new Transaction1x1Pairing.G1Point[](9);
    vk.gamma_abc[0] = Transaction1x1Pairing.G1Point(
      uint256(0x1fe073af706f095f8ba455ae03ef7c7e85e0d703c82f6b33fffc93d1982f9dee),
      uint256(0x1f6e1b19f2f1644b85dbf82072d52e62076393fa9708c71496c3f2c68632c07a)
    );
    vk.gamma_abc[1] = Transaction1x1Pairing.G1Point(
      uint256(0x0ef73c51ea044df5c3191c192a850a223f0f8b59af33283d7e4e71c06de5bb67),
      uint256(0x29a69b83434ea2a9c53e47638e05f249ca474b2ac6f5c54ad9c885a0c90f6cf2)
    );
    vk.gamma_abc[2] = Transaction1x1Pairing.G1Point(
      uint256(0x303c666d45cb48301e68b5cb0cca37c3a30ef6b744a174a939aff70432e9caa6),
      uint256(0x1b1c46c862a8bb4e8037cc40e8579b5cc4cc1c54d9d276fe62b5d3e9d60a7eda)
    );
    vk.gamma_abc[3] = Transaction1x1Pairing.G1Point(
      uint256(0x2de2e66c4384906f90b48535a0982d540ebc6997ea44bb585b8d91bca9c38c62),
      uint256(0x22bf1de90ba81c4b76d9fc91603317abf3f1b0e7bfe5d4ad638afd9e35c70dfe)
    );
    vk.gamma_abc[4] = Transaction1x1Pairing.G1Point(
      uint256(0x201d8d3f636340c1df0981ddf6b1877ae205229f46019bb9e8b56ff223d9f66f),
      uint256(0x13115abe4ced5921b547098efb269ada9f26207571cb2d9608c5d2f4aede705f)
    );
    vk.gamma_abc[5] = Transaction1x1Pairing.G1Point(
      uint256(0x13dc74e0f8cf02c0be3b26904f8d349e7708158b890e54f9a98e3f73011aa62d),
      uint256(0x2d578548e8440b5ac790277f1a3e7294b3f0a9d797ef8e510e03bd65e3e151ac)
    );
    vk.gamma_abc[6] = Transaction1x1Pairing.G1Point(
      uint256(0x28614ff9bd9b8b93d3374bdc806c274a72a082699f95213a5bc03b04409bab5f),
      uint256(0x1eddab692da4e71f961ffcdf1729f3d5ce7fc2c1c3a6ac768aab2ef24577c40b)
    );
    vk.gamma_abc[7] = Transaction1x1Pairing.G1Point(
      uint256(0x0e1cf3fe28265bb3ba42c452b510f7a9d533ca352cde7a79cc20464bf3e819b2),
      uint256(0x2ce65c124f74d08ae00cd64e0020873f651f4fa980acdbeafb6bce4140585bee)
    );
    vk.gamma_abc[8] = Transaction1x1Pairing.G1Point(
      uint256(0x2372f39481d3a886820d44f5db3c7207276e8a3376cbc1d3e3ad72d87f0b1336),
      uint256(0x0504b288821f3654d25f88851ca95225785e7b3069f52af37a461d562d02c22b)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    // Compute the linear combination vk_x
    Transaction1x1Pairing.G1Point memory vk_x = Transaction1x1Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < snark_scalar_field);
      vk_x = Transaction1x1Pairing.addition(
        vk_x,
        Transaction1x1Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i])
      );
    }
    vk_x = Transaction1x1Pairing.addition(vk_x, vk.gamma_abc[0]);
    if (
      !Transaction1x1Pairing.pairingProd4(
        proof.a,
        proof.b,
        Transaction1x1Pairing.negate(vk_x),
        vk.gamma,
        Transaction1x1Pairing.negate(proof.c),
        vk.delta,
        Transaction1x1Pairing.negate(vk.alpha),
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
