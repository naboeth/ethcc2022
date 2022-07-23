async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }
  }


  async function loadContract() {
    return await new window.web3.eth.Contract(ABI, contractAddress);
  }
  
  async function load() {
    await loadWeb3();
    window.contract = await loadContract();
  }


async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    console.log(accounts);
    return accounts[0];
}

async function sendPayment() {
    //is not the sendPayment function of the smart contract
    updateStatus("Sending out payment");
    const account = await getCurrentAccount();
    const amount = "0.0005"; //only fixed amount at the moment
    const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
    await web3.eth.sendTransaction({
      from: account,
      to: "0x0db9B8cD2D71F34c0e22b51850d93ffb8e1dCD4E", //copy paste smart contract address here later
      //to: CONTRACT.options.address, //no idea how to instantiate the contract object in a variable
      value: amountToSend,
    });



            async function donate() {
                //is not the sendPayment function of the smart contract
                updateStatus("Sending out payment");
                const account = await getCurrentAccount();
                const amount = "0.00005"; //only fixed amount at the moment
                const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
                await web3.eth.sendTransaction({
                  from: account,
                  to: "0x0db9B8cD2D71F34c0e22b51850d93ffb8e1dCD4E", //copy paste smart contract address here later
                  //to: CONTRACT.options.address, //no idea how to instantiate the contract object in a variable
                  value: amountToSend,
                });
