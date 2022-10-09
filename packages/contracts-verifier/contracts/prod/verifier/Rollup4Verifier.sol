// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.7;
import "./Pairing.sol";
import "./VerifierLib.sol";

contract Rollup4Verifier {
  function verifyingKey() internal pure returns (VerifierLib.VerifyingKey memory vk) {
    vk.alpha = Pairing.G1Point(
      uint256(0x145b30b01bb7fc129db2f5ee6589899bdfc15aa587c47a688c0b63ad3cddbb8b),
      uint256(0x1c6085878a27bace3e7150ef20f3d76fe590056ab37a7aae1ace289662727bec)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x06355f2144138e03d4f1461e552ebba91be07551194bb9f704f5e12e66c16b67),
        uint256(0x14e89ab6ec75a461f6b5275ed16c928cdb01ad536b8278d7515858749157f076)
      ],
      [
        uint256(0x14769579ec6640ea3e3c5c5c7f33fb5caf61ba7b7909061f605b1b0f2473ddb9),
        uint256(0x1ec796ea027fb7620f890d365bc709c98348bca86bfbd8178e6c688353451672)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x29708dfb0c32be746adae0bf447f1d69d7468fad627cf74470f680aa275eb453),
        uint256(0x27493f961376402eb2772e3704a1a51211d55e05740abc249a3df2468b7ad375)
      ],
      [
        uint256(0x059cb758ddee26b2fc5e2e37239a517f5dde645c01863a94c5492098b6755405),
        uint256(0x127fe071901382f3b662dcc6d7f3778333f37040370510a6330e08488c7e0038)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x2aa2669e3dc1786dfe10add29b70fe5965ba2883672ce6cea8ce447e3f0ac1be),
        uint256(0x1ebe109ee47038f38a4af731a741a17dd689c0a065595835bd3cd471304453da)
      ],
      [
        uint256(0x20b3b02a481f950c9775e1946de7db9cade1a47575059f85bd0b986830d53c64),
        uint256(0x103a204033ebdc92aca9e0675b941c2b54a0f64f30d944a905c874ee74b3d36b)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x1d09f0601bd7ad50abd927cd7637149ba015c3d23e8357baa2e182a3115ff392),
      uint256(0x2a8fd1ddf095acb152c19f1a4a7d59f4aeda91d3825e2eec1791210cc6d14cfd)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x051b7ffc620a890ba4122206052849bf650b904321c0207a4d589783e5e1586d),
      uint256(0x12ec4fa5b00a35fbf4dff9392b67c66532242f2bdd799954c872a509ccc2f6e0)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x219ffff782798bd9123333981e182d2b2f793e3897ac46d2f1a9d665d0494cef),
      uint256(0x1cee46587c729c3164b26e8f81865a33d1601459778fbf79187bfebf2c40641e)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0620d01449700c65c273b60f69df55c7fea92da570ba57328f0bc383618c50aa),
      uint256(0x0ba5fc9274633e3677ca77fae1fbb6736ae078117d9ed383aac7b5d5bf3016ba)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x1f1784d603514f1ffb7a84c500e3a7955acc00569f78e0ad1b8d27ee63c2db9f),
      uint256(0x18edc54f661f6efbdc3424bf16eea6fdbf0599ab2b53a056066e4ade8bca937b)
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
