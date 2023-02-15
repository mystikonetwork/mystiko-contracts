// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x046cde6c6ff9da6b12602ab77f74a9b430c52db7f2c2b50ad0a99b4e705edd3d),
      uint256(0x16405b7862db483645ad794691591628ea5ee73d49b9eb3620f5b1f4d58f8053)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0bb09b03d6a54ad71ee1016b84f08440ade91267b1ab9e888c0a9d0c7cf742e1),
        uint256(0x02d15e8ff53dfaccd347d8043c4e656b19bb7388a29cb8710218bd8f2208d356)
      ],
      [
        uint256(0x280595cac534afd3e1c3b20c776687de0e78d6bbe6ae8b34fdfff02dc76bd890),
        uint256(0x27e3f2e05f01182615319d7d921311e3ab37c5cfdc6770c34f525a449d391980)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2f94226c02eb6ee5ee9cfb0d14922b09432bc0afc118a97c92bba4e045f5cd39),
        uint256(0x12bf56d6de07962b74f61b39b6491a285b67ccd9f327a7a15bd095786b501fb8)
      ],
      [
        uint256(0x2c26bbef2cc67009e842c1ce6d7969a7cf5691b9fba83f2f733b5193c22d09eb),
        uint256(0x0fef50fec3f79c9ea2c91024a750396e8855939a09bbbabcc5cd483ff39ec1a6)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1cb7e130a1004826a92a7d3eb86eaa3a6b822610808c32662bcdf3769fc381a1),
        uint256(0x1b133d030f38ad01982b5c8d11a8883b8c2ebc6c27047010c08dbe17b0a40a93)
      ],
      [
        uint256(0x282f522b1a2c6983a1126dd0ef3a788238bd531cc1a75dcbe31f3bbf92b80c57),
        uint256(0x1bdcf70cd0753d3cc6038a70275f6ae7df5b1da516f3016b7f2c811d67b9c682)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0e6dbd91d50d0803467ddbd5647196c291c657057f1c26edeaff4fa7d64007cf),
      uint256(0x2564440699418c8ad6f1b85f2239ca648d4e835aa9c755298760d9891393a723)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0c2155f48d86a1aaf900f51a11c7def5dccd22dc83acaaadb497ebfc57917e8f),
      uint256(0x11c42e7dbec848d5ac1091fe731480116019e1689707a5e9d7e54f99883a8d40)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2236a87fec99c1f17bc6f556037790e24b4306c2f65cfc6adbd7672848053bc5),
      uint256(0x1e89766a7165e6b15ed5dbcf153087493628aa7a0135eec86c1279e3ee74485c)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0db0d93d2de8cd0e05769e81c5b29fb942d0405ff81b6d99024c86bf58cdac2f),
      uint256(0x20ea48e3f986fa4245e90f85db11c83da85f5978b7accbeeb05cff0dc1e5f7f1)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1987f88d4ee553ba678c706901320d3e08dc4b9aead040278714738912ab33e1),
      uint256(0x0c22d74a40643d6eee1577de9e770bbbc56400a83d6ffe0b971faf499148769f)
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
