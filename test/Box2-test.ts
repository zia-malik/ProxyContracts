// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box2", function () {
  let box2:Contract;

  beforeEach(async function () {
    const Box2 = await ethers.getContractFactory("Box2")
    box2 = await Box2.deploy()
    await box2.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await box2.store(42)
    expect(await box2.retrieve()).to.equal(BigNumber.from('42'))

    await box2.store(100)
    expect(await box2.retrieve()).to.equal(BigNumber.from('100'))
  })
})