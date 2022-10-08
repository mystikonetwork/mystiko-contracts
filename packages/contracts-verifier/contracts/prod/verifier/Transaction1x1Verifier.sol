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
      uint256(0x15c8a1e864f802af30ac1d7992dde9ef05e7dbc0b184d6efe6a2bc3353e7b5ae),
      uint256(0x2bb4d40142e98f0f46bde530c2d3b76a0d36d8de23aca1b551eb0111e0016e12)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x03c68f69213692e8f12466febb9d687e94c82f9b19f9a759a80ffdbd09c5290b),
        uint256(0x24533a018ff97d638245338cf011cb5987bfe351be85fd119c666ba99527b25e)
      ],
      [
        uint256(0x25b5569e318c66438f13696010738675eb11c9122a090f04a7abecd9e39b77b6),
        uint256(0x17333a6bbc75b90abf9e48c97eec6f8b9fd0a74c4768b74a5b54b12c930fefd3)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2f27c9193f403177dd21d014d86fe90c83f3a86434e2544031e96764b6f7191b),
        uint256(0x290c5032d766d385683b079f4ce9f50afa05b5ac33bef89174db2a7082f980e6)
      ],
      [
        uint256(0x2bc2eb594940a16e6db1220dcc923382d786b3aedae3d9f7e74f81b055103cd5),
        uint256(0x1c4f31e02748c8b64395cfd78a220b0d3776893e021c84e11a4a8304553b7468)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0c17c4e81f1018e301a134df7d3099b97fee2202a4edbdc0ae9e4614a4925072),
        uint256(0x16158eb7d69a40c80b51e2590c56fe37713fe186e7634471bcb1791c50db308b)
      ],
      [
        uint256(0x0dccd8a3047b35effa168dfe3ce612f4d99bc6619799cca10becbfca8bd30255),
        uint256(0x07d0f77f8b6848d9efb0ac2bbae4119343834e09d6ab70a52394b4e9bedba040)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](26);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1ce7fbef6fed1a3865e64aac4acc88664914d4f8781e8253c6a85d392059b53e),
      uint256(0x210ef3504d265ee21e9484f491c97926f280a95749b46768a0c40922526434dd)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0ecbb254d904bf04af7f63cbb7bb1b91101c3c778b939a36db996f6145e6be14),
      uint256(0x117ac79f093efddb6c17c8ddd7b161efbcc2f428df1337ff173f7d51e67d5b1f)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x035610601fbaec23a7395840fe920ea9232b8bed28a16b7cdc2169a5cb656801),
      uint256(0x190d7179118636096b46254824ef73312f55f193ca5c5e7021246f82f3fdf83a)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x02318c6cb420594a7efcbfac37f1181349a75087622dfe0a6b29b7e5282c61bb),
      uint256(0x06aa83e8d9dc9319324a83a18bff9ed69ad28e1b0289c72aaa337927697b6031)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2c49e685ef0ba8b3cbe3edf8842b281890995bfc8a2d672eb3d87d6dd4f9364b),
      uint256(0x10c62db4330f6409ee262df95a57c4e40be0885539dfabb764a6da994edfafea)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0ad01d7d9ff6ee71773e1b5198c1065c283c90acae038bfb4d078ba6642a9bbc),
      uint256(0x08a53850d5aeb4499ed1990d3e22d974f16a90ffbe0f0ad5bafcfce5b2298180)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1323c6e8b29f382811af67737b3ed10745859e7ec1b4e10ffaada840f85cc215),
      uint256(0x111b93d3e338de43162bae8647183aa7c2fd55068792462fcbe344e7a894b7f7)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x13288b681fe9f3f6e0a5fff35843ae1d711ded8545758f4b1ca7e311dcb5f0c6),
      uint256(0x0bc024f53fa684f0cb2d815aa8dd6f5aca4905e7c284f0bc1cbc9078fc55c4c6)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x020aa91c1d9fa4af9f162e003ca69830a353663fb6e7eac52907337e93da2476),
      uint256(0x0a12288790ac69c96f2ce87b4eb5c6ff73bf4fa5cf3b0a46d25a5bfa19a1aecc)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x0b828a4078563bf000e2f8f4514f0bd129187d9dab2ae351c27404ed001557b9),
      uint256(0x0bee07ae94977f78a68ca4c3d54824b77f66157fd5f25c3dec144d6bfee6c37c)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2ad7fb2b2c29ec025a88ef9468819936228b8dd7015f923dfa5edc3a0cbce186),
      uint256(0x03c0ed1196b3fde4cd7d6c384f7d6dd0f08617190f3db839ac78cb1a423e7b04)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0c72263c41efec7e892f278ac536d85957c4ea5aa2f1047024ade0f87526b7c7),
      uint256(0x2e470f81a165ec2bce53698a1b2cd20b2340e7701513a30cc9f25fa25c603ac5)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x15ac63f4d86ac0fe9682555ad32fb7bf0e3ba09bcb095ea2ab9b2d7ec43fb22d),
      uint256(0x092f3d861dc3aab5b028cc37215ca8a8acf14c6818e0b8d9c39012fbaaf66c49)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x23f70ddc618d4140abdddbc7dc01fcf3466f76775c73a3e91d54e1927d2b0e83),
      uint256(0x29b5592eda31e4b2230657772a8557c7dadb63b8f67eb803098b139c1e1a6ec4)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1593a8225148ebb05bc4f20f35b135514e8f0f348350c6028c0be985d03a5359),
      uint256(0x01d92d47f616338692085f68541b0ea4b1bf3369eb10dad48c7378c7ea4036c7)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x14c6ca64b0403497b8535b6cc7054360d8d40852a2572880ba462a0ead85c76a),
      uint256(0x138b01981d0cf7663bf5fd0033a91d21d3f3aa9705343001f53a1cd135710c03)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2c3b45f3d3d8445b0b586298d107567825cb7a166b30f3702c858adc5517b711),
      uint256(0x20ba28636c2adeff850b93af4e9c0f3370584e080741868e121f7551deb6a71f)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x27334236512de0c17c70272b801fc0e008ada134c8656df831e2d73fbdb88aee),
      uint256(0x27c3c7b0b6b71ac916b3266c094654213963939b62bda299005b999206441dc3)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0ea3e65162677961efd17eb5550d6217d9a44375b71343170bb7fa031d63dc97),
      uint256(0x0a8d5daba05b5f5bb30b049662a8894405aa04fc617a377ea2fa983f209a7075)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x15274a9515252d8a6a28ad49cd5d92f04baa1d7495fe2c9bb3ea2f612aa70b65),
      uint256(0x2ba12dad69ed90bd9e84e0a4d826254f1a0c27b9b0f6bf9d28a2bf1234573102)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2e10c3caaae003b779ca38df086eef5dc58fed3ed4712540c1766e56fe2b9a83),
      uint256(0x11fafb0a10cc7fe5141e28817a2a0210c374f9185e71277d3d899c794f277b5e)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x1711a5ab7213666dec0b2eee2068731a121e5a284581ffcf30d68696cd0c7307),
      uint256(0x05be3f8d6ccab0260cb654651edf5ee2d440b495b7c16761600101dd7aaae5b2)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x0aac3a329575cb8850954f758c7a9c9bd168c8415fc80fc53480c00c9778983f),
      uint256(0x2c919a51bc048a6101b9038121522bde5f93d86c134abc6dc61a20c9534c5746)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x24b925c3640e44ddfa10e3f88227eb90cf3ab15c84403599250cb12f24eb69b1),
      uint256(0x1d289bf6a9b097df1e33d8dd01efbef44d645aa695394b505bf94644b7504140)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x0198bc08be323b82ec8d1c3d2a434987efbe0b111b5486dba31fedf93edf3c89),
      uint256(0x1fa1f8072b7cc2a8eeee36fbb4388a134347425990e7a10ccab8729740cfb8fc)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x085b4d3fe282b9fa15285d2e166c49174ce490b7020ec25a640c2e18261840d6),
      uint256(0x251f95c1ba20dbee894999a39898b556484ad821cb555d6b6ec9fc726ffb18ea)
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
    if (input.length != 25) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
