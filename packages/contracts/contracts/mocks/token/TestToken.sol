// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
  uint8 tokenDecimals;

  constructor(string memory _name, string memory _symbol, uint8 _decimals) ERC20(_name, _symbol) {
    tokenDecimals = _decimals;
    _mint(msg.sender, 1000000000 * (10 ** uint256(_decimals)));
  }

  function decimals() public view override returns (uint8) {
    return tokenDecimals;
  }
}
