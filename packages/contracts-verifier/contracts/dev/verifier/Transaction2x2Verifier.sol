// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Transaction2x2Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x18a1c60ed016a6bd8e9bc69e12f668382a62d44e814584c88e64d742333595ff),
      uint256(0x003018ed3c634957732ddc676a301e82cf914093154b8fbc92551530da93c8d5)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x16ce3d27957e1c781e54c53a7b4a3a8f5b920f1edea33f3c800d57ae34bffef0),
        uint256(0x296a47e96b79fb7e67434461cadfcf2c738d5ce73f914dc39ec0bcbff86f59e0)
      ],
      [
        uint256(0x279117bcbf81bed73e4a51f5e9610901e5f818dee876aa25e279b6c2e0a34ac3),
        uint256(0x110a222ae55c42bb557e6e1b8dafdce00296c5a3390c26793f31503f75d2e360)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0c66336aab21a285710885d61a668a806293ac945e48f5fae8fc0d119a86d8fe),
        uint256(0x2c129e58c251988d4c928f7f499285e4653784555489cfdff5277133271ac722)
      ],
      [
        uint256(0x0dadf4be047096715c9e58b9469e820a7fe63801938d55bf207de910a7c87d2c),
        uint256(0x027c1316f108f19cb9ec7f3dc14baffb902515fa6e8efe5be9ce9acfdf2ca08a)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x105aed8713477c971d2a276cdd2712729e496f8c28fd448e072d2af4be0828d8),
        uint256(0x008fffd0bec0de6a26153314e198f807062b6148f916aad90cbadde8279079a7)
      ],
      [
        uint256(0x2b185e5e029081a3ec7ae94ba58fd38787ea68b7f57e7b6ae554fb1d467447ff),
        uint256(0x1395eb59bf0817abfb8074c09ac18c950f06742a820bc57537bcba4e10f47b6b)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](35);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x144a414a7b14220c01672bdb11a605e91ae6f0728543384a65faebbcc9e6610c),
      uint256(0x2ce861d25d783762ab30f0a27941bcf79afe36f44e71e94c47d4646d2dfea239)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1017e784a7f0ab85046da1f0288415348fffe11e1f02a2ca11d7edf2257f6e7d),
      uint256(0x112c665fb447dfca033641f763d620796b13766e4507fe861be43e30770169a1)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0872c4b8225010d435e0d687ac43d1ae8181825b2e76ad9293065c21706c0c9d),
      uint256(0x1cf55f87abc15feaf07044a6a528fd494d90a46ea58c8a8a96c7f0906a399ca9)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x149627c5fb6c545b3effc82fe3d2ec257dd8814dec9ad08e1151f36897272d46),
      uint256(0x19d6b8806960e6d8649faae481445bd8a3fecea90b237fa2b0181318c58236a2)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x0acb8f3dfb39e5986b1ef229eed16da447440f17a0e41a886cb5c5d9ed90e833),
      uint256(0x17b815b045dec4152e38c7aa5352b1ae70e07639295d4f3ba6295da1cf2ad036)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1052e1c9f7734b71f4650a8f1326556999fa0aae4f169278cd600901c0bd6ba7),
      uint256(0x279166ce9b076fb3758d33d6243163adb91fa46bfb06f76397de66e3823ee888)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x00a5d211dbcdd54f38646e90fe6222cbc1bcd93bcb220a157dc4d62a79181efd),
      uint256(0x18731009480845f0300279f857c2c920f045900e8d99363fae0d5885cd019477)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x11e45de3180575449d17264e29b4df1eecf609d41ef2ec34dbd9fce917ddb269),
      uint256(0x232ea8c393d98dc689fff0547f99e31660165685e3a35b2c62de6fde0cae0ef0)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x0a0d903ced5a94fea1449b1c2ba65f1adc8529f36605f37253f61dc30828b1b6),
      uint256(0x275762637831aedba7f70666bfa481b00b350855936438fd547cd7f09b6b6d81)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x198b4e780794afb17054bc3740eb18cb0b00544a8886093cd3e403b2bd77ebe6),
      uint256(0x08ad3da9bb5b71708d4f7e3d9423c34499b6c6bd6bc1552d0db7f92b8cb501cd)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x00562d66fd1f874d80c97ce05f3bf0f20d11e9781fbd6901885f594f7bef4fee),
      uint256(0x1a42a48099d82f11ee48ac4c40d9742a24f011a08253d6c9a7ae3f2dcb5ca164)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x2b786e4640535ed714371012eee31fa4195732943698531b068e95e449bf7d44),
      uint256(0x04ed8ae34c8fcecfe707f1e9ddb854ed9fb947e9038600e9ed25fad6488e1fd7)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x2de278bd58d087db66f9dff117a8880247ab33eec8d87695fbaa8cbd52c72962),
      uint256(0x134f7e2936dd278f3498fe9e2e679ccdb80c6c1191c84683fd19a2b49ce8bfca)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x092a68a13476f83567f685b2c788f123dad25e2ab30edb9eff7a93f9916f852a),
      uint256(0x139e95e3e73724d557fd5af70fc8506773b30507dfd703278283fcb14593ed80)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x12eff84f973d08f5aa3dcb8f5f42aba0c3a0b4b251d79d96b6b5dfbdaa3e05c0),
      uint256(0x1c80fd23a20a5ca6b5cff5711774be9cca0f576c354d1eec90fabed255cb17e2)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x19596669bedde54ac30db2cc26189ceda5e69bd56ba2d042814d750da44ec5d1),
      uint256(0x0432e862aaa42e158841ea7dd4fb1b7b1c99cc7eaa48f98a529c203044219831)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x2488df008c1afa019ed448b763586603f61f9f6a57472aad2cc063ea06549788),
      uint256(0x271278c83a67a4027f28387819e4dcac9f959e66f75bf507bccec7ceeac592aa)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x022f6388c823f2de1fb62afc6040b42b51cda9673f0e6e59fc63334a46d03bf3),
      uint256(0x27b74baf5feb254b720219b18eb4f0774e36a5e5d5f75ff8a2bee6da75dd0740)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x0f35629b22f3a1f4b45f12fdb04a59feb35e316694a85168f12c6d99e56522a2),
      uint256(0x156cce8748613e36ba878188560faaed5fe6401b05b555d77701a971a72eec47)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x1223abb3c8447ff3071a59b6857166ce295526d819a8c048e0c2b44022f03dd0),
      uint256(0x07245aeab1c535319b0749cab314c5c328a62a532fbcac2938a09ec3a74f3fb4)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x1230b4987f6721718803c1d5fd680f746a642e930c30b49668840475f9402002),
      uint256(0x278668cf9eee89b5231a427e4cfac049bd5b0d2adf05b638fd6a06f6a6d7c40e)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x2d9d312f066730aa8cf1b5cd3d07911d194259d0e5cbe2b7d54dad1ef5753e04),
      uint256(0x2c4930036543e717f7083d5d6eaf9815a7239e841b72f7a43537272d62a596a9)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x15d6f48d33db100465d800d2249d562d91b4a052ffce5ed5b31bfcf7d33c31e0),
      uint256(0x08b1d000732dccf48910754f02c2268af62a50e78264e3594932574a29e74234)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x049f6a16a52e5df8412ae2a37019b6678b7af1966104a844dafdf24cd5453daf),
      uint256(0x2bdb9b0ec1298eff288124dddd563b19fea91e3ade8bbce96750cf23bd3b7a41)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x09a3ad8267555d4abf7e77aa507ade767c88a073b24cf49b186e1eabd703e257),
      uint256(0x0daf51208f728fd18cc420d84b84085c2ded769bd529c079de3977d15f86a49a)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x2373da6fe6d9a533e1c0c726c6fbcb44afcabe10759c0937a9074e24f1860f29),
      uint256(0x2efead0d72bd108c10d21bd8ecc34b504d3da2d91cd2cb4cc1fb21eae2e5c537)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x1e3734ac8a175c1803838133236e4bc94801ae35a19637fa239db0247b710899),
      uint256(0x074a011a8fde2954a07c93f681b64d2b5d6dbb0cf8464601da99d496e4164036)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x1b947131b7cbe04d0ab8d8b694b6952a52cfceaaccd9520134b5c839b417ab10),
      uint256(0x1e2ef42b3d3919db26e6cc87a59e1185dfd2049f4c63efd33083a7e2ba0eebc0)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x17f790ac10656e3710bdec67655e74831ef0b8c0b18e418a0a5c434caa6a930c),
      uint256(0x00f46da3dda59d6e2e2d23528a728e719edf15109ec602db4e2dbed78ecaaa53)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x0a83dd2b713e300c15702988f86c465e43fd3ba9ab040c6649f0b40856219734),
      uint256(0x07e0db38f4a15966cec433ad2e11167d04a89bc632b8e1b35540b2fa7595c359)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x04ae36e3e5148e309edcb4db00dbaacd7bb7a80576ea91b8911a4b75babc349e),
      uint256(0x06fdcd887c8492c76efcf2a91966bba86e1a90c5642288dda79840b5f977b5ac)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x1ddeb07288fa14aab7eec9941a7c5f067f7c3dc1d63e157ef974f19120cb94aa),
      uint256(0x14dc78478ae88eec8812a7a639c2b4a4700198d99249ae6d5aa2e900b959c13f)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x0472e713640c14ae44583e20e534155c5c711ceb8257cb455123b9dd5ca0161a),
      uint256(0x0e2625f03a7a833cea236da093dc00f5874834f4a050364e29fa0bb51a46c620)
    );
    vk.gamma_abc[33] = Pairing.G1Point(
      uint256(0x2b06e5751aed24ae18502f9cbcadde28f77d2d3ad0c464ec634a884d725d4c53),
      uint256(0x1b3d6a90ceb9950f0891b96427c720458539f64ca79c617357bc8957903bf7c3)
    );
    vk.gamma_abc[34] = Pairing.G1Point(
      uint256(0x238039f8e3fe61b59c94662ff82e22a13a2b48b08275df39ecdccc14d8c166a2),
      uint256(0x1969cbfdcfb21559b650a49d112fc841c91c17384c4584c5ec1147a3d7371843)
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
    if (input.length != 34) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
