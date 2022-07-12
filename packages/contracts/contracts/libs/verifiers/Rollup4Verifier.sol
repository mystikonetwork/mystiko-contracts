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
      uint256(0x2130e4cbd27307edc9c93dbb4d20543b3ceb0b0ffa4d5b4fc10033241008c10b),
      uint256(0x012ce5aaa86b0e25d4ab63dcb41c5e42438724369842b7b894f324ebc5938000)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x228ae7a38d4a659b166d4d516cafee700be86ee07fdd89c414186ea8ed8771b2),
        uint256(0x1dea8a6277c09970b6e607251295ff1eca658c09564692e9f9a9921842d8f886)
      ],
      [
        uint256(0x10210f0f93899dde45d463503d8a61544195b50c4fe6a54c0912d9789af45954),
        uint256(0x0626f96b5482d440d16a8b4a86c8e7f1d4b022b1cb29d5a2c635b2714e88ca2b)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2f3909b53b6bd7c25b62ac4570abb23e61be8c2e6d50827625bfd589552f5a89),
        uint256(0x0cc745e3ce61d17ae58ab17799a4a719f4285d04d6ef965ba6962b8286dcbb6b)
      ],
      [
        uint256(0x27969732d0fa1861843443efb30c65562a669824d0ee76536cf79c218fefb2f9),
        uint256(0x0fb7856fad7949da0ec30c9e2861cb121e2bb0c3a356d06c68f4b3a0e466a24e)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x192b0da2be293435f840ed74fb2bbcc07bdd535f888c49505140352539c373a5),
        uint256(0x092126bdb84b30d3be295f56006646fdd2abfd6dcc5a7a880041b17eba293365)
      ],
      [
        uint256(0x231a53d7d7a6c23cdde323cd23bdf1a6540e3800d013a5aba2be2eafc5c74bfb),
        uint256(0x0c6b59bd310290ef0716fb628d8467f358dd19e4570ba317f34f2c61dea2a3e3)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1793a0a642c5e4a36f41c80a8eb12be6c8208579dd0376877038c2327dcf5030),
      uint256(0x188e31b4ed1d31e2390449de5415ec77b4967c461c2a1d640e145ad52bf9f3a0)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1487c60d5bcfa3d785094a98e03cf0e69acb0b6acc3eec8fbb3d9e3c5bd63c9d),
      uint256(0x193d3c5e790f006845789382d2b3b0dabf236226a30d03f2ff6bc5ba7cbeda92)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x06164b8ff25487bba83d4d4c90c837b60244c0eac0bc6abd605a732afe522fe6),
      uint256(0x1b2a28602c6d6039cf5db1febda269dc3f3a0367f846f82dd06189ed0ffc32f0)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0bf0b8955107b418d4cfd7b7fc1e9933a7383e5be48c5d948a356c669e586e1e),
      uint256(0x080e9f3af1e2c823eb67cdf012f77b135f6adc2462d431323d57fb6def408dd7)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x19ef70ca2e6edce5703f252ad4449226f5d528dd4eb0f576116e3dfa7d1e0385),
      uint256(0x1b8ff129e3fda12eab4a59e973b619b69d066c605bfeeb1ea864928293df6f90)
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
