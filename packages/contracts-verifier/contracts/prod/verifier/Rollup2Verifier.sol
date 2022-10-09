// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x08d6a1335795cb84ac8bd69d0747ac42722eff0b8d379893e84479adb5d232b2),
      uint256(0x1b35cd3dfd25b1441da7cdb9f0e1e072691d8e68947e073858fb7be3ec32fefc)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x00d311c32440e177baf1d478adbd82a78bc565225dfc93c065f771ec0c14d4c1),
        uint256(0x21dd8a0501e56b172a0dfb5784676b2928148cd3beb8ce2bb5024e268e88bbb8)
      ],
      [
        uint256(0x07d7f6741919ec060037a343d04d37050b37f795b3d03f6bca8f5c7964c2c4fe),
        uint256(0x2fb298c2f38e619083cbd00415c1c54075f3c08d044ebbcaf6220cc9959a13da)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1d980b309f338bdf1306d85776ffd8cc3158d3241122a234005633e35cb2f720),
        uint256(0x1d1ee3dc5436900a4844886e7b899e9f5fd74a08eb11235531671b2ad1f097b1)
      ],
      [
        uint256(0x219b4c900b8b8385546f5a6cfec7c4b45e8eae80aa5fe526bf6d92e04ece7a7e),
        uint256(0x284e69562f3617d8a66ff67f2ffce9e7781924f2aa4aa373807810ce83840e85)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0ae73cec5ab4d39428eab64f9b64cc49d8e68cd3751b800429d0c6def9218317),
        uint256(0x25e6a4e2e91c8f39cd21b6364dfbf6df78cb1b4c91b083fcddbc4674165db512)
      ],
      [
        uint256(0x1f2bb3e976c10661bd5cea36a4b0312fe56979c9dbf7ea9b7d17c4ac1ef3bc8c),
        uint256(0x052beb21c3b4ff4a8a31407058c602ee4c16e97aeaa37c85aec9d191a8a2f6de)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x28a811b9b59bf5621a4f71993af53afedee0bd3afb8316d1c9588b1e1b0a0fc2),
      uint256(0x1c2e87eac324b5f6134b7cbf712e74d3203c620e98a648310074d528506f66bd)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x16e5dcba32c32a031fcf60acd4a8ffee7812837e9308d404ce0968d29d7a932e),
      uint256(0x1f459ab5d4a4c9b5cdd4eac3306032e4edcaab69b516b9fbe132e720e0255bed)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x198f165ddd19d33c04909e3811c604d22eeaa1a605ef820952169b589fb104c1),
      uint256(0x0aad392ef1a443f0e1bb5569e2018821316e4fc798b731b54365407da4848bb5)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1dd4729b670f11f067fe2516eb9cddacdb8d663e9b484cd8978efa150dfad421),
      uint256(0x1fd0af7f2554e89c5b1ba704531951033e22384983a57f2a3cea5d5ef625637b)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x16f52ee1aa342986555f591499b507ffd252fe82c8814e12e4456910d7dcb941),
      uint256(0x1acb5d88320b1c4dea9d19cb6f7fd8504a0e07f2709e3319482e2c48e70ae357)
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
