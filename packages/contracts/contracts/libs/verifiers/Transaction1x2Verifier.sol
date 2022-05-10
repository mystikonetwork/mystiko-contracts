// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Transaction1x2Pairing {
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
      uint256(0x2d627bd55b37a7c511fcdec881ca379152e5a1f292747ffae5fabaaea61c6164),
      uint256(0x148ba55b6a32a02900bab0d6942ead57a34b582c7c312f52e69deaa3d095e3c2)
    );
    vk.beta = Transaction1x2Pairing.G2Point(
      [
        uint256(0x0c416dbb06ea28767b72d14cfd9d3a2b0ca8699b928402d5bd14f95a8048d1b1),
        uint256(0x05072fe72248a7df6f6520499197ab1f257f03479e4f6631575c04b7c3d261c3)
      ],
      [
        uint256(0x286c72b00b4a7f477ca563210906453c43d825488c8f4a24d03d28ca439180e1),
        uint256(0x2433ef5ec7e1db9534054985372efc699448573097c7ca5692fc4c6dd4db49a7)
      ]
    );
    vk.gamma = Transaction1x2Pairing.G2Point(
      [
        uint256(0x2af4ee46d436dc472e61a25c7700ec229cadbf7f8539f337206045f1784ddb1c),
        uint256(0x048d7c909005ac6b4349990554bb38c155e79e2841afc027858ff6648e8510aa)
      ],
      [
        uint256(0x04638d941803a267b7c9a2e7d0533a62cf1c9803b2d8f88bfb95c0071616173a),
        uint256(0x1c3204479bd252fa1e2327fc3087ba220d21429727b1ad286d102948d773b10a)
      ]
    );
    vk.delta = Transaction1x2Pairing.G2Point(
      [
        uint256(0x13bcd5f02a3ab08616b26685849497805d8380bfe95cbc9c7243963f6514c1c2),
        uint256(0x0bf026533d303c5673cd6403c993bbe11a8d14fc6e43aade51ba1a2c7551ee4a)
      ],
      [
        uint256(0x0686eb4906a52de7f31649fa691ec23a4fc56f622f3451272c315d4dbe082758),
        uint256(0x19ec8f030e5563781056e4da28f8e1200e1e93c095b4c061ac705186f5a4a77e)
      ]
    );
    vk.gamma_abc = new Transaction1x2Pairing.G1Point[](11);
    vk.gamma_abc[0] = Transaction1x2Pairing.G1Point(
      uint256(0x113d9b837db2d36a06cd3566163a9bd9d8e19ba9e230c1185cd203c261d37ac1),
      uint256(0x068793a8e1af4b4c782f1a3538ddba03fc543757146cb1bde14803341a955257)
    );
    vk.gamma_abc[1] = Transaction1x2Pairing.G1Point(
      uint256(0x173051d26c9051c92fba9905831d5435853e92f41aa9c5fe31fa550fb006c710),
      uint256(0x2dac2cf5a0d7454d8c9dbbe9623bcf0f89eb8c42b31bbfaa730b3e79092b69ce)
    );
    vk.gamma_abc[2] = Transaction1x2Pairing.G1Point(
      uint256(0x09d66a8b9bc1c3941f06dda5bd9b72991b0e8eaaddf1c88dd8d70587d207d7fc),
      uint256(0x19b1985906bafae7f3b5da28bd4656e014438aab37624c548de87d05a19f1eb9)
    );
    vk.gamma_abc[3] = Transaction1x2Pairing.G1Point(
      uint256(0x21470260d8d78f1aff7b65074042b3bff8e2068628d81c8aaa68ab74ee7c833c),
      uint256(0x28d8819e40eb1a0aaa8d18c0de827dbfe12ebcadb31aad6def58826b7e1b03b2)
    );
    vk.gamma_abc[4] = Transaction1x2Pairing.G1Point(
      uint256(0x0b8194d7902ed1019ee7b6b9bc58ff5f722102fd9bbe42413a194c0dbee12026),
      uint256(0x03e3057e83453af44703e2968f94cb752dc83692e64d7a2bfd35cb6019172178)
    );
    vk.gamma_abc[5] = Transaction1x2Pairing.G1Point(
      uint256(0x2f30a1118153e69e0e94b1498bfd89a40b32a4dff2d97745af6e13389085c39b),
      uint256(0x237920d819d1d3548adab2bd4cd5cc80c05399d932b36b979687dfbf3178cfd6)
    );
    vk.gamma_abc[6] = Transaction1x2Pairing.G1Point(
      uint256(0x21c5c0c67a543947f77e1b6bba3efa29999553c28f3496dcd764d90039314a34),
      uint256(0x02cd40f88d01cbc10d6b31cfa17d779056088094bf7a59346f232ff7296a388e)
    );
    vk.gamma_abc[7] = Transaction1x2Pairing.G1Point(
      uint256(0x1c046f9e00a2fb2be1d42d990dd168797644e69cf1817a998a55554655248952),
      uint256(0x2244d889bce2a1841e6b92ce53ce028b5cd2be552682838ad06a154c2f045d30)
    );
    vk.gamma_abc[8] = Transaction1x2Pairing.G1Point(
      uint256(0x2497ed50073f8173d9aa0ba43a94145ce65f41a7f2f2ecdefb4b38466f635c86),
      uint256(0x118f2135b8a2be27eb579191026a23db5346f33097325f6eadac80b354b5b1e4)
    );
    vk.gamma_abc[9] = Transaction1x2Pairing.G1Point(
      uint256(0x09ef6937dd61063285da0dc02790e8dc1b990c58434f66ebe67826aa2f057400),
      uint256(0x2b5db9989ae18da3dbd8f687d5b4cf6b7b3711937126f68e022eeec909b0d49e)
    );
    vk.gamma_abc[10] = Transaction1x2Pairing.G1Point(
      uint256(0x243fa6b10a2301d392e71733cb0fdb1ff356fe2ad0f57de571babf328942460f),
      uint256(0x22264d4636ebcd065043cb8878b9c49a44877f0d8f7c77d3a630ed89176125a7)
    );
  }

  function verify(uint256[] memory input, Proof memory proof) internal view returns (uint256) {
    uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
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
