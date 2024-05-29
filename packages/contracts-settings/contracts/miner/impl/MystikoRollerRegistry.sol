// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IMystikoRoller, CanDoRollupParams} from "../interfaces/IMystikoRoller.sol";
import {SettingsCenterErrors} from "../../SettingsCenterErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

contract MystikoRollerRegistry is IMystikoRoller, MystikoDAOAccessControl {
  bytes32 public constant ROLLER_ROLE = keccak256("MYSTIKO_ROLLER_ROLE");

  uint256 public minVoteTokenAmount;
  uint256 public minRollupSize;
  address public vXZK;

  event RollerMinVoteTokenAmountChanged(uint256 _amount);
  event MinRollupSizeChanged(uint256 _size);

  constructor(
    address _daoRegistry,
    address _vXZK,
    uint256 _minVoteTokenAmount
  ) MystikoDAOAccessControl(_daoRegistry) {
    minVoteTokenAmount = _minVoteTokenAmount;
    minRollupSize = 1;
    vXZK = _vXZK;
  }

  function canDoRollup(
    CanDoRollupParams calldata _params
  ) external view onlyHasRoleOrOpen(ROLLER_ROLE, _params.roller) returns (bool) {
    if (_params.rollupSize < minRollupSize) revert SettingsCenterErrors.RollupSizeTooSmall();
    if (IERC20(vXZK).balanceOf(_params.roller) < minVoteTokenAmount)
      revert SettingsCenterErrors.InsufficientBalanceForAction();

    return true;
  }

  function changeRollerMinVoteTokenAmount(uint256 _newMinVoteTokenAmount) external onlyMystikoDAO {
    if (minVoteTokenAmount == _newMinVoteTokenAmount) revert SettingsCenterErrors.NotChanged();
    minVoteTokenAmount = _newMinVoteTokenAmount;
    emit RollerMinVoteTokenAmountChanged(minVoteTokenAmount);
  }

  function changeMinRollupSize(uint256 _newMinRollupSize) external onlyMystikoDAO {
    if (minRollupSize == _newMinRollupSize) revert SettingsCenterErrors.NotChanged();
    minRollupSize = _newMinRollupSize;
    emit MinRollupSizeChanged(minRollupSize);
  }
}
