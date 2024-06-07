
// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";
contract Rollup32Verifier {
    function verifyingKey() pure internal returns (VerifierLib.VerifyingKey memory vk) {
        vk.alpha = Pairing.G1Point(uint256(0x203f2c0b010471b6af5c97dd5bc3ef30bb91f3d9dba2fa26f0f0bbabbec1f8c6), uint256(0x22abfa94f098c71691809acbab6220b7a88cde5c119792b4d89b4ec2f76e6f77));
        vk.beta = Pairing.G2Point([uint256(0x28b669c9f445b283517d975a90afc00bd4d25564bbecad3d7de2d3add2d40fa3), uint256(0x0e3a298756528b296a193bb9d1fa9cfe3be0be88abbcdfc8cf61aa93ab02d0e8)], [uint256(0x2b9ff10a85eed1a8e507bebd3cd50aaa01614451eedecca380a828d23008f1bf), uint256(0x12df13fbf5ccb9db7ee63d2fa2b7a6a6902262b9a1c54ab36d6019e8f65c3e25)]);
        vk.gamma = Pairing.G2Point([uint256(0x12b3fd788fe73eefd45eded45c25278311eb39da43124009809fdc5f531ec103), uint256(0x0e4115f3c5c4f68f8bcbdccd1b0fdc1dc6078c17f6c92024f35dde4b6137edd1)], [uint256(0x00666470b419a8ef1df480eb3d6ca4fc2af35af490cf425edcbc35e40d81de61), uint256(0x085730cb1a619647070dec2d7262cbed8afae6201c101d05aa43fed7a56dee66)]);
        vk.delta = Pairing.G2Point([uint256(0x2384087c76458145784c054230b12d32fc2894f425028c2bf63ed0d9c81c84bf), uint256(0x07c95150246e6ca87ff3be5982b1a9917bdd91c7f6ca758f25603c1eb0ce51cb)], [uint256(0x2f5510b98bf2908ca818fa119c12f98066e3fb1e953f47a95c8177591b6a00ee), uint256(0x26b191085b4381050fe60c23be14a832441da200274d2de320feaa44797a8cf3)]);
        vk.gamma_abc = new Pairing.G1Point[](5);
        vk.gamma_abc[0] = Pairing.G1Point(uint256(0x1b4249ef811882ea8f897c7a55ea2362fa15fe7035f3da33f61eee1e2ff52821), uint256(0x038f187f5582cc40e619dad6a605dcacc33df3039e12ba9933aaceb127d0c649));
        vk.gamma_abc[1] = Pairing.G1Point(uint256(0x1bb04135cbae2725331f272a10180cdc5144582abc2007470dddf1b5ac4c1e8d), uint256(0x22c7b7caa003efa7976fa3c246f7728c546e93034985c593dd37d0b45ec3fba6));
        vk.gamma_abc[2] = Pairing.G1Point(uint256(0x19cf65b9759961a8c0617a82fdfdcd6019956312b340376aa7092d32b750f832), uint256(0x0a8c8af39948a9c821798ddc579c4b6c8104cc11081da7c4537d0f3325f02941));
        vk.gamma_abc[3] = Pairing.G1Point(uint256(0x2393d39bbf2c275b3a289b78c83154a083de4fcc1b805497af5465f7b29bb4f9), uint256(0x2818749f1f2fc5f0edc08ff05090b97fa75a1f69d67def59fc3f3fef77579eef));
        vk.gamma_abc[4] = Pairing.G1Point(uint256(0x10159519ac4fb4b9c79dd311b7345b8c6f13106e0b6f8b1914e755f40b5166d8), uint256(0x0d81737209a98bbf376f11460d2d2dd58a6abc026f3280dafb3989d0a07d6bad));
    }
    function verify(uint[] memory input, VerifierLib.Proof memory proof) internal view returns (bool) {
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
        for (uint i = 0; i < input.length; i++) {
            if (input[i] >= fieldSize) revert VerifierLib.InvalidParam();
            vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.gamma_abc[i + 1], input[i]));
        }
        if (!Pairing.isOnCurve(vk_x)) revert VerifierLib.NotOnCurve();
        return Pairing.pairingProd4(
             proof.a, proof.b,
             Pairing.negate(vk_x), vk.gamma,
             Pairing.negate(proof.c), vk.delta,
             Pairing.negate(vk.alpha), vk.beta);
    }
    function verifyTx(VerifierLib.Proof memory proof, uint[] memory input) public view returns (bool r) {
        if (input.length != 4) revert VerifierLib.InvalidParam();
        return verify(input, proof);
    }
}
