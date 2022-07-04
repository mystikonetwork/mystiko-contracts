// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0c4dd0ffbf5c0fdfb5a643f136a855cc8a2bcbae3d492f5dd5eb55f6a52f0119),
      uint256(0x1fef20c8903873d5291e18da782fa848cac11d1f608ebb462ad9f6eef0ae00bd)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0ce31200f558b0b967d1e46c87b19359d114ed91ca42a6b03da22cadaf9a20c1),
        uint256(0x222e74ebfd2f71a21ff6daf32d81a2531cd5034295cb7b6576d35d34a13a0213)
      ],
      [
        uint256(0x158aaf2b35114932d2a9e43691006c03534238d9c96e6f8f98fbc67a3a1679d3),
        uint256(0x121b8bf8d7f71a4ea7b92606499fa8b069f0555db10f9698afdc3d1ed0f8b2a9)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2ef542277ceaba03403474f9dd470f33623c1f1ad9d763dcc8ab2a42b5dc7ade),
        uint256(0x13321cd86c90515779531491bef7dd4893e82d5cdc89c5b649392d9d53e1ffd2)
      ],
      [
        uint256(0x12f0901e6c11352616e3767cb9daa861732d04e18eba8b1d02971034d99b99da),
        uint256(0x105a2141c628aaa34a646fe0acbb703e1f6dbeca6c46ec15fb54d71d9cb87c70)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0b16d0bf4a4f184c217eac98caffc091e6ffa86afaae21f577d7ca8b88e5f31e),
        uint256(0x1a45e7a18cf51f1216e9d1a3183485369f113df91650f17e12ef6edbe6260754)
      ],
      [
        uint256(0x220803acaa74db55bc7a519941ac10afbd31ffad8347527697db2de6fee91861),
        uint256(0x04908f78ce131c4442fb9f0e66faaff84eff93eeb7ae745d99ff3ebaa385d958)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x264999f6cb4c4a2cdf07866877d69ea94c1d5b0053366451afdfab2c80ba0331),
      uint256(0x0986e2b51c59176e19b5ce0ed76cedd88ff1d0007dc15ffdc3ac5b326f4fda6b)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x260d2dd6ef29cf3d79a117e7cd05d7a5068e04238b1bfe4e37c3097256abf980),
      uint256(0x1dd243eefc411f2bf0c39b6ca1e3fe41a5db0f2e133e6286de898bb2bf341745)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1e7473cdc5977cc5ff5890e207368596fc592b30bf16a0c6c7ad4df545b3ffd9),
      uint256(0x1459b5314ec612a40dbeffdade8b176803d811f3b8f65ad174d2c4c0881e081c)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x228673df42305c669af4389f09c3b55cb38a32d6eecc4596960af693b9a9d4f3),
      uint256(0x2ffc4e1cbb82834a819891f5da241d67930e5ede57cd3b2e7b2adfd444b650d0)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2de57a284b8716de7fd08472c865bbf1f85de0406d53d959d0a9ae499486974a),
      uint256(0x0d8e181a6e462bd7dc59cc31baef1e3619a321181fa8637f4f93a4907d3a5f4d)
    );
  }

  function verify(uint256[] memory input, VerifierLib.Proof memory proof) internal view returns (bool) {
    uint256 SNARK_SCALAR_FIELD = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    VerifierLib.VerifyingKey memory vk = verifyingKey();
    require(input.length + 1 == vk.gamma_abc.length);
    require(proof.a.X < SNARK_SCALAR_FIELD);
    require(proof.a.Y < SNARK_SCALAR_FIELD);
    require(proof.b.X[0] < SNARK_SCALAR_FIELD);
    require(proof.b.Y[0] < SNARK_SCALAR_FIELD);
    require(proof.b.X[1] < SNARK_SCALAR_FIELD);
    require(proof.b.Y[1] < SNARK_SCALAR_FIELD);
    require(proof.c.X < SNARK_SCALAR_FIELD);
    require(proof.c.Y < SNARK_SCALAR_FIELD);
    require(Pairing.isOnCurve(proof.a));
    require(Pairing.isOnCurve(proof.b));
    require(Pairing.isOnCurve(proof.c));
    // Compute the linear combination vk_x
    Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);
    for (uint256 i = 0; i < input.length; i++) {
      require(input[i] < SNARK_SCALAR_FIELD);
      vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i]));
    }
    vk_x = Pairing.addition(vk_x, vk.gamma_abc[0]);
    require(Pairing.isOnCurve(vk_x));
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
    require(input.length == 4, "invalid input length");
    return verify(input, proof);
  }
}
