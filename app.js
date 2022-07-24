async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

//contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
contractAddress = "0x6884a59bC003dEd64145BCec9b497D6587511702";

ABI = [
  {
    inputs: [],
    name: "randCode",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "randomNb",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "code",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function loadContract() {
  return await new window.web3.eth.Contract(ABI, contractAddress);
}

async function load() {
  await loadWeb3();
  window.contract = await loadContract();
}

async function getCurrentAccount() {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  console.log(accounts);
  return accounts[0];
}

async function sendPayment() {
  const account = await getCurrentAccount();
  const amount = "0.0032"; //only fixed amount at the moment
  const amountToSend = "3200000000000000";
  //const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
  await ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: account,
        to: "0x0db9B8cD2D71F34c0e22b51850d93ffb8e1dCD4E",
        value: amountToSend,
      },
    ],
  });
  console.log("Payment sent");
}

async function refund() {
  const account = await getCurrentAccount();
  const amount = "0.0032"; //only fixed amount at the moment
  const amountToSend = "32000000";
  //const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
  await ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: account,
        to: "0x5F64B66A19293436F5f2FcdEf0f40CCE19681293",
        value: amountToSend,
      },
    ],
  });
  console.log("Payment sent");
}

load();

async function printCode() {
  console.log("reading");
  const code = await window.contract.methods.randCode().call();
  console.log("code generated");
  console.log(code);
  return code; //ist eine integer bspw 667788
}

const element = document.getElementById("generateBtn");
element.addEventListener("click", myFunction);

async function myFunction() {
  document.getElementById("text").innerHTML = await printCode();
}
