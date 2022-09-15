// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box1", function () {
  let box1:Contract;

  beforeEach(async function () {
    const Box1 = await ethers.getContractFactory("Box1")
    box1 = await Box1.deploy()
    await box1.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await box1.store(42)
    expect(await box1.retrieve()).to.equal(BigNumber.from('42'))

    await box1.store(100)
    expect(await box1.retrieve()).to.equal(BigNumber.from('100'))
  })
})