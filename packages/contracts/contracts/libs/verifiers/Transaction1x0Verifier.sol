// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0602eb3c376bfb82386f450026a6fbfddac117f623266aa5f69b55bf5f0f1353),
      uint256(0x054193b429b644cccf4edabdbac623e28dd70c838dc6ec66ffca7d6f57c92a42)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2a78b19f938987495a64de05b355c4094b80fc91991f8b2cd4451ded05ebcf42),
        uint256(0x1ec9f278495e2d780d66821095e9ec5f53c5e5d15591d3036f89637c2c8785ce)
      ],
      [
        uint256(0x0ceef9b1bafc6faf5137081a560cd94deb5158306c52710424c46e64d7d593ff),
        uint256(0x03ba98bc3ef9b0efd777bc2766dcb8bf524cd7848127efcd4dcd5989f4f1675e)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x189b83413e9fac885886403565335a50097b27f1958c84617cc7d3437935288f),
        uint256(0x11c594f7372145f247ec1f21c146a02f92755b177a87dfc6647a35864b98b136)
      ],
      [
        uint256(0x2ed7ded4e4b65a27c4a81bd74b49006828ca0892cbb0fb30e888ed28573ca677),
        uint256(0x1a30f160308f6b66bf945396ea005130a9f48d0645ff6cd8fd1e1ce912fa03cc)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x159b90bf3e10eb77dc5995be1f223dd290875f53eedf872c1119eb2c114b4240),
        uint256(0x25b5ae7906f6faa69c5b09940f70775d913f17ade156e6901daec5a9b59cdac5)
      ],
      [
        uint256(0x1161acd8bf87c671ff561548eeed961710155ac049eec1b2827b31a5d6ec6011),
        uint256(0x180324aee5a5ad4f5a7c68b656a302c243c5df01401cca2db1f5930ab23b4f16)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](7);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x107ce82982c8a8d5670674a12927c6ccc7b917f01043677b2229c8a2e23a4b73),
      uint256(0x21ff4841ca2b2ced1dc255b2134190f0bac46513867a5faf4c7dbcd90fb45a65)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0e575e59f7122c7a70eb3d2683e0f554f97ffb26bd29a5e500feb78107731d5b),
      uint256(0x0cfac6068efcff2a9bc69ad5895cb2dc735f95925b48e99cecd4844a6867315d)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1f27c125640d630bbf1b8d19d10756632820ba8b5d58692dc6fe6c1964fc347b),
      uint256(0x29a11b1b594d0c0f3e7e550c0a8b61f815a3b5c315e43d35a6ee124d6a66ac8b)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x171cfeb33a5452b87ad5ad8583cb161fc996ceb11bae9e10e6ad9666d0f5a1aa),
      uint256(0x1e5e04b9f75fe1f22be2fe6e1477614e5bbcb1f2cc81204df95c34645599857a)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x15bf6ae2c114c3fcd1ae2c93535a866257502d80330f2c9a5a81543879c128f4),
      uint256(0x1ca83996a7e279adba8a21cc00a02bdbae064e6debc5b38f04e929cdd6492ebc)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x2ded29b3ef3f43fcf63234573434b77b378903a95d410cc9f2f8fe08b0eb3f9f),
      uint256(0x0efbba3204395906911a0922576585eb399e1da354639558baf515db64d7d328)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x21497be273f09077fdf00e30687c82cda79c741dfa7629a88e65615e4944caa7),
      uint256(0x0520410a5b2fca0e57dd5db9a0aa4eb53e0a2e4569c819e2cb3c1f062111f278)
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
