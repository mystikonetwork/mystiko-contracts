// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./MystikoV2LayerZero.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2LayerZeroERC20 is MystikoV2LayerZero, ERC20AssetPool {
  constructor(
    IHasher3 _hasher3,
    IERC20Metadata _token,
    address _bridgeProxyAddress,
    address _settingsCenter,
    LocalConfig memory _localConfig,
    PeerConfig memory _peerConfig
  )
    MystikoV2LayerZero(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig)
    ERC20AssetPool(_token)
  {
    // implemented in MystikoV2LayerZero
  }
}
