# Lottery System 
This is a smart contract that use chain link VRF to randomly genrate the winner.
The contract is valid for 1 hour from the time it was created
Only the owner {aka who published the contract} can call the function to declare the winner.
Test too are written to test the contract.
The contract can be deployed using the command
```shell
npx hardhat run scripts/deploy.js 
```

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
npx hardhat verify
```

npx hardhat verify is an etherscan plugin need to be installed separetly 