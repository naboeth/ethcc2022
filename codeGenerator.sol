pragma solidity ^0.8.0;

contract Sandbox {

    uint public code;

    function randomNb () public returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % 899999;
    }

    function randCode () public returns (uint) {
        code = 100000 + randomNb();
        return code;
    }
 
}
