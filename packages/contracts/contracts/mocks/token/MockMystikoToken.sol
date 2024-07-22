// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MockMystikoToken is ERC20, ERC20Permit {
  constructor() ERC20("Mystiko Token", "XZK") ERC20Permit("Mystiko Token") {
    _mint(msg.sender, 1000 * 1000 * 1000 * (10 ** decimals()));
  }
}
