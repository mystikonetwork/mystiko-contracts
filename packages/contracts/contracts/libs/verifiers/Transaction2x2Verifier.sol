// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x065d5bb66d1e5d5404d87a83b556bd2029ff0eabe82b77630701183d51639544),
      uint256(0x08dd321aab63b4a8c23bd09d585505008009a88ba7c3fba9638c3c0ddcbea9fa)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x17175121abb6c818acbae333687834b781bd65ac86ead079d6665c57e92e8c3e),
        uint256(0x20498321b07a3f2e7ed423f1a8deac0356f222a63d70700fe30bbce6c4b3dce9)
      ],
      [
        uint256(0x1b23a650a27e7e4037e6802c26583033e38140b4650b712f9383a256fd4dc79b),
        uint256(0x2e1b73811dd9f433ce81ccf90dc01697eb3045acd39caa8d7f79006f9e2c64bb)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x285bfb022b14af3dcb15dd0b9236ec4331caf95d9c62b0f9228997ddb6ee00d5),
        uint256(0x0c446cadb9f62fa0d7d4fc5acd60cd434584883bcce09fc09ad0116d0546baeb)
      ],
      [
        uint256(0x09066cc0d305d39f17d541cf0bb7b46033e90756ad3d55c8e4fd465a931d3f96),
        uint256(0x12238a87848f2f6fbdda2eb2464fedd705e7f6d61510ac1a94922af0e25a6bf5)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x26b884ce2d792dffb4f0726b2b162b5ba2839d67248de37b7eeed92f50f556c9),
        uint256(0x2e142687c06e33bbdc8543f4420d988ab6c71e4782bc405968b91a0bb4435467)
      ],
      [
        uint256(0x048a0a5edcd421010b1afe70530440dde5af1a1ae0857b2e00aa19b037ac317c),
        uint256(0x291db466d4457af5512a449a306daebfa93b83bea4b5d009591af80ba276e2e3)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](13);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x14de4c8a80c809fd6e2b6c8cba481abf2e42ef961d7425138f30976be08891ca),
      uint256(0x17cd58993a4976d717177f65dd37c476e94c5b90e0099f6077051b4c41ed8a0b)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1fc679e2d31bb98b18f2e56e9d97853815761d296b856e77d2c2be2aa0c1be26),
      uint256(0x0417588679766a60b4fb1d9315cbba0556d5baa68dbe3e37b0ef004bfc2f3342)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2b21633684bd6157e6053f882d363d7a644e2c3ea0988dc51866c9d7c4ee2b41),
      uint256(0x1217536a983d50ade3970714fc647666fa7b5250ee089ab0deb597d17f39d25d)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x137c92ffcd4ee8da0b20c6578def3b8fd4e87f06ad884036cd0a336f3db1e954),
      uint256(0x153b74478c7708ba11473492c989b2e32a6d6fcebc130a18db581b2ab04f5aa1)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x11c299a3f272e142ef97661a486ae2083c6c700c498ee3a2cdb584ea9e55201e),
      uint256(0x2e9d87519fb6bdd1fda29270d3f53644221bd842e05fadc0ba88b8627b15a0bc)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x263a1166ce2ad3b9c3d4310ffb7d768b7d09b444a4b5f9bcdc964836c4891a1a),
      uint256(0x15933c4eefe48714be292abcf264025de9948248d6d563da42e67d3fbf42feda)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x114d3067d1fe4e08a7c03a9f3eabefb439809463f88867618d13d5c37e7df49e),
      uint256(0x243161e6b3590b9f05cc05681ee45e23dffbda7b6a22147c43a9f3944cac0fd8)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0a3a423e141ec936aa3bae3b7781eb785eb3ac126bb603c90b8dd58a32246e6e),
      uint256(0x0f9eb08f041ff1b8fd266798458e82e63b39bbe65e23bf0a53fe16273bdee114)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x1e742e7acb744dcff64b901123da42b7db70602e26ac80a0166622edf18215c0),
      uint256(0x18d6c97501e2f1a23697e3dc35f29fd892ab9dd8eb57fb091caa42d09256d9a3)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x29e6d126854d425bd4081a60b39c0a3184eefdb7d23c41cc192c7ffb4ec606f5),
      uint256(0x178440ef5d9add32370fe98e0b05a4ddcb1cba9f7ab5858cdcecc3c9b7e3ca0f)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0226b2abbe854d25d050f9f96ac77b72d137246b97280f08568f59deaf4c03b3),
      uint256(0x17732912427b5f244ba6ed5dd672fba7d6221c1f824ad1cc487acf3112f1798f)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x23e860d94ddb6c98db77f096ff7fedfc21d93e03d06ad88b1a7af1e2b47f34bc),
      uint256(0x238ecee727f142c8bd84047f5da4bd4ff21426bb848f6d127dac2ab8fedb7721)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x297515785b32be6514f96a8359a94e6e48eb8e387066205098fac78ee4314051),
      uint256(0x145057f2c0e4c04eca0e85d121f36e1c37b526afa513d73b08379dfa5c23b946)
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
    require(input.length == 12, "invalid input length");
    return verify(input, proof);
  }
}
