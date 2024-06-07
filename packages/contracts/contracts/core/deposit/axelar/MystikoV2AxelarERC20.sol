// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./MystikoV2Axelar.sol";
import "../../../libs/asset/ERC20AssetPool.sol";
import "../../../interfaces/IHasher3.sol";

contract MystikoV2AxelarERC20 is MystikoV2Axelar, ERC20AssetPool {
  constructor(
    IHasher3 _hasher3,
    IERC20Metadata _token,
    address _bridgeProxyAddress,
    address _settingsCenter,
    LocalConfig memory _localConfig,
    PeerConfig memory _peerConfig,
    address _gasReceiver
  )
    MystikoV2Axelar(_hasher3, _bridgeProxyAddress, _settingsCenter, _localConfig, _peerConfig, _gasReceiver)
    ERC20AssetPool(_token)
  {
    // implemented in MystikoV2Axelar
  }
}
