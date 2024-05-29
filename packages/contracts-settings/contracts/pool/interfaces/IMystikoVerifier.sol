// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

struct WrappedVerifier {
  address verifier;
  bool enabled;
}

interface IMystikoVerifier {
  function queryRollupVerifier(uint32 _rollupSize) external view returns (WrappedVerifier memory);
  function queryTransactVerifier(
    uint32 _numInputs,
    uint32 _numOutputs
  ) external view returns (WrappedVerifier memory);
}
