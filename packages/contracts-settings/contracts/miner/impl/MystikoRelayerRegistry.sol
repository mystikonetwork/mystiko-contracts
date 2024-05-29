// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IMystikoRelayer, CanDoRelayParams} from "../interfaces/IMystikoRelayer.sol";
import {SettingsCenterErrors} from "../../SettingsCenterErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

contract MystikoRelayerRegistry is IMystikoRelayer, MystikoDAOAccessControl {
  bytes32 public constant RELAYER_ROLE = keccak256("MYSTIKO_RELAYER_ROLE");

  uint256 public minVoteTokenAmount;
  address public vXZK;

  event RelayerMinVoteTokenAmountChanged(uint256 _amount);

  constructor(
    address _daoRegistry,
    address _vXZK,
    uint256 _minVoteTokenAmount
  ) MystikoDAOAccessControl(_daoRegistry) {
    minVoteTokenAmount = _minVoteTokenAmount;
    vXZK = _vXZK;
  }

  function canDoRelay(
    CanDoRelayParams calldata _params
  ) external view onlyHasRoleOrOpen(RELAYER_ROLE, _params.relayer) returns (bool) {
    if (IERC20(vXZK).balanceOf(_params.relayer) < minVoteTokenAmount)
      revert SettingsCenterErrors.InsufficientBalanceForAction();

    return true;
  }

  function changeRelayerMinVoteTokenAmount(uint256 _newMinVoteTokenAmount) external onlyMystikoDAO {
    if (minVoteTokenAmount == _newMinVoteTokenAmount) revert SettingsCenterErrors.NotChanged();
    minVoteTokenAmount = _newMinVoteTokenAmount;
    emit RelayerMinVoteTokenAmountChanged(minVoteTokenAmount);
  }
}
