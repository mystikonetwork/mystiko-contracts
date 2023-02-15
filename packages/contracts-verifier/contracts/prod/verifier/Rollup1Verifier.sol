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
      uint256(0x03ee74e5d6f4e0cb16c6e585afa9210e922c8511553ab96bb95baab4e34e0a39),
      uint256(0x19c471742c3d5bd21c633e3d101b1081745a791417a281c9b1449cb406d219cb)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0df50713842284c005f7f78bb4738cd15275311fbcb9c66c8fd4e5ce08b9fc63),
        uint256(0x1b8a918cc4b7a26511a807a44b0d80f0a41d64146e5166f7cc8ca064c8463bab)
      ],
      [
        uint256(0x2b4972b0393aba35b103d7d6f2be1aa5c4194ac121d48e36f6809d8796d32216),
        uint256(0x2be4d08b8ddf902f540f82f8fd15845de7bafd07c27404723ca8668875e709e8)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1023c0bfc3723ce219ca73f330a8090409c93995cb10e96d625cf1dab841f4ba),
        uint256(0x1e3d5c9df8013aad8678e076f8efd8b6abff519c6f8d61768ce1d3ece1a13dfe)
      ],
      [
        uint256(0x1d03979980ffd5a5fab3ffe0c6c22042498ef403244d889ac6d53787a263f671),
        uint256(0x030c0562f4a44f49e1b00055a44349bfec90e30a93624cd7186472f451ed210b)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2c579b27a4f94698919cb6b4ec5c1c46bdb5b543482b59074e69c803e5315d40),
        uint256(0x2997b04bc7a831cc3850302bd7754bad2641751d3c258c55837989220e5eea27)
      ],
      [
        uint256(0x04f06bb9d1523a5b0270369b54948f3e9b05bd4a6e9fa922e95bbb1e3b70ffcd),
        uint256(0x2f971b705f2334212bdd1642844ef70e823bec2c8aed506a4db20c0b2109302e)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x27986c1a31d3c75b61d3708b61bc3b4c1dbbe52ffcd9278542062a7e845b76b1),
      uint256(0x16a16d3dac5165456fe62812d1ca6a1e978bf85135a086f7454d0c33da8c0464)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0e69577bf93fcfc17e6e3444408e7691c8b64431c1ff9b1b2c801cb9213fc62d),
      uint256(0x00dc1ac101fa4118c787ad4e8e903fcb75e4c010bf7f2a7495d4d31f5d57d168)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1cd2a50a176f7c44eb7ed62c0823756f6fc78fd19b6390a068bc6fcc4a62a672),
      uint256(0x27f8418689a20d2c1a8b2847d4ee2061b00a349fb8286f119f25a49ec71de90c)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x22c2ac96e0c151f52dd99d19f04a017bc85cf05e1ed74ad86d3be4749b69045e),
      uint256(0x1c869fcfe8c7a4d16d261613d48e300a54b51d26ac8bcf30102e72edaf4638ba)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x124490e56a8d2786921738b5bcf4b1072b05ac9508d6fbcb0cbfa51d8577fb9f),
      uint256(0x1fec14f7432985f4ec28ca0bd74eaa0c69b3f488467603256debd71a096aabd7)
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
