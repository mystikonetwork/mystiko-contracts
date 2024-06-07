// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x02d64fd8cdb31c0fa7654e6230075e3fb82f30ed9d78191750eb2be22525a10e),
      uint256(0x11bf3c339c87176e19969892781eba1d5a45bf29bac35c2ab10fb3b50a5fd90d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x06378421e7bd9c00848559c6329197622e2f7ca4c0a76c751201fba69b82453c),
        uint256(0x0f0f84d09f907aae15e198baca0ad87b080cccdc2e1589be1f3d40b5b90a8e04)
      ],
      [
        uint256(0x1c737cc857bfc8393a7bf6f175707264b38d6da5052867d54eb489cc35c8205b),
        uint256(0x2cdf9078056d36a7762e563069145625f1db63047061f4deec760dc54233381a)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x23d6f759d3a265d14ecbeddd37e340011139d94872437d97316e69e7136e4528),
        uint256(0x29ef01b938421463f13e18158a314174e49d7fa226e1d5a8ab6353dd64916cde)
      ],
      [
        uint256(0x1db8adbe798386544fdce4c946e47d2ad638df131aba4f21100600a3d0751f1c),
        uint256(0x0a5f4dc919c23a8fc559293a767daa3f278ddf383cd662d694360d5bc979d058)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1c92d3317d5686ac17e7f5b34b424c11333493d968baa22786747da969e6fea8),
        uint256(0x2a52156951ea35148e6ea4a4dc5763b956a683534d3368dc17f84672989d1cdf)
      ],
      [
        uint256(0x01f3dee12124159f46606d6faa5a96dcd67430ef270c9f251191278a7c925cf5),
        uint256(0x2c1a5a212ae4054fa027a7f66ddc6b3a84e32d16226254c935a19d6af6bc7f40)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x23adb98e613cbc739b6dc93fa5225d062c089abe58c87acf1aab5a174fe64797),
      uint256(0x25ede77e4ac5241b764a81c5abedd1a6b78dd4888486de33219fe6fc7a5d8d11)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1528c7066e97cc1dc7da9df42e7dfef8f191f19c3d75122df6b8ca794a39c52d),
      uint256(0x2216a352ecbf416c6514f4b281eb9c65a18b49ffd1098ad1bfe48c5b0b33b0e0)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x142a9bc453c1827cf95369392115fcd29f35a8c1e4458dd8f363ba7412597f61),
      uint256(0x1ab1503bbf80d01c93041433c0c5167341f848c48c3f3647235a4be0fc1d3a15)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1d2c866924b036d99d39a0ba958580ffe655bd10c77182b3159d9838c7841ceb),
      uint256(0x16a506e4419493fa4bcc135f02432efd43df341f1ae4ec1fa276dc5b14217c70)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x209834611f80ac546b3568572e983cd53bb2db18d90564ec4cbe2b5d4ef744e6),
      uint256(0x255d0ba2c3a82c9be97d19b354e84fa017cf30e89d39b16fe39b7cf2a06b36f1)
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
