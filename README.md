Initial commands:
=> npm init
=> npm install hardhat
=> npx hardhat
=> yarn

Then install these Modules:
=> yarn add @nomiclabs/hardhat-ethers
=> yarn add @openzeppelin/hardhat-upgrades

Run hardhat node and this shall not stop:
=> npx hardhat node

Open parallel terminal and run the script to deploy the smart contract:
=> npx hardhat run --network localhost scripts/Box-script.ts

Copy the contract address and comment it in the contrac file.
open the hardhat console:
=> hardhat console --network localhost

Create const of the contract to use its functions:
=> const Box = await ethers.getContractFactory("Box");
=> const box = await Box.attach('//paste contract address here');

Now you call the functions of the deployed smart contracts, for example:
=> (await box.retrieve()).toString();

Now you want to deploy the updated contract with some new functionalities.
Write the script of the contract and add the address of the previous contract there.

Then run the script of the second contract:
=> npx hardhat run --network localhost scripts/Box1-script.ts

open the hardhat console:
=> hardhat console --network localhost

Create const of the contract to use its functions:
=> const Box1 = await ethers.getContractFactory("Box1");
=> const box1 = await Box1.attach('//paste contract address here');

Now you can use the new functionality added in the second contract, for example:
=> await box1.increment();

Now you can do this method again and again and update the contract whenever you want to and the contract address will remain the same.
You can also follow the documentation of this article:
https://dev.to/yakult/tutorial-write-upgradeable-smart-contract-proxy-contract-with-openzeppelin-1916
