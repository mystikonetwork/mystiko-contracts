// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2b8d66f3ed3683a4d81eb9ae7a63d3e26f5c02cfa4ac99f849c8b6ccfe6d6408),
      uint256(0x302a0e735f209f980e3029609d68fa4796d2af3cefab3c9ede7036681f0ea5a2)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x15d243f7b20a46947d52feddc27551570af452179562a9a9ad2d40f28a4c9f39),
        uint256(0x1381c183bfce16a9b9fc8a0e00d424e98e381053dabbe907c864ce0f1d965fca)
      ],
      [
        uint256(0x19ab7b19090096fdb4ff0f082c50c25f38a85a57c606450eba6bc745b718b0b2),
        uint256(0x03fa717034cda32cdef38a97d61f764cdb097b89fa12b823379d29339d65f4f4)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x27aa27554d5afc55467b7f7b9ef8f21b515045b9db1ff9a9414ebbf4363cf146),
        uint256(0x0d763c0c197a37ae791feaeda947a6670822d798eef6aada3a376682f9bf6191)
      ],
      [
        uint256(0x1dd1dff54796364f60716a8f13faa52576c39d1eb58a9b19d5cf876f6ab7d33d),
        uint256(0x2b0d7a3cedc0c8a6f733cc47f3055f323b6c82a45313ff162cf86c3569e28c95)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0329a029ea55d0a78fabd3f56b057a0802e2e3d31b1019cb7e1715d0bcbef8bc),
        uint256(0x1c3c2d15b2d23ab409546e3261f64c969d0b8ddda7f3fb1c6f6ecc267da82db6)
      ],
      [
        uint256(0x2d84fb386fa7b62460707181f0115611fca290f8a5a3bf2d26813824f0d71800),
        uint256(0x062e9deac01069aab59c07db808550466625f89389c42756c14245e43f08361e)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](7);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2fe1fa2dc8f4f71eb4f6a7e42822e82f9be0069bfdbd40d7a4f1fe3fed98419a),
      uint256(0x1a6791e58b4a2ef03632413497e39f07a1d9f881c33201b80d8f19a6228744a7)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x21ddc3600c6d6de7e4ddcde454d065d437c8f011b61ebd22555377650d1cc5f1),
      uint256(0x04906ae984827b7b016c23f75b50ddc2e75a4e4d8932e6fd941403f8d6dae479)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1887a84f56f8fb8707b9869334d24f6e315ab05a4c9dd3f18ed99107d31e2cd8),
      uint256(0x06b6bdbc2674f934ed4f83eddb57656af7a7e7fe02b03af37b06b0d40208db3b)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x26556fa26ebee22acea82ca2f483e9c55c87f3f3ad9bb619b68b2d56849feb72),
      uint256(0x29c11971b5b70eb4b38ca6577c804cd8cfa43fcf5d7a304879ed7093bc539c00)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x08d84d6ca5490a688d52d7334731602658f1a34f2056031be0b579c78973a903),
      uint256(0x24acb2fed526f191d44363da410e6e5d6553b57921b2c6cb9d8f8f1b10d30f93)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1cf585afc2f7a7d0f1ba259cbd1c8ae776af179aac13f0743fec6d2ca4d58ce3),
      uint256(0x001c431150dd66e9d3fc4188b8ead2f8aea41e1809f00d5cfb98b610d082b124)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1dca364a14db6ddb369d101e080c31b4aaaf6e04a22aee08ec14207c64dd2094),
      uint256(0x1b86a00e265ca1e82b5eb8ae23fede583be1c32d275d4b1bb803d172cd56c389)
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
    require(input.length == 6, "invalid input length");
    return verify(input, proof);
  }
}
