// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup8Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0e7eec6b0f7d2a888aee810bed031c639af5ebaf3eb6fed2be14c7ec728e76a2),
      uint256(0x1663f0fffee502b905d11bfd575a94118d2db0725f26328c1bcf47f1216ff024)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2d5ebe2c681953bf615f24641fb76c1703ea58d500694ae33d877668ee641984),
        uint256(0x2d16d4ec3278ab63dd12f09e96434aeebd92943f98f82cda0953354fe39176d1)
      ],
      [
        uint256(0x1235b2f2cf86578d402ab2f1053092f6921c309ff7bf70aec9b35e31d0015a32),
        uint256(0x199162896c0235cdac7dc401c04d7966ea600edb503f10b9c948b142dfe07381)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0aa87183633b6abcd69668baf8119624f053befe0689d309928232166c6d48be),
        uint256(0x002d368ce831130a9d02ee9e9cfa484bf475d88b7618a15283d6a23e385eefef)
      ],
      [
        uint256(0x1547e6a811e05290ead0b9c34077390671ca7b1f0da83be9e0a6a9765238e363),
        uint256(0x0588b2b9dd9b9a8f2d05dda81c8f864dde7cb67a3ae8d65a7e98eaf3b179e1ad)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2b2e0fedaf5ee8e100081d1aa95b03fab0f7c29bda1a74e92a69a57300ac15b6),
        uint256(0x04983a9881bbb1110aca501af9672a14c5c867e650c93d254fccd1401096fe66)
      ],
      [
        uint256(0x03bbf0d4668050d7214daddfae6a9eb32ad945d29eb845bfd4ff229a0d52012f),
        uint256(0x04f5c886cba9313a6ce13d3b24538517c649e0b754c575a76c28cd9cf1c74123)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2b8f14fe8f6de29fe237a4b3c9097c303b6b83690e90779a5228e6c7d07c26ca),
      uint256(0x1c45c915c3cc3e0db3b5f6f404ae804a4034d79a50b8833ba6763eaa29eded34)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2eb46580378ddd3ccf0679fe367f23a9eb096d943184fc2fc957a904e13c2d37),
      uint256(0x13c01ff2413db94c94a57c314a14d7ea99d6385b3ec958a905627aa3da15a131)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0d997e6920790275262cbbbea4a9baf28a5fe5e75a81914d54f578440fc2f45f),
      uint256(0x25b6dabdb34795fe78ca85f35453d98e52e01f4cabce961342d9d0e96f0b2ff5)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2dca9338a82437279bb824d2403e5a91d6d68d0be23d0fb8153eb35037affaf7),
      uint256(0x0e415d0153388348ca13347c0f07fa34e1ac935c9cc8c8a52ee50a18e9da2024)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2dcc4b203b05386e2d11237c574cf712030bf8de9a8e519078ded8b0340ca022),
      uint256(0x285047a6593ac17c6d76155a291e1935b779cca2cfffafd5e9ca3f5ff7dbfa3c)
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
