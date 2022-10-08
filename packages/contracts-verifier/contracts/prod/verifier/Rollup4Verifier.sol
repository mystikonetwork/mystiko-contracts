// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup4Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x096ff81083b52be77a8b59683106d5470d171e1d111c8d10874e0a2e29907478),
      uint256(0x1e6dff7950efcc2dbb363fe4525ac6d647ef077b8477755d5173418978863b6b)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x06730d29a6e919655f248aa2cf46d48a51ef4f5590327ce0eb0d74a88e273477),
        uint256(0x2de30d4ae8cf29b6ad7e32653973b54a9aa9bb677b53570342f53064dfd81116)
      ],
      [
        uint256(0x081184bda16f74e094c0cc1c7db656f62f6ee79acd3d19c3c43406744b92ed9c),
        uint256(0x06fe915a04bfe5c077fca09050a6d3efa7215d2fad5c9633a3877789c127a3dc)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0644b9d93a34dcfd6120d8b21522ce8707d71e8ff0904f12596798d2b45e3a63),
        uint256(0x26f7acc6d8a1d8d166e6b10901329fc7051db8d879cd0c96aaf9148c7b6e65a7)
      ],
      [
        uint256(0x0bbebec10bb9d2d90cd0b6925abaddaaadcc841eb42bd6be84ba46992dc82476),
        uint256(0x1912b70c94e60484186236fa176a01ed3328437c9c4916100ee45dd3a873c2e6)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0520fcdcc505235395fb06569664d6c0c306dec2f5dede4f39359cca7ed83228),
        uint256(0x2f6e391a147dd76a25d714c88688a2b115244fdc713f10181e39e5b368385ccb)
      ],
      [
        uint256(0x10759dc8b748c3d69232b5f12ab869ae572e52b662cda668785c89b85c433c73),
        uint256(0x2f4a9544912c1223f55a0f51f3e0d0574aedfafe40b8c3c17cb31a989a2155cf)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2edfc812f372da4f1e030ed346b41588924f489d5344c3ab81ce37d12ee86b85),
      uint256(0x263d581b17ae0ebf1deba963f905fdae1ee87cda6adb1ec8b1d69867625020b6)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2e4cc94ff71e0d2b4dc62e56ce3e83a4cb7d923eea1cead759752f7aa35cd10a),
      uint256(0x251c206d993e26d2f5c1a56c20eb86259d5c36173c19cad47df7c5067eda1646)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x06cb4752ba42a51ad8b0fca1dd958d983818828fa51f02c909a600539ba56c52),
      uint256(0x1fdc32ed0d7e2219a9951c18454d271571c43b973d953b1511dbffc8fe9ae846)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2ffa6a4340ee2f30de754dfcaba2f2510688dfbd4014e32ae519d037016eedbd),
      uint256(0x20774e8e20cda9f556939201334fa409659d11eb98f3987bfb6a5145c5607c30)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x03442e7b59b43269cd9c4baa6d4a8ee3058256538bdf71b4dcc7a9b2fb49bef4),
      uint256(0x0a4c6d03a9d71a2515b9ef9dfb0a984e064f9afd050ca7866caf96552230d980)
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
