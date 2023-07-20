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
      uint256(0x0eada3bbac2f6f1daac3dde05c6f9e440c0d0241816ca761d3af1fd5c16cce1b),
      uint256(0x07633e33b1939e75a568b2451a57bb84e405fcdbc1497a8f20e48a8462655945)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0b642ed5d5c7e7f4ee11c4aaf46067e031f5de6275e9669ca5f2bf4ae05f4079),
        uint256(0x28f2cadf5430c122eb085f2414dfd857c4b92ce25a228e2bb1e503b39aba63ef)
      ],
      [
        uint256(0x0092f26c4b2280b785471e0e3566234822fae859a179c524ba5061f8d4c5e11e),
        uint256(0x0cae2cef32e7ee16341d5a599e876c2816423b2a85561f24b35cfd5e38655f9b)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2df02bdf19f6c2891d391f57c623ad3b07dc38ae450805bbe01f8e6caba7f5c2),
        uint256(0x087ea2c9e2fa5cee19cf6fed918ac0022faac3808743ab403be996dbdbeaa308)
      ],
      [
        uint256(0x2b5cc997e73128765eb5e4f246edb320ff722fbb0ec58afe955e44425c64c76b),
        uint256(0x0fda088386fee96c0acaf6c239f064d708bb65ac89d57418f56373a81ef44d5e)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0babb16610a4f94b1665a2ddb7a3d8e15157a150d448a7ab733f7b48b630ba1a),
        uint256(0x20b70182e78e549c795299199471b565228b2a03896d837f35a04a3f125178c1)
      ],
      [
        uint256(0x2cfd26104389205a9b28ec894670ee2b8ca0c5934a92e2aad1a2ed7f5fe3ed1e),
        uint256(0x029a424384844b810f0d71ffec4434e813403f17f964e87a2fac2eb9bb615ebe)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](33);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1d37c521dd4c98e9ee30088ac7301f147ba7f72e202804ffec7ad0aead178f67),
      uint256(0x2dd73821ae7f93f001224913709dec7d13dd2e42347be013078a1a908e9ea01d)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2e7682c28a4d4173b18e879575eb37a9d86278dbb93eeb065d3d413f8c8de680),
      uint256(0x2348089b5d4fd040971963731b2bb48de3ca5bdd6961622758e0af761d017a86)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0daddb16faadfb82d169745ee39540a926aa2812d6d2611599234c898d962c6f),
      uint256(0x2f4922dac39970719d59c0072e229949b599d341824b90f3c10db2706bc793a4)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x15187ca91c1e418596b1ce54c64e5dede8aa97f6a94a0f30951bc0fed15563fd),
      uint256(0x283a2ce62ac70373ec47d0d86c82fd87a23e9e4b9ba90df8103ee0d967400a2b)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x11c846974a38ae96b6c576d3e17ba782f02c098d8791aeaa21a125e32bf9cbc8),
      uint256(0x1b63f9ab7ca95a4e06f48f19f9bfac488a8a98788fd3eacd629b421f73a43cfe)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x020748ba5fd2d3ddcf4ee6730b88e0a8757611bf44ef288e558e8ccd55860134),
      uint256(0x2fda5824e3bfa9c8fd625d2528f40f79562f1dcd9c63df9920c37dce35e32bfd)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x17b375cba23fdb50466c36078dd2107dd3da49defa606b4d31e4ff7c360aee06),
      uint256(0x04e4f42cc30e544f7fc149347df510f88e31ea509d5a9b2cd46d5496ba6b05f8)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x1790dd6beafb46852d931dcdb83fd9e7659e3da9341a71428a36cef763736cd2),
      uint256(0x26992d51fc39f6792d767e4c2503e65a5437cd4a28ebfaa61aee46b19aeab395)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x2746add94fde0042bbe2d8e02a0a748939ad08aca084205438ad1f65003b7175),
      uint256(0x1ab7839d3496845311a8e0e4b2300d422108ea4290320999d7954dcf60466a12)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x20d09d4a94ebf11b94fcf02d23b4f8a8975450c46cd2ebb0b25526bb01cbeeee),
      uint256(0x2bed7e3ace0af460e5acbc71081ed4f761cbba817c88065469e82b8df0d24ab8)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2ecf8d593dbcf284f63b21d0e712b3dbabe7c2c778c2574bf93e7fd4c904a88d),
      uint256(0x09cd6f360a5e31f7b97bcb1ba3f97ba8a21160bc4ea15d48ffdbaa172042c804)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x1e0d62467f91bdb6257eec198a15ba19a01caf7c2a51f75b2273f109b0790875),
      uint256(0x056f7fb0cd25d173d80613c1c0fe331d2d6ac14efe895395ccb3ffa2c0cc3eb8)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0feca08f59e666296b6d4053daf46ea51846ab6579ee0b7e23af1739fb262e6a),
      uint256(0x2a0065b07a410e8cff401e438a9bcdc3381664b2d83fbf25a0c966da9478e41e)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x19e6ab53413c99f957d7158a045c87a5984cba770d63ab0e0b36171810d3a64c),
      uint256(0x1e77c9a5981e32624b0aac50e5626affeffbe5582f6e97f4075f1e315119403e)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x106f6fc8dfb6ba73ed48cb047637bca9bc75fab960615db44c948695a2b0e450),
      uint256(0x1d9cd0edc540a2023d25d8d900a8432262696501d0ac0a342242ffbbd2a4211a)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1283af5da475b0be3dd26b9c2846aa25ce154ac529711a4a6c3bb11e59d39baf),
      uint256(0x2a0b8c37253780bc67475fd92db296043476532d0912b1cda1b17bcd44a0f457)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x0854bea360ff3e7ecccf9a3e28c82af3e9200d8de2ec6e3c25ed1f295e37fa6f),
      uint256(0x2ee2555259ebe8f1d9358df3f3442398c0c70ca06c3050809dc404d7fcc28eda)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x18ab18c6b7ccdbd7571d0790c7dd2eb087f950422ad9e2b3dbfa91e3d316341a),
      uint256(0x100e7bdf4b4a4b8980aa962144aaa66d53881915aa891d6afefe6a479e9e3783)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x098a624b1657515aa1ad91f9b406e4a547e5c24eaf4ff47db45337f04a9cc90a),
      uint256(0x08161eab7de25e0eeadc979bdeb98c89b23e714b6624bbbe5390c07ab89ec856)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x06fc0387c61028c5020ad22a68d1ed0b8480c7260a30471f1d3890473875c931),
      uint256(0x18a465a4d04148e0270a45405cda95f2ad6a9498d9ea6d848bba1c60a9f0b58f)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x29c90a06c92c0dcbbcf54562c252d6169f07533ae4d8cc0e61fb4bf5fdf5d3b5),
      uint256(0x21925e072e5c09b032ffeee3eca9a405e73f148a8a4ff9fcbe22f0b495846e85)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0f8d9ad883401429c118f3cc7ed6b181193059c9c2ad798c77d052d366fb4205),
      uint256(0x29b2922d7539926481998ab9e7b6168cd29dd8c0dcb45a38a033f42567d5d93c)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1c50d438b028cb63dee8c9e2d024f0e1e49961fbfdc1fc506efd0b92d91f85d7),
      uint256(0x22189663ded21d0b0cc0627decf8bf9f6a292c464f3ffa317813244093809345)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2c0760456821bd6f91feb53deb7f20a76bfe1fa9a59d2ddce91ea95a8e0b66a0),
      uint256(0x05d050870ff0a53e33db63415e8a7a1e0057fe768ef0b042184f96ed9f3be9b3)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x1a9bd2ce04cb5581623fc8e07b216b79f4366c523570ff15112a05c26442f492),
      uint256(0x2f6ff33e6cf614465297e273dd0edf95cc6039f3c9d8932773f3309c8d8c3efb)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x047cdeabd023d06623ce5dee83216e2ca3921536e4ae4644370925a0980513af),
      uint256(0x1633c143452752e2fe136cd4eabd90f2e43df15c4f83a4ec56597bdb6bfbc2f8)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x17c3f0fe258816645d6999dd693d4777200461545679be529bf8cbdfcec98f72),
      uint256(0x26e6dd9805a28fbae69c40da9faed6e035362a1ddfc0703507d5eaa4290e6c98)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x19db23d1b2266416d60b88dbbc818c8f7966a569e56bca0fe4235e1bf1f07656),
      uint256(0x19a7d076fe2376386eb40357ce3f683fbb92ccb7609b31844118bb8028302437)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x13f3f62e5332c6594300e6b9bdbca97ef9777fd6303386327d7db746657af7fd),
      uint256(0x1c859f04212a43cc2dd40024d9e1d769f46fb11a5ea24b25d7d737b9967e83dd)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x2c642f5f2d1995d83d195c2c52f8263695a7d9f43d5dedc813fee63547297418),
      uint256(0x1b4d891e971278a5c57f71fe34a305b9f2b8e3fadd01d27882d4d494af5db619)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x028ff04b33101c4aaf7f7dcb457fc9cbd654059114a9fe43ee537b67eed5bc4d),
      uint256(0x08cd15a491d358819c74f3261d791f693a3d7eb8365806828b221fdf8df2155d)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x263fd58d64d8d13ce262e26394657011ac622a5e79b56417204db5e287cde6f6),
      uint256(0x28a2183db53890ad8d90dfae2d9cc6c6dbbb72bb009967612a71e83bfed5b427)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x02d0fe339ea3ea196fee2d136aab44461ac4b5404d61779b067f586e8eb52323),
      uint256(0x02e45fdb2b4e911d5b60b8fc44034288062691a46c9404ecf099e533acd6d14c)
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
