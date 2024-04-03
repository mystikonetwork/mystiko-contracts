// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./relay/interface/IMessageSenderApp.sol";
import "./relay/interface/IMessageReceiverApp.sol";
import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../interface/IHasher3.sol";

abstract contract MystikoV2Celer is MystikoV2Bridge, IMessageReceiverApp {
  constructor(
    IHasher3 _hasher3,
    address _daoCenter,
    address _txFeeProxy
  ) MystikoV2Bridge(_hasher3, _daoCenter, _txFeeProxy) {
    // implemented in MystikoV2Bridge
  }

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
