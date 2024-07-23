// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {IERC20, ERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {ERC20Votes} from "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Votes.sol";
import {ERC20Wrapper} from "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Wrapper.sol";
import {Nonces} from "lib/openzeppelin-contracts/contracts/utils/Nonces.sol";

contract MockMystikoVoteToken is ERC20, ERC20Permit, ERC20Votes, ERC20Wrapper {
  constructor(
    IERC20 _xzk
  ) ERC20("Mystiko Vote Token", "vXZK") ERC20Permit("Mystiko Vote Token") ERC20Wrapper(_xzk) {}

  function clock() public view override returns (uint48) {
    return uint48(block.timestamp);
  }

  // solhint-disable-next-line func-name-mixedcase
  function CLOCK_MODE() public pure override returns (string memory) {
    return "mode=timestamp";
  }

  function decimals() public view override(ERC20, ERC20Wrapper) returns (uint8) {
    return super.decimals();
  }

  function nonces(address _owner) public view virtual override(ERC20Permit, Nonces) returns (uint256) {
    return super.nonces(_owner);
  }

  function _update(address _from, address _to, uint256 _amount) internal override(ERC20, ERC20Votes) {
    super._update(_from, _to, _amount);
  }
}
