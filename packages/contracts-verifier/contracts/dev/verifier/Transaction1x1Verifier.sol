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
      uint256(0x1f927f157f67c034ca8e8442260fbfe42c6b9671236402dec77f9840e2f7a58b),
      uint256(0x1ac05f694c1f36f3540821750c1a38196a615a403204d65f97ce9e6f6a2a8fe7)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x090072a5d09fe277e65ffc464679811c2d71f8143294cd0556f1cfaa3ab85767),
        uint256(0x095de797fea292d846cae02c746918d90395f0ef48c29cbc2c7936493f8f51ab)
      ],
      [
        uint256(0x29f6c0290fac50d90dd739b4941b3cf29df9b8092eeed31190b02856935bb9a5),
        uint256(0x1bbdfaa14fd2b954e6b8e1f32e45487129f9789689bddb4e2d72d38f890630e6)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x02d2cc60995ee2012d62b73dae3c7b2cfc646579d09f3eb911f7d7c2df89a159),
        uint256(0x138ceba59970632b1544e96777200c91094565cc6dd3e19323fb77a48c12d4b6)
      ],
      [
        uint256(0x07b8273afd8fc5748516baacd688c526b25c0083f3e0e07eb55cce24e4d6ac14),
        uint256(0x1117765e23de5ffd67d8b29bb087163d5aae2b4fdad3068889082ac550e291b9)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0dcd3fdb041b0956129e885db339aeec2dc70d7144051c3372d32fa31ec86669),
        uint256(0x2541f4534e1f8f01f65c545401f9ceea826fb88e5c38f78834e19484da9c9e3d)
      ],
      [
        uint256(0x09193f424931c1aeb8d42aec773522255d77f47ced60b19cb236e35bb8241d7d),
        uint256(0x15fa263509495140a6b7c322eba0209937f4b49c2527a72a61057a5e855667f9)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](26);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0eade1ae8e6c0ee3a436ef711f57902066728192d9fdd238a9ad1e249360d9aa),
      uint256(0x1de48646a06c6d1636c4df52ece53bcfdcfa538e4770e1b51ea66b8b99aa894b)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x135acc215bfa654200e9a39a8b8cef29541ac858d9ae926533999081266952a7),
      uint256(0x0f23d14f277abba3dbdaecf501285dac8017ce1316a8cc0d855b5863bbf16ed1)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x02c63021c60d1afe4f31d25859f2103b88e799182ad60c697615ff42626ba482),
      uint256(0x0f95e35204aad0573b18f9f3f149a24c23d7d70eb9d259b4bc9d17948776501e)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x07a9a7fe91e6051c9be93dc500d2b361f4e648c3374ebc1506082b693c467ca1),
      uint256(0x15c86385563b97cc2474968b804e224de1166d0ba69a5238c02c77dc3a468faf)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x00afb64a889d7503f9c1b74a33502255c1640320fa18634d772c1fd076e0ffa4),
      uint256(0x1282c99df612df4ccfffc0260095a0e3948d00405a78a4cede00dd713e084b12)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0cb316317d30c316feaa5a9ec423520fe46f9da9aad70e3a4b02b3ec7e27a2f9),
      uint256(0x220a8b030f6c2c04ac8101e09d7d29a0198c162a4fb7faf5ba6b7e15825b3ce9)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1242a0a34fb6e3d8c78289f963eada22f8b65f75bd6324fb87cc681dc9f06492),
      uint256(0x076afc0f5f1836c061ed24935708ae55c9d969d4bdaf7d5faaec3e33447d126f)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x12721f52e12c744d73d98085fb972ee165e912e2ca8494c539dbef038a582c41),
      uint256(0x125ea11140c24719c49f7faba0eee6f0035ebf6eb9cf3188222118981ef2247d)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x0679ea8159ba166492a9689573f89df8f9bb8117468c23f95754d623b3409c48),
      uint256(0x0ed62a2f3726d24d56d1cbb2cafb9273e8c9fd0dd1deea3e4461c4ff16016e3b)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x23548770758ec2466758f72ce7bca4af74260813b37225806e96ebc503c70506),
      uint256(0x2148852b8ba78e665ff24b66bdbadc0be839f0a03416a9a161bbf582885625d0)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x28bbfbb2e9d85d4395a1de80bf3c03b33b4d7705f6950271b0763412e4abf509),
      uint256(0x074cecc61112bde2c23ec0f497f68766b37fcf0142c743107d661e0264cdab7e)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x259a9e46089aa43f0a319f21ad2f786c20c92f3547419c93c37b41255608f2c9),
      uint256(0x2c522afed6a51bbab51fd9286deaaae9ca649a5534a8fa5755450f98675cc0d0)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x16f413dadfca30d54a4ca12802cb78a9c6d19f080bbccea8c8489e544b5cd40f),
      uint256(0x04922716fd4c5bbc2995027623d045a98245902514b32687b9d2b40a63194ac0)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x17f25bcfc039a7e143dd6119400dcda354754cdf3f6c3335c406714db455000a),
      uint256(0x0e9d00083f861df6c104ca4012a55496e9698cb46cf8229d5dfb6de2e76ef695)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x2f4ccc906257b2ce4fa093ee28b15e1d2b46fedd85b9d920a56e415399ae287b),
      uint256(0x1c02c62071e5a47e5863da5ff9e853a31f95ece5a7cdc4567a307e183ae75aa8)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x16821d21f78c39bd72b86e74872bbfef063e9b5ecbb03d5b5bc50068a4109dfe),
      uint256(0x0475b74c6b0d2aa7cb345fa3a8f844b5af516f771ca8788f7f72e86c98cff660)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x201daf9a42d45936efecb0f58142b54433dcdb8e86e5dbf78b1f65848811eff3),
      uint256(0x16a1bf43b73b3b489793524764351adc86976c3c02457e87f854910a58d7d6d2)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x2081def272d687853438a6ca4f469a729f98b3caa61800337d31f76d46bcc97b),
      uint256(0x16912058a6e89ae647d78387335b242dd2efe684fa4064500eafec65261210cf)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x18c7f585adfa21451cc4d535a0d8b82d51b71630661a0000a3f8c080609c9a2d),
      uint256(0x2fe6fce5b3c04fac5423fdc22cd2e5bb6346e4fa47889f72c86d97ee12860aec)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x17d9cada17446fd4b4b69b204c99d82082ecfaf263d0d41d8eae5015ca34b208),
      uint256(0x00c9c57931d54020107254ee8b6e1f55f45e2712578e44901e6d310ee61cad18)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x0d106be5be7a86780f269af2435d8f1545e66c4a4b902112933f0cf99d9b01f1),
      uint256(0x2e2bb9933c0cfd65a7700b72a184bd59946e040616f6136ef27eb35f566b7dc4)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2fe00fab5216e39e283bc7163f46afdc17f70e147aa04ca4886880e9a9b40a9a),
      uint256(0x2702d0c46f8cfa19bff493174804afdb2df88efc44dc5d4ec1e57c4bcef0e2d3)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1b9ba7dcbe9300397f7ce50208f9ab2c5a9defad16b75b53b54aac47a7c583c1),
      uint256(0x2fe5a7e104c2042c21846d6766c3dd972b4d51eb126bea9a3bc650a5f43dacd7)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2cc964272995b9282c3d77941bd15e2f941c8730123b6df1accb18107b80c76d),
      uint256(0x0e59778a403dcb3ddd8d2b1a9daae43af40b47561e1ea45c4b763ccbc4cea566)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x2c443165f3c9062792851721aad5e137637a6c405f5accecc0a9a2b9e55792a3),
      uint256(0x02fe13ac592d0869761f9930c87cbb9915fc2b0be98cfab67071208eaca2f042)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x22e3933eac38579a895a9cddd68dfe5facbe9c64502be91c88d656044138bee8),
      uint256(0x0d816f4ccdc0ec068d2b4c01b8e5a556eb8b9c225a389df00d1c7f7dcc873afe)
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
