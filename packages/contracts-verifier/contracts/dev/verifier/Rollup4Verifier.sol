// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup4Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0150824e143a9046f53221b778cc16a45aea86474571ba73840e74a4b15718a6),
      uint256(0x1e2c8173cb23750dbee571d1afaae155d37823ed89817d1420282f185c672981)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1ec9a65cd1f06f7c45c0f5cd54431e42bfd1fe7ef9655a2748f92837bba1c65f),
        uint256(0x0e4b86cac98e6cd8408dffd7919ff31284f6aa997308a85593ef43e0445c1b24)
      ],
      [
        uint256(0x17c2b987e4913aa556b1b66f2c38abd1aeb96532b7bb6ec2c960be7b86986252),
        uint256(0x1f768e7d9e74cded38dd0925dfb566917f55bbcd7202650a1377cbbc3fdd9b67)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1846fab18650225326292a385b880c41e8a391c370ff388b8238930019053d8b),
        uint256(0x2e50b6dd392b9d6b716654c470b6da1fdd5a3a6b84c4cfbd9fba202d03608083)
      ],
      [
        uint256(0x1ef72f33ce00f5a54091bb687ed0e0fd3a813eff5dcea85ce9ff252239c78b29),
        uint256(0x0b574169b256f7cfacc67cf67b3c844748d868f1c90efffeeee0869e1081b359)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x28f7d994747327dd29a7d19cf4730ccc3ec4b938eaa5f03c6e3d5170a56a18cf),
        uint256(0x09bb2992e648a0231da3557fdad1f40fca750a7ce23c297d455aa5ffe9a24a86)
      ],
      [
        uint256(0x0a9b320fbd263261ad1a6aaa5a5f284aa67dbcfedbb3350d8b23ac913ddae353),
        uint256(0x01b387517112bfd05af41e6354f5a88be2c6d8f64909a05a92ad69273782ef57)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x162c1aeb1b7cfa2d03cff883f8b798dab80980b72ec78eb5248162bcaec71dce),
      uint256(0x115bbfeca0aee51ef6950d0a997515c06c2320191058343f403ba5efa6197f87)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x06e326b9e16cd58ac75be0f604bab2f3df3c44227e80c13337a7e9bec5ed881e),
      uint256(0x2442fcbc6cf49e8fc3618ca09d4014c220f308992dbe9710c216327c37dc0528)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1ca6079fd76f3bde97d5fd83b433d2bd8c7106b04e9761a8662764948fb4dc69),
      uint256(0x2d5257ad9087eb67559f06d2e7543d6f94cde6ae98320930dc77fd589516671f)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1573cfca799c65cf63b8e5134a24786b8c25268def87ab3e8bf0fac68bc87876),
      uint256(0x10d4336fb64e2732bf3c734aed33af1d5a786b4307e3507426091d195870a543)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x19b0465361a361e71115f1ee9bdda4082fe58ef4d02890eb56b843969109f184),
      uint256(0x2cc65d6f4b02a2846309c3e5eb1e2581c52b60b71dc857a606e4964bacb28393)
    );
  }

  function verify(uint256[] memory input, VerifierLib.Proof memory proof) internal view returns (bool) {
    uint256 fieldSize = Pairing.FIELD_SIZE;
    VerifierLib.VerifyingKey memory vk = verifyingKey();
    if (input.length + 1 != vk.gamma_abc.length) revert VerifierLib.InvalidParam();
    if (proof.a.X >= fieldSize) revert VerifierLib.InvalidParam();
    if (proof.a.Y >= fieldSize) revert VerifierLib.InvalidParam();
    if (proof.b.X[0] >= fieldSize) revert VerifierLib.InvalidParam();
    if (proof.b.Y[0] >= fieldSize) revert VerifierLib.InvalidParam();
    if (proof.b.X[1] >= fieldSize) revert VerifierLib.InvalidParam();
    if (proof.b.Y[1] >= fieldSize) revert VerifierLib.InvalidParam();
    if (proof.c.X >= fieldSize) revert VerifierLib.InvalidParam();
    if (proof.c.Y >= fieldSize) revert VerifierLib.InvalidParam();
    if (!Pairing.isOnCurve(proof.a)) revert VerifierLib.NotOnCurve();
    if (!Pairing.isOnCurve(proof.b)) revert VerifierLib.NotOnCurve();
    if (!Pairing.isOnCurve(proof.c)) revert VerifierLib.NotOnCurve();
    // Compute the linear combination vk_x
    Pairing.G1Point memory vk_x = Pairing.addition(Pairing.G1Point(0, 0), vk.gamma_abc[0]);
    for (uint256 i = 0; i < input.length; i++) {
      if (input[i] >= fieldSize) revert VerifierLib.InvalidParam();
      vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i]));
    }
    if (!Pairing.isOnCurve(vk_x)) revert VerifierLib.NotOnCurve();
    return
      Pairing.pairingProd4(
        proof.a,
        proof.b,
        Pairing.negate(vk_x),
        vk.gamma,
        Pairing.negate(proof.c),
        vk.delta,
        Pairing.negate(vk.alpha),
        vk.beta
      );
  }

  function verifyTx(VerifierLib.Proof memory proof, uint256[] memory input) public view returns (bool r) {
    if (input.length != 4) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
