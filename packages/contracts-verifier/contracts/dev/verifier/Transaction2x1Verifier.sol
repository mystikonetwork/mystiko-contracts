// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x2aa50dbdeb2e35bf208510dd7d5dbc339ff5430a8660a007a88b4ca02285cd8b),
      uint256(0x18d758715404aa3580aa30a87bbfd97dc6cb7bf23bc2fba54aa67ce86e13686e)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1c52501ee550c81d0c402e5a2f28a2b683310b3199aa731383a16b2a5b8802ce),
        uint256(0x2df69f900dfe7cc1313c334bf6b9fe9fdb2dcef57e9c781f13b397d82404ef22)
      ],
      [
        uint256(0x006737b02445a4823c4343e77508c985cfbe196331203569018f5ed15a8a173a),
        uint256(0x040e1dc0a711e1506aac5637ca5ae55ed519ef59307145168a85e80674f2d109)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x01e878d9b9f395e89a89ec01f396b80a437ca9ce2c284a05dabcf361324284a8),
        uint256(0x2469613cd6aa531517d48c4d2d31673c32563cc595749528dd49f19696f8a7c6)
      ],
      [
        uint256(0x034423b8c57bd74298812304261f119ab125f1be83c0e5cef825c8c3582c3d7a),
        uint256(0x1a7d140bf64959480ec735c73d1b0334fcf9bfc37b72a817f8370e83353d97eb)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x08fcdfe0d6277e3c3a84cc2ee8c9033b10c6c48ab461865cf37d7e00cfb72a2e),
        uint256(0x07cc9a62de707d4e7c0b8c4a6a108aed7893db634fc06c60c87d316ca229a6bb)
      ],
      [
        uint256(0x24e632a110186989f3ea1743cf307e041e86ac3c57f1a6320949933ac905b104),
        uint256(0x200dcd931afa32f133b068def8b3ced4335127c06537adaa27157d23ed16678d)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](33);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2e40569c63e4955285ec166f7e2eb5c3716cb5ddc27c6086801c193e75e06843),
      uint256(0x1fb7f289a828f8fa14873bb1d95463642d0c0b02ad6630c58eedae0cd52e58e1)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x01631b167053c2d39100f1cbe0df58a49c37e9421dc40a012257a7cfe8260839),
      uint256(0x0e48ac1c5fcb946dde7a90a6a9aa0c6f20e3fae68617ecee266644996f1545f3)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0b38a14ef104aa0df323a3e1ac8a1c65c5c23d73d078b3ce515b3130496745e7),
      uint256(0x2e66f6d5d7c69efb58592802cb2b1e8b015dfdc5891fee1ba81b526683700e06)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1c29388913d762cb287ba8aa5c89bfba3c6de2dd0ef970a36530fa1f35fadb6e),
      uint256(0x0d04ac592b1b040a2c165635c1e8252c927840253a15d7c3bd490bcf71b62cb8)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x21461b1304d0aaf44c73c2d1ef5d633df9d5738dc869fdc4a1192352a0d10053),
      uint256(0x29201d58bc66c157d39879ae9a806de04612b26c28a872acb5317cd74b74b77f)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x244aeeccd12e904a0a28c30858a7c3b155409f1d8450f8e049e929ca9cfd509b),
      uint256(0x0c5beec2c99e0bc5e16090273631e49c3fc2472b3c471996db26706415184c36)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x000bbddf44c5342ff62a858e98079d003ce0e55910589d5d29d2cecaf934eee9),
      uint256(0x056adb800c4343687f0b01c0f73665e0719f288a0c09aad10b22dca4c43aec9a)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x148a088e2fa5f7e7fe7d36216302dffbb3ad46c27bb254137f7fb57ddf5f8ecf),
      uint256(0x0c0d1ace6b1f9d398d7e487366514aa05f15020d05321f1641cc27c8723a3af3)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x0de662a79e6055e22a55a74fb5d92ce5b07eb803124ad843f84d19ba7030090f),
      uint256(0x070b5cc551bbfc8d75c851970fe57c9bcb513754706654ab1fa428074b15dfde)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x0cafdf361e7c8086724e41a02aed84fa2e49260bcc5d19dcd3c9046bab860708),
      uint256(0x0e1b0ed7b8c29e7431e5ec5917710d19b2f6d4815d8668212c1a4d1dd8e05c41)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x15e280202507714990c6f980010df4d096aa2ae742109c17ab1275c41a41c7f5),
      uint256(0x11cf1e84ebf6ae3432617226a75c9c471a5e097e22c6e63d813ed9d13e66f79b)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0e1bc04c29dd985df3ec6bf835dc0276b8ec3fe891ac42a2c56fee1b358d679f),
      uint256(0x1130f2c39b29060666e343003395e221a739d909cd75d156629be9f52f85b90b)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x28971e9f1c8b6ec8a936dc7e16cc48c0240f62b9bf0a31852276dc17e23dbccc),
      uint256(0x012fff449072b3040f2e8c99fdb5c9f07bf1e012f45a79f305c14604b25ce819)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x16ce64ced8137ca0db6b9c4ff19aef341f9a3a65ccc9d5ec43e32825fd03ad12),
      uint256(0x24023fa85a584219b7f5843d8f750b5dec9bc15a8f8b926a1c681d19470948bb)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x0bff40edf8f1659c1b801d610158ae8548a3cca777deecbe3fb5847545232770),
      uint256(0x0e692611f2c8ae3949ddf6f99b40c128e23caead5a9b4ac68e9992469e51903a)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x18a6a9519659054712dba8ee546f372f3ad5f8347f5419d8e78af8b28a9a7576),
      uint256(0x1be8829113bc55abc35835ddba6db71e8c0ec551afba4d0779347e4557e86a4c)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x1c6c80962705feddf3255469ebcf6e7c2d9191201be685a0c430d041c7d07409),
      uint256(0x08d0dfc2130be4628b283025f4f04542100d23c623a88355a24699f820782b71)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x1ec5ff8ceda65fa35d5215d2761309cc3eac99f783f7f804fd19c870d6bdba09),
      uint256(0x1043400dd905a2277fbb4b64aeff709ea7542a439cdd586efbb4aefa72fcd8f0)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0da523c939c27b99cd8497d9c0878c6c0296f771de209772c7562539c7063e16),
      uint256(0x1d23168bf81915ac5c7838e153a9782b0d75e89cf33fcd19a9a84986fd283899)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x21f060e3e2f2faa30229a8cc68bf429b796966b55eabdb6c5de69c47049c5691),
      uint256(0x04b5200e22b7d5f37d36d2221c52eac2e706e20a14791b622117bf737f1aad54)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2a1f5b702df743d9c5cad34e6e72731e0833816492248386b6b7f77b7076794e),
      uint256(0x26bf9bc3afada3fdbe6df90ad467dcd3122345f84a40424bd43b6b5ceaed1e1c)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x07a3733a798eb0a6ffb9cd360e6c8672814dcc62c37974b32bb754173ae7b82c),
      uint256(0x04e7b8091d23f52dcf9a6ef85ad45aa8bf1cf5ff1f0de9a33580cd26e5926afe)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x0e7768c9687adbedad615237bf1f603f05b6bf4cfce714d5f07a45858608154d),
      uint256(0x2e73a7aa1892239a1161c8e1da0917d9c1ee932f0dfd004b3a2cf362c9af8d65)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x272dd0b5fcf210adbbafa978a385962861d7c1021b445b879a2b9d17a045b731),
      uint256(0x2aaf24cb39996cf076e8d7f96abc66a6e2b5a03b74624b0075c8a2c9c38823b1)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x02df3ffc8242ea53507ef576df8d0c32dab43f3c4b229bb52c27adf0a594a017),
      uint256(0x22e62df15004dfa6f08c5c121456f841e5a47ae44a650255ca31865f96cef498)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x2f2e7b9f15969dca5b8be71d651ebe9417f6b9627a2a67c6ddb60037e2247351),
      uint256(0x270bd29d84349c9da333ff81713fbc26321710d7b4c5e5f3224035b557beae95)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1344eca839f1088fda09080e348dc05165bd5785e6bbab342b40253f7c750b27),
      uint256(0x02f27f215ad3a4eaebfb9b8b927deae55e2c11aa7168ed739be5abd5c86d476d)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x05d2aea2c4ced524f414a584d0ae7047b641abd18184dfcda0731dd19d678f44),
      uint256(0x19b28764799601608454328510f4f98a1a3bad9e8f877d9fac9785edbb70def0)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x1025c56c96770a8d234dff93f9f2e306253dc61fc4bd675680abd56739e00b15),
      uint256(0x2b3e8b513d63fb3ac91e0e85bcb58b3a37e3d145e63103f7c139991bae1a050f)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x24353bfe4b682c253050b042e7d395e08bbce2bbf793410a3204cebf22f4eeb9),
      uint256(0x1698d17de956437947be0719ff1b0f6edff255290cea7586800c74e9aed858f6)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x092c223322b36a31dc910b45396dda7851f3f3644155323f7d8ca174029b1b25),
      uint256(0x25596e4ecb87f8b1d020c5b4426375b5ac3a1d73f1d3925d4ee49b12511d787d)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x1ba914215ef8d1e07d72315de218bfe4221d6d763d3f046c060ba04f6526f262),
      uint256(0x02ebd526f637c9f7f1d309c07937957c273f7a80f8dca7b36597ef738b3d27c5)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x30040bcb671d89f7173ee1e341df261c3b0b3e7fa4617ffd44842ad0f608832a),
      uint256(0x2ae5247a46ae497cf688fb8476781d32e0aaa247862c288714971c374987a689)
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
    if (input.length != 32) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
