// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity 0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x022355fd68d896ffb7ff2de11288ba7c4e5a7f1ddaa2a579615763ba50b0d192),
      uint256(0x1047d4b5351181a000656beda0ab520887d4006e9cf72641362fbf82d48c7c38)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0ab2e50bd1825bb9746eaa17608a047026f6c5792d212849a080f3f86dd67553),
        uint256(0x21cda125d8a58a3e25e15a8dc52608544c29f1dcbfd42edda7c71ccc35fe83b9)
      ],
      [
        uint256(0x0a3a6286e8715fa2131ff80cf3eb3b2ffb7605b5479f4b225068d087164253ca),
        uint256(0x22a900c4333760573ce6ee347e295841ba9fd3a6cf40d4fd4cd41da01ef008a3)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x019a9bbcbded2f079e4cf4ec2b6e0bd71a49994889ed110b8399b495ed59d222),
        uint256(0x2ce5df9fd122390eab1f74cf994a238af5130d6f75f5f2d411c9ac99b1be74fe)
      ],
      [
        uint256(0x1bdcf16c13a2c30f6f9043b1edc3f126690d534a0f0bd2ff48535a6299f8fafe),
        uint256(0x06a96bc5ed0cbc4311b1bc7486476d9c989bc7d4b7c6c50b2c7a5767137ca750)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0b702f237c06e20f8e21bccf6cfa62ffe6199ad70f6a1c3234ca207b51fd0476),
        uint256(0x0d5b77a844781165622a3f7e8e0a1156eb0392a1fbe366b76587304c23da051e)
      ],
      [
        uint256(0x0ca5f6f018337b0309942f565179408e985ad98c48e5b6d2a4a0a965a601b7cd),
        uint256(0x060101943cce1431642afbfd8da5dfab083ee7d7e625b7e3265f4ad875bf7a8e)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x166456b0fc3a0e56b83cb5c50b3a25a403c334d0417599f066404375a112b376),
      uint256(0x006f4e8748daff4933e719125a43f3a5546eff61c65f7ea8bdfb51598fd150ad)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x206c2f726a566fec692f640e8a495c9c5b0ebfdb36ec1c0ebd237e42c92657b9),
      uint256(0x23749877e96245e308522ea0964737b8b47487e696f4456caf85bf03799d9465)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0ec85d3ad7b608d31b6e73ea1020ce2a4e23de7f65c01e44b0ca7af2c5fdb969),
      uint256(0x290f42d4d3ab871bdba337ed4216ff33a4c9472d6fd01fed83d226463bff62d9)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1d9debae22a98a3bab893376b0f536eebd56daf597d0787441fde0355122c8d9),
      uint256(0x26ce9072dc49a4e97ac12610d0a5b4cfc254893a19e678d643fbdf2c4008a2db)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2a71cef84cf7f3c868073384d877a2adceb412b8aa60265802c3af0973451484),
      uint256(0x03b23e4e5666ab7afdfdcbcf91883cddacda31bdcce7e505e0103cc5f0ce9936)
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
