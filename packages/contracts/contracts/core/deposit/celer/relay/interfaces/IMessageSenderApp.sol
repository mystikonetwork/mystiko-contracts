// SPDX-License-Identifier: GPL-3.0-only

pragma solidity 0.8.26;

library MessageSenderLib {
  enum BridgeType {
    Null,
    Liquidity,
    PegDeposit,
    PegBurn
  }
}

interface IMessageSenderApp {
  /**
   * @notice Sends a message to an app on another chain via MessageBus without an associated transfer.
   * @param _receiver The address of the destination app contract.
   * @param _dstChainId The destination chain ID.
   * @param _message Arbitrary message bytes to be decoded by the destination app contract.
   */
  function sendMessage(address _receiver, uint256 _dstChainId, bytes memory _message) external payable;

  /**
   * @notice Sends a message associated with a transfer to a contract on another chain.
   * If messages with the same srcTransferId are sent, only one of them will succeed at dst chain..
   * A fee is charged in the native token.
   * @param _receiver The address of the destination app contract.
   * @param _dstChainId The destination chain ID.
   * @param _srcBridge The bridge contract to send the transfer with.
   * @param _srcTransferId The transfer ID.
   * @param _dstChainId The destination chain ID.
   * @param _message Arbitrary message bytes to be decoded by the destination app contract.
   */
  //  function sendMessageWithTransfer(
  //    address _receiver,
  //    uint256 _dstChainId,
  //    address _srcBridge,
  //    bytes32 _srcTransferId,
  //    bytes calldata _message
  //  ) external payable;
}
