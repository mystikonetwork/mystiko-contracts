// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.20;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0f4d801a7198908b342fedecc5e986d0957dadcbd1aec84d228ce9d21b496a4c),
      uint256(0x1fb761fe3da830ea3ce2f040436dd4f9fb1326ca870a8c05c182ecd179289a19)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x137da50c0769958112d9b3f9a41855c5337e60f05e0c4da62534ca36100548e7),
        uint256(0x2cec2cc3a2015a7e9eefb4f590a1007f3969f0971336348acbc5c8f91b2982e7)
      ],
      [
        uint256(0x2b2ca7974aff9e80512f6ad8829fb912fb8c76daee799b4e6a552827f7c7be29),
        uint256(0x29824139dcfabac34f81bb39603fbe96bc317089d2765ebfe4f77543494d5b04)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x29cf04a3bf1035ac7d2642318f2de8131040df8bc59ed936082289090c1998f1),
        uint256(0x03ed4261104303a8a62d684c6f3cae51833732b0e850b8927507c7b2e08f40ec)
      ],
      [
        uint256(0x2912594e1b169f29e77f6db5818a63f0ae1e9485aeaf2317c40bc8545d204700),
        uint256(0x00f3705398bb3272c05402461f2cc915a9ee53e0c3d4285e9c46fce458830597)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1b149f1c01e40ec2a19af52eb321a63a692351c202ed1ecc2d22d20c97d22a34),
        uint256(0x2cdd8fd5eb8bdb5d961feabff4371b57e2bfb7ba45d3d7d25de750ac6192dd32)
      ],
      [
        uint256(0x13c039ef716935636e832e7ac693672fa28358b1918011b59a4ec59a86650af9),
        uint256(0x2519d4832a0555e8699440eb8bcd8e468cccfca5e72d29c4be5b0573a19d33e8)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](33);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0e877aff733993b2c904e7bfa9a70e5258533ac4acb9f755e9cbfaeaa6623413),
      uint256(0x01e1dcfdff90b89378d7e269e5baf0b3977ebaba0c279f9d6250b231e6d73065)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2332ced75203f338c717ff6dd455505424eab7845538b5e41085db6c58299447),
      uint256(0x0a80d966040b18ad4a0228f4dc6ea80924f8791ebb39ea7e99cf37412a75b3ed)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1cdd7be99804820f91aad7d980cd3f51401c5ab589de7262c2fd285f1761d477),
      uint256(0x1e134807197f01c286d68d07bd85c11ec3683cd2b4bf98504a4b6102871b0ffa)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0cdd3f62133e0f5c24ff1ad244d68dce03093f187fa72128462a7b28dc77c6c7),
      uint256(0x1072781549679e27ac25f5d5a7c6d13d3fbeb6b7a2aaaa4a83f21d94f591d635)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1dbe8565610634b605026642d5927fc11a53c96ce8b254201eecba026ac79132),
      uint256(0x0226433ea1163389790e612a12eff3588b0509345a075cd9b12e95dc7e08f71d)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x2d0a9a436fef0c81efbac23e79ea7099a7854c8cb78c63d136dffdd469b0838d),
      uint256(0x134e2fe8f67bf6cb8bc523d75d875507cab3055748fde5ac579365d1d6e05b4a)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x06507cc8a4d196ca9caf031d88524669912f0a37bcfd2f6fd6b5c00d16b1b04a),
      uint256(0x235ff16c52d76c899494c621b2641ee891a59173049d728de66fac317401878d)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x244789ec03fdd6be6a022d6cb5b89600b95ff43bf0753ecd5790dfbe7f25f791),
      uint256(0x1a47ba71fba438673b1a2e08aba2c9b227f898ceea5b8641d609e415917d5217)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x04ef368f09cce5f319e61c842be086de0b886a63aa4631b7fb681bba16eb16ea),
      uint256(0x0842cf839bc11e279aeebdc9e0c59180fc25e60bfdb94abaeb1c9980422c6f67)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x08a459d25456156bbba0516a4a916c3e42fe1e8116fdfc50c9d9ef0f3896cd09),
      uint256(0x1110894a65693028c94373f772896509c1fec9eb0af6473dcd604beb29188d24)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2b8214dd45557cf96b8b88d3de0a3f5c4d43c3c3dc3fce1d1deab4e9d89180bf),
      uint256(0x11a168270379e00265e097db70a284331ff6514c66626d61b3480cd7c8ac183a)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0a6cc8bd1132bfe995d8cb474abe84b5177813fecfbfd5d633bcf5231ce3663e),
      uint256(0x2321b6159b2111cd77202b46f8872130d5f1da75a08c9836a5697620c09f8b96)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0cc3e068138c74f3ccd78757a9da5b964cd8b9817fbf152ffd7aa3985420cf2d),
      uint256(0x07133be344e61d850b60503cd5b1d548eaeccc0b09771b5122710b990cd0e4b6)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x2ecb0333d5b145146eca3633cf5d96e8bbb666ad9123334c9cf647340a2df77f),
      uint256(0x260ebfe46e7ea9d3d983e53aad85615ddadd911980402f9efc15d5bcb5e035c8)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x173f5b30fdce245a1d88a98655264754837957f3bb1fa6238227c725b83e12b9),
      uint256(0x239952769eef024c1ef060c064b2aa7e7dd0cafa4f4c25aa6428cdf6568104f2)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0f4c437ec86943315076c5df74a522d27e720e90947b4cc6c823fbf0cc867989),
      uint256(0x2d0e32d7581a4ad1a7c5f54508b9fdcb2677fc224d6b9872b86a03945fd2b30c)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x1fd2129e69ecf7d84639e2b1e505bea40f247e8864b73e1b2b71ecdf13a0284f),
      uint256(0x2f135162164786e8eefefbca9c1367353be70a6a6ad6ec65596120c7718af67e)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x18c2ba23c068ebdce61a9f3d7e6d1e4c0f0e14366c4b0e6fc113d1a481523819),
      uint256(0x2f76f39afaeecf7374a0b6c28827983152b30e3c70be39bee85a1c815d537ce2)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x021974b38411f269529d6038a00bf67093487be1bd1f3d85d0ff9211aba7f5d9),
      uint256(0x1045486e16d7260987581c62903a44e66546be1f1a60f7bc4fbb1822325b6cf1)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x2035d08823be3507f82b1ce8143dee90794d1f709cc26eeb68a1a014c3ada36b),
      uint256(0x2a936ad6197de174ffb4e7f4e7f60ed9511faaea6d86a5a1341412b493dd166a)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x283c28213fe61a81d94b3a8fe775c28dd40cfefaf0a816c3bdabc7d354b69d8f),
      uint256(0x2cdbb2071b682abeac14c78eff3dbab662b7e530e69e111fb9d36508c3893bfb)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0073802d21a80b29646e4265d01a7ce05b5195b517cfb80f76e1950e491496ac),
      uint256(0x2034c5cf45a7ca0c77bcd2c1af75eb4197bcc5df2eb7612b19dec5c9333b8c4a)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1e061cdc77b110d12cddcb2e449164d1916faeb86854f2b57de46867c37f6f5c),
      uint256(0x2f1151e2793e313cd49b399d7fbf0a4b9ad4631e8e9c3a73911ac31b2df65c77)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2d9616ade0186cf8c18d663ad9de50743fc146299f34da186c09801fd650e6eb),
      uint256(0x1b1ab89cfd839a4d1554344603deced09b6755ff357408a8ebbfa8a4409c96f4)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x19720a33f5f6521e493b4dce034008176c2dd482321ed4eeffdd771a833404c5),
      uint256(0x2816d394a7ac64f4fd247080b76db648ca365b38e0189d06b3268218be21a0d6)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x27311b912761a063b8495580d226e8f14f1bc3eb63f1f6693b91aabef21129b6),
      uint256(0x23c70432db11504bd62ebd6df46a55d589fc828a4221b5884c6662bed9e089e2)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x03c7911bcaff4d8d7684186a3f4289a430b1c431bf5f4a675d8e560eb2db20ec),
      uint256(0x18fde428ec03683f815d5064930f8f3683d5a2cd38278116d726be7b0b30db0f)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x0fddc64edb84fd28517d091a6a6f64200d619c109cd03fcc04a6cec294ec88ef),
      uint256(0x080d556c2562f8d5eb6c0b255dc597b8b773f307cfe3eae4d2aa93f6de88bf61)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x25f34de71a5c215baa8d3137548b8a8c79306d8646b886310f0bfa447e555f7b),
      uint256(0x0b1899b26c09a455127ad39d322d445274eb42063af75afa23286fc341335d16)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1f2bf8a967e6f84863b23931fa845de3836586156a66bffb9fcfc5d13679a20d),
      uint256(0x08b4cb2b0c2685160429582e0690bf02b24607ae307df8272a2b064d5cef1aa6)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x24e0095c7fb360d779bb8999a11d209553b17cf74c1c80f42fbe67f02a4e27f7),
      uint256(0x14aebd6fa0c1e95bd9a87405c784b5f746d2b26019129dfc6114a411cd35c60b)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x27d671383975bc1fb66e62edd0cb71283b1f4d79e04602dc00ce43eb602724c0),
      uint256(0x2513265a255d053bbcc2defd12b57ddee93c1bc1a45fb7992ba619ce3d693dda)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x081d2b0d2411e8a08d888f0362ca6f463f1a71bbb39f3dcfe5ca96964cdd21ed),
      uint256(0x02e66db6427c9058dd675d0b6e546784ae24cf17a53649608754915dd35662d8)
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
