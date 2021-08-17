var mnemonic = "Your 12 words Passphrase here";
var HDWalletProvider = require('truffle-hdwallet-provider');
var { constants } = require("./enum/constants");

module.exports = {
  compilers: {
    solc: {
      version: "^0.8.0", // A version or constraint - Ex. "^0.5.0"
    }
  },
  networks: {
    rinkeby: {
        provider: function() { 
         return new HDWalletProvider(mnemonic, constants.rinkeby);
        },
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
    },
    main: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, constants.main);
      },
      network_id: 1,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: 'Your etherscan API here'
  },
};
