// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box3", function () {
  let box3:Contract;

  beforeEach(async function () {
    const Box3 = await ethers.getContractFactory("Box")
    box3 = await Box3.deploy()
    await box3.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await box3.store(42)
    expect(await box3.retrieve()).to.equal(BigNumber.from('42'))

    await box3.store(100)
    expect(await box3.retrieve()).to.equal(BigNumber.from('100'))
  })
})