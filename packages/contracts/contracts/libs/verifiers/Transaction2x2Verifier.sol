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
      uint256(0x139f81d4be96daa6a72fb302e737ed667178701b1e242693b186cdc65c4689aa),
      uint256(0x0f5a05bf7d3cfb0870a296005b98ca9c59089c9c8e5a87da1141a0993dddf7ea)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1f9b1a72006721d3a229be18a46995c5be8582529e762453d88cafb6c53b8cba),
        uint256(0x163bdc8bba3bccaf15bbcc603adc08b37b6d234877e83de5ab5c92b8054885d4)
      ],
      [
        uint256(0x00219a2e93b0f9d6a9f65a4a94d5c593f3b579a964d9e4660a9c0412a2588989),
        uint256(0x160877f13dabac279b0a6616b9489f92ca72e56cbe7ba7f08c47a6a5f3bb762c)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1689a5e0e68428af0328a161ae2550d3487ada0bdee8cc6976236deac9ac6690),
        uint256(0x1744300104c4d22a143586f36ea27a1ecdbb9fbd2067824c660eeac7cc15e433)
      ],
      [
        uint256(0x1de3675bcd5b04efc6ba5baf1142571f96752147a4e26170141c6396482daeb9),
        uint256(0x2e36b88fc855b445ea945d9037a1ad21ab436f49299b03ffd2a7990ac93930e9)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x286b53e141fee118cd7077116da717f9dec18f5004a5520a4696cb15ab29feb3),
        uint256(0x008ac66ede7fdfc053f3adef717bfc0fcef7228d37686456bd2035922f992d51)
      ],
      [
        uint256(0x2ff6e1e1cf1b043388c5b9b6dcdea9fd5849e0211fe7e429436a89d6708f58bd),
        uint256(0x0c1e484d2cf267575c2c28c0e5ab4d546d909274c4a64ed7d99b4970d6a38d75)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](13);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x102c7f3fa321d9fef47b7f4e7250d3c4483ef5637bf7f3c1b49bcbb242fae2a5),
      uint256(0x11223f9506589df27292673f889bf90bcea0ea0854f793d0d1e9b65216253888)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x18bfa3d6ae7b850a36f7b8b8535ae7cc2ea4d15964831dc752915e1a88eaa1d0),
      uint256(0x0c183b00e5ce6b64305dd868d00e6e8dce6a0592778154b99b9df8223681d57d)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x143cf5b3211f0e50dba763ad8d9ebcdd8f13ae8479b88daa97851c3f9f6046c8),
      uint256(0x1f850ef125e9d7353277fb30fd792f6ca5d2976170d4ab903831af637cf1f472)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0ec686da43f90d52423b4dc31a79491705b2a2299d3958628e38dd4f713e5b12),
      uint256(0x2d59bbedecf120d9a6649cf16bb5ccc15b7f136b55d1a811bb71a5d64406edd7)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0431637e5dc41d217ef3a3022bdb68f99ec82c051d1bbf431a67c2e3fcebb5c9),
      uint256(0x10866db230554c591bd00d1a101050f4a86e629b59aa891f497953f8d46f97fa)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x15625679365a48cdc44cb699dccfc32cb756ac3a22cd5f81b53fd60040fe4ff0),
      uint256(0x0eeaa90ed575ccb00c9e48a12c21766cf65a11f637ceae80f9271d573e5ef094)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1021c30347c64dfd5ab72af915943fd4f80d589ab6584990bb5f90f45f6012ff),
      uint256(0x04325e5a0dd2d49dda738573174f6d413a37ad62d9f4ea95adc207767ae330eb)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x014da6121450352820cefdb3379aae88ea61867bfafad99874f60875ae6bca83),
      uint256(0x1dddb2f99694d7dff2136012f3d633f3b191be4a4e1de28458d6eb0526b1b720)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x0ecfe24a340034b9f80096357c0c59572e573c610a561ca417bc297783c03205),
      uint256(0x04dceee94e3f8d1d8a621076c72ca81b5901fb4472dc7afd7fc7edc5c192793e)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x2396dce873de1e34580ff308f38a665b2f4f4773527abc8380a1be7ba6455784),
      uint256(0x111bfb2d696099cf8a59a841b02a458a816dbe133c540e25c3bfe5eae826d707)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1680240d849261223e4f7c4b4cada4dc897a05fa88263068289df8066715885c),
      uint256(0x11ec33b16bd90b3f509e0e8ad5e0796bc93bfca3ecdde25e5149a6013bd15bee)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0d73707cd045c8940e5872921e079d50052118ddfe25b4d4ca07295f0fa2c65e),
      uint256(0x179c2edb8c6775c3a288513ebc881d3edc2735975efbc5a97e502d6c481c7675)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x10316ff241df31d1a4cbab446de82498f309a6ea439b58a9fb1300dcd8fa98f9),
      uint256(0x01893da93ef65d49576a4fc9a98d846bc53f1bbd1b8f9b7ed57c659976005743)
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
    if (input.length != 12) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
