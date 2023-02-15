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
      uint256(0x04bb85ca6d845f66d858238c796733736c42df30261501d952e5642e51a597f8),
      uint256(0x2cdee47eebfb507b03a1598d230e0a59cfca2557c6ee170b6819e828cf2baeb5)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x08fc8f9c686f132920e085f0fe204afca7376a6d177445a03bebeca6f8984565),
        uint256(0x2b6cafe640b0cf7a5c659234cbff012c9a528831abfef0637c9a5c3011ce545f)
      ],
      [
        uint256(0x245e02919550bb48f9a0a5d93b08477691ca838928e38cf1ccfdbd0ac938ced8),
        uint256(0x2ae3f09f9b9c1313dae711d3c0d6915e847124a587a63fcb467d054e1b169e59)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x04132fdb0372b87836b04205d06dd7ccb5b9959721f8ddac332059c8b7a0c431),
        uint256(0x1a7e34b0ba7ea74963605f75fc9f0f504157c700a012b100b286f0a5b9ebadac)
      ],
      [
        uint256(0x2bfdbd4b113bb2de022e236f23217aa6987e1766c2d3927ed3e9d8db881d2e32),
        uint256(0x11f1fa9aee4fe1faa73e955ab42cbbe5321ea14b32be977638fcb00b0d53602a)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2a432944e1e48f4cdcb2dab9d2fda82a143edf3df9f4c3eb3ed4dc95d05ed0a9),
        uint256(0x2ef13d3489179a379a07f296cbfb723011366ddd4802d50738bc9acd681abb11)
      ],
      [
        uint256(0x2bcb31ccc108501c3bacc3effd03bab1e66d442655e2b392b1f4e78c400f0edb),
        uint256(0x1bdd93fa44acdb74d4e7cc806fd9661a98a2f6f34bba947e7438fd80a95a22bd)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](26);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2f006a118a4360ddfa0a09d1c94e667260d4d7f78f9225319119b569978980fb),
      uint256(0x2c479a94e97ea99a16c14301fb9a214db6830a87f51733242918e39ab4eed099)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x138286240c66377c5d36e69400e536a4732ede8f5cb073b5cd7d063cb396ba30),
      uint256(0x14bdab05a9063aa40860f19986b367b8799148b5aed1099d4b0940df9f6be853)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x00a3b8add98615c4a09659ade634fb3c87f2828a01186842c9fd2fc87f1fc8df),
      uint256(0x06b2f8d3ee91d2321f3302fcd51bb53b54094b8c4bebf4eef5bd09f18210a54c)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x12c55072f267b2824acc2405692595f0ef2d020582d3e159cccd03002693d8d3),
      uint256(0x23c3057fac7bc572c64d2fdc6209b93cec5788f67e51a3cc62239ba7e3e327e6)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x12c2e68d0d800eddbfdeb391c0387bf08316b4ec3cac2de52e4c0fb116ee8a61),
      uint256(0x14a90f1bfd7a4a21be1dfa37477f719b27226b5263626fcc3b36222d607d134b)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0a0ed32eda2d5c47a50c302fc2a70b3f5059a1120de8899ce063f1381e3f9fb8),
      uint256(0x020bec5b26efc1db0b93ac5a730fa9a1f32ed6fb7f6f714d795d450ae895acae)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x203a471bdac1017989ec2beb1ce44b6fcf03426bd99c5260ad07fb6ccfae0fb2),
      uint256(0x041b8cfd86533caf92721734466789495f9ae83596ba48cc850422232e40e5d5)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x276d3928d08843ab7b5febdee9d5cf2e94b251bda6d2d51da1b72bd0a58d9b41),
      uint256(0x1c391a9b2fa29768cb9607833123b331ea761232b560b0652a50f16b0cf450dc)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x26cd265654c2ab333867691dd7b1c8e4f3ac9abdca45ac8eb10ecd4f93d03d62),
      uint256(0x164e89ef9297cdadb7739f0642d65e37af023afb6fbecf773e14bf943b9c8092)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x00ce09ef99bd988ff003daf32e4db1c53c13826d59fd3da4455f872988d7df1e),
      uint256(0x0bd16098cf636828a467c3be3c82d982823abcdb04a50226b7aea0671ef16892)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x229defc7c159da4ada52b38413010ecebf53584a1cb676393391b34a5def61ba),
      uint256(0x10dc7feedf1e08bea2a154fb8397a0c6c2910a9a972f0ca3b2c31fdc665c29e8)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x14b51d87bf7dd8aff0ba7171058329bfc7f85ccfeb08ef5b699d64d0a65001d3),
      uint256(0x18da825a16116a124585b9e938dbf37c40d347b5b74ab20260062e8479fd5ecf)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x054a901b6e556338669d89a4a1fe3a5ea811c022d73535f720866d4444b1a3b4),
      uint256(0x041dd844904d8e50840874a13c7f8cb92c79dfa965ca969696f6e58adf058047)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x015e7616d3619849f2e2a25ca9763455c13f50a1b1429f1f78bcf87868206157),
      uint256(0x1ef249dcef483cbc4a73e714bc263c0bc50d18e1d4def2d31da339d3af8951e8)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x20fb3fdcb40b7d78c7bcc4283898192be147cd6b0a13afc6d933255582f5912c),
      uint256(0x1d6be7e67586fe835cb5993af81744ccf6970dca677a627eddf6d1f2cbc4cd96)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x200c51a502098d09ed10b8bf26dcf9c9802ddb7a2ce0fdb05c2a3e2c82dc1281),
      uint256(0x1a903c471cb28f84bb79d8a1893e7ff980ea99d45821e113aa9dd719e92b9b76)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x15688ac0202205ab23c05440c6d84906f85c36af25c7c762b643e55330f8c489),
      uint256(0x22c3e2a9130a5cc7fa05f556b71a322a698b35b299d5e4610230ff46c40dd696)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x09e5f7e544929815dd4c767d1db69931928bb0c4d6e87ce2edb77ceb3d5463b9),
      uint256(0x0dad4306d7bc30be4898a417e0bde950300355149c2fb7e58e9c6a1dfc429420)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x27a29b7f13393b5747e25264e57dc32161e43a93e23723d48b388246e35127e0),
      uint256(0x2b8f2353da88d3ed7ba90c24a7151b87988e542130311e45093147e797a834b1)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x042aff843dc06499e6d7c11e2c660708e21dd10ed8a0cec10ca1752bfd2c85a8),
      uint256(0x1d5c5d221e659429a1d9e7fe32d6c3ba7587f8933b0009c27ccc5ebd61caa754)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2ab8957070eaa28e7399d51227a24c1abe41ff5f4dff6d56460305b47c24d0ff),
      uint256(0x237feafa68fadd3c266d86fcb33cc19340e13ffbc4e420ac01563a8b01e254dd)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1b45616bf1d51de4a38dd62b051c56bbb3e1d2264d698f5ee72614201522b9a4),
      uint256(0x13207495f2baef7afeb152b48e5f12633674c6aab2bde7fd1aa59298dfef6832)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x215a29702b7a27442b338ca413833f028df389f7190b5df888b19567faf01be3),
      uint256(0x27566165ef942ee703d9297e4dc3b77ae6a38c91ec0bf503ff61215d114133cf)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x08ea84c7460a1d267b8b0bab861a40c4db1eff2713366f2eb1ae0836d060ac3c),
      uint256(0x2b9024a0f0e745d6ec6d36f6f9c7483735d241bb199a0506af17e9c43f4f640c)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x13e115008ccdd718a893940f53a1b268715cd432b9a183c44f43b518d96ea1e1),
      uint256(0x139b841918bfa39c66d2dc1c197c222d710e70a9693497f961efbcd48cae6690)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x1b316007743e14c620926e6ca403e839ca49e41ba7097dc5445d5216b6daac01),
      uint256(0x2ee6dfcc5ebe1d1022a1bd4b6e72bae7bbcefeed3640d9d4d0cb0348ef71007f)
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
