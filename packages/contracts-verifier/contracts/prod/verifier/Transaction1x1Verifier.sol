// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity 0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x02538949ccad31dca8b9305c813969045d8f6fd63978ba58a0924ce03f6d3915),
      uint256(0x1d72ec3075370fb5a64d99d905c95d0b270bf8a3d5cbec7dc36c522c89f6d5a8)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1cb5a9bd0b4f555541429cb665fab9bc44073d88be8995fd24083f419fb3fded),
        uint256(0x14f3d83d23febb9a60a1bb1c8670fe9db4c894da9d22fbc8897f0b6507e6783e)
      ],
      [
        uint256(0x0b4ef9b72ace9d53d5d081794a8b42c78e72ff68e5ed4c8b872d03205182979b),
        uint256(0x114b6de67e28f88f642e808faf3a6a51407615db2f062d97b32d4c83961f1a08)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x08cca3a5ebfab85bfb383b486506e1d2ea01e21b2b8c576f940779d9a588f6b6),
        uint256(0x2aa91eb3ee59ebbf6981f9de1fff8a5f7cde3997235e12ad0840006cc0d976e2)
      ],
      [
        uint256(0x1bbffccc65d55e907c61bae143ed4778ea52e5d586104521b08e38674be18bc8),
        uint256(0x03e9a43a478af9364001d486521fbf8e7887ceab291057174961697aea4e0d85)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x099474b0b390266f95d09b6b3a8737d4e1d93cfe61d37fe82b36c7e28763d2cf),
        uint256(0x1d5147d107a7519764cff7bf47e1963f795dd3c4292fec9a1a5ab0319b34f80a)
      ],
      [
        uint256(0x0848c5f0c28659a4437160ed1ab8ecb72a09131499c74d68398e9cb0637a5d0e),
        uint256(0x26ed3f22dad9967e9b59079da8cf34d07df601c6060a927a2ac136beb5af7f8d)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](26);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x28e3a32de0c55d6ba6e0c0d5c1811a9e1967de7b37b0b2565deaf98b74360b5a),
      uint256(0x01180e1011eeea8a008a3376e8dd3f264b26648f81360f68c730ab1493691c37)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x251c3e420f3b2de0005859bd8c9babb4f0433a4b7a0ff45dd5824e0bf7eb2592),
      uint256(0x18046e628d5a20eb8b9ba6bf176021346f6424bcbc538a1ca87520047748f4c7)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2aaf33105f53770c9431506d45236062999db98610d4b2d8d6fbf52b1802f928),
      uint256(0x1064c1a1a409dfa80cec8b994334e82959cdc89121b8d516006615726607d894)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x13f474805038d869ab8500d7866c713a7e2a7edfbc62327815cbe2f715a59bc4),
      uint256(0x1f4663675c989a24420955344d9b8f182bdd9932fe48109504093fb9936c67c7)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2ed80e511772c964d1015e25818c8e00e5c4dd1c7864b3075eb826ced23267ea),
      uint256(0x04432fb1da91cde389c8c0816f0c78d45a2905e31c800c58e66970e7bbd3b161)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x14f7df93b8d4556789cccdd4f85d6475b158c26a6254bb61290b7f38bcc8dea5),
      uint256(0x188695be02bc7c6bccef6344a28ac734d138f0d01a561d30abc1c2c80b0cb3bc)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x2f6eedf146af15ac2872f3baf242bf9c1d9edd038ca3618eb8ffda817a467f5e),
      uint256(0x2aa124ca8f7dca0d7203e3b69e31a5d5342a1c0ca4268919c0b847edf0796366)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x1444f6deaf9fd0ca3ee68ca29918dc962293c7a5dce55e60c186f627fe51807e),
      uint256(0x16e0cc0696b408e197079597c40c7cabe6b0b3bbac06b5bacd4c9ac703ef8e6b)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x3011c281b3e326a86017d989627a263f64778909ffab71ed5e754eacd605e568),
      uint256(0x0e4eebae1cc9bb4875c2d6c3228f0154bf37cf10d0d654779a1120051c9a254d)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1d894170ea78a37c5051a2c36879c75f2f8e29ca98e5bcff2bb0efe9971de5da),
      uint256(0x1d1472e7287b9ee87f1db03618f75180b484b8833033f11619b4a6bd2324d7f1)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0a1684f71ffa067d7d0c90d74c16cca94d1af8e8aa1cb2f559beee7218cd46f1),
      uint256(0x0ac8d6f7f454369b97df3e6e111a40ddd515cd771e5b0c73dab9af8e63d3cf64)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x178182f5a905e691033d3009e785f5f355574d11e4911238905c77ba3d71b516),
      uint256(0x1206a06653e49773a393bab705d3bd3f250cdd25c95594c59b68eaa004ff0717)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x04ea55051635ad5a2eeb9dae31b0f4b8a25c3eed7bd6666c6f925893d8fd4631),
      uint256(0x0e5fa3361c6b0c145c8889975a010b0e90a5b26cc5a0f9207dd5914a0dc939ef)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1beb38e53395f47ba0128afd1b9ed2bb1661751a847637bdc81e57b36c7a9a7d),
      uint256(0x24f68e03c687a0936030fb90e07b9d98841a7707460ec5c702b1f63dec2f421f)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1a9e265e185f6137b858182ae72459c07df00defa648b3bc34bc4f5ffb0cdecf),
      uint256(0x00cf09a86039210122424d6d1f0ec86f5c424a4f55431ea3024d02c0099ecba0)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1d5ddfdbc2b58777103889ad6dad75afeccdb74e2a57dcd25e637e95bda39fc5),
      uint256(0x006b7d8225d729e694509da110600e0614f66fe9f7613152f3439e73b4de574e)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x11df9f6db30d44071be5688e8e3884f014822146573965293e24fcd8d4afe048),
      uint256(0x20d21b264f24acb4f9e9d77809ce9e8609d8bf4c16c54a6534d70eb512d39cac)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x21d3b5865a0cc67537affa7c4dc7ef563d7d34018db13837d9cfa5b1898ea5b2),
      uint256(0x0783024a899b2c2d83b0eec415268b6f2feaeefdb095466c8b5d2b89c228e872)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x1be45705f5d21ccdff2e37ee0dd54a91bb8ab94de2b631e8de19bd401ff40884),
      uint256(0x1b486bd94cb29ad90e1df4762badb958acfb45266e16b92451be87395381f484)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x1149a5b5fdadcf86206f9dee47ff17eb8950bf023fd07bd4a9757cec59b6e257),
      uint256(0x2531d00bbf7a7fb287d00a89f4ae253a0b6b2aaa87f8b2f7a5bf0f64b5f3acda)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x220c469d224c1ac6f71232982bf1d7b155d7a3ab2efad433e4edebade6957870),
      uint256(0x199422186003d93f90cf96013b298974a65bf373bed57ccec1bb85fbf27d3c9c)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1d3968bba811e9445c1bf4d50c38616c242d10ade772044611767732c36ec0a5),
      uint256(0x052f03b7969a013f78099e329e05cd7d6647d0e38b575dd5de7ab29ee0075a77)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x07bb8fb03306e66974d0ae813c8d8960380283e8f378994e07046dd426038e49),
      uint256(0x17b2dbd11d90daee9d289f917d3b56f2e18fc60bf74d5e2527656fba3111b16f)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2f5be6d651a3255597afd84a3c0bd081de913d243a0f09121d14326d39477b01),
      uint256(0x296949493726c8c5c6bc2c3cfd4bba5b1cb5dd24256faaefe0db76c9c8cdb487)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x0a7db6e4ab5742cc3b747b0beeed664bde32973a645bc520d78c11278ab0fde6),
      uint256(0x18bbd323adb56fd374536774d1cbb66b773eb8ec0dc5c5c0b2f3b3c378ce23f6)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x122f31a3fa652a36d39b900604aee14475baa654203a0927d3b5f92ea0836ffb),
      uint256(0x27139f5b4e0b7887629aa59bda28cd60adccb2e2540a1216f6a2885b61995265)
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
    if (input.length != 25) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
