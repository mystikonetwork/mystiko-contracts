// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup16Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2343cbd8d4983aec15bb189e2a96a598110a5255dce870ff1959d1352a084b86),
      uint256(0x1f53b04aad4d61e69bd5d622da4416b19572c1710a0b60a07091ff7109fbc534)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2c6250f036da057868cc78f7f24b9c92cb2acb2946d89bea5b418f52fb2c37a9),
        uint256(0x1220094901e1e81b377026a6ebdd6a4884e101a4947abd32bd32c76664654446)
      ],
      [
        uint256(0x25c0f7796cdf73170fa43b9387dfa1276ca1ec5cc294d12299a6d3fd1c49bb98),
        uint256(0x02d6d2fde0c1630a9e9e5e863f60f11243400ddd011aff1b53cc61665d9f0774)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x17d5646de16a93d6df8388ad9f188a2b96375d2ed4feffb1a4159a39c283e864),
        uint256(0x091469d885f51194364102c389935e34e98ee0c29a835682ff904c60bc21752f)
      ],
      [
        uint256(0x0f9c7e5cb043508ec62083eac58f95e6ef656928327368dfcee5c8fe8ffd96e3),
        uint256(0x11533e23b0032385d7d4d94a8433a0e3d815dc68499964476cc9bc30adc5c421)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1363faa2d7cddd5d047683e8020426f95887778a89d6e2599cad8fe0d94ea857),
        uint256(0x21659548f8816da819b8877764918b2298a5e1e7da3747eb6e86bc33b6493d5c)
      ],
      [
        uint256(0x0e4cef62818570a45ef27f3c153ce4d4a86b49a4a115231ebda3d7908cab6c76),
        uint256(0x22890d66731426165d3a4665d1cbc85f15128be4a8d1e03a48edca382dcdf670)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x28e78c2427a3f67f8e3e08021ed8ac9632cf68ca7ff20d0ed2778802254f62b3),
      uint256(0x1f744cba3f38532fea8f7a8a4ce7fd69f07c4048b0fb7356ac2f080f180e43b0)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0e89a0475f1a7fac670ebdffc64a53235143c7610082125621e5295941d4c9b1),
      uint256(0x22c481017f4cd712bb5216a91c191ee58d9a997158e2a387e9ffd39792e77eee)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2b059ecc389296c8c018e6be1a9cedcda2cfef5d866d17ca847b1502384a826f),
      uint256(0x219873f2af5bbb693666a1a64385d1c7353f807ecdfa5a1e83e7731f33b36ef6)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2f721dd06675f438979ce46a24cf0cb4e6fbef374501b4f0c2e0e22b83dacf5c),
      uint256(0x0577de4b80f34d170276110b0e176d490635758ace11a9f24cba46c9e13a1dbf)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2411ba5dbb28aa424849c905445d990a5acade2c2f1653bb4450156b5526ba4c),
      uint256(0x14fcd2d15f86949d189901d43a0bbe88360332be5e471807049ec545d6823c81)
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
