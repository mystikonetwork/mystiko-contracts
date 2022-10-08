// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0359ed6df706877825d15f558e82008a6e4e82d1ee71d1764e1da92581e3f0c6),
      uint256(0x2b6b41048d64e876c2257c8ec53f9dc77ce4dcdf089f0054674616bbd4a37402)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x07a8107933bfb07564e766b450917a57146a3e37908df9e20d789387065cf6b6),
        uint256(0x1c622ae66189263cb7121e7e241596ef905785db595a1a1c08a619cca50536f5)
      ],
      [
        uint256(0x178f55292a64fcd45c063ecc47b09dd89a791adde268ff3d4e54db1a4f76a32e),
        uint256(0x264afeaba1bfa6f4122b8740a7d3a1a5fb28f91c773d4286e9be3554ae268b89)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1a4fa46b3d2380d60b7394b7af661c32589308319c54e69d617394a7734c3185),
        uint256(0x0700f97f4bef97ee8be8b75ea688d1c4da38fb8921abac4c7ea18cca36a60f37)
      ],
      [
        uint256(0x1dea6631bbf9a18a156143ae258ce27e5ef7b8451043967cd13cb814f2690182),
        uint256(0x12d988ac5286e23c83819963789a0154e9c229c7b87d3dbea6434ad29c7e9781)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x07e188c8e04440871a03611df93ba62955095ff541b9570dd925252e6e472e19),
        uint256(0x2731dd7012d781ac2dd4368aac76b93b56fe7b27c3670bdc8b02a2a8ae6ec02e)
      ],
      [
        uint256(0x2d2201e92f264cecfd1b5f5c9b270118efe16b6ceffb102c0b5f31f9bd7b0dd7),
        uint256(0x1f5157c9b24ee830fabdbed0fdb7b2e10e4eb3bbc85c2b570cdd6f42697468ef)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](31);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x050c5389eb812855d7baa9565f24e3ef75ce4d299f73bc26a97ad4bf93de2f0b),
      uint256(0x2c1ace38a35a7b58d9982cbeb015086f1d35d8fc0c61467197ebff6709264de8)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1c445b2284022d60c5dcf38a6b65465bd586e388c4e6c33efa3dd20873e51de9),
      uint256(0x251a493eac1d513ef4aa1cd53eba741eeeb56377d5782262df73a7cf40052b4d)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0c49098507a911ab8d533731a45c1a100f9f7a40ec6af2e5fdb5786c0ffc9f6b),
      uint256(0x276c7170a112647530e76abc4ef1671a62d3e4ea58efb9ab7c645e7a713a30f8)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x28a6d14b0a10129c6817446e5f6300b7ab764cc00cfab8fe219e6b747974530b),
      uint256(0x2fbd8e0ec28e010ca1a73680945e690b30368c76295fbe86f8093cc1c8550326)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0b9abaee0ea5f0523d49aeae829eec10a6ffd9f905b144ddf2715e468404c6a3),
      uint256(0x2d7938d469c97ba0c971ec42f155a25a44e3d9394e3df0094233b62d96fb055b)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0e94f689958de261f64ff48a66ab07850a3cf02389dec927481916ae9aa587b7),
      uint256(0x294652cc5f758074251ffe5539b81ff1dcf4c07bb57e6f19abca83c8b335d67b)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x001ba56fdf44f881acb4cad763ca840d6db08f805b3ec5444c5fe3d65133e7a8),
      uint256(0x1306c03f7f06f5ffcbf72e342796c524583707ae5f0b3fe193c24ddc82754469)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0bff12e782330453c21e8504dfcbaccd47592a136b8255790cc069d3144036bd),
      uint256(0x04f3871f523416473fba8a5a1c523d2b4627fb0ef44f2cf4c68d28d94ea24c5a)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x17a6abc1c9e570c22ec353dbdcd6bd91c58ef853549994bf6ba660617d6d5794),
      uint256(0x139d344e7f0ef6ab5360008e5ea41e64ab5094bf482deecf872ea827440298b5)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x0cbf9a2f9d2b4a0b38be8155327fcfc4f6e8bc47fe939a03a05bf69f5fbaa590),
      uint256(0x1714f5c05a068901b88cef9615089fe38f59ed02090093a0f8ae636e855697fc)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1772d3d62ab9b88292c19d39c2c9a99c682f68e2b814da243a6235693d4e517b),
      uint256(0x22608e351254762fbf55200022f8fed8cf4aa601636cf4e63b9e9a12f8fda35b)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0da1008a645fcbd568c3b4a182a23e5bbbab0d466504d2f5c663454a0683d447),
      uint256(0x0df26ed5ecb9df9117bf0b460dd718ab7ec66ab44090929e176a5b82450629c9)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x11179f47805d71b315df7a2fa2d1ad270f51b6bbd441220cbe219f96ee07e2ed),
      uint256(0x2b935d0fc5aec6810d626dee10927ecdb6d247e6ba4fb35108c4e35abc77c7ef)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x257134f57cae7afc84431f8ca2577a4b79bee0c6debfa9604234536f708687dd),
      uint256(0x0e2fce66373dcb2645784e873f87072843dc26ec5e54a6b276e23e83f39e333f)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x144100e1b97b6caa9f79ac15fe3de53af1475d46b54a694d019ce778b83c89e4),
      uint256(0x1d8acdfcbb5079859f9afc98691eaa35fc0e91b1f106261aadfe916d8085c267)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x29ba9ffa129bd290c7bfea54442a81f57a21fb6d4aab8521b5c7e7b4ac0de9d4),
      uint256(0x1a183f11f8ba97bac6cb904d2c5a809953673f986f974cf3c843ad65530e365f)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x058e84527fb542ee732db7aac8f093cec66a6fb54e7eb85c17cf43d671795954),
      uint256(0x1bfd4ab2921be2016df422a9727148f354783ef7b22d5b723d143e4a3360f1be)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x0f9f9840c018168157ea54fbeda65ba20a8a09557d4430fdc346ca1b9faf1673),
      uint256(0x26845bcd154cabe09ec23e11ad3eadbac6c5110c86a007960cc4fb8f1bfc91df)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x1ee9f099b2b6bdd8ffcf0a17a8bb029824909d4432b7b51ba7b8aa118b5fdcad),
      uint256(0x25f9d44f3a83feabc746062903e41d043ec19c91ea89229e7c15f573dfebdc48)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0a73159bba11aeed966acae638bcced3f0a321f5bb17535badc4302645dd511f),
      uint256(0x24f73fe159f257dc3bab6673e956e259964bdc74b978ab5ff3d769ec8e0e169a)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x039cfdf18d7a89b9b0bfb090ca5ac147afcf4c33f103b02d82d0318fd084a27a),
      uint256(0x166eb2ce74152439ac877f98bdbe5d43122e04397f24dd82a29c4f4078afcaf4)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x12e67a99038c16d849d7252393e06478ad64e5428321d80700f53ba35fcb72c7),
      uint256(0x1f761956aa9b765c2a31cdb7a022049c144ce41beeef43c4f7e91830b0ab4c5a)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x10105cb3c8100b3a5f72f0e5812cd364cc873f74cc0fa29503cdc477637d41f6),
      uint256(0x0c3d6c24bef844f229298a58838f3a29480b088b468477770b0b4ae7a4606ceb)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x0bcd46b03ab66364aa5548d25d7b7deab1eb8b9f14406e6c7c620fb1678473c9),
      uint256(0x15173a9479da7a8812869c3c6ff2576677465abff6f5f904d7ee122d64cdadd8)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x1f8897ed133c0119a14277de1839b70006b4f10416b1a3b4fbbc16be5ff499b2),
      uint256(0x212d34f959d7c77398b58bf7a6d69d6bdebf4fcb9c91300cbea235be8b2ea889)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x2361da63126e31972f6af8035534f39dfc78adfdab1f73b0e5f670013c23716c),
      uint256(0x2932d875e0df6a8c7f9d4238689cadc0efd6a54a25b40a42061d776e1db0322e)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x2a056c9da33c2e73c5bd95db4a9b8fdd73eef26db8ae65af7f772f7b854bf5da),
      uint256(0x0564069785b2e072c827a732c4e4f0b55d4a7d82dc0e0f4a6f48ba8a9838aa00)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x2c06625a65f0ec8735c6adf8e9d11d1f98bbda129e986bcd580f08c7ad7b9fcb),
      uint256(0x18a51424c6325cbddc59e83c4a33e890be2597b1e27bfc3eada5b3f709ce7d50)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x1509d032701fc89c3bce8ca6b90a1559f5fa1b3fa3f6a675fa6ae2f0c3cd8300),
      uint256(0x0781aa0565f72cdc6df26c98cdc70ae9a77a919678f6bcbe98c93c601bbfcac4)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x27e46890dd88ddf4c0fe0db43b8cee632a11805d8c3c7dcdeadf40ca5b38fc99),
      uint256(0x094f2a565db56b027d689b9a2e372e9273b164ddbc8c234c332c61024372883e)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x2da352157af2d9750ce01a5c6b68e2408201cfe793f1811c4655d328e4f3395c),
      uint256(0x063c3652aa9a4aa7438ca9a59fac5e3df34b4e0bede4db4a8d213ec030a72680)
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
    if (input.length != 30) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
