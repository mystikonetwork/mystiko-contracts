// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.20;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup4Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x107ecff291817d299c442d59d317cd751eff82aaf0ddc0143b3088010238415f),
      uint256(0x1479dcd0fc2ed9982c8d4e1f374cef961977719783a27e96df150f6f06d7ac97)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x25ca1404e8c04e3cb03f3c42e9636a4874c9fa07d6fb19035762dc404983cfab),
        uint256(0x1503132e90c110726b4a3786fdc12b397a1e92409886913a47af7ef1f8901270)
      ],
      [
        uint256(0x1e7dbeb21b218bc837697a4b980364f483f02ad8828ece39e854bbd22b374cb1),
        uint256(0x1602e26a74b6e17caf6a76335f0c26e8df0b9004060cbca1409eab8102e4ad7d)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2c6f68ea935ed56589d75f4c5262f428c31951478ea593943b2de67c1ed67057),
        uint256(0x15fd947e707d3f0cf837068f4e59ece8483966cac3e2c8a7c9b35b810b1b3558)
      ],
      [
        uint256(0x188fb04ebe65afcf3ec94f59a5eae0a47b375c4e615787a28a6fe516e6ac4fb0),
        uint256(0x0a54b48c3e5058bd9ece3bcea63f93f1145d4281e5329ad34a1f4ee9ad639e54)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x00251db64031a6503daabd0ba19b00145bdfc291a1d325ac7f71940e32c9061a),
        uint256(0x094c79049892c41ec96b8cf07595b6f4ade3d06eba660eff04ade39ac9ecd0e3)
      ],
      [
        uint256(0x0604be6ab7354a81f2ec3ea22233b56e2d0a3ad6b1118fadcc8563f4c95db31f),
        uint256(0x099d8812518faeeba6799bbee9d6e41f32b91e8125d68fd5bcc597f8294b7ab7)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x050d151d2c5e67062a081c4cbaecdbc2dbd0de7fde52cfc1ce6e46f17db20d03),
      uint256(0x3017f5d69ce8d8e3811c09b7abfbfd4f47cc0a38b4c073470a476f25c9e2a544)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2960476d0030f09fa2bf6b9b6b41eb2249edf355fca6d3d87116da98a4493f69),
      uint256(0x0846cd2bde5d2ab8f569130dd12db0ccc95bde6a39c328b6b1f50e0c19fdaf36)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x270515f7d2bf2af9e81d971cf61649513cb648ecc8ab6b0a1d4502c1d0680470),
      uint256(0x003c9bbfa2b54519f583905c87fc4fc0482cb126b230e040bd4e9346d92573ae)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x129b0dfb2b3ac080a690f4386f9edbbf4793c4dfff9929d7a9835df26565cd90),
      uint256(0x03cc35e0bd4db09a4c55b392de737a85e809f0bca8cee12456e5923fbc08c273)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x16e58b8cf8639d858351580248e7851a54ac0aa53e965c0d8540d46230f3eed9),
      uint256(0x210db15ca754fba9d0494c64fc42898bcde9c7dbc5460905c4316206eee71009)
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
