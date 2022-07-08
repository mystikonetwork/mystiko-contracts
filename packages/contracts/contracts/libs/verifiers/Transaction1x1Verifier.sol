// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2383715c1409cc13ffbbc12d84bddc2b9929fdab59e9f2abe97e3ad963f4a5d2),
      uint256(0x1b66f1efd0170894bff0b2b013c5d96314c79cff977f3470b52e908ebad23528)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2a437ca961d8eb900d431eb5b3c657602a5f343269d2d82c5486d21f74b59a0f),
        uint256(0x14a86380af6e7224fef8a8ee214a7ee657d848a39fe4548f018778b3127894ce)
      ],
      [
        uint256(0x100db3b8c529230c84233d8cd287f9097c7a9da9041d3a9d58c1e32c28983e37),
        uint256(0x21d6cdacdd1bdd2af8f3cc71014986e5546190029c1e573f198393964c16b0b9)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x24c1437954450a778cdb575e5da7ddbe56f08d7c0fb878c228b785e866b29d48),
        uint256(0x01c72e1474ad9cddc0787d58f808e87dbd8361d895dc65f19c84ab7602066153)
      ],
      [
        uint256(0x1bef68fde7fac29bb7421f2f4d878d838c52bdefc00f5849cdca97fc62b5113c),
        uint256(0x08826bb1a5dcee0bbbd5685c44cc352322ea4601ec8572be41d90e9f15b78431)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x28d570981d776fa49e02f0d30f41a5777a36cb429b3ed53cc09f650353a997b7),
        uint256(0x095fc1a8972518945ace94a7ee49534a16b91acd8d3e5e1cde3ef6f6813ebfda)
      ],
      [
        uint256(0x19b729804d92d62622de131da9bd66c5cf7f3f3e416ff1f2a88b8d9911f28ab4),
        uint256(0x1373e96b54cdd8223a4603e7b6cc68455bf2a5538225ffd0a8ee8661e887326d)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](9);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2d213064e194957743913032e4e460402a006157b9485b68cb6507536e0f23b1),
      uint256(0x0462932ae39874fdd1932a5135b1939069bb2835f581476b8ab9da5abe8cbc29)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x22fa1d7b5d9c6dddda8941f955e9bec0adc6abb453748976aa77532455ff9612),
      uint256(0x2919a18e215e54bbeacfb3a4111432e208b9fd7f16beb31b3c3ff0c4f3041092)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x205a80f0113beab83010818daa426a8a72741f204b566753c6809166bfb62a3a),
      uint256(0x13c437bbc284eaafdea48475bbc9e370e4fcc67d5deb8b3f9ce3bfdeec7102b8)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2a4b10c069ac7414a4744cdd09e346dd6a5f77e053048fceeaf980cc3554ed74),
      uint256(0x2c880215975fb375e3fd197efa7591f7389cda836220bb3016f8e40653b8d87d)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1dd8de0c4ca0d8540bc697ef40dc06ac6ca42eff1cd31f01abf197c67135f31e),
      uint256(0x1ba82916f6a03af54a29bf9fa15c613b7d7073455f7a8e3cda8945889d57e7bd)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1c65eed03179ff4308ecdef6669b4dc85e59e80aa317b1f65f2ba16b84a2b812),
      uint256(0x209ddd48b28834e230e2906af984ef87e54a4fcdd3a3c318be63bd531f8a90ff)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x230272b394c0d94dbb5553e4f49f8d653cc6b384c14b404c7c498496b93e900f),
      uint256(0x0813ea90f7b3597fca0b35e4a7e911d9382f315c5e3c5fd395ae7eb6d1505533)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x2caa740a8e710cc3998d4bd8f037669cffdcfac1aa6bda0d342b9b68ffcdc373),
      uint256(0x190714c6cc16c5f3c566c7bbbbeed5296d9ce5cc91213ab620029bca2a934090)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x08f5126b744ccafbed43f8bea8123d7d56fbfb8f426260124bd6b4b92d154484),
      uint256(0x09b2d7b14d4c18efc6a3c8c93571f01ef7cf8eafd7ede4df950c555938c83cf4)
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
    require(input.length == 8, "invalid input length");
    return verify(input, proof);
  }
}
