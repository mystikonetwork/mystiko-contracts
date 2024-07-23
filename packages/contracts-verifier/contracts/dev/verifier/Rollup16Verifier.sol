// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity 0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup16Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x01466d75545a3e41948e235b89b959934454d2df2c4deeeb56e3e585b6ede56a),
      uint256(0x1b9748cff672f36b22d9fcaf62b0b72d0208a694623f1096507a31bc87eb0220)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2e99e7c4d47c4de2a6d41733dcb1a71b187b73fae61b1373c503f4f838b70ad7),
        uint256(0x279a8aefff628bab3c3baf41c45228797900eebe4027624a0ba76a553249930d)
      ],
      [
        uint256(0x10c34e4d26c9eaf34051406206f5697d517aad45f9d427a59fb7fa540d184146),
        uint256(0x026fe90695fbae62743722d24094dbaf7576f85a5726976640853bab5965b612)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2b3beeb485f68af782c5f0110ac2682764a681e53ed5b88458c5d53ada90ceef),
        uint256(0x16c2fbb9e29f90d1bf78a1dfb2ca428f88acd07800c2cd314558bfe947e51ec0)
      ],
      [
        uint256(0x0f8e3466639ac78083920942ced0d099c3c44dfa1a0fc1c86fcf604f491bb7a3),
        uint256(0x100be80216e127275db17d81d0bf988c2c52ae6eacaf4db2d5c5f62d5b73239d)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2bb8743046b7a50bb7e662bf714b5a5d2efc71535851a9c7883fb102aeb8dbee),
        uint256(0x0634f89dece0c7e02dc9f1af84e5ec826c68315cb78362954b06f1a024fe4046)
      ],
      [
        uint256(0x16ad072fecffbdd33ba9974b0ae556c4e7ca8b9d3cce99c6ce9bacb0809dbd52),
        uint256(0x1de61bc752f498c2eb66215d37049ba1fc81cebef146bf9668821f15b8e0069c)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2665ef3d43764c4c6c83b291e27438b1f15f84d26321f0bd3aee997597faad5e),
      uint256(0x02f49b3d16d31b606e8c790459ed49e3e108d4655c081886ac9fd146d098d585)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x24bd7ff6421e09ff10b3d294e6d7437048b197318955a96e5d6bc1314113b211),
      uint256(0x1e7e81f8cc88146bbb2354ed14d511b06a525350b1ee8f70b777bade86eddf6d)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2b1df994759dd741c4342f64faa569718d0865a5d67dabf12ac8ae85181071e2),
      uint256(0x073d3c8f00c5782d3d2c9fc880da9e26df3cf6e367578f0cec2b86b191be3e44)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x122ac0a4d8f48f3c1e34d3847573e238d3a13333aabfc6fc11cf94210121d03a),
      uint256(0x082e2df740bdd387e72af0a1ef00f26a51dfe8f105af63b3d141741f31a15d89)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1de398e92e23b8333c7ea39005a2dc65d0698119a76e0f7880c1ce7661b9d337),
      uint256(0x03671ef8cc40a264ffdf39cca7f95844a3f8607803a0065da710486a7dde617e)
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
