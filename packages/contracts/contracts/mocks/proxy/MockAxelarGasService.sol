// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.26;

import "../../core/deposit/axelar/relay/IAxelarGasService.sol";
//import { IERC20 } from './IERC20.sol';
import {IERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

// This should be owned by the microservice that is paying for gas.
contract MockAxelarGasService is IAxelarGasService {
  // This is called on the source chain before calling the gateway to execute a remote contract.
  function payGasForContractCall(
    address sender,
    string calldata destinationChain,
    string calldata destinationAddress,
    bytes calldata payload,
    address gasToken,
    uint256 gasFeeAmount,
    address refundAddress
  ) external override {
    _safeTransferFrom(gasToken, msg.sender, gasFeeAmount);

    emit GasPaidForContractCall(
      sender,
      destinationChain,
      destinationAddress,
      keccak256(payload),
      gasToken,
      gasFeeAmount,
      refundAddress
    );
  }

  // This is called on the source chain before calling the gateway to execute a remote contract.
  function payGasForContractCallWithToken(
    address sender,
    string calldata destinationChain,
    string calldata destinationAddress,
    bytes calldata payload,
    string memory symbol,
    uint256 amount,
    address gasToken,
    uint256 gasFeeAmount,
    address refundAddress
  ) external override {
    {
      _safeTransferFrom(gasToken, msg.sender, gasFeeAmount);
    }

    emit GasPaidForContractCallWithToken(
      sender,
      destinationChain,
      destinationAddress,
      keccak256(payload),
      symbol,
      amount,
      gasToken,
      gasFeeAmount,
      refundAddress
    );
  }

  // This is called on the source chain before calling the gateway to execute a remote contract.
  function payNativeGasForContractCall(
    address sender,
    string calldata destinationChain,
    string calldata destinationAddress,
    bytes calldata payload,
    address refundAddress
  ) external payable override {
    if (msg.value == 0) revert NothingReceived();

    emit NativeGasPaidForContractCall(
      sender,
      destinationChain,
      destinationAddress,
      keccak256(payload),
      msg.value,
      refundAddress
    );
  }

  // This is called on the source chain before calling the gateway to execute a remote contract.
  function payNativeGasForContractCallWithToken(
    address sender,
    string calldata destinationChain,
    string calldata destinationAddress,
    bytes calldata payload,
    string calldata symbol,
    uint256 amount,
    address refundAddress
  ) external payable override {
    if (msg.value == 0) revert NothingReceived();

    emit NativeGasPaidForContractCallWithToken(
      sender,
      destinationChain,
      destinationAddress,
      keccak256(payload),
      symbol,
      amount,
      msg.value,
      refundAddress
    );
  }

  function collectFees(address payable receiver, address[] calldata tokens) external override {
    for (uint256 i; i < tokens.length; i++) {
      address token = tokens[i];

      if (token == address(0)) {
        receiver.transfer(address(this).balance);
      } else {
        uint256 amount = IERC20(token).balanceOf(address(this));
        _safeTransfer(token, receiver, amount);
      }
    }
  }

  function refund(address payable receiver, address token, uint256 amount) external override {
    if (token == address(0)) {
      receiver.transfer(amount);
    } else {
      _safeTransfer(token, receiver, amount);
    }
  }

  function _safeTransfer(address tokenAddress, address receiver, uint256 amount) internal {
    (bool success, bytes memory returnData) = tokenAddress.call(
      abi.encodeWithSelector(IERC20.transfer.selector, receiver, amount)
    );
    bool transferred = success && (returnData.length == uint256(0) || abi.decode(returnData, (bool)));

    if (!transferred || tokenAddress.code.length == 0) revert TransferFailed();
  }

  function _safeTransferFrom(address tokenAddress, address from, uint256 amount) internal {
    (bool success, bytes memory returnData) = tokenAddress.call(
      abi.encodeWithSelector(IERC20.transferFrom.selector, from, address(this), amount)
    );
    bool transferred = success && (returnData.length == uint256(0) || abi.decode(returnData, (bool)));

    if (!transferred || tokenAddress.code.length == 0) revert TransferFailed();
  }

  function contractId() public pure returns (bytes32) {
    return keccak256("axelar-gas-service");
  }
}
