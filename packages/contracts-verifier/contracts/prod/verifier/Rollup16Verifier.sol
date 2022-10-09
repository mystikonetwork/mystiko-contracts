// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup16Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x013167c92639ae91d5de367981b41e6fe0d00110b65a4d1c2d02d0f8c01a3c5c),
      uint256(0x0bfd1749edd6e351021a0f8f4f2131adbf79ac3b85883a33e00f5e8fa3748b7c)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x22433ab4b9bdef8101c0495fdfa2134ab0f7b6566ae35ef5594ea4c80275fcd9),
        uint256(0x04f764769f6ea2be688778aecd853540c9bdc3e8f249a92e02536d562bc84ab3)
      ],
      [
        uint256(0x12ce33805d81328976122835c2f78e2845fad1f50d9be18bc3c0b0e6521286ad),
        uint256(0x040e1d465cf7871cb1dd7f449e12fb89e29ec644e76cc6d0c50222f444b8ea0e)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x089961b0118669e1c5e3527fe002ea3382c720e75d6e5260cfd3f8b5e3e1f678),
        uint256(0x0dda706b8b403dae035eea76eb3612e713e897582ddae5166f2d2059bc9a6ace)
      ],
      [
        uint256(0x0a9a8d7c2aa4a58c51470597c7aa66e70d95856a763bfc0ed8af3e615c1cb6be),
        uint256(0x059d095b3061ceaecbf658642f55a658871283f8032124c8b456422f848ad499)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2633111c47f5719f883f8d96da716fb14319f8d7987378a8efe3df09f02dab9b),
        uint256(0x23457e8c3e7b460dad9562925abcfe8ece43d05feb6082dbfe0745a734509c76)
      ],
      [
        uint256(0x1c528f39c425d7b260c9770a188eb236a13efa4b7df22f80610e765f37687570),
        uint256(0x299551ddb3051da685a6f1c1af78b004adb4ed87f21a286626c172b8b15f4ed1)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x02210311b61680d922e7e87d9617a10f6cb9692b394f71d06bae4685c6213b9a),
      uint256(0x10de672c19805189e1428ac6c7a0dfd18bad411dc38e655f23e8c27d16f53bfb)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2bf9b9a1328a917c0dc0203c199d87629d116406ad514f0d10ced0f6ef577fb9),
      uint256(0x0e55682f08058bb9313a2f548a68a91731a9331b84c8b1bb3c7aa73f4473b462)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x29796f7f968c93113762b8afa665e5a5d9733e7f1d521a7bd18549a592c01e63),
      uint256(0x06e384f82fb049f4cc79c4c4ff997bcd49f2e095209dc8d2dbb8866f7ad88ccb)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0d716382f5f0ebce0ededc039be5e136aa7bedae012274acc85fb75dd3de1680),
      uint256(0x2fe83e1645a0caafd5ba87b89249438bdb25443cfb2dcf4d225c29556c2657c4)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x04747a3d98f4246b3a52ce411fe562073360e0cb88e1af5c03c08af1eaf17a66),
      uint256(0x0a79d6d6efdfd68b60f5992eb25a3f5fcdaf8d5b1026d293b117509706eced92)
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
