// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup8Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x07d628cc11837c62ba63df8701ffed926798fc20d11eb3423f55da42c0d59aff),
      uint256(0x2f166819ab1daf9e10788b16b69599bcde7d07e138830418ec9f8ac97000f009)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1c13002f63a5112c9798149fec1f1c9218ca3c3b778c75d2f7d39bb0b4ce5fe0),
        uint256(0x2f68d4b56639808e9e4be94f89e603c8b313a33b1d30d67ab6b48f2e12a4daf3)
      ],
      [
        uint256(0x11b1c295f2e55e77f6ef72fd1da4aba9bfc561362c59eb649ad4b247ed6c3b9b),
        uint256(0x0b5cff8ab0695fb24ec822d62d649e5c7874f151ec897fba24b9416eb9c2cc5b)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1362f62b74ac763f8339172f4c6b768d1ca41cb8a919b4885ee4e6a6d0bb28ba),
        uint256(0x0b20e8ee6d83ad100b29779b4ae53a08d68577d7019ec66b988d0ff36d7cbb65)
      ],
      [
        uint256(0x25d7ade9acecde23dfada7d27f26c70de7477dea4510e6349ab68d9694c375fc),
        uint256(0x0efadb6f7219e6d77871eef7bdc5144af49fa8e034a21626ee855a349d2982d6)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x04c9352560ce574319a319ec65ff5059b0e20710d6c946566ffc4098127fa177),
        uint256(0x0b2eb7cf107b43f44c290702806803385725539b8ee4bd01aac727b63c377319)
      ],
      [
        uint256(0x21e7712b333f7116db6a895ecf7b2dd67bcede15d3cb52c18fc149ec501ac03d),
        uint256(0x0fbe2fc82a3c1432984ba73ff2a63e6a8e89a950e0c116be1e6a5c3946535eb1)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1d791d1abfa92d1332f1c87daa08b599474cd261d19b39010851247db275352c),
      uint256(0x1a2931b68982cc22d1cfc686ada74ad18019e1194e5c0bb5395a3e38f65cf4f8)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x135809ef3354f6974e2a3abd6ff44cc06c38736981977cf1d451fec10432b081),
      uint256(0x06e44ec423ae6618ab7285da9812a1419ef7c10d8ccddf2dc5beae002db0ea78)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x254a3c1f8d6d41f1e7f75c91438ca572e82cac8a71cb92bf3ba66b34c5a1b5ee),
      uint256(0x0fe23a471e542a5b1a676dcc9aeae92fc76cd004fc700e4f96790666b001b052)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2086d881da341417e4272d80efdaa6e03d9fd68b81aa5ea9b302a71f55b5e17f),
      uint256(0x1bc9d73a7bf1036bd0a294b12878d5212eb592b3e6fed652ff32f8f4d30dee0e)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1b92e40b5fbd27bb836cad63b7ad096b3763ebf21b0c17a1a2b4da4998962e1e),
      uint256(0x263154dc766dc6717de6a6637132e6f82b6a6ca52b2deca6cd9499db4bb86946)
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
