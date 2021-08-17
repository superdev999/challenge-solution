truffle compile 
truffle migrate --network rinkeby || truffle migrate --network main

// to get the total ethers in smart contract
cd main/
node getTotalEthers.js
