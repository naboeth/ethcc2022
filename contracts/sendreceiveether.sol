// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SendReceive {
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, bytes memory data) = _to.call{value: 100000000000000}("");
        require(sent, "Failed to send Ether");
    }
}
