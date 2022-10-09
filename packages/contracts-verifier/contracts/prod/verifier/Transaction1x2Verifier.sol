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
      uint256(0x23ad55b3499d4385ffad2174631c762e5646717455f6e1f3dbf358084e62f671),
      uint256(0x28b01e315be9d7fff187384ac5624c5667ef34fbcbef629f2c6936a6e5b5118f)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0f88cce403d942c3ca4d0b5874d273403bfc72b489efffc9616cd4c73e9f2ba3),
        uint256(0x2cc237d4339871e81bc43d5af99137b7847667e1eb216fb83b9e95181a1b7971)
      ],
      [
        uint256(0x2ceb488e23488f73f9f5122eac15e1605bebf3dcd66de9fd6b0e83d149c5d4b9),
        uint256(0x24b6a199aee46199c7ec331ee2028cc842ccdf012b0c164261c2f0f59f67f613)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1b90848e980519a2b8ccf7028d60d2e61ae55ce9b35ed17a6712cc15e57154df),
        uint256(0x105866491a2f60cfa04ceeac291e835e7c9c1085fcc194f3621cfff42b459df1)
      ],
      [
        uint256(0x0599f4f55ea87f47567887b2faedefd70f271953d2d076b4fbe5437acaa3c22c),
        uint256(0x06cea89b548053587d42675ebfbf9ed01c480a01959833906ce5722f403c39e9)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1883ded0f2365cd54ae5c6813b9c81e5b93ca92bad4638c8651e503080ec801e),
        uint256(0x161fb7e74d002a5b9396a4def95695701858a8548677ee71dce583fe240a35fe)
      ],
      [
        uint256(0x0b710f126d46d9ed46eab8ded2e2c10d3d55fa2c2a035d75156b2e46b2ed4823),
        uint256(0x1d9aabef5255664f8b1abbc9e572ed6722ed2d312a9db620e26d6e5943a755d2)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](28);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1e355e6ee32f5f797c8cdc2955c59b0a7355f8744189552b9e74341223fbf3b5),
      uint256(0x11f766e74511a7cbf5277bcfcc02fc71c1760b4bc44756c503c2743cc7b1f7a1)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x273f9efb802619fa777ba0b00974c0bdefc2c1f3c7530a3779f93755281c205f),
      uint256(0x0ac7d6c40a2516f77d67e7ec24b203b885b5eb68669da8752c4430d1e15de1bb)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x116531129354cbc71fa7294296e99224ed4f66c72c387e10db1f834e391cb8b7),
      uint256(0x290f5b3022ce90d0569e2e9a6f94b382f26457e2b549e09e326c1cb8b080fa11)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x12dd6f0fc2cc1f8070dffc01ce7110e2de8fd8629271a8b44721d62b118fc810),
      uint256(0x0fa1f850401284e38846fb4db78027aec308af9af2dc20d2993896ec2790ca62)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x22b83b4a5483cc1351529c68740341f8d2dc78f34d4a484ce35b8fed88dcebcf),
      uint256(0x06a82a8555c91810550acd9412ab6246d27dea61624b1c347c4d596ddc2933b4)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x222aa0fe78dabd634716f6a33bdea077c81fc55546ac67e26a246d42c8c43fe0),
      uint256(0x14d7ed46bb5fc9b6724a54e4093f1bd833625bc4ade75e06fe2684c0c3ef8f95)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x0e40244f5e39c04bcf7055bab573890f9a562a23c49003ca62b0652fd4d7295e),
      uint256(0x0cd6c3b4be1acbb7329a6ede7f1e8dbaa95108a1489edc00ee934080cc990407)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x305b8f68ef2c251f38e319f19c477e9f74ac03468985ed7924ccdd91f4020a75),
      uint256(0x093b72b0ee11b0b1e935b98cbcb496ac942382278553aaf5bd416666839058f8)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x114fe29c84795f1fd87ce294a099ee983f20700715d43744e5fb9a12b771b410),
      uint256(0x2d4d031b74ec561c9b4df39429b1f7eff097dfabde12448e6aa000edb2b45634)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x22b9464d9554f678e0fba42da4e17d966b50a2c6099c7d1d444896504f5a79aa),
      uint256(0x0adb3b115a186a3418bfaf1b6df2bb5adc6303cbf6cdd1295cdd11e6ab84aee4)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x169dd09f925095f0bdd153bc18f699561e008a115d06e46038780e5ba4a089de),
      uint256(0x0bb27dccb0ead74b265904c88a1651fa49717afd57d41fbe5c72f7d003d0700b)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x1f75e4e9e052ef0332aaceec419119f5a0d2eb5e4c44e4ce1270ec2000c0a2c5),
      uint256(0x2d53c70e67c3367234614f52bf5febdd4fd1d025233ae28a4d253c72a1f28a26)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0d27b2e6b1dfd4acb604a0443efe9aaaaeac0081fd52db3da93b5536879fbff6),
      uint256(0x12f16b33c9b67d531d7ec6cf69a8bdc9c5370b91331e0ada50a87fbdc4d2a783)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x27bd93a0e228aee86e92d571571cb67dcfb30b56cf4a510b9c9f4ad567ac3eef),
      uint256(0x2862dbef54ea5a238a91093dc9b2f9e1c45c86ce37959b25cfca3e1c9ec67b1b)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x186b7d58632d14e4357fc99166b2e48fe1995f248201f62a9c462957a7b9bca0),
      uint256(0x13b2bee91ec4f49024d99bdd07c58c04d64e33016d2eefc974a7fc9f8616fec9)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1a25f51c299c7de79e7f1fa9d559d3f06aee2eb593c3c1d91e1df14c731239ed),
      uint256(0x064ff01916322691031e08be2a15191e177c0dfd24f1c5c983b5aed2fcf4eff7)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x1d9044d0e330a1ae43f69384864e2f87ff0080782b0c069cdabf27e6c23f2887),
      uint256(0x125a59dbb92ea27e965f9b50adbd6a896e943f43fc8536004bed6db654e33726)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x2e154ea6f88ba0597c115673faa84f4bae8f0321fea23f977ed55a3e2388be5b),
      uint256(0x18264f47699b1b432bf39d2637018cea9f58eeab245e777fd00b560f9aa8cd3e)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0586acab772f6fc2077c630d176e0d9721c8c46c446d74537e03434df98a779d),
      uint256(0x15367084f04bdb52ded6943a68bbf397e22b7170a1d0b074ed5b280d4ef8f20a)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0c88b4849fe8216470ab1e05ee91da8280c6243a955a79357b6fd004a31a5e94),
      uint256(0x1a8e80d831a3b0f17c78d3c163cb65e412c506cebb45fcad37c0458ef2ae17f3)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2be7b5b5cbe04ba898470f661aeeb871d9ea872214409b7adf2d8b480f77d042),
      uint256(0x0b81afec6704735fb01cde61ecfdcf4f24531565dfaaf7cdb3932f3ddde8960e)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1b512c2e779a56c06a63198230e7da80ad4f4d1068647ea00b185d3a4a94b3a9),
      uint256(0x29e42e1d472b0fcdbdfc9a9a35f5b0a50d0dcc5090d60ec3a7f92dc0a6e0e197)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x01fb186483293405f408be8fb22763084afd11313de396d52a77feea11c9b077),
      uint256(0x2eb653823b190a1862960bb5bc73b29a91d8317b06b16129b7d0d29c9df4beeb)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x24d855989fafbd48850fb964db8afcaf813df6340be23f7b0b5f61e6d89c278b),
      uint256(0x1d6b5e159e97c921c8b24978b38a3225e322177912a967318b45c64bf6d94d1b)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x1ff574496df39b2ebfa57697de58def4e487d53843e1cd22876b0b4b93059793),
      uint256(0x1dfa44f5322e344df7d8544f4ef038154c90092e97dd4229f7e6eb47b4f77a50)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x2cb57b3734d199b4e9dc3d4adc3a0d505865996b7825047db442a2be9b7031da),
      uint256(0x033133ec297ef37938a3042401e34150b0e3df66efb3ff1547336a340e3facb9)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x05e1f0d0df3f4163dc1ee7a5274bc7acbc0e8394d404443922ff3feae1fe2657),
      uint256(0x1e5059fc687dc7524fa6ceebe92ef42ceee8a4921b8d2a43976c3a5b70cd3ebc)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x06cf4230ba54d22c4c1ef4184b64d88a20b30b2c02479b8d6ddde9fad131ab91),
      uint256(0x1041534cda970d7c32e600fadce432b8af1d45fe02c940665d5bd3a4d72febcc)
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
