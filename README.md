# Cook at home @EthCChack

**This DApp aims to motivate people to cook for themselves instead of ordering food** 

**Lock some ETH and bet with yourself! If you submit a photo of your home-cooked meal, you get your ETH back. If you don't, your stake will be donated.**

The project was built during the EthCC Hackathon 2022. 

### Inspiration / Idea 

_"About 17% of global food production may go wasted, according to the UN Environment Programme's (UNEP) Food Waste Index Report 2021, with 61% of this waste coming from households."_

Time and time again we hear tales from the busy tech worker who in a moment of hopeful delusion buys 
a cart full of groceries on a Sunday only to reach the following weekend with a fridge full of rotten food and a sizeable Uber Eats bill. 

Thinking about how we could creatively combat food waste in web3, our team arrived at cook3: a dApp that helps to incentivize home cooking.

Cooking is a form of self-care: You can take time for yourself or nourish your friends. However, many people tend to order food or go to eat outside, even though they would like to cook more often for themselves. Our DApps gives you a reason to do so: 
- It's cheaper
- Better for the environment
- You can build up your cooking skills
- You get to improve both your health and mental health!

### What it does

In a "bet with yourself" manner, users can deposit an amount of ETH in our DApp: Then they'll have one week to upload a valid photo of a plate they cooked. We ensure the photo is taken by the user by providing a random-generated code to write down and put it on the photo _(we didn't manage to implement the code generation and the photo verification for this Hackathon, but we would have liked to use an AI to check the validity of the code and the meal on the photos later)._

If the user does not upload a valid photo in time, their stake remains in the contract and will later be donated to a charity. 

### Walkthrough
1. **Connect your MetaMask wallet** on the preferred chain 
2. **Choose a stake:** We currently offer 0.005 ETH, 0.01 ETH or 0.02 ETH (about $7, $15 or $30 at the moment) and sign a transaction to deposit the amount to the smart contract
3. You will get a randomly generated 6-digit **code to write down on a piece of paper** 
4. From this point of time, you have **1 week to cook a meal for yourself**. If you do so, make a picture of the meal and put the paper with the code next to it
5. Go back to our DApp and **load up your photo**. Then you will be able to returned your stake
6. When the week is over, but no photo has been uploaded, you lose your stake. We will collect the stakes and **donate them to charity**

### Resources

- Presentation of the idea: https://www.canva.com/design/DAFHOlnkWrQ/nhw1ovnoRdbuAJ3Hxn_KkA/view?utm_content=DAFHOlnkWrQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
- Deployed networks (contract addresses): 
 Ropsten (0x458d9cD3F0f9A7A9AA31C5A5Ace17515fD52990e)
 Polygon mumbai testnet (0x9A11dDB3336FDb7052b0399b065eea1Fc2f2C37D)
 Cronos testnet (0x9A11dDB3336FDb7052b0399b065eea1Fc2f2C37D)
 Neon testnet (0x67a520C359bc6ec8C4224dcB0D79426398BF93D8)
 Celo Alfajores testnet (0x9A11dDB3336FDb7052b0399b065eea1Fc2f2C37D)


### How we built it

- The DApp was built on Ethereum with Truffle/Ganache and Infura 
- The contracts are written in Solidity, while the front-end relys on HTML/CSS/JS
- We deployed the contracts to several test chains: Ropsten, Polygon, Cronos, Neon and Celo
- We tried to implement a time lock funtion in our contract to time the seven days to submit a photo (we did not manage to implement it in the front-end properly)
- Function to generate a random code by using blockchain-data (we did not manage to implement it in the front-end properly)

### Challenges we ran into

- Punishment or incentivization: How do we motivate most and would a user like to deposit actual money? 
- Simplicity: We had a lot if ideas around the goal to motivate people cooking for themselves, but due to the limited time and programming experience, they had to be put on the roadmap 
- Front-end: We had to remind ourselves to stay really simple
- Back-end: The Difference between depositing money into a smart contract and an account, implementing the time lock function / code generating and enspecially linking it on the front-end 
- Verification/Proof-of-Cook: Creating randomness for generating a random code on-block is really difficult. It is actually better and more secure to do it off-chain and call it on the blockchain. But our security is not based on how difficult it is to find out the code, the AI recognition and verification method of taking both the meal and handwritten code are enough to ensure solid anti-fraud measures.

### Accomplishments that we're proud of

- We're all web3 development beginners, so our primary goal was to learn and gain experiences, we definitely achieved that
- We have come up with a model on how to motivate people to better take care of themselves through home cooking 
- We grew together as a team and met a lot of inspiring people who gave feedbacks on the idea

### What we learned

- Divide tasks and make a schedule
- Presenting our project to others 
- How to put data on IPFS/Filecoin (we tried it for the photo upload)
- Use truffle as a testing/deployment framework and deploy on different chains
- Research on how to implement random-number generation / time lock functions in Solidity 

### Roadmap

**Photo verification**
To make sure, the uploaded photo is a valid one (people actually cooked the meal by themselves), we will have to implement a verification mechanism: 
- We use a simple code generator and ask people to handwrite the code and take a picture of both the meal and the code written. An AI will also detect and find out if the code is the one sent to the user.
- AI detection and recognition of the meal to compare it with original pictures from the recipe owners
- EFIX, IPTC and XMP metadata of pictures to verify the picture origin and characteristics (+ check for any editing/photoshopping)

These verification steps should ensure a satisfactory amount of fraud detection.

**Cook-to-earn**
For incentivization (in addition to the locked ETH), we could implement some reward mechanisms:
- Transform your picture into an NFT, so you can create an "NFT meal series" 
- Mint a free recipe NFT for cooking a meal (special NFTs for regular users, for ex. cook 4 weeks in a row), the NFTs are created by professional chefs or honorable amateurs
- Prize pool: Redistribute a share of the stakes from the users who failed to cook to the ones who succeeded for incentivization (get an additional amount of ETH back, depending on the "cooking success" rate)


**Social good**
- Provide a set of charities with a little description, where users can decide in advance, which one the would donate to in case they don't succeed to cook
- Make the donations transparent on the blockchain to ensure they reach the charity 


**Building a web3 cooking community**
- Show-off your NFT- meals: Create a photo and recipe gallery, where users can vote for the best ones
- Eventually even create a DAO around  blockchain & cooking enthusiasts 
- Database of original recipes, ingredient lists, cooking instructions, etc.


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

8. If this doesn't work, try to open the "index.html" file with live server

