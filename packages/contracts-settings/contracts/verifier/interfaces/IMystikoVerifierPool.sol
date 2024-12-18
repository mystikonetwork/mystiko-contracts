// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

struct WrappedVerifier {
  address verifier;
  bool enabled;
}

interface IMystikoVerifierPool {
  function queryRollupVerifier(uint32 _rollupSize) external view returns (WrappedVerifier memory);
  function queryTransactVerifier(
    uint32 _numInputs,
    uint32 _numOutputs
  ) external view returns (WrappedVerifier memory);
}
