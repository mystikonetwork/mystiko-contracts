// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.20;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2a2c1c2c246a417711fb7bb5d13703f7d3feb5d77b5b9fe19d1892c4e3012ceb),
      uint256(0x05c3c532898ab1755e1b0b9da11404c071ab472ca1c4f2f2b861666c69f5256d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x090703f77fae8e061b5832458fa8d05a6c888ff8b36d0cc068c23064caccef19),
        uint256(0x06184e848da7d955a2cffec1cb17caa36ec450f5efd97694394649288827ad81)
      ],
      [
        uint256(0x2eb7b9f9c622fd1c4b01b3b88a4bfec32a7328b4c59b3dd186ed1f9275b50d5b),
        uint256(0x218326dfbb0d451dfc85aa36517f2348998b23d39fe963a18b6546121f3786a7)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2a0c5a7add9cb61291af8640efde3ae7644693857598c93b4711e9836864fc03),
        uint256(0x0b3f53d8426d749394a541cb3d73fc305831ec3e5b1b4fc76b1921b403941971)
      ],
      [
        uint256(0x1a79a29c454d6e22f6082c7e37e705f21f37b6ebdd0e1da8f381492d35c94d40),
        uint256(0x19c637aef958a9ddc195263482d0de0ee0ad026748dac564a0bf1071f0b3ea39)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0e4550e03865dda7b48118712351bee3240a75461b90e3d37fedf7d694be6346),
        uint256(0x302b4edaf7d5224e6fd45b159a9bd5b15d6e130d596db8f6ebeb2c76f75b6a01)
      ],
      [
        uint256(0x24b59324ae68d35e72a939f3e44206f2ce51cd62db90db0a072ac8b205c293ea),
        uint256(0x1741e69ea348455d30cf108afadf12b975106ce99bbd444726647ebd78462334)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](26);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x09227fdac8eb60570ad6304ac15e5602dbc37a78569ded6acbd5686359d9ba12),
      uint256(0x26f0ac8890d372b2f98549fb48db3a093c21ae89ada2d3f05cb8779caeef8ad4)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2181251b37cc669b6d4dddf3d3beed4f61b1553e5ebdc066bdc8021220d464c6),
      uint256(0x12ca956cf777d5ec79e2c35709c72f9ed850413d124784dd7c0c999ff8c152fb)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x23f034484d2b8959d4ad176d718de96e992df75ece639d69b99b2986cf8a0622),
      uint256(0x276777344143fff9c5c6b88c4871e0bbf06ab8f95ad82ce3c880b872e5c5b5c7)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x23a93210e722355c31cf0c6523d9a7fe0b810334af8ba22133ebf231e5393483),
      uint256(0x0537b474b97d3eb2e464dba47cf79b3de6ab5f3f3a26dfc9d956a327502f323a)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1a2324087b49c0108c673c146cdce3646cdfc06064de4feb17c5e22b0bb21e25),
      uint256(0x0b8688ffb1297d956694041c549b8e746325d8e371329aebe96cadb24070d51a)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1be64c1858d9e5102623fb20a208a324d872acb0e39c2e7b2e87714212f1fd2f),
      uint256(0x19b4e9f97207c48346415751d7621ea341164a4af10dcaf007f6fd80b97f61ee)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x2686f0d5d67c795f88b095ca51b617c7091e23642d5a0562feeab0b965167dd2),
      uint256(0x17e4922f5ade76a262f7a07b616227c875d97b77d5f7dd2079c0b596529ce559)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0cf4a4d98050196de7c11d66f3309c6aa4e192f9b9305c93ecf69384cdb0deda),
      uint256(0x0bda6fac106442ca2601f39954473f466e40d182360a3f5d5728859f124f5277)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x0f57e5f752a6a31e18d441f06d6793761f87b9eb255e9259b76aea104cbde21d),
      uint256(0x1ebebe2c05e2262e3c59f6caf33f14fc302cc2d1878cf8a3d61924ccfbd3aca5)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1ebb6add71e58f0a50212d8525385fecfca4fd25a9724f9a401c53a1f0781037),
      uint256(0x2c856ca3865689f1375a25db57837b91639e302b3ec761f9c273e80500402bbc)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1b6ec32a4f4908088175d91b34f9b62075310e8f6ec058fe72457b558edad7c0),
      uint256(0x04292621ab206347c0e445698fb8ca040eac2f02dbd5d678c16f76d45cc070d6)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0d41375c0806780657c3dc55e7830e2d8a951205924314af619583a601c53842),
      uint256(0x282c78c9492c0a27b941727a155e73e1d8184d0959dcd768d98f43bc6924012e)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x22e95629d9d434ada4c2c2a88974a6ccef93cd79aaa985f307dfe5d988ebe5e1),
      uint256(0x16dfe601e592921977c3bbcf9964088ed850e70372b364e389704a2c182ea8aa)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x06b806cb6f2292b6f77d50a7531fba126d84bdc0f7a2c5c7cd292615f2f00839),
      uint256(0x1b8a8c3dd861c0017d161f08cf4a141fd2af43d121dab2250bd1098db1b6a725)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x2706d34b1e6b534512c54ddb9e638dfded266f72153a395b2cd23073f77826c5),
      uint256(0x0a05f472f2c307543e900146bf731704f200ff19e0d3d1bda1185edeaf26cd3a)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x2f8f600f41138b3d4048ccc2b905a2776e8c48593c37a44dad401a151102d6bd),
      uint256(0x0aa39741cc598c67422d106172ea8c9585734da6f33d2ccd95b02b3985f6bee5)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2cb6e966cfa18510d88efd1813af1f0a39456e7a52ae8c2b9e76e21fb13e8dc2),
      uint256(0x147e11e32cd32e4bc92fdc6664cdc8cbd0bec7519b589cda7dfee7dba6e2e977)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x24f92a5e6d6f4824404f3789358e006aa75c0071d0ba34839297ea146780d73f),
      uint256(0x2d0be928bb984ebdd5a7a1f14634b49d359efb3387ca74047e36681d690de495)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0b587944695f8555bb4c9dee03fd24bdc5ed9e3c583a5e13cdc19f36e022af18),
      uint256(0x03e3257e6eb5436baee02d1442b354770f10a3da2ffc6c8a3f0fece51a7c2c1b)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x2fc1c70c56af51d988471376de202273fc93f4b73ed6a9ed6ad9fa1d8db88c57),
      uint256(0x06c64f31d26540c41d42d151cd06ed2913b49620d457601069e65580a60eadce)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x0cb9e8ed2ad9b7f5c49e310e9e42aba083f3d23708c1ea6e2619bb9f3b27a77f),
      uint256(0x1b2505c4d354cbeca111ad0744e39540c02e4ca2d8fdf1e36790d8a74e587702)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x3004d152833025e99118823c1bccf4c83cc0e5e16a495326f301d08091b262c0),
      uint256(0x1f798cbde83d8920c7c3d8f82b2866f2a8055fa035cb5e5fb95321c36f68db90)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x14b6a34577357d53f9e15f8d60be5725c0a4dd67331b257ee693b7cac6908f3d),
      uint256(0x11378c952cc15a50e0747dfdcb29c8ecd00476c84eb8ced37fafbc55d2d6017c)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x04267b2701d28c0c05f4c1eacf6e39173c3285c87af07e7d54755e777d22b804),
      uint256(0x256ce316484bf6e8f9f53bfd22f4887545c9c322fe97c8182df36abcbec7c2c4)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x25a80ed2ebf2c5454d16791d04d01e225ada0258bf6244f1475bab7bcc9daaa8),
      uint256(0x19f5107d7d400129701d14269b2c1695154d7ad02913e5ae64a48ed9cb777519)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0ab546129e5cf1bebb47e88878df3f54d524ee276702bfd6c007d6712f409507),
      uint256(0x2ec27c5aed9a3756aaee29884cb9576f5dd2d8b68064d3fae873174359f20b06)
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
