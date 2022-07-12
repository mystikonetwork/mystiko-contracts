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
      uint256(0x0868ce6a9f85b3cbaa46cb1cbb8ed99bfe8031d2086c7bb50b47fb027afecca5),
      uint256(0x0dbd9041278b993f3e0315944c17fe5cf339ffb6f331ee7a3039cf186b63afbb)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2b31f0fde52246d56b7b7aa760e8e08b2756bb20f312e76e6af3e57389f2b2a3),
        uint256(0x13525300b1746f0ebccebd28c40602da776f5a43a15bfd6b4bd9840c48668790)
      ],
      [
        uint256(0x199dd25d5d9158e92767e8ad08ab2daecf069638c2db96cf8b983abd561d83c7),
        uint256(0x0164c2a30efb84e50cd1fc40e285fdd28f04b87f781ad76d64f3922eb5dd4d12)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0c42be75e43b4670795f728d7aa08af912dc44e31699eb2eeaa01dd69ab350af),
        uint256(0x156b5b08eb09f565a1298c64940edfb2998d53d9395b44f50575b98d60cb1d77)
      ],
      [
        uint256(0x10e68153451ad15f4ab9c92d864f958f9615045fc7e97ae8b78dfde845976815),
        uint256(0x0e4776cdd70246a429ff1aed2787d9cfe8f9ceeb6c4e3cc513c37df486aec39e)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1e1517fae80eb34b2072066e56e96d51c25a4b1822e58c77a4069aafae43734b),
        uint256(0x2b81dc5208feafa7eae66ed0f0f44f8a8fc6d93bb205d54c2fdc612e680c09f6)
      ],
      [
        uint256(0x07429c613fa170851e22bf508416e2e2f9402c2e36b4f2409653dbd86f899cd9),
        uint256(0x2782768f9109b490ac3a5c5432b206ed848b9dc42d504ea1e668b3346eb8ec34)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](11);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0da0199b4c990dfa685dfdd6a960c2bf0968199e2311b1107323425a8f5189d5),
      uint256(0x134447abb38c633c9214ba5ca5725de0ec5344e93c7480fde9d8af0e12892a39)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2ea5ed88a03dc92b56f4d09621252cfb6297efdf8134ff5016356ca6dc0fcf72),
      uint256(0x077d45ca83d2913cfd6dc3f009771ef5b5d4120ac389409729e0dbe688603d3a)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x11a248e54bce9934db98b0228b9733087f03ee0469a59c59657379078432f722),
      uint256(0x03a88668cfb7f99572aafe875f7cfb008a440bb8e1a62439c49a965fb0c9bc5e)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x148b5b8d77d5ed5b450087916a147d508ebc3f994ce96eed97926aef01c72305),
      uint256(0x0a8c39ba6b8096a7f46cf7707d5164ffd968a2e9d5f27d06c03d4771cedfaa52)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x24a83d99daa383089def93ec1b81bd4b86243f426c71dea751e2b8a4b39707ef),
      uint256(0x1ebd88b81861aeb3de6128cc4c8bb44204584d881d5c477dbcd69be6cdaabaa3)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1a29fded01837885d41e51d1ce3bab081f329cd8904223a14079614b87dbaf22),
      uint256(0x1a149ce245558f19bc60dc61295fc28580996281c8132fa19e61588d6150456e)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1df7419957b601abf19490d8635200d8499f439c55d0d2e3cccadecc94ad226b),
      uint256(0x10fedbc5a046cf5601ae91f82602781296a0b4ca0676e14de4c684a60213b027)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x03ebb8619bf731d737a82c1de19add9caf29c492a18c83863d9538e46401e0b1),
      uint256(0x0ab7b9604570b4f551a8c37fdacc2b0ddb178aad950a4c97751319dc2c28d90b)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x01f32fa37ddecc2f9bcdbee923882b8b4f40c45cd9cf38ae61aea118bbc0cab4),
      uint256(0x266de9fb015722098153e653b3882497ef406d4686a50820fc7796deb8195356)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x0a183362625b1dffeb0f7cd27e6e361dc40e9cdd3ace182877aa15c6cb378ce4),
      uint256(0x1163d867263d83143a986768b52170d6086db77e56cf6ff4a6c1522cd6deb339)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1d6e02a7c884911e80c46a9290fad76d0cd3e7462d06b685708a8b46b14859d0),
      uint256(0x050ed246c2cd8bf04457197928b0b2bd30d8bfade59e631c1a575c26cc970b30)
    );
  }

  function verify(uint256[] memory input, VerifierLib.Proof memory proof) internal view returns (bool) {
    uint256 SNARK_SCALAR_FIELD = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifierLib.VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    require(proof.a.X < SNARK_SCALAR_FIELD);
    require(proof.a.Y < SNARK_SCALAR_FIELD);
    require(proof.b.X[0] < SNARK_SCALAR_FIELD);
    require(proof.b.Y[0] < SNARK_SCALAR_FIELD);
    require(proof.b.X[1] < SNARK_SCALAR_FIELD);
    require(proof.b.Y[1] < SNARK_SCALAR_FIELD);
    require(proof.c.X < SNARK_SCALAR_FIELD);
    require(proof.c.Y < SNARK_SCALAR_FIELD);
    require(Pairing.isOnCurve(proof.a));
    require(Pairing.isOnCurve(proof.b));
    require(Pairing.isOnCurve(proof.c));
    // Compute the linear combination vk_x
    Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < SNARK_SCALAR_FIELD);
      vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i]));
    }
    vk_x = Pairing.addition(vk_x, vk.gamma_abc[0]);
    require(Pairing.isOnCurve(vk_x));
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
    require(input.length == 10, "invalid input length");
    return verify(input, proof);
  }
}
