// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2989758e6faccb8d559c9968e937edb6d93b67787c6ac6239d68173216bf848b),
      uint256(0x2941f2eb59cd3f07a2f9e6c32c36e8346555029ad16538b6adcc803e0239f99d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0a1ee7e4d4b4deb17de8574280f38ff274dad1a0ef61350e50110dcbcbf25476),
        uint256(0x3062027e3a53795fccb025e261fddd67d1a40b02f43c6a6851fb0e7cb53daf91)
      ],
      [
        uint256(0x015f8116090af3ef823964e7618a8043ea93d8a00db613b7df4e94cced732e52),
        uint256(0x289b4855ae8a1a896d63bfbbe42b78583896095d8fb80c9df86667a497388050)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x122792c1666be48fa7a5f88e9fce4a4b73f062d9e719075c70c143adb42c4735),
        uint256(0x23f1545d09e0b7cd64f740b32f4efbc1dfa622e5eefbd89c6de5b558bb07874e)
      ],
      [
        uint256(0x0ca6cc2dd17fe1bb55b98eac7c8e68a51f37359131d83e296c887321cda7c42b),
        uint256(0x0e8bc35e0a9be37b3ffd90ee193b3c0f6325d46fc51c4e8111288fe142f27d98)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1cb3faf4af3543de6ceaab10500c783a7fa77167a56feba97bb3ac76d3a8e965),
        uint256(0x2b6cfa7a7408e8a3da4e4f6b87e9a1179b732b89cccd9ac317ee61eda3b4a7c1)
      ],
      [
        uint256(0x24d014707b18297b3cd66e29fe3f6c8591258a0f482329d69fbce139caff67f1),
        uint256(0x1a19641c07d9675b902b24b342cf9dc295fd81104da1f3ab2fde1f424408429e)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](26);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2b839bcc2f89e299b862dd69c5020937fa80ff068907ceaf6aee80389d76c9d5),
      uint256(0x12ab63834a0a55b73b967b226e3dba6ae9e6305e88f8917d44584655a4243b80)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2890a7c8b3138573059f047fbb534827b468bc1663a3914db4199204ade72c8d),
      uint256(0x1bed206c095546728e57800932984957cb8abaa0b676c4a0461a3ffa33d75af9)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1b85371f44840605f57660aeb5c2cd48df5e8c410dbb81325d7828912aa17648),
      uint256(0x24705a32bbd2122d1920d1db6c917f4499f22bafb485cd2ec513cef049ea1386)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x265db042475bf8f2c401553439ee1d84a46b7ebe6863e9624ce423ba1a8af1d5),
      uint256(0x24acf7199e6f6975f07731e45fde0b28890a1fdebccb8b66a84cdae180a9d1cf)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0efc0fc8a7205df46832b94645e3f3e4fdb8c5f2969d0d53a5e4f1be76457f68),
      uint256(0x053de428979a8e95d3d742d09afd747de92286bf59b1c0e4dcba30a415c0747e)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x17dfba3c75355de5f2edab1dc9233b4d61fcb02170497f4ab85f991264810a62),
      uint256(0x29d99ed74e5ed62bda9b91817ed5a7c5229545efb0e0a9b680c316021abf32ac)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x01208102419811f31b2f40cb8ae1349cddbb13ec61ac9776923a586ae6ae0092),
      uint256(0x27cbae9b9593aaa8cf89f7c9c14cd9510586ebf10034fd8f10d3240f8bb02c42)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x25a7d335ba7aef1208a136f19f75cf9e4d9f8acfbbc2f0ec5eb285df12909b82),
      uint256(0x1fe000fae0ca163e9a883dc6bacda43ddc14358a242074c9103db7d6c6cd6e5f)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x269cfa727b045260077f6903be08522389af940406fedafcd087c95e0c22ee31),
      uint256(0x0eb411a6c33736e10d99395033376e9282eb1470d128e7fc0831360183b02b30)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x20a0cdc01aa5cb687827b0c68c052caa666b3e19b96004d4b59249840eb17eee),
      uint256(0x23f7de08f086728f2b73d906bbb5510ce696c1233ff1ef1649e99f49fd861151)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0042aad1c3427380f3645a7cd52c8caddf9824a3386745aec229d1dd6e2536a2),
      uint256(0x09a4f15f73bc214c5296599849bfb3868983a74e9621625763893b1e1fea9c94)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x212142ba77c9b26bbd1e42b8f12a6818aafd4e737a46cbfabaa9c050ce3a56c5),
      uint256(0x004cb1bae501a3fb574b8ae696dfe77d945750613456c7ad71fa6eb314198a85)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x09c64479cc0f1ad1221bf2f2d2402fea15d9f7f44c9a7e1dd2f7d1672d5aacd5),
      uint256(0x1640e7f37a306979298bb3b69ee058e58c8cab6e73be3549c2edb776c9a31d9b)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x06a9ce833344e8bb40a7d3a305481280a14f7f0989e27251312b92e3be56e881),
      uint256(0x2bda39c48c12c3f2e3322462bed7501763ce329b3f529b35e97799c00d21be40)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x0491e133824a225e8ff11e2d7ef630ad2b79aae77a640258e4c3cb2968cc7aff),
      uint256(0x288e54a67571bf0808c23e31951618a6537d204912f5bec29293ee7e1fc2076c)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x29be9b12b2400a560f93d61f5c2dc1ec95f5095f48592f0ce0f26d80943205e8),
      uint256(0x12f05b1b1824990d00e32922a1dda8883ed57c2d467e7c8864c30ffce1520d9e)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x157d8e5ba046f66e6e6394ab1601de7735db0e2dffd496039d2091b26428c31a),
      uint256(0x2853a80d09a1cea2b3115f58abc6b3c87935d1a7838d9507b444a6d4b7ea3692)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x13591c744f2e8e0f2793299e24fcc6fa9e1aaf2f252112b195eaa0e05149a46d),
      uint256(0x297e8c442da8679b63950694d605299441cb32912fb598158f91ed7164e7a006)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x233f4d7ab228b8be3edcc8d33eade7cb70282b99dc8ab61c54825366688da937),
      uint256(0x2208605145a485a1acd0a6ce737ea89c66c6dff9373d4a229d8fce50fc6d8fa0)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x04353ccec710363e96a8f453220a88c552dcb3305780a1605c665e641a5f438c),
      uint256(0x1e5daa0c01b5fdd4cc17982b045ddd3871e6f06aaf84e6c9767a8078b8499ce4)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x0c28b44e2d7809094013415444904e0fa4809a298ea5cb7572ca6bd75bc0766e),
      uint256(0x192b6cd7ca5be0f83064535e5e6b909ccdd270d47858cadb63fa9728cb89a4ba)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0c44da5b75a32e6104c80b0ec4df81eb691069cdf354b7119a16588869d68661),
      uint256(0x01551a24caa3ae7f28e997ee3e2cca3253dc0188b07838c38cb85a529074e602)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1937b737334bad91057da55f83a0b89c4542d722f19dea846ddb884b2873c6cd),
      uint256(0x2ed32134d815eff2138e1db54475bfd80492497c84d81420a38fa548ce7ad750)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x163e0bb1c303967c3ad4cafe309eb918f295eb7209bf965703f5f219a4477bf8),
      uint256(0x25e8e3c304186420e116c56ee00ad6f02ac35653a62c9fcd3a964e5e87b53845)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x254f02835a11cea07017a3b7b49412d3a2850dbb54c8f42f52f81f107159c813),
      uint256(0x2649e0a83e2a211739bfc1ee83fa541af609aba995a16186628882ac1586d3c1)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x07da5341ee7ab2e1d15f7411f556586889cac3888e0124d8dad1fe2556435035),
      uint256(0x25084159bde27a5f46753218ded69eca8d69a468c998df58437d903785b595b3)
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
    if (input.length != 25) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
