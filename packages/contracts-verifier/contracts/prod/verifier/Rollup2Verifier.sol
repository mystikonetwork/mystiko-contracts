// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2a74eb618a25270e165492673a1d17c105f3ec9f2f5b764ff94368d4258b4e81),
      uint256(0x2164d3bf86494bc3a0dde5ac8d9f569e5874984f41f7daa48f65a59ce9f68ed6)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1565128cf8829ca9a1d41beaf473c6d3b704e10609109e4dda7f00214ffa4172),
        uint256(0x11cda8e15156a6db767564553904ea07d1e13ca174060cbba527ca31fa0fca1f)
      ],
      [
        uint256(0x1e3460678dc3865fd1a61524f7b87f59af71f13143e6f3519fea897dcd6c45de),
        uint256(0x25ca6276968beb9e70ff35595619f912d00034e4d65322b6f9c1cad74d8b1d06)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0a0710726ef198ec4687f5dd25a1ef2314f4b4a984a5ab3075c3e9cc50d92db6),
        uint256(0x09589dc495ebfe4c8f97877872757e987689fa98ddf0c55c59866f5ef1538755)
      ],
      [
        uint256(0x1771e23d44b104af9941e4679a85e1a162c3a04c9ee770a0d10bb727d83b5c44),
        uint256(0x01ad36692622d64dbf936932eabf56c86c49c1f2e59d6e430d23bbe15b37df0a)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x21910d5bf7e0ecfcb631d47673048cee2969f699cc635e42e164e75fd40f6363),
        uint256(0x14571e12835805e33af11a639f05bb83a17006852f062a00ad4946194e8bcf69)
      ],
      [
        uint256(0x300ab80d0324fceb24f2a9d3d864cf8895439fc6653fe41561eeb5e037a49f91),
        uint256(0x07755964c843f6ca44b3620b69533e9e457e3f0f5593692fe57013a6b9a761ca)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x21bbf0636f629fc5c3069af9430ec5e3f7351e46add2e2a225fbc7eba9522171),
      uint256(0x050bfd7a6892e15c2ce353eb024e77946a62cd229d06b4b29295ec8ecd2c1d7b)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0920f2a10b93d809388ee9f2d619730e45ec4c1427eb62cbb277c87601d0a04c),
      uint256(0x2f40731d2c7ca3ce6442894d02e9b3c9fd4533eb0c8ddc96e4ebf0aebc03a3b7)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2559c8d06385b8da2e9e0aedf3ebf6f502f902447749f199e006a43b3008e451),
      uint256(0x1639b8eb7e92e2ffe6e0b286cfacade8f56b05fe5fe1767e5e51981e1ff37ad9)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x066659ac7a333d6df89d33ea379ad0ff18593d4b218d612b5b89d8a9ce2e065c),
      uint256(0x06e9eb31994af8bf9af20782b5c8998640f6017f1b7629f28d62bfc4be6834b2)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x17dd781f1346e27d4dc962638db3ab56430d69b687812ebbfca2fb9ad436ebde),
      uint256(0x00d6c784cd98d39fa4bcde52985b0452fd25956edcce64ebe001ecbc9a30fef7)
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
