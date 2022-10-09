// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup1Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x0ddb73594cde75e572af9748fac21e2d91ee99f440c021d04ec554be94b3ef51),
      uint256(0x082e6e6a4c425cd92e259356428d0035150323c07e74cbcdde7922347514cc6e)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x0d00753d6b163436f47561a11d99529585623ed00fc1b1331cfc0eda7fcb1e98),
        uint256(0x19a82ef564c18c0b5782dad90fb648a3593bc47d6df1de1d898965e001c0219e)
      ],
      [
        uint256(0x110c1aeea10c730dd34b82adb2fdf14cdd841fc0967ef47dc7a7573627da7cac),
        uint256(0x0eba92bba0e6b1e4e02809e3820db7995ca2188e603c499e0f025b1dc9bb6a8c)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x1915eb897e0b6c269ee3eb1b05a351229599c2b1a28de17ad53ff059169e946d),
        uint256(0x26ea5e2001f9260b773dc8346e7b453b11fc19cb84b54bc3c1a33d986c8e8e25)
      ],
      [
        uint256(0x08ba307102ee50e1e66e43d586f2c2024562d750a3a5e357c53f0f9f6305e237),
        uint256(0x27eca0035db474dbc6ad1c131bcb6154d780f4ac36514edc4280bc66adbdf973)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x1fa9c4f278e627aa1fb1fc1f356b9bd56f2e6ebec35fd4579d92e6abf9c705ab),
        uint256(0x1710167fe7a084b374239a7afd5b28fc310fcc07e16b32107e8767085f1a624d)
      ],
      [
        uint256(0x1a7505265a1b7c6708305d336342a1ebfb20e102a73ad3787ea7ac994ca5402b),
        uint256(0x06ae1011b81218ab031e633292a10875ae2bcf705cbf3d9e91ce184cee240fb6)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1fd9d14fe48157c6d7e22cca30d0ea2384f776f39a25e0c1b71ba768f19426bb),
      uint256(0x104ecf5bdc9ca94d57e8524cbf9ff3476cd90a1f0e6cb27849ddba411b1c7799)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x1c65e2ee3ab1a03423b6f1b3ce271a3ca6099f49707d724f720b073e154609bb),
      uint256(0x04c25d752d445df773e8e3587ecbdf4e27cf089fc2f39bd8808b66fd1f215ce1)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x06827b48f205f66a8e2ca218d4252070a57dd0a6c62ee16cb612da0021440a40),
      uint256(0x1a927e73234bc3e530012882a777ef742b8df1bc561dd55978937527379f1f8e)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x291a9672cd117b8a8cfad26a3e36ad8bc0a08fd235d18a0a3714decd699ede5d),
      uint256(0x2aa8781cf070024c3c28aad17682500b916b4571b5b29937f07ba3ba9075e2f0)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2ba477e4d14a17f9d54a929ffab048e9efb5cf1e4eae1c713fb885c82e921209),
      uint256(0x00534a6c27d1f418536a46c285a46e87454a4852a573c34421679561c07314d7)
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
