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
      uint256(0x2d73e9b612452bef90116b88f64f212fd24b017816cbcec37d03742bac35250b),
      uint256(0x1b10f1082a029edd9b90d09269b51c99ba2c8652e091ae804650682115436ff3)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2510080e6afb2684532a28d0f68a03b8f147e25bf32bb739cc764772e6dd7cac),
        uint256(0x21475827d3c96efc6c33915594750e55384a1515f849748f7efa55e2281666ef)
      ],
      [
        uint256(0x2ad385ccdc0ac435b1cb2ba70f27bff8b31d81e0509594fa9f4b177f7bfe6779),
        uint256(0x184a853e74a0221db5c64a4769eb68741ee72c063b795a9514cafc4409786bbb)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2282448aaf3bef75a67c4ef1c5418a7598587b4e5752fa26ae9463481c248b40),
        uint256(0x0e02a5549e01bcc69cb755298e1cdbe009215cf3e5a2274549507f0d2517743c)
      ],
      [
        uint256(0x0297a47296043977390895e35c3f5028d114779bf8bafb708333611cdf8c1956),
        uint256(0x2c10da373d7edcb84a38790e54751470a5f780d5c453c5ef5de41e86076a7458)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0d4354e1e078cff4e4e20cfca44bd914ff46df2ec2c032bd5db90160e3bd0135),
        uint256(0x2aba732fc5bbbd614fcb11c8100723156ecb93bd4c9339de967435b4be407c53)
      ],
      [
        uint256(0x03eb15072fa5ad23c3e7b43d8d1d9a35764d5e5c273bb3cc5aea9e32137da341),
        uint256(0x093377b2dbe4973b5d0bea57cc87af5d86376e5b63dab931dc9039cad0e352bb)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](35);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x059bdf767dbf1a9a383d08f1acbd646181ec0f4dcf26f6bcf1dda1f99208d994),
      uint256(0x02b07cbe2907d3d90067e887dd708efe5f940dfe96024ec60caa816b38e88b50)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x256d23ba900f29ec02c5e13238b915be01c35dfaabe236080c7a3f1b09e42c48),
      uint256(0x2a0641ad8e43dcc377ac6cfecc0ef42b64779618dbd7e2bc59063aea4e6327b1)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1d8b2a4aaad9fca5eb11604a8dcfcf1ed8f5572382ee7d33eb5f28a5082c12c3),
      uint256(0x044c86c5432e18230954358d7e92c469bfa32e5ed3c21cc29d0ba8ac66e357d0)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x04b473eec6124946858844be96c289334c8fefa40d491cb288e3e47078064cb9),
      uint256(0x2a60cf2c5c0aa7287ff62e5b9c8e3a38b44613db5189c5448b4fe8449fb85207)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2e715ad4ba41db382497b8494b9488c20d51efb57af6079841cd02bcdb5a8c53),
      uint256(0x1ab7b9bd89fc2e9cdd36816f3a89ae3db7acd5c11582be313db14028183d2b07)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0a7fae696b368afb14c56c7a0c5d5cdde9958023a809a5ecd8cf8536c0ead601),
      uint256(0x0dcef52534ad96a81acae0ba565254807d973e9e67a83288bdef71605e4c83f3)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x10facdc428393576d6154c70c80fabd70b60cc7e178acf047b36c5aa7c4f5505),
      uint256(0x0f5fcd85b08ed8b5d48dd138fcbe192d3cf1cc12bb8e98e90c1ce0a349e7c15b)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x23c05912f2c17ab43918d438326115ee702ea619e25b8a8ecc1b5f690639c173),
      uint256(0x01b6b98c511b89184418b71e6790395051458d69755bdc6d06fb225499166f40)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x04eb2cc42e53b35bf4b441b60fc36e9134df967beaee5446b464f2c45e160da3),
      uint256(0x2b8ec5227fa9b85fbdfedbee5bf1d33f9e2e71d64972efd20a51fe31a03a1e9d)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x19fd8ecef8c1bd9e13c68eb0b2ba18716fb617288f68157626beb1823a923b73),
      uint256(0x27efd842e5824491b3442887054dd881d566f5ca05dca8a91b20790d1b4f6228)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2a01bf9245da3177cbe93a09a1da3e7d45e1cb509e10e87edf2ec441b1b538d1),
      uint256(0x0900a027801a0271c1e74d29a868b1a3ba96b31204d3c7f699e3b960c36cfae9)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x300180d1421241e75ef6b913fbdcbcb09e443181844b8646b0cdfa224e1076a4),
      uint256(0x08bd087a563b10fb580d597d2f27555569dde53954defe959a96bc4e206dfade)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x1a7429444c94d5f7b63b0e0a0c6acbe76c03fca8c6ce7195eac84e78fd869068),
      uint256(0x2d84baae60d000a3527a66a69fec92abeed9032cddf7d74f24835bb4ec73b28e)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1640044bc06ac589efa973411a958fe1b731460509ae0eaaa601eca9fa31e5bc),
      uint256(0x037dfbd663b22fd4d168944bcae6b164a8a823550b6dabd62ef53145914d87ea)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x0c62fffddc02eef4077bcd95320fcda56f89cf78e9c95b77cc2e81e28ee8e636),
      uint256(0x1422c46027f8411e469ca25f9cff374df85801a81db89ee647a0347415148c31)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x1641f538110687d70c4e4c67237a5a5e81be4b4e360165d7dc007573065f2321),
      uint256(0x2c2c1ba0f1901122e525ef75e3475e7a1fb1c1ee3822f223939948303fa54ddf)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2e5cdbaaa1aa1fe042ffb6bb8711f81a97ed9a116f39e23fc84cb82efec7f412),
      uint256(0x2be7b90207beb3f1527d84021b2846ce0d683f443466926585145d98bce26f9d)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x10625c745c19c91b620acf47cb5573fba23ba24130295ec22006fd02d9f849c9),
      uint256(0x245b6d0f342133abd7f0846da2c74a555594448d33507af48e9756f79d677779)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0fa5ca9a9fee022fe22000dbc3c258bd73935ec81d4e5660017c4e56b2d4e2ef),
      uint256(0x2aa06c696161487600ec48e8dd025d61d9374b02c1685fead7660ce0107be43c)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x300d90b86a66efceeff2667c0b2cc635074d84f9556910f2871d43154cf06b30),
      uint256(0x06fbb35c0c593a7bb5956f200cea4ab92040a0867ce51953085b8b4bf5e6b8b9)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x25315fb885d2def450a3c2ed6b71c70d24a653c6248cdbd3275442f8bb7aee76),
      uint256(0x195c83f7752a6eefc9984429f1fc6fa959e08aebb96498f6fab07cbb4b8ba48c)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0b34d388f0b9285dd8c0ec7915b56361bd5df7eb358505528f63668a5855209b),
      uint256(0x08a007f5f66206e952351e8ef90dd84d2e3da2544c81e0eb0164e22d0eea1154)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x197dedcf488655ceb057101a27c506b5b7e92604d33fde471dbf2e20dd2c4a46),
      uint256(0x2eb2b80b0380b8fbd319925622c7013e8d7f96fa2ee3f42bb90070417f052140)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x074fdb34969d724018c097cd1dff08373e1b42bb78111d71ef6c4985d2297e23),
      uint256(0x0cd9bd6cf0f814208c33b051766502542fa40485fc5a357d2f110ceca70808fd)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x124c5d5799b457022753c21cf8ef3c617dbac3e16673c00d7b06186ec55d7311),
      uint256(0x0c746eeaa0bb024372db345f09770e6c6d3e10f40763c4f5733a7183317653be)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x1f2c2ac8d5746dc7f31958f57ee1b9842374c7e56579b74b110c4e1a13edbe18),
      uint256(0x0d57d96306c9ec5eff22c6ca9920a71c3c38726abaacb9f84cf2cdc3a313bcba)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1dea4179c68c63bbd730f09ce825f1a86459e89c2b916fc383b1fc1df943d086),
      uint256(0x20420986bd2471f7ff518416ae7a4c858c9a2b77270e9a0fffe6bc0602be7610)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x24ee76f74593ae28a34c6c662cf730c76efa7ca02a1a7e0df9de59a24f5823ce),
      uint256(0x1ae9132e525fbc10d407902ef495eac15b73f58106143d6757abbd602452dff6)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x303b6cffc0f6962080199825f7947a546f31a9531222fa6aa8f11aaabae2bd63),
      uint256(0x06ffcf91da43aa17610a8c237a48e0421ca6ca204bb07d866c6f4837c98b614c)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x167f305052d768ab5436383f0eda6cd4f16b70c5151653af128c62b224caca2d),
      uint256(0x18389af0c846eac57ba8b1d1eb3707f8af72e0ee8cf6f50bbb32846a39119870)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x1f346686de86fbeaa051595d0caeea9f35d8f0d290a93d509bd9ae1a638d1f45),
      uint256(0x16a868c0bdd79610bf8d22063331c25c006f2e3d927303c079ce8d3bac88ce69)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x1bbf685bd730f4c0096f9ed3c4917fdbc21a0452cb61ade1fb0b5508f2ab8060),
      uint256(0x044cd2e2adaeb7a0900f6e330bd046bb3144279783a49eec972a861741802897)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x2684594c898b1bb70ccdd7086fea0ea3a3847be20c6b9d23eb7ba0191bb100c3),
      uint256(0x22dddf6d307da0cb996a4b900c27ee10526c82e75254110255006bdaf0eb9a8e)
    );
    vk.gamma_abc[33] = Pairing.G1Point(
      uint256(0x2d3ba7b7af2f62a58a5a0d3a2423da8ae1a830d36c91b4a1032478c05f01e23c),
      uint256(0x2d0ed9ae344602e7f03c111224f0c9777c6293afba45604f8323859dc6300e3a)
    );
    vk.gamma_abc[34] = Pairing.G1Point(
      uint256(0x092d2490285ef37d5d63fc8312f43ba5a20eb0def38a9a1958281b6bc86ae665),
      uint256(0x1e57c7c839920a9e042e3c4f2a4e59e54b0d9728fd3f0c42f589b167995b822d)
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
