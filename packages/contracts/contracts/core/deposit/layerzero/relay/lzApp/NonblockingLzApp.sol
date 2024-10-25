// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.26;

import "./LzApp.sol";

/*
 * the default LayerZero messaging behaviour is blocking, i.e. any failed message will block the channel
 * this abstract class try-catch all fail messages and store locally for future retry. hence, non-blocking
 * NOTE: if the srcAddress is not configured properly, it will still block the message pathway from (srcChainId, srcAddress)
 */
abstract contract NonblockingLzApp is LzApp {
  constructor() LzApp() {}

  mapping(uint16 => mapping(bytes => mapping(uint64 => bytes32))) public failedMessages;

  event MessageFailed(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload);

  // overriding the virtual function in LzReceiver
  function _blockingLzReceive(
    uint16 _srcChainId,
    bytes memory _srcAddress,
    uint64 _nonce,
    bytes memory _payload
  ) internal virtual override {
    this.nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);

    //    // try-catch all errors/exceptions
    //    try this.nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload) {
    //      // do nothing
    //    } catch {
    //      // error / exception
    //      failedMessages[_srcChainId][_srcAddress][_nonce] = keccak256(_payload);
    //      emit MessageFailed(_srcChainId, _srcAddress, _nonce, _payload);
    //    }
  }

  function nonblockingLzReceive(
    uint16 _srcChainId,
    bytes memory _srcAddress,
    uint64 _nonce,
    bytes memory _payload
  ) public virtual {
    // only internal transaction
    if (_msgSender() != address(this)) revert CustomErrors.CallIsNotLzApp();
    _nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);
  }

  //@notice override this function
  function _nonblockingLzReceive(
    uint16 _srcChainId,
    bytes memory _srcAddress,
    uint64 _nonce,
    bytes memory _payload
  ) internal virtual;

  function retryMessage(
    uint16 _srcChainId,
    bytes memory _srcAddress,
    uint64 _nonce,
    bytes memory _payload
  ) public payable virtual {
    // assert there is message to retry
    bytes32 payloadHash = failedMessages[_srcChainId][_srcAddress][_nonce];
    if (payloadHash == bytes32(0)) revert CustomErrors.NoStoredMessage();
    if (keccak256(_payload) != payloadHash) revert CustomErrors.Invalid("payload");
    // clear the stored message
    failedMessages[_srcChainId][_srcAddress][_nonce] = bytes32(0);
    // execute the message. revert if it fails again
    _nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);
  }
}
