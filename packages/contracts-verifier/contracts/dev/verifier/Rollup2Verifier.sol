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
      uint256(0x15ac53a10906a197f14874a643bdb75e6458dfa9ef63634ace94c16ce4454f01),
      uint256(0x0aca7b49381110787f36a238ddb8afdfee485805b5da4ed73cd438432388dfeb)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x05b00bc5e0dcbbc5c07c0d87bcb18c2ca8ebbc082b21a1a2e285534192cb6c75),
        uint256(0x1578ec7d4bf2cacf50241e2582aa1180ec305ffecd52f7efbfc05817a1715dc9)
      ],
      [
        uint256(0x120c393c8a813b4e3eb8a8e3c73d6b78e9330a65094e8043c93158b7533b6915),
        uint256(0x2eaef6133509c86733c233c50a909ac8a7d029455630db4f71fb1d38d04d5c43)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1ae9fef7e5c812f7d83581f52d6fb0c050c790e2039ff7bdd5175bfaf51a902d),
        uint256(0x1f974a532d6b01f23bd90d1a9512334c98fffd0ca71de47d13313be971996d3c)
      ],
      [
        uint256(0x26cdba0fa139da3b9ea13af650106e56ea66b43574d0bcfb36e566e92d275eed),
        uint256(0x29f7459003a926f0d30ca7d491676230a184719e52005954df5da098e3c4fd17)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1ceb22fa2407ec40aa0206e75376e2e0bbf0241a5eebc516cdb95ae65774b275),
        uint256(0x2af241c938934f2ba6d4034e34a9a43d3a560850fef1dc644a8fe2fd1b0b9686)
      ],
      [
        uint256(0x1e7bb558bf9f62de48189a4d96a5f6692fb05f4599ef31188c43ea0eedde92b7),
        uint256(0x139f3bedef026468b1fe54444c05dae0ce28e27834eb569639c639da4b2f2a7b)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x08b82bdaa1c6f35607bedf121a21241cb87487e58c1eab333799e6cf6d22ded0),
      uint256(0x062c5f11dc7824dbac201fbbf80d4c602d354b85fc14917d90c76740212bbe2b)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x07fc8baa6dbffeab8f24a16358463ce7cc10ec9729ac6ceb9ba53268ca658613),
      uint256(0x103c1f1e557477ab10bf3ef262a9695aeec47b0987ef3caac91827a8bf340761)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0ce83b1f44ec78ac05965177973a4a1359bb123959755e33885c22ac73bd4f23),
      uint256(0x121fdb8248c643e705aa2b6c85441f68f671530eef89706a46661be884985a9f)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x25f9079ebe2416792e85352f79cf63d29b093d93baec87b351292eb09bacf55c),
      uint256(0x268aa69dd0c78337f1c872866c450883ff0b22e983448b0d722b89f47a008ca9)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1ca670ce81010d160ae5e1e46796faae70e1b17b119781e1ef7b77bca9e42ee6),
      uint256(0x0609df0ecb90feaa09f8d097301cb7aa2d98fbdd7a69bc70961057fb849496e6)
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
