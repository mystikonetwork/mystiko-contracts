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
      uint256(0x17b11b72840c981cbe21398400b1e0328c95776a2ffaac9e1ced96a09ac1419f),
      uint256(0x20a5fd57debfd2df569b07c75046b1c79af11ab3d9a9f2d1d2a6acd615384984)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x24f426dc5e77d721943efa89b1dfdb24ea0152d3f49f0ede8e780490907c018e),
        uint256(0x14c6d3d71e7dcbe175906f4560c79051a8056b7e1c0b3b412d30ac909334d3da)
      ],
      [
        uint256(0x29450153c51d589adc979996a0dc659080d47fe6f1d13778a931f249b38a76c5),
        uint256(0x182dfaedc4058db6e4a8c96a5b2e635870089b103d811e354b06cdfa83e47838)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x27664055802a87f37bfa73ae1bd0877b03880ccd00e479efa0faa655fc8592fc),
        uint256(0x1c9b3d2053e88d739d5c97c765e02702e6edfa4bbf0777d559aa012278f5af6c)
      ],
      [
        uint256(0x28cec92d8b40579f724788865df91664eed152e6712bb705b4c7f24167d13852),
        uint256(0x0eed290263897e53d1da6f652666525e59c7638d8ee7613006c3291151884ad9)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x17496744e3848acf7519d2b6556b66362055141bb8c56ca53b84909c86e267a6),
        uint256(0x2bb7913b066437f39ba7336ffcbd1304bd4d8727f8b69ac3a9ccdaffba225dc1)
      ],
      [
        uint256(0x1fc4c09803fd11fb00e422f559d3b5855991787b956dd5895a6668c074f20ebb),
        uint256(0x021d10073960710ee5eace6a71f36a7b91886e1643339fc3504ff379d2345a98)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0dc8f9812c85e4baaa72ef9bb3e82d5281a4ee5d670ba6c8f1598f622be95e4f),
      uint256(0x23c8b00e080c4f91d1c4488d04d66d472b5eb8dcc2e755664e480193e9d1e2e5)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x25f468ec4a1c2e8555fe3a4606fdb6356fc77696563f1a0b95f5898fd1b16072),
      uint256(0x21252587e8580a7761b35c77ed72e658a2c064c0f9945e09f4649a0b887abf32)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1fea9e469fb1073b2a70c6019eb50818964b7c37ad7b4fbd34aa331189165478),
      uint256(0x1618a80642175d51ce788928f4ef55ac836e997da2f35c196ce14c952d2286fc)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0d3a494742803ce6b3226e76307fe05693c86f8b533226e9afac9fb8475ce269),
      uint256(0x17a9f270c231c98fd27ce45d1122b493013192c44c51ae47a4bf4c654ed1a23c)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x17c8bf946e1ab032e08b4b02df585094647f070839cde327abba26bc4abb9c51),
      uint256(0x081d9505343ab8d30327643c547d57b160b511e1c76189350dcf7e7126e99ce3)
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
