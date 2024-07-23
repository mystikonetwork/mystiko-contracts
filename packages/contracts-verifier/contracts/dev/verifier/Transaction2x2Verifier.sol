// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity 0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x099ed3262ef18d11b2163fcf86addd98f7516722054a5b8a1c5dddffb8b032e8),
      uint256(0x2626cfb16faef2bb9b87433d81f70635d6c85e952221d8e62dbbc62d54c362b1)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x038b0c93e8773e3f8ac8662605a094a29256185e77580b9fadfb04197bfcedee),
        uint256(0x1da24b9f579a9c91c08001645e7a14ee1e6e0dac4a4a477e6587f29b04e2bdaf)
      ],
      [
        uint256(0x2147a2201b830199a0dd358b3e9338e75b210fd88f8f7bb21ea0b965a7cd7770),
        uint256(0x0fa93b2591fddfb3e50eed95d784f5ed2541a4289dd54d994aa9a6e70a23003d)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x00b9292071cf9473eb205442b46fd8e79843a3f11750449431eb1e4764c040f8),
        uint256(0x100a305e9c8c7a82065b25ee66e8c8fe6e06c2f83b99eb6b2a765c8e10253616)
      ],
      [
        uint256(0x2b7d3afe33ba4573a8e137ee1c63a95b210df42b41e5a26f0ecf84ef7f3c732c),
        uint256(0x2729486a95799c721b576f39f0bc16dfabb0b777363f1a72e9b9f1124530ca84)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x17d0f98b6dd735566c25037ccaf227a195d2166cd027314863551143927c15cd),
        uint256(0x2886fc4dcdc63255d1baf285d1e545c6527f4587f1147ac0b1fbeedd7e115b3e)
      ],
      [
        uint256(0x187c6ac25d4dd7567f74f8723ed17ad989e9960dba6b3fe56bb93f4477113983),
        uint256(0x06fd9a0f5963c5d9b158afed490cc31f6853b683c5df90fe9698fcbb276186fb)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](35);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1e0b227c9f0b390c69f10cb5296cce45aced3a271a1c29b7a9359fb301cf3a75),
      uint256(0x24004d02c65958658bef14aa5aebf15f996dad4e9162e9760def8fff8771fc3c)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0e58421c383ff79fe300b25388da191a33f4c2e2a23d314b4cc47fe8630b5e78),
      uint256(0x142a26d407ec0f964132c314cac3454ee82501075c2d8d1e434c3c87b87212e0)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0113d6f22e75d4033384ca52ec3e3ca42c7b584be34d0f232e5ec32992ece348),
      uint256(0x1a1473eaa17cabdb69420be8316a6c127a5884217c44af839f7ab208f292a434)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0f5246ef9fdc19a664c57e29bd82afec7d411dae35fa7afc3f1d28612973863f),
      uint256(0x01526d446ecba147f5e4f51cea50ac68c8ce955d86afb608b49344c30b35615d)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x281631ca1a6765f0df96ecfc489abff1e5b593567a30f01fe02cdd54947c852a),
      uint256(0x151e299d85743d19444527ca34a46cc8014c2aa6544483c2884af04c67ef446e)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1caa5d82402e4acd74c0653636a004ac142a19d0bd6e5f6ab8c51496d09fd9d6),
      uint256(0x1b768b7219f33c3334d3d8332c8b43ef65891065d8a659fe97903f9e0f5ef5db)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x01d47462761350a833eb8df9737631d3ead2b1f3db22b5b923657b7d481ac2e8),
      uint256(0x29e2f3d001458cb0f2e560fc057f587c3b8ca12993654274836d1b5b7cccf6ad)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x28e4bc3236d12d1b4739a3c07a2d1ca2ced27af53afe9962b6b734fbc4b0e2a6),
      uint256(0x13fb2fd08a99bf773514f17c49ac8be5293778532a9dafd47c448a5c46797ee4)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x160f141cd574798ee83e98e9eb41c947a9cb6221a432c1db9002682efc11af35),
      uint256(0x00d963f851b46fc9d4239ea5f55c21abccd9449cdee9840eab8091ee795d9147)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x235883459bda10cd32c71a14c03d102b08158323f4969c48ad4f064cc73d8f81),
      uint256(0x2f2806f36016892ca34b21a38a538a376edf6c7197ac899502992be9647cbe95)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2df8d33ac28acc562c9c31ed0c2f334ddc570fa203eb1f3dac796d7930f06c1e),
      uint256(0x2ae482277dd7c4bcac90dbfdb80c32b4d123e97072af620fc45362ac923b146a)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x2a4658a1629efb8d88f5245013783be20048397f21f86d0ec112c1bbdee98f6a),
      uint256(0x16e18f9fe474b892e8a699ec5834a1ab483a2be33f5fd3b3461ce27f4dd4a613)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x042dc83a0551269b262c531bf81546d918291256cf5d15b26b0492fc3b0f0dc3),
      uint256(0x1b0ca9257b599eded9338ba4d4fca07d32ffc11a55689bc60aec8bd848e62381)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1b2d7f14a35f5b1efbedead64e9a5d92360753c6e04a37fbc08075c501fd2c8b),
      uint256(0x0d2de5b3e9fc0c386679b88b2290410a94ec920a9776a417515080537ccff315)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x16d857449d1d34e30c7dd74ebd94760260ac97b1d67cb79eef2bc0cd35d2b79d),
      uint256(0x237c759fb60e4ee0ba3633feb35365cd738029d21cd992734d4310299adbe36e)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x2617032dc6c1c22dda9da673e52514b81036f5eb5cbd18b3ea25f41c86aaa81e),
      uint256(0x031794af5bca26bf728add296939c149acf3354ffd47cda5fb77fb7a9ee599e3)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x292214dc87e4d8e0c2b080b5b5a4c8e45d2c6d7b290211e9f0d92570b7b68ad1),
      uint256(0x2e4983a93f78ac16e153b266a0fe731ea8f37bcf67617b331ce86f81ee16458c)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x08a4f413122b3a9d0368eafd6ebf485307f940e43d3889e7f74fd25c0a4b47a6),
      uint256(0x284b1d5a537259a5a384c2fd965e640634607c8c297cd5b44240c75845f882ce)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x13bbced947fc7302f2a26d35e31d13c128f962c1d2174ce603c0199a3a063a92),
      uint256(0x259c841a89a1ecb6066199f2c4e907f804c7afedb5afab52f21ab92300872b93)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x00e3f4a713fed18f5a497ab953578db84065ff7ef208c73ea148d10735300d8e),
      uint256(0x0f11a8d2dd551fb93d35059613676b31d30f44ac8c1e495ea10d731cc85928f5)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x0019d3d26a4f72980f7926d93ed4d6334fae6aa4ea66f96f052de25b436d51be),
      uint256(0x03b8a0e9c6d9f387995576ffaa010b80f14ae99fb363beb604b1dc7fc2641ea6)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x212f27aef356e8b2ee690cb53a4eb88ab266ac531735489445b57f4cd48cf675),
      uint256(0x2ec7eaaa68296abde547784ce4334f0ebbc1b54093abc7ef7db66f22e5f9e1e0)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x2584f14d348928772261ee75a11b6d5e0e6eb0a2de35891c5ee46af1b4f3ca42),
      uint256(0x06af02178bb5a65abeefe3b4348c76384547140430d99c848cc27583ca543928)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x21cdd130d4f852b711597889510bbdf74782881fdaa6c514f0da2ace5b24b560),
      uint256(0x05607e5e6a63120a3c7d588b3ac0e498c55cd61b36997b5fccbec76a3b7283be)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x016e64e9d0c73bccfe23e40e2e3b51a41b532f06df599eab967e77d910693a9c),
      uint256(0x02422c7e370c7ca1abc9c86421fad9005707108bd40d53b60f229a6afe074983)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x06ef12171680391fa9bf0e1979e661b3d0956a2893f6f7668855c381c6e0ec23),
      uint256(0x1ae0be1adce6f3cf6968319bd8b12ec0f5621be4903c6a66b1e473bb5cfa1224)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1fe88eb9eb838f6b69e37db50dba390dec3f5fa0f32557aef311c8eeb03786e0),
      uint256(0x0f3578965e4eef9f2a6cd1be0fd08e827c58ba1e94b623e4e73057bc3022d315)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x24c4ef1f7c7418311bd33fb9cd21bc5619cf1e5b75a200b350cb466e7ec1dff8),
      uint256(0x014874e0bdd46efa924a5d113724dabd5379c213fdee3899d5930369571aa3c5)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x1bb397c2fbf6f07abf0e59102836bdc4776ebd70b286dfa14565395faaedd65f),
      uint256(0x2e41052a462a5f2e972594ba694ea049af6709dc0926ed575f631f05ca3d086f)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1c995473b07ee7203e74e8b238661398c577d728ecfe00822b36055e2e5a469f),
      uint256(0x011d63702fc6dd31146dc0b4483374bb1a1dc99fac80be1e04546d3efb174b85)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x0e06e3f78bda7c3228223bccec9e89cc69953a0ac29ca24b8a45bc451758c798),
      uint256(0x0ca549fb1536dee1c308c8fdc6e36c5d28ded8f0e489194a0bc58b3787b8a28e)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x20fec38c121eebcff66aa50b89a68f0e3f76e799200503e1d092b61f43ab59b9),
      uint256(0x22538b945528822d6047462301deec1393e931df842883dcafe09cee53ca29bc)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x2be8659ea230041e88f48fab460dbe5cba45d59c7d0581ada34fd94c9c88d2a7),
      uint256(0x093219a6a9a16fcbcd9251215f1e212a2e4117f0fe3443e9d712b35576b96931)
    );
    vk.gamma_abc[33] = Pairing.G1Point(
      uint256(0x22a2dfbce2bcf97f225c763c7ee892b0d15f88f6b2fc9c7c3705271bce880f89),
      uint256(0x1c6c6461c814842ee5704032e47210838e25b59a9c98be063ddc93e591545509)
    );
    vk.gamma_abc[34] = Pairing.G1Point(
      uint256(0x036696087bb7a14da34a17b590ec725b7e80352e9d11a81e946a7992248d5c27),
      uint256(0x17013aa4398a6665816cd9f6be22f95aa72167a0914038b4305aec35682c762c)
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
