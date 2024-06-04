// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ICommitmentPool.sol";

interface IMystikoBridge {
  struct LocalConfig {
    uint256 minAmount;
    uint256 maxAmount;
    uint256 minBridgeFee;
  }

  struct PeerConfig {
    uint256 peerMinExecutorFee;
    uint256 peerMinRollupFee;
  }

  struct PeerContract {
    uint64 peerChainId;
    string peerChainName;
    address peerContract;
  }

  struct DepositRequest {
    uint256 amount;
    uint256 commitment;
    uint256 hashK;
    uint128 randomS;
    bytes encryptedNote;
    uint256 bridgeFee;
    uint256 executorFee;
    uint256 rollupFee;
  }

  function deposit(DepositRequest memory _request) external payable;

  function certDeposit(
    DepositRequest memory _request,
    uint256 certificateDeadline,
    bytes memory certificateSignature
  ) external payable;
}
