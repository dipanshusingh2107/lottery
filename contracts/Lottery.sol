//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.7;
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Lottery is VRFConsumerBase{
    uint256 public lotteryNumber = 0;
    mapping (uint256 => address) public lotteryHolder;
    uint256 public deadline;
    bytes32 internal keyHash;
    uint256 internal fee;
    address private owner;
    uint256 public winner;

    constructor() 
        VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator KOVAN
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token KOVAN
        )
    {
        deadline = block.timestamp + (1 hours);
        owner = msg.sender;
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18; // 0.1 LINK (Varies by network 0.1 is on kovan)
    }

    function enterLottery()public payable returns (uint256)
    {
        require(msg.value == 0.1 ether ,"Send exactly 0.1 Ether");
        require(block.timestamp <=deadline ,"Time is Up");
       
        lotteryHolder[lotteryNumber] = msg.sender;
        lotteryNumber+=1;

        return lotteryNumber-1;
    }

    function selectWinner()public returns (address)
    {
        require(msg.sender == owner);
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        requestRandomness(keyHash, fee);

        return lotteryHolder[winner];
    }

    function fulfillRandomness(bytes32 , uint256 randomness) internal override {
        winner = randomness % lotteryNumber;
    }

    function getLotteryNumber() public view returns (uint256)
    {
        return lotteryNumber;
    }

    function getWinner() public view returns (uint256)
    {
        return winner;
    }

    function getOwner() public view returns (address)
    {
        return owner;
    }

}