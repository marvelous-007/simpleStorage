import { ethers } from "hardhat";

async function main() {
  const Web3 = require("web3");
  const web3 = new Web3(
    "https://eth-mainnet.g.alchemy.com/v2/M8sB5u6bNh7yEEFzYUV9dhtTOT34yPlX"
  );

  const UniSwap = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
  const Dai = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const Matic = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
  const DAO = "0x0f51bb10119727a7e5eA3538074fb341F56B09Ad";

  const UniSwapValue = await web3.eth.getStorageAt(UniSwap, 3);
  console.log(`UniSwap Value: ${UniSwapValue}`);

  const DaiValue = await web3.eth.getStorageAt(Dai, 1);
  console.log(`Dai Value: ${DaiValue}`);

  const MaticValue = await web3.eth.getStorageAt(Matic, 5);
  console.log(`Matic Value: ${MaticValue}`);

  const DAOValue = await web3.eth.getStorageAt(DAO, 5);
  console.log(`DAO Value: ${DAOValue}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
