// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity 0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup4Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x00f55326783626a652b3a7dda71a7c42590cb2fe35af272a4d6cbfb6b4e5a4fd),
      uint256(0x12693394c17cede50bc45fa87d17ddddbdc12ae8cf4520054f843b08a48a9393)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1a5e5843765f7e815bffcfb780b0562a15443042a51ef189fd2ee8163a28038e),
        uint256(0x0ec2af48b76f137445b330b73fdf37df87eebdad3664536842034564a723b6bc)
      ],
      [
        uint256(0x164b4596274aa0295d87a9fc7ddf6c28abf217f42c192ba8cd11790a88072930),
        uint256(0x0b59e44bcd7c2ad1176e227eab945eee3b22d1205044fdc0ef37de00fe6be5dd)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1a260702697d96c13fba085b4adfcf4da0b87e5c56a4d7a964676309d784fb19),
        uint256(0x196817ff98a202140dcbc857b99ac651fcaba5d946028b789f69aaaf50759c0b)
      ],
      [
        uint256(0x2f10f42c599cf2fc640bd45cdc5615a412ba57f59e059b4ed736f48f46d77598),
        uint256(0x03bd5f1142f702a924d600cabb8b841a05f192d14442a9233af61a9f3b5d1db0)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1b4738d7140a0a054571a807bd4698e377aebf964cbae5e1f79d0033d308d746),
        uint256(0x17ac0757c6297ec15cc30b2b5b17926afac5d68ba0be547cca997693f9ba459a)
      ],
      [
        uint256(0x1949eb9d26b010c39ce14fbf33a22548aa69624b4f38b7bdcf2db82f222a208b),
        uint256(0x0989ec8f28e09d19fb26e45dc2c1121595e400de253a5dc2bbea599901624a0c)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1f4a943ca0338d5d3edded1c53a20b69158f1edebc40b26d4b4731b6bf6db7ca),
      uint256(0x0bb79c061894056f8d7780e38e62923da9817ad03e20127508bb8da243dd3061)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x26ee3f0b791bf65f6d87ddc8f87058156ca60127e41da5d1145c29b971ae2a88),
      uint256(0x194e7b92b5141c4858fc221e8f031b8bbfc9bd47842611b7730b7079e494a54a)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x20dcd66eb4337854fa296ccdc746cd4b8ed8b47d20b79bdc474073654b9bddcd),
      uint256(0x29dfabb9697a10cfaff4a4203ce37be63447d11f448af23267dfa859f8a88c3b)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x1f24e5bfc87d207b0150a4e59b0aece4f2c04fcf7547b3eeffec28c260b2a951),
      uint256(0x05eb352cad74fb85d01e513c2053fcd9aac8d66556b89a7d095cd948ec4c196f)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x18de5a5f3ef66a64e929dee144be63c91e6d1225b233650b793bbb14751549b3),
      uint256(0x13854d1288555747333262f412929bcd80552b1a044d960c688affae1ec8c0f0)
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
