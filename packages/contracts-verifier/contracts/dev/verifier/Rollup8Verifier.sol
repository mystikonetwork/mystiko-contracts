// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity 0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup8Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x1e544ce14c454ea604a9307c6a4ea4ec4f99d21870b253b15b5489eec64c3e1b),
      uint256(0x09dc1b345cf3bc3187e3b42dc471414a4f330bedc082ba127a91a5f4a00d13ac)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1a18cc3549c0dc294c58a4aa4df87ab1ae0c50025483954c119f70e8579adbea),
        uint256(0x3042f66c234dd78ea9a231f07e637ec4aff86a636968ffe3c37e7305bfd6d876)
      ],
      [
        uint256(0x171506a1c6383196d88bec16ca6be15d21241bb1a049352a4c9bb5e24ccb6878),
        uint256(0x28adaf890b740a61452352bf983df4bb65f306869d635588939b424c21981edd)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2dc3d3ac5353dd22f6bb216f0f9f4b99a0fee5967fdc7c9f6ec57498d118fdd8),
        uint256(0x129bbfe6791d44663e55daf8b6494723faffa2de031d31fd2669741e560ca64a)
      ],
      [
        uint256(0x281a84414817a4adbb980286f47c9e615ce74eb920d98cd5a1c82b4293ac1c54),
        uint256(0x2d9d38b431c083a61d5e069877febb8e4971d237f3fe71cfd57c48c03b8a9449)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x25e9f2d5c9eba6fedb6a500f94a086ad880cc5e1cdeff66f573418989b7de950),
        uint256(0x012ec27787cf1bc712b306e1a67d9b84874e0ca38e0bbc9ccc8d37eb8bcac90f)
      ],
      [
        uint256(0x22eeb03d0a570dc080a28c7029beb7076895817c64e55b80587a57eef6f7a48e),
        uint256(0x015808ed9bd3cf1c54497ac484b85f896550183a748ad30edb979330b95e4e89)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1f95aad6c1d587a35727705214d2769ad14ea077c8a4ba8ab8592783869a7294),
      uint256(0x1d70f227286f93ac2204ac63fe4c7601df95955fdd11dc2cb8a3dbb60b1f6d62)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x12a67eeabf2d9cd0c6b5d3ffc561e761f6368e8c5e24af3c8de28e37cf40913d),
      uint256(0x13480937153499e50b87fd6927b25ec074f11e4e18e0529bb6b6bc24cb931a1d)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1ce21c200f70c18054e30f1a6c2cb6f0af7f36f6fc3a8815a2d81026895d99e0),
      uint256(0x1d69a1536927bce071b033ffcd07d591903ffd18672ef86ed4744296b7215f9d)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1cc15fd5bd8e08b08ae98afcc09571e424d37bb25a3443126b27c15e80afb76a),
      uint256(0x0685a3948d4674d5fe555e82c6b2c4bff210248f600e3b69b0eeaa5e1e8981a4)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x302f20dad0fe29bf3e026043d5de3b765a4d248b3fec100ffa4e4cfcfe746bb1),
      uint256(0x0a7f63f750c893e79a99f2d556df65670e746cdb2be8db0c51a50bcd04e855d8)
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
