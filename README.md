# Cook at home @EthCChack

**This DApp aims to motivate people to cook for themselves instead of ordering food** - **Lock some ETH and bet with yourself! If you submit a photo of your home-cooked meal, you get yout ETH back. If you don't, your stake will be donated.**

The project was built during the EthCC Hackathon 2022. 

### Inspiration / Idea 

We want to create a dApp that is focused on crypto-incentives with a "Cook-to-Earn" mindset. The more you cook, the more you earn. In this dApp we ask people to cook their own meals at home in exchange for a little cryptocurrencies. The goal is to use blockchain technology to ensure transparency, trust and traceability while encouraging people to have healthier diets and living habits, and share the love for great food.

### What it does

We will use smart contracts timelocks.

On top of that, if someone fails to cook a meal, the incentive can go to a food sustainability or hunger-fighting NGO.

### Walktrough
1. 
2. 

### Resources

- Link to the DApp: [https://github.com/naboeth/ethcc2022](https://github.com/naboeth/ethcc2022) (you will have to switch to the rinkeby testnet to connect your wallet and have some rinkeby test ether, you can get some here: [https://rinkebyfaucet.com/](https://rinkebyfaucet.com/))
- Recorded video using the DApp: 
- Presentation of the idea: 
- Deployed contracts: 

### How we built it

### Challenges we ran into

### Accomplishments that we're proud of

### What we learned

### Roadmap

(We can use DAO for cooking competition with people voting for the best meal picture)***
(We could later support blockhain-based supply chain management retailers that could provide the ingredients)***

Recipes come from professional cooks or honorable amateurs that put their receipes as NFTs on the dApp. (People can buy the NFT recipes)***
We have a database of original recipes, ingredient lists, cooking instructions, pictures, etc.

In order to verify that people actually cook and eat their meals from home, we use:
- AI detection and recognition of the meal to compare it with original pictures from the recipe owners
- EFIX, IPTC and XMP metadata of pictures to verify the picture orginin and characteristics (+ check for any editing/photoshoping)
- We use a simple code generator and ask people to handwrite the code and take a picture of both the meal and the code written. An AI will also detect and find out if the code is the one sent to the user.

We believe thoss three verification steps should ensure a satisfactory amount of fraud detection.

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



