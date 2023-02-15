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
      uint256(0x041b007bbd3acbb019983f4cf7aaadfdc4eae709fd1ba5416ff0b2e92abd6f4e),
      uint256(0x2441a382e7b941b46a3f6907e49ffdee316fadb11fd2a9c936e4a7c3cabfafbd)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x230ce7896d52dbc392093651547c29ff79fa2b9f05bd112aab51c77e76abeee9),
        uint256(0x0bd1acd347c433952dc0dacbb013976a6217fecc3d35652e2916da0efeb25576)
      ],
      [
        uint256(0x1367c93160fd75e6abfbbb6a6c8ef26fe01e3ed27f59621d929b662c4c27b718),
        uint256(0x2203135889196813550e1cf33959755fe2bd67a0c62e99e227fa35422443fe38)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2712209578e0e942fffa31fdba01c9cb9e17f2e66d9d07a60a759691bc40b213),
        uint256(0x2d8e45666955091b96de987b4122186c3b8fad8e1d5846f28fb4d48d4900ff81)
      ],
      [
        uint256(0x22ab6049e69d0131e8e547a322254c938b6a9fa1de12ecfa824ec1338aff2852),
        uint256(0x130e171874d41a3db061d2c737ea99533a5c251c95bd5548338344c1feba0a92)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2f7e49943cec4d1ffbec076a1264315b18b0a052066723243771902436963368),
        uint256(0x1ec42ab0d67b1527d5a65c432f0ad7d2816b89320d987e42fa809fe63be34d79)
      ],
      [
        uint256(0x10f3b85ad0bf871025f4a40fa70131f1305573191b5b4b108b0ff387c878865d),
        uint256(0x1a8b9299347eb009c74bc0e667e1828387ccdca00f91d8f1be050775ae859fa6)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](28);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x088eb4b2a2aefa4713c06503f9d607cf63ab0d475031671bcb44bc7622055842),
      uint256(0x28839caeb2278d4e04c1dc713c6091c5791a11646a1bbc5dbf36f39c47752df9)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2fa1f70473233c0ce1508a86a127b8b6e90a852b3cce4ab41cacc1f5a9670ec7),
      uint256(0x1da0334f2f23cd23240afebeda068d68f3fccd9a8b46d09df66dd245d422d996)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1067896a11e3a5fe5b5343e0a6ed7bc0f71781ec8e65697429adaa7a1f2411df),
      uint256(0x036901f66807157dcefd7bd341e94c0a9687992f17665df0e7fed255fc94e235)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0e32e88978bdc89cb11b2b34a3ea4f8fee52b761aff9954bb0b02ee52b674d5b),
      uint256(0x07cc8ee4ed40f3986cfe3e4ec9f02e33681c094ff55f1d01caac05689bb3c0c3)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1e31a0431a87c26a9b4e878ece2dd64d4a6c7a9d4568990395064d792e19bffa),
      uint256(0x19b2c20fccb8c837ae7d9c46348f3dde2d53e96d2a6f611f43a5b373e87d9c43)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1364dc4df0212b82278ddf1bc2ba1bdae36bfd9318bd1f8fe3564edf568436cc),
      uint256(0x016df6c21f2dd31a769ebda9deeb413acb683804e9ce11914a4c3a3385e2b38e)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1059bc3fceae78abdd9beab17d208dc52f4f41f0880029525a8d0f1d475b8a39),
      uint256(0x2107d2b84103a47e39ecba6d76d76bc48d5ac28731d447f0276c020f8cffcb8d)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x13b86c1f36e42cd32525b3bef0e530bbf3e03147380c17428256011238d8a758),
      uint256(0x062efe13af7d1f9c65f26d48691d6a42a07b7f91dbd94191e347aad479ab5137)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x02cec54d327f89b113974aa762888dd3ce84a7a81914a50faf182b511a1e32af),
      uint256(0x281bb2ea828135bf313a35198c073d352ef5c8ad7b12fd3ceaac587e7fff78d6)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x2a704a0352192c29d6b62aade8c78ad6337bb49005df963c44425a11b4474394),
      uint256(0x01b6aa485d3fcbbbccfa425d4f498e2d03702f9c4ceb0fbadcf301eef2401d26)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x22607b37eca0eebe2cc4baaa4cf0fcf7fc0fc951a84c46557fa592610dbcb1c3),
      uint256(0x107ca774111ad1af257d816dbe412e649d0ad3cd22227ff967f6aed5be4d0194)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x13410f6fb5b22a850af2b2e6798c34824516510a3ab6d7ffa44a0292394f35fb),
      uint256(0x2cd58df9a280965387f5f16377fe20faa142c193c14136ff22e91ceaef3807d1)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x03a01abe25f83f23b7da26e3397b19bce5a2978db371f7e4e8f70f5f056b613d),
      uint256(0x25ca93f91a1d676a871166a41129cc53233e6fe304d5bd2b8675780b2a1dc3af)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x10f6a4a7f958d383905a6230008ef5bcfc196802789f81c7a80126542300fb5b),
      uint256(0x025c673f21d60f0a68615d5368b953f7dad09246c783e2275b544b400a76ce2a)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x283159cf22c8d7dd7c6d673becb4f9dfbc61d4e465e7a9870d1ad7a7c36daff3),
      uint256(0x0e8868def467d51e3727223500d2eab7eb2b55ad90b8c6beb8ff63fce574bc3f)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1e022dabd4495d3f6ea1d3af3fb7411518a548e9d050a8d4967205f5af91631c),
      uint256(0x061b505ac2e2b291bfd687a76cc4b616687d4b41ef9568ec5bdd111b6206df60)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x11293c2ae9d4bd2d1237d43147b1de9a0eb74e730984c285c22112f224a0f591),
      uint256(0x26d94f311c63c4cafdaf24b1a9b1ecce020883a8e142ce303e5166a09d0269a1)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x07eb0548d978c2707738d98ffeaf4bf82d49ddb4b34a9d9e477fd74a8f7610ed),
      uint256(0x1b6d5d07ae3930323951ba561c9c6d265c1ef7e2205bb0c81fd26653428af576)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x052aae12acfcbfec4d82437f344226abfe541624d9acdd5241f0fe7f84d652de),
      uint256(0x037c90b6621a5d2f3867644b6f0d3ea9e99758af55fcdea3392bf162b03ed067)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x1556d247af7c3b4bd1207696b72194084962cbeb13d07098881de0227aa12ee9),
      uint256(0x26515a6caee63e894e910c1b631f9cf85876f0a9f90709f2e58ecebe8eedf91a)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x0105a599d222f6f2f8a1ae0e5b436cc3d071c7b1f453c0a7dfda7db5a9636bb8),
      uint256(0x2f578e3f38719ffd05244feb741f7314280198479f194b0668d58c05dc74d610)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x303aeeaa41a243ea1aee22552d38c1d0de11accd005c61c439c774f2874e8e75),
      uint256(0x1c81b7bc007e1ae17839cbf8f8726be773a2161c8905d7ddb0450a1a0505775d)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x2a7867ac69a61093e3f648c9d56ac504c32c918df103e939a194691304275d55),
      uint256(0x1e105a023cdfa1117f2586890141c6f68c85ee760bb66e94624281f1d1444ca7)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x11abd7f4be473d7961f7c89dd092732e331965f9182d7fa949cdce010e55ac20),
      uint256(0x2729de285a6bf67218c840d716eb36d29a4e1c1bec5343681c64bad98224322c)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x0ac0ad1dbe6c75c28be6b23cc67a61445b347382f6e6e12666f7efe4e69ab3ba),
      uint256(0x21235e55244e2a56f4f8198769156403e208c1d2a87156db9701696c01ad6648)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0311d343d9f20ee666cea84c1235f88d5d0ccf19ad3e19d9ba110df4093b2d23),
      uint256(0x2659d92c4095d0a9c6faa0013a664f312c3824a1a55663b621fb7106e758fc81)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x11d726abfedc69eb07fd60bf5a359ab575f24f81544b0e94cc7828402010ae3f),
      uint256(0x101c19785de24e462f371b28fef5d5abe555c63d6cce6ddcd2219e8aac692b8b)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x24d69bc3b607c9132c0ecc978e51ac20e713f8452c3cb54e3f2cb3ca1eb31377),
      uint256(0x0932089a884395b6ae3a1a0c7b4ea557152be71d04fe55e977c6967b28d42231)
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
