// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./relay/interface/IMessageSenderApp.sol";
import "./relay/interface/IMessageReceiverApp.sol";
import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";

abstract contract MystikoV2WithCeler is MystikoV2Bridge, IMessageReceiverApp {
  constructor(address _hasher3) MystikoV2Bridge(_hasher3) {}

  function _processDeposit(uint256 _bridgeFee, bytes memory _requestBytes) internal override {
    IMessageSenderApp(bridgeProxyAddress).sendMessage{value: _bridgeFee}(
      peerContract,
      peerChainId,
      _requestBytes
    );
  }

  //celer interface
  function executeMessage(
    address _sender,
    uint64 _srcChainId,
    bytes calldata _message,
    address _executor
  ) external payable override onlyBridgeProxy returns (bool) {
    ICommitmentPool.CommitmentRequest memory cmRequest = deserializeTxData(_message);
    bridgeCommitment(_srcChainId, _sender, _executor, cmRequest);
    return true;
  }

  function bridgeType() public pure override returns (string memory) {
    return "celer";
  }
}
