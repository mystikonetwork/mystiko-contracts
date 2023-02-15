// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x1aa8ca33e0ceb2957f46d7b4906c062f165a01402822808d1464923ca7e7c820),
      uint256(0x11cfc15c65c7a51f4e45e4cef717be8317ec7a390cf226d5cb3b7fb5232978ba)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x09feac9e975ad928b131c8619f7012f4ead185efec72b09d8f593b3e30e7447d),
        uint256(0x1e127f30c71ea74af3216cd4ea32af7e71244c19ccdeea1a09c03c815c8e5423)
      ],
      [
        uint256(0x1a673bad84932ef14dda5db15ee3ba52cc7b9ac7384ec2003a8cb5d28fb1aa66),
        uint256(0x0d66c05da95c72911919294c132aa407bc4915b7015eaacd30c0f58ed553fe1c)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x05eddf729bf2639af42fcf4c54d94ab3da2671f121a3c78d9efece34b90c436a),
        uint256(0x2fc9f96c6ebb6661e97651a188652cf0df92de80cd8f8d27cd3f249d93fccd91)
      ],
      [
        uint256(0x126e5d361e29a538c8aea5a32b8761f04df0a17aa25c0d5fc8ce8b8ba2270c21),
        uint256(0x1d6132cfc8be23f04be5c33546214ac77e07f56793a2e3e22488913f952394cf)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x21235aa13402b472ea79171c8c7fb9cebaa0f6b89bd7526df2c373e63102207b),
        uint256(0x04ca67b531881fe86a9a0b7c8598f35b349c3dc5f712bbbe842bd6b3684cb33c)
      ],
      [
        uint256(0x1981809bf26324adc78ae396ec729ff08ef109cd62d8245ac9085f6940b2348e),
        uint256(0x030aec4a13282c432f490e32be1a3eff30fa624aa2259da395a43fb5583835f6)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](35);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1de4e55ba916aa22f5983adb725ba206f2dfa425caa4d80a9e2ae7115e9d1999),
      uint256(0x199e1282991e63107eec771bc9b2e8bec61ecf15a78f91e9a79840839ac9c8c9)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1fe38e855ffa729724286d896b48d917ca2d06a862fc045495f9aebc3041de99),
      uint256(0x018832ac2068ae9e25b4e9f2e89c1c18828358c75daffd1c8fb36d9e47610c86)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2b18552f61fca3b229b2fe422f4b7dba41699c976d99c45542ef74106f7f43d1),
      uint256(0x20f27d74cbd1e1f9f866fd13fb6787f4e88f16e1f41fd0013bd1ce11f8d0fa0a)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x097908a9c7c8291d64d07b8758d3483410496994a263a5fa9b2e048898b1a90e),
      uint256(0x0f254e583d5c0a81aa28f21bcc976080b67fa77054f11db8f3ae05be9805d39e)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1d707c66f2ca824d51cbb8e8b01e4f2bf062171f6c9b62aaad538aa50904eb3c),
      uint256(0x249bae2b6d64a66c15b79eac991f54a3ace79b4c7da921fdb1a1ad4bd8cf8b7d)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x13682d52d6fa54544ea15ed6e6fdcb8bff25a5675a1f32f9022110d8fdf314ea),
      uint256(0x2f7a0080ff8c4fca14180b4914b1728ced9d7663cf5e718d5751e344e66786d0)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x2b9b372a996366f6afaea7d69821e7fc12422de8fcfa900b5a230e1f5b58afc3),
      uint256(0x2425be7d53932ad0293e8d6555c405fd3d13fc27ab3f28fa447fae6aa77e3fc5)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x1f1b0a8cb99b21c49f1af2a03aaa58cebb1e5f37f2631f877850cd1803731885),
      uint256(0x287673a64b8c69168e4c9810e85b79e4a4303f65066803cf14f28bcd4d55c9e3)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x056ae92a359e8835ceeabc50314725ffedbbe4bf1c82f17f953d5af8dc91cc74),
      uint256(0x07731a6d586056d42a52c9fe88e651e6daeeafa88c2847d6a80bc080177903d4)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1e60d20ce8dc48f07ecc3b14f53fb2e82d43d5de0699a64548df2dadadfca922),
      uint256(0x200a7af630ff5dadd16ba526fe61961818922710c7465d09a48f0e558e26442a)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0ed81832b6ff144de30d1d9326259eec1ac4f2d652df208795fb1ccb16b96a48),
      uint256(0x175a2b0a9be4a14df6f9067564e45fd2bebe787ed3315ec9d785bf4c43cc8632)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x1d7dbfb2f145a16da3076b70e663b75f868988e8d95395438d8f126dc8c7b928),
      uint256(0x10eb3de8c95fc685322ed066c728ff68b702976a569716ea15be67562748749a)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x145cbe69a0a9d71763d6328c93d938dc58c981c6565a478c2cbeb41519e471a8),
      uint256(0x1610e21e1f5114b61d2386be9bb43a55d0274dc464142fed55ba34d0cb791bab)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x27c355562111b0ad7c1aac5de224e893804b7ee22720173057678a15b4b9e814),
      uint256(0x27af9347dc6b94948df09a371ab339e80b0086c9d2b6f46148ae1c1caff52e1a)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x232560bbd73fdc886ca64a57ff164feb4cb055ebd43d1f542e6f18e106768809),
      uint256(0x00f5029f0e8a08e6732cf096505b0b1d75920595f340d8d41886ded6e928cc11)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0c6b8a0528f6dbb0ee52357e7dd5095a405a009ddc3c0b284fcef5cd622e7aed),
      uint256(0x1eefd794e7d74930c137becca85a0a1564ce07f0e45ba68904b1f6a472b6ef36)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x059ffc9119fc22890966e6e1954c2c470bcd566d149d5fe47e4b788d4c1539f5),
      uint256(0x2e76acd398b617cacb607edb9cb44525a4e08310495bc18e0a1378e71f6c7f84)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x21a8a3ab4c56cb00a448b846d06300baf0ba6b608785cdbc008c638438bb53b2),
      uint256(0x00c5448099d974afb1f900624e86cce894f0885019943c929ee022da11939cdb)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x2b3ded3ad08e8e521cad67e2f493668826062666f085fef71de3e8344af159bb),
      uint256(0x0dc813769f0056101d7f1683740cbf3615c8142c138fd1c6ba60805739b6865e)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0eb74ba8a83d31dbb0fe33190011483bad7d7237c8a1c6f1c1efba6bcb2507b5),
      uint256(0x25716c92c7c2ba50547173211016fc7bee9935a30f12f8840ca9c1ac1f53e9e1)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x182d384a2c9ffe4f57faecaa253175fe5fcdce9be2cf749e7f1ac885e4c9f567),
      uint256(0x0f28921ac6d150d245cdaebb7cf70cbd7d5528e3dda652db5f5fc1d529d3cdb9)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1bca80001b02f830af1b7ee29b4d517da143b786936773d42d50456c0603ac3f),
      uint256(0x21e20b580e1e55c4b1a93aaa1fe3863829ada41436f0798b8e4cb3e8a23be91a)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x0ccebfee99d013bfe999b69f132adc7b2cf788bc554e148fcee8f13c33b0aef0),
      uint256(0x2452e818592359944cb9b08ce4cd5f168a17ad40d46d9aa628bcde5dbb68ffde)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x17001eeee9f090295364708566e782e626e5b45aab9df17653995b3f07ea30d7),
      uint256(0x2ad1876f46511e375960805259a2e1def22b3f99f6ca30f9d5756b68f101c03b)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x011f4be37ad4bde19e5390472d29c82914fe39dc91d4302cf17ff68833e71a81),
      uint256(0x12d929d3a398ce053ae6cfa88e2d883ea533640080910e8faf10426a43a90770)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x1aa8b0d509d2c89bfae5b16c31ea7b66210384d9bc46c9b80df173f16a89b930),
      uint256(0x0e3f2120fbe7652e98671524bb0328469f8497bf23291b57a675f3e7e32bcbb2)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x0cc2e56e75a9e517632835426fecfacaffefc2577c51d154e204137058fdeeb4),
      uint256(0x28fdabd32c53144c2047d19dd09c79656b0fc2db8beb72be4b45fc97079a9409)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x1deb335636c76ecb07c72959a3f7666c43151c7a91428733e8a16391f9dcfde5),
      uint256(0x14bc7846a43671d464ebd171f2b6f6a1d64506a1f72c2288f9d32ec1502493a4)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x17e2d96309d4e381daadb4eb5dfa0815789784f960293586dd6c183987313983),
      uint256(0x0084da8a53879bf73ea6d79920e3128ce5334a6bb442f04da979785dd2bc64cc)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x034c96ff1d2df9240a501b57805725cb5a1c294fb77e5a9d19bec4fcd64ca33a),
      uint256(0x28029af97c83f339443056f71b7fdd6e9684b500fd92a7e9eaed1ab51a8285fb)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x110235104899f87864ad593da177ca983bcfc2c6ba706b3575ff00c6b79244b2),
      uint256(0x2d7992adc39eae1a1e9b82ef76694fd5bc3892ee36ed5a008ebdd0c8e08043b4)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x01fece930ccdc78eea8334e1c38349c31e6fe154dfbc7cc2d1b48080561f6941),
      uint256(0x016a070729083d87c3ac4ad54f438eb03febeecbce1ffb50c39b9fb19b13f41d)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x148b2ab05c53244abbf7a247eca2bcd3b31529dcc95916dd0e03ac3fed4ad8af),
      uint256(0x26da37e1146384dce0fa4ff3026bbdbbdf7159b170c3492162ca86ae0437e56a)
    );
    vk.gamma_abc[33] = Pairing.G1Point(
      uint256(0x2c9a97870b6fcfd77b7a8c6090390aca42b8a4869ca3437cd430d9a1927e27b3),
      uint256(0x18ac875262b36ce0c509a2fc5867de86a1697c1570dbcbbc0cd803c23ca00784)
    );
    vk.gamma_abc[34] = Pairing.G1Point(
      uint256(0x2de92afbca7b0c9c1c1ab43dd77b9916594d9a48babeea04f6c263a3d53286ad),
      uint256(0x21ef0f4e6d1b4d2b13e017f56396188078734933920e71c109f13d5df8a1bee5)
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
    if (input.length != 34) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
