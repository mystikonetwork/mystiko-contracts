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
      uint256(0x0306cdd16cf66c58adae8b814263ebfbcec95f2d06f21c9ffded0de3419b278b),
      uint256(0x21b3e254e4ab91d98b017415afa476d625f2b42a196ff979cd7fcf2030b69369)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x12fba41d5ef5855e9c074043dfd71bae47ebf6c0492f55d49c75c9f3953894ec),
        uint256(0x05698bb745d88b883ff895ce257a6762d70992d4c29c6b30fbcfe188b4889d51)
      ],
      [
        uint256(0x0e1fd6cf6b2c3a48a8307a6fcddb1dfbd7c4665ee2c385411f41e59c60e496c1),
        uint256(0x0c270ad05ab1a62de67c6a2fa6d124102e6d659728162e5f2b70f1a780a245b8)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x20ba4e97bead2b22b13c5cd37481564e2988f27a21879cbd323a00cb87f05ec1),
        uint256(0x17018a018bbf8b0582685e7ac9b20c37c479a9f4b06acb3e73cf5f6a6698d598)
      ],
      [
        uint256(0x2d1a5b52fd09d2b5ffe9ea306d88126f82b15e477af288ef29dc5d0b424f0dde),
        uint256(0x1d9a733bb3d0aceb7eec490f453b123da3d5c6f8b04b7f5f3ad2eed56db54b31)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x29342471626b09a47d8be225681188c40bbc7f295ebbc118eacaa7d553291135),
        uint256(0x0d9d32e87c2ccf5011087ffc837c40ebe7994499958fcc3e28a03171f6f408cd)
      ],
      [
        uint256(0x1843ed4018893ed2d9af7f627fda0a28fb4e4078978a5d12a56b51f3e812fb70),
        uint256(0x2b9b35d273ac1e70a5d983ba38294cfd3162cd05500e97b92c6424138c010967)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](31);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0d0a20de2eb076811de152496d9b65afe6688a6d4771ff96fbd07925cff7220f),
      uint256(0x15a06070da34dba1cea5cb9f9a31fc18595387b58d76c7cce1981d3c73891472)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1dd34b145e371cf8e6f1c2dfe90e747676dd87b0fa49af55b7e82052662f6769),
      uint256(0x1aaf292046624610449b3178ce83cc4ceb933451e98556d99d43295b9822e50b)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1d7fcfba7b017097f7fe81aa83a0540c765c97c96308cf5afa39c2e283a0079a),
      uint256(0x07e23898afdcd1f38e9fd19463949da22c9a69d569dfc0bf0d2d422a6a43dc2d)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x27379bf7e36d9603d59a615c0b5a39823f088b02cc7d2b04c19337fc3739a9ce),
      uint256(0x25a3a5345a4eb4c9c086992ed6f7f1f04a2d6b2f5274647e504bf707170dfd86)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2cc3d50ec231b0fa6e1c91090140241168e157f87d19d0659504e7c7374afcfa),
      uint256(0x3046d33359079edc9ba6feeb6cd0b2dd051fd786042276dce04787ce293738a3)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x19eeae946864b0424aefdf55e1ea2bec21f31568d3fa0854b9bc686a1ed47c5d),
      uint256(0x2c294c0f2cef54908338c3745197c5f565e1ee3175babe87345f4cbfc25e9fef)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x254c2f57552256f9d10a59d115000a5d7e35e3abc39d4a60f49bbe24727997cb),
      uint256(0x152e6f9346e604fcaebcb05c190935f50cee09b87e88ca5b597da37adb4a27b7)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x11f53d629fdc9cbcfe26c108179aa692e2bdfb4bae8edb07e1e12722faa6c0f3),
      uint256(0x158726de2d64f957e7ec2bc4264cde997e8b73313254efd33feb51449b3e15f5)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x094e91bd2a05f12f9b374659272578e1ce8bf767850961d77990f1b92eae0cb0),
      uint256(0x0bd2e7378f9a713c328d0fa8a8b00de7dbe665adf27c9837f693393a9c9f0245)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x176eebd385e5d438d05e92c11f471e5177f765b0666d29a3dfebcb1c91c89c75),
      uint256(0x0ac6f570d45260feaba3ba4155cbed00ee7d2ac74fe81ecf3ed7372a87c71088)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x028e12d99025b4766c45ebf4e085266d859b67338bcdd3611b3f3da54b5d6a75),
      uint256(0x0274badd8bcd1e86eb87b6b720670337a7d9d072efffda9442a32aab0483209f)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x1171d645c90bbbc30eb0a0d3d3036c11567976c4fd795aadd9113ed7b8409a7e),
      uint256(0x2f7fdf15bbacc83b320955dcfcfc3f0ccb17df91095677942888ede274f9dfc4)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x03fa25e640d91e839cae72466cb900646e273bc859cfde94d5f52c1c2d160a02),
      uint256(0x10af4701607c2c09cce154d070e509818409c7508472b9e6f95da43b74a84dc1)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x102f76d4e2384aad8abffe71fb7960046215a32388b067686c5fea164cb1038a),
      uint256(0x1b9a16b571a7bf3f25b26227a608d202845ff3b33268819d0d0d63328d5eedd1)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1c3dd3ea5bb7527b00a2fe8158c2a8ef253aa568fba8d50a09738b1fb63c6ac3),
      uint256(0x2e482dcf72dc521bc3a281eb9ef7e47c373df4741f0778e974704e6b8df39286)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x23c5b16b26c50065a511bed2c98b8e5147135b9860c1b6d0c067e755566d1e2d),
      uint256(0x287c840b87db1824c650cdbed0d5f8d3226481c55917da7b99e64ac449c1fb59)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x1b974f0a36d4be96b69e81bb3b0431459d387f07230dd96c0265e9fb5294efc7),
      uint256(0x1de6546cde549dd1ebbcd885eb105a2d4863d8ead7c1ea5c41434e49f0164a31)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x20d60f50031bef6d213dc48a8b39a46367246aa231a9b73008d344f3bf7ad982),
      uint256(0x268bc1675f61f071feea67ef5adaf69b13559df4d1c98d37de214ab900a88cf4)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x2af6be4ab6d7e2b780ee42d3336dca015fd5588bf87ffff63359e4405c75fd73),
      uint256(0x25cf787943130b15e4427d2ac1fe6eaf1cb6434a9a40cac7543f547a2698fb11)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x1ba6b98f60e7cc9d701ac67343424064bfa4524a827e638e0510734bc8d4bbc3),
      uint256(0x2349141a6535af0d069e8af840806004d9d2f81e3148a3b46a392adb4f6adda3)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x05da48402f1fb193c939039bf626e91b267e29d6f0a292d0c95410e4c17ebdab),
      uint256(0x000398c206e19e61d14df303bbb6edf7fdaa225d01534f57485f2f2a3c3c0c3e)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x218e93e1723838606995b47bef8b28f649ad6fa4373c264257556c36c9015306),
      uint256(0x0c957fd0353bc09b59f68a32e42dfcc782b362865b823aae67de689de10e504e)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1b1c509da8d5b1950671b907138f625c6e172fa3f09fe40c364b8867a51cec1a),
      uint256(0x17a2c1c9a89234878999e0abff48ce9ac45ca118edfc310af33655b0d3ca932d)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2ca66d074197e4a5020f7af3d63c011d32a9dac1665033eab5648269620086f3),
      uint256(0x09787ca9885d3e88dafe642e7367a7722260fa4c129855ff29392e621a87a135)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x30541ef387281e56f6773deab0b52ca38eb77dfb5ce0f0de41523562ee083b08),
      uint256(0x1c03220c2c3494a403c5318e95d5224c8e487da23481f10ba5bbd1965df1c8b2)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x13cde834db52eb55fc7b4007d0eb05f00eae5cdc3b0fc3c515e2dab4525e5f85),
      uint256(0x1b3e64071c7e1f69a4694fbc3935521880b8bc75a39ca683faf3edd9b6dc0f0f)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x0238ff970c0d8a7c24254e5f4ade8fdf7e193b7cca9c3058896d98928c6fd4a8),
      uint256(0x168f3271bcd7a4b61c45881240aa457006307d70575fa121ac94f0eba387313f)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x094dbca0b4228aa186d4ab7b120b586aa3f0c85cbcc71d52b98da0838f3a0b35),
      uint256(0x0c4db45e4acfcf1b787016e58dcf1887549d3961b3086f10528c3c62afc3442d)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x0d28f4899b7a98d405b1e2f10465aa5b6edd7463fde04e4c9f344cf293770f4d),
      uint256(0x06de10c90903c494160438e61be30468757964edd353f23554ab871ec6c94356)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x048845e811492057b0914935db4eaaac0607f82da55ed369e58f71414d74b8e6),
      uint256(0x177fe6eacc518babe50d3609616703563f7abe0a8835189b988ab248d2c0e409)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x0b1d32e9f7a9cd466c4652acc027b472b471644547008e6bfc29ae16a2751e8c),
      uint256(0x00646cf5ff9b5530735ff18c90aee9c6ca577152442b1a7f501212cd14b015c2)
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
