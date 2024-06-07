// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x1076eb81bce0b020bd182914a6c8cf0f8818ae7a451e120157f87de781feba82),
      uint256(0x0080a0944acbb4517d5394a4b9d65fa169268e47a260ca7d2dedf33c03dd0124)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1caaec4e2c9654f4dd26fc838182f9ce9cf59e50ba91f89aca91fc3f399b8fa1),
        uint256(0x2df8fab5be4e3a8c1c2d66aa3a227e4007b7cf189afa16014807229077ce21d8)
      ],
      [
        uint256(0x0f0443721bd60cdd9aec9b23d78e17ce792a10f7419f208f4f615e2685f58e91),
        uint256(0x00f587c2edad2b95d680251bd1e36edee702400b54f2427755dce18b8637c769)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x203114d5421957bb1e23408286d512bf4dd6c91f726fd3b14f43d662066cc949),
        uint256(0x194bbc88392d350068738c4e4e363f071782f0de18bef58d1af9d9ee5dc7561e)
      ],
      [
        uint256(0x1f01a5f28ae81a68cb9024aa29e5252077b3a54a8bc57c9fdbd1fbd0bbfe9b90),
        uint256(0x1d0c3fa40d2cf52403b01e9ab10419a2c4be8d451fdd0c14df0c923733e73840)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x26866a17e534e8fc70b52f4642cc0bf90086596ebec1c702ed388f32e938dd34),
        uint256(0x11759fa72a2885c4478223a02392705c72fb29a86677052f66af692257e85ede)
      ],
      [
        uint256(0x146d3461146eee1bda58df880855c607382a543784e714019ba9d74f7cd7ef12),
        uint256(0x11d3a63f4685fa705a74df99f1c9619aadd6596fa0efac07986832da4a944e03)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x037c1a1004766e3cdd28f14700027af8128028d45034abb601b9cb1484d83461),
      uint256(0x163b7bb4a4430eaac7683dedeedf51235e27d813fea99517aa9782439d475d87)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x15412cca2503f587f0208229f999863c8eb2297932173af8d610ea153a3733d2),
      uint256(0x2c080826116bcd5fa3e882fd64d431de17ce9c7152ff158efc802265af585329)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0f3c38c920498989da40f8fb4d93a8ce7de64961daefe0a983d4204f2a61d343),
      uint256(0x1f4f6960ce0603f9836b777846a397efbcaf159ab36f6940d9a44ffb0fecf495)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2647bf96d6b4f96178112ebec5acab20500bbd1ab600c33f51334c65dfdc2edf),
      uint256(0x24b4305dfe2d64f5babe2e51ece0a93033949228a7e28b51c17e3b22f6a6f772)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x181e9f1164e3e5b94a6a2b75cf16c7600c63f50a1bff4ac8ff7e47fbece1cb66),
      uint256(0x0ec79d403ac02d0610409659d4ad02b317048edc675c69bbc3749c4f21c6b7f3)
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
