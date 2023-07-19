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
      uint256(0x27787ad17473be87139e398e21750d88966b629353aca91a68e6172d6180e6c3),
      uint256(0x0d13ba44040e53d925559a051a1bd2223346e09f6570e5d9160d1260ed7ca787)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1d844d2ea2295fa376bd1bec85742f4eb27b3f5bc9b1f01d3ebf317b8d2e88b1),
        uint256(0x2f93858ff1ae966b19c66ee88bf6c32708f9ef91eef2ad3533d3eb990debe8a3)
      ],
      [
        uint256(0x0312b1273a8eaf82d5dacf9f21e13afdec34f6471a19b743db2c02e07119bde1),
        uint256(0x0d6e68b5ae521129dc6ed4d28888720d218d05497df1d278989b0140706a4eb4)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x05b550e0341292e4732edb357cf2f9c68b6ef56d6d7d56f3a3c748262af6bcc2),
        uint256(0x0b89437ae7ea7d4e87c78798e2508728d11f7462ec5fcf25d1572063f96162c9)
      ],
      [
        uint256(0x1d4ef02cac677a4019325ddb775bbe763df8f4d7659541ad90acd61e93da19d1),
        uint256(0x2e73bea286d1b01592d3ed3624023e53fa565ba67261d287cfc0b535ba5cd06f)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x16d02f0b38c997f99e4a4956b12e00d5934f1bf5943713c2bb5156a359a8473e),
        uint256(0x0beb71ffdf9dd4766b2cbe20616f27f60ae98266b65e95b0ba36f8142b6d6bbc)
      ],
      [
        uint256(0x0e8a2f1faba5f703683a528833d01397969c13f42f95d89232bebebfb22502f2),
        uint256(0x2f253372bc27839138bdc51ab5e6492f0cc8648c2dcad4d38dbfcce9c0e5155a)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](24);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2c60bf0f8e2bfbbefe8b44c35cf205b3cfd277599a1fd10fa093b8f365bfe294),
      uint256(0x0855ace8158b1d57a4f850d9b067af88a49237058a44642781cfa09b3d0e5d56)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1279326d2399ac5770a047bd60edd930971062e317e98c2e1f51eb62f1d68d59),
      uint256(0x2dd082f15c3dcf91847ccf7aa8ae94b1620b90e5f86a4c5cbf1f1d06829711d6)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x230c5e860ad5ca04014a8110cbf3515c0726d1ef3643741c664b1c8ea4faeefc),
      uint256(0x0007c0580f6962b6c9ad72844c03b8465ecd7780b71371dcf8b785727101e5f3)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1eb36f734116f423c1f9cc4b0f3fa8f564331afba5dbc3ad2d22df7c0d5aae0d),
      uint256(0x2aeeff288d787aeac2674d783e7e1c77ce49a52c3110b107993f452faf6e0bc8)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2058abb82e9c35bb7ae5acd0555aa4048c107b57da8ef5c04d562541a7e48c78),
      uint256(0x01969403ffbe61daafa90659092eff12ee20d48e6de927adcb92c4efe226776b)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x180b094a1ba7ac535bd33708f53617af1bc2a474bd0fb2d4b1fe6ae1d9ae4f75),
      uint256(0x0f792a1972e2dfd3480942790fb3adc229cdc2cbb6d76507789319590be28b75)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x274a8a2abd0c99589ec48978aa3118c580e2640452a853754dad5af73bc4f495),
      uint256(0x2513a023db7d283bf49b173ee5f186269f86858f0d0971a3d802d5edc9bc41eb)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0cc7ff20ccb11a8b0d4499967ff113198559b076da290a2c472d0a8217624cb5),
      uint256(0x1179710b699b89a9098df2ba78721c0a70cba2d2cdded101f7bb444180c1815e)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x223e461d708d60325e61d33de081b46ac1d40f4f1d44945c43c9cc68615d54ca),
      uint256(0x03df9aca39ab644045ceefec6a15277ff5829efbbd2e8134967063e441f95f94)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1fa1275ab2fd1d0f9d1dff3564723b24184a0a400c392c9e4f1362349bf3cdf0),
      uint256(0x0c967bc7a1c7a9df8880b264b25d048ef39ef0cfce4018f5a71b42b12c5f34d2)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x291d629e6e0e7d28d055b6dedccc7ba75e1c49757e1ea6cbbf81b024913e7a8b),
      uint256(0x1bf9eaaac70b542ec81dd03172e9e2262404ac9cfded217671a2effad9027255)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x1e01b76bfdee4e56df859b8fd3867121516eee052e27a5361332604b11cf96a0),
      uint256(0x21115c48972c132c733418a1a7dc98e85fed1f701af2fb81f1f1e523c8096e07)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x068c6144997cf953176ee30c803bc3dba7c90018104548e2a4efddf86d4861ef),
      uint256(0x12716c1e5b9ca442f035a6cd396623904794425c90b0d4e9fb095ead2cfbb03d)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x02b85cd45f4129da2dd4490f60a0e19be8dc13621c2202213902b3f6d5b0b69a),
      uint256(0x10cd9c71c6932fbc561942d3c04564582d710562067797a0bcd809fa194096cb)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1dece0b08269346a6df183d8aae045919a0aeab0c88bcc834a56c966145b7bc5),
      uint256(0x14f74900a39508dce90209c93e4a3b740edfcfaec348b773741df1547d99dacf)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x02c98729b034dfc4f02190a810ec7a50ed25deab0267e0ddb78ad88c18c5abd5),
      uint256(0x11b480b2e977aa74153e9b3788e122cb0340016f03499b0a18abb88fd4765ad5)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2a6e8e18534b1dd83ca3af8f1f1a8ab79c16d686c1337fb6b25040e5d3a047b8),
      uint256(0x26573b3f08ee070354d21249cf37cda66d44047597bf53aaa613fdc2ba864663)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x0b209e008603f48cbd6afad599689c710d64ced2b16c9e6498c1548e4277531b),
      uint256(0x100b7371578635b4ceefac52aa1a3137d33970b010fde7a5a0ccdaae8ae11477)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x23071d2b17612d6d3183a585e640aa6bd9add94980272489ba3997f1c520045b),
      uint256(0x057cf187cd00c196d6a3dcb19c53e4c0259039048c3a7fe935e04c35f95c9e1b)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0838267078482132c3ca78bce83e767b6f1f795a01ef91842b9e1acb829ca09e),
      uint256(0x1f0b15f36b56e63b5bb9ff783747315c1c192e181e0a6a292d2c19f8dc265d44)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x23da3df70cf04ebdae1ffdbe59966302fd708b98c457e31d43634f707767240f),
      uint256(0x072934adfc7422babc5785577f7115e1f8fcd380242bdb4e86d96a2d68dd21df)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0c5046fcb72aa63d8a7716c947bba1e31c75337910fa6191dd6203f37665d234),
      uint256(0x228ef33a692dc2b6939c893041eef322ed6c1f7e205c74b5068405770aac87a2)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x263fc9df67985ffd860ddb3e9a78a59f7ac394149bca8b8f3c98892283020bd6),
      uint256(0x24bae49842fc7c0ea62a70fe0296c00952a97e81e2eec2b372ffdb94cd0a67a1)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x0798710c41b61477a1491c4de28b1210d4a1b9cca574d5909874b5a4eb19e44e),
      uint256(0x042d6f66ddb0852c7c29cacd05130c03d4aec09c75ba6905632f6204fe78a8e5)
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
