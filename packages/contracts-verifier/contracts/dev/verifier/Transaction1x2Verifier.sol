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
      uint256(0x1f3a074b3fc46f3f2f0f5b84077f619386e5b24deb375ea9ac5b427014700c2f),
      uint256(0x259b8448890f09a41bb8a1c1bf63f9b3da1acd7f86b914c91319e8a97dd53a99)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0c3c8707ca3dac3eb4b254d615db52e52121cea4917b369b4e13803aec335b5e),
        uint256(0x073fe83f902c338898e449ca99a03b884d2581ae230ecd457f9854cfa68eaeaa)
      ],
      [
        uint256(0x0915bdb1056430b6454d5748a2924345cb4c6d0fb1dea4a7d5ea73311a17e32a),
        uint256(0x0abe79d05390163ca051a57d2f3aad29b99a7266cae273c8b3d04999e3f9e521)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x08dc6bd817d13c97cb79cb4eaed2d6b56a13c0e28976ffcc8197b2cfc03fcf14),
        uint256(0x0bbc9426e775bfc62aa834dccaddf42ade96435f56a74886561c570b0ce7250b)
      ],
      [
        uint256(0x058f6554c3cf6d2917c9b3e92d3297cb12091faaa033a318334053fa62820db8),
        uint256(0x2acb3e68f987853197f080b9e7a3a7bfeb0d60d5a8dca7d2452c4238cd9d5caf)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x045a3c2cee4cd155ef71725b91661b690772c69b6188cb78fd964fed49cdd276),
        uint256(0x0cf63bdec8f07f07f504451e27f7cc9341962a2e2000dd12a290383ea4c97a6d)
      ],
      [
        uint256(0x1b803c33eee272eab7446958119a3e3189e1cbd46503f9c06570a73c0064a41e),
        uint256(0x21ac64c54c30a7d384e672a2cbf189ba1fb8f8109840d83331ed120abcef142e)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](28);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x00eae0833c3b0bf6f2c09d54be5c4a088341a27d78dd12ecdee4da7a814c6a40),
      uint256(0x08a460dd2a8df4c751415f2c65383759067e03cfd97a547818d1232b30fe08f8)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0be7fc55134f4d8d17f76da50c06640a79884697471fa069fe0a5c1196449ea0),
      uint256(0x2da3ac49b9d8e2e67965f4f72f02461ba26aecb53cc7fff0beecaab9f0c4f789)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1685446a3f0eb055ba11ab393b724636cf4bb4fae4cc6a255fd2c5aacfab245a),
      uint256(0x1d9bde1ef2d6395deff1e3c9799e7bc314e3facf4f87957291acd9266d192e55)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0c4bc3063abf4acbab32aee946214f0e2274e3562be5b8d0002feb7805308157),
      uint256(0x048e086d3f53ce2355a505ef04065ad1a64ccfebdb121481505d3bbd77bb8740)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x20b89c4b8091e8aa37696aaba734ca1365fb6fd993c5924eaff662d3ad003e01),
      uint256(0x287e34a1fe7b57d0fb85e41776d0e2b7b9fac01fd4648a4d6ba7eec8065db9e4)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x11fb31ac831dc9e4047195ab0f0f3a55fd6ab491d73bb277a40a2ce4fa721f75),
      uint256(0x160fa17747096614a1bed25517054f9a7d4cd9fec7fb1b9f74c0801814d57b87)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x0fe3123ceb8f0491337f9c3227c87cf110c16f8c66e04fe50fd5d5267a4beac4),
      uint256(0x0d53af22fb8e54f4197497dba51a73de90875d952fc2e96e41b5b00cd29dd39a)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x108c6fd2457c00fe38133496a70d2698080cdcb3f9dca3b2e86101837a8458f5),
      uint256(0x2f928cac8f975f0db3398b95920645bfcaf6a045af1609ebecc39192b3751240)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x1dfe2ebbc3c3d824d7a052cbb72c1e11ca69b74042b31c9c614fc511aeed656f),
      uint256(0x0f9ff775fdc93ec0ec7a8271a15a2b5fa61d5531551999968264596cd2325be2)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x2a9d35076fa169310197ba7ea94a3c6833f174b2eeb69823da2fd1d9cc215286),
      uint256(0x0cbcfc320576d7c6cd509746841ad7ac0734c61b839e0caea561087ac7fc3f3d)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1a1c227021147867d4297067c50b4640367575770a742521bd2d3719462a1ffd),
      uint256(0x2027f64c557c57fe7bcf58260dd87fba8afd92c2794ddb71245025d53edd461f)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0206da6873045942729807eee96877a32301af0ccdc4a865aff3a9692e6ffcae),
      uint256(0x2f186ce4fb94864eea6d6509f30a58046168636504fd26659043ddb25cb781c5)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x02122dc1ee7409a57a8a7024e846f58f31b62b43485886541b9b5e70bc7c64e0),
      uint256(0x1603de00f9b74fd9b31a9a388d65b036a89fdf53630fee4ca12a447dcfd9d4e4)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1aec7cfe495a51310546f933cccd44acb6d58240f599f4aed9fbaa99823de344),
      uint256(0x05d400e5cfe4ad0f87e8ba2ff84ce62444d856a8e8cea152c839a53e0f1db456)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x2c540f4303e82bf2a4b327bbf81dfbc24e33ab8153c64c34cb65ab392ba848fb),
      uint256(0x04c6c536895462b10fdc142d60154aa872f4ff2b5ad3c0aa99d266bbd169e9fa)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1427ab46fc8f1b986dbffe61b2cb516368f307c12e401c2a03826456b08ea808),
      uint256(0x0960f1edb37e4b3de9c99296cadf856aeac7f58b6710bc63c59da5535e95d508)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x22b4b50bd72aec7ba9a54d58ab2567af7aeb027327e7e67ddb846387acf9ff7f),
      uint256(0x00b06ec4789df4d8c4243ce0114e2236a39e120b1c28e33afb4a0942c4882ac5)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x1025da95bbac704b227099d68a18a073210c443d612a397e60ad5b3dfbe70566),
      uint256(0x0d6fd1e398d2accf18e781f4dcdbb34d36f27eee5526a8da92c64839996515a4)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x10d30b9b4180816d4adef13656e22860b1e6e15f2a75ac49bcab4a309ef8e570),
      uint256(0x155a9f520ce4aa87813da3290c807f1c597f7b2d18c751dc589ac6e1db144431)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x2bb8c2ea0063b7813a78716d028d5afa5c35d67f10c4f7f4d4617afb113c0209),
      uint256(0x2cdb2b8f6c93bb29a6bfdef3dfb2c2f0e701ecc8ba1e7e90bc9fef8fe5b66127)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x1a44b99ccefd0f9bc1330e6ad6f0e7e38c0da7a9f1c7f66e0eaca097dc5557e5),
      uint256(0x23f07babbc820ebc39e3edb5958406617b2682be197cf0431124628a4fcbc595)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0f5cc8652695f97d0fe656f229c4c15380ea3d82be4d4c443c809ed1e62155d7),
      uint256(0x084abf3a1b117b1cd9e1a1e108a03934c965dbe803519876446bec643a2cdd57)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x302b45d83bde71faf8bfc8e7907eed67a9b5cfb5e134ae608ca7a0807d6b2ad4),
      uint256(0x0246d10f233adb93703c29fe9988c729514e8236f8736bc7394d87c5447cdece)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x0daad50a1081e00c70af4cfae4eb03f9efa0b3d43d04c4fa50ce7ed021711224),
      uint256(0x27353609c4738c7597dd3bbb1f69ba8775dd4b10a85db694fb566c5ae7bfd1dc)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x2ae71262d6b9efa88e5770de7350c7e874a9aa37fc2b725943951b9b07cf7b04),
      uint256(0x23d0472ab24519f79a70e8acd790d4d0354a6c3df9abd12a3abadc4125568850)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x2ebaefa3cf43d6abd9a75d32d9f4df4882661a98acd31ca9f7e07decd322167f),
      uint256(0x1eeb6fcc3925fdf092b27a1edaed64363197f5b5cc49abcea93df089e0f3d15e)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x04605b64c765da059e2b46df78335b3bac8a01ea915b2d6806a5b32c7d835b6e),
      uint256(0x052531c470921462ccb1c0c0a42b06dceeb23f97d958d5904d5b306a5e5cd645)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x1bc2268f3ac3756bbb98a3e64e79a35f489320d76489b255b3909734b9275033),
      uint256(0x0297a17c2925134786c007de610c69a698c8a470ed6d152faafe4d0df0e0c74f)
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
