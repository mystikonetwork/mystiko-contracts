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
      uint256(0x05ad3a48aad0f3b621bc63c5a9f67c6d1e98f7db58537a7bb85f0483b86ae529),
      uint256(0x1f604a88cd858aa7af996487a373e02f393e2b95af24af44b14965317e6ac8f1)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1a84e10581003cbc301e012d61d93dff17621b8799aa5b3b6517bc83f144be71),
        uint256(0x19c62117020819cd2b609614194cb2d6f7aad819544bac4ad9943df3985eeec9)
      ],
      [
        uint256(0x14d0a0f957bb58121a98eba73aa7734cdd281c6fa4bc86af95fee48f83d86402),
        uint256(0x256ad00942ba50249647f2dda4fc90d5516d90b28244878506df3f42c9b43f94)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x27ed4c127a47786e5c7412da974783531e04f363cc84a48f0e75f1c6a658c1f1),
        uint256(0x0742281b16b1dd8187c1f959546ddd827b8a3ab45d29fb393b009f7970b014dc)
      ],
      [
        uint256(0x0c953a8cb94e4a1afbef5064d2de2c1d9ce81cd7c8dd784f50d898081936eebe),
        uint256(0x2fc1e4aef473cfa3409c2e356677e18d5b7761bd7b0bb46e3e519715d5701086)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x05098bc1a8f5e627f8b249209a481588e499edfa8888c19e6af1049eb3a3aaac),
        uint256(0x15eb11fe0e15f66eff68d6a8daf0dcd0322ccb82c1a7ca0ea93f1d42c566a77a)
      ],
      [
        uint256(0x0e932ad1cc2af6de519ac38052efa1107033d39c3d918449366db7d410874601),
        uint256(0x2805f5755c6635551d892b457b093730d6e323717a54d7c7a4e3f414c25cce79)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1bf3aae3381f1f722a299d5bc652baadf4b9a033a8bc938e555f7e4a328d0622),
      uint256(0x1f933f36fa3637a5c82aab89c1c5aef9d2b89ed93b84a0662fb57ba34f64e532)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x25c53ab447c140c5f1dbc516ae8699b91ad287fe926f20155b4558ce5927c609),
      uint256(0x1a69182d6b1fc6d84bc508f7bc13b1d634182917ac75e76d2601498a712de086)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1552522e99fb008b4f426f45ac6f37afe1092b6958976f94b52a1a86063d24b6),
      uint256(0x302d26ac5f658079c463abf40194a9b0bd83b977c22123a6fcd8447c87c6873f)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x246fd73894956ff30c11bca1a1e6772c5bec29c22fd973e112efe5c12d3f239d),
      uint256(0x181e111efc90fafd5708e5dccb2795664cee4af30f04a2156c57649b3d26a83f)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1c09784218615fc4a815b30b3c11ddb0b02244a8c634067f2d0cd5a151a7fd8f),
      uint256(0x07c2f3762aad545c649936c04a3b7cf0a66474f324f1549ec0c64c1d1d481f21)
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
