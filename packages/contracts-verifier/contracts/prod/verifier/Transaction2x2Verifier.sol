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
      uint256(0x2a62321d4268bce1ed613cc4572a03a9f70e4793a499145321e41b54f5828539),
      uint256(0x1481bbacbec0b0f57a26be4a0891cc0df4c36414bada843604ed2da9e3e47f33)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x02b618864d1bebfe659c9264a24e84abbcc50bc4f7d5609a9cafbcbed846f34a),
        uint256(0x02be083f9cccaeba3ca62fab7d2f7f20d9df89e2e96cc4798ab8ebb4223c9689)
      ],
      [
        uint256(0x2bdb44dd3de53367ae1145a916828d450622d64fe87fbf58006e97c6e5a843ae),
        uint256(0x15c90ce42de3b879b7c071c522a17e107dc128b3084a542228ff5158bb32b0a9)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0d0c44a5a4196948a4a6a1ef48ad521a200d3af173b90b4aaccf0145c3899686),
        uint256(0x18c63b401918660f8a3af2e0fa3b130d535036cde9844af16c8f6a50d68e367c)
      ],
      [
        uint256(0x302412e15e2aa029267ea4727e109a013cb3722218ad2942d060a2e329c5b8fc),
        uint256(0x1c2681ad52927866c0422e8c48cf02f3bfceab4f87afebf9cca96a5b1f014e11)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x215f5e6449b97b9bedf75a693de1532719cbded61b79b4e123f2c83cb83e13dd),
        uint256(0x14bcd25c69cd4f49d997d375ea96bd3d6eb73d6ef28c3070c9cc6d001c78c5b4)
      ],
      [
        uint256(0x1e5ce98f96c47186466c6457f0e48bccc01dfefdf0a076527d88e576304b71af),
        uint256(0x0e2cb13773984a98d0cba1f4bcc78681f4a40be5ef74fd3c5b8d1ed55cbea13d)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](35);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x227785cf1d9b2ab14e75a67481d13bdc156a81ea1ce6b9fb9642b333f19e17a4),
      uint256(0x03e2597869272c11d58aefaecc57bdaddb9116bda7ecc7e832587ec130f20802)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x14b517089410fe2990ac2da26fe96aa24e43f985797424e433a48d5d8e10bef3),
      uint256(0x04a82628ea42bf72d8ef998c47ba3d70a6767933cd26a4ac5debea8f68e63c94)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1db3f5483d65b033d6281d172b23e1993245271e986973306b072b9482ba71dd),
      uint256(0x06e7be197b480aaf5c0ea7fc5ec5c0ddaff4ea1d8ce31c15e4e79bcbc565308d)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1d701b4c3a3cc0940a4f13f98ecf8d8f780cf34b93f0df6710858a53252af4d6),
      uint256(0x03b350229db37c069a850723b219642962d4ea7624168dd8268a1b1f98671c4a)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x259278b94ed634ff91c7f2fde309da8b7e40aa7ce65a3e6205f5ee17a4ee3077),
      uint256(0x21cfe9670f3607ddb1180f84f6697dd6ee2d7bf2ae3410adc70d1d3e04e88756)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0de79cca72e542233e6cd82c5c23324c090d684e469054dd9e3ee35dd417c0d8),
      uint256(0x11592fc096375e754c539bdd3a731671ecb5efe212e451762fc31b59749a2c43)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x10285d3e9fbe7fb412c41aec09865653d9628499d84cc5f6cffbec54a54803ac),
      uint256(0x08aa9d869e85d01fa688fa46b7c0bfedf19bb649a04a4c1324bbb45e60cb63d6)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x1f175b6b693d5229893853aff16d1d234265e2b26fb42536e77c206a3430743e),
      uint256(0x14b7a0462ec3b7145c03533f5f33f3c781c5679b68fc695f4e13003d397555dd)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x1dd69897db6313120103e8bddeb0e00542b4b397fc9927f4e26348287d1975ea),
      uint256(0x2b2ec57cbeec174a0a115177ac2737ea80abca588926ff032943d82a22505206)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x10766ae02786038a415873cfccad64fbb2c68afc22a6db39c63a1980a7653c6c),
      uint256(0x2f6ba96487749d373bbed04808a0985568d75591fe1a5bccba636c43e535530f)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1996dfce7826b344ee798b94f827ada26ba215479992b9f712662e0f97e82553),
      uint256(0x089a3440cbc9193815d51351f3becc6040ec416502e0b32771ac9352e5ad256e)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x06af6e099a468ab4acea3a9e08b5dc9e696f0860049b57f2c5810f8d25f689ce),
      uint256(0x2c8e8be6c2c4dd55f017d925bd60c54b400c75a1a2746c6a33c652b8d503fec3)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x20b822ca549507db80d5501534915588459b237d222be703e3f89fcefa189e06),
      uint256(0x0280498442d2b8fe7847a1b99b828c66c5a4517ed4bc5bc070d3a770173182e2)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x05d278a5f9e30db2f56f98a606d0485f96444dcd2a8ce67ee20101a87b5f0a5e),
      uint256(0x17fdd6475c5fa5591f6d0243356d39497f279e4e2d5abd745b88ef93ab88d001)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x140eaa68e61f2b21550c508a23041a6ff07aca784ed7592d080fa1162d07b4cd),
      uint256(0x13c7aa60de741e9ab3cdfae80aa8ff22d2a5036b01d0390e9e6b02a94b92aa7b)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0cdec1d9229fa4125e3eed23cb1c594567a8430868b08585fbbfc73effab6346),
      uint256(0x0a2a1fd132e88a8f34fe702d45fb1737e794c2fb8e261ceacb9d859802b04f66)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2a4b0370018ce1d2f3506b4fcf1af578ed2a32b270f0ec51c2bc39aa757fcbc6),
      uint256(0x14873e16d32ffc2688a8ef2dcf5bf1826663359e7fa8f04a88b1a84f972ebe52)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x2aa09be901841a2c54e4216f719dc1ac8578e43f6c8eebc1171a2f4e5e538aa1),
      uint256(0x1de2784122f60f92301289f89866f9c1c2aa777ebe6315e03563f87f8b5b4664)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x1e1f16468ae760a9d863006a0a067ec17d1f11137b6fc92544e84c570d6bce6d),
      uint256(0x14fe51d6365f07d73ac23189b736a712a526c2a18e92da32228ded3c4034b8e2)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x2e25f219616a8fec8e5613568ec39efab18c1385fd41291a0b41b60094a46515),
      uint256(0x2d2229b424ca594e332847cc62dc3a9189ce88ae0f09bb183860a122a3dd2426)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x24ca7a59667f129394f44655170b35db9df3b65532ebe11ebe7b6e59aa58e7a8),
      uint256(0x2468cdfc50302d8c2073bfe8769e290555d91b4592a05a28ab6550583cb168ac)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0744ed91419b5a78ee72913daf4cc96b3fbb3c6f14fed856eeda80f7e68bac5f),
      uint256(0x195753f5ff3912067fb2b42355aa5773859434fde44b91356f6beb428440700c)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x0f9c372a788776e2ff8617bb951724dfe22d19a16bd2a42292734dd9db6b1c97),
      uint256(0x2ae926ccb4de1b5511e4302aa19ae1a231cd78d096b7006f4de53fb0e7ae6a82)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x008191b0b2e4850e2120c46e8f9eb119e0e17cf4c648bc1116c880d5b4aba6c6),
      uint256(0x1dcd948505f0480a4059b2eb5abe0348e9f82f5d047dda42fa6d6e617fa555a1)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x29be14dba56e45816f569643ebcb4f7c9d33d5bd96a4cfb8e9a829805701d1ef),
      uint256(0x2dd2080ae054b0527ebc6e4438ed3830e44c718881b71aafc21e3101f7ded8b5)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x120e11e076136cb33aafc555fc7c35281b7a06c6f275eb3a72d873a5b51e8b32),
      uint256(0x0e4cda767f749e15583b27a36042f5e8ac7af31242c5692931ae9ab1acf249cf)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x0f6a15a1d1466681dddb4f42573dccf29547fcb292adda8fe48ecceb5d30ebd4),
      uint256(0x243cdb15085e3c52e57b733ac38c5e091e6d30adbad06bcb25b93e5d1eeeca7c)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x25098215f093d7d0d3443615eebb009dbe1741bab0188efe95dab202f3e2503c),
      uint256(0x0ff74128d9a363d1155b848d7dd3b1460e01384c4f148b858a8244056e32e5bd)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x019201823b5fb03bb8120151a183c79e2670cdb248b15277bde9f7d280bccc7b),
      uint256(0x1c5cc47442fe08d340924efcc84137e7786618fe55e0d138dac2a0fb85e1fbfb)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1395fd6660934107b4ca9dcafbeab9394d66833e20dfb26260ee2dac6ba959f5),
      uint256(0x0a0fe301a49cbd484481ca99d43f82bb9802cd98745462b9408fc7a1023b60bf)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x0341b2f265a730fba78bb4cb9569437a402bace4752733e9d95c0be876279766),
      uint256(0x23f153766a12b5c6adcee144386c7a51b5e4e0d370a7eb0c2d60a1dec22bd955)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x053d5dfa4823a58c3dacbd391b1363edc73c4fa3a69e1a2d0a1b5bc1d71fe75f),
      uint256(0x22be9fba3d723a0a218c66e9d686aaf58d127b855a121353b47f2e0bb187a9c3)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x2497d32cd9220b3fea663e78c746a6bcd95a126af44ef3c984474169afc5dedc),
      uint256(0x1ab5a8cff5b383711253fac4f2a9df8f0353783ab88a2a61d6471e8471b1bf69)
    );
    vk.gamma_abc[33] = Pairing.G1Point(
      uint256(0x23449d8f0103a91ba71efc212e97c4629755f4e526b52a80fe29723c768d7663),
      uint256(0x1d88df57345ee77e1a0bdd9a999cab596006b29f2a9d4ac8207cbd8645fdf2c4)
    );
    vk.gamma_abc[34] = Pairing.G1Point(
      uint256(0x05673be160895cf3946f1d5f44978c3d9decc736e9f2e0b58ec586672f3bbd1a),
      uint256(0x115deafeb3dbac77199c09cde7c9565b074cd819a35017ed1c2fcf9f63e89383)
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
