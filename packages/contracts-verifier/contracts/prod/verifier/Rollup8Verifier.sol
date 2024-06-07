// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup8Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x079ef68e63ecbf2a91263e92441c4130ebb271d879443d49a96fef977a6214f6),
      uint256(0x23eab7fe029eb42cdf443ee65f80b9089d791f07001fbcc629bf8472a8c34363)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x198733bf9f6a72c445dfd2974fd59510606b3ad891296ad1174cd57b63f774d5),
        uint256(0x2f9755cae2cb93edfc089e8ae43938e5b03c1d8d40cc431701ffe6d7bd1c7c54)
      ],
      [
        uint256(0x19fe9753edec331643870a10b54d38d08d22a86b270bb95822d36dacf723c48f),
        uint256(0x08295d6f6c466fba32a0f699cdde5cd9ea7d54752ab1e61e01b09b4295bf157a)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x056d04ae031654bdbc960bb639071eb331f3955282449df0fe52ac040f6c25a5),
        uint256(0x1056f68e28b8820dd072ea237605537f6166080c0e3c5946e2b33966167c2b23)
      ],
      [
        uint256(0x058ed345c693ebc793f947de8f7e8ede831bd80445f87a57d13a27eaddf8725d),
        uint256(0x0d696eefa435e25b47765e26d4be6407d593edf3ba4a4214765206badd62ad4c)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1331cb621874cbe429c4eba8e5f43525b118eafa99a15af7194e008bdb045906),
        uint256(0x0a71ce5459360033cc104dcba946eb6dbac97f40ab06422a445944e582c3aa21)
      ],
      [
        uint256(0x2726009377cbe8c16da620f20a1d76a6bc81835369d688fdd78ad82d2abdce64),
        uint256(0x2f142df00a1fd4e6d283cb6c4a40138ac9476b568646babf8bae1e157eb4e333)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2842de68116fa2094fef74dfb990fb2efecee3e5a29b3c90142da84ae5687b5b),
      uint256(0x2133913fdd23753e1d7d2703b82c3715a55e6e9cafa4f7465f874abd1da4daac)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x27bbc42073a2622bc2887d7429fc90ca15af1fae65fb16d2b4b1e79c578b23a9),
      uint256(0x257d55b9f764be0e46349e88e19e7de09b511779706244951ff5e73e49735504)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1249a82ea8c724798ea8fb7a22cb7527b196949d96fe92152428e9e29076a548),
      uint256(0x08518a2a332f4697d59b9a151ac2bb9971a928df3d855132ca7b4855081b6e37)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1cba21f17450164bf39e6e4fc9b4e4d1e461649d707a8287f54026fc03031055),
      uint256(0x1a2d6fde744113e0ed34d19d0f98a1a1bd4fd02668f6763362d177664c92e69e)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x109d55a5c1199210554b3beef2902908f66092138d370cd30a542ed616a21c85),
      uint256(0x25bf85511a4d4761916d1b412bb09b86a3f05a075eb93a6a829f13e1169f34af)
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
