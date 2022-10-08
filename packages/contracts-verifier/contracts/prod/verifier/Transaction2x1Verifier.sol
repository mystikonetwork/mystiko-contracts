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
      uint256(0x1b272a8f69b1b454ffce360719a3563225fc27480158f1af5db02d3948185df6),
      uint256(0x20ef092ad737a4ec0c6fbc2062c82bc53882335eb4ce1c86e2ce126a9266b28d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x08ec13c177811ab8278475cfd089b7e81fb26004c8f9201e5ac4892d671f66c2),
        uint256(0x11f06d205f6b52ba4697a033732b0b8571fe784c7187db7fd67d217d9a89cbd8)
      ],
      [
        uint256(0x22041cc85b082998e48ee3c861aa12285f5e7188b60110597f2b38ce4cb9b87a),
        uint256(0x09954431b1222115935a16bc534a37121915dd64e7c3ebe96452f1fa87d3032c)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x02088c2becd8ff224df47ac2fe655d8cc6bb753c6c16915bad5742b5cf8b9d0a),
        uint256(0x09e437a08ced1983da29e4fccac261fb260269fe6d63e2b96623303a4dee73f8)
      ],
      [
        uint256(0x134bbc66c0c0e3da80f2eb5e7394f3b5608db981188eef215c20f02405ca3ada),
        uint256(0x2375243c73f22c583515d0b82c7768a36725ac905bb14c0b0e246619c7191cd6)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x023e0b02408c99df4acf94b4381f92593b3ad4e6c686de8f5fff74bc057de8ec),
        uint256(0x0e93ef65866b30a7c023067fd55f8e8aa968834d1c84d44d42e9d237ea7a8606)
      ],
      [
        uint256(0x047f1fd2ef7111cefbe93133b72807b60279ddba9d3a93d9e49b4629d51329dc),
        uint256(0x03f15199a1861ba587ecda48e5386b4ece9a6eec3e26cfae975f193295124029)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](33);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x04a616156499fbfb029ffb4dbe3d9c950a8656f828763cf86e2026cec756d55a),
      uint256(0x0d9c34021ea03998df8e9a426b2cb10379a05f69f23a83fa25bb9077d6052e79)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2eea0fe933276a2006a21da70b2ee6cc3abfbdfe599d2c8a4df0bce665c96372),
      uint256(0x03073541567daf5742c4324b6a416e551cd1d5124ae0f6c783d9c62d2e3cc0de)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0d025091806d5369f2d9bc6e589fc6d2f04efccfc01c87dc92ce2e1982883eb0),
      uint256(0x11142390f1343ac1fb8f45a2d8f8501ba19803459392ee1c7d92a5868589f892)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1dbc837a0b2f8263259de3894eb2be9010d2961c0f897df677870f81f1fd0c2d),
      uint256(0x27585eeee99fe70f502c136f32980d01b4bceebe264f1d8053a46b5ebaabd2a6)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2391986a9cb9d1d3ce82f1420aa0dce908edfbe1bf31e6ce0c99c413b4b0cfc8),
      uint256(0x19d33eb0df37b97b43b0cf5ff835f43617475550bc4f5f1ddcfd19696aa16ace)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x268d35d4aa19acff9575e6a7def31b4dd7bc2738671d5557a6b0f449b8650a45),
      uint256(0x0e6372f8e94445ad2f8ad67a0c57c538aa74fcf7e5193b5048da227c738fbd1a)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x033f6cbc31031439c8e8b9b6672cb786ece8cb6a6d1d10ac0037ba3704634203),
      uint256(0x011a9c4146091d7ce2316520005144ce9b43f216b9e704556818184711c42ec7)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x2d06fb0f4ef7492f62ea44b6a7776f42f60e530cdb734e9a1921715ce7571ecb),
      uint256(0x0bde93979bb05516d5d737a43e5442f6f5d152132ae34938e2842247062944c3)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x04c783f1b8b7184db4eb00f17941358d191a2b7a34f4737818d562122feadbaf),
      uint256(0x0fb770072341da977cd1da0fb30edf2a40cf0dcafcc1da024b648ff7c96d8c4d)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x0fad48104f927884d97006ef2a7dc2cf81413ffdd5e1e8a03d414beef027be6f),
      uint256(0x194582de950b6c60a0c4bc85edf8fa3f95e7f86f66b27f9d0c0aa313abff5061)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2d83403f062afb1779ca40e7e68c0100ad31f34fa4c09ab0611a007dccde6330),
      uint256(0x1e2e8d2b524d21b8ac1fa4662a0645b4485971662561eac82fd6b8dd77bee61c)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x22a26041682e67334da1e0f4cd3f0c46c568dddff61ce1369e219ac20537b960),
      uint256(0x275e5b6eef7933bf400f93b7545939d55aa8698305f118f04ab889fdd70a6aeb)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x1c5d54260b2f017c093fada1ff77d96ebb64f2703fce2f792def4bdf75c52a21),
      uint256(0x09392a47fb4a17031592f5b952efcc41b9f92cc65dbe226813bbf9a7ea27f379)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x14d12dbdbabce9d3b42b243718c7d3e74aa8f4b7149d3efa6f999dc4649596bf),
      uint256(0x01a21e7615d9b8297c81e11b0cc2400096d707de48d487974b3732d05941cc0f)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1cf72d7713d268667de059c957a6c69f959d6c12b11f69d5bbfbc69d2e7e4fe0),
      uint256(0x0241fd9ca3f5df5be922f0f2ba1e2a0330317d224c3d43d6dc644a903e85d608)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x170b1d6838a91261b7bc9c2a142d8050dd2d2da438bf90272660c1ad28984063),
      uint256(0x2171732afee20a1afdc23eea74d8c47c32e3a6f4ba82fd93f7322de89980f80b)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x040713881c0b55850ffd37666fb270e9d5797d5a371d9dd07d75ea44a3c730f4),
      uint256(0x0bc7adb49a6c21071e2703e5925be6d153dce553ea71d2c910f4ae14e26ae9eb)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x24983bcbdba33ea0970b28e44d85e1c832345532fc458d1539d38b893af4155b),
      uint256(0x17b0fc5c6b5616e87781b8e4ffafa84b44f45c89e45809168007b1ba34fd7276)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0fa7544a23074847f93590cf0c4c0334a03a2af263f0a563287b4ba4d46b2c4c),
      uint256(0x26712c0481ede431cb7008abc58c80939ea7e671602fae7a16893b3d3e3e5174)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x2d58f50ec98383b3063fc0d6ded21b1b1522a962d78a873a0a265c7e7751ffe7),
      uint256(0x0865cd9f7fd7062ab61bd451af761bcdd081aa4aec786044399f136b7ff2b319)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x02c689acc1fe8207e9cf421125b1651bf7f9d80ab27c7d72cc2e2ad6c9c4f24c),
      uint256(0x252ce4e6fe55e18329551ff308322c67bb8325e3202eeaebc47e2b98586faf63)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0d3a7cc9b83f839837563ca3ebe524f6dbc7258ae9d8dfdcaebc8e30a18969be),
      uint256(0x00b15a1f710ddcbe50305acc9408ffdec0d36d07e66ecde333dfe4e11f356701)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x15fc78a5da07cdfc1173247503390ce911c6aad3320812be63479a3a4b2dfd74),
      uint256(0x1b5b200e7455242b6997f453aa805a34e061437314887bac1e4cef6c662716ce)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2735617f672176ffb75146d9e0d799234b611d426fa1100284a07c787ca59a5b),
      uint256(0x09729d5201a2aef5473a1104b220739584e7186cec279480e85657cadef37d50)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x19580d8451ed4d78775cd582fa4f7ee04f210a1f8f99a0bf6ea10eb4ac40e5bb),
      uint256(0x28bd645125c7fb57db861bf91da3b78cd7aeed313ae55f104be44fd9f3af97d7)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0a845d1b57d2871a3b33c35921b73df68017ba4951d04f2a94a9ee8118171c4d),
      uint256(0x2b76d9c49a0b43977297be2f37fca1d91845d6c1fca2177707c6d84de4fd3dd0)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1355abf74017b364dcd5b7bf7b1c5d69d6d03acb65c684c5eb3f3cafc8896ef1),
      uint256(0x2afabf459ac061ecaaf804b97f58408ab6053a720586256e97b3b26ad0af4a52)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x03664afb6c9884b91e367cba3cc0a16363a9152e8ac6aad13cd9c4637d2cd110),
      uint256(0x16172bd556ba9cf8e1c074dae8a954ca50f4ff46e543fd65e1688ec222860476)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x2f942b6ee32196437804110cacad7799dcdd2bc95e74eca7e38931e801921940),
      uint256(0x0c398c28014663662ae68da413fc5e5322e73efc47dcb362c561dbbf33067a19)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x147c0dce6bfe8994f104037f0fc9d676ccce98a73fc587904b61cec5fbe6fca7),
      uint256(0x1407c0c957af3638554428dab16378d8945a1c5a58f03e273918acfbddcee21d)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x19da1b5981657f184fee9d87ae53922b794ce930215360e8a76b9ead17820c8e),
      uint256(0x283eaf6453c1562ade8813061048b596b119117f266eeafdc33e7700d85a0da3)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x20606283ce9fc886566a3a3bbfe7f06dd722ea7969f0365c47906f784b15d70f),
      uint256(0x0c7fbdca29abeea19a50c3472af04bb22327862b310ddb7d24569487b59029dd)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x0e557a9b780a9ae42341a077e9ff2a3c89d49f23d440598ffc3f7cabc7d2add9),
      uint256(0x00de95fd8bec90e6545227b0f69b95398d8d1895cfe3a9cf9a53120599ba0c65)
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
