// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.20;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2b8d51c0e412cd00ffb7fa96499c624933f68b914a0453b4d17ecb0d0af7e4fd),
      uint256(0x2b5002f1c806d2ea7ed003b61ca749e155088120ac8ecafd0f3bb60ebbbef864)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x050a78d53293745b5e167874380221f66a423233d5592c5778bee290cb13b874),
        uint256(0x0d514a45994ac00d156103afc66382722cf2c7615977437f1db59d5779fc235c)
      ],
      [
        uint256(0x24e07c6a8f43ddb998422c3d1b457c69b80a5a55ab5d2d4abc25823aada5085f),
        uint256(0x05cf9493b7e93d90a41a5f534ba09612e92efef0667cce0a26f117369749a28f)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x142e51c32709d3c651b6bc3108c5de9ab8feb888baae26616b3fead3d1587cd2),
        uint256(0x1417d4f91e0bdb033d022dcdef274648f740eaadf8f536a908fd35c3d7dfb094)
      ],
      [
        uint256(0x1fe0a8c77cc6560ba1b1ae811c79c2687286c9406b0a4a4d632b61155df05735),
        uint256(0x06513e83e067792e0c0465acecf3869869092a7341b7802368a4ce8545943efa)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0d1fb8f293892a5c6991198fcd15cb455ed7ee2313179fcb2fb12383d404bd5b),
        uint256(0x287f099e64cd8d0e75fd552c93cd45c557672817193294400b53bb3a2c135b23)
      ],
      [
        uint256(0x089113b25df6486de601c8037645615a3710cefbfb04114ec2d190bb57552f38),
        uint256(0x1172946135a0a904a7beeeafed8c01bc19dbe065a8d23055ad595f2f554bb4e2)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](31);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1ac9a2977b68296f2b16e913d28dbbcfd934b873b8641f5ae11c297992190a3c),
      uint256(0x10d62b1378614806e2632459eb571f67c7970f18d59c83274b5a38274ec2d551)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2511337bd39a3e5aef489eaa2366344ab02576b059509676bf1d2a72a23a4e47),
      uint256(0x2d0cc69d54bb11bfa413b6fecc6a4d11088ce863ad0756cc0851f700e7c686e4)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x11158c900b86a957ef1817432b0a9709166585b4fc4d6e3949dc59a9bc40f128),
      uint256(0x173425344ac16e606c32e478c69539de8f84978300102c96e970ecf2cc4a9e8e)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x04842f7b88ba3f037e266264a1e017146d39e8254c72bbe59d0a71cceb9d8a89),
      uint256(0x07646ef240ba543e8a6ca5ba99ca86ef4b7c6cbf321b6d6012bcb414e41130dc)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x118caf462fc90dddee1b4f015f214bf068c8942b66e50200307d443b675877be),
      uint256(0x1c958d839fa0b0cfe94f4d62ebe47aa0bc4e2ce57677b223e5ef0e6b8e182b59)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x00ebdb6f851f5bf6701d29d477bce983966594b2c4362ec1cfba6bf8d14f95ab),
      uint256(0x18b879aa8ef7aee89d9768eded1b9e0fc8ccf6bef865234113452cce6e306330)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1468bc27ede4ca284ce309e1b4360bf692d781a3f385315281646911a9b612d9),
      uint256(0x0b6120719969326abba5c68ce95efdd69f8746862c38da1c0fe32014e30bbaf4)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x17dabc8423cff02b2e0448110895e2a9d9093921948ffae971e0bd9d4def2f05),
      uint256(0x0c7ff3686765683ffcd6b45cdf6b31ed38074354d0b00cf7eefa971633730423)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x24f39b1b9c136fe2924ddba7091d297ea9b0af8fd58f1d897da0ea2de99f3716),
      uint256(0x18a6922b9f27e880ecd8e6ab2c4c4ae76899751db7d5e433ebfe5db97f114d31)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x14461412694ab4cd55e68133a92705c13cecfb0cafb380d7a4575939e0948c7a),
      uint256(0x045ae5d5a5a50db957ac886d6994ae22efe19dcf569b828c78a87a39773bfd93)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x17a20961d2e63f59de29a3a880455319ff836f504c79b89cb4d00a6d76952309),
      uint256(0x097062dd92876e083b94c6a236636aba0d880c1b84a6a26195772e80d0f1a8a6)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0799ec3f9d0eeb1274caed59cbb58f1f37d379c0646fff1c33afd064d7d4a26b),
      uint256(0x25d49e4be3a69ac90b71be984e340f31c591aa1da76d025f81d0b398b33cee7a)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x19008481aa3f415bfc6f6c88c391dc2514bd20df7a14e45f13097c68e50b0091),
      uint256(0x25ed9658afee416b7f7667ac2f07bcf2255012f9611866e5dbf4196d8f7c5468)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x0a14467f27029bed0f7932940c07b622f93f1f61063fb4074480e0ee4d27449e),
      uint256(0x023ff78a124f7a429c050ed2813d712f1c529d540c8ff8d978410bb09d608669)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x267ecb15beb3611642582f6b2c6c12279f3c75f501f54aef88dc70ee34c7d57e),
      uint256(0x2c3de4f0702fa89bfc580754a73cc01a9d39a0addd585f6e9e09ebbb51879a3c)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x07f2ead3d5dfb12547eae11ffe611c786528cefa04b77a7d6ef1f9b2a8a436d5),
      uint256(0x2264332898dccd0e8acf61e4c7602138aa7cec548da4f2e29ed1f8473701326d)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x25ab40ebe3aa9f2acda19253bcb0fab619c67bd97af467a5e036f30b12895ab3),
      uint256(0x09b16a47a4419817aad63aa7710236c85d8f342b7588199e2d4b5d5481d3ae51)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x172b209b94bcd2d4fab3f16b4b0a8356a3e2b66b0af5f4863ec3148f9f3f2287),
      uint256(0x198e1ac783b1d5c125ab500062bfb9b4fb23ec4a30f0771624abce87d6b52aee)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x003b0301a9587bb90143f35a49052da09263d43bda11258c5f2897036c645386),
      uint256(0x1a8779d5270f25e3a23d4cdd13260717bc8442ac190912ba02ecaec93ac195dc)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x15be6bde1dc83365e28f22cf42da0a96caa50094ff04e272bab251055bda60e0),
      uint256(0x1376bbd5680d0b56c9d6e21e58dd7cb5b5a472bb9827beb2197c4d2d2305bf55)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x14af7671ba9e0e33de68f9b1513463e7712007d49c49bda32a1ecbbbe1034275),
      uint256(0x0ff07ac459b71878b16d0d27112ee5844ab382eb4070216933cd8bc5fb36ebe3)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x135cd74c7bb9d19564d4bbcbb9e1af5ec4b22a92592cd0f87e6f3fb56d96c007),
      uint256(0x03ce6b25482cab60a8ebd1c3cbfe3afd1f2d6c2bf8477570de6efe819a352bbb)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x218bfa02bc21747e1c789d58a71fbaf10d862ba28080a5a2d4d9c98a7f4c9eaa),
      uint256(0x2c2070173dd48062d9a9e7980610da97390dbf00a44cb31fa3a27e2650e3f3d4)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x1ae7906eeacfebdeccc324cf0637f0760e00e1ede05209319893a481cd3635df),
      uint256(0x18a02c9237c9de8aab954fe0e09c9ffaae273a76c58f0ed5283d2e94cd2eb47f)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x136f3dfd5c98845717e373717a3eaa57d18d70f9e70c20e9330dc6095416f5ac),
      uint256(0x0a59580d9c9c3b4a4d016ea05610e76ae8d18577018edab60e0f8b898569ada9)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x1cf76247b02dfff28a72b0cc354389d77c87cb1c8b5069adbdfccbc417a59f79),
      uint256(0x0d2637a4c09d9775c91c760c1ae37bc7628523c0baacb8e4ecb9b95f48aeb050)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x2d35d6eacd7e2c82a8c8b5fac3452920899d3531f77f311faaf66dbcc55a331a),
      uint256(0x162357c5f46146985a7a3877a8b6c60d8e6e60a3561e4081e5cf2eeeba5fe36c)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x00b77725bef06caf5cd36b3c425e03565a75ddf898b6e7956e0dcfcc080e0569),
      uint256(0x0f65a264c42cd1b305938875881001b136dcf006ce2df6dfbdd0fe9275f073b4)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x08f842b6bb84fd65c89b3b3d3aeffe1772aa8389421a85e9e175641dcfc905b5),
      uint256(0x07d62512ed6ad22dd5e978759772f682569b440c591757bbd051c8936168de10)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x24f22453d90cfb075da165fa3b7718041bb7bcde262f335745e3f735024d8642),
      uint256(0x1bfcddeb44f09b1bc6553f72d0f075242403de8ce8b7ea904348ae5eaa629a6d)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x24392860911f7fba95465127cd39eca7a6e9466240833eabe826f8e2af34c201),
      uint256(0x2e2d53015d8cca83b9f03788c5466c07e5215e59e02a13187066a684a772b169)
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
