// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../core/deposit/celer/relay/interface/IMessageReceiverApp.sol";
import "../../core/deposit/celer/relay/interface/IMessageSenderApp.sol";
import "../../core/deposit/celer/MystikoV2Celer.sol";
import "../../libs/utils/Utils.sol";

contract DummyCelerMessageBus is IMessageSenderApp {
  uint64 public chainIdA;
  address public contractAddressA;
  uint64 public chainIdB;
  address public contractAddressB;

  function setChainPair(
    uint64 _chainIdA,
    address _contractAddressA,
    uint64 _chainIdB,
    address _contractAddressB
  ) public {
    chainIdA = _chainIdA;
    contractAddressA = _contractAddressA;
    chainIdB = _chainIdB;
    contractAddressB = _contractAddressB;
  }

  function sendMessage(
    address _receiver,
    uint256 _dstChainId,
    bytes memory _message
  ) external payable override {
    uint64 fromChainId;
    address fromContractAddress;
    require(msg.value >= 0, "require bridge fee");

    if (_dstChainId == chainIdA) {
      fromChainId = chainIdB;
      fromContractAddress = contractAddressB;
    } else if (_dstChainId == chainIdB) {
      fromChainId = chainIdA;
      fromContractAddress = contractAddressA;
    } else {
      revert("not support this peer");
    }

    require(
      MystikoV2Celer(_receiver).executeMessage(fromContractAddress, fromChainId, _message, tx.origin),
      "call executeMessage returns error"
    );
    return;
  }
}
