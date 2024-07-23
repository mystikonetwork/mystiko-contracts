// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "./relay/IAxelarExecutable.sol";
import "./relay/IAxelarGasService.sol";
import "./relay/IAxelarGateway.sol";
import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../libs/utils/Utils.sol";
import "../../../interfaces/IHasher3.sol";
import {Strings} from "lib/openzeppelin-contracts/contracts/utils/Strings.sol";

abstract contract MystikoV2Axelar is MystikoV2Bridge, IAxelarExecutable {
  event CallContractMessage(string peerChainName, string destinationAddress);

  IAxelarGasService private gasReceiver;

  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    LocalConfig memory _localConfig,
    PeerConfig memory _peerConfig,
    address _gasReceiver
  )
    MystikoV2Bridge(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig)
    IAxelarExecutable()
  {
    gasReceiver = IAxelarGasService(_gasReceiver);
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

  // todo add onlyBridgeProxy
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
