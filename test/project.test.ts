// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import path from "path";

import { UniswapV2Deployer } from "../src/UniswapV2Deployer";

import { useEnvironment } from "./helpers";

describe("Integration Tests", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    it("Should add extension UniswapV2Deployer", function () {
      assert.instanceOf(this.hre.UniswapV2Deployer, UniswapV2Deployer);
    });
  });
});

describe("Unit Tests", function () {
  describe("UniswapV2Deployer", function () {
    describe("deploy", function () {
      useEnvironment("hardhat-project");

      it("Should deploy WETH9", async function () {
        const [signer] = await this.hre.ethers.getSigners();
        const deployer = new UniswapV2Deployer();
        const { weth9 } = await deployer.deploy(signer);
        assert.equal(await weth9.name(), "Wrapped Ether");
      });

      it("Should deploy Factory", async function () {
        const [signer] = await this.hre.ethers.getSigners();
        const deployer = new UniswapV2Deployer();
        const { factory } = await deployer.deploy(signer);
        assert.equal(await factory.feeToSetter(), signer.address);
      });
    });
  });
});
