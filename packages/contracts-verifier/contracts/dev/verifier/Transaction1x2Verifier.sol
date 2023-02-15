// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0489a10259e71f3df3aca97e1d55c58ac075776f7cd7636a08752f0ee55f76b1),
      uint256(0x18d448b93c2a2a65a57c0fce1c9b81fce4395f0d825ae159bd0e990dad5fcac7)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0f1dcbf1873546d5dd9ec8b810ee7942e9414244c9b37ece6ebf9edd133df07b),
        uint256(0x17f978f9c20ba5b911a353e5f7cefbd98ebbb9e06cc332a70bcdc1d7ee704f74)
      ],
      [
        uint256(0x2f5dc8329a55a991af803ee9d4f9a3d4b5782aebe706501c3933c60d842f21d8),
        uint256(0x15e2400c9de53778ea9831c066bad43d00098cf0abdf0018e6b0dfc4f3327900)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x07ab6524293a24e36c2960cac7d7788a204b3f4a34ac29f6a8e4c1b2c02181ec),
        uint256(0x01e23baa7b15c6417fe893c41de68454a9499c2843f796fe0ed227d00f6dc9e4)
      ],
      [
        uint256(0x2e89a7b0495be2fd84d41edf61adabd9c63bfb66008aa98648908f1bf4cf6ecf),
        uint256(0x01a205c7eca6356587fc8728cdd0a6a51245dc6740f54a256685699804c6fd17)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x207fab676a761a7099c30120b456d3432e6425cc0d875442b47d139f3a97a0ff),
        uint256(0x2d7f2b3d86888498e0fd618c5b7af32b38cd2bad4170f46bbc700b91e9bd9e8c)
      ],
      [
        uint256(0x1d0b03405c39ef5f04b2db35f453e3f20db649ee92d84cd56dd0a651b0f9087f),
        uint256(0x068dded24a522a42c99e5d29916e7c2bace798793408fc3a66240332bc39bc46)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](28);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0dfcd030e8e999be673e50a79f20b8ba162c5cd39f1150f7213b709b4ea3ae34),
      uint256(0x0ed587fa7e43dda33d9996888d10546f123af984e9d93439f3827dfc795676d6)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x27b56a41a89540ce6ee1a1b9f602d4b63cb711d808d0024f84ac105cc09c7a4a),
      uint256(0x0e131f2572daba1c7a1e3d21e014b9e1bd9222afd03048cd4c6e501133491896)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x056a2de3834ee5fbc6ce7953c041a5f082ef76a34ea5646cad04cfd79742f208),
      uint256(0x0390d4d002fcc57bc9fe8eb3463e8227abdbe19d3922da1c7e4073bdee779d78)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x05eef406f3c85b65b8a7da8bfcdfe50a86234effcd60f3333f745fc628e76b5b),
      uint256(0x2efb38c0d6693e926ab8a35bb7066cb85599105c23fc87f8e96a05aa3e0f79f9)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0ce2644b6ccf9f7fbfe6cdfe41265b861958bdad8b93e9fd871c3fa7701fe263),
      uint256(0x11782474f5cef83d60ddb97a9a36ae6bb3ace1121bae948ec7a9f0610e11587a)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x091c49f5c45fb5c12a38a4d127424f46f96885adc41bc82b8829095adad63f74),
      uint256(0x2b121acca471fa1522f0bb7ea4d2095698bfb1f598039315b4656f7596f926aa)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x2bafc6df88b4ebafc44445048604c5758de8a131f6660f8938ab8ee898dcf385),
      uint256(0x09519de554a3f7325a6e6372eaee8378db12cdb2a2bd9390bca90d94f87a9aeb)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x2f6e081436dd9e0504a947f8498cb9bc1793169de6235e18ae4a7b2b696d481d),
      uint256(0x2de917e0f0736b7c529a6d2a538ebcb8f206b1c8bb0ad4f7d05b95d44e44e36c)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x1282ecc8c6b61b68190b8d4ff8b0dec797ff57812c7f91ff4d18146be2f5b09a),
      uint256(0x1386f46e485dab98dc4010aaf723a662d2a84597e98d90d8f7db41ac3e2e8fe9)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1e0a61e0a79bfd4159cdde629367dc8dc56973d61fb05c19c76ff2e88c50281c),
      uint256(0x17a21c20472f1936050ac35126e66771767917aff1e627508a33c8cc70b95183)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0158d938c13477d0b12d96ae5b294e7407cedb042a9f96624df246ffcbe48079),
      uint256(0x02a747df915d7e6fb16fd3374da3dc33b465736d421e9faeb9d3c9705e4b336b)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x2f335b9b0957bdafa940ce34186e97d22f0d95334831c7d96cba2c2f5359b7ac),
      uint256(0x00a76fdaae2b5228d348d2d64f9926b2c0aff080ddc7011d55fce7c9382f0389)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x2e9f20f19b66cef1fc3010e1b5041d5b16605c4ef92ab20cac215f79969548b0),
      uint256(0x27690be68742d4cbeb18b378aea9fc90349575f0dcd7a60d3fef498535585415)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1bc87835a9ea139344b6c91d62e71e6ed1812ee3b56b1b3038a0fefebb8b4298),
      uint256(0x24c1677ad52a10a1c58be877c0a975bd29350d178ab2bebd9c5c0e8a1dfccc58)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x2f7546bca109d516af83b8b8e422a56b699fe964a88e7453b70e61da506fb751),
      uint256(0x30556833cf220330fe07d56f968b0ee555d3ddc6e286138dcc7c41e7a5fdd76c)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x2ec6769e5b3a2096353eb2c9361062f236d0c8e6a35628c87072d5c1a91d1f0c),
      uint256(0x0382e0c7050c77c5d24ee3db055fb4f1b95a0ec437b1c2430daa98a447be24db)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x09b59ce2d3ddebbc0bf22fea29bdea1969e2bb4de43aeb6b364cd6021a39cc87),
      uint256(0x0c0c71672bab925846bb33b065693ed0882e4a0f40fa2ea9b4d99ea71ff78baa)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x04fdead256170d41393b1d80017cb6a12853bfbe7645f21a633d11ed205a3f18),
      uint256(0x17f34678419f260bdffd2fab1920c8c18859759493cfb6e5a1ce2a6a86ab3e8f)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x1f61aa5b3f294f997030be286e98a5db402b2422806b4add67b5f3d5b1550d92),
      uint256(0x1e6bd87b205565d5278449ecfd0301ed5e7be2ad76ad84aecec381cd466d58a0)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0d465f91bef80f3ab1d5c1602fd62076c21530637685c4c1dfb9f609574a8749),
      uint256(0x093607e6d8c1f8b1c133a20e76d8d094b8fbd441bc898d1e3a665be1bfefde02)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x17947a8f73ed5b012530196904f0c5fe57bdb2b93e288fd52ef5e4fbca0d5ef0),
      uint256(0x0e36b300bbc67474bd4953bfa3abccf652661273b803401e071d60ec024781be)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1d2ca87a25cdc27b5602d3c76ab3d79178268ba02e6f90c1c6f3d461e68c4cc8),
      uint256(0x29b1b6491f14a34943e01cc88be890b270124a01c9724ad815e9e1c93551f65b)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1bb0b1cb2f4a099e643d5d8493e68b4c089247721e4a23936f1fe7fe855a9dc0),
      uint256(0x1a9bd3c569195f7d72fcd4c8213268d234a7f52119a26514bebe8f57d444a25f)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x29effab2520a90236a2798b12c131afd9b9cdd275fdc4b78c7c565f75fb1f327),
      uint256(0x0f3934d6ef1a5fc56e16e2177158dddb67e7fc1605f62f3ce9db550edd360ec7)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x04e72755ba5521bbef2400d9c9a2243d05bee64f1068897ff788a8f406ee8c09),
      uint256(0x2a00671f23e88c6f629ea9793795c44b8a2782eaf5de73809346194de217cd9b)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x1bbeb1e8d9ed08000c9bc7e629b92fc46cff4bd7e439db5ced0d85cbb3a4cb0c),
      uint256(0x129f798fdd8d99dd565069fbed9809c73c8c73bc32d22d1c6c13a5b2ce866640)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x0e9e5559034831db373fee5ec4f0ea086380fda258550f39cbe16655d25efecf),
      uint256(0x0095fe2ac40ec6ba017d5a798b6efd8be52d9b268a1a99cfb9ea77270244fef2)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x20a95e44f135e0c733e0d8a3262364b23c106355e32d40830e2bed135151b409),
      uint256(0x140413a9ca7a22604868b065205320ef15d8c58271ae708f3af1504b6c08c8db)
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
