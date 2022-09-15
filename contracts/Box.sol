// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity <=0.8.4;

contract Box {
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
}

//0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
