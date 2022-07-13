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
      uint256(0x2c7762da39e2ff9080ee45e041a3996dd29724409a43c76b391eccf69ff3f155),
      uint256(0x0a756a28ebf393811037011e9ef58fe5add285c96b101ea0564902becf5c6f6d)
    );
    vk.beta = Pairing.G2Point(
      [
        uint256(0x1ec57cd391b5b1c076a1f336feeb767beed5659342bcbac282321d016d147300),
        uint256(0x00bff69f46c8e63d920a41d61bdad806803b626a6fd9e5951175a815e38a05e3)
      ],
      [
        uint256(0x156fb68f14345a7bf01fa4138363127072aeb10109367755b0aae324c3dce7a0),
        uint256(0x0435b887e6fe26abbe5763905dde6c596c45399dee8b953b45b9b721e7d83678)
      ]
    );
    vk.gamma = Pairing.G2Point(
      [
        uint256(0x2211449dd60484d52efdb8454a773dc3dee68d1cd891d2b7228d05cc1b803518),
        uint256(0x181c1d5999ccb8192ed564bba377d6a451616780daa4b8056379c0e32e443d54)
      ],
      [
        uint256(0x0bb0c41e139b520483fd0064d8f94cf20ddb629526ca57c225f448c95cbfd06d),
        uint256(0x2c741a5581e9c7613205b43708e6ce2b518bccfc82d775c47418d9743756d404)
      ]
    );
    vk.delta = Pairing.G2Point(
      [
        uint256(0x17337aefad3eb9db6105ab4f27a4541c8558d90cba1894855751f87a210d08be),
        uint256(0x1a713b71b7c4fd2d9d1c9fb8e8dbece402d164b3d0653e587f86ae354f70f8de)
      ],
      [
        uint256(0x119276e04ee9b47b06227d3bf5876900209a929e23a9dfab015f7d69c6b16695),
        uint256(0x1f96a989bf9dfb99a437150ebeac4ae6f33f45684cbb969af9ea88f01a8d63bc)
      ]
    );
    vk.gamma_abc = new Pairing.G1Point[](5);
    vk.gamma_abc[0] = Pairing.G1Point(
      uint256(0x10de3d72cbe5ff6166f4e74c6a534a0b5c8bab8ae4867595bf87fbbd4ad199b3),
      uint256(0x158d89b6cfc41c020369ccc5001070cc2f0ee1b3924808e7ea7d510f64fc9b7a)
    );
    vk.gamma_abc[1] = Pairing.G1Point(
      uint256(0x0397014db138e08ad92767d0a1b9c2caf8dedb67de6e13f58fbcd79e95fd3329),
      uint256(0x07372776e40fb4627be6e9b02109a5e3ce469238df8ee0412c170f48fa0d4108)
    );
    vk.gamma_abc[2] = Pairing.G1Point(
      uint256(0x0ed847f8c6f88d219733b89c903679d884a446e76ca0c3ab3c44938894352a6e),
      uint256(0x0d124ae18c762d1918e8c14a4eb1b39cb3456c3bedbac793263c826eeed24b62)
    );
    vk.gamma_abc[3] = Pairing.G1Point(
      uint256(0x0dcb9ad9a728d8dfeed4dafb5bb1d9d0dc0da12131c80cada397cc18ca7f6ebf),
      uint256(0x00b8c989a8fd0f482731c55c1af8180afe33e1d98123f40a8438e1445569dcdd)
    );
    vk.gamma_abc[4] = Pairing.G1Point(
      uint256(0x2c282c015f7ee2e6e029cc9c2f1964796c5bb975b97fd16a526ee56271c7d1ec),
      uint256(0x25becb5c200e8659c99df32e88d9bec41ad5f8b4c27563a3d22e859c98412270)
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
