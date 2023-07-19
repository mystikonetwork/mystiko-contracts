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
      uint256(0x19ceae5a33377cd1f433dfa62ed08973f14b11ab12e5461784352063172968c1),
      uint256(0x2b283bfb387656122b18c389384bfe56de113ad03d0d94410f1f5731ae162bb2)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x03f24324b81b1640960bcff5a57d74bcd9f03d792d9f81817d413b1a68d18435),
        uint256(0x13228d0070dcda9ee295efbddc9fdca3b2baca4a834453fa27495e216db97f98)
      ],
      [
        uint256(0x2d962b72f9294379bd0915cb2cd1bd57d955ddff2d2ede87e0453f59fd056d55),
        uint256(0x021e5efe6b3149222b22e0b24937421cb785eca76e193c17f67e033dd7bec2d3)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x12c8eb47613c33aba635c5d6bd0268503a473b161fe39ee8aa2586dcde2f66dd),
        uint256(0x2526c17bc0e43f180a11b302d878d39066ee38af05a348f6f05745876d103c45)
      ],
      [
        uint256(0x2a34905df55e1f7036e77242bd1840d1ddfb6d5faae29b9b152500fc095fdd8b),
        uint256(0x2dac57c66c94af49299ecbd612db75a7441882fc50bd45415d7ebe349eff3d34)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x205696157897c9f4e94dde0afcdef65b27e020c9363a9c1afbd7a14db0868a7b),
        uint256(0x2c3be859d284a903fe031411cd72b944f9e72e1af5e8c3e8ffa52c4810039d92)
      ],
      [
        uint256(0x02c4439330594799aced509a87ca495ed50e7a0f7cb7bea18bc355ba5fa52fdf),
        uint256(0x0dd037626d253c36d0d348bec8d1db89d492284953c53968867bddde38140a26)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x01382b2e58d638b59c782ddf7ae3c7eacf58a519d58dc2ff6c923166697213b3),
      uint256(0x1af057f324890ad7c9c14ba32b6ee3203da7f79244cb6964229529ad303f6d14)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x21daf2ee9be2633da71f6b0a0368c5a563b80ce2d7d38d0290afc86299cfde84),
      uint256(0x23d480b29ed8cba84b394251573622b56777fa37494766f9db616523535aad1b)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x19318b21371bc0557996ffcc89236a4d526e3adfffc87da29c6f24124fff9986),
      uint256(0x02f4ce3ac49d15fe48a2f5c6ecb6cc57092f318d2e0646475fa14d56942dd996)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x058e9a04f3126c4ba42327a7ee221995c61ef2dc907e502b95ffa1cc316a21b3),
      uint256(0x0ed0b6139bba8086d673df2dcca5343a40cbfc5b99bd2e626c33c53924dba68c)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2d294d532ee80daf879577802f506c416593baed7934417a6217681df0e03ec0),
      uint256(0x0fc3144a2153e52964586636c0d8635374df2b6976cf81be6916f8db8d1528cd)
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
