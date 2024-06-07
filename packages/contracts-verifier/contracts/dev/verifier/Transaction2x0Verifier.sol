// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x1dbc416d430b1cb625e6f2ceda15ddbea8f66ca2d773656bb75f5e7539bcd5ff),
      uint256(0x28703a4074b5fb494c8fe80cc8c97b85759a310c71de6eda464ca0e6ee43da31)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x075e925f07b197fa8e84e17da50d3608dbd983383363974de4e6b442d5e307c5),
        uint256(0x0f89a45458860e27865901b62d7c59c3de4bafecab203488f688e9c0e009545c)
      ],
      [
        uint256(0x0efded24c044f7cd365559ac0cb8516db3009f19621e2134b42732c3426efda7),
        uint256(0x13ddfafab1477fd2cc0ecf74efc5638753a8f43c58b5ba41f88afc6425cd9cc7)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1f8eef7e4bc11bb8eccda24df1aec8a98f75391ef452ddd1384a407dcaa2d140),
        uint256(0x0ed15b19c085cf452e092f08842baf9b24dc6bcd002594d82c5ce547f4395fa6)
      ],
      [
        uint256(0x05125a7c741c1792f15663382fcbc87c263e70a3f04bd04e3ff77e705f593f4f),
        uint256(0x1329de02bb59cfae70deaabec3d37b55b369f11e1eefc012ee92cfd6497d123d)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x037e560e4d352bf26b050e34f032790e69ecedc0ff69acab390102ea722e45fc),
        uint256(0x12791eb5b6051435085f8a67ffad118117a90a37d4d01090f8c5e760fb77b1e6)
      ],
      [
        uint256(0x09ae99a176d1288abda849c5d45eba04efa6ccf7b75d2371b8d94590d20f8f8b),
        uint256(0x13b0b0b646eb89fd5bf70b8a8342b42d509b60d5eb4583156dd15e6162095093)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](31);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x09008707454f39234e5059e62616d0eaec1d010937a7ec6b6a364510db8e4e78),
      uint256(0x2fccd5be8473d345f2cb0051325c6a3b41ea5dc4c8f2801ac06b79ef1964a957)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1707bb0411e52a401702fca631612b47570d72ead00b8ebfd3dcfaf48cbb373d),
      uint256(0x04f5b19329f4af8b4c474a2d49eb29a1a6d570288f418477cb972f2d10c73bde)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2c26c60a7c0df48b129c3b409142d3a38118c080aae65ef15b7c4d1b69d1edbc),
      uint256(0x2906df8f216c113de87168d63056798c7a3a7efcaf1ee811f1c1b54e2b2687da)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1aad9166b230bc533839c4ea5539f14d89a19b4ed9bd0a4934d3a3618c5f4aa3),
      uint256(0x0401107578316347bd603fb24f3b5ccd32115424be0fdc149fd34ed78eea9f6e)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x151ea6c9618b7eeb97de9a542fa50bf985dbca1eaa24a0078439971566e53a79),
      uint256(0x01c00921c6b3ca97f152c33a0b3c3301369cb6570f8dce28b8807425bb19ffce)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x12e6b774f3f33463d2882ccaf2d99d0725398ef3dd9d6d1105d0b143ca4ef610),
      uint256(0x2bcfd6664cb29178c6592d8d6678f80f6e84d7ecdc4d03d3dae617faf7d866f8)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x270824b8709d688272bd24593739e6b68908844c13b0359c16dcb5ed863b7d24),
      uint256(0x08d36581ab768f6169587e54d5b5b25f07ce2968fbc8ec823181b75bcfb3d905)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0fc9920d7a8e76420cd5edf130a75da9f73c1f213f054c7ddf5ecb191c0f107b),
      uint256(0x028502adc0a3123e96d5615a960de48b648c68a4e2c43abaa37066be6e0fd140)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x006e4eecae6aa80867368cfa485f3f8e866e8f1d3b220c62959e6dd5a265e2be),
      uint256(0x0bd512038d95d7905939115221533bb78905085455a7b2ae7c55dbb992345953)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1f61677440788bbdb33819f2cf589a98863450ebe39593609998e7e2ed291463),
      uint256(0x0782a7b92eadcb37c4c4e8dc5003f13649be6638b8f84441ac0d5b556df3aa30)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1dbd72e0e7abeae9eb074fa4e2314693f62588bd965299ef1c65e2e8a14f5bf8),
      uint256(0x0651e06bef131ab31c24a7b5a119f116401ead903f261ee7d8c5a4f438096241)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x226320fda7ffec842777a97b1de224701c2b1496d43b5fbd75da2d427c8a4527),
      uint256(0x20bdace6eb7c976c1977f47b8ce1157a24072e86d810e8099c673a966b848cc8)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0a766fc27e44eb3492d5af8d2943cf069d8f1c1eae372b4a9264df7202e670f9),
      uint256(0x2fbfa7c5a9dc68c307bf80c7b94d6f1aa202915d83565a47739722b1a373add6)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1de80e795a14c821eeb9a10a6c06eb7e2fd8a9528ecc54b16a0b7a7c22a3accd),
      uint256(0x26649d5a9090cd50fc45cf1e95eeb5510e4e2e7dd49ebd96e470f20f19b232e6)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x056c50ff184aa025e9bca0a9e4f840a4e16210b8c8e817bfb1ca37177c5eb811),
      uint256(0x1a474d4636006221c0029c740fac67c3f3343a9f2f0b640de7a1cfce6f91393f)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0f99f5c88c6740233b7900a6b3d3251f98e649992b3d27a2548b67d99808af99),
      uint256(0x030e20210c9dff9d88d22f8cf8cfea885da2373d334c067d4ee44577341378d7)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x26d63d66f27e5cb4c21de9b1f2e2ef4a5faf7751a4f7cddb2689de3fb6ff50c2),
      uint256(0x04c492c2f9cf783856325a1b619e5b2540de19375b1666c1c6ad31730f45f001)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x1ce97e17b59bfa09a3e158571779e65b5532fe9c6e6c95a7e4eb4978cc4b58b6),
      uint256(0x207f25876e16f4732be1f987a80248750e937e39e34d21b73ec477464e09ff1b)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x17109678f21cceb9d981f5c6d80d0fe1f1bb055f24c3ea98927bc52361322393),
      uint256(0x2a823531f08de3ea11fe2719ec5160e500f2993b0640b925032a03792dbf70fc)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x2f3c905177e3804768995cb0624840e288548ebbef5d4618be9b3e9c2fdf9e94),
      uint256(0x115d0a233c9f9ac8702335883fd4270f6b4934f1a794b9597266bb011d0898f7)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x271fa010486108f17d9e4b0ec9ec9f519ebbe754f76efdcad9632dc5bd7142c7),
      uint256(0x1821d4e11977433bc1cb5e3b682a1f097d73cecd068142eed0a6550a4c636f73)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2dde3b137d2ff5362d7c8f3b5139283326307db2d8d61efcc61bb8861fc611e9),
      uint256(0x0bdad2e41db14604ce909881f559a85302fb0592a483d2eca73ba722bfa59330)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x11b114feaab9752429e3d3897ae8d0b8dcb949e4318a9e980d2ec014edd79718),
      uint256(0x0a864891186061ac41e444ac0bc51d9fd091a23ee3d86d3852342051e6b396ed)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x25bcf4ef0a838c06a3b66f45f05a65739b905d4d9b8cfea4145f72d8bb906007),
      uint256(0x1d98d3141a33de854202b357be7bb45a2e294973bd422ad0e60652eaa2a704e4)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x0cef32b6aa9f3637083881429facc4f8f01aa05ce3d22db1f855056a2e798b7c),
      uint256(0x21857afa5c49549e6c1e0b18a8b4b717706c10e6a2c9b7947c663cdbe8bf3809)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0174e4d690666fd8d120e5332f462a142e727ce0a10f3699664147f59b2d160c),
      uint256(0x1a768f8c0952b6984366a77fdb8a61e256aaf9dae4beb56d8f048a8a99b76f81)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x11577cbabea7adeab48d7ed360e024715feb042e5e122e5d3204e9bcdb9c9782),
      uint256(0x19f47123e9d84e2abeefaefe5c6e51e0fbc8e7513348ca76f5ca4d1154d83638)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x0ffed73bc8048c7d02960756bebcbf4042fd46c43c01c2dc41c482746f136413),
      uint256(0x2ed9d40d2f457090ab8d280b1517aab17c6081c964624e90b0259a53af672962)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x0e0722558db478ed628cebc7323dac19d6b77690515ab2c3845ad2df627208a1),
      uint256(0x2ab12aaf9bc5b4fb6286ebbb03f673bf0e448527ec6fe45804c4e1231b063d7b)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1024665b8b047af37966bdb1c40ddd383b8330e4db172e24bebbe8380420d9e4),
      uint256(0x1717411adc89ef83041daceb80556282260216b4fe904d78a6e47f6fe0ec8db4)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x2b3767878d66df0c99b1d404888507d2b10c351b7bbb8244856d47442cdfcf75),
      uint256(0x2af96c3cf5667d7b7fbf17edf5dc3e97279939766da5ea172dc5df18f1d675f9)
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
