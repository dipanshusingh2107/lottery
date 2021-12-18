const hre = require("hardhat"); //optional needed if using node
require('dotenv').config();

main = async ()=> {
    const accounts = await ethers.provider.listAccounts();
    const account = accounts[0];
    const address = process.env.CONTRACT_ADDRESS;
    
   
    //const Lottery = await ethers.getContractFactory('Lottery');
    //const lottery = await Lottery.attach("0x8A9265E3d1b142F8e15187A04970E3eE14AFE693");
    //const lottery = await hre.ethers.getContractAt("Lottery", address);
    //const lottery = new ethers.Contract(Lottery, Lottery.interface, accounts[0]);


    //lotteryNumber = (await lottery.enterLottery()).toString();
    //console.log(`Your Lottery number is ${lotteryNumber}`);

}


main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
