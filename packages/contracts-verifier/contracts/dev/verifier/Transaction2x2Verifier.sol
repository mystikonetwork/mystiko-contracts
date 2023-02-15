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
      uint256(0x00fac905d0324c4e02330cc9051b880dfb3d105f41d6374b546c1418435bc572),
      uint256(0x1e8a8cf6e537ebcdd3d12990887167a78def9761f93433d9ec90787b593b15f2)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x13c58f25c099fcff9959d3cce61f48cc5b561503e9093f3a59240981538c0477),
        uint256(0x235e1aef5e6774ff571659ebdad899a473fbab94761b805c657dd6b3f76b6055)
      ],
      [
        uint256(0x1ac375406444a350eb327abdb6031d2010a9910f9e82d40b41df77c4f13c7558),
        uint256(0x1104db0684596cfed1aa6148b252513ef93313d5ad864cc6e994a0114219ff1d)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x273d107bf3f4636232bda07c84fec6a6a1de2b0d0421cd2e79e0967d90a9bc2d),
        uint256(0x1851d267b211b0109110d0da804c1f95eaa9a5347847d5994e6df4fda6014ff5)
      ],
      [
        uint256(0x04e045a122e79f3b5977f92ec5e2699a52d3499671a9106b456c5114303c6496),
        uint256(0x00a311666f7c3e534fbe304eac58e4cf3f4cbf3a2104065a9185eb46ca38e0e5)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x27950efbf2224a666fdc0af4b33570530f2c099a9900702e6bcc5bfe64989bb3),
        uint256(0x0c6b30ffd5d10e409a8c16a0001c247c27285019b499b7ee66223b182081924b)
      ],
      [
        uint256(0x13e29657c27c13faa90dcd8c82761b961fd029956598c71b2edc077797310341),
        uint256(0x2874c94d00fc33c27cca5256ef1627aed5d81650b4d8667bd5e3d82e63d61a4a)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](35);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x054acebe9a96539bfc70a822bbaeb942a929ffb695b6e3d479eadf7129836c08),
      uint256(0x2f874217ac9b26c833aca99070381edfd76d3f18c4d509ca0c290f1e15cac1ef)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2c2083a86cc714dd30bc856fba8458052ce1be3ed9edf7b6730a354a7aff6de2),
      uint256(0x2d06d2f5050488928b88d4757ab0c7c727cf8d2503603b2301a682d0f14746ae)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x004a4cd572322f281f5f8507bac852413f5f222538e0abbd13b8ddc2a7c6d453),
      uint256(0x0e197e1b65501c9122c527973c85722cc59550c3c5dc2affe2c3cffad3046744)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x003ff207b4d35046c1eac6081df2119ac589e65d067352e651ace35c5978b649),
      uint256(0x1ff561dc20dcff4dc2d9821d4035d12c3b523b0aa70a409607a7ca7eaee6519e)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1c6e1555169f5e89d5b89ad542c5aeb5c4da309cdb16540b18d911307b2773ca),
      uint256(0x291e25116464179561b86f2f363cddc02e17f57e09aca6837fb1a4f1c3a0f756)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1dc820127c02132a9bf0e625d55ad25af1a5a0c7b1afe2eb4b812b60ef70f147),
      uint256(0x26536a94b836e2becc05cf360f83b2bb85dd9c47e50acee49b3ea0acff986f39)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x08073bb3de2158606c0be9f9416092d681cd4f98a16a91282ea4bb47689d42be),
      uint256(0x1f350a31b5f6310f52b3144ebde9d03fb5a01e54be78a0ed86d6928635789cfc)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x238fc355fb9ba7ad2ea8cedbdb1fbacb99a971600a6620892bd2025b9a901a99),
      uint256(0x2cf40b35713fdda87cf5a23087924d31cc1f4edd38f97f62094f0489b1d3cef4)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x2814a2d5df6785abc3cbe4661710338d33eb71e27924fd80f3fb5ca2895e650e),
      uint256(0x21bc55d05985b946817f61dcf9d972ae4c20b605731ba619623b7b9a4b6cc9ca)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x0f0ee2cffbe914c1a34ebc9e92b4f3cb1f4aa83df8d2d4f64c09d00750616276),
      uint256(0x0fbef2565a2d332420db98eb2d46e9d8d5e0332ffcabcb8f9991b4a5dfe1e14c)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2cd7092bcb6525a79d904713106d4c1a8c5b2eb09930c325a389da2b8cdc0175),
      uint256(0x0054508a3267fc35a1e147acb767c2141b219c7780476ed7d99981698f4502a9)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x07e2673da1938061188ec687c7c054cccbf3fa571d5f238180fea4feec8b7b89),
      uint256(0x1b3d8113f05c8a5cc3714017b14ef79c3f5c966c1942ee56233c06aa9fc5c634)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x2cbe206fa41fdd663fbd1ca760b3db346391cec664f84e55d73720c15367cde2),
      uint256(0x1f99f3b52add8117a59d919e568ad0900198bb0c8384ebfa602fc4ec991bab84)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1c9d58ae131c016c81b55aa285dac8d3970b1db48a9f5679c945b1078e4e703f),
      uint256(0x29c487dcc2d7df4109c69fefdec2cabaaa4bb1fc57a644edde93e3a276dd48b1)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1875d1f9c8b74c703b4f4014d9a22a8c2811e7570b5efc0f9d559856722d3719),
      uint256(0x0d2a4903b426eedd6efefdb845b22fded263da3a8195cdbed10565e13360ab28)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1d42a05dffde1a0495d08981dc8b818e3b6f550f6dc04fda5c90c4874090a249),
      uint256(0x29c9d2398495f1cee36395675a44bae998d7fd64d42be7a0737ca9067ee72e7f)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x01b4fe7ba9fb7e2d0d2bcb5c6ae5239856d70ce6f06a7f4e566519c7cb01e77f),
      uint256(0x254ebc2b9ac560df5c037bb5369ec91f3260bea151b98861f5e6cf479cba6a3f)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x0ecaf3870046aa526f987c97ae1a26d34cb504b0a37c280f7642d384d08849b6),
      uint256(0x0fd41bc708dc48dd703474a4a9d165967a12af6e7ed4ac3146af3905eb6e3f9c)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x021a30489ddaa93abf7eb1c68b61774d9729944a27f85443c6842abb9b006e4b),
      uint256(0x089a803acb3ba7fc65a4f613c762851bd30a1a094425caa18b2832da465c8e47)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x18b18288f4fa6199967fec266192d3a9f74aeace2cc3b05e2eb4e9ed754cb375),
      uint256(0x0c40fe334c9f01478f9846b2f1cb7472e6f1d124d10265dddd2ea84906af68d4)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x1288e77e40d0ac95b7f0d4c0f93d11d41ac1b5a93055415c2c31730e342e432e),
      uint256(0x2aa407358cd6d621247168ec65660d1f37694506cedcc48236d9e4f553c25751)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x234ee1756980525b3db54947155065a096836d1f0afe21c49443b063ee12f86b),
      uint256(0x1a79c8316d64dc7b2b260d0ff355a1ea39d5c177b5e4b5253e8506d4c0dc3698)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x2f6449ea36c66b7170f3fa631b7ffae956bb937939948c8f60dba3b94c213f36),
      uint256(0x2170a5e04a46f9a3138ec87293302866204ff98d7e018762df4aeea9713b0e22)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x1c22618a04e6d839f6c43e3c2ef8d4980acadcdedc510219287547cb0807fd0a),
      uint256(0x2334f3e1e6bf6a22fb6c26a6d0081016b1c9f5b6e5162199fcbd6bb82a5014fe)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x03995bced5bc52e116cada619f57dd116bae25a1df9c98112de313564edfddaa),
      uint256(0x17a3fd5e16e88efbe9da166705e1cacd0e87647709b21e6be187d5e6019bc76e)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x1e52c2218beec8c79502f4878b072893b5b9a27b07ea961399db8441fe91bfcd),
      uint256(0x1da72601578116462e2d89c8dd1013fabeed80ca8491429f946c6a152aa15b80)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x16503b96f4229513f9a52bb5eb234886be577ed5c9b1e0be474fd896405196f6),
      uint256(0x1a240a558fe70a7aef0a69a4a6db16831950c9d6049756cff0124e54748f5130)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x168d7f500bce060cbf0279614ba4fa538407963cc05913af965e7e43c1425341),
      uint256(0x20883138fb9ee1c4a3d6a020d2f458a437679ff8aac4e36fa7a826878aacb06a)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x073b4e42170ce400c5f5b9e90f1025bf43ee1c77700792ad0e43247c60a54268),
      uint256(0x192e46c8d841a3a25b2f37ecf283ac5251b0dc1d3f363c93b12aa537f2c12f3b)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1782790b0732f6cc617fbe394c7ce2ed392cd4d6f968fd5e7b0303bec82ea925),
      uint256(0x1b35a4a1d190568fec8b1809bf5c159ba607f27f37f5a8b65bbb1c7d8297bb38)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x20c02d21dbb6752c27bbf88d4517d0a559bb1c7cd0625dda028135e09a3172f7),
      uint256(0x18f451d24c1ada6b0b538985b25e1366d3162cee5c7c09bc32697b916fcb7ebe)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x15ad389fd89145c9b9c830f8f90f0c76d3caf04652035ad4e93b1aefd65f11e9),
      uint256(0x17e385fc998f195c997b40854be47736b16c4a99535bc88d5965ade1bacfe38b)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x201c63ba7bf1377abfd146a4aca6b908791530aa02dcb74b83c92a6b550b6fd1),
      uint256(0x2396b0ba69c39acfcc8bd7ab5ffacc0e3d8805197fe67d9c9ffe09ab33d87abf)
    );
    vk.gamma_abc[33] = Pairing.G1Point(
      uint256(0x0cc79c62c53992ec7c58a0cefb0e50e1a64049f14cb817452040c41b42b078de),
      uint256(0x11e4891482c3621aa9af55a3e0d2d992eb5651c88f0d7bb017db922ad9f1926b)
    );
    vk.gamma_abc[34] = Pairing.G1Point(
      uint256(0x094c224e60ba354ece69f2ed3539f288511d42132e01662b654899f0f882f4df),
      uint256(0x1845e7557dead02857b89805a4eea502e7c4510970d3700881fd2b4dfb45d2c6)
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
