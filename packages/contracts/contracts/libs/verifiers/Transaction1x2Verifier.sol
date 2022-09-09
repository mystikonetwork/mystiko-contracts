// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction1x2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x1a8726d10fd276bc6cdcf54b98113a7e22ad38dc91947c93504fddce50e2de34),
      uint256(0x0c74fc0d64a5f18fc25374e25fde6b872fbd3f914885f819b1bea8aff279d855)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0b7466e928e667349f486df901010fd0d972daa364c20c0582b8e3c6a74cc207),
        uint256(0x05901ba6585225220f6d77a61d211753c6e89a7aedcf306badb0d3eb4206c71a)
      ],
      [
        uint256(0x04a10da0f796047a1e1b74c7cbc0a9455b79b2c3086f16ed009b243d04f36dbd),
        uint256(0x26af36c270580235c34cc9f484db5d44fff72ba543520babfff2f79b6344ab6d)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2bbc4570915aeb2c7c742d39136c2080aa8caf958da237f4763563063320086e),
        uint256(0x24eab43320ae0d53c1ab57760371229c7a9be09db136ffb0b0a01cb5533247ff)
      ],
      [
        uint256(0x13a1b18d66d28dbaf76c2e86214fa937aed38dd11777cb297e9cb30643592693),
        uint256(0x16ae4eb2cd357c72903725942046c930c496d4ddd1f412c79aff4d893b786b0b)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x19658205745bf80c80fedadda0825fc56d570bccd5b9afda803026e143e61d7c),
        uint256(0x298a757980626ccd60a262d17c4d154f66919eb91abc0884699ce5e9c860a597)
      ],
      [
        uint256(0x2d4e94a2119147dbdcc7a7fef690e0504d89eb1e53d2d4110dfdc2c744c8d6ec),
        uint256(0x1edfdc9c9f7092395f90993fe3cca48b3e3a8e809c7da3e66f8403776eb1453f)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](28);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x2f92b71afff0a5b49a32bdd312c3f8bbe5e3b3fb80363db2ccdfdc9b7c371749),
      uint256(0x0d78d3c34ad0945326db4a71e24a523b74bd9cb7a6ebd7f71ffc4371f1aa1b9a)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x07b46d079026eb4536288e7012fa63dc660163b95f035a185836dbb383d72bca),
      uint256(0x04de6cc317e35b25acf6fb06739a566e60851770017fe6159ffed2b35e9bb8e3)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x19aeb9385f2c45882ac04aebeecbab5f1b5311a7a4a80b4ff490b1e6f6c34eae),
      uint256(0x16fcdad6824d989490f64183317ccea47464ccbb76afb699357487a9f2e0cad9)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1acdc09e8af445e660b15603cc9e46027ce05bae1ebd5660e35d7f25dfd0ea66),
      uint256(0x21b5ab5d8153227b29fc4f7407907f9653e556566655a06d54ef7fe89a2db860)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0c60d2d75bf0257c21cae6fef9ee20188ec89a6444ef18c9611d0489418c4bd6),
      uint256(0x24b2ecb5b4848823b80eebc2c9c2291b8725f7e52f19117d4074790a46e53361)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0a7d23e86ffddad9fc8d008843eab0a946f3d78a811813f66c8b14168feffe79),
      uint256(0x2e52854e3cc4fed16cf0ad0a3feed858e7a46261fc47514a74457a8f8084250f)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x0fe5855bb83ac07c0dd16e0db0e7ca08a39e1df200659f92be42a7d91c2134f9),
      uint256(0x077e155e12aaec2a4f1b77122bf047d59a414ebc92c7288081e6b2e248b76d76)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x13b2a0c8b83e58ce4d4364834c780298adee611863b65b0b9062c3393ddfe36c),
      uint256(0x1498c80910e45c3885c6c092687ff20f85bcd08d9512faea6db0cf928edf681a)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x01b75fd8073d2ca48ea109c95227ae4516951f955910c82466de90e6fcc48bda),
      uint256(0x065f28f924119f4e29ca98fcddf6b430c134800aa3314adf6478a7e6794d198f)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x2a2863ae239d321214c8298133dc5a7f3f557f08c47d4447ede8ba71bfb2f64f),
      uint256(0x0fd1c74be797da5fbed22d7848f0890b627586eaf87d32b0607863a767d9e28a)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x20c2cc581458046b4374ea75a4b576eea32bc0609b474d652207cefc186ef18a),
      uint256(0x0234a1643219346fdd82cecc8f7a613285d00d1138f183f2e90a5134ff57db87)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0ca8da7b5b3a2b079f573a37b48d8bbf78fe98a5eadf8950e200420a8a419f52),
      uint256(0x066e7e52a447e1ca3eb1134fd6c7fd0c6bcb790f4f755615d0d8390de6d2ec0f)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x08f0b76677cebcfe82581a6f889042af4db34aecbc2147c57f63c695eb87da3b),
      uint256(0x1ad48944d5d96dc492f2d023598a9b2ae9f6ae9f3bf2013c554c193d112f21ac)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x03c92f9df5dad844bb3eaa6d3e3a2389635235e48ec6ab285c64e1ddba6824c4),
      uint256(0x07425140d71fbe7fe5d79d92f354b305511ee5be6091f411130dfe3241a38b83)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x126aa5533bf265c94b6b4d3dbb7aae3902ddfbae3426b008619b7cc57b1e4339),
      uint256(0x299bed3839592ac207f6b027f9bec57977bd056bba083f33550cca3bc8fe8e00)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x05f9a95fd807033f07931992aea1db2b952c23a316067705168e7d02b948fe0e),
      uint256(0x279c5ef67c509146f8d953761a5084b0b92e5c52c07c26b81e2d90ac06a2951f)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x0779c9d9ccb2ba6a1b272228427ccc2c7ce93f057c1a3b49edb20d7c53e173dd),
      uint256(0x1dd27b257b167e07d51b12cd1a6e5d5023511cd1eb5f3e1d45a27e59c4ca6d15)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x306378f0a6992d719417624103394832bd83431aad15ad1f6d495273be281e99),
      uint256(0x29a64a8feb504e4210370b3a64df300e697aa61cda05439d3e2819c3c5409a6d)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x302e0b0d58d09714d99f0af706c827f80ba145513871eb59b8b9eaae9eca4825),
      uint256(0x1fc905f5a296aeb5db210172edb61da0b8e41ab4b60ce25d17180d53792263a8)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0ffd6de9e347829c7461551ed95ef40dc330c213e68fed4f9950fa9685f5b23d),
      uint256(0x036918705e6adce1fa78bebd9e3e269f4ca80c6c8d31280f39b1ad9ec7fb8a46)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x1ef4d1775d6371d34d66c7c9a459548bd877e1e0c05b2cac98167c3a1508bfa4),
      uint256(0x16446c39efb72590282b33d16068e087de4a8a9fd845562afde7d51ea37c60cc)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0dbc29b7fae735a3c8dfbf2da915de219a57fbbae1cda4e1483e56af94d95b1d),
      uint256(0x0acf3bdb6f8ff1e24edbceb876cdb42ab0d00dc1845cae2a00d6d553297f7915)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x0ca223885ec4ec6a83008d9cae22c12dd6d1620ab9d17d6faaa9bba7de3d200d),
      uint256(0x02ebd958834841630656c17443c698aeae72ff31f3d0d7657d1293749d818e0b)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2148e21add5077ddb518b706dfc9e7f5283c46aa4e4786e336aac3550a5082ac),
      uint256(0x2a11c3d66a79ec1d0af121bd1f3127914e9becdd090061a7507cf823268a6da6)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x03f79d98b59038510e7e1245375f551a741efeb6e6febbd8235330771324a587),
      uint256(0x0e874c7046f72975243827edd877b61ba0585a06410268499ccd45a758f0a212)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x158459b8833ff7bbf4aa53621fe326186a42d11450e9538d0409aed3eea8962f),
      uint256(0x0c8a06e4e993bdea2e50701fb652fd60bbd1fe1cee87b70f3ac9c40d99ca26ca)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x2a3f6c7f49ca984384d3c41416b883106e7837312730d5b71d13f4bd30a34ae1),
      uint256(0x159835d8f22968976705cb4b37291d1e0f3a6b1a3d576cd54631cc1d9ea1bebf)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x225c8bc45846e121242abefbab920c8d5f5319a0360926b1940bcda0802de0ef),
      uint256(0x02fb6cdbf56f9d2ed75715be904a7232f56eee9d91b035b7f9517b8198347026)
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
    if (input.length != 27) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
