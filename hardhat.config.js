require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      }
    },
    kovan:{
      url:"https://kovan.infura.io/v3/3d5f1f5e55d74ee8ba3b04c3b36f1da6",
      accounts:[process.env.PRIVATE_KEY],
      gas:"auto",
      gasPrice:"auto"
    }
  },
  solidity: "0.8.7",
  etherscan:
  {
    apiKey: process.env.ETHERSCAN_KEY
  }
};
