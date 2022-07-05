// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IVerifier.sol";

interface ICommitmentPool {
  struct CommitmentRequest {
    uint256 amount;
    uint256 commitment;
    uint256 executorFee;
    uint256 rollupFee;
    bytes encryptedNote;
  }

  struct RollupRequest {
    IVerifier.Proof proof;
    uint32 rollupSize;
    uint256 newRoot;
    uint256 leafHash;
  }

  struct TransactRequest {
    IVerifier.Proof proof;
    uint256 rootHash;
    uint256[] serialNumbers;
    uint256[] sigHashes;
    bytes32 sigPk;
    uint256 publicAmount;
    uint256 relayerFeeAmount;
    uint256[] outCommitments;
    uint256[] outRollupFees;
    address publicRecipient;
    address relayerAddress;
    bytes[] outEncryptedNotes;
  }

  function enqueue(CommitmentRequest memory _request, address _executor) external;

  function rollup(RollupRequest memory _request) external;

  function transact(TransactRequest memory _request, bytes memory _signature) external;
}
