// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x27cd7e4a3c0db9e20ecc3a6af5191d197c829c5c53ca19be15ff7e1e91a1f668),
      uint256(0x0c6f30f2e08ec66eb5ee760059cd2cf98f7349a3be76bcc5536196482874c234)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2bcaed1085ed4136abc454443c0a4c15ae075bfcde35a854bba661739506322a),
        uint256(0x269d970cf368c691a529c118c383de4523bd8cec5fcda7e1916da7ec1b94840f)
      ],
      [
        uint256(0x167d30bfd1e0785bf6aef7040819eee94b8d3ceb40e8918a57942640bbc9bd5e),
        uint256(0x106a4814fda7c289a8bef71275573292c3978e3eea71da520df6b98e7130c96d)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0e0d24dd02077dd3b4e2785c9950c43eadc2a53bf20ed50faa0f656b2e038650),
        uint256(0x2505e61931ef1d250d050e6a522095e7abb450218533d95078128e85352d70aa)
      ],
      [
        uint256(0x11b86266f2b070aa582df8ae8961f5e832599703501f987731b27b8041bdbf7f),
        uint256(0x1f7ef9934cfacaa71a1df5a181a5f6182e97c990dc9fe6d83fffdfcb97614e7f)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x192d4172ad19793dc3c772b669fbd61abc553adbdf2dfce5147dc5eee8390cd3),
        uint256(0x1531bbd4eb7c2d8e1d053583858c1e89c88b71f8cbb5536af12c141ac0f533dd)
      ],
      [
        uint256(0x284b157dcf0b6900f32361ca4f0fae74c28116f9820815695008eb952cc1f602),
        uint256(0x05714f9e81a2f1cf2143b2075e11b82bfaad77d1d1edd07a72595402f14af010)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](33);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x133bcb2f8cd9723ab75b4b31756660243470b93830c92b1432bd58dbd147d1f5),
      uint256(0x02dc95ac7209107e61f3c653c3416258c58c805d5b549d36154fa2d5f11bc9f1)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x23e23cd24f56306541a4846bca4370216e60ad0ffd037946ae858a64cfab50e7),
      uint256(0x1a630428aa03ffb3177f2d3ed8bd1f796c77f38d960c04ef612b5e6efe06d719)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2560ecee7d38ed71e0953cd32ff7d63f8c0de16d4962fb8eeaa9d89ff02ee019),
      uint256(0x123fb42f79f1d00c8eaecbd296347ec872d81110d8e956bdbccfe70cfd3e75e8)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x131f1eb5fe77229f1864735542f89ed6ec0a893164b483cb0b87e3a6fb7dd347),
      uint256(0x12f30bd0675b876d51b8383f6b86dd398b17d3a57be1b2aea7b0e317379b43f2)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x155c3c605ff79d59ee16b5d49cbbd0f4bac6ebe9753f01171f7071b82f5c5cd8),
      uint256(0x041b04a7e088d7fb8ddeddd7d450621f94b8568f61c3561de4a0980eb9d43d0b)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1bd9f565c7cdd497f755d16917e6e4d47a9459427d7a53a05d12a508057faf92),
      uint256(0x047f3fa9d44c16e00bf2c1199743bf5b9ded4406b8077b00edfe6f22d902e9ec)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x259d169b5d771a9791735df3b821858b7885ac8907855461a1cd2f4b40a5b113),
      uint256(0x158b263535287547bf54981ec3ca6f769e3a49181937b6811c29188c7b82cdb1)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0f40b886deba98e71f5370282844c06c88fee6a7563716aad334c14cbb065357),
      uint256(0x0a1a46a1f9e0dcd3548b339de73e7ef98d4cfc2a650a3c0b89c5c0f4b35738b3)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x187fed40274e44328ffa0909dbed293136293b95a95468e79369bdcfe4b7f26d),
      uint256(0x2d74b94496eda08fe7f04f0fa7245ab74d18ab2e24cebd8ec789d8ac3f59abaf)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x27c31890689fc2f9b09b3f3ad995dfc2ba181c55ea4357df2669e95e7dad6d72),
      uint256(0x0a84bdf2f97f2ad948fa9c0412ed9257fc1c0dab75719f84526fc66775f463ab)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1f4b5996ea0431efaa0f006679c6fa756142481c340c897bf3c2fcacd9a21c22),
      uint256(0x210c020f2e25b41db6f1400fd771a5cb6cd2449efba726188cf2ee680f7baafc)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x299031e42a5960a6ff549449b08f75764277e60a9b48305f3fbb015c45acbfb8),
      uint256(0x1c0ba9406d93eea11ae7795ca6b51394cc7a7ec623e1784fac0afa1d262d365c)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0a162ab6634576217348fb2947d427f60e91d92457f0c2b345b87a91606621eb),
      uint256(0x238e5da6c14dfa82ef528713356c6f680a82284ad710eeeac52c8b12353709e2)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x118985bb10137f29d81aec313999e7db6e48e67710f9be8b9b66ae7b104f352b),
      uint256(0x04f2a9156a2941c4e9923023870ef25435e19f582aa2ab30596b6113a1d436a4)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x0aadfa48eedf402fe058942fdcff08b84be63e356d1d20c4bc5479cfed191c03),
      uint256(0x1b501a8747ee2b36cf81c10ef1eab6f7947f23900da14fdd62b2c2f0b62b738a)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x027b5baac693095e90df7871dab4c128e6327c7e9d82010ab3c48025d2effbd2),
      uint256(0x0af759dba5203cddb4ac6ac0c1a9fc2a1d4d30d2042051fb8d91e0c2cf204f63)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2ccdffd8473619e939d887ee3ba761c39776e8912c4ba864ebd94f38285f02c2),
      uint256(0x0cb91e7632ad6b25c9b7ab4b7c82713f65a7843cbc135daeaf652bb6f37ed84d)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x2b6454acc38a9b547e93661f9b3d1c47f39fc510a97a82efe652206e8aa5adf8),
      uint256(0x2d821b28ee807009619e47422963428ae525f73d8980ad53aac4525b070f067b)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0d2f0b985eb5ad5ad0c7dbf8caae7102fc104be467d539b4bf52b7df1b5245d8),
      uint256(0x2762eec314337cbdf8ad364cb28b89b696fc849ed8b3bb751c9a49f627d76e73)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x287b30050cb1a3c70c18c672ce361ad468b8702329b3da5406926a1fd232c933),
      uint256(0x18796ca67c4f7d8e1513e7cc68acfcbd287756afe769f8fc2b2f7255de434aa4)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x13f4813890ffbb8f9f3b8b146e314cf343e88afe37bcfb598a952c7ff7fa0d42),
      uint256(0x129fb5f1f4adc354474b56262fbb28ea66e567ef5099312039f1044fdf4541e3)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0ce0896c4bdaea397b037faaebdc69e881b89f2c18192bc02fa58ce74c9404d1),
      uint256(0x10260a51a53a5f3abd237efafc78eebc009e5499b2b7fa1182cb251d82c5f3fd)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x24c1e988d4461006409a74df822e61b483c9a2a8cd14ffc0433b2a9f15958ac0),
      uint256(0x080d10dbd2f9c57d74d193f99607292d9fbccb2d51b66db19d49d7bf021aa6c1)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x0b36d75c3cfdb200369b513a5f1492d86f6a0aaae16ca36d2912ea601bc5a418),
      uint256(0x1618ae8353c1913d2fce289b4a7397c4aec8989efc391cbe374e3741d24056b2)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x1314338dfb2e69ca598820a95bd08dcea787c2435596a4f80abd8b14cde0b863),
      uint256(0x209660adc01aa45a642a4265c5086f2c0c2ac74361ae59f5a65f96b306d6d2a9)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x223178dfbd46ff8491076069508b710220303acc1f99f1401b296bd1559ddee5),
      uint256(0x00dcc56f4644b8577059e544e275ff88a260bb1cfae3cd54478d16c0c99d5c00)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x0816a378daa0b9017d90b3c1f8a5b828badc2eaa52e09fa7d202c725acbc9a3a),
      uint256(0x186eb860eeed316d48d45a4d23b49d69c33a9f08bd98fdc038ab5faae2f2b559)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x205bcce3eabd7a6f6cf8b79e65c8553371d738a0d84b7b5e908260f97fdc289a),
      uint256(0x05cbcee93b7c5f5ee6086d3614cd9426faf9df4e2ddfd5f582cc0cedf4350ca7)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x06f85a5d11d5817a3d8b31d219b7ae6cf74634c25a2e61944ee21fb22f8effec),
      uint256(0x279acb39e3d9700cb0dd8c8e7f67baaa21b6277338b83c3c1e11652d61656112)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x16af3ba2b0d3da21d5d96d0e95b3c21fffe521f0786785342dbabf6bd4884075),
      uint256(0x2a7a942e94d68f97c74acc9ab03f6afe54f3d9085d0ad7b36e792eec40af126c)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x0663ffec3ec777c41d0da5243a089139460cae776ec401fee2268f2f0e265c92),
      uint256(0x2dd81bc288452e96fae429af3aad7f55bca230466acca5a19ceb7b1baa8b6c01)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x2670b454c1b8ed715e4a7ffbe37e2029725729a652dd7e9716a8f6341d96be6a),
      uint256(0x2bddfa3a447782b6374a1886af9b36975fd0bdb6053556bd2fdda36fdf2ef15a)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x2e29ba63d20ef383c63f4a90a030bfb1d5b4a5ffe90f013cd8651143c756add9),
      uint256(0x1e1fbf65b30aef46680b9ca925b77daf0c6d1e673aaaaab1a8d2335b3381ebfa)
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
    if (input.length != 32) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
