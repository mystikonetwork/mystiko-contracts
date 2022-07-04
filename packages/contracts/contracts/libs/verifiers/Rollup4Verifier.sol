// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup4Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x1580bcd09fdfda69480d5389a6bda4791a4abba58a3786cdf43cf38c4aebd2f6),
      uint256(0x276286a69866ae2802069a78fa1105780a95e03363af6fcdfd8090c72a4cc339)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2d4d1b4dde7a55a6a40970f2616cd9768e11002c497d28cacc747cb724a8ad5e),
        uint256(0x2c751a31268c5281b10bd5f539bfe696e23f59618d523bd5c22edf3bdec29a3d)
      ],
      [
        uint256(0x033dae0485443b344275a226a92dd1266d5356fedd97ab342e03fe80fc82d3c0),
        uint256(0x2729405948ff151ac7b6522f280417748bce3b8b6889d62e94ddbb169b4187b2)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0f68be9a281ab95764a4084a051dfc86db6312ee5eeeaa4a5e45183da8bbbfb5),
        uint256(0x02c152527562832f7892b17089f3af834be76a0693b0bb616fd6daff0cb6d327)
      ],
      [
        uint256(0x0a677b625ca403f3300198b450dc851b92729636d9cc20f444fd775e15769720),
        uint256(0x106df3c4ecd4d4f3c9f1968069ee2a960767c3eaed3e927164a427d5502e930f)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x184353db032b5c89e718343b308471df862708461bbabdf06f8dbf30d0713b1e),
        uint256(0x002853319478313f0d49a60b738e9903fb9d332ca0cad2844ffa8fda48564f18)
      ],
      [
        uint256(0x299ca633fd54d3c70af9f5ef99a94b959015de23fdfe2ed2d1233ae2d1249f29),
        uint256(0x12d5a9b81c64184cedf1f155fc1dc31445a9565f9da662454e49cd015066b29f)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2de9ce78fa530c4366b1209c0cf1b0f5ec40a01aa7ea05c08a6482c237a6dc2c),
      uint256(0x227cb0dc9c4558e89403f157b1e19a7cc696f6bbba6f7ddb22fcfbdeb4bca8a4)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x29a9a9d3f057e4bc51fba306cf731651f80d98cc7d21183c8ebf248b0cdc80cd),
      uint256(0x126ea5f4f2e8170706bde6ce6a39dd09c528d015fed8400514739aa7c76d190f)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x169156adee136df7e05239577ea15f13038e2b23b57f7a72a0acc947c602f5de),
      uint256(0x08f724c6c21a77d6c5498ec4a8e616275d8907932a7a1ae76eb55f69fad50603)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0ddb47f9ea85238133cb90432746cfd5571de68df39c404d55652784a76b8251),
      uint256(0x19ed8c55723a2306f1b944abd5f7e789e76125d8afcae603884e0e6890f2b640)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x05144bfd2254000f7b9e72b248de666eef789870e081ca50d05d86e139f52c58),
      uint256(0x1879b882bbe4680c0983b9ef4349706a5de35d0c054baf75ffb036d85b9b6964)
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
