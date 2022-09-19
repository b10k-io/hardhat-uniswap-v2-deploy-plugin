// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import path from "path";

import { UniswapV2Deployer } from "../src/UniswapV2Deployer";

import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the UniswapV2Deployer to hre", function () {
      assert.instanceOf(
        this.hre.UniswapV2Deployer,
        UniswapV2Deployer
      );
    });

    
  });

});

// describe("Unit Tests", function () {
//   describe("UniswapV2Deployer", function () {
//     describe("deploy", function () {
//       it("Should deploy WETH9", function () {
//         const [signer] = this.hre.eth
//         const deployer = new UniswapV2Deployer();
//         const { weth9 } = deployer.deploy()

//         assert.equal(field.sayHello(), "hello");
//       });
//     });
//   });
// });
