// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0080f327f510a1194071ed92587987e7e48d55b02aaff00131c4d3027a61efe9),
      uint256(0x07e3ea6e057d530abdaab1c451aabcd9a2193e9c940649058ba2d47c9f75e2d6)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x05bd987dd06c17a8b60234a270607d03d0cdc395bf33cdde701b791f427d20f8),
        uint256(0x2212a557c4bf862d15f90a2aca7c9e29259bd58175f3872fd581fed17acefa96)
      ],
      [
        uint256(0x0b869ceff34256ca7edb7bcf3c994d8d27619af39bc78a0e49615697d153aaa3),
        uint256(0x2ec1a333085ed67b7c04905a1cc664c103c8a25efd3c4de4da6ec51b3744441e)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0a222b517137b407d2ae27398dca02acd4cb228a01889e9d6392c8c136a1b8ae),
        uint256(0x146fb90d7d457cc418abc97cee736e9e8e38b397f1d121189188a70316bd36a8)
      ],
      [
        uint256(0x1dfe60e3bdd1c0fff2ca0eab0df592f6e7f6958dff9b845f1fd08cfbcedd6ac0),
        uint256(0x176706dbd9130d649940a91f98bf7d97e419c2a5993912339b8ed56827bec0ad)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x13fa77544f8a68b608f3f30cba1ec4508af7e6ca563ea8b6897f7e7bc2129dcd),
        uint256(0x2e15d7e99c89e779d7f77f4c1fde01c8180db008f127b0aa4a2c5d5ca00e3321)
      ],
      [
        uint256(0x04b75f94efce8e5e6dde54455c13755f2de63c3a857fcf3a73062d165e539d8d),
        uint256(0x2564188e6e0385e8111089d6b15bd0f650f9795ec8dbceef56b1118a611f465c)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](24);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x29ca955dcdea3eb818909379c4ba347c9e9d7d46e5ce5822cc7ed01a9e18e96f),
      uint256(0x18d79fb99a7fcf411582c43e0305b05590ac428d34b8291924007294e7989a21)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2a5b3cccad93c170226f1d6f2819c033de42a7fb4f835a022e02ad0f17785021),
      uint256(0x1cfd562473cc7a3672487442c3d735d425a6ceffeae1074512a6733a05ee3700)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x27b12302e84db9eb5e0d9d76206a04e126ab028c08b804ef6188d862f6580ed2),
      uint256(0x2dfe2265437d26fa825599f3a6d25be85c00fce8166841cb78216ffb046c24b4)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1f1db980314a81c4f16bdcdc956d8810153ae407be82568a56754365cb0cd47c),
      uint256(0x1a1ee8c8f250cc40734dc1758383d6e2cc720c7ac16ef4e59465468fc947d1ab)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x009b91312eaa352bba88c204503c5601f95fe82c208077aeb65a148807a5f790),
      uint256(0x0002d1a95e51d4c85d8ce7e97ac0f07fe6b67582514affa748c3ecc4983f1266)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x08b07fdcd95b8f225c567b1ff6780788e727fbb35d6019315de6d44ae6086257),
      uint256(0x089f04d7cb6e3ac9c29790e15c2a00a9d9a67b352814c7f06d6e98af867c759d)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1bb91c3b0e02d53efab1494f92c51d32180d6bfebf8ad28894874dd876c12e46),
      uint256(0x00ca13861669660b3d42a004b4b79c237c989363a47e02f01175be3e5312c87b)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x10d5ebc13b63efba52f94822ddafc89cbba37cd26c246ad5e436ace0534269e7),
      uint256(0x22e99ca538091c0f443ee85f2910dff8ec380c3e6d0f1d3d7daa9eca03953eb6)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x02e2ed15faed6f7d83a0c380610eb1597324f8ddecad651f95a512f2ada53092),
      uint256(0x1c5aaeda68a8cd7a8afc163b94026bae8ac7198a2ebab5ae80a0f9c09dde9291)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x15c31fbb77b5583703a5f8b76dcfb969ebe88a1e6bf73c8d47df3848f4aa1dba),
      uint256(0x11cd3d2c476a02f90b0d52cdd29634a9b06542783e2e627bbb3743c5727705ea)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0aad473cb561813c0dd64f2076f71960a84cf4a54ce02d1e11ec5cc1254ec225),
      uint256(0x162440871333dae32287255adffbf77eb3db587b836624ceb65e3bea7bf7f923)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x2adeac741f8bbdf817ac166abe8e5b90eb6873b3de73b155afe3b15934e950ee),
      uint256(0x15c571f1bcc94c82a907c4c56306ad8a1a631e77ad52e385bbffdea4fbf8931f)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x19f5f9df1f9079e7abe78374dd7df5503ed83e95f7b880548b5a5afebc04d6d3),
      uint256(0x1510a67fb66fa23fdcbfc21c0095ece8a2ed80548973d82f2eb29f0237100f89)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x2ba4f36d307fec34cf82c06e3620dc69e2f232ec639602137055d2452bd14711),
      uint256(0x2159877bb853ecd7af5fc2b5e8a79d36e98911e7e86c597aba0b6919cd22504d)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x12f39c580ee4e64be559711f89c8fd9e4bd7a258dc0cab87102472f7137db6ec),
      uint256(0x0748adaeacd3316dfdf740123648f827b58916cf16868433b35900d713382b04)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x153594478a0ab3f3b13fa7d0cd5152453bb82c5ec5f401dd92f2d70ce7780b18),
      uint256(0x08bccca49e9d612fdd465e7e37f924fc5906a63540059d32919a43af452e8ecc)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x06fe596dbb3878dd0e365bfa7ff433c7d161368a8a16c80feb396aae77fc4124),
      uint256(0x1fb7c11060c613dd33eeda35460b4cb64bd1752c6941b8f2cb2fcb78ab3d7f9d)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x10d5788f920972dd86eb48bd39ed8383a0e20457559f617bffaa4330b43d3e07),
      uint256(0x221e7f5c92ccfefe15126fea683eb2dc4fe9f0be5d474148aa13e7fe67079329)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x22db6705002b5509d3a1cf6bd63c2e812b2495a2316b75e02bd47a12fcc81514),
      uint256(0x10e07f9841f18e548900ede0c1743f93978be7ce70662e584edf61eb094cad49)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x29ab17593387f75e21c5bb49c36a55ba665b747298cc3e37ee7e27e6dbf320e5),
      uint256(0x1ed3b646e9df21d8a3aad2d0744fa8333aef09cb894afcb945888cb8f5448a01)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x019a7660d0f141ba22dee2cc32fbd419c8919b14c7a0f1da11dba7bdb8d86017),
      uint256(0x059796bf9d47300600258ba12c78411b3be5c95a48c547d4f751bc1fdfa46b99)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2b0317e9c2cf72d5f8136670abb448ca7af8d326843eb5946fb41d3b5de7aa20),
      uint256(0x1e0c0d7362f275e28b1a186336d9920a9035a0f43cf723ad12d2e5938cc2a888)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x0d0340b6cf011390397ecfdaf99b829fbd6117a1658783869a34606146146741),
      uint256(0x243c0d0da49f78ad4255f8c2877548e030651d5575ec11ea6ba260da053feeeb)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x1dfd538517dc05cb8dfdc3c3999f0a4874c474f961288c3065368042f22f67d9),
      uint256(0x29e83c669b32e016724f5d01e9eb70cd7bc44c4459ef0e64d99f3de8c4d9c541)
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
    if (input.length != 23) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
