// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MockDaoRegistry {
  address public dao;

  constructor() {
    dao = msg.sender;
  }
}
