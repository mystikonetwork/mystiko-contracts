// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x0Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x11b76950653832be9e440c4714781235211046fe48a2c66f12e490bbc71f67f0),
      uint256(0x0d83f8d9a8d9912ae18c8339fdb84e7d3edad2915c6e3522307bd6fb68c6683e)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x168aa2076c942e02ce63f702ef06825b13f67db78710244dd562e08b4f7de941),
        uint256(0x123c5cfa99bd07615832f3c0e764b6ce796605602f6fcc62f8414fc740a3c635)
      ],
      [
        uint256(0x2421b424cce7581aaf227fe8f6c72f5a64f453db67d2d9afb3392350ded297a9),
        uint256(0x2a4f61dd8ca8bb525032bc1b0cf76c4c135c4b346c817e6cdf95eb20a885571e)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0789c21d432d92d647724d537ca9f8817c26a2919e8e76f353f9e2b3f8cd59c3),
        uint256(0x1308236ce72a609899937fd1e403027deb31818ec829eeaad2b6a7683fcfa9ee)
      ],
      [
        uint256(0x17ab08ce80217afebaf069354d4f81a96dfbd443b73180c6d3092a79ae1af3e4),
        uint256(0x1b2ca0638d8d6794037c00e0835a7727054a08dff0d29b22d1cec330aa20760b)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x110c07bb994d41b6c83ee58a06792a51f1d84f86e0425aea785f26ca5264180a),
        uint256(0x1886c86c2709430d37d2e7cfa324c40ffac8a7d06c7afcb89d9d64351043f0b0)
      ],
      [
        uint256(0x2ba5b81e373dc090e4c712c0c61ccf611e677ffd10d5c40e42b71cda72a6cc7f),
        uint256(0x1124e95c2ca8e1bbaceb4def8f891d672325a446823ffb229d5a8c7d77314167)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](31);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x222b6a68325b1c57df4ee4d6c868bf9c4daf8e3c144024ea923d39fb09eb636e),
      uint256(0x1c6dddd6d2fbd9389e6f99bd41a2f71097691712598bebe98a2aabd69167bec5)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2c1e5352d09a69edf99d8ea5a813c28c32302c9620b467230835e4a80ea8eaa5),
      uint256(0x03e79849cd558c82f545eebb1dca5d0b20bbe43a3f3190c09fcb311f38268d3b)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x02b637ec528c24d5d95ffe0919bf58f2dc7d53c99dfe3b35fc2b96a0a7168352),
      uint256(0x1faf851054c0c9e225727d92578e6cb77cc2cacdf4b6b48632e08f7d28c464c8)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x09fe9f5da4c19ab7e5446f9c73a0aaa05bcd3e891ba60e4788744f90ef245d42),
      uint256(0x26acc8e1f07131c11556c590eb835e9af260cbf58e25f99c8d27907f749f4387)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2c542c8c719511d83c7aabb923e9b53697cc9c8d050ce7b9e51370ec2e1b7c2d),
      uint256(0x240658a5b38a5b41ffd4e27a8214594c2970279425bc2f480701538f683f5380)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x200ea9a40498447f9bec398eaa202f21d7e21115ae7ceb2a98340cf19dc49a19),
      uint256(0x1138ba46158345face9f0f452f02aded17aab84135d551e25086127e8c6f59b6)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x1798ffac3d33e4a161e8453d760d3760ec742f5aeff33795e7d63b113c68bf6f),
      uint256(0x2fd06b6c795d15ea0f1b020a0d945b2590c6b53f3d27e0d73046222332fe6f31)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x1865e477659c422ffe925cca54a13deb97406ef0744b7cdc5d89c4a74e54b07c),
      uint256(0x1e7958c50d6110f5f489fd75c17e28dcc9d4de1c9dcd85d8e72631739d262c24)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x06c11051b47820ac332d6f3992b75c7ad0e73d5494f8ce85e15648a431954410),
      uint256(0x01fa8e13ffd834a269617a439a93587622f9441644d651aab48487256a00057b)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x0b7b7c8fef714a09ebfaf0797ec5164c7a7d40681697b012940f1a6fb8c918e3),
      uint256(0x03ab5080eb0327bc2a0dae72033b893aa611d9eb6713e53dc15529382797b0e1)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x0614449bb9055d18355b4b0a839e1ac5cc0bfb56880378b744fd7ca8e6239391),
      uint256(0x08b0eb9b751317a095bf8473db894f7fa9831cb73723116591e9fc3d865f4509)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x2d69bde19f43849d480150139bd2358bad541668bdce2dc76b9837b768888fc1),
      uint256(0x0f411c4457b2754906d9a5a92569b014fb02416aa86da611bae54130b7defec5)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x0fc77dafffff21cf49276df0ddad11b4a3293e9a063b6c9bda6067c162d4f111),
      uint256(0x0a8d0041efd8673c299c89f61bde4af67c256b0b27a93624b814739430c5be75)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x112fc33f8192811c346c39b863fdcc1e3bb49ac10a29e1022cd32daa998eb3db),
      uint256(0x1009489c745d129cb3e1ea04bcfa3311d9e6c24427ba4fc48e5a27bbadf35236)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x29ac507fc7f05d99ad91acf492f55fdad14858bbffbc3e67cff23878358ca360),
      uint256(0x0ebc2dba432e916b4bc31207e50b7e48d8ef3d1bd99cb577e115f563b1f434c4)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x00bc56c474f42084c242a67e0409268aa009a3607faef55db0bbebb63480cd7c),
      uint256(0x239389c9984492cc2de8411d15ad4d82d6c52c15338791cd8f064acf8ea37ba0)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x1c5d6ba9e0a04bf2a37dd6c909cde8b6e11060c862c28e223c8e694ee544d01a),
      uint256(0x20245a6a8ddc25f3c94dba4714bebaa056862a10c73ccde2e6a8d18855765e18)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x18246e934075c1dfff6d40c2162c5a7c923cb1447531d6131cb2bf7937cf88ba),
      uint256(0x042ae8bd965f0a27ab7c75c6642dbb25426d6e0cfea8c1b2edb53cbb757f85b6)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x20c961a767a067afdf69adb29f4d03d5f8650cbd7d11749d1039943e5c41bfcf),
      uint256(0x0e984876387fcad0863cee42e2dec0b1dbd5eb49f73fa38e75915d905c4de404)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x1d4c69c6432f7f9ef7de8b617654797ba919a03b1c504ae1c81119c22620ab17),
      uint256(0x084df221d3bc27d1cf7ef110fd8eaa1e8b01dd13495a95c7b01add24c44cff6f)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x160a3a465d20ad5b555728a0a0ba5faceea1874688f1d9a59555ca4039036d78),
      uint256(0x112fa0eead4773f21d111e0d661e5177044ced3d1f4617f413f88e0360bfe589)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2252d14e1ede783a853c88d29f99f8d74d7c7c003a2ab5ce63864738d6b298ba),
      uint256(0x10394ee0b9f9fbf886211be8802499af061c403f9122f25f9c10a17b7ac50406)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x1e9f711728aeca5319f39126c8223605c4e5b6c339c8f4fac7a74c54506f8cca),
      uint256(0x1a6246f6071dc7129b105576b2c9440b2c5cd3b8263611177918d6487279bd79)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x07c1546356c418559581423d98d592e32a97616592f1ac9be4c1f650c0e8042a),
      uint256(0x232c224cb02841a7c237045078fee7a4d52f2c2fe03ec1605a0bfa94b61dbfcb)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x0762dc18378b7aae1bdc7b5da1109d4442fbe5230aeb266ab9f7c34024447d7d),
      uint256(0x20e9580dae53bb29816cdf7f8b377bc8a99fd7ecac237b8145977880a0b14ffe)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x0c62859e42d6fc2876688e73a6a05f7558d9e07fb5cf65bd3a1cefadf49e8540),
      uint256(0x032e5fe2eafe8657f883080110a0e29b321f5bd317f9d122ffcb6c9a2a154905)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x12c49a643649921f8e8907c6c27aca70eab05777c7f41a025a8cbbb45547d8bd),
      uint256(0x0b100cd8e9157aca860592288cf175a1cffa6ce7bad99b50851bbaff017bfdee)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x238002685230060d1992cecea3670088340944b0d993e9dd65309f1a366e792d),
      uint256(0x288a6399d5d62a19f5283dbd8afeb4fd7f6d9ef0c91d9dce6125cc5e2f22d470)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x00fd8e609a8a18aa3198dcbaed64151136f3604bccc4401b1cd608f1c1f0bdf2),
      uint256(0x27ea3d5677f13b9d9d379dc73e08dcc56f83aa880da3c10d4c08fb56ae38e968)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x1a40a84fe7fe4fdac3886d67ec960f7d30388df2e79e9584fb19a4ea95a29482),
      uint256(0x077d1967addf18e8661733be8271aa42108ae9e0990748554be87cb4c13c0e81)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x2dfacbbc5738b22d092975c5c20ca41866e19f1bc4f96fdbe156a52abff3562b),
      uint256(0x1e779d10f900556bf800662dacb367a8cd188c1f9cb821733781b5eecde2103b)
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
    if (input.length != 30) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
