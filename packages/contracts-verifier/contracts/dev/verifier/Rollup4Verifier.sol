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
      uint256(0x2bdbfc8c11c9de8bfbcd261b952e797c7def3e5f22e331a9d7d2be7cf54191a9),
      uint256(0x16d8f2b77ff3ceba3c6abf4ff9fd8e333dc08290427a00a083b94131c905b221)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x25689a8d889eaac73b2ecae0a2830527fea1c9e2ad4ec084efb37e52878959e1),
        uint256(0x00c0ddde8788f037466ea03ca1aabf0f26bfc7f515e7b7892eb01e8d5a213370)
      ],
      [
        uint256(0x2df8240dc04fa7481cda528f9e317bdbb66f82f7c99c6362665236506adf09f5),
        uint256(0x2fe9ba859aeb3f60cdeffa45503898830d9e20911231823ea0c0f0c02fe57711)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2b38052387166fb3df567723b2ff02ac5be8814d560a8135f39cec21348a8426),
        uint256(0x0ef7cf8baf2192b18f1d1b1b57e28b81189c5ef3f304d5f744c869434f3e4a5c)
      ],
      [
        uint256(0x2cd70249c052b290c68727b3f5ded33d70f8ab334f9bf22a745fcb3b12505c59),
        uint256(0x26ed94dbb5c5e248024d440b4a7bdb653e107039a5b1bde1372398cedc034349)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x14d3ceb54dc4bf360538801b4f71e16254bf16fc12129f23216c0d514e4e1afa),
        uint256(0x0f6d26d57f1fe7508e732319f14171a9b6288266e3c788a4c711741624902c30)
      ],
      [
        uint256(0x10ac38e89243188b7f3a5beeec4edcd111e202f6659c2eb8c3f531841ae6e2b4),
        uint256(0x198819877539aeafc740acf9288def97366feba5b1d32df711d696bebe41ff31)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x00b397970c06a6ecfbf8eaad162c19a789c185c2082da48fcf8491804c0170e9),
      uint256(0x0ff6f3607b7f9e69f029126fdaf13267de78afc1ab064dc1549ae993fb0543ca)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x030be1acb8e253cdacc74c69e8d31e0e49887c613d4734b1fedc0adf7a8c10da),
      uint256(0x1cff477fd9ff0f2c53e30dcc092752d64e7984dcd51176415ee2df2f07593b9c)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2b5b6ed78073405986ae8859d0e058336a00352444e54e64a32629e8e5d37e3d),
      uint256(0x158b8f15694dd63f9badc042fb46dbd640b58405a25c2a703d677df4e47184bc)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2b3b68355a6eecb60e4c175512a5ff27aefa35044d2a6a6364c87e6b1c0105fa),
      uint256(0x0140b20d81ff647b9bac5ee338c542ba2e261c8239b5893ea9aeb5832f873b89)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x29993a392c4d9e71e9126d6a67c245be00022b63a3b4d3115fb63be720de4391),
      uint256(0x1eb7af3dbfb3a69e06198502d4330ba16591900909a47a29426203ccdb35677b)
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
