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
      uint256(0x1c632ef3cf4581e304f955d92dba47fd897e240d6e8fb7b23a992653b7f3c4cb),
      uint256(0x22bf0c3f99c430ac69bf5803ea1758864565047f51f02e40d5f4a90065596905)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x23493c187d9e13f2bdf9904807779d79c8a7a9232d9bb8704ffc6527b41a7b5a),
        uint256(0x18499875206b56f67bebf51fc95936901d2f2c2450f1da1c2bc9c555b61c2185)
      ],
      [
        uint256(0x2cc0978efe5e49d697142f54a8f2addba920430030a59cc07e96f0ef4c3330d5),
        uint256(0x01ad58d5a1adf121432bbcd1c1bacfa8595e466746155b2eca58855fe0f66a39)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x149dcb453f63cf78ae90c5eb254dc4eb9076075181e6e3154a110aa8b46ff609),
        uint256(0x13bf13b2d6e1a8d15f941faadaba9878c4cfd2e3d8a4202a10e1ae0a318884af)
      ],
      [
        uint256(0x1cabdd301d31b03380009e3e29383be6ec58402fe869ec6c06dcd43a540bff7f),
        uint256(0x1e325478b41f40e90580535c33f370ab6e66ac6fe2a32ebf2f0ec7f3563f99cc)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x11a4c6557a412dc106fc1a85486d8d58b3c16fdc6cf6db99a712257cbe4e97c5),
        uint256(0x271248b7c77a2aea7f80f400da93d33b6fa6a341bbbe75f871cce3c2c9afcdb1)
      ],
      [
        uint256(0x3045d9717d059dc0492fa16e53d1b3c3a6b298e504c220b296c4814b2f678e31),
        uint256(0x261065991dafaab47cbb6db0710264def151c1172aace4290d3e6295a79e544f)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](31);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x17fe0052d076189e5cada418250a9b20deafbbfd292a984ad1baa25b3b9b795e),
      uint256(0x07572fc732e1aab8029bedb51eb5a3496a965ddd48ccf1a2c0f7a8a03f2f1ab2)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1bd093835e41b122c23ddc2b9a1e27ee250dfbe1e170b5ba6601377dbc003287),
      uint256(0x1a0ced5263cedba8c2310f882ff71b0bd07547eeb45467e3d55952359a0d2008)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x13cb8d9e722657129ae45296e7476f2206d1764a653c2337cb57718b8bca6436),
      uint256(0x19d4c18ffc3bf104ebde000c14658c6371a3938e2420fd243dc58ff4ac667815)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1ab05131392820bc151f84aa096907cbdc1260c9e776061163105fed11e86b70),
      uint256(0x1153a4b20210607e821f86da2305d106020cc190f75e646a77d9c298c565265a)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x262c041877c400ec8ffdec6cc3ca894355159811d8e4b9b3e1c787efc0a057db),
      uint256(0x244b10e5854207626f271fdbf0dc3bf888dfbd09e0886eead752c62c0f152170)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x2d5eb19800342a48817b4c70d54bc0bfb81480feccab689d0bec5378d82fae16),
      uint256(0x088559d72aad6b0c6c2bbe059f3b89313f4249501929f5fc6cad58f49f8e7e97)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x2e227ba31489a6f0e522f68e5a8df55ec5567bb0dc2cb133ab034a886f854e57),
      uint256(0x2675897397c15d48ff314d83823b0c305ac1408c1c8187f8c27af6e274a0a783)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0129d3a48bf911fd89bab0044fec43443ff7c6de660c35a5b64eae324281d5c4),
      uint256(0x013ae53b3e97f728a4adc830db0baa5dc85739f3138184f258e6d077135500a8)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x23dad15d91dc6934ab72b1a973fd62cff92e1299ba8b716cfc0721f145a22da9),
      uint256(0x1c3de86e4faff88aac5118324bc4d87b38e6b26da2d35cbdd5bdd43ee986ab23)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x05e2bdc22f45a1d6a3af353e38a2e37633bf8527184ed0c9078ffe063f9b688b),
      uint256(0x1d83d5aaf5faab73c7313e7472ab6ef7c610b52f1e7a63d910315580e6b92602)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2dae6f24eef1d4c5e944898476b57df19fb7f565b0e19f142e228f3f8b13b86a),
      uint256(0x1328d79e4801272d7afd07a80ec130c43b2b949606a2a2738ce0ec16d996f049)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x1f0fe7f7e91466597c460f2964c9bc903c9bd8d2df92091486fff8ba6b100986),
      uint256(0x0519146f6360fc9a45ed9c403e4c4305a474601c48825f56ef5a9c35b192983f)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x2c5a4615a018933e53bd8ef5fffdeb1df07428c71b1a2d548ac2fe882859372a),
      uint256(0x1d9190c4e040334d6b76933ccd3e6d1483d7f0ace3ff5a68d1a57e0c56bbbab8)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x24e99f8c5b270796c7aa94ff7ab60fcab03b0c0dcdf6d435385887efefab7732),
      uint256(0x11db768c4cfa42fde128277f4ed1a7622bf392f80ac4a0a4bb61063600c8bdf1)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1e9e3a843061058000606e4ba2cee35b1d2fee35013291e136f48142a0fb4ef6),
      uint256(0x27e7c17a26d04b72351879d8c18eafbfe6a253e076874e56975accc47c4be3ab)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x2dbecd47ad12b8614dc6f7fb2132fc1d523f15f88f4676974ce735c5757c1b2f),
      uint256(0x295b32321833cb86c763d82222cdfdfef9640597958045d14aa949d69dda0253)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x1f90769938a7ef3858a48f958e963c7fc60dadb53cd9d92a2cd0897b1ca41ddf),
      uint256(0x21c054aaba0db1188248d5fe6afbf721606b300c06afa4f8f6380812afec56ca)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x099de5779d3b35e7e1fc7fe04d7802fc83922d4b79a32f182e72557ca551b985),
      uint256(0x157064b076bd4c926beab6be2686fb245b9dc6cacb8e61966fe0df74cbcd91d3)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x2fe6f7338c11b52b0ef8ae40bb5777f335cc7ae8ecd423b98f71f5581840bcac),
      uint256(0x2f1534affda05aacdbd316e463636f71de7dfaff4fb38c1c8c38861ee6028f53)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x2880d81dba9d9c479202c7498b7ec680b64dfc3a2e524da2dfb097b07eee1933),
      uint256(0x1ce1f0026d687efff98c5d7b966c3fd37ed1cc97ed028b50fe7f6da0ce670b78)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x16f0594d001741b593faa078d2fa4122ff03d6a171b44434363a5673ff5bdc14),
      uint256(0x16799b7083e3b0a239a1db17fa5a50a161d38a5f001c23bc4dbdee670083d3de)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1cacfffff2549bcfa801b577aa90b172294d74a91e2e6dba8283d27c08f31518),
      uint256(0x301a59ef6cbd2da44228f005aaee5de8d70922e113f07b18e0a2898234188d97)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x19b1a3abe5dcd0dac79f95f2866eefb5c766b22ec42a9ab5749eedc09e714893),
      uint256(0x08339e372fc567588e7b9ca6085a1c36dda7b01fde9936c21aabd94cd48d1508)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x033ef2301cd42ecd76befbc7b43ab8bd6cb388fef1ce0a961775e3e805619c84),
      uint256(0x1ceba52fd6aad625d1772bac045b6ece2efd778727ed4c9d47bfdf9728e86744)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x15233269c78bc03eada868af5889a6fa40e9ed61c169be9cc3ff97457b046875),
      uint256(0x03979d5a34c47afd3344902ec89972bc33fc6cbf2bef086ccbe61946c9b9b82d)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0672eb28ac695a196421179ddaacbbabd65fa6c9f01a3457edf326a1b8b2c8f4),
      uint256(0x14118797d7dc70126cc9a28fcf7ece30bf8c2a68ff5e51c27d6290f6166c6569)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1f6ed72a7576ce7ea8fd4f430e58be90f4403b85834b2ab4b549c10cd5c1bfda),
      uint256(0x20ca4c4bb7116f8d2631500d98749856ecfa7571ccc7cb82cbb7541c67bae0f0)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x2b5216de444b755b33e9b078e5c40d947039588c855143c368d99653a3cda3fe),
      uint256(0x24956f20fd630c6ef292e2917ccf06ea2e0a4b12bdd0bf04773bf60f88180379)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x17b359507f9247658b78431ddc951c6c76463f2bfb7363d57b883c01918d258f),
      uint256(0x07cd0488dec853389af806996e1d231d81fc0b7671c80d58af0bb5d67be0c37c)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1f30ace602e6c659e812404dab4d17a50074bc56b3bc8570fa4d0246775ab08c),
      uint256(0x2c99f75551cbc173c9fe7b5afc6c535e98cfd895dc3a9718d95342df264042dc)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x1b10dd71354c2fcc357f33dcb187f1755d5cdd0ebe563b054be0c58b31d2b6fd),
      uint256(0x0b315288c3efefd729d375fad3c6867711433a1313c3990dad8a75d1e78fe072)
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
