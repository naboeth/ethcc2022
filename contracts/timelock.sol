// example timelock contract 
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

// set the variables: duration of the time lock and the end point 
contract TimelockCook {
  uint public constant duration = 7 days;
  uint public immutable end;
  address payable public immutable owner;

  // set the timelock, current point of time + the duration
  constructor(address payable _owner) {
    end = block.timestamp + duration;
    owner = _owner; 
  }

 // accept incoming ERC20 token
  function deposit(address token, uint amount) external {
    IERC20(token).transferFrom(msg.sender, address(this), amount);
  }

  receive() external payable {}

  // allow the owner (and only the owner) to withdraw the locked amount, assuming the time is over, otherwise error-message 
  function withdraw(address token, uint amount) external {
    require(msg.sender == owner, 'only owner');
    require(block.timestamp >= end, 'Your locking-time is not over yet');
    if(token == address(0)) { 
      owner.transfer(amount);
    } else {
      IERC20(token).transfer(owner, amount);
    }
  }
}


 //   modifier timerOver {
    //    require(now<=end), "Your time has ended");
    //    _;
    //}
    // give the time left in seconds
    //function getTimeLeft () public timerOver view returns(uint){
    //   return_end-now
    //}

 