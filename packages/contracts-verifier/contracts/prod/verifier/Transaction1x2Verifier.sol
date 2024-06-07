// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x177c7e26b87cecd302a0807cce2bead321c709768ef0a96f7f54bb88347875b6),
      uint256(0x0a689ee442237701d6a2702e82d33630ba0bea0055b2952a08335f72c557956e)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x07d027f1de6dc28f5ba86d88066d16a37be83bf630feddb3339e85e1a1a3084a),
        uint256(0x16bf36bdfcff873edfecb2c1e450faea5f83c9b08babe3b84a332d8d19368de2)
      ],
      [
        uint256(0x0307c77c3078e80bab92233e4a3315602042c4b6144dda725d922232d9544df5),
        uint256(0x1f93cd834724d20a42df2469303e6698d0e98bac5f36d9c1b5ad15527142b706)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0d58f8883b6962e4d1ab9554a7e942b5a0be25f050987050bfa47018ab0557ec),
        uint256(0x06aa58b74a93b1c50d3adb72e8ebaffdd8f4420f0783bf432c6a9fe79eb0932d)
      ],
      [
        uint256(0x0c05efca226b0d0cce9d8d8bd73c1fda863459dae5c300a4a2f07cfa5a2fb0ff),
        uint256(0x0df003a0e18757969556db33db203151fd9d98af14392e56be3a8e6f41accb94)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x13d25da7fbd243a0394a8a640b0b64670fc1af3810c39c8c50402832a43f3d89),
        uint256(0x06810d6a34f59fd7cb6b1363df3493e30fa6390165e144c0890288218bce05e5)
      ],
      [
        uint256(0x14ddd19876d9842663c842725ac78f1745a9b6045d71289beceaabad48c041f4),
        uint256(0x118b58759cdc615563332f5c6af5f8d3285dcc4a34107c346c1782519d7e5171)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](28);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x17c72486956b7fc3e23837ccf8ed81c2142f077533ea44d32365e36459c9a368),
      uint256(0x0e911b878304f50887dd61293d4149734254dab147dd2293e9641c88dfa351ee)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x02ae70e18c67e46f56ba94738b7aea1f2fcd9f207e9db6a176d20ea4411f4944),
      uint256(0x2285b3db6c6edba3c4f0f45e8183e1bed71cf577bb4ef02e4899c152a621601e)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x16ca61256ead9c65c46a530c36f5dbc201da7e53a3f7c58ee20eda4b37fc1c20),
      uint256(0x275a6e3566503aee81a7f8c9296408532d9580fdf397b4a39a04c93fd6934729)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1822c5b26095f27e374fd031b04268f1085c357b22f45c0b71559bedb07acb6b),
      uint256(0x22e7ead7646b8315e2b49512ee0ff34c0e1f0617efead20d4feaaec9ecf88445)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x20990d04ca0dd723b843793c4cecec4a39204ae096fbe2e79bcbe952e3157cd8),
      uint256(0x157062d6be0d303d3dcb56e2901454f2252bc23b823732ed0e618ddfa8aa289e)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x2e5500092686a11aeed15904d03e87d2ef5eaabff1bee42035b46124c736f62a),
      uint256(0x0201178e2744d9653a75617eecd8eb11e62840ae6680bf8f0e8362136216809f)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x03f31feac67c3c1412abf2567f87d7e30587d3b05f3a3b314a349fde944506d0),
      uint256(0x03ccfc2ae53f649c5383f868c4c7dc01f405955d8b80380b8bb7b3e0edebbcc3)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x291e91fbd51bea5eb22453ce7ca31c14d8eafc09d7dd2099029b26ee39625694),
      uint256(0x12f43ed4843af5735bdd5d8ac2daf387e93c14079062a769145fa2c5603a0c07)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x0d6478861929aade792ffdcf4e26142026673cae935419eeb154f6050e8c0dd8),
      uint256(0x24e7185b668e200b536c289ad04261118b96a140b124738f9754ed55c0c249c2)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1f683372e77abe646cb062ea9510e57b7edb74363c3f94666f6b9ad46a5cfa2b),
      uint256(0x098b8e9e53ea5db9f5bbf90e45510727d5b531314eaf045350eed21b0e0863cc)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0452259936f476a4fc1fc07ae3c9cef88fce81717cd6fc3dcb3cc46609add4ec),
      uint256(0x1811c34f25be3e96e131507aa01b7c689c08e3ca3e3dbad988d865cb9a8a84e4)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x266b73b5cb8eb69917b5f74e5dc57978f1e8495f24be3ae9b955a45630a44dc8),
      uint256(0x27035a0321459e28d48049fd84435ed3bbec66df869d31357a35c6f98582c4d9)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x116b6ee427491a33843cc83063fc272bc2317975c4d55873d1910ed2bb170f12),
      uint256(0x276879e5c960941daaecf62a4a67bd4af243b16bd2ff2143c8dafbfaff03eb4b)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x302fc6266d9c0553ddb99b6cec77a6fff15806eee501a19928b6548a6e4ed035),
      uint256(0x11f0685a2f9266b2814ed88a0f7096ef1b9e31bb9a49ca34f3895d69139ff30e)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1307bcaaabb15708f1f7bba9c9379878c336e6bdc06a8584660d2bb9e5e8e443),
      uint256(0x2b3d244e4c7d0f73147b89a89ee703e8cdf12f475779208da964446c74b8c4f4)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1838fa26ec83a05ba31bc89a512b0f56f3561f3b43f2a3ed05442387c8e9f3c5),
      uint256(0x0dd5996945c4afd92ff4883ab088f642117eb0d7d8dbc14d51d904b2dc85d9d8)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x24cabf265ac8336ba17b35a52f83e54d20c79fdf50fca656795bfb2ef2756a7d),
      uint256(0x1a2ae12310c320d976f4a7910255c39f803c40bcf38bb3b9c7082f57b7cdd5fd)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x26a0a2d54624146f0ea177d4c20e951e02056ad5ead0257024a778e9dfda1bb0),
      uint256(0x236349a0959289b049925914b7618ecbf6baae04cfb0fcbac1df4f38078143f3)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x039e698eeed990aa7f6e782c33c4695f576626136782044249064b3040751cd4),
      uint256(0x1b9f942bc2da973419f398fa030affd328597df6f967a009a1750138f557431b)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x02c4fb4ed92467709b520248694ddc1ec2e0d59a88d3614b6348e44bcd1bd6e2),
      uint256(0x2a7a567d1b30933f81d4dffb02ada0811c6089bca95e5454363e6b31039d76c4)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2515a0e5dec89d49d39d5f2093ebc50ea35f2ffd1eeb9046712d6fcb8f8a6297),
      uint256(0x1bbb22bbd8349527860d022cee0095607331d72d9423fb6109fdbf99ae484da1)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x113abd11873204cb85ad41f16df5a8ad3c5667ffba31ebeddb29e642dfcc0fee),
      uint256(0x08366b92112c46fb579843b30757a60980805170787389c198e411a665d0d2c5)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x110a53bed1868937a8970c63ac79862a55ad3a22e7176d673c3c2434cee8556f),
      uint256(0x2c08dd458a4dc78324e073a532d09daf922eaa2e2a549750e79025974ca49d41)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2466b21631aa8d809f3fa4e1d554fba652c41d1ca21273887f41f3f0e0116c13),
      uint256(0x0a06d5a8299640e50b48deb7065f1a4ffe8f96357935c85c5116e4ff272a057c)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x29df7de69b61497a608152bb93772bf6489ba5f2e03920321bf5224e86bcc625),
      uint256(0x1463360748e1c9fc806aa941cac0708a385d2354eeb23b11b1b4445078ec41cd)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0f4889662529879eb738d45e175fe954071ae17be2a14a0f1ec485e5975ad054),
      uint256(0x21353dd6cddd66765b0a3de1d4233861e117c062112069642963b20b8df1d5fc)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1f209623d62b288eedcd636722acc96bd718af9cb48e8e3bb0761174244ed9a4),
      uint256(0x2c4d457dd091408e1d135688d4ca4b379bbab5a65d7ffd5f62cdd4258ae4959f)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x159489f12edbf1bed1341b55e2bc93fc4b5758447af1002556d9ee4c96a5d325),
      uint256(0x2a46f877c05737152d5a27afc47dc889e9d70bc449371af8c877534f8cb749fa)
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
    if (input.length != 27) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
