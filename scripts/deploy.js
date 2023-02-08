const hre = require("hardhat"); //import the hardhat

async function main() {
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract

  console.log("Deploying contracts with the account:", deployer.address); 

  const FactoryNFT = await hre.ethers.getContractFactory("NFTBatchMinting"); // Getting the Contract
  const factoryNFT = await FactoryNFT.deploy("NFTBatchMinting", "NBM"); //deploying the contract
  

  await factoryNFT.deployed(); // waiting for the contract to be deployed

  console.log("FactoryNFT deployed to:", factoryNFT.address); // Returning the contract address on the rinkeby

  await hre.run("verify:verify", {
    address: factoryNFT.address,
    constructorArguments: [
      "NFTBatchMinting", 
      "NBM"
    ],
    libraries: {
      SomeLibrary: "0xa204446e1239879397f2860d6317E0914358d2fB",
    }
  });

  console.log("Smart contract verified successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); // Calling the function to deploy the contract 