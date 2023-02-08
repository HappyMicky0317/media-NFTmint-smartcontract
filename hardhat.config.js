
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    avalanche: {
      url: "https://avalanche-fuji.infura.io/v3/648a641c48a44133b4bcea795725aa68", //Infura url with projectId
      accounts: ["0xf4c3b0cb78e521829b0fc5b1bf654f4849bad8b9908a620e62b0bc7ae6f130b0"] // add the account that will deploy the contract (private key)
     },
   }, 
   etherscan: {
    apiKey: "ABCDE12345ABCDE12345ABCDE123456789",
  },
};
