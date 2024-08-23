// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "./ICommitmentPool.sol";

interface IMystikoBridge {
  struct BridgeLocalConfig {
    uint256 minAmount;
    uint256 maxAmount;
    uint256 minBridgeFee;
  }

  struct BridgePeerConfig {
    uint256 peerMinExecutorFee;
    uint256 peerMinRollupFee;
  }

  struct BridgePeerContract {
    uint64 peerChainId;
    string peerChainName;
    address peerContract;
  }

  struct BridgeDepositRequest {
    uint256 amount;
    uint256 commitment;
    uint256 hashK;
    uint128 randomS;
    bytes encryptedNote;
    uint256 bridgeFee;
    uint256 executorFee;
    uint256 rollupFee;
  }

  function deposit(BridgeDepositRequest memory _request) external payable;

  function certDeposit(
    BridgeDepositRequest memory _request,
    uint256 certificateDeadline,
    bytes memory certificateSignature
  ) external payable;
}
