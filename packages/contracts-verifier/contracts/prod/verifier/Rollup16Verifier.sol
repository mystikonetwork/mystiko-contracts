// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup16Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x18e2b4813ce7c5f0c90610c2786aaf5a760166afadd228ef3fe455eba3fee659),
      uint256(0x2ff8ac9fbc24b5f50069e37c80ecf909b17e71ada49c05775746428aa621869a)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2d65126b5430b99712bf3d84db90d16540e193ce5e9716120771cff758d75609),
        uint256(0x053f9595ee30a417288730b18b1dd24c2cf53ada92b9be8ca0b429314d4a9fcd)
      ],
      [
        uint256(0x16e1594c8a53e2aed92a4c6d3a91ca61e5e82b9ea722b8527849ba69fe59fa24),
        uint256(0x132c2bd57c21999cae7be35dfe357199ce740425532d8b4d648f8c0765cbf527)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x04aad6b536aae008e5136fa4791d67fc967632983b650c2254487b9c6534b857),
        uint256(0x2db602c4bef21b69ac2206524f5be48b8c999955c34c4cb664f501a89dd8eaa5)
      ],
      [
        uint256(0x279514401fc344a70d347b1d4299df7ab311ba050019ec8f13090314f23a99f8),
        uint256(0x1ebe68a1801476727b031257cdae5c65a95c102a4be5cca62c26355924838098)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x051eb1d4cb8113c3c597e8e609752352cd0239a94e717ed61e71d9b982aa74e7),
        uint256(0x177ab8163bd922607ccdbb11b1193ef039d61b2b6c5a904a093f247e76ea3c3b)
      ],
      [
        uint256(0x1554d27ddfa60de8e9ac72042adbaf991c0df264319f0709d12fb3cdb73f28dd),
        uint256(0x270b9b1281a2268f14c099c5ecc570e19c19bf5e1bb22e1de5a6f0d54443f4f3)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0a747a8090bee5d14da41f408de6055b44768100ae7c200f3b39eee3c11e3a46),
      uint256(0x0dd8d12dc97ffcd8ef749fdcef62598f245914cad400222b22606b4ff4263e7d)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0aedd47d6f87448fdf937bfbed784afaf609ff95e2187287d58115d5fd04e2f7),
      uint256(0x14805dc713dac9082d830ec35616e105d2a04bf2b1c8ed73db791b6eaf784e24)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x01ece154feee68a170b8dbdd12cdb54e95e4fbaf657072226a8334069e09550e),
      uint256(0x149949cd53606ba6519bcd64d71b9a60ae00343d3b200da2e4e83a36461e03dd)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1f8d2d8a5ff80a59cec2ca05ed0a0ce2ab2e67d0c051c8f8e159f645bde3b2dd),
      uint256(0x2682abc3d5e0c644dcd91530a068ff4a1fd38bdfaf1c9c8b2f55c630a28c4004)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0a6ed8fe2ffe703e422244687094694c1c1f24b993e39afb02029739124be861),
      uint256(0x0ca79c1105dcbf0d1934204307b8b53fa72df9d5dba0eb91dd5244aa04d04684)
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
    if (input.length != 4) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
