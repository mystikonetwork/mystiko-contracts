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
      uint256(0x1f8f5fdb5aebcc611559a19a6c7c17b9bd10ff10c6038376f23b02ecb0228986),
      uint256(0x0981ce3e2ac22c013869cbb90c51dd1c492f8de3561d4ecf076871fdf6931039)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x3011cc35906f27e29a80f7a5f88c4b287cfba6d29ec7e5030c8e923a7c5885c0),
        uint256(0x25901ac911510d82e8c55aa60e1a0b2841dab3dca3f16bc72e0feb79cdbb16c5)
      ],
      [
        uint256(0x2c001a69d8a3379817c71263d0312776ac2c2fbca5e61d5361495049059f7de4),
        uint256(0x02802abe36ee1c8376ad13f4ee5d6b89d8503e0012591cca3bb558b9bebd68e1)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x182484444c4d1d3455c76bac87d82e853d7f573dd74600d0574dc284e14a73f3),
        uint256(0x1bd098e691273092fafb3d983ba25b53ccc4cb3c0d54fd0e19d225b12fed4109)
      ],
      [
        uint256(0x23d3bc4bcb7013129b56f9f9bb782940f68d559be849da311f9cb6bfe8270ece),
        uint256(0x0ea0d84c8928dbad2a280717d29961213038d3fa3ef978e2f0e0f3a4952f1e17)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1642c382c5004a0d41409cf668ca29e81f5efbf14a02d1b69ed959e342cd674f),
        uint256(0x070953eaed54cf190c35195204cfc1984860fbe56c61645cec5c819b2349ea12)
      ],
      [
        uint256(0x0a42d1e18dfb99ced7cbcf8893933999d31795836e34f51dc61d58b5b0f5210e),
        uint256(0x0918150021f3155672d28f15cf64982c90b852a847b0d234a4eba3502ff6e735)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2c975c27515238df803f831728cb11af976f5bb14673142dd494c060791176d9),
      uint256(0x2697ddd294041a2e0611db04e08d6cd4e54306c01516d2fa85e7759146fec463)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1a8e170cb5bdbdd32c4efbad59ae2d1ee6d47e2b5fe7b20c530b3ddf8f0ec6c1),
      uint256(0x17bc013f9175a6c4d0c47854ff578293010d4af8f749f719ee96f1b29cd12130)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2bc71a0553bd93b66093dbea234ac4b742a815e2cdbef5a1bca57adfa0f4da4c),
      uint256(0x2ecae81fb4b58c960ddb94f0d934f1aa49573fc857f55af298d60850668383a9)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2e4e5b6c529d953df5c1ffa47050fb5ccd845ca5470032aff1bfea788856e624),
      uint256(0x2d724d512ee09b9617c4c84156b8005a0fe27b136f8933539569355eb8bfc121)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x08ae426fbb3c5197e29f1a5ddd607ad3044d52f1958e305ffc49160751b10f1a),
      uint256(0x05136f65ed31f5732143afcf65ff20c5c09bc11ce300a1efae8bc7234a77f921)
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
