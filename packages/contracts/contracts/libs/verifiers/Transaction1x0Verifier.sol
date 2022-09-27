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
      uint256(0x27507e01e82baf4df6e3551d4c1aa35bdc254ab2c5f086d14778871b67601f66),
      uint256(0x1ded5feea42eb34cd021105557c0f8dbcbd788bdffa6222e5495fd5128501313)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x14695762378d6c162b795ca21228ba8bf35be3313c87557bcfbf985c10b4e951),
        uint256(0x0d1c1e6c7929cf103b25d8dd027d05e3dd94e0b889a5ac6d86eaf12922e18c67)
      ],
      [
        uint256(0x0dcbec50e33b0b190ef461ac625b6b8f6562fb141d11bdc36e7b5cb140260dec),
        uint256(0x2538f19ee748a594302ab03d450d9df402cfb92517155589887940c981385ce5)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x023775d5413c9d35110ae262ae40141b1ae6e84e0051004287be03de5b5f669d),
        uint256(0x1ad70b05208fa77365e3071221b561f829ce3f97f4941db3721942d9dacdb382)
      ],
      [
        uint256(0x25bf55f22544da9834479eddb2f85229f34c04f6fd30631e4ed9abc9d83bbfb7),
        uint256(0x0ea305d2dd96ab77517b268962e4ad702f83ff9e849f52b64ce0ff7976a277c4)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x0ef3303ca940810257d29ae146fae8dd65925dc945df204672900799277160cf),
        uint256(0x2f4c6ca17e30928b521db54899b48d0562ada97f279d021e1e07dad9b8e0e8ff)
      ],
      [
        uint256(0x2ad1e1b17e3547927ab1f5aa1b30a85b847fc33062bbec54f0f3ef3ee3e322c0),
        uint256(0x23a921a204e9c991dc87c1031ce833952a8adbd4d1be3850ce3c011978362508)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](24);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x062b8a5d324ffb061b09845a69e57e048ffbd2f21f0256d8d8b859b7e6320341),
      uint256(0x154faf58e0e65c79fa18c804b54c37473bf039c8098643701baf460dba04faa6)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x28559d68c80f200a5cd7164107889a9199b24767faedec1572a2877abfc86efc),
      uint256(0x0f35393a71fb58d7c43004eb42226b4306fa1d28ae592f7ad70f2030114352ec)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x053641eb0c8111619fa0c2416a6aa0b9d31ae7e9fa0c602c52e9a735a578726d),
      uint256(0x17ae58fa16095e64285df10f2846ffa6e2e86c4c027c86874bd08e2468166e2f)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0261cb86df47ecf73e43224ba290a28c5ed2e2ccb4ddfe62e2b349451fba3ab9),
      uint256(0x27caca2880b0605a46ab16ace52bb430d2b846810c8f7f50223c945bfadc902f)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x134ba1947cac97ff5797657986eaf8ee4893137adbd027480892b6ee28bcc907),
      uint256(0x1fa73dbf612124dda3990a642a3050b5f9765614e2baeeb3dcf73721f6ab9978)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x03b2cdbcaad84212f2daf957bceca1f24847e301429cfe3dae86ebe55737a890),
      uint256(0x2f3299d8c21adb64049e7bda48855a2fb0d219714c3785746c5ff43dd6491d19)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x05998ba84b0f1b9223ad3c991bbba548bb46c9ada7fab197aebb16123a3f85c4),
      uint256(0x2e2edde09a212df4c6c696a56b9a9ebea94e6b1107710e9fafcb5c44ca883c5f)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x02167035fe42cba47d07294d75c8e26a159a71098137869765b9dcfc82b368b9),
      uint256(0x0c056fea8efae26574d9ef77de4414a7d4fd419b36144acf2607c744dd979933)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x2648456d7be3f06d6dfb1bf26f44dd4c994c8d1c76f40bd325abce63a68e6642),
      uint256(0x1daeb0d46b7c21a91e85fd702051f92e06a55d50896c5ec019bbfc1f9f59493c)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x083c17dcdc7d979c2dc3fb4e67fdc40eeb13ef678964d0e266873d0012d1d4bf),
      uint256(0x1446c3be02e1ebff6bdd79775c3cedfbf8383917d01db6e4ac88e21936496d69)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x2cf57b26365a02ea0dfe14b5beecc4b248f27c6841a71c3109fea6f9535a83f5),
      uint256(0x2ef66d7d3518247b770009d3bbdb321d5a5beedaf459413508339d40872fa684)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x16098e3c8f6e388b52ecdb8eaa950eb43f8a2166ff3a5ebf62f00946ef8c5988),
      uint256(0x24bc30cf742c32e6dc1b857abd77bd1b3d12a713ac58b9b8c830a9438d107966)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x052dcd01aea392f2e8d0dbbd2203740a382f3d75a1b3ae921d0cf27e8dd1fa2d),
      uint256(0x07bf07b1dee6311d5c73d3f18f81e04a3604b26e835b7bc1910a9e3b199f48ac)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x16ff23c0c7b530f36242414fe50c04f19a7f9338887b1abfdd282cd45b3cc8dd),
      uint256(0x017a1eab2a88a140fff23f963729eee32545a8e17b90206b494b8702227c2a0d)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x133010134da067a56951755852874f7f2d02287eb2518e0d49903498c0cd92bf),
      uint256(0x1882666c505703afe3fe63d746df8963ae2ce5a61fe877140450010a341da049)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x21906fa97b2afaad7fe953b40df0788676c61dd9f59759810fa379e22fb1b316),
      uint256(0x041d672564177785c1c1c6160210755d220818e2d9b155be16db979c1294bb62)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x0d046c26cbd71e288925a09de3bf47ca84e4d9af60eb77dba59695cb07da55c7),
      uint256(0x11ec66a2010af6eb2286f6361ea4f5aed451a9d7129f790d012189b9cac2860e)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x2fb428a696f155a466fdae99c5db18003cd86684fb52e968fdbcab3cb675814d),
      uint256(0x110004c1c2b3c616b4191d1daf815315b687f7bfff7fb9996dccfc5cf2ced11d)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x005632e7e14fdbcaa63e991f4279f1bc3423962c023ff0e88e47c98223d99f5e),
      uint256(0x0f7d2b67684f31a132e6c3b608fb2be0481e4e8ea2f10edce378196a3aac2b7f)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0ed85426e0858bf7373858686cbc3e35833eada674a956b8f5189f5b1deb098c),
      uint256(0x0483dc1cc2856c6f9f9a009a41e651aacf28008099c6596f351524ed71f46455)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x2146d6c88b0bea4625231a6f5269f4b5393b2196e84f94720fa268971906cb03),
      uint256(0x009cd2809e6d658c78ec05d7ab215a3fc01948b872c9033b0cf36d1c44590136)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2f065e865f43c40a80161126e16b8a5722e1338c14dfb5ed73eb733a60ec1863),
      uint256(0x1ba29cc15cc3fd60f2fbd9d37d8aa6f9e17db5c19b919e15f36570ba8eac5c9e)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x15c20a44b32bacbdb46bafde6e6402d7d917a05cf730c1727f36438e74c6c4e8),
      uint256(0x068794d23912c08a779e8b7c42f66fb937a168eb29911c4aa7102907dea5adb8)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x1817a4d3b3048a86940a0bec00622518713ec79a92c0a9f3185757d410b67213),
      uint256(0x07e657322707261988729208a9c8600438f16518f44d15766204867334ce33c4)
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
