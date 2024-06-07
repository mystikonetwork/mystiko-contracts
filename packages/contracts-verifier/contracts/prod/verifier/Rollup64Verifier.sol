
// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
pragma solidity ^0.8.26;
import "./Pairing.sol";
import "./VerifierLib.sol";
contract Rollup64Verifier {
    function verifyingKey() pure internal returns (VerifierLib.VerifyingKey memory vk) {
        vk.alpha = Pairing.G1Point(uint256(0x098b1328ae66a4816fe1c6fc825104b01fce0fc5052c8321c4c22e3b3a1426c0), uint256(0x1e089a50a52a7f88e1730b48e426d0af3a706bccfcfbd3bdfe68c614d77bfb58));
        vk.beta = Pairing.G2Point([uint256(0x2a888d4428da09ddca16bac621a5c473cab5042b9d17b81a5b63721b17d44f2b), uint256(0x1b80fdcfa1f422e819643f554df68d0e85e1987a79522f5583b240ad53644bc1)], [uint256(0x1da2b6e5fb0644fd9edfb4ea9368ec92368aae398aa6efc14fbef62477de3e3c), uint256(0x1dd74e479db6f0bd357d800112f00361a0787bb5b4e1b896c33758c0c6faee85)]);
        vk.gamma = Pairing.G2Point([uint256(0x08076586f5a9aaa095ba27303b12eea8999a960e3a5b2b674a72d4e7eee80948), uint256(0x04e54d62ce855c79a0a3047e63915297c4410593d90e0c816cb5780a8c3b56ce)], [uint256(0x2bbf29d1afef6c2f86e9eb3cc7bd2156a5373795bd15a6b0bc957c89a80c0e08), uint256(0x19d19f4c55cf91256517859affc3dab1c0c254fbfe91acf3d5ff1a815abfaf4d)]);
        vk.delta = Pairing.G2Point([uint256(0x2431b91f5abcd5c1d329ed3b3ccfbc98ed3cc04a1d7ac145f4879b648e2db47b), uint256(0x14cb86b2b1d61cb6856dbe7b5378a188506250d7ef91513c8e6e12d994fba5ad)], [uint256(0x0e12fc9103cb5f6ba33fdfaa9ba8ba8ef2485685657ad75b319c8e1d3c086153), uint256(0x2004e9b3809d433260ea769f0a549c1ef83c355e562fc94c61a7f2df0912eb1d)]);
        vk.gamma_abc = new Pairing.G1Point[](5);
        vk.gamma_abc[0] = Pairing.G1Point(uint256(0x167b825a927eff74db4e34306c07decf765cc48798e50c3ac48316cc186b8547), uint256(0x03c818ef4295f5c3a34c7ca28f2e72cf3054105700416b35f49c1fe74f0c8cff));
        vk.gamma_abc[1] = Pairing.G1Point(uint256(0x061be766ac4823163b46a2fb6920ffb21e88d772001f67d6c132c08b2ee84bdd), uint256(0x24b94cd59edd774e5d057165d8bb4692a03d7412260ca99ebaf38ae840588546));
        vk.gamma_abc[2] = Pairing.G1Point(uint256(0x14ca51a30b4dc9ab5ddc91a6675e0db380f6d93e7d377f2c6d71cd2f9cd0de7a), uint256(0x0c776c8a5d75c67102d1af7caa24bf47ba21c8291e34e9c3051ecbf29c5283f7));
        vk.gamma_abc[3] = Pairing.G1Point(uint256(0x2ffc5a20bff2058a59ac577912e8ca624b090d804550d1f4961c33042856e23e), uint256(0x2a47de1be310e0a2f58713a0d3181462e88f868eeaf0e83306f5ef6a3a195cdd));
        vk.gamma_abc[4] = Pairing.G1Point(uint256(0x0cd3989a8c4d6070b8333a609037e79d7386f21d2eb78aee4fec32bb298f5e79), uint256(0x2785c9f6f6460d6f14fb73c986e5d625d8d0e483e6126651ac778a365500c097));
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
