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
      uint256(0x0b0cb45bb3dcf2242b7f87eae31021b0e3f70a153edeebc412d4265f902a4eb3),
      uint256(0x2a1e72a48cdbd3532c311303a20f69cf850bbd2cf491845438eb2f7deaae3b56)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x16db76d8fde8d68ff361b4c517a97f4883a8262a25714f84fdfe4ff67fabec8e),
        uint256(0x093f88ba5993c2dc3cd903a4d87ca02caca7ebcef44b8b269b43fc079cfb648a)
      ],
      [
        uint256(0x300c0322af52f85b372ef295f260c3b1359cbb6203c429112ba4b0fb8b5b8189),
        uint256(0x20f27c86e3f63e8d093f880fc1fab8840f04f9a287dd3292dd86460f24fa107c)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x15ba3896b40afa24957f98fc929fdab22c722b9b0b1de250a12717a293f6ca2d),
        uint256(0x14d483cf90c697b0ca18eb871522675b1bfb9631702540a735ba66dea063f0ae)
      ],
      [
        uint256(0x29fc7f6d523933373a38e2d372a6fe68c22be3b7d0339de5c974266236d7d39c),
        uint256(0x1458660e7da6042f090506569a519069047833912e91f390e408df88bbed8446)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x23dd7a8f050d3b0a7560d0b888b4c8605f641a86ca8958bad34fcf7680023dec),
        uint256(0x0be4ea9c26b02898c5fa9b1f827a6f365ad167a2071fb411e98cd4aefded3675)
      ],
      [
        uint256(0x260afd271600efeda25992092a8f977ffd980b8e9ac5bd09423ee57fbe0bee0b),
        uint256(0x0c1a52a18c105dc126fca4a031cab72b1fe6458dcef00b7f53111f677c48f289)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1e10e00d14008a90a13a48198ff48cee3775307d759797580bbd78aa6c1d27e8),
      uint256(0x163d001724d9646274e930f91a89613a4eae9c571604cde17febb6e1dab5e374)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x17d7c593dcae272ddd611b4d2d7d862cec026dd82fa4741241c8ac34915f5c39),
      uint256(0x1f3719b5d090826b2c50ca1de9a6746dea0b34ea35ab13828a06d6de261bb988)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1befa5a2261c1b98ce4f9dcdee59cd9bd35bfc5f43ce8037079e35c1e8128e1e),
      uint256(0x164cf0085d0957e775dc87576c32f943582a1eab94f6f03137d90f28f69c0c20)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2a2325f2b031a489e460ebb242020121a0757821c742a5c4b39893be48d8375d),
      uint256(0x194b4f8a528bffe377ba51418b260c9daeaa69c0000d138dd0511019743020fd)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x24487b685c26c92d063b355263f13b950694f5f21bf692501532771d4690bf12),
      uint256(0x2c13de97426641304ae72bde576080fe37c15acd960ac0309c9ccdd0be3370e2)
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
