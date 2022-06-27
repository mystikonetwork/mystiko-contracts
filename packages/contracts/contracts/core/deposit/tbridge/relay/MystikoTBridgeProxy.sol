// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./interface/ICrossChainProxy.sol";
import "../../base/CrossChainDataSerializable.sol";
import "../MystikoV2TBridge.sol";
import "../../../../libs/common/CustomErrors.sol";

contract MystikoTBridgeProxy is ICrossChainProxy {
  address operator;
  mapping(address => bool) executorWhitelist;
  mapping(address => bool) registerWhitelist;

  constructor() {
    operator = msg.sender;
  }

  modifier onlyOperator() {
    if (msg.sender != operator)
      revert CustomErrors.Unauthorized("only operator.");
    _;
  }

  modifier onlyExecutorWhitelisted() {
    if (!executorWhitelist[msg.sender])
      revert CustomErrors.Unauthorized("only whitelisted executor.");
    _;
  }

  modifier onlyRegisterWhitelisted() {
    if (!registerWhitelist[msg.sender])
      revert CustomErrors.Unauthorized("only register.");
    _;
  }

  function sendMessage(
    address _toContract,
    uint64 _toChainId,
    bytes memory _message
  ) external payable override onlyRegisterWhitelisted {
    emit TBridgeCrossChainMessage(_toContract, _toChainId, msg.sender, _message);
  }

  function crossChainSyncTx(
    uint64 _fromChainId,
    address _fromContract,
    address _toContract,
    address _executor,
    bytes calldata _message
  ) external onlyExecutorWhitelisted returns (bool) {
    if (!MystikoV2TBridge(_toContract).crossChainSyncTx(_fromChainId, _fromContract, _message, _executor))
      revert CustomErrors.Unexpected("call crossChainSyncTx error");
    return true;
  }

  function changeOperator(address _newOperator) external onlyOperator {
    operator = _newOperator;
  }

  function addExecutorWhitelist(address _executor) external onlyOperator {
    executorWhitelist[_executor] = true;
  }

  function removeExecutorWhitelist(address _executor) external onlyOperator {
    executorWhitelist[_executor] = false;
  }

  function addRegisterWhitelist(address _register) external onlyOperator {
    registerWhitelist[_register] = true;
  }

  function removeRegisterWhitelist(address _register) external onlyOperator {
    registerWhitelist[_register] = false;
  }

  function withdraw(address _recipient) external payable onlyOperator {
    (bool success, ) = _recipient.call{value: address(this).balance}("");
    if (!success)
      revert CustomErrors.Failed("withdraw failed");
  }
}
