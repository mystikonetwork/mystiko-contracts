// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract MockDaoRegistry {
  address public dao;

  constructor() {
    dao = msg.sender;
  }
}
