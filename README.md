# Cook at home @EthCChack

**This DApp aims to motivate people to cook for themselves instead of ordering food** 

**Lock some ETH and bet with yourself! If you submit a photo of your home-cooked meal, you get your ETH back. If you don't, your stake will be donated.**

The project was built during the EthCC Hackathon 2022. 

### Inspiration / Idea 

// -> completed by Suzanne

Cooking is a form of self-care: You can take time for yourself or nourish your friends. However, many people tend to order food or go to eat outside, even though they would like to cook more often for themselves. Our DApps gives you a reason to do so: 
- It's cheaper
- Better for the environment
- Improve your cooking skills

*We want to create a dApp that is focused on crypto-incentives with a "Cook-to-Earn" mindset. The more you cook, the more you earn. In this dApp we ask people to cook their own meals at home in exchange for a little cryptocurrencies. The goal is to use blockchain technology to ensure transparency, trust and traceability while encouraging people to have healthier diets and living habits, and share the love for great food.*

### What it does

In a "bet with yourself" manner, users can deposit an amount of ETH in our DApp: Then they'll have one week to upload a valid photo of a plate they cooked. We ensure the photo is taken by the user by providing a random-generated code to write down and put it on the photo (we didn't manage to implement it for this Hackathon, but we would like to use an AI to check the validity of the code on the photos later). 

If the user does not upload a valid photo in time, their stake remains in the contract and will later be donated to a charity. 

### Walkthrough
1. _Connect your MetaMask wallet_ on the preferred chain 
2. _Choose a stake:_ We currently offer 0.005 ETH, 0.01 ETH or 0.02 ETH (about $7, $15 or $30 at the moment) and sign a transaction to deposit the amount to the smart contract
3. You will get a randomly generated 6-digit _code to write down on a piece of paper_ 
4. From this point of time, you have _1 week to cook a meal for yourself_. If you do so, make a picture of the meal and put the paper with the code next to it
5. Go back to our DApp and _load up your photo_. Then you will be able to returned your stake
6. When the week is over, but no photo has been uploaded, you lose your stake. We will collect the stakes and _donate them to charity_

### Resources

- _Link to the DApp: [https://github.com/naboeth/ethcc2022](https://github.com/naboeth/ethcc2022) (you will have to switch to the rinkeby testnet to connect your wallet and have some rinkeby test ether, you can get some here: [https://rinkebyfaucet.com/](https://rinkebyfaucet.com/))_
- _Recorded video using the DApp:_ 
- _Presentation of the idea:_
- _Deployed contracts:_

### How we built it

- The DApp was built on Ethereum with Truffle/Ganache and Infura 
- _We deployed the contracts to several chains:_  
- We implemented a time lock funtion in our contract (which counts Ethereum blocks) to time the seven days to submit a photo 
- Built-in function to generate a random code by using blockchain-data 
- The photos are uploaded to IPFS/Filecoin 

### Challenges we ran into

- Punishment or incentivization: How do we motivate most and would a user like to deposit actual money? 
- Simplicity: We had a lot if ideas around the goal to motivate people cooking for themselves, but due to the limited time and programming experience, they had to be put on the roadmap 
- Front-end: We had to remind ourselves to stay really simple
- Back-end: The Difference between depositing money into a smart contract and an account, implement the time lock function / code generating and implement it on the front-end 

### Accomplishments that we're proud of

- We're all web3 development beginners, so our primary goal was to learn and gain experiences, we definitely achieved that
- We have come up with a model on how to motivate people to better take care of themselves through home cooking 
- We grew together as a team and met a lot of inspiring people who gave feedback on the idea

### What we learned

- 

### Roadmap

**Photo verification**
AT to check the validity 
In order to verify that people actually cook and eat their meals from home, we use:
- AI detection and recognition of the meal to compare it with original pictures from the recipe owners
- EFIX, IPTC and XMP metadata of pictures to verify the picture orginin and characteristics (+ check for any editing/photoshoping)
- We use a simple code generator and ask people to handwrite the code and take a picture of both the meal and the code written. An AI will also detect and find out if the code is the one sent to the user.

We believe thoss three verification steps should ensure a satisfactory amount of fraud detection.

**Cook-to-earn**
Further inventivization 
(NFTs and stuff, recipees)
Recipes come from professional cooks or honorable amateurs that put their receipes as NFTs on the dApp. (People can buy the NFT recipes)***
We have a database of original recipes, ingredient lists, cooking instructions, pictures, etc.

prize pool: redistribute the stakes from the users who failed to cook to the ones who suceeded for incentivization 

**Social good**
decide for the charitiy, collected money: make the money flow traceable for tranparency 


**Building a web3 cooking community**
(We can use DAO for cooking competition with people voting for the best meal picture)***
(We could later support blockhain-based supply chain management retailers that could provide the ingredients)***

photo and recipee gallery, show-off your meals, maybe post them on a decentralized social network like lens 



## How to run the DApp locally using truffle/ganache:

1. Clone the repository

2. Install truffle with (make sure you have NodeJS v12 or later)

```
npm install -g truffle
```

3. Install ganache GUI https://trufflesuite.com/ganache/ or CLI via

```
npm install -g ganache-cli
```

4. Start ganache and make sure, you have the right "host" declared in your "truffle.config" file

5. Run

```
npm install
```

6. To compile and migrate the contracts, run

```
truffle compile
truffle migrate
```

7. Then start the DApp via

```
npm run dev
```

8. If this doesn't work, try to open the "index.html" file with live server.



