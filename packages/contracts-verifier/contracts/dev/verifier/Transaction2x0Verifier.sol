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
      uint256(0x1da2894fc4f2a3f4ed60fd74de9cf824d8b30080c91d12266b63834a7442496c),
      uint256(0x25e027b2d928be274356d5b126406b5fe25cc8db98bd28e3dae3e4d1829e85c8)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x28d5c65d53d41a4a24c6a56b5090927685d9f8e4d2f542e07da58aaac111ee41),
        uint256(0x0f88336e9c074054c246f5902e18067c2f5032d2d0a7cf48193ac345782726f3)
      ],
      [
        uint256(0x135f58bcb6ff3ea805541f805dbfabb18a0d11c1de2410c7266bd8e965c24144),
        uint256(0x2fcddb8abeecf5e0a5958298559d013c8fe1a716376b77553eedecd5f2a87e79)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x01d7d48c36055cefb32955f21a5935a8d1a08dadf53e4fa2d0eb27ea542b26c7),
        uint256(0x191d9807e340039db2f0e911d9e26c36cd31cb3a4f1dde30b20f7c44b232f02c)
      ],
      [
        uint256(0x18be7ea06ce0cbecec71f2b9b704cb417cf7871ef1f6c85753bde56d9712e740),
        uint256(0x29af066638a83aca67c108d0a02f699c094a2adeccc6abf43e18b74278581caf)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x115fc979a9a2feac45dd6a4b871b90914683624f258e276f067ab4eaf43bf769),
        uint256(0x04cde34b0716841728fcb0a3704f4e535212635711decd0ef9e663a3608497e9)
      ],
      [
        uint256(0x19b60dbb5ec06523d41b0949a3ce07bcf1d219b63c9b0223836f66f38ba918ba),
        uint256(0x2b23d6db726015f874cbe03aaf2af5aeec95a3eb2a519fddbb0b788027b9e32b)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](31);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2e6fea39280efadec91a6cdff1c68f400b29c6e8f2872cc7b266a5d5b5853157),
      uint256(0x050aa096ec90d1ea885666ed96a586d0c4f48b85b8f106611b4fe864fc8e924c)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1cbb675ff9684f3fe290b25118b0fa1811c4041bf1fd101bc6fac24873ba6655),
      uint256(0x04615121d78d94ec19bd29bee87c003fa20d31660266e8c5dfea7b279fcb5a83)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2a05fc6527769fc268c86579cc734203f2a98dc00f505bbaa47de14848a06a1f),
      uint256(0x2201e215ce77c6fc7c83b453c4ef4e2828d59ef84121660b27ece4b3c510d848)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x24245a4a72c86956de840cdf7b65695c16761071fa7811ce2aa64ce214b988ff),
      uint256(0x04eaf5fd238964227f1cc30d17a1e8392f5b924282bd7137c101e27073db889d)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2b64ebe3bab7bf22c747bc52f2233359c3a1e9e4ba9ad73adc00f104dd2f4aad),
      uint256(0x0183b480bfdec9b1dead3b6ad33c5d07ca7aec191bdcd0f9c7c7c76a7cd55f37)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x2e002c34aac032112205deb5e3a6c4be8b0a66d2b1890abb11e0d7a43dd4d382),
      uint256(0x0e8966d924bdd0f0c62d0cc56f1a5c334d697947ac50e368909701fefdcda32c)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x003bfec2ce1381a47ee9759b0f136bb57f84e47f6c3fa87184358bf6b15e4563),
      uint256(0x02342f53d7a7a33f9b188065ff35977e182044f3ad61770aa613ef9298c94377)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0e805b7745c3131b89cd20097c46127bc101ab39611c70e40da4dcd963ec8316),
      uint256(0x25d49567445962d28aab341f47a62b4c50b556c9711ef909121deeccc08e9b25)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x201353e9ce62500f73169fef48f32bca7c92a0ca2ea6d7aef137b3a82d0b6593),
      uint256(0x22659ab4755c8016169ae22d08e1375452ecbea624126a0400b96415e8d52181)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x2f8e9fa47b913a269d0a7d8a5753509c0b15dc43176cfdfd32792af69507675b),
      uint256(0x0b3e58183069a363888721aeb88fb254ab780c4702569e25d7de0408badc1c6d)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x302426a2dcbee89d27a265f833b389898cf1dba63f8a1214153121db794ab35e),
      uint256(0x27ddaf679563e94d01d2d55755136456e82f970da93fd2605d32d04b21991cd0)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x291c090302ff94730784ce99b7d48d4273d4091d43425730d8e773fcb4b8103f),
      uint256(0x01edda4edf7f9302b1dc74fc7f604a0963bd832c28caa795afe3ea5bf4d7d686)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0fcf499ca12cf828584270a1ab5a2c2d22b29b394716dac378b0142ab666d3e7),
      uint256(0x06c1a8394eee9fcbde4df93d22b4f724488f6f5b43be5369f57c21d8b42f2efc)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1c7ae8dc64014e09143810be4be886c5f327d12f6e62fba9423d819e8be08ae3),
      uint256(0x27c238df7a86c35bae0df8dd72d73cda5b3ab9222504c239a558c3f8204037d8)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x10bbc23da89ee13de070d4177a681960bd3032a982f04ce5492b64ce9e196751),
      uint256(0x1f25894de6b6bc84d975cce3d4df5690e861f2f1f2ec7f101ec26842f6d61c87)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0cfcdff7c6e3aff4c892464599c9cddd6c59d2ab3868b3c72ef169e1315f95a4),
      uint256(0x059f7ddaf634b0100f1310e455a5609d3c5b8aa202cb8d85b19fda6c242ef6aa)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x13376823d4a81d9f01f11f5efd1f69d736c4c1d5e7ea511071caf2fa1bf46570),
      uint256(0x23291022ef45d7e8dbb3608826e36acc27efc334c0d39613e09104ce5bfb4d50)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x1f462ba90b620dc6e4c82e217b80ed062fd8d6c3f621d5eec21091e84d102d4a),
      uint256(0x1f395ad94284ee3e58169021ecd8c6debf04a5469b82a9a50c6bd58acc2e234d)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x23cda01ee5b5b4502f84a70b617968e604572a7e6560bd2fb1b09dc696e44c19),
      uint256(0x15acca0ff6bc216237d46d125410aafe9351c115c771207340f1b90c1f8b9aaa)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x06c5cbc2eb37061b6b5192accad0cc268ca3584b7bd5d6d6908ab7a5981e8e3d),
      uint256(0x1011cf4dd929e146a95d6b5ce95f5cb5e842538a0bc3cd854fd1638840d80779)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x178ee64f2bef9159fce7dca9f0e0f30db0dfa9d73a9a9d3a5a54c02369cc29ab),
      uint256(0x2ca12e96cc4e5bffcab088965307559532bafdc8cf3cd6428c550df72daaa6c3)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0c1c42ea6d0877fe17e3aaa67bc58b5958aa3da7fe464d25557ddd07f01958ca),
      uint256(0x19115ec91ccdd33501a1266b4ecccc4d38990c1acc836dd85907f8faabc07f7c)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x2fc0735babd8cf0babf4314330480b45c402d0c9910d7c642514599f36b13ad9),
      uint256(0x266638c4e3ce506001d5dd4f16a35ad2ebce23816cb732f0c8eca5946d487027)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x30455f5fe4f2b2faf14193db523cf866bb303d076f94e29de94c008a19b30487),
      uint256(0x172dbb726e385ad3c3f63df29cf5be804db6cbc68a2926f98fe8440454182cf4)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x2f49644c06ed8540dc6093020dd2d61f4b2b3d1b234653291d0d642f58dea95c),
      uint256(0x15a81fb3059f6d4fc6dd2d3b05edabf121f058f4a6f3ae3e5e6b79dd619ec1a9)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x1939ae83e93fc8750a20cd28a466fa4799de1d09c0d052eebf855e222bc79c43),
      uint256(0x1f15757728d12410b6149d0f36c4b1197ce4542ad8fbd41dad4e21acf532b283)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x2cc955d1435341c752761e7013725dd42f3b0ea9d3cc686a2aeac0f702d8e3a8),
      uint256(0x2234f4fec2728db142a8fa12b2b42ebaf351aa8324c0bc0a9cf6a76b65464efa)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x21e866c8f590d27bbd282ac4e620afbaea60ee1de535aed7ba36e1aa9586b045),
      uint256(0x1eccc499f3076e3feadaf7e61aa2968c4c1389a81a40e7726ef0690fecc83dd6)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x2aeb14ee548030534232221d2c3789fb3111b87cde727f5d158e660f7e92cda6),
      uint256(0x060f90ad3cd32e5a6ee2b8028967e1b94382cd789242dc0f49077df6c7d24bcc)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x287cbe86ceb4760c73b435cb5a03371358768290a6b22af26cb28e91156adfd8),
      uint256(0x0fb7ad180072c5866bfa084712fcd1a1789c12d9354d873339e17314b2da0da6)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x2378ec2ddaf9fb7ea3916cc377e3f0135c6c761c3444f3d1bfc38b22b1ee1ff9),
      uint256(0x081551f5b05ef66064a903d2a66d9e50284d41dd3e852a155118fffbfa6e7a76)
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
