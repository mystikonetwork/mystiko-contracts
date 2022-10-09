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
      uint256(0x29a0e88539b3263411c54a823663f297b53a28e3a60719d0860a1f6ade7d8e64),
      uint256(0x16a6fa4c6881ba3cc0ed5b019eeff6b5f7186b6ebc10125d3ba132905332dc02)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2713a551cfb8e42bfd060b99af54e73e7dc15a9f02af8bd8d4bcc61e6220c529),
        uint256(0x2a340c6ab6871bb98197853280788c5211b9d927524421e7a61f3ce40cf6bbbf)
      ],
      [
        uint256(0x2d5249fcc68f59e25e8996da8e1bf13f37c75176c6f5336c0f7aafe03aff72b9),
        uint256(0x29dab76ebaee38cfd37537ab55e78d760580b3cfd05785adaa9ba06061a61f3f)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1e090785217a28c8512964848d781bb74a26361b5038d455b3cb66076fa3fe60),
        uint256(0x06c6f488224826cd2b5d2c74573fb9c01cbca27935c7a50bfaff995dba579804)
      ],
      [
        uint256(0x1cf065ef90094a1fa5a1b3cf5dcf53be77003bb505cf317e4524f67e022d5a5a),
        uint256(0x0fa67ef57ae86bb5f24cacebaab7fa9025e71bc0ff15f23adedbbcd2834ba279)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x00442b4a77c60e0f516ab49e47c6da90670f2210445b5240b213f05d671a88be),
        uint256(0x2807142902dcd126b294dbba6105e5da64fa1f808dd539f3e67deb6a62f97284)
      ],
      [
        uint256(0x1ad9877bbc9044aaf01943efba4ca13c1aee087162cf1b364b980a3cb86b5f11),
        uint256(0x0d0a7a434d5d2d0b68f909c33cb1f9a5097bb972cf3a9bf8140a7f896558d788)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](33);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1dc5b8dae7f2dcc8bb826953a2165a8a1390fd67e8d8d7cc7335051cf8986c31),
      uint256(0x0e2221f56e4854fc66d9cd8a54e2a4d73392c6f45ba86e9bfaad7bb79e78fb88)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x169365e87340a4b46dd2acc07e585d071ce455bd81c3ce5b4a9ebc672c8422b2),
      uint256(0x14b8bc0c012af01818c1bc360544e0f640452af0b70d4e0fce56232fbd07989a)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x1d68e2ed3f2bd17153fd41846a16213501c5e51b9e172f82f55f4303efb523df),
      uint256(0x0e580bfb4c4f4ce06664ef564c99058f87a07cc81891cf63e001b5a689d8c003)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x12b84072c800d365207b13385d35b58b8d3567c13ae9ae7be1386f8cefbc4678),
      uint256(0x2087e51339ac73675f19c8fbad958de82bc0d50244c3a4be2780ae9029cd64d7)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x265a9b93131f1e0cb0442a32f0e59b66aafe29c304bd129b522e35915676559a),
      uint256(0x14cacbd4fa1029299fc4bd71602cbd1de14b3a91092c61a6608ff21217b74dcd)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x0017bb21d6a8f7e12e61e332727cf54132f5110c21903d3950498262767f7b32),
      uint256(0x0393c86ded9d55f6d9402ce69ba0cc2b498266cd791a74e7051ba42747e7ee59)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x09ec690ec40eed296418e2a6818590f81505acf808a5238671b4a719a4e9c560),
      uint256(0x2966a58829ae69bc7792d3fcdaca8dcc54ff90742ab7e1a7fb13ab08ac99b001)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x1fdd12835791aa560f9c80339fa918d0889a143e1079895e27b0848eeceb1b3f),
      uint256(0x1d6da11faec49532d371396e0ee41f5ee6f6b507b14c827c726e5e5090918540)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x2a5ec5d954834c39f9788c0a6ad236dcef4209bc1716714e5bec58eeb4ae8522),
      uint256(0x295ba95a82dc0281f20cf3fc7c03c16a7b3d52f5df28b446ff29ba02540dcf41)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1c45fc28bce0df0611fe3a338ada38e19307657e00e1f9181b7f3a0babb4dadb),
      uint256(0x18ec2c271ea9671b818f139e7942c1eb5c0a1721e8ba9d5115ac1594f6ee7085)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2c62eafb4acca95c1c202b083c21468ca6030447dd26ac806a9dadc9075c7ea9),
      uint256(0x281a204d3b69eda20748f719baaf32433a39ea70a1d252ae264c1effa2d36548)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x19d788a3b6dca0ba591788311954807c4b63cc9f71997ce8985d0473de8f8e90),
      uint256(0x251c43d9de3aa8221f1ed793b7c060aea3aecd30eeb7e8c4bc5a6d80d97f32c7)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x295a27fe3bad99523ba077a66f649b7c26a3c872589b0a3376bb58ec879a9777),
      uint256(0x27ffec126aea61d3d668ec33a05e9d067a82243bee094c00fa0b77e8a923b2ea)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x26e369976eec9cdaf3c593290b44a8cb302b41867eb00168b32ecb952ebad82d),
      uint256(0x0314d98aa7fc514f61a002e3c78013a5fb2731092df3df25251d81585355a62c)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x1d572ba52b384cdcdf60a2ba1d50a84a24666a54e4d0542d04b1ac479b3fea41),
      uint256(0x2efd2220e3c63262eabbb9522b24f1db40a692a9f15a9c4712cd0d11589ebb89)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0be5f74baa04eb8b9c4726318ee61befa884300a35186d423bfecf4916340e5e),
      uint256(0x0bf719c9035fd11bb0e54231c830e5f176a4dcd320cab564d0c0cd44080c71c6)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x040810f76f8e97e7fe190842a2b130a53328bc2ed52f1f3be1af633b1f59cbae),
      uint256(0x2e83b6ed32241ff8735a64462b5868a65e544e13b6fa0042023f22880f4c77db)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x2cd02ed915333903070a1cd48c512fe877ffcb5dc7724f31acb45d5763a897d1),
      uint256(0x180a36765a758b78f82cb08ac58e42a3c9e74aecbbcd2e1f292f28fd92d06e05)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x1602ca1c1d2852deac382b8544ed644833e88d6a7c80a77d56f0fc4a1a383eac),
      uint256(0x2e631e8b20ddb0f49adf85ac483ebf8fd82669a8e0a58851f32b6c568fbf5b11)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x003f75c9f83c767e06205c612fba82f82f0931b3fd3cbbfafdc34c57b23e5439),
      uint256(0x2e2dad72c14cc7778da7dc9ff55f5fc342c1c8763e11b1ec006b597ca0a849a2)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x13bf3ddba6ef176703036d6f1be98be4446de4ca11507f845eb85fd27f3667ca),
      uint256(0x28ba1cb2286461114fbcaca3783d2fee5ac0fbf0573d8c3b57107ae6f63ccdcb)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x0b6d68de7e46c87a3ce6deee26663d31c4b9d03155c4de7d1ab01cb09587b91f),
      uint256(0x00e2e771eedef01067744de2572542d1953477c96a01819b674286d53efe5ec6)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x066fe39b83e414167e0694b8873b54b88bd9f7918068fc91ff684eacf5b28429),
      uint256(0x039136e52e82f7295a8cc924d6b7d3c11696e622bd9cebebf9c38daf295ef2db)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2be832cd038155c6f22ea113038561d4bb4f70ae25b80558e588c7f9210a7c78),
      uint256(0x22f531f7002e0d18d375e4baec46069aad1549978624f41dc11351287597242c)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x180ac0d2cfcfe33d513e1d8912be52adcf963f8c5a168b7fd3845fe33a666296),
      uint256(0x02f1109f44dee3be9323cb74ef958db436eba57c67d3940350390df6055090ed)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0ae3885a966219160b5f9ce819aa2c6cca98b50d3017b9c83b9153dc151393e9),
      uint256(0x1a7d13f6ee68e3f2d809f03cf8c13afc9fd4bd5a8333cc60d20e9df7e9bc3488)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1f36da0019269159a3efc4bf61be1c70c2e710403bf29ddbf0e1cdfe51fbe474),
      uint256(0x12720d7a4cdb83afd6f23dc7f2fa3077182a2d0818c8be85219f34573156e9d2)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x0b0998142d4069955130dcdfbd3858f90691fe04ee41427d34c3b1e658c5062b),
      uint256(0x28bd230faf2ca81f6570a6b835aa64d17cb21ae06c6ccf77103f0d1782e3105a)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x2f694e524f8e4c6f4404227c8a6d1319ce695109bbcbaadf3d62254c19db69d1),
      uint256(0x2f9386e2c89fe1c939e4b963692f45b450dbc903c28d766515cd2aa171332b80)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1cacb91d96afc55a6a347ec52028bc0504cd3266010c1621521a49285f67ddc4),
      uint256(0x178d5c4866e1f0d975b47216699c90ba566c79fc4d125a4e88d285b7ae436f2b)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x1f3a6ecef7b06622db05908e73e011b8eb4f74e5dfa84b511f9aec13df9c513c),
      uint256(0x027bec9db97f05dec1f5cf0878fbb997b381b9f32ee99bed8f7b24ad71b10ef9)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x2d27811692526e6ed2de5652d2be49d8bf1617ed3f86fe8772ce3555186cebc4),
      uint256(0x1c2271cb9ad55e5196d4b8862944d3ecc9aef799f0bde3c277fc1479f9bae82a)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x136b8139fc2de39d16689644f445ced47abc69dc831305f176c791b38460e26a),
      uint256(0x12bf0ca433c3a996494455d83aa3aa32d36672eee8357bb7b6cdad1a6ba647ad)
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
