// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x02697222485c46e69842ca1f6e336b59b2ef1578d841a021a9e26b17cec4ed27),
      uint256(0x1a6917fad881426c8a8649fc30ab8daf08d45c45a7c2d9ea624d8b0795aedc07)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x24b81f2b7294511b3ce6e58eb619e362cc4cc277da5971ee3c7de5181d9056d3),
        uint256(0x2c230dd22ebeba5a69cd34aeb1ef71f7f0d33ba5c653b4b2683d960cd580d41f)
      ],
      [
        uint256(0x007c979af41b93b2700a7945d2efe28ce665a792af1696b201ad2a60c79fb869),
        uint256(0x2ac2f446270674ebc0368bcb0be15dfef9ed9e337994fcc5e3f002bda2da486d)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1a11301a2f41544a1bea82bbdc52ea32492bc1af0c570e98c380e98af79f3d1d),
        uint256(0x2af440e176c19e82a10cadbf115ac0de83f9b27afa8790a4d61c3c2f739ac878)
      ],
      [
        uint256(0x1f0a97ce9b54ee22f0bfe22103162f5ccd7e64b0e1db62c52118acb6d7ee632b),
        uint256(0x25dfdd6573047b7f08b0d95e8a602084b67d39c8ea844ea44d06c9319bdfd439)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2c3da5a0e198521b96554126553c3d2af4e59aea9cf1ff7c75131900cb5d86c3),
        uint256(0x135304c702908abdbf5a4c0affe8f8c008f968dd6e1620a3a814157500df8087)
      ],
      [
        uint256(0x2ea7d95529005f2219a2b824aae9cd25f82b40be5b91594a61e91ab62e93c414),
        uint256(0x25689b2e658f03efbde92260be100db5d2c1ce50740f336273575f3912bbe3c8)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](24);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1678b6d63351a89cf4f9ed1e11e8b93628c9f12db56f324d6e9e92af23a0d1ce),
      uint256(0x09bb4982f8a1b9062c56c6b55fa829095e78bfeadee9fef0615093ee1a61a081)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x18115430a0e0d2aef9e4ba4cafc5d2232191d3acf5e9e5c5f369f0b77972519b),
      uint256(0x00af8f831790e90a8e996dacde67158ab4fc216fd28f685d0c125485ab6e7204)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1067f4e4540d6d41595725edef1d40be8506f321d64c224460a64dce9a8acb69),
      uint256(0x0a49037fff84ac99609375af70dc83c54df91308b9bde8252e62d05ebb44dc11)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2159e4ca3c9d497206a52bd4622911bf59881c212b9bd9e8729d9769005df753),
      uint256(0x142f74c8d74412678b2648e3b85d04de8c8ce1f4f9ab395c4995b9c1d5e7a7c4)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0d58afbab5cf822602d25bd8706a839dcc7e282089eb00c3d2695b7096685fe6),
      uint256(0x0ed9e48e8f376382b608f47e4028cdf3b5083b78174dc520417f573db42ef0c8)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0b2aca27d7ca18dc9faa4497c302f9aa3e09a824489104cda3533b1d18ca8c78),
      uint256(0x141b27dc65b3fc67ba4d412a249c6b3f6e3b503d41b645f9469220038f94efa4)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x163e22d8d768558d6147c7195e5ed11af90acd97da8009c1db370bb1c7e608a5),
      uint256(0x2544b5d3335540b1a54323c0ba8e6f9d8f099bb31d79f1943a5383b73cca0ed3)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x09946d79aa7857b5e4433d6e9ed0d87f39ceae825af6af66f4464ec923c035ec),
      uint256(0x027f3b0a03e86744109d67f172dab3950b2a6b3e9817749b687d3393e21ee511)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x2bb7053a1f0361935b0aaba1abc94ddc8356669f4933b113091b055a31987ded),
      uint256(0x252565437302b68cdad806bd57161752cee4d38a796e765a99a0431e127b8b2d)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x08085ef5251d2671054eaf6800d2c98ddebd68c94b8e6b3c815909ce94442ae2),
      uint256(0x13caa0430ab90b269ad692bbb3d7c55a4d84eb5cc82761da103c53f17ca642cf)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0f6200297919b116d3006589c2becfc75b3b2177b67d5a29e4b2f70c3707fba2),
      uint256(0x2af7d66ceef372aa243b46c3d7383a4c7a502eb1a02dce92ff72c0e13eb29c0f)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x224d7de28aafac0d480420958c5763fa8cfe2f0abc04ff20fe8bd9a79fa0be15),
      uint256(0x096db723895a1ddafd88f04673aa67019ef4a58107ff1a783187f0a19591de6a)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x1db9e5c8d832507690f6e195e8615151c3b3e273a20344c622963457a6171f50),
      uint256(0x0d246fb258863ef7558b58280815d8cca625eebb65477242987cd8b0d3a5a3e2)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x032e83c1cd42307c86919984c145b05d5e7e5c42bc2701ab9e2e08b3108f7e3e),
      uint256(0x09bfea5165ec50034bf0721e7c593bc47bee2d49ca05d25f9065242af5acdd25)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x08385e563b8eaccc4b2e03e5a514a0f7163bc8764e759001fc0a4009935e88a9),
      uint256(0x040ffa13baf27469a1701c686ccf6fdac02c19fbece2e243c5eb5ae95b6d9270)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x243e7cb7834403acb29a134f752754089c9b89c4f62fd1f75b03e36ab267e615),
      uint256(0x1acdf0c7a9404bba5680025b03ef833ef6b30bf3cec631a9e514203b224884a0)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x061a25929347f3f229a795f5d1c98f180aad6f4d874c4c5210c13ceb79778cc7),
      uint256(0x21bbed4493e3274ed538e64f69115a07de5f25bc0bfc1405066deef61d74467c)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x12a1c427ce309569b4a33715d4abc35178c400794d07f0a4a4fe121cc4678654),
      uint256(0x0bde632bafad1b462953343f07547943dbc7cda3d0dc29783c07c3f3e441267d)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x2ab1aa8326b24155947f58526db3e9018f6acfc38a79596a1e5a6a624fef82e0),
      uint256(0x236ad5c4bbcac862f59bd16e65e652acf3539473716c14d222f1ec1354ef1e68)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x21b53af9695c541b04980e67a170f404317c59645326a0024f19793f76955e97),
      uint256(0x29708aed59028d7a719b7348762e457dbc05845c61eb2adaf489490889047d1b)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x25aaa1b4c2f3768e3cd81ab06cb5c3875589c523287a25044b4b403f7cbd4a9b),
      uint256(0x23ce098348077997d1da230b15b1f6b5d802927e6e88d14688d469ab5a5752e8)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x13f432f581b5600bc6d2d428b648b98183a9a7f995a10cd0080425c84a30cfb3),
      uint256(0x257e303acd136fe0772f3fde2063a43e2a4b36fa710c16023068264398fadada)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x06761abce51fb20a03af5e18efbf4782a86b9a294cefceec2f749f42c5a32eca),
      uint256(0x2f7450bd1273ad339a961230acc5e9f7252139e412b930fdffb251bccf9de326)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2ca21355a1a212fb2ea07f16f56d8cf324c0c1d2bae1a27da31673e6020bcc90),
      uint256(0x18d423e6dcdf6b780903751849b4781f1dd798a11979cd2e38cf96f3195bbabb)
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
    if (input.length != 23) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
