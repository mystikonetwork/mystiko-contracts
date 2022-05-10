// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interface/ICrossChainProxy.sol";
import "../../base/CrossChainDataSerializable.sol";
import "../MystikoV2WithTBridge.sol";

contract MystikoTBridgeProxy is ICrossChainProxy {
  address operator;
  mapping(address => bool) executorWhitelist;
  mapping(address => bool) registerWhitelist;

  constructor() {
    operator = msg.sender;
  }

  modifier onlyOperator() {
    require(msg.sender == operator, "only operator.");
    _;
  }

  modifier onlyExecutorWhitelisted() {
    require(executorWhitelist[msg.sender], "only whitelisted executor.");
    _;
  }

  modifier onlyRegisterWhitelisted() {
    require(registerWhitelist[msg.sender], "only register.");
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
    require(
      MystikoV2WithTBridge(_toContract).crossChainSyncTx(_fromChainId, _fromContract, _message, _executor),
      "call crossChainSyncTx error"
    );
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
    require(success, "withdraw failed");
  }
}
