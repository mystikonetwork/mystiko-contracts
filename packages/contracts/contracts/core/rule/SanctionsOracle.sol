pragma solidity ^0.8.7;

import "../../libs/common/CustomErrors.sol";

contract SanctionsOracle {
  address private operator;

  mapping(address => bool) private sanctionedAddresses;

  event OperatorChanged(address indexed operator);
  event SanctionedAddress(address indexed addr);
  event NonSanctionedAddress(address indexed addr);
  event SanctionedAddressesAdded(address[] addrs);
  event SanctionedAddressesRemoved(address[] addrs);

  modifier onlyOperator() {
    if (msg.sender != operator) revert CustomErrors.OnlyOperator();
    _;
  }

  constructor() {
    operator = msg.sender;
  }

  function changeOperator(address _newOperator) external onlyOperator {
    if (operator == _newOperator) revert CustomErrors.NotChanged();
    operator = _newOperator;
    emit OperatorChanged(_newOperator);
  }

  function name() external pure returns (string memory) {
    return "Mystiko sanctions oracle";
  }

  function addToSanctionsList(address[] memory newSanctions) public onlyOperator {
    for (uint256 i = 0; i < newSanctions.length; i++) {
      sanctionedAddresses[newSanctions[i]] = true;
    }
    emit SanctionedAddressesAdded(newSanctions);
  }

  function removeFromSanctionsList(address[] memory removeSanctions) public onlyOperator {
    for (uint256 i = 0; i < removeSanctions.length; i++) {
      sanctionedAddresses[removeSanctions[i]] = false;
    }
    emit SanctionedAddressesRemoved(removeSanctions);
  }

  function isSanctioned(address addr) public view returns (bool) {
    return sanctionedAddresses[addr] == true;
  }

  function isSanctionedVerbose(address addr) public returns (bool) {
    if (isSanctioned(addr)) {
      emit SanctionedAddress(addr);
      return true;
    } else {
      emit NonSanctionedAddress(addr);
      return false;
    }
  }
}
