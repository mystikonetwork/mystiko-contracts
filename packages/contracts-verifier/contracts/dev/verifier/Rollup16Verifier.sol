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
      uint256(0x1093ea47fd122998dccce33491da4ef97bbbd8aec40cdb005f4934583842a801),
      uint256(0x20e117ac016aeed2c7bdcb3eb57762869bdb2787ffedcf2f51b2a8ddee174272)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1a4032afc99229a91c5e198f12a33141b55ec7b36670af4289f70b65ee84bd87),
        uint256(0x28978f7cd0a07bbbd531e7affc1a6409fb8c1581f7c3a50db6e2da4ce8f94008)
      ],
      [
        uint256(0x2a9723206e058ad16d150a7976b87fca5c91c9eac92776b9d00ff302d89564f5),
        uint256(0x0044dbcd6510e243a616d487372de926b9c250514e18243ec3a8269e63f11d88)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x0c7de5a294e6b7efc9eeba6d9ede32a9ae1e547b360c7912b74cd5872005f8ea),
        uint256(0x1fb2467ef5c769aac38adea410d609dce7b2bf930d1889e501935a86e93bc1e6)
      ],
      [
        uint256(0x10c3ce8e598fcc52f5b8a95cab866b8684a5e9dfb9e62c809ac6d859cc683827),
        uint256(0x2087d45f712c0cef7eeb5a20a751007cd4bb738433e298b8cea6f1a5ac7c5535)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x16c9d66f75ab1d64fecabd283710409681d3fbbc8227c1fe0aad1e4f3c16a971),
        uint256(0x2dd1c595193edec73e9fc9e55df36c4d90cf27cb7d637f964f661694f53810dd)
      ],
      [
        uint256(0x23a07a57938a73adc3cd2e3decbc17aba162acb3d8feb3e03ca4c1cc0ba5dac8),
        uint256(0x1ceebc522a60979286cd2eec58ca833b2623d85d8da16616322efd2e5b0cb0ed)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x14390fd77e1434b1f1ce41bfd9c233391e59ea226f940df8a20768a957339cc0),
      uint256(0x103243d6c048550ab0a1e394323d6f1c169fcda1ae17c20d8bd17ef6fd014cca)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x2de994843397b93a399a99270bba6afed71ac04c506449802e6d0fc493f3c470),
      uint256(0x2ece98b481450a91df91bcbfa046099e391c2f1e5aff6b80c3f452c2b182a639)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0b3c033d57525f09a23ae5cee67a2bb8a6f7f268535324217a64a128d62069ed),
      uint256(0x1c471a567f6c3f406b7bab8f6e654850c4a31296d9bbea9362d23444b17d5aaf)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x28b13f9e41b42020d99c9f2eb7eebf283e6b04970a332eef7284c28f3e9f638d),
      uint256(0x06f584ab8b56d93eef8bd6395f259d1fba753461040f6043ab61a7b59cdd2f76)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2ddf4d3226adf7403c7fb20d91c8dedcdb860ec601335b05bca4dfdfd26461b0),
      uint256(0x217f7fe4c9549d84b932849396849782f595876c97fdd6e32b21efc2bcc1ddd5)
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
