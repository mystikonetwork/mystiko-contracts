// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.0;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x240dbe0d917b669acf6d9707aa556c1caae7103510a0f3b51f0813c5953d8b06),
      uint256(0x1932a16097016a0994145cdc5829635a89692fac1683a1fbb6efc84d962053c3)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x21fd4c5ea51dd3cf9c0f30d76ff87ee3f768307c2d7f7b6b461a56a70a0b379d),
        uint256(0x3038a8567dc4f49526833be5274f4ab75fadc9d54acfdf854fe5bc330eb1400b)
      ],
      [
        uint256(0x2d3cd48b586dbb250fe25db49722bccfb8031187e71085d58ad722d7afd06752),
        uint256(0x21621eae61598a2ea835dfe9ad42c7569e07b22b4c519930198786d35ebea4e4)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x024e9331ebcbc29d00bb274cf7c6a36369e7d15b695c37e6e688f7aba4a479be),
        uint256(0x149970b5fdb94f4078bdeafb60a8a24b7255c97870b85e9f6f8f1bf7b4208215)
      ],
      [
        uint256(0x2f3a0678d107deac9af7b48c031dd0f833673e6f5a109665f9c79a406728e8e1),
        uint256(0x1b3988e62f1b5b40cb588dd4f9832261762da1805205f6319faa792dd2672093)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x28e22bcf70457f35753e4ab2f3e26c291461834781309b540e951ce118dad095),
        uint256(0x274f4b27d7c6c391ed6ff89cd0cb15efab222faaa063669eba2d7496cf0a4008)
      ],
      [
        uint256(0x0fa4d83b80e738df12b765a1707e8e9b10676fe6b8b3e069affefb9f2e3929bd),
        uint256(0x102646b828300be66610436f11e33961fcf31d364d4f3a40b0bf69e08083d6af)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](9);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1fe073af706f095f8ba455ae03ef7c7e85e0d703c82f6b33fffc93d1982f9dee),
      uint256(0x1f6e1b19f2f1644b85dbf82072d52e62076393fa9708c71496c3f2c68632c07a)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0ef73c51ea044df5c3191c192a850a223f0f8b59af33283d7e4e71c06de5bb67),
      uint256(0x29a69b83434ea2a9c53e47638e05f249ca474b2ac6f5c54ad9c885a0c90f6cf2)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x303c666d45cb48301e68b5cb0cca37c3a30ef6b744a174a939aff70432e9caa6),
      uint256(0x1b1c46c862a8bb4e8037cc40e8579b5cc4cc1c54d9d276fe62b5d3e9d60a7eda)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2de2e66c4384906f90b48535a0982d540ebc6997ea44bb585b8d91bca9c38c62),
      uint256(0x22bf1de90ba81c4b76d9fc91603317abf3f1b0e7bfe5d4ad638afd9e35c70dfe)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x201d8d3f636340c1df0981ddf6b1877ae205229f46019bb9e8b56ff223d9f66f),
      uint256(0x13115abe4ced5921b547098efb269ada9f26207571cb2d9608c5d2f4aede705f)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x13dc74e0f8cf02c0be3b26904f8d349e7708158b890e54f9a98e3f73011aa62d),
      uint256(0x2d578548e8440b5ac790277f1a3e7294b3f0a9d797ef8e510e03bd65e3e151ac)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x28614ff9bd9b8b93d3374bdc806c274a72a082699f95213a5bc03b04409bab5f),
      uint256(0x1eddab692da4e71f961ffcdf1729f3d5ce7fc2c1c3a6ac768aab2ef24577c40b)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0e1cf3fe28265bb3ba42c452b510f7a9d533ca352cde7a79cc20464bf3e819b2),
      uint256(0x2ce65c124f74d08ae00cd64e0020873f651f4fa980acdbeafb6bce4140585bee)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x2372f39481d3a886820d44f5db3c7207276e8a3376cbc1d3e3ad72d87f0b1336),
      uint256(0x0504b288821f3654d25f88851ca95225785e7b3069f52af37a461d562d02c22b)
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
