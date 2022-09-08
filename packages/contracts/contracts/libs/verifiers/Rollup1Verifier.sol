// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x198931585138b136c325c7a134189675c904b9f7a869da21b6f18b6e670e3c01),
      uint256(0x2eb8a5992b2200d91491425abb7b474c792160eb9446090c5b1ecf591383e697)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1900a31d8bfa597255d227a4364bbf6dcc5b64974c08acbe18298fcd932e5c4d),
        uint256(0x137274d9f294f4e654257f675235d981e4e19aa6506d6fb8ca2efeed62d7e7b2)
      ],
      [
        uint256(0x14db6d8006e8e1c2da7cfc1aa60f2947647460be6e3458ad84fb2596b0d0b1f9),
        uint256(0x0ae2426a2a7816a7b833b7a2f5fe883722a76b2a0b3f8b431225469de7366610)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0c46ff439d069bb26a89dfba0eb100c8072a46b6636bb358570d9d55a4bc0104),
        uint256(0x0386ab5131ee70fd163005e58c88d77200822c8138fdfbe4e20dddf8932e182e)
      ],
      [
        uint256(0x27f7eca769c76309e083c44f7e2f66bc141a61955cc02cb825b1b28baa771a29),
        uint256(0x1612d00d166394eb7b0e500749fb45ef8cad43a76c4e9d75be054f955b5cbc15)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1bfff539faa9120a22eba86a1618827b64357f21a296b6bc193e44e74b7547b5),
        uint256(0x24f3e78432c804a96ed30875e32a635e2a94b7ec06db1e5ff7456aca83769d32)
      ],
      [
        uint256(0x0d54f34c20a60d54c67d7077cb37f7ec5551e651cf73d1723711129ce3c4275d),
        uint256(0x1116b8041b3998a508543d8a9c21731c7fc3140df729ac0b4650d69fde3da740)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0dfbf097db10ace6791f426cbd53d6cd369470ee354b29481a4a03018700b031),
      uint256(0x1d828d52c292875052261ba3ac74807e4fed68f367be084ec7886541d410c638)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1ead972ac0b9756ae7c03683af6c7ebed8edd5df886c7160615746cedb148431),
      uint256(0x07eddecb56de11b7df79a62ac79cfaf4d2c6479d9b8af655c7d757090fc6ca64)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0a0365365d5ed207ba72ff6c5e6b1e0e53fb3c389a4eb306e5836e585eb12805),
      uint256(0x2f1ea17ba892586d773aad520862f150c48c8c1a217f806ff83f9ee283c3c0e3)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x25a290906be8af0f8f4627d6dd6352dc33d699b593afbe1818803e6fd0f3a539),
      uint256(0x14d89929d2c424c53148ae625cf5ee022f35bb58fd4a147a2a4a2ecf3fd131b5)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2578470889d3e12dcd341b86ed696e2f5f22d2dca063f867b5a3f7167f2098c7),
      uint256(0x25d20db0bd4b4cc6a69cfdacce6fcb2fcca5a6def395399ed23f4bc981dad1c1)
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
