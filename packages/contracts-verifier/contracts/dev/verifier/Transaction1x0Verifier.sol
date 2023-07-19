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
      uint256(0x2d4e461ec3f6e35d3da4e10564e7bb48f33a0abe4277cc8b4710d0b25753dfb8),
      uint256(0x08c5c13a88b4228bc3783639c3f3332c54c01f155f4068fefd2b8ce77297466b)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0ffefb5eea8094cf5231ee68292521c063d4f5bb9653096c74a302ad9f69ee55),
        uint256(0x2cec46fea95279577dde8d81d545f2796d2eefca77e2e7876850993742272364)
      ],
      [
        uint256(0x132c04f69fd5de240ade4bfa6eb51c670c3851bf71fd4ba70915a4418a22ef78),
        uint256(0x1afd460eb6ed3b06a5d7a01cb36cc019545c2bd81fe2fda4e1dfd79830cf1167)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x19989973f5d3be6f06bbde03deaf95230370ac099737741aa64cc4c451122ffd),
        uint256(0x2695127e934673205d8376ac20ae7d5354e49c70de01c3b7a645e04bbb5b923a)
      ],
      [
        uint256(0x10e43c0e25b6491f5718c31bb338150e1b6919f2ad447261445051cce9a39178),
        uint256(0x05e9db4870d400fde876dbcf077161ac18f05e564edda81dc7ee760b05501b3e)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x236b573dc072f52b474b2ffed476e5a39bd2d0afa88b52d18b43a89ee1527fb6),
        uint256(0x05652dd0313b7ffef4ca72fd48dd2176de57806555a769e7d16526b7b493e934)
      ],
      [
        uint256(0x16be3f6b9dded9aa9746e1abf76372b8325ec43443db21b1164f452687890227),
        uint256(0x2ee1a9adc95d3c90fe5ac4e9ed3dd8e31e03e95ef2ad66f4bed8b07ebecf2af0)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](24);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1ead88fe983659d046ff24142c12e48e58f06cdf090c8eeea242354663211a02),
      uint256(0x08eadd33f6b0501417de97aa65583c2215b037597b8ffb47e067053aa14a873c)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2fe7efc3063598eea382aad19ff13224cbda6ef4e07d7ff2f05eede647e59175),
      uint256(0x108c9f8295926774f6b2e405fda726d6725ff4f6889f5708d5a09943380b1b59)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x06e4eb197945362a754a972337acf9337f7aee6e01f43ee1984dd4f0dacb1594),
      uint256(0x242a3e32347759bc36ca220c17d40a9eb707ca02aee161bf3c6679d046333fcf)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x022e7915ca69f75566d69934bd17119c54fea00a3347b27765f31b5ed1351f10),
      uint256(0x18f909bec0b2b9cfb5f9ca87d04d86f9a1d032a8425716f14d3517cf2690e67f)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x10b6f07f7fc71bcf41f3e188a9e90eadf851b3555125f1cbd85b122397dbf2ad),
      uint256(0x18961368690148053e82f22dcc9d4bed81798a8ab671e41b2c8ad1fabecd09ec)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x209b0540f43e4998faf28feb6c8e8df0a073c7364a7aaec973357fbc1ac247b1),
      uint256(0x22dd142420144702cf65b3168e8a2bdacd02bb1591e86bda62679652f2f7701b)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1cbeb37d44772fd7c074445b5cfa26c55439f871b51302f60ff32c8af756d0cb),
      uint256(0x2ad96ed65ccd28f476c9524bcc96b6d98724b8f9934df9f3ff7b147b1e47e2e7)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0ebc954c258216fca006abdd6d2803e5f9e1619b5b67f4c14b823130c7463eb9),
      uint256(0x044d886cea3015ecdbf80ad6123724b414a8fec8c41b691db14f9b64ed5aa87a)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x08aa6ba414888bdf8bafca4abf2394cf862aab1ea66dc36f460f54a698c10a2e),
      uint256(0x2e744f25e0f9e34efd105b2f7674954296fe56a14046ac9232fd717e5b200e2e)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x220d063265b3f99bf0b132a02f5093435ed74c518267a1582f6aded2c458cede),
      uint256(0x10ca6bd9a7bd84f8cb589499736a533a8987ed8731293969943b1566776145af)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x053a32cb21a1b8d80f5ffebf4ab9910782eba9ee8e10228a18f90a3751a87017),
      uint256(0x16f0aa9280c58feebb4a426ea584ae07baa5f3dd04f7d2caed6877e9796c3c65)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x1bf0d1df96e27ea338ab3cf7ee0163a96e4615a88131e3965d65e803e6d4eb71),
      uint256(0x08dfc7f767a447062296e6e5f0058912824555560baa434f51fdf871a1b2d1d8)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0cbad963fdb5400a3dfe1d1e81e19e23ae4b7c6659f95b264db78c02b83c154d),
      uint256(0x1906a84da067e30eda607c15eb37493117ab3e94ebb96a0e23571158189708da)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x0125bfc31b95475e4c494d6cc82e2c0be53620be819cf462dc20a9d5eaca4440),
      uint256(0x151477e671daa70bd2fddd6f2a22cd1e59715779b05348f5c56dbc87fd7604c1)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x243d14cdcce95f64b0b7459199debf5055bc4f4775fe86ba48ae292faeb77539),
      uint256(0x0bb2e1fb234522e9d6f93563153ecab80904af25bf5d1eecd4644394f6b5321c)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x286a5d5b3248d2c0f8e9520379dce636d9e389f2f07a7b396e8a4c2a3b5a6256),
      uint256(0x2a0c63ced32f2246c9cd78863534e5de8285a22e8f50883b7282efd465192bae)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2abaeec3f20b69f6be271dabb063c2b10d77170ebaa43913a7bae51307f93fe8),
      uint256(0x158969db7bde102cae27f7c07fa21998dcc5c300689a963a98d23e80d5006113)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x18ef9afd389962a4474220dae7376a32a239814f9d2e2c25c2435904d045bb1b),
      uint256(0x05952460070abee9349cc455cf97d5f07f82725b9cd37adc552f610ecfd0c6ad)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x163c0add05af5a8f36624fd7b70043abaf099b3cc25bc311fbcfcb46597900d3),
      uint256(0x2f127653d15a89839ffecc02ecf33c6ffe63a36f34d79df224c96feb1e5e96af)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x25eadffd0e4a3126393c95067fe8433290120d21b765110a7012ded7803913ca),
      uint256(0x1d4081d3521b65e1993f70f19bbe13361407f3538264b9e588324ea68f6387e6)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x04d0bd0752d6491f47b0279767b49276e831e047a5dba4a4120dd5043b26dfe1),
      uint256(0x1a598b809a46bf6366994faac2c0f6956e095344ef7b0d6c8edfaae841f9a8d8)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2bdd2ab24f068e4edeac28acaa05b11566e357de19b288bdd6311b4b6e1200ee),
      uint256(0x07f7ec844a902c35ee1015dfb64e1dd3ab009045112afb88136ff3498e3112d7)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x204fa68402f1ef6b3f54de4b6dec989f33397feebed5220820869940ade3232a),
      uint256(0x1d2986a8585bb97a4403e7ab05f73ceef5f47d8c983b6d7d2a8c41466699f2fb)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2aaea6c3144d7feb79e054a8644e3d60248b06b617ba796b453b77bd2929f5e1),
      uint256(0x05401d7bee12f8c5fd3ced07fa1899453c3462b824231d8afe6194f190d1e199)
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
