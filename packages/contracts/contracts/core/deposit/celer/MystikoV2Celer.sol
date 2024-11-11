// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "./relay/interfaces/IMessageSenderApp.sol";
import "./relay/interfaces/IMessageReceiverApp.sol";
import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../interfaces/IHasher3.sol";

abstract contract MystikoV2Celer is MystikoV2Bridge, IMessageReceiverApp {
  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    BridgeLocalConfig memory _localConfig,
    BridgePeerConfig memory _peerConfig
  ) MystikoV2Bridge(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig) {
    // implemented in MystikoV2Bridge
  }

  function _processDeposit(
    uint256 _amount,
    uint256 _bridgeFee,
    bytes memory _requestBytes
  ) internal override {
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
