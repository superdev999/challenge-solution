exports.constants = {
  main:
    process.env.MAIN ||
    "https://mainnet.infura.io/v3/739f9306b4c241c7b0eb163694cea5fb",
  rinkeby:
    process.env.RINKEBY ||
    "https://rinkeby.infura.io/v3/739f9306b4c241c7b0eb163694cea5fb",
  contractAddress_rinkeby:
    process.env.CONTRACT_ADDRESS_RINKEBY ||
    "0x865839b1EaB039D4b673f327807EBb5036C3e03d",
  contractAddress_main:
    process.env.CONTRACT_ADDRESS_MAIN ||
    "0x865839b1EaB039D4b673f327807EBb5036C3e03d",
};
