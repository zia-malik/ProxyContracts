import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {

  const Box2 = await ethers.getContractFactory("Box2")
  console.log("Box1 is upgrading...")
  await upgrades.upgradeProxy(
    '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
    Box2
    )
  console.log("Box1 is upgraded to Box2 successfully...")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})