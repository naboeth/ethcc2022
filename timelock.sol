pragma solidity ^0.5.0;

contract ourTimeLock {

    // receiver of ETH after it is released
    address payable public receiver;

    // timestamp when ETH release is enabled
    uint256 public releaseTime;
    
    // accept incoming ETH
    function () external payable {}

    constructor (address payable _receiver, uint256 _releaseTime) public {
        require(_releaseTime > block.timestamp, "release time is before current time");
        receiver = _receiver;
        releaseTime = _releaseTime;
    }

    // transfers ETH held by timelock to receiver.
    function release() public {
        require(block.timestamp >= releaseTime, "current time is before release time");

        uint256 amount = address(this).balance;
        require(amount > 0, "no ETH to release");

        receiver.transfer(amount);
    }
}