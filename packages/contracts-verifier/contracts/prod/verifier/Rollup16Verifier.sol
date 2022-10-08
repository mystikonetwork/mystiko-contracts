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
      uint256(0x3003bca48f2f2dca122721a3352e7c52fda6557bf09e73ecc5ff4c3e71772ea3),
      uint256(0x2ca4aa3636cc1b1d5447dcb1ec9aad7e956c2dcc9be3ab848412c5f424ab37c4)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0ee87e8edc04c1e710dc085c20f3a67b91c5958a860ec9ec047b504ca098b3ef),
        uint256(0x274715c3d59c7e031d678da5d2067878a04c3221fb014fc1f8b78854536c2739)
      ],
      [
        uint256(0x1ca676370436fa7a6a916502240bc7130d31c961f833e6eb968620d5a79f2fca),
        uint256(0x0df5ee8cebfb4aadaff5ab2a8665b65c7689c7af76ededa119c5f50808e79f2d)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x199dea60fac3d0255f335820c7010323b7f543f63d52f23ff9ce97e219deec23),
        uint256(0x05289aec9b70e64bb77b5b58792ed4e74405188b91e7edc9c2d2f3c3796747b3)
      ],
      [
        uint256(0x25fee324328a599a6063b9dd31f789f23762ac57486642d07ff96ef8d67a345d),
        uint256(0x1d6074ef05a24a848a1e1357fb1641c85fe56103dab999546cceaf84f6738f66)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x13d9f98198499612720108cdac4abfc091bb9e9d60f54cedb88530e9cb07affc),
        uint256(0x2df2a265c6bdeb33fc0722bad40c103a264eef36f286975bf97d4400f7d87fad)
      ],
      [
        uint256(0x2cb10c9df51d67e7dbe1b636e9fc7d9ab7eabb49d80e7c4524bf047b01aecaab),
        uint256(0x1dc764e4e07a5f5aba3273cb203c7e196ea36742a26116f36c909997b04bb0e2)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x23ce2362614e052522bae5bf81343a95409530a7fbee244484594186fd8530c2),
      uint256(0x2fb0d1ac09cba4fe69e96a3f60c1ed94213234cf56e0b9d4a403d209049217e5)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x270653938bd54905f121e96fc09037b0254cb3293d64f58f77ac12e6dbffe9f4),
      uint256(0x2959a847cfeb368cffa8490458edeb79c094e284da732d1b5b68b0e713c71131)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x10159fc6fd90283cfd5f23c75cbc91468e8449e36f5a4f0581f4b763b4ee03cf),
      uint256(0x136726535263e1ab896f4c6b87e7c9982243118afcc874dcc99e0995694ebba9)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x15dc4544d8b85656f4204a4535c7af97b9dc883e3367f7196a3cabe7b8f0ab5b),
      uint256(0x2b2283d602ead94cf706bac0a074f71286976cc03b3cb951ae0c0388be82336d)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x09697c03407bff03d93816bdee9efd034c368835e474e6b19f0a7e07255248fc),
      uint256(0x286219d87f3a643d75aa0750f876f5a9c0df51aaafd00ed6ee7b200a36e14407)
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
