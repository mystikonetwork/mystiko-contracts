// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {MystikoRelayerErrors} from "./MystikoRelayerErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/contracts-governance/contracts/MystikoDAOAccessControl.sol";

contract MystikoRelayerRegister is MystikoDAOAccessControl {
  struct RelayerMeta {
    string url;
    string name;
  }

  address[] public relayers;
  mapping(address => RelayerMeta) public relayerMetaMap;
  mapping(string => bool) public relayerUrlMap;
  mapping(string => bool) public relayerNameMap;

  event RelayerRegistered(address indexed relayer, string url, string name);
  event RelayerDeRegistered(address indexed relayer, string url, string name);
  event RelayerUrlUpdate(address indexed relayer, string url);
  event RelayerNameUpdate(address indexed relayer, string name);

  modifier onlyRelayer() {
    if (
      bytes(relayerMetaMap[msg.sender].name).length == 0 || bytes(relayerMetaMap[msg.sender].url).length == 0
    ) {
      revert MystikoRelayerErrors.OnlyRelayer();
    }
    _;
  }

  constructor(address _daoRegistry) MystikoDAOAccessControl(_daoRegistry) {}

  function registerRelayer(
    address _relayer,
    string calldata _relayerUrl,
    string calldata _relayerName
  ) external onlyMystikoDAO {
    _registerRelayer(_relayer, _relayerUrl, _relayerName);
  }

  /**
   * @notice  relayer master is one of worker
   * */
  function _registerRelayer(
    address _relayer,
    string calldata _relayerUrl,
    string calldata _relayerName
  ) internal {
    if (bytes(_relayerUrl).length > 256) {
      revert MystikoRelayerErrors.UrlLengthTooBig();
    }
    if (bytes(_relayerName).length > 64) {
      revert MystikoRelayerErrors.NameLengthTooBig();
    }
    if (bytes(_relayerName).length < 4) {
      revert MystikoRelayerErrors.NameLengthTooShort();
    }
    if (bytes(relayerMetaMap[_relayer].name).length != 0 || bytes(relayerMetaMap[_relayer].url).length != 0) {
      revert MystikoRelayerErrors.AlreadyRegistered();
    }
    if (relayerUrlMap[_relayerUrl]) {
      revert MystikoRelayerErrors.DuplicateUrl();
    }
    if (relayerNameMap[_relayerName]) {
      revert MystikoRelayerErrors.DuplicateName();
    }

    relayerMetaMap[_relayer] = RelayerMeta({url: _relayerUrl, name: _relayerName});
    relayerUrlMap[_relayerUrl] = true;
    relayerNameMap[_relayerName] = true;
    relayers.push(_relayer);
    emit RelayerRegistered(_relayer, _relayerUrl, _relayerName);
  }

  function deregisterRelayer(address relayer) external onlyMystikoDAO {
    _deregisterRelayer(relayer);
  }

  function deregisterRelayer() external {
    _deregisterRelayer(msg.sender);
  }

  function _deregisterRelayer(address _relayer) internal {
    RelayerMeta storage metadata = relayerMetaMap[_relayer];
    if (bytes(metadata.url).length == 0 || bytes(metadata.name).length == 0) {
      revert MystikoRelayerErrors.RelayerUnregistered();
    }

    uint256 index = relayers.length;
    for (uint256 i = 0; i < relayers.length; i++) {
      if (relayers[i] == _relayer) {
        index = i;
        break;
      }
    }
    if (index >= relayers.length) {
      revert MystikoRelayerErrors.RelayerIndexError();
    }

    relayers[index] = relayers[relayers.length - 1];
    relayers.pop();

    delete relayerUrlMap[metadata.url];
    delete relayerNameMap[metadata.name];
    delete relayerMetaMap[_relayer];
    emit RelayerDeRegistered(_relayer, metadata.url, metadata.name);
  }

  /**
   * @notice  any of worker can update relayer url
   * */
  function setRelayerUrl(string calldata _relayerUrl) external onlyRelayer {
    if (bytes(_relayerUrl).length > 256) {
      revert MystikoRelayerErrors.UrlLengthTooBig();
    }
    if (relayerUrlMap[_relayerUrl]) {
      revert MystikoRelayerErrors.DuplicateUrl();
    }
    address relayer = msg.sender;
    RelayerMeta storage metadata = relayerMetaMap[relayer];
    delete relayerUrlMap[metadata.url];
    metadata.url = _relayerUrl;
    relayerUrlMap[_relayerUrl] = true;
    emit RelayerUrlUpdate(relayer, _relayerUrl);
  }

  /**
   * @notice  any of worker can update relayer name
   * */
  function setRelayerName(string calldata _relayerName) external onlyRelayer {
    if (bytes(_relayerName).length > 64) {
      revert MystikoRelayerErrors.NameLengthTooBig();
    }
    if (bytes(_relayerName).length < 4) {
      revert MystikoRelayerErrors.NameLengthTooShort();
    }
    if (relayerNameMap[_relayerName]) {
      revert MystikoRelayerErrors.DuplicateName();
    }
    address relayer = msg.sender;
    RelayerMeta storage metadata = relayerMetaMap[relayer];
    delete relayerNameMap[metadata.name];
    metadata.name = _relayerName;
    relayerNameMap[_relayerName] = true;
    emit RelayerNameUpdate(relayer, _relayerName);
  }

  function getRelayerCount() external view returns (uint256) {
    return relayers.length;
  }

  function getRelayerUrlAndName(address _relayer) external view returns (string memory, string memory) {
    RelayerMeta storage metadata = relayerMetaMap[_relayer];
    return (metadata.url, metadata.name);
  }

  /**
   * @notice  get relayer urls and Names
   * */
  function getAllRelayerInfo() external view returns (string[] memory, string[] memory, address[] memory) {
    uint256 length = relayers.length;
    string[] memory _urls = new string[](length);
    string[] memory _names = new string[](length);
    address[] memory _addresses = new address[](length);

    for (uint256 i = 0; i < length; i++) {
      RelayerMeta storage metadata = relayerMetaMap[relayers[i]];
      _urls[i] = metadata.url;
      _names[i] = metadata.name;
      _addresses[i] = relayers[i];
    }
    return (_urls, _names, _addresses);
  }
}
