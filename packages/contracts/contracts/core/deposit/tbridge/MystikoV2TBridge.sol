// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../base/MystikoV2Bridge.sol";
import "./relay/interface/ICrossChainProxy.sol";
import "../../../interface/ICommitmentPool.sol";
import "../../../interface/IHasher3.sol";

abstract contract MystikoV2TBridge is MystikoV2Bridge {
  constructor(
    IHasher3 _hasher3,
    address _daoCenter,
    address _txFeeProxy
  ) MystikoV2Bridge(_hasher3, _daoCenter, _txFeeProxy) {
    // implemented in MystikoV2Bridge
  }

  function _processDeposit(uint256 _bridgeFee, bytes memory _requestBytes) internal override {
    ICrossChainProxy(bridgeProxyAddress).sendMessage{value: _bridgeFee}(
      peerContract,
      peerChainId,
      _requestBytes
    );
  }

  // tbridge call
  function crossChainSyncTx(
    uint64 _fromChainId,
    address _fromContract,
    bytes calldata _message,
    address _executor
  ) external onlyBridgeProxy returns (bool) {
    ICommitmentPool.CommitmentRequest memory cmRequest = deserializeTxData(_message);
    bridgeCommitment(_fromChainId, _fromContract, _executor, cmRequest);
    return true;
  }

  function bridgeType() public pure override returns (string memory) {
    return "tbridge";
  }
}
