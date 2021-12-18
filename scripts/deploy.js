const hre = require("hardhat"); //optional

main = async ()=>{
    const Lottery = await hre.ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy();

    await lottery.deployed(); //why this ?? 

    console.log("Lottery deployed to:", lottery.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
