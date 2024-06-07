// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./relay/lzApp/NonblockingLzApp.sol";
import "../base/CrossChainDataSerializable.sol";
import "../base/MystikoV2Bridge.sol";
import "../../../libs/utils/Utils.sol";
import "../../../interfaces/IHasher3.sol";

abstract contract MystikoV2LayerZero is MystikoV2Bridge, NonblockingLzApp {
  constructor(
    IHasher3 _hasher3,
    address _bridgeProxyAddress,
    address _settingsCenter,
    LocalConfig memory _localConfig,
    PeerConfig memory _peerConfig
  )
    MystikoV2Bridge(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig)
    NonblockingLzApp()
  {
    // implemented in MystikoV2Bridge
  }

  function _processDeposit(uint256 _bridgeFee, bytes memory _requestBytes) internal override {
    _lzSend(peerLayerZeroChainId, _requestBytes, payable(msg.sender), address(0x0), bytes(""), _bridgeFee);
  }

  // todo add onlyBridgeProxy
  function _nonblockingLzReceive(
    uint16 _srcChainId,
    bytes memory _srcAddress,
    uint64 _nonce,
    bytes memory _payload
  ) internal override {
    ICommitmentPool.CommitmentRequest memory cmRequest = deserializeTxData(_payload);
    // todo check _srcChainId and _srcAddress
    bridgeCommitment(peerChainId, peerContract, tx.origin, cmRequest);
  }

  function bridgeType() public pure override returns (string memory) {
    return "layerZero";
  }
}
