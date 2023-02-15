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
      uint256(0x14db119b6a11b859804dee49d540fa983d727bc3dbf85071fc65ecd9143e40dd),
      uint256(0x05907e9e002faed8e6de0ef3d208a6bbea60d337037895db2d6ade3ea1f0b1c1)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2f76b57f17dce44676bd14ad3397c8cb21e23cf268a05d52a491da699bb67591),
        uint256(0x2ac3d303ada6353fe192c410a14ef7feb636cdefca260726c8c02c7067c2f2e5)
      ],
      [
        uint256(0x0434bd5587c7e2adccad3f4543d7591891dd7f9172cd341d40034b06535961a7),
        uint256(0x1b949039b2fe8ba6bdca1715a1348da07a77a7a870f8c4dbe1551a50dc909400)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1376b49cd1ca86127ebb54b91b946c627829d6bdded95c351fc84f1381a92a37),
        uint256(0x1224cfed4bdb7b3677abbd18fbfbcd0507b0c25c54e3dc09ef32a7880445bdbe)
      ],
      [
        uint256(0x18fcbf45bf3da9d6c27b5441abfb4b33038bda4d8a71e5bc8c9805e89d0fe692),
        uint256(0x0d28960df2900a36dd7547f2bea2b97f4699b95d5971b36932ed72121dc0ccbe)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2d468364bc78426664606031b5db8a4796d7402d1247e10d2f27e727c41b3012),
        uint256(0x0c8d50a58f240069eb61267b3501b2d01ef93a7f579180b0e80cd9f4c2c8c96c)
      ],
      [
        uint256(0x29ebf9a37ca5c95cbd9d79ab480dce2c515ebdcb2505af0cc5534e147983d47b),
        uint256(0x0d19e23d2e9e96e805b4f1c8923c749404204635a2dc450c47bd5120db487477)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1ae7a1cbbd8b546ed11ed036679854de7beb34253755af1a82c1480cddac6d5b),
      uint256(0x2ac3db835ed5d4c30433a254c310532fc9d337b5f8fcd68d3b4f588bdbc2f395)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0135906a66b1dcec8ede5bbf1946c27ed9165af6833c796d07458f316d7a9268),
      uint256(0x2378ffd58a9f858a18a08d63b6b3cd0c851dd68e401b68858a9faf8b1710347d)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0840da5b1c1faa25a6d7844533cb3026b0d1c7cdabee638b28ff353e1344566d),
      uint256(0x026f2cac991dda1b258072283a997943f1f64707c91e5ee42aee695780b629e6)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2d9738055874b259ae0238478d8b376e9a6548f63f1b0d64838713d96a78ef8f),
      uint256(0x21d1f315f70a4303e98b0ce5c980ab95eeabf107ec50c6f3df0cf92f1aaa7b79)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2d757ec1d7f7537beae0f336a5c264f84d96ba2285970a93be59e86601556a44),
      uint256(0x20f4dade81763c9cac46d466fc4319b656c8e4507de711c945b2f344bea83e69)
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
