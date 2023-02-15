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
      uint256(0x0347b3ed2c0cd82d20edf592b66df5a77d98f856bd22f5861c42bdd5592ce077),
      uint256(0x20396c7b9cf9be579b35ad68381630ffa9946e4242345473c3663eb7d0fc34c3)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x07e1e20c7fb2c4f362fee99471294dc0b26e76e591c8651a732f7ee85c8402fa),
        uint256(0x155cbe965a16ebaf61ef236c5e300fc1b9bcb680434ca956dee14a9f29116c63)
      ],
      [
        uint256(0x1ed093b44a2a6b9e97610391c88c52def690f1875cce3d5fd7f1bfa2baeb1657),
        uint256(0x220e00d6285423426514cd0c5c7c0f79978eea30ca203301976b191091b048d1)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x078da7368626f14234ad72d5209e333d01e4440af733152e0e298d33adc4d367),
        uint256(0x1cbba84b2a08b39dfdfa33276ae2f7efd78cafb64ba90c885108c1a2c8915ec5)
      ],
      [
        uint256(0x2e664a5dc301ae46597c02785df534e9d2d860e4ade02ebc9ff18c15a801ec82),
        uint256(0x2c0eb78f1cddc6924f1eb187f0f23530f5b057aa043a5cfd871cb5bb1412c09e)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x180588b5649a41fa9320da699e2692e01d1fe76427811bb9c858ebe6517c974a),
        uint256(0x092f897a8477a8d4e79b7ae3b9d4bef50788b52aaa5b67be5598c6ca56e7dbea)
      ],
      [
        uint256(0x21ce7238da9b10a2cfd64d4f38bd3355aa12e9d47ecd7277f9af608967e7ddce),
        uint256(0x2ae3b67df7f5c699c236f7f5d5d8829cdd1ddff56f9cabf48057047c02c0aa45)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1b053ad32c5893e3aa9886386d006bde303c8cc889d37d7e79768d9450f8b7e5),
      uint256(0x1557444c4d961e9e7068566fb0100c07fcea36a73560812584bbcb0cba18d090)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2a1bed00efd15252889b32a58ed9ddcd91c32a11934758dd87acb6bb846d014e),
      uint256(0x1a80534d3d4799a4bd5f58f87789cf90d3d42e5fec58164b414e359bee42e042)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2e88f4ddb93befb9bd41748a9ded126407f5f712a5a00a8e017ec67780986411),
      uint256(0x01fdbec034abc62cf2ae794c8e962e0faa989b5e2b864131d6dd5f7b9ad3bde5)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2e000dfbf305c823175f0ebce78f2ddfb5ca9ac29cc34b83f7f10112b2857a95),
      uint256(0x2e6cf9211678fc3a04572367d2a0ae14c1aecb8e1a4fa5357c4b02f43eaae41c)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x29727222ca8e370d8457207c5f11abf310037888c162683e0fe007785805edf1),
      uint256(0x1b2093e9b1a729076e7d0fdfab0f87958b229a40a97dd2e2ff5c7550f0d0a158)
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
