// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.20;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x24cebde30b16773160dbd57f441d2ee6539749880045d1eb764aba381c565154),
      uint256(0x11cc1fb33ea648b878eb27c9291ba97054327c924b7d57c6929111df843c481c)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x09da9d0669f537e57b6ca065b5ef288c76cd85da4ade2d69ee9640202826713d),
        uint256(0x1f4790467ec0ecd1ea865f786bc59b3779e4f87e526e5fccc91b283db24c5948)
      ],
      [
        uint256(0x24ffec70dca2171e1f6ee54004598ac637252e67391a3a43d6c9382c4f24736a),
        uint256(0x300f0266e2831ca5a8c66cd1050a46aba8f9a379741438610220b41dad9b9df0)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1be8fb76ae1f811357f96472ac1cf46daecb83e06b095183dba7d69b82be5fb7),
        uint256(0x2ae800267f40325bf11ee7c420b3f2c8fe905d714971d4adbf3d8dd7ec722530)
      ],
      [
        uint256(0x0e671145c7bd4960c8bbd129e5c8fc3bec0e7b0219ad801fd263226200f782dc),
        uint256(0x1c5611ac4494153159608d2cf451fdc3325326c08e25c4e48cb859da0d597c47)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x031ef8f147f20d79976da68a04f67a5272a85c120ecc289bd95d24369b0cb399),
        uint256(0x1fd3cc1c237978a52f6d95b9c2960948bac68cc6a89c643b696f9afdacec20a8)
      ],
      [
        uint256(0x09809e37d71e6d0eecf5bfc313dfddf23507854d76fd12468c45c71521822c4b),
        uint256(0x2c938265fe44ff2ae86c3a0cb331f8770129c0b6d64b792ecb313149c0d1a9ae)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x03a08ef5a30b168486c7ba77b1c75676c86f660301cda72808fa6614a3ccbbc5),
      uint256(0x12d43c81c98315257debf19959c948b09851f39ea716256f1ca1ee6dcdcfde5e)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2598de405e2a544ad1372a457c2ffbda9517bf084b3d0dd11f7959321a9440eb),
      uint256(0x2bbafe91ab2e6e6bdd0628e4f3b27a597dafcf91b758e3cb693aacf23cbf2af3)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x23c31982f45dcea1664a483ad076ee3e111f1d9c58a90bbc5d2609009a4298fd),
      uint256(0x2154ae01998ba8a3a430743600d6b85da4d439dfb3e3f335a33f3a594e279851)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2869ceb1a19e31feb7aecaa58fba547bcfb865e3282f08c43267da3ae1b380c6),
      uint256(0x16a6fe2617f5a7cf0f391ae2bd76db5a1b521485508d01ecdbd3cd0a7c2e649f)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0bf22ea5a7c1c6ebc22d29a278fdd36d906b840bc4711c2ad0a258469dd87d77),
      uint256(0x07d5d87f301a730c40874d78a8f00154f8a2b17a5fa0b14c36f043c37b6e0b61)
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
