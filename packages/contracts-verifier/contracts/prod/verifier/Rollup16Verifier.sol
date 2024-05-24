// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup16Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0721af3d9a6c748b75963a1a429c4fcd81a2b51d9f79de4fdcba4f3f28850471),
      uint256(0x05d35ba89c5ed101602d185e796ad186e29e06b02ff9552fd4f7c203acd7dd8d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x17d794de2902bb6ae6dd9ca94e42b0746c4b6b5ed92749eea17e0f9887fdce17),
        uint256(0x1752eabbc97ca9e514bdcfa9984ef5acf4d7d01110da6fa57fde8186d7db2abe)
      ],
      [
        uint256(0x07ec7b5541895bdc355e4ce27a648c68500ddaa90465ed86ecf04c7d7d3978e3),
        uint256(0x0267b2a7a16c2b3fec9024d1256e378a2e695c90b22f3e86070491c19277b09f)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0e6ea7ebf9bfa12714061e4c383a68f51c75e7ea065651d0d7a80bcb7cb885a0),
        uint256(0x099e1c23e7c8380355a99f934501663fe9e79735c193385810c87fa0bca5ebee)
      ],
      [
        uint256(0x05afba5b04239d73f07110b06ffeb7d3274e7499a26d4778fbc8c4afc56455e3),
        uint256(0x2327bd20400e11b57b0f94c77e3c03e726144d17d27556714d9bb68c88edfc08)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1b1b520dcea51cd8132cdee529e40386b315fd379d5fa5f22cdb2915cb93a7bc),
        uint256(0x15279d0691b82c54d11c0ad5b3702b858f75ecb90d17318332ff279ee8f468b7)
      ],
      [
        uint256(0x28b732693a772dd67638051aa89b1dd8edb158dad28ab276824f7fc400ebb4d3),
        uint256(0x15ae3ba6a91c6cf5b71cbac04c498b5814dffdeb0075707ca7e528f6c8b91faa)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x21aa3e738fafb0ce9144d5dbcda111e3fe3f54f14dabb0ddb3b10fb3b6c2f6c7),
      uint256(0x1a52121f4459d0f45de21a4952e3b72d4653b62b12705effa17d892f850286dc)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2339073ee7354dbacc9a3109d83ceb0317e7c6ade6f55243abadb28d6114ea04),
      uint256(0x12dc0beaf4fbc1cda4940bfa7120395cf071ab686b55ee9cca73af988ca97820)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x02dbdb3c60d9cd4330ea52cf0c585186304fa515b421fa5d8bfad52eea2b0919),
      uint256(0x150baaf7f86c425b7eb01e08fd14d6aef475aa87d60634ca73874947528fedda)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1f4c77463a61a48fd928e4e5107b6b89d5e36eb3791d6bd1d2d955319c7f96b9),
      uint256(0x0382b26ebbd5d34b893a19fa0098a3c0e68b49a754bbed0a7172bd82baec3538)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1c32ad9e0e74461163cb1cf6543525af4a188c5ac7ff90977300427fd115d1bd),
      uint256(0x2549c0e814cd5b3ed5090d26383a2daff75e87e61867bd91b396cd24fb155778)
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
    if (input.length != 4) revert VerifierLib.InvalidParam();
    return verify(input, proof);
  }
}
