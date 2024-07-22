// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity 0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";
contract Rollup32Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0086db637b5fc1823507de8102bffa314cc258f18c314abe4ab859d7889fd270),
      uint256(0x1015f8baf13213bf87bdc414badbb41189b9be6671d860a448af259d591233c7)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0bc83efae9166ccb1d4203f2efd4566e0f73b125be28310c5b23483b14470c28),
        uint256(0x2918dc83af00d7b19079782aa7ab90d8fffb92518e56bba7d205d41ee85d507c)
      ],
      [
        uint256(0x0745a2d0a873147dcf5e6edaeb00dab62fd9e778563077215af035285c540760),
        uint256(0x1ac72702143825a4d255b364260e03e61db1405cfc923f5a0ee1e4676e9601b7)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0982793a9750a25800b72db2853d5d9d5ff0cfbe64f234553a1c324571d4db24),
        uint256(0x2a18a6192443ea4d163a0e8a05b6d82488641e254804637c45e9e8c514347011)
      ],
      [
        uint256(0x27722717625beb575ad1aafcf025a21e1ebb6b9e4651b47bbbc250da54b1f293),
        uint256(0x2a096a245a68743997fb2900bb24e8c35fc51caf61f03da2e05d343a578cf93d)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0090eaf702287e01913eb28ec134d59852e16a3337d7e11e7a0dbc36ff38733a),
        uint256(0x1cb509908da9c25c64b376993757e85b71fc8eb031728c06e7739fc00e2ef25e)
      ],
      [
        uint256(0x0a1d0292b6563cc96cd2f7ad8a26795a7e05a1c0899e8034f1bbf6b98656de5c),
        uint256(0x14980334ee934b96b89671a48b9489ab58263e0cb4a26f9d21f0039ac6111c61)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x11dfb0a3d061b994c9ed614be43d8367abdbfde1f1b01cd1b2747daf3e05543b),
      uint256(0x1fa115f4ec67c54f6d5b4920ee2560090345f7b95ce071ea3ff768455640faaf)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2bc2f77540bc14fd92e28edde8b66c8414e47e07f7a9ef0c1ebccdf8856cf422),
      uint256(0x300aeae36a5af1f8f15285be920fd2470b4f1acbd684a98f54bfdd80bc0544da)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x168024bf1de71c3a2865a5d5505a25e6bf40a343d193602b8e77d00960f0b4a7),
      uint256(0x08aa5365f784478ddefe3aa0636e445dec707e73ab14f19ce6de8a036aa3266d)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1275fca970f897a0a99b366b43cd6f352b82db7a50e2bf9c0984000cb76d7f0b),
      uint256(0x07e6ae81aef9270a6eda1164b77e08a529a9043268349dcbdb56929ee47a285a)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x017f75e457e6952143e3df88a9ce63ffd0dd598dabd154b080d42b967dfbd581),
      uint256(0x16e5ea9c5cca36c23b323cc885afcd2c380e8b71743ee28abfdc70c50570bdd2)
    );
  }
  function verify(uint[] memory input, VerifierLib.Proof memory proof) internal view returns (bool) {
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
    for (uint i = 0; i < input.length; i++) {
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
  function verifyTx(VerifierLib.Proof memory proof, uint[] memory input) public view returns (bool r) {
    if (input.length != 4) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
