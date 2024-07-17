// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {IMystikoRelayerPool, RelayerValidateParams} from "./interfaces/IMystikoRelayerPool.sol";
import {MystikoRelayerErrors} from "./MystikoRelayerErrors.sol";
import {MystikoDAOAccessControl} from "lib/mystiko-governance/packages/contracts/contracts/MystikoDAOAccessControl.sol";

contract MystikoRelayerPool is IMystikoRelayerPool, MystikoDAOAccessControl {
  bytes32 public constant RELAYER_ROLE = keccak256("MYSTIKO_RELAYER_ROLE");

  uint256 public minVoteTokenAmount;
  address public vXZK;

  event RelayerMinVoteTokenAmountChanged(uint256 _amount);

  constructor(
    address _daoRegistry,
    address _vXZK,
    uint256 _minVoteTokenAmount
  ) MystikoDAOAccessControl(_daoRegistry) {
    vXZK = _vXZK;
    minVoteTokenAmount = _minVoteTokenAmount;
    _grantRole(RELAYER_ROLE, address(0));
  }

  function validateRelayer(
    RelayerValidateParams calldata _params
  ) external view onlyHasRoleOrOpen(RELAYER_ROLE, _params.relayer) returns (bool) {
    if (minVoteTokenAmount > 0 && IERC20(vXZK).balanceOf(_params.relayer) < minVoteTokenAmount)
      revert MystikoRelayerErrors.InsufficientBalanceForAction();

    return true;
  }

  function setRelayerMinVoteTokenAmount(uint256 _newMinVoteTokenAmount) external onlyMystikoDAO {
    if (minVoteTokenAmount == _newMinVoteTokenAmount) revert MystikoRelayerErrors.NotChanged();
    minVoteTokenAmount = _newMinVoteTokenAmount;
    emit RelayerMinVoteTokenAmountChanged(_newMinVoteTokenAmount);
  }
}
