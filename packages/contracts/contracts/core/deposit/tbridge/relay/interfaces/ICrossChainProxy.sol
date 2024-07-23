// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

interface ICrossChainProxy {
  event TBridgeCrossChainMessage(address toContract, uint256 toChainId, address fromContract, bytes message);

  function sendMessage(address _toContract, uint64 _toChainId, bytes memory _message) external payable;
}
