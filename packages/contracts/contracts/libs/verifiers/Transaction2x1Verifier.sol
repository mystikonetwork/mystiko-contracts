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
      uint256(0x2b0f694d2609916d58f8b8fe4cbe1a713141811913f6d7736a3073ecb5b3fe80),
      uint256(0x09344c6d5ca8fbbfdb58bb857dd576fd8fab156bfedda58a6878792b965ad3d1)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x2b9d686a17f12ebeeb919832ccf9a96f904b75a5507b6e3d0bccb288cd12407c),
        uint256(0x1f2030ec5244d07eef40d7d3247db371af57f59732d06f622c112a6264a2fd28)
      ],
      [
        uint256(0x2c5211d02d38b7862d8aed27f3b16a77a27f93a1590ba782d49689b8941aa5e9),
        uint256(0x1d723f26c4b5ae3adf71d983a966b27c83f4923cd2a930812e176680fa9a191f)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x195dff06a027d149b96a410fef47ce7d0a6b6c458b384f90b0d5a38afdf6f0c8),
        uint256(0x251cbce4e335e84b7ff5a265b8bc4ee13bad86b120820031d064696c8d00c6db)
      ],
      [
        uint256(0x1c6b46a0457fb01033afbe6ea919a1fe05c02ae1502494c48bb6fd522626a89e),
        uint256(0x02b46cdd0fcf9d94fb605088c72d33343f711e5ad581307c444757559c4b70bb)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2d4d1f32578c99b504a145833842cfca2ec0db371698bea4ba91f45d38f0abe7),
        uint256(0x169fdd11263b7ec7bc512a5244b2d9ac1fe6ed87b717c8d44ec69543d41d8b00)
      ],
      [
        uint256(0x12308a508f182ae1c92a509bb0f21b59113a3b861840cff709522a77f04ced42),
        uint256(0x2f2090195bf8f7cce423b2f03b4233c740bde6272a0fee302b4e9ee10e261b2a)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](11);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x26d168c52751b3ac03231700fe779ecddfc0e5db544bbb28ce12b6671476d5a3),
      uint256(0x2f4d1362392c6748a4a6fc306702fa3d34ad4dbc19516af6f3ca88a49b5fcd65)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0ea4fcf479f44c8de13564587de40f103aa1a2f548e53e968a3fed704242ae5a),
      uint256(0x136d9c82fd0a33c865be1a01a9378ff3b511bbb17932bf13943ff261cbaedd9f)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x10cf80cb888fc063db4d263eb28b0b5ff76b48a1f9fa1ffc48ad473d7a515582),
      uint256(0x126e66bbf7f8ca3ebb9edb882fb6865e237852b156848fb1a1d9946fad3c085c)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1aeb52cb91e72a1094ebdedd60bd8eb67c89b14f8f179dfd3bef5ffd3dcee51e),
      uint256(0x30066f5fa4e43bc3a68bbb93cf2e1be0f79c9acf842bc5bf304ddac02048bda6)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1498c36d9bc15066867ca9b491ea296a441d1fe924edc5e878d6181536c73a3f),
      uint256(0x159cf0c7707ee85a6a4b46de217f54df326634ef57e68e4c9f8ec492474a5cd3)
    );
    vk.gamma_abc[5] = Pairing.G1Point(
      uint256(0x1582db4a3bb475988001aa6403f5fab22ca7193b28d42c46197baed583a4558d),
      uint256(0x05861abb3716d765c56054e9611b36a4549d5f6697994798966d14bdf9ce7dc6)
    );
    vk.gamma_abc[6] = Pairing.G1Point(
      uint256(0x23120aacf80dfe28d6b6a6e2de0f3558f930aaef85df325e5680ca8f3ac2c25a),
      uint256(0x1f16db56e7a4dc993555237605b72f001c3e1770117ecf6756465863ecdb770f)
    );
    vk.gamma_abc[7] = Pairing.G1Point(
      uint256(0x28a72186d5f5417fcc37200ca0d278d5474ac13a2a9749f26ab171bcaa9a2f07),
      uint256(0x08feec9d20a4269c6fc310a7e294d1d7d70fd8cc329f757d51f5e4fe2554ac2a)
    );
    vk.gamma_abc[8] = Pairing.G1Point(
      uint256(0x06ad2e31ca7018dd6083842668e1e81c26d43c41eb1e6b8e76c52a7875b8d89a),
      uint256(0x2695a834c7a74705c62f21cf59e1729f4fc6f9a5e819451f1c5b9f3a2a8c4b47)
    );
    vk.gamma_abc[9] = Pairing.G1Point(
      uint256(0x1d42f613879f2e14dcaf87bd19e100ab64177355da4e00914ef13b82d8149365),
      uint256(0x0421af449846ccb94431c8fcfc2b94874caf6070278c1bda7b80dad2fd65052d)
    );
    vk.gamma_abc[10] = Pairing.G1Point(
      uint256(0x16f4ec75e888e1615875143cb96048a84133dd4246fc19e3483c97825bfe4ffa),
      uint256(0x2dc3af2f0c38282c96d9fe10f7fae746c4df7937124e1f2c97ad5eeec68f0fba)
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
    if (input.length != 10) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
