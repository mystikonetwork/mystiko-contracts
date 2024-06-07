// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";
contract Rollup64Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0996ddd1b161e19f4fc8ec59e941500496afd3f1b1e3b6dd06bb9f7294cc3736),
      uint256(0x20ec9ecbf31a2b235284af86a54626b5f5655ec7e1e8167ac1dfbfae80460e5d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0e40a1722a2c12d98fb490c7957abf1e60c650a0dfea0ba83481f887fb690cf9),
        uint256(0x2ea99400bc57b00010f0a41bc4a4bebfccf39b9910dc68366e5e5ca0a913e17c)
      ],
      [
        uint256(0x11f8aef8db9bd689fa0edc9d1aaffcc0b4522aaf1d145b94f2ec42c21f07f1fb),
        uint256(0x2012ff12266780bf77c59dd6f73729e4fe33639af44cddab58dbc5ac72014255)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x3042fa88093725d1892b22aee118d82cccb9b31192d788716fe6699158ac9369),
        uint256(0x2a474962b46d895685e85b9aceb5307c707398d124c6d968f7a27e2c124da8ca)
      ],
      [
        uint256(0x1bf5984bd5a6f646bec5e8c22d18852d94ccbf6ffb200de11fec1ab1b07dd718),
        uint256(0x0f447dcffaf0dfc62d40e472a16783b8d3fb5fd98348dcbc2e28e4daefcf1170)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x051f8c13032c975627588434f233748e3fa099da5f7092fd2817fe075ea93b18),
        uint256(0x0e32481f82109fcea0d31e24a08170657a0b2286b38cee5b17961ed307c2037b)
      ],
      [
        uint256(0x213ab024331ea9011ff4e2e99eee9c51425db794f8f0ae10d0c498a7c2a96ae9),
        uint256(0x1fbe4c9c329e382946f86a1b873d7173348b4f02c11eb71afed0eae41ea59a7d)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1d879c011c2dd154c2ff8e7ee5a5d7373ac232bec59fddad614bb83ecd6e295b),
      uint256(0x1935ecf7657cababebcdbb9b26fe26b7e976e943ca921e75369f2a08fb2da223)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2b5787efac53061dca2c648e4c526b3c066344b0b8b095c26f235cb20777b18e),
      uint256(0x0394471ad0e225f487f46d772009b9af994180ae4d6d4b0cdba405bb55ded123)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2c22d916017f1f94a170fa7d2c2887e9761ef56e42222f872726d4900a0f9b0f),
      uint256(0x14db4ab8b879f26fc197e91381902d5fd6cf2dab8f56b337833307f2f45e1db1)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1ae63ef173ad32893ddc776575854f0f03ab3270ebdf88f0e60b7b99666c4ec8),
      uint256(0x1dae2f0edba3e1e505cf721296bd00b20d35ee777f0530ae23527a8c24be133a)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x28aaa7a214ea25e9e1ad058a3011dd742253ec2ce2090432ffa1eebe6939bb5b),
      uint256(0x1ac12a16d82399a22d3e5598619af45946d022affc5e64514ece6cf6517f5abe)
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
