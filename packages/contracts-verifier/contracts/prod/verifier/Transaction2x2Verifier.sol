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
      uint256(0x2143f3d839bd1a3076f0e69db9c973bf0c8e81b3f2dce8475330a6efd34187b8),
      uint256(0x26c3b6c8539044798cefb1b1b7837057614663a7703d4180fffff8cff65f5297)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x118e535bc89b309d7fd0bf29f8aacf54eb1d0b8fae8dffceeb4549d564492d7b),
        uint256(0x09609a8a1cffe763fb0f5e329e5405022d2dea3f565b5efe9799d6d653bd98b1)
      ],
      [
        uint256(0x00dfa1e664af2a94bc6c1cd279d4e3663a7752ab6c679459ad80c56db898cfde),
        uint256(0x12cd08838f85a1ff28b2ac33d0001c71bcc4d4f9cc665ea55e8a7d788fdea90a)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2cf5176551f7886e14ce570a6c70d9be84b1f574032ef0befc5aa6b935615d47),
        uint256(0x25bff316a051e34509b3e0be4c306af9ad03ea64e9a1cf7704fe2073575a7c37)
      ],
      [
        uint256(0x291bdee0df5fa9a4d2b62eb495196655bfeaf15402732cf0109c5c72fa1e4b64),
        uint256(0x2cabb55502730143b8bfc1ce1030b6ccf8f2abf354cb23f67c287223bf8db674)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0f51a6317b9e489228bfd9267c9b253aa1a2e1feda5432f8e955a95534e2e106),
        uint256(0x2954ef7c5aaa4b970a2c08afc36725e10fcbbd5dcaba7ec754e98e18ea00a190)
      ],
      [
        uint256(0x0d67fe100bbe8b8c422b040c8c4ab3ec18f3c5ea5cce1e5a75fc9af9e651828e),
        uint256(0x1d79064bb1f1ef45e1889595f64806535a69bbdf65ea3b7136553c6810290e83)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](35);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1566c6463c5eae88fde349f271b3732e73b9e91fcf89e8633a76eaab769cd3a1),
      uint256(0x0e2982a800e6ea9aab76c55f97671892a8f3b1129274c2fe404c61b369d1ad11)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2a8daddd3cc96605978c6be2982880025008e709ee32a4aed4ea913a47cf4516),
      uint256(0x1f1786ab211211ea3fa2a61dbe57f61e27a1c12d2acccc6d85e22a603998df47)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x09eaf66212593f848f5102c627e79d3f55524407f325320bf62e1e8256274dec),
      uint256(0x05c1510e0959dde972f1fd525075e37a07305e3f2627cf5eaa5d37a5eb0a0a52)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0b0300a9fa0939a84dd1814783e356decc5d0618d24c6eaad984388fd6f2bd9c),
      uint256(0x225665097fbd3fb2f2deca71a25975bd1dabca2b25cac0b37664d998375b464f)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2d4a34c43a3f2310e34e96eb24b2b384ac739e140e1d826a7a92375574f3ce96),
      uint256(0x2de75663321ca3e40f62ee1023f6ea309e81c4525203fbf6ee0dae6cee65109f)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x10d0e072699dfb343f85ee4f1cd490cd04cc1cdb714aac9d64728ed96f63154c),
      uint256(0x0fbbb56cf9cce82b22cd88e8372e406a8c5137c57516eef78cb3a5aaf9fde561)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x17ffbd6501338ebc716c1996c631b8eecc5d61daa1519b3110ae01e720340015),
      uint256(0x01344727b6f3b9a2bbe25a44ed8f1a649a68783d74c8d7f28d44a7d4acb9dd60)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x18ca83d3b56a0c3ab9ffdf77638a5781bd04eeca4d8e275049e2588cea2310b0),
      uint256(0x133b8479caf3c2b1f82acdce315dc75bfa2aa90743ee1b33aa0a5d16e0267fa7)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x193abc91fbf7be542428dc7a366aeed12075276a4ee78a45e71579a48308972f),
      uint256(0x16b592fe46c9cda2d504796224ef10feb3e0ed0dcec63ba9025cfc9f82a2c474)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x183191d88761b384f0fd3d3d3290cee9b532fde71c382cad4a44a130ce64e326),
      uint256(0x1c4595a0e8f197d94189df5f1915fedeeb330b11b323f9feb7d17c3408ac81c7)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2ddbfa1da7895bf828ece7698472d582f5a5a5c53d604fde62d048ee4caaa000),
      uint256(0x1065ff52657558a8adc4a789645e81b01ebb1c5f2dbbdd56713ff29251490ed5)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x08bf2cfd33be7a921f2d0dd58b0866c25e6e8720c5bbb40de5b4c7c814ea13dd),
      uint256(0x1ef91b18297d15db55aac3420c3932c1f6f97982d818b89c1081a14cc62378fe)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x22aef217c40e766c90733142da3dc8898da7eb26554642400869531784a36af7),
      uint256(0x090955f024fe09052d733e5ecf6d01d5f0884278d798ac48340428085ad8d9da)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x181e34b137c013a3f2b74e54681fd7b848bb90cb9a5da034cd0f22c29575a828),
      uint256(0x198492d1a44d90c49038a9b30b3e2dbff2a6ba3f66cb0df20ae863262f8644fe)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1110c2605b3834f479d227a2a5b0dd9ec1c6b0229b77310ec4583cfd08e8c1ee),
      uint256(0x10bc051acfe5e1accd6a48e6dc38747c0dd1e9e8109821d63c065b97d1c9792c)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x15ac3ca9f4d7ef99b64f231d3fcebd54074b87826b21c2962a009ee69d218f33),
      uint256(0x2bb81327b8fa5d8f23ed984dc8e56e28409e918d47cdb088c1f0cd63a280c92b)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x1e54d4afe55ff912033f86f87751bd1330793f00aa46459976ccd7d45f42c4c1),
      uint256(0x2c021571ef47369de79128b85ab0787d61a1f3a806bc296532d867f7e5e79312)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x211ce1384c3d427c253105ebb0d9ea09745db797f11a98105cdca52f3f9e3f86),
      uint256(0x226f8435790d07575b860c21dc160c4bcd3016d4b8c4845054759e46b1d72b7e)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x1aea90febea3a55548104ddb5eac518e67b720c7f43b263db8b4d4b9efbd50f3),
      uint256(0x1f7ce558e8a28ea9c08cf86e5038cb79ab6fdaeb6148f9da6e4efe0b4d8b616e)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x185fcc9af3a40d39536070a0a858455142ca42b0b59cb8ee96ea677ce5182db5),
      uint256(0x0c6c2865a1fde979b835584ac37557ab3ba7f2bcc51047e36e9a232f4aea77e6)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x164f690a79979f102b56caa76a902d90e391bd6f5925e3323f6e8bb5c7a33bbd),
      uint256(0x2389bc33edba5aa060d29a600aedc4fca06897e8421cb71a7b21e19e42000ec2)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x01eba519ce37c4339b64411f1e7508ad57cb6139b0469cc2f99e1ab0504b7e74),
      uint256(0x0d01605ac848897541a47db67ad73fdc387e0d92c9cdbd6a40645fa507bd4ab9)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1bae019d93aea41b359f38e0d29354253288c9685c64371ae4b6df05f77a86de),
      uint256(0x288ac3f2e4d55d56fd5627bf85a10098f121ef1f116ba2776211a97e69e93af3)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x09a38a9ee624df8068ca5a164d1ac2529517624b7c5b175cead629ec9a20bb5b),
      uint256(0x0b32b7fe42b10d3dd7fb11376c303e88ab6b69fd434376c4797376efe44cbb23)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x06e46757661152eb18e0d85c87faec183ae1ad37713ff76482b8e19e41286d6f),
      uint256(0x1050ca1642c91c394b88840f863d01f9ce7c3dc132a6e8b4f94ecbf226c4ebb8)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x2de14a4f81c74b87f668a6b0e1f399d06c8759bbe14b9370643ea53435e1afe6),
      uint256(0x2624ee572d3b631c941bf062077551c8f67e3188626f748c04c2eef4103c4380)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x06056bbe2b040e819edb954a97260f77a66ae63ed559df01ce9cb80c04e37876),
      uint256(0x0e37ac0e94a36be70990c5190f6d6afd85108b932ecc9cfe2008d18b42e89a08)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x09d167e93023278fdf6c70879f717c47ee9a9386492e6170dbfa4b1a365a7643),
      uint256(0x00b142ed4b6b1c6a8e6454f7f540d1e426cda733e6558c9bc986d0b2a5ecaf9e)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x127f41255fd15b630e2091df068e50e224f3b4577e18916720bf7a561205a276),
      uint256(0x1295b108b1b71ccb8ff6114255c549d6430dd9269e095a57e4d6f067ec1162b7)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1b7089bfa1e277fedb0a5721d805f6a94e866f1b98afd204c4393123a5dece62),
      uint256(0x2cd24f55049bc14ab270ae83cba44fb99ad8eba8d304aea831c2ee113380bad8)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x14bfaf19764fd5418b9ab974f714197627ac15c9e54d2beb92afb8bf7270af96),
      uint256(0x15c3025443fa3764a41dc692641608c2a4f5380fd8fa7566a3c586e3aba08946)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x0f3a7715d460a5ff4abbc2c63dca230a17150c38470e10ff7a37b614f59f59db),
      uint256(0x0e6454b6bd944c25b0f5bc36e97a85531b0ae8b11d4db568190cf22b8fc92eca)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x01a328673f95ad861afde1701bf959ef7a94258d859da255a477df03b98e7e35),
      uint256(0x2efa3896a268ab6344951f87e44323d071c7b2df00fd65b3114aa880b7943c77)
    );
    vk.gamma_abc[33] = Pairing.G1Point(
      uint256(0x0f12093fc19e710af5cf0ace5b94cf8943c3eb132eac80ce0437a6576a2523f4),
      uint256(0x2d06c5b747d4b2fa8d27cc057a36b27973b58cd03272e9d6e44b41997a11576e)
    );
    vk.gamma_abc[34] = Pairing.G1Point(
      uint256(0x0fa422bd4e6e485eff86acd5e2d8f658fa5c4a26572da9154c51d79f5db94ca4),
      uint256(0x2ae68016298a6b2c192192985ce4dccc846877eaa371792e7c33a4e0d3ce7b56)
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
