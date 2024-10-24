// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.26;

import {ERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MockTestToken is ERC20, ERC20Permit {
  uint8 private _decimal = 18;

  constructor(string memory symbol, uint8 decimal) ERC20("Mystiko Test Token", symbol) ERC20Permit("Mystiko Test Token") {
    _decimal = decimal;
    _mint(msg.sender, 1000 * 1000 * 1000 * (10 ** _decimal));
  }

  function decimals() public view override returns (uint8) {
    return _decimal;
  }
}
