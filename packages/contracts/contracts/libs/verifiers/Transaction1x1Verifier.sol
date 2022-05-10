// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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
      uint256(0x1b72815cd1976a553f4d1156506ab73d40c20ff735234a33be915a18d0ae2475),
      uint256(0x111d2ca2db24ec7c28e4d5532d1af0ea5d423e7be6e19622dfde409e7d7f7f4a)
    );
    vk.beta = Transaction1x1Pairing.G2Point(
      [
        uint256(0x13e9f8c0f920bcc6fadaba52a7b00817b71aca4cc3bd0d7ebbc4ac764437f172),
        uint256(0x232f920ad4fa1a43c0cf88ad193d4635ce57d4cd1147d2cbd56d136f19a46a6a)
      ],
      [
        uint256(0x25406d5cba145992934e3ddc21353a44084af95b1071bfc577e8ffbff32e7f8d),
        uint256(0x1210fcf09dd36cd1f22d6bd712577e225dcf3ed4255e7d02f774904f1d3ea976)
      ]
    );
    vk.gamma = Transaction1x1Pairing.G2Point(
      [
        uint256(0x12280a7fa2ec58d2767b81cf769aebca4a82c5aa7442f8840221cf7b3f7fba2c),
        uint256(0x0f0db072ddc63746cc3c7f203ee61509df0ab9ff130abae9382116eb388e217a)
      ],
      [
        uint256(0x10fb89763cb0eb6297787c898259edaf83a04eadc1ef1ec1a891513beeeaa431),
        uint256(0x2e7f6a70a419e5f6ef4dbf536d3cc7839d03d54b7e17b4778c61991617abceae)
      ]
    );
    vk.delta = Transaction1x1Pairing.G2Point(
      [
        uint256(0x09c55d013d21658654666b3b902ed88897a86ebfb5c7af0fc632d5789448d169),
        uint256(0x12d10b7b645171a98404f499a889a5aaf0a8575294677b99c983e373b0d4048a)
      ],
      [
        uint256(0x1d620927ae44bb17cdb53e1360b3bf353a2d114cfb871a357b83affeb62e5dde),
        uint256(0x02fa8dd5f05ce0581836a5ebdfdbe699a1f4394670e8cdf803479c3c14273002)
      ]
    );
    vk.gamma_abc = new Transaction1x1Pairing.G1Point[](9);
    vk.gamma_abc[0] = Transaction1x1Pairing.G1Point(
      uint256(0x0e94deb5b7b28e8326f171e689b642e8cf52c12901afe802831f695074cddfe0),
      uint256(0x1c7e240ac443afea4734b6ecdef2ccef81347b1f9c597dc46ef913862f25d419)
    );
    vk.gamma_abc[1] = Transaction1x1Pairing.G1Point(
      uint256(0x1b99af2def2f0c294c962a7f0bc23882f32950b2686866fef7f4594fa85b5cc5),
      uint256(0x06bb8c60bca12b634b141793e0cfd984114e66ddb4779b4c413485c00e1fb407)
    );
    vk.gamma_abc[2] = Transaction1x1Pairing.G1Point(
      uint256(0x141fd62402204a3ac6e4c2117ef3d93924ce0e7d7dbcd404d8ee676f969c92eb),
      uint256(0x2077ba04304037f8c57f77605059fc84c19fc9647363cc5c666658b7180e6c8a)
    );
    vk.gamma_abc[3] = Transaction1x1Pairing.G1Point(
      uint256(0x1954217bc914087667bd857682171528b71f0c61d2b71594113fbaab576fab69),
      uint256(0x0073c161203227cc773ed971e547f70b5ad5bbba413475d854b80c6407edb806)
    );
    vk.gamma_abc[4] = Transaction1x1Pairing.G1Point(
      uint256(0x2c6f548b66d8b2a6509f63af6c54c46c1ef17ff163cd4212a33b44f318e8cfc9),
      uint256(0x2dfb9089930e8f5ee1281770913c5225b0d4336f1935b73484770b1b242646a7)
    );
    vk.gamma_abc[5] = Transaction1x1Pairing.G1Point(
      uint256(0x1a742fd32f92d7c28d59fd54efa1da5d20e60c14715204fd4d3fccae7336a783),
      uint256(0x28199c3e3c7b5f53cafca2e3d52b8b1cd302538e98ee3d99130fd87f5057b0b8)
    );
    vk.gamma_abc[6] = Transaction1x1Pairing.G1Point(
      uint256(0x2e55e32543ae75a3863ab8f5a99385bd41839a37814532a995dbaab6d5dad478),
      uint256(0x0cb585f05ce6d1d41157ed985f5dceddcfdf05f2cc953a70e443cb9f63d0f10f)
    );
    vk.gamma_abc[7] = Transaction1x1Pairing.G1Point(
      uint256(0x22837ecd58af0734d86851c1272d3658cdefe6e8801e5d87b6bbaad9ab7c3b33),
      uint256(0x224253d76caf140d32b499241a74d9e15e834fcd4bc729ccd0d1d803776f7cab)
    );
    vk.gamma_abc[8] = Transaction1x1Pairing.G1Point(
      uint256(0x109e36517abb76372602176f20ef1043aa12ae81a50cddcc669cbd6eed079c06),
      uint256(0x0c32f1f968e1264d0873201c44e68f2b7d8f80c22503a131647605861bf19854)
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
