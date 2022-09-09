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
      uint256(0x107dac8b53f44c8606d57a292c0f0df03dfd958696d0a524445e4f5cabc3adea),
      uint256(0x10c02d09d284c6243b02988416bc8e0cd52cf1bc89653f3b9ab076f1ea07806a)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x07159b27712e4b16dbf3491efe5bc8938dcb23e751cead4c35fd8ca60902df2e),
        uint256(0x1a717833bc51ddd0b21cf56f1e4d387676b4301814b009a209cfe14daa8e3629)
      ],
      [
        uint256(0x1b239c4fe18ea484ff25f1e83e4d5356e2e29db4e0ea92dbdbc00b2b17b52049),
        uint256(0x215b84f9fe3d99b59723ca20ff86c04a18c2919ad636bddc89fd2ba37322eef9)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x300c2352fa50346118c2b5f2e6ddc60463b19a188b9ed0fa015fbd7456d90882),
        uint256(0x189b91d46979b143d0cbd905b9e874f394a41679e2cb1f9ed5cd4c4383041b79)
      ],
      [
        uint256(0x1744f4974898c878deb33afa168554556517451dd79d9c1dab6ce5f49fd89326),
        uint256(0x0e38fb0636a85d711a72f99ff14618aa595da201eda2ea913461ba3c54b86500)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x24ed072b590607dea3d2b69717ac049d65e20506fc91aaf14f587b2b7aa37692),
        uint256(0x26a00241c2b142fa1ceb0ae37d1659f9218208f0902e1fc6c44f65ddff4315e3)
      ],
      [
        uint256(0x2ee492ba02de33d0b55c3025c3fdad3b8378624960c30e695b4a53ecf041c1db),
        uint256(0x148f04b946cc59cc1aa256e4220ed7b56700893331032ff40c2c2c165e5567c8)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](24);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x077b051feab749fede3afc2feedca6a49a65c4c8c7392ccc727b896f3a049324),
      uint256(0x253f3dd25d007dc73cf1f6ba4990b9f73728f7b9a870871a4bf490fd090a99a8)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x21e85001d15e0a0d1d681c4267eb5be0b542d19cf70eb7686e29160d73913cd8),
      uint256(0x22d28a0f05fedc87716184bae2ef814dabd505e2b9b6c35ba368f8fda2664fd0)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1f755e3ef7795eab88bdc94615542478929528a655e40ada144663efff53b715),
      uint256(0x2bf2e9380c46b3b7f811a348c95d93c0b5ea18b41ec67b58cdb04771f9af380c)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1f1c8e0a9b33c07935e7f8bfd678c237d6084e15dbf0067a45f7c74c61ee8b18),
      uint256(0x099940705ed1fe5ae30450a134190e2ad8c91a7509e83411beca1d6a22f9f511)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x04890fe04a71cde34e71ad20df62b84e044f768178db9288da210f4267cce463),
      uint256(0x07856d65dbdaf581d02e90b0f9f7b3c82b55b2475e4ad7d3432ccf85f080367c)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x190ac0994c48e57d7414a9b4c8d0b85925a339d289033b3b97108bfb7fc16a5b),
      uint256(0x00b6356c8eeb567448299da68c0cdc866e0d8a93f026cdc7ebce6e7ff287c79d)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x05a234985afec6705b6ad02df9c730f2b1c4edb2caa638f514e9bcb3e75d8e36),
      uint256(0x2ae023feae828789b10ecf11e606db1c30af58a6819d9d21c95380e130d9d050)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x239c320d8abe0efdb38def6ac81c2a01ace528ffe946a43b9600b2d4934966ac),
      uint256(0x1dae0fdce83c9f49be05a4c44ccd41d057ff647536ed6f1a902bb42bad7bafce)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x0364ba41d22c0c16543325562b0fc8ba4ad7e311e0fb631b2cfe2d2e68d35340),
      uint256(0x12c25732b3c935ce208f511ae7bdc17a796bf6e5cfcc80be6398d4ee027cf388)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1a466781801d5b7f40fc81e1704228e785b63e9d66f8d811c55afd9830f4beff),
      uint256(0x2b411b450c4f423cd9d0bee5055fa54b4ba75e351d54a395552ffa9a9097e521)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0b22f92e2759b61920a2b19ca945990f563858087ad5fcae7d9458d444e91f3d),
      uint256(0x1ab1dfcec66a8c9373f81076f70dd6606220a7ab1702e3377cb0a6d084df9bd9)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x05ac1af65c29d3f637297f5dd4123c662a6249d5136f5b0553b5a4b26ae026ca),
      uint256(0x169c32598e972245ecae5790b71d2dd11e02d58cba1d333bdb346b29ee370034)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x1fec2f4ea07adbbcad4519470d87165c755a732df41a72e01b90eb9a35b8b9f0),
      uint256(0x1015a0df08a6d56c28acd24fb0163b071881277087fa159cc150c866f5b6f2c0)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x1f47f55689b559b52ef0959c05af7a5db5b78f629f46e35384c56864950e343f),
      uint256(0x2ffeb91d65cd3f4eeeb7ea38efaf3c75b6ff9cbce11c454e42d2834fdf0f7ae4)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x0983c4113237bba4dc839e44a6676f09e334c2428fcf6d0024fa4a7c22c356c0),
      uint256(0x22de6833020533a2a426e31f632aaa2b1d53dd4ba0b98a79c75d970dbe56ce74)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x267db56696135c1cefced53c0baac646fa5cc37aba7cc319639096cdb8819ca5),
      uint256(0x25348f41d5e40996c16de2fd20eddb6f54caf802d8de73e0938be00a6201869a)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x01c31bcfbfe2b7dc3ba8e5d2652f22e4ff46b04232402392a6193faed5ce8511),
      uint256(0x06e4c55bc01237b9686e143301baf93f9c06c4aa0fa7af061b12af36b915c6ba)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x1625010dc079fd2aca6401e5633e5fdc1dcb4383d50f5e3d026fb656087a8122),
      uint256(0x050f4811f942d9dd5f25acce94a43bfdcb8137bc81e2decb0ff97648c6c2c9b6)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x2682de70d89f5c33a9948fff3f05dc11e191c428e9464c29880f1cfc73e58cf7),
      uint256(0x1165cc360e4bcb184699d5489cb93815f09cea4e5b063f89a6d7ce8033123c74)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x12a5199f9f3c3d8d8ddb3c91dc6b5bc0f595c3fb03fa7bd94d0c319ac992e6fc),
      uint256(0x1c3222fa29b9050b55c1131f2cc653311582c39d3887346653efd5ba6168b9a5)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2364bd8ad402eb074579a2821fe5633ca3bbb0dc0d204acb127602cab8280924),
      uint256(0x09f2a80561d2d300e5fd5114826d3fa7063863118a5aff87bf6f443b9c85235a)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2c7de49be8855be23830ea893d5afee266f2cabc2ad6d1fa869732b6071607d4),
      uint256(0x04548fae17ad3a5ead7105faadcb58fba05b8d5cb6988de3a207e004d4f434f6)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1cd1e12fabbb1dce8662f2a88fa4b9ada917a2eddf0e4e4b948776ca49ec8bfb),
      uint256(0x06be3a5a59a2f4a77684229e54daf4983cc5cdc4f49fdd924321b181c9ba8add)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x1f967a677acb8e11dce20edda8bc7296842acc1957de86169fa110d3fca07b71),
      uint256(0x2cdd00560a9061a0f4c1aa434e926dd11f3e2db521b1da3589c9f29d87d212bf)
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
