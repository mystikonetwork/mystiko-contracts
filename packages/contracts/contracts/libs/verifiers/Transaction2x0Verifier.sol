// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x277538903f6863fb3921e0cfe41d4502aa3a144ce52979012ae944c4f67031b6),
      uint256(0x2b82d37e61da101fed4d85361472764e008ed959ff193ce9a53412ecc1432e7e)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x019aa9c3ea93626bc40f59a365015f78af14863d3ddd633f79a776703a956795),
        uint256(0x12538b1dbb5192f7d90c92b3986e03690f86638afb98c9d8f3db91a57978a9a4)
      ],
      [
        uint256(0x2c2b7a1a4ddc6bf8acb5d03ed7b466762cada5b349af47716a200822a3e78a5b),
        uint256(0x22f2dd6c6e0008394eb049a92d53f3270a76ca0ff51ea4aa6a4c9961515887b9)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x27bd60a35c5cb7f8e3a677826d3712407d483374463376387ace18c6d9d61c89),
        uint256(0x0aea1fd74ed5e22986a6bb51c763fc9a5d1299e85527d56dc606936734d74e97)
      ],
      [
        uint256(0x12a3cc9c73dc97fbfdf6d1c5de79131b3851baba55d313b21f2cab020a859c48),
        uint256(0x2288fe30f2dfa7068919064270b0acd0fbf4dbcfc290e2b3007608162dbc9a3b)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1ac20b4c1275572a60cbd03bb8e580fcbd228cb3de3cb4f18f7d75bf94db8ca3),
        uint256(0x14714123946fd8602f3f3d49a90cd660fba8272e9c062652a69d69ac1b416c13)
      ],
      [
        uint256(0x0c8c4085dfe4e2604c7d9704df6b3b896d3d20c0191a2b6796212e5578cd7ea0),
        uint256(0x0c44294fc4c443c2444807e2ef7d46b4793c9b123b120af55c575683a6bdd5c9)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](9);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x144c5a5fbda30154f38f55c6ede7ae443040b65a8af0b14f5be4c60a6afc4c8b),
      uint256(0x0fa01804a52d01a4aeeb40ab92c656f72cfd4a63441a1a54260801082474db1f)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2ce4655622d329b0a2a4990533f413ec33f98d51c233b9a1b6802e1ad55f3ef5),
      uint256(0x15e2f2f0464d27bd20f129adbd8422e5404b7997feaf52c23f0a8376d106e76f)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x04769d0ebfdce581ed81513d84c851574f397b91bcfa9777f150797d2ce76e10),
      uint256(0x02d461237bdc9c13b678f80665c190265615c0ff6b48678d9c842ce6ebfdd431)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x042f2bdeaff71f5901dd3807d88f3808d2e06690080268aa31fa836011695c3f),
      uint256(0x20b2dd57333cae4a7927e08bda9c1daf0836c4314269771baf4c13556039743c)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x140d88e7dec3a1146a90ddc8f3c6ad361172024f13d7b8cee25cafd0972ba52a),
      uint256(0x180fa190608b3b9821c348a298cabb112e73b8108ff14b5681c2adba0623b39f)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x030f1dcbfba706c933f16977141271c4f419b677b92a96c169c801a666c43463),
      uint256(0x270f30720ad2cad252ec5efa79289f66a8c8ed80300ea47ce0c3d7d7ce48af6b)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x2d7a951bb0bb777fff15ef36b73b1ba55bcf0bdb1fa1c8b97972bebda9254346),
      uint256(0x01e0db889c0c877fe41ed96a598ed3d5e51c21c5fbe6c94833a1ca6bcd8a114b)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x16fc1465e5e9f056e4eaccdee1c4d061072b74b3eea8eba33c7a0b88c55cbb17),
      uint256(0x1f65dc647a255072402c96603a5cb6351345000c2aea6ad64aabb5e4ff9520a6)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x037b8c67e581edc2edea9f16a66966b128e7111b7cdc64ff7d92a10379764a0d),
      uint256(0x26349cffc68c534ba62aaa76c2e16ee785a0982d711f2794be6f9956d94851fc)
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
