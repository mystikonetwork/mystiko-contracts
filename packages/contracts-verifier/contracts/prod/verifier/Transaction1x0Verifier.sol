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
      uint256(0x22b3062c2d1194421bd64687e32bedd63d5f505b497e40b0daf59cb2569346d2),
      uint256(0x1b1fd284680703188f0922aab4a53fb21a69077daabd210e70893573121ebea1)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1e3bd2d8c1d886d5a2cff44ce62e7356322d326e44d81b76a1af8f25be476a1f),
        uint256(0x106615c68faa4f218b2425e3c6726d4f4cdb318549d36fbce889f32678cfea34)
      ],
      [
        uint256(0x094800e45f20193d49c42f3efa1e045df863c39bd5d0a67a210b967d573e3563),
        uint256(0x2c47723417797867be7b2fd221c4878fa28da0a5785d702fa7227de7b3b92e6f)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2f2f02fb1e403be8b569d70a3905dec91284448d241f95d737026db990dad4be),
        uint256(0x1b6923a26151dc983b95b7c8b9cfa7b5ef4fc2f075460ef87b09a339661aa356)
      ],
      [
        uint256(0x23c83faab4a1077d7421116756188d8cbe858f3868d97cdd9e1994812ac27baf),
        uint256(0x1e23601a98153e57b65b2517833fb5e2134ec5a1043ffa4b21204bb3c3038610)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1ec8c5702e18e212dc5fb35b77d43d0feaa094c93b85d774e3be9afa682393e5),
        uint256(0x26e03ac34b7169e25e173e9571b73e3f1bde51e970cc51e5d75e15d42738f170)
      ],
      [
        uint256(0x1e37040d47b6478c68f61d95ad5cdf5d6717ad553c35bdc483d16684c60697de),
        uint256(0x18341e3c390c35918753723154de70d17f20aa41eaacb330b26ef7ecd7be457f)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](24);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2bb791ffb568c61a2df310ca6ed1497c36f792bc26734dba1a194ef19c3a389a),
      uint256(0x2396fd0d424f2a91155988bf0e6a95398be48d2b5f39f04feef568ee4ed53ae9)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2e8abe311e2ce6c8ba88e8d69f12c4c90c4b63f14940a64d768d97ab82e7c134),
      uint256(0x2cf32c6067905d4951339827be298bd1f9eac1cccef94bc62d7c9a4b4e68a327)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2980d2f0e3328f7a74a1a22797f1c9cf6ab5ede847e21db0dba1b791bab24ba1),
      uint256(0x069bddccf453988b68474104c54b274c54cd1571da56e5cd12f2524c755c514b)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0fb686640c130d4487595e00986a2d3458e18392a844474955a6a5050c3f5fb3),
      uint256(0x1c121abf4ced9bd41f15ff178e11e4767d85347c80ac481be0b0bcfd57e56e2d)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x14cecf4a012208ccf5d19290954e236807a967712d7be6d01ac47259d1c6ae6d),
      uint256(0x269ea482724975602417fee8c31070bb9c18a70dc9f855b2eb0891e028630a71)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x2e5abbd6880593690f9127156e714b3f6f6201a33ee04df40294821b572f2cec),
      uint256(0x1a5c90673cf8006d44f6af4b4df84105162ad26fd4ef45c2cacee1b3b479344b)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x18736558bdbd664c47c62e70274543125bcd22b6f351a1a79bc6a6eada86775d),
      uint256(0x17b5349e34b6e666bf20adadf507c48befc8733c5ba4e7bebf6821ab5d445859)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x20e54e5ca8f25473f544e6f7dba6728d4a744e37198ac9808fc8531edb6b9d55),
      uint256(0x0af00f247604eb2fa26c75592877cca1c02739ff8e406bd9898214eb4755a8aa)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x1c610206fc2b548419e984ae33e47d5bc16f319c9442c9fba7f1500cc0a2cf61),
      uint256(0x0331be837cc815bb6a69137b6a1f4f9ab7bd7a64989d6531dc4ed67249e6550d)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1f481a0bd4c0382dd48919f1712c8e4c0e3fa71eba040b77003417f4def4a92c),
      uint256(0x0a5aca85d3704846f3937c8ab326b1a145fe93e0922beeb04fefb4641e18b7ff)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x05a842558bd5be83a594ea67f71b3679da3122a84410b722c894f3d06f6b63d8),
      uint256(0x2a6bf167547a5fb870268d1487049cddae13e008cbb2ec00f627210da6f2bdd5)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x14d50a1866afaa18751713101632a6c69c63256fedf41124b63de5d3f9d071cc),
      uint256(0x13efb7a1c8169196096c68a763e6a38a3b164e033841ecc36b6f8893bb66bb8d)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x1fc3b0119bf9b32c2ec080beb93a23f7287bd2f1dda70d47586a17cfd55ca420),
      uint256(0x0f4140d93f7728784333478c52357d65b61a15f4c3e6c906f8c42fb1fdc28a90)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1b9991992d8d51c860cfca5a9a0c8483be0246e7fc36249b98d6e23c56afad82),
      uint256(0x0ecdaa42fffeddf36a2feb28fca1178d9fc6a376cfacc1ee72719ce11610fe15)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x2c06895920310477ce35e349ec24869c864bfe032e124d327ec739046fff3f1f),
      uint256(0x2f23d66e52d15c9ac5a217918f173dac746052eaac4ea2273225010337502ab7)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x08bad4445fd3653804697094c595adb8ef5062e01507a201a64358287bfa018f),
      uint256(0x22334a68bdc0322132561256f52831408b29b33b7fd70db8111279c4e2de27cc)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x0942c42babe0ad88c7504a211083dc5f585a14a9ceded8426f3368a93032fb6a),
      uint256(0x25e7f820955318165ba5af61eba2e733ca4d22ec6727120741ce1a83a7823f82)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x08cfdc7e62b4f644d4ab5b5985ae54ef85c4692f3eead8192dcaeaca885597be),
      uint256(0x1e83e88fa4ffeeb0d2a6040b3b3ef2fcdd30d215f2407d80538893c19cfaa934)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x27a5b80e7434d9f44aec45b5a3d86e937cfd3d3190a1caa178074fb58fef78a0),
      uint256(0x07a46648e037759e88a612cfebe51f56f67833051a964915692004c63741bb9f)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x27558d832c6d4393a842692536437ab8582b0d069209576cce8187ae5542f9e2),
      uint256(0x279ea98ce647bbfbbcfc03e4912985b2c7e7bec24c42ed1650295f3da60f0a0e)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2b98246f498f448574fd75a52b8a54e662eaa625d6fd7939482da9a244b26967),
      uint256(0x2874b39bfbbd3c2d984ac75301bc1ccb021d04d110b8ce5bdd43621a57b077ae)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x00d93d7ed75ce0d9c511ccb8770368069a8c2b6f464780158ff7b24b3479b893),
      uint256(0x130eeda7ffd27c6191cb2d2f35563658f63982b83f206e161a905be806932657)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x07d04bdff73f092686643440f9db623068133b42ab4abfa20f7dc66f0554a0c5),
      uint256(0x2b28ea0892427456d7e39a3da44d9ef55bca25ffa172ef72b5b530364080c123)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x1ada3b8987a31cfabda733e8bdf5c7382f75057624b72b26cc968130bec281f1),
      uint256(0x2bded19f039bf41cf8cfa56caa184f113a66f22bb7e5a37754294d152f79f67b)
    );
  }

  function verify(uint256[] memory input, VerifierLib.Proof memory proof) internal view returns (bool) {
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
    for (uint256 i = 0; i < input.length; i++) {
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

  function verifyTx(VerifierLib.Proof memory proof, uint256[] memory input) public view returns (bool r) {
    if (input.length != 23) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
