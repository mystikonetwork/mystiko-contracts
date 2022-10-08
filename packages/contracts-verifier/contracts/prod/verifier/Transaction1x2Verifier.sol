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
      uint256(0x2f8027194aaf5baf1cf5f34c22f9bb12785aa79c2c5ee58c40b9cb766760ad2f),
      uint256(0x2adcc46a915b8228780aa93ef806ec8fe3df2df7337f2f2251f334bd286b91e1)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2eaa36aa2c597e2ee6a859c61bc287276f3eb241b7fb9713190821f08ee98915),
        uint256(0x0b158ad51a8d911bb33814bbc77218a5001d8c2848c26f78cea01ab2a943bf8b)
      ],
      [
        uint256(0x20c295389f1d2ab9b4e940984c23a40a0d7f3bf32eecaab959287f0c6c685c59),
        uint256(0x027909baf26758b1bd7d9ad115114878ffd800a95da9d444e5cfe297895dad7c)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2ddf335bb1266f2413da48389f489d9492c65d9d94af24ea60666d64251b614c),
        uint256(0x2719d4d4af018f0a776b5735c414f22d905b0555dd0c6ef8b3176af5f312a254)
      ],
      [
        uint256(0x189e7918d6b2baab64647c7391272f172afb12150c227685b66adb10419e2673),
        uint256(0x05d620440ca71d66fd66832b7823678722403a38abd56ebb37476242c16f7bd8)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0b4ecb98ccc8ff9cef6bad99d05d884e2487216c2b3ecf494a0fe01443cbadaa),
        uint256(0x2941713f3a16c65a39c2d2bcacd8069f2774ba908b542f7c9d00559eef90aa78)
      ],
      [
        uint256(0x10f293ae85041ff31be79a3b072e05ad3819323bafb6f8cf74523c9db23e5c84),
        uint256(0x2689e623045cd9274447db79796034c7b529f176e9d014c0f58820de89799798)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](28);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x11eaeedea777ac329306a66155924de964a3e7db0180b807fc048e26ca6a32e4),
      uint256(0x06111bc92f1df25ed22367c61124b50fa73d8b877b1eeafd9b4cb786b5cd21a4)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1d1961edcb97ba2a3bfcdfd2cf0d5cabe4637147d5646b24aed7c5049f78e91c),
      uint256(0x249681e34117119d7982b8a9963405ac4eddfe7324c1e4447bea166ebc7a4cd7)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x2cfcc50c6ee635d35f3036a6460c1b6a57cd6def5f35ef7fcef3cd780312d86b),
      uint256(0x112e42289d2f93c1d48899da23c043c777fdd1b2bb9f5674ee18aca1c52a93dd)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x2ffc5142361c8ed11cba5bdcd7386b0d9d180759413a6ab3d06ba9cd52b05405),
      uint256(0x1fa0da1148b57a904b8742a012d87a6fa95ea23c0dc6f9560699feb532c8d91e)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x09dce93a14bfed9896d85b2b395b83a3960d4d50e53f6577be2e9375a1d7ade0),
      uint256(0x142e1301989319a9c3adac8e2e8b7b2d72890f35238d6df5305e37058e670e86)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x165acd9beb5a1ed9b3a2a0f5a5ffd5b4689d28d6e08879451ba24f72b3d57d9a),
      uint256(0x1372772fcf0bad652c719de194ca0a0eea1aa6a7ad40762eb7e9e3235fc1ba34)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x2c3d2b4d8e791e4a4044c9062c0c3ae1e648022192d528e3b28663ba7eea939e),
      uint256(0x1a2df29236514eef63ea104aa3fc6cbd31f1cf938a951329595514478a7e1b61)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x15d4c9360817a24c47a15c6c1b597550cf06d3133f1f6ce404b9167baa47dc06),
      uint256(0x09474ab6b1607aa5f0a81287337e66c752ef802635c004e607966012afa5fd1b)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x12fa6511a18a10035a5b5e375333e443ca470540873c9fc3d9e6c81e27648cce),
      uint256(0x16a798f7ad3aba211e98a02dcef7e6b3949955af1d1b21a16aa6154795b122b5)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x20ba8159c7851c93299649a46851e37b8cf0e7821e5a0c5c5d67e8f96a893b5d),
      uint256(0x295de18bd02769588ed9b1ef03a5cc742c5ff3c91080518040399d40c69600d7)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x1f8c150eebd4a4bb0af703de667b74ad6c95df01f07fe6c7e3ff954b8331a2e1),
      uint256(0x111c221c7fa828d417e822e8b5e52b0bac4d88339154728200366e548a0233f8)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0c6ba4362dee4c9755c5bf0268f3105796853855a33f17a2561658c1ef1de10d),
      uint256(0x0043d6e07391d7e6c4ac9f4fa1d7c4b5f248b3a37e25b22535e0064ca942aa15)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0fc566d141897c35d52f2a3399e655c7af67da1bf7fc4b120d055648d09a7612),
      uint256(0x1f9cbd74d5bb73319b7154535673486c096c54cae2dd3047ac81a581d234b345)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x0783ee15fb73df26d8c320d52addbd373807729a467c730affe80429d16b476e),
      uint256(0x056524772a2c8a7bb82660df65ea82e973560326154f3a9e1f258bb8d6cd4a47)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x13f610b79b8ca226a15374ab886ad451d8afaa0f99ae5943a31e83beedc43e38),
      uint256(0x232acae78a149748eca020de30ebd3961bc52f5e3053670ce4388bce09e5f5f6)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x18d51f5dfd0e3f15b403c8d0a20f7fa0dd081aac4b32465aaa85aa18b54b82d3),
      uint256(0x182b4e62c5545ed1da076d2a0dc290c4f3f43422a492a5666b7153a2d57f5169)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x0f9e2b252c46867ff510f5426bfbf1e142f2f32e3551b15a3356bd7b70d634ef),
      uint256(0x00e18e9de4527daf917ba8f94eb7b7e04a1eecebc7e6f2a01d46a1f8a7ab4298)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x1f175fccab79b13869de226c863d541802a35a295084043486ede815aeb5ff84),
      uint256(0x1f539926db010aa5e2522c8a2b21c612fcf05b5f5c8b4b0d1d38a7952fba4fc6)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x13f3e10cfe73401ad48c804c94d78be72e93bb228b9c6fbc4a8ad073561b8d25),
      uint256(0x16e17db1bc9e1a0280fc2c55722ec51944fa9cbeb567bdbe8121dbf4ec709efe)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x246e6763646f8af66932b69bd3236ad93ec844131cad34b6df83ede54dbeee43),
      uint256(0x0defe17ccbfba4757cd0ea89f1591940d22f08d2449db142dac03928d97b5631)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x1abc09125169c1040d2ae014c428f417f2dbab55cd3cf484b578624085514963),
      uint256(0x2767a9bed1b60c7c71087c2928b6500b7f3a2aa51316636e22c109ff0fc7948e)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x27814103c3c1af8467fa2d919e06f61d1fbd83cc44e8e6f952851047d87b7759),
      uint256(0x29406a72305d21542da3a23ad7f8e5ba92ccac4d524aa5517a8725c8978c99f0)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x111f6ad93357295322fb44daf0300ce4bfc7699e66292bc60217116080cb8874),
      uint256(0x187bd7049be44628aa3a66c446e84268decf70c96b1b5888e5e5bf2d31c7ccaf)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x17b784cff200ab706d93c9222ae7c681c021f58e00dd5c1b4374dceb494e3bf5),
      uint256(0x210a14be41082202e4b26bdf339e20c57b67afa7f577a75eb7b3bdb7dd177feb)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x259db14a2219626956cb08c3be418af63eff53c2fa49c0594b2df142c481860e),
      uint256(0x0b33e516a0f0a3f58eeb8d47d656be21206c5f28c930b60a20d3fb5075e5cbdd)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0b1b08cbb711155404d180d9a522cab8869a0ebc5225ff5f12fd2ac61b82bd17),
      uint256(0x029ce2bfc2105c14ec5883d508628708b7f4aee8ea216cc46a78097f1059fcb2)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x0da28b021ccfc5673d4f85018b200a1f9c3b4abe0bc8196b7748a2cc2f217764),
      uint256(0x0d7ea07245daee83c9125f193c5d60fefb64503646e2248f4a3ef94159e46b7d)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x1d492d2a4dc20cf831baec70536ebff0e3d01e60b0aac4b96eb255674876fc26),
      uint256(0x2e2a075621315b00a40ea383e26b8112f33efaa47f08e0e626cd694dd8554899)
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
