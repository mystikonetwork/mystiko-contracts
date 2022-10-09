// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0405344e8a3f45adca6af446038caea5aba18d45f9c452fb63bea1ed7f165af5),
      uint256(0x0af163b7da2fd4c1c5b723c90b1f2840e7492645f5b83fc7bbe94cee89d271dc)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x25ed309193c452c9b0653741305fb4179723dfa5c220ad66cfadbbdbfef893f2),
        uint256(0x0cfecbb697ee20b919d918096027b9b09f66844574283806b742a90e8455c3dc)
      ],
      [
        uint256(0x2657257b4bbee2f297de8453dea5e98cec83330bd7f0efc3d08054cbfc8d7f52),
        uint256(0x181b38b3620aaa3299be4ebfe321ba2af155ed878c07367e9f8a0e2e2e0d1ebc)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x299264c62d0283463b4590bd740ee691cd46c670cae4574919dfe2a0a10ed6f6),
        uint256(0x249038ec6a211c26bfed0e41fae58d0685c57e9186da303e8e345caf872bb59d)
      ],
      [
        uint256(0x21b2ec043a6c73c34eb254580d8bcb0f49deba57f8fd75962ee40bd22243f6b6),
        uint256(0x033cd724b96f21edf34e9f40ea9e6a461cd423d4c449f8b27447510b67042cf2)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0d8fd8eddb34057a319d8fb1263cee8314cd2cb89a3059991c271197f34a73af),
        uint256(0x0844eeccb8eab4b012d2818e5a9472db0f8caad47860e5b02e00d26ae9849790)
      ],
      [
        uint256(0x2b68ad0a286d663b99af1bb20fb7c2943e92f51c8a8e30657e480543bd10fa6c),
        uint256(0x1f3bf58584ec965bba8e05c5add3930216f373fbb3e80c1cc6d7680cc5b87396)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](26);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1b0d4f062a8deab95c3dcadff5efab290146cd0d5171abcf4b8ead53af6e55bc),
      uint256(0x21823cab12801c15f5388b5012cb8fb3f15b045b87dd8e2db89de75dfb4cea90)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2fc65e32f341e8f9fed8ba74e3b832ebabd33c0914d281b291e4c832becf11c9),
      uint256(0x1164defb076e86cf7f92411e80b9be1690dc9992ca3397452e21ef269d1186c7)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1a78b1aad96e7e25b49842e8580f0baac79611d1dc665ab177ad4e4585c8dcb9),
      uint256(0x2eee50588cae63eed94c36f310c874808107596e188a7690c04c3b45f13358e5)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x16aed2f0517073472774c9039e52eb2614c8787ac634d9c4e2d22155bf920e9a),
      uint256(0x1616538bf045303fa7ef2208b11d8defd4a50284c74f8956c671da4a68a60458)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2c910f607ccc4f6a4404f30c7068b4b2e76960658abbeb463c6f92d5d744e79f),
      uint256(0x1507935894b08095a6062d003e082297e60df7dd07b7f52a6e38edb8f2a71bac)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x2622b4dadfbe7ca2cd995316aca09d5b4d2f9d238d4d1e17547b681fb597c349),
      uint256(0x1b98330fc6f6c00c852c5bc833c45c1f8ab54368d8cd12e05637f2a2df2c3e30)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x0c9e2bf150d2de2bc9862a464ec77dfe03f5a0012148010b8c7bebf307b63432),
      uint256(0x17fccde0142be8225c2d798b335d44fe49c4aa1362b00eb932aee2745e93edb1)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x25ab2e1c4685d857a5a8c0b0e3d3c5c463544a8189978a5fc6cbd51aa0ec8a76),
      uint256(0x0adf57657d2893bf5cf87a265b419927d86bbb6914a675235c27dca859afef0f)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x1ab1692899c9257d8d40017aed8579445ca1d9bcaf12b1310d0c8d4c07a66822),
      uint256(0x2f65c279b1a8d57444073d516bd2434d11ac41698946be901697cde7ed4e9624)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x025d6cb1fb6cf7dce8ef1596052df158dede950c6b5a4733c4b0ceae9b5a82fb),
      uint256(0x1a37c2aa2397ee3f2768936fe8d747c1ddac5cc4fc231d95b0d0c25b9f7fe2c7)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0f02ea03c40f78e4832cde2523ee89da9e9c07a43371567d6066f6c16a90a77f),
      uint256(0x25fe24d46b244334157ecd0fb4711dbe4581d756e1dcd6038f6324cfdea9c28a)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0f256bef39c314a5b996df169aace804a4c7c7befb2530958a2448495af18705),
      uint256(0x240fa58fe8c8e92c868416fe5fb21227141f9a698013b4b5da2777ef29713297)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0ff2eabc41be38fff55a15ae4ab387e6a7e2d911e64156253afc9e0ec97af50c),
      uint256(0x039e14043f99130961fb2bcdaba01c1b5e036a20300c652b67e1d81f267d3492)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x2384ee272619098d08df503f37eabefacbc7b4d0201f80113eba421cb70db27d),
      uint256(0x1abd016f0d213dcc3ed3e222e5c0cdce5d324ccf4c096ece66125dd796cb5235)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x147bc19ea663d9f9c33b8735c023ab943e7b7d07f43cbc19fcf2100392a801dc),
      uint256(0x1be051b2b237dc46033fe87ba140c344346c585394569324addb05328399c7da)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0728b935c6c7f4f53abfdd2696357d083e41e71be3517698f5c1e7a25dddb7f6),
      uint256(0x10a78d6e964c23fd80289f00d9f5dc4699334771c9ddf187d2872c0cd1abe189)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x29b29ffb96a55962cc6e7cb6ebde547061637e6d29e58d70decc1040f48dd8dd),
      uint256(0x0239bed826e9d1ce3157a44558f51afebebd894f6ff18eb42106c7550d6a0670)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x01c6e8a15c8dc0fa27475f956468b32242969cb1c3e3efc5bc914fbb1b832ec1),
      uint256(0x163d241cc06e7318f2115c20172069d8bf4fca4324fab74dcdf0509641639ff7)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x00231673d46c27412225f810b1f68943dec1a2a1104a41dfdcea2dd72570281f),
      uint256(0x2e2b677f4f8dd44e02c3b34bdf3ee71ce51a68bcad33000ee7e6b54e323fccb7)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x148da7bdd5bb0b96c0c2b4cffd338e16ffde0a7dce2925340c39053ee11ea946),
      uint256(0x18662560547c89aade8283f5e632716dc05421143be758981a4c52caaab85960)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x15c2c8d1b90e9e817f7b3ccef4e0c552c0a0f4211308925391e931077a6be2cb),
      uint256(0x2084b3bd83561394b54a402a98348d028e09dfcc0e369d55ee0443b573a0c3aa)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1a44de9ef06522579b32951e94709491b6a6c995952107d734c521caf225c0df),
      uint256(0x203879dedfcae3e208369f0e22c1e059734a2eacb75e5a1c89313c4edaaa7dd1)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x2b6f894cecf265de9a24edee747172522b014b9a85f8ae50efe681825b1096a2),
      uint256(0x1f50aa18a72493957ce84e7deea37e01a7cd26b5c1ff361f0fd46f2e57bf1e6c)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x1a83dff2c1d824362bd33acb6952c659c91648af74338b273eb146447699ee4a),
      uint256(0x1216bd91813056dfc3ade680c4cfa9ba5f3cf34232df503b202a8e6d80ab53cf)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x1822bfad99c46f6105f7b426d5b40654e24b9e8b4638b3f2d38ef500641293ea),
      uint256(0x02cb4571700a1a13eb932ab447008d7c9f7017d530aa4a125b394f5f5768ec12)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0494e624387caa7cb3d90645587e12decf7ac183bee7af2fbe61f1c045975fed),
      uint256(0x2ebd598e8f58d1be436abf7e20ee7dce2db8fca76efebecc868b17ae0187c040)
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
