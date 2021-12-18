const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Enter Lottery Test" , ()=>{
    let lottery;
    
    before(async ()=>{
       let Lottery = await ethers.getContractFactory("Lottery");
       lottery = await Lottery.deploy();
       lottery.deployed();
    });

    it("checking if lottery is increasing",async()=>{
        await lottery.enterLottery({value:ethers.utils.parseEther("0.1")});
        expect(await lottery.getLotteryNumber()).to.equal(1);
        await lottery.enterLottery({value:ethers.utils.parseEther("0.1")});
        expect(await lottery.getLotteryNumber()).to.equal(2);
    });

    it("checking owner" , async()=>{
        [owner] = await ethers.getSigners();
        expect(await lottery.getOwner()).to.equal(owner.address);
    });

    it("checking revert if less or more ether is send",async()=>{
        await expect(lottery.enterLottery({value:ethers.utils.parseEther("0.01")})).to.be.revertedWith('Send exactly 0.1 Ether');
        await expect(lottery.enterLottery({value:ethers.utils.parseEther("0.11")})).to.be.revertedWith('Send exactly 0.1 Ether');
    });
    
    it("checking others can't declare result", async()=>{

        [owner , add2] = await ethers.getSigners();
        await expect(lottery.connect(add2).selectWinner()).to.be.reverted;
    });
    
});
