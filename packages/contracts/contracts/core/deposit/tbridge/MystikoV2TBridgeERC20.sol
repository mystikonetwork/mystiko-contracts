// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import "./MystikoV2TBridge.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2TBridgeERC20 is MystikoV2TBridge, ERC20AssetPool {
  constructor(
    IHasher3 _hasher3,
    IERC20Metadata _token,
    address _bridgeProxyAddress,
    address _settingsCenter,
    BridgeLocalConfig memory _localConfig,
    BridgePeerConfig memory _peerConfig
  )
    MystikoV2TBridge(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig)
    ERC20AssetPool(_token)
  {
    // implemented in MystikoV2TBridge
  }
}
