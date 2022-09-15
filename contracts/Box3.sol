// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity <=0.8.4;

contract Box3 {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

    function increment() public {
        value = value + 1;
    }

    function decrement() public {
        value = value - 1;
    }

    function sum(uint256 _a) public view returns (uint256) {
        return value + _a;
    }
}