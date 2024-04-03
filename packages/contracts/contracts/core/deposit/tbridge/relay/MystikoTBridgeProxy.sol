// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interface/ICrossChainProxy.sol";
import "../../base/CrossChainDataSerializable.sol";
import "../MystikoV2TBridge.sol";
import "../../../../libs/common/CustomErrors.sol";
import {MystikoDAOGoverned} from "@mystikonetwork/governance/contracts/governance/MystikoDAOGoverned.sol";

contract MystikoTBridgeProxy is ICrossChainProxy, MystikoDAOGoverned {
  address operator;
  mapping(address => bool) executorWhitelist;
  mapping(address => bool) registerWhitelist;

  constructor(address _daoCenter) MystikoDAOGoverned(_daoCenter) {
    operator = msg.sender;
  }

  modifier onlyExecutorWhitelisted() {
    if (!executorWhitelist[msg.sender]) revert CustomErrors.OnlyWhitelistedExecutor();
    _;
  }

  modifier onlyRegisterWhitelisted() {
    if (!registerWhitelist[msg.sender]) revert CustomErrors.OnlyRegister();
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
      revert CustomErrors.CallCrossChainSyncTxError();
    return true;
  }

  function changeOperator(address _newOperator) external onlyMystikoDAO {
    operator = _newOperator;
  }

  function addExecutorWhitelist(address _executor) external onlyMystikoDAO {
    executorWhitelist[_executor] = true;
  }

  function removeExecutorWhitelist(address _executor) external onlyMystikoDAO {
    executorWhitelist[_executor] = false;
  }

  function addRegisterWhitelist(address _register) external onlyMystikoDAO {
    registerWhitelist[_register] = true;
  }

  function removeRegisterWhitelist(address _register) external onlyMystikoDAO {
    registerWhitelist[_register] = false;
  }

  function withdraw(address _recipient) external payable onlyMystikoDAO {
    (bool success, ) = _recipient.call{value: address(this).balance}("");
    if (!success) revert CustomErrors.WithdrawFailed();
  }
}
