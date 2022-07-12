// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../../core/deposit/axelar/relay/IAxelarGateway.sol";
import "../../core/deposit/axelar/MystikoV2Axelar.sol";
import "../../libs/utils/Utils.sol";

contract DummyAxelarGateway is IAxelarGateway {
  string public chainNameA;
  address public contractAddressA;
  string public chainNameB;
  address public contractAddressB;

  function setChainPair(
    string calldata _chainNameA,
    address _contractAddressA,
    string calldata _chainNameB,
    address _contractAddressB
  ) public {
    chainNameA = _chainNameA;
    contractAddressA = _contractAddressA;
    chainNameB = _chainNameB;
    contractAddressB = _contractAddressB;
  }

  function callContract(
    string calldata destinationChain,
    string calldata contractAddress,
    bytes calldata payload
  ) external override {
    MystikoV2Axelar(contractAddressB).execute(0, "0", "", payload);
  }

  function allTokensFrozen() external view override returns (bool) {
    return true;
  }

  function implementation() external view override returns (address) {
    address mock;
    return mock;
  }

  function tokenAddresses(string memory symbol) external view override returns (address) {
    address mock;
    return mock;
  }

  function tokenFrozen(string memory symbol) external view override returns (bool) {
    return true;
  }

  function isCommandExecuted(bytes32 commandId) external view override returns (bool) {
    return true;
  }

  function adminEpoch() external view override returns (uint256) {
    return 0;
  }

  function adminThreshold(uint256 epoch) external view override returns (uint256) {
    return 0;
  }

  function admins(uint256 epoch) external view override returns (address[] memory) {
    address[] memory users;
    return users;
  }

  function callContractWithToken(
    string calldata destinationChain,
    string calldata contractAddress,
    bytes calldata payload,
    string calldata symbol,
    uint256 amount
  ) external override {}

  function isContractCallApproved(
    bytes32 commandId,
    string calldata sourceChain,
    string calldata sourceAddress,
    address contractAddress,
    bytes32 payloadHash
  ) external view override returns (bool) {
    return true;
  }

  function isContractCallAndMintApproved(
    bytes32 commandId,
    string calldata sourceChain,
    string calldata sourceAddress,
    address contractAddress,
    bytes32 payloadHash,
    string calldata symbol,
    uint256 amount
  ) external view override returns (bool) {
    return true;
  }

  function validateContractCall(
    bytes32 commandId,
    string calldata sourceChain,
    string calldata sourceAddress,
    bytes32 payloadHash
  ) external override returns (bool) {
    return true;
  }

  function validateContractCallAndMint(
    bytes32 commandId,
    string calldata sourceChain,
    string calldata sourceAddress,
    bytes32 payloadHash,
    string calldata symbol,
    uint256 amount
  ) external override returns (bool) {
    return true;
  }

  function setup(bytes calldata params) external override {}

  function execute(bytes calldata input) external override {}

  function freezeToken(string calldata symbol) external override {}

  function unfreezeToken(string calldata symbol) external override {}

  function freezeAllTokens() external override {}

  function unfreezeAllTokens() external override {}

  function upgrade(
    address newImplementation,
    bytes32 newImplementationCodeHash,
    bytes calldata setupParams
  ) external override {}

  function sendToken(
    string calldata destinationChain,
    string calldata destinationAddress,
    string calldata symbol,
    uint256 amount
  ) external override {}
}
