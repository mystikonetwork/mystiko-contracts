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
      uint256(0x23f700493ee8561b86dbd3d0be30d162574660500eafad21bb828b0d49a4e479),
      uint256(0x283e9d695bc458f32072348c9176ee24284903548429e885c7ef5977b46abb0d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x21c85db57e19cd6234a138888ca387fe80f9e50d2c941c5d015133fa452f1432),
        uint256(0x27bbb36d70c5dafd1a025ace718a4d978521f1aa08f26424b59b682e78580e68)
      ],
      [
        uint256(0x160d3506a06078e085cc1830d860f103d8507a5da957aa5b4ec8f2a4e5e2970d),
        uint256(0x15f03672ecae6a655ee818243b3af468d6d9aaad2c75f3b09fc8cc21a6365f79)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0adbf8cf7b15e1f3af6065603bb7886ab7919f322f2dce7cc3710fb193d295b8),
        uint256(0x05f8c91a955a3aba16ba36c7ca13211640d8b5814072f59dc53482aa3d401816)
      ],
      [
        uint256(0x1085cf07b98683551388c9984bf4cbcd3ee63287d06deab8d2c70558ae993655),
        uint256(0x0ea592d06e59337fc74f34b11d3561815c122c64a0a508afe542b5abe3b70f2b)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x037a9212b8dd521e1177af269f5d7d2575f83b06a3e7d123891afe5e9865939f),
        uint256(0x03cbef3e06bea9ffd6a39b939cbcd0b8cbdca11c3f03b3b4d237afe1a6f27309)
      ],
      [
        uint256(0x042382fe0b7b48acff0310cffa7473ce6992f30915275ad044826d43950e97a5),
        uint256(0x03ddd9440ca6b0478cc0107d40d29996dd7ccad971fb22cf6cd526926029fdc0)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](33);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x0cc14697522d4eb3edbbd9f36c63adffe868deacab5fcfff8b6ba5c1c438f8a4),
      uint256(0x13dc037783272e840a467c13963fcb220f9d602c40ddac5d8c1883723c764152)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x19b9d7f192ed5d3d7f183789629ce3e71f302f381907a270a628152090179cf8),
      uint256(0x2259332635adad8a8eb465799fe59ad7e8cf332a46f142cc6e909f4e48376f49)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x29ff42b6c90fe076b7bdd98f660b0fdebfeb067aeb25423220d4aacdcbd14608),
      uint256(0x221210e49d7ba71883c3100029429e0c0bb2322d56420442fba53bf7fb8138fd)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x302563a5ed2a5755531e04ac26d4c119f9e67fe3ceec06618c54734e88807dd4),
      uint256(0x256de1e10db2a0b3194974fc56bc03504e60e3bd85445d8092617ee043e714dc)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x209759633ef93541dc02fc2045f2c65629bcd39b2a4ef3a9a6a813eeb1aa11ff),
      uint256(0x080a73e9a89cea22ef16c7b4643f314e871cdace3672e71081dbdfcce821b9d9)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x29c5a4e10aa2c5e0f74d240628340682601d66c3529d62857206998610d1b644),
      uint256(0x257d19f9eca5eaba307ec2d2615061d3f26f7226a0417cada15853d6a1cfc067)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x13dbdf4f541720443286c5e476dd33c52feb3d7e7184c8263def693b6f442306),
      uint256(0x0d532c39d15f804f48aceb8f48704bbd43e237ad2b8cf7d7cfbffc65caec4242)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x0cb9067e7832ef7a395d90d965c889e7f87aedc73506b9e972a0b88d4bf02e98),
      uint256(0x154e8d54af8f13bc47b9e0d3ab1ab08c6d66dd34b9d485dcfdc5fbd141868a0d)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x2ce15f926148ae83058947785f5e14e04f6847af97028b5ebc57d529fc48a977),
      uint256(0x0512e763b99bdf3dd31ddde14136baa02d0d1abaccc29cee59765e9784964c28)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x05c9696ee9f040a65e9738dfa9a01865434eb3bb0a9cab25ca6a7745c1e10c3e),
      uint256(0x156a76b1f5b09f303b34a9ae30b652bc8d844270725922fb1515f751bebbc47b)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x183bfc81302960595ddd4ce7fc91cf817cea3efb1b174c7463d3f5c187893d77),
      uint256(0x2270aa93efe6d09a382a482a6897bc009c245764ffe90f0b961187c793fc9ec1)
    );
    vk.gamma_abc[11] = Pairing.G1Point(
      uint256(0x0ead07cadfe3cba19f4cf278cb14db207d8667f7a3941460f257789799808cb4),
      uint256(0x234ed0740b995960fb2292f78c0bf06a6a0c1bf9acbccc8065661c1126423034)
    );
    vk.gamma_abc[12] = Pairing.G1Point(
      uint256(0x288713e868a7bea09a7038b38b308d7acc30e6d9db9acd4982f1a92ed1152d93),
      uint256(0x1571077c6be87f2065d4d97da60f9ffddf8471c913fb7c8d8a372c5820f71aee)
    );
    vk.gamma_abc[13] = Pairing.G1Point(
      uint256(0x28b50513b1ec55b4e6c432b447e2319afa65895c7d807f0443d0579d60a2ab51),
      uint256(0x258fc5d7f7a83985d0b2c40522215f211320b7ac91fc24407fafea48540d28db)
    );
    vk.gamma_abc[14] = Pairing.G1Point(
      uint256(0x21a04951dc3bb0cdb0b658311dc50299971b01097a5cfb49952e59c11e6d8096),
      uint256(0x0d20d693f86dc0b8e4f6ad22fbf4c5cdf36ffbf39899bbd49a504fe129e1de04)
    );
    vk.gamma_abc[15] = Pairing.G1Point(
      uint256(0x0d87e23505712e7fdec976d13cf90a3b8b51e655a361f8fd6cf75cd7b634d1aa),
      uint256(0x2e9e1cdee09c42a5a22d726777978803c1f47d781a47c3a5ce2eac2a2adaee09)
    );
    vk.gamma_abc[16] = Pairing.G1Point(
      uint256(0x09f17175f958ab45c0c66d14fffd4e6bd72a4fe5d13fb32b9042e8188ff1e4c1),
      uint256(0x2089f8ad234c3f309675d92742ee5aec6964ed46979307ef529fab341ef7074d)
    );
    vk.gamma_abc[17] = Pairing.G1Point(
      uint256(0x233236da3eecf8caa812a3d8965269f0e7d1bf1a35325241dc5199abb0c98ccf),
      uint256(0x0a04a6aed268ec6fa812d3306aab69a6139a9f8751a78a3e44864fb08107aa4a)
    );
    vk.gamma_abc[18] = Pairing.G1Point(
      uint256(0x273b1ef9f40f38b885f3c42d525d89c476f66d3c09d35361ec7ba802fa1eaf7e),
      uint256(0x12d861a598d804d2dbe46dd646b97cd48862fc10fe49af9c889ba4e4511c930a)
    );
    vk.gamma_abc[19] = Pairing.G1Point(
      uint256(0x0d047c5d2a00df5ecc615e227ac9a94524af4e4abdc2c9a7ff465b802652f128),
      uint256(0x1d4300d4f3d74bf21e5bd1816c704deb08c2d5de7de6f96393493e319c177746)
    );
    vk.gamma_abc[20] = Pairing.G1Point(
      uint256(0x028d1c6d470644034cdef3b9cbfdae05a3d1240628a2fbadd9dc16793f07cd76),
      uint256(0x18db60823b07ed0df1dd0f840d914449a29ab4f6a80ab94d61986797809d9af4)
    );
    vk.gamma_abc[21] = Pairing.G1Point(
      uint256(0x05b78b33128f8c476c94bb1d8f550308b7c1d168365e54c4b6f10f0d6f150857),
      uint256(0x24eeae9198a6eab94bb56840b76b16eeff6437447c233552fe5ea8dff5e09cb2)
    );
    vk.gamma_abc[22] = Pairing.G1Point(
      uint256(0x0d321bedf84e80b0d289ed788b183dcc5f6934fe1ca234e023990ad23c3b4596),
      uint256(0x141893c91f622dfa06816ee5780f09de167eede32c0aa2962dabab00a8c28934)
    );
    vk.gamma_abc[23] = Pairing.G1Point(
      uint256(0x2090899c54225fd842e7887d24557515a0f9b8dcf8550c3a8192c1d72770b962),
      uint256(0x110c4e56ca81c22ff86a953230e8275b7d49a33652956c90177667e3b876fb3f)
    );
    vk.gamma_abc[24] = Pairing.G1Point(
      uint256(0x282ee8ec1c99dc5e63328352754ec664095131d57113d142ce0f938db5234205),
      uint256(0x09dd81bf94ee630f0d79edfde86647f3353f273604fdeea26e17b288a18ba62e)
    );
    vk.gamma_abc[25] = Pairing.G1Point(
      uint256(0x226be5bb89d463d4ff7defafc5185a407f2babc10c0b7b34fa4257c53282dbb6),
      uint256(0x047abb989ad2248eca911f25c2ab4638264ff0fee42fc0a3e7f11d7b39543d69)
    );
    vk.gamma_abc[26] = Pairing.G1Point(
      uint256(0x0e1ff26dbea184448eeaaaffcccd9a3282ba30c39bedee056946c091b816630b),
      uint256(0x11d78353d460a886c9f505877315ffe70f084e142f2b214406accf316a787a46)
    );
    vk.gamma_abc[27] = Pairing.G1Point(
      uint256(0x1f59a9f2096eb23c3ad78d3a9b799272691a555baa3c125e1119710ef81003a1),
      uint256(0x044d20fc00ffe2605933abd8a4fd9baa1f24c7fccd1ccbbf6aaa6e41f6fcd1a9)
    );
    vk.gamma_abc[28] = Pairing.G1Point(
      uint256(0x0985fca03c949bf6a35f7fe38b408241e9ecd9c7fa1aefa8bd40416f9c2c5808),
      uint256(0x297cc2d1bc44dcb4f326ac58e28eef5e0cf9ecc541a579505b30aeb6080f648a)
    );
    vk.gamma_abc[29] = Pairing.G1Point(
      uint256(0x147b39e56b0597b0c3822b483bd2a63b77a6674d5edfac049381ecf8f3cbd0ec),
      uint256(0x2976960aefdd784640dbc891e061aa7c9e8bdd85a294f487cf3b6316b4d18b2c)
    );
    vk.gamma_abc[30] = Pairing.G1Point(
      uint256(0x22bed305d1ae92411c34d1c0d0e1653713fd8b5c4dbd5158d82b5b9d5161d799),
      uint256(0x003d36c5d4e910b562bd4dde072108a51b20b073293eb5c1400708b13f83e93e)
    );
    vk.gamma_abc[31] = Pairing.G1Point(
      uint256(0x2223fdac5d82f2d647807ea990362194c77075201054729672118497a32924dd),
      uint256(0x2f445267c13f454c1512f683d70998cda4b96c43f26b438dffae773cdd28ae7b)
    );
    vk.gamma_abc[32] = Pairing.G1Point(
      uint256(0x1e8ab5ebae619d939170debf0779235ed879c9a00db5efdea5e0fc4477b3b5f8),
      uint256(0x2a519b00e73a513d7b4a41e2d9adbf1ef714c78e76d34ae0e3f744e11a884c4d)
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
