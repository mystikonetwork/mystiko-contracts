// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./relay/IAxelarExecutable.sol";
import "./relay/AxelarGasService.sol";
import "./relay/IAxelarGateway.sol";
import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../libs/utils/Utils.sol";

abstract contract MystikoV2Axelar is MystikoV2Bridge, IAxelarExecutable {
  event CallContractMessage(string peerChainName, string destinationAddress);

  AxelarGasService gasReceiver;

  constructor(address _hasher3) MystikoV2Bridge(_hasher3) IAxelarExecutable() {}

  function setAxelarGasReceiver(address _gasReceiver) external onlyOperator {
    gasReceiver = AxelarGasService(_gasReceiver);
  }

  function _processDeposit(uint256 _bridgeFee, bytes memory _requestBytes) internal override {
    // todo should save destinationAddress in setPeerContract call
    string memory destinationAddress = Strings.toHexString(uint256(uint160(peerContract)), 20);
    if (_bridgeFee > 0) {
      gasReceiver.payNativeGasForContractCall{value: _bridgeFee}(
        address(this),
        peerChainName,
        destinationAddress,
        _requestBytes,
        msg.sender
      );
    }

    // todo cant remove  emit event ???
    emit CallContractMessage(peerChainName, destinationAddress);
    IAxelarGateway(bridgeProxyAddress).callContract(peerChainName, destinationAddress, _requestBytes);
  }

  //todo add onlyBridgeProxy
  function _execute(
    string memory _sourceChain,
    string memory _sourceAddress,
    bytes calldata _payload
  ) internal override {
    ICommitmentPool.CommitmentRequest memory cmRequest = deserializeTxData(_payload);
    // todo check _sourceChain and _sourceAddress
    bridgeCommitment(peerChainId, peerContract, tx.origin, cmRequest);
  }

  function bridgeType() public pure override returns (string memory) {
    return "axelar";
  }
}