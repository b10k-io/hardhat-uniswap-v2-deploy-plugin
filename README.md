[![Build](https://github.com/b10k-io/hardhat-uniswap-v2-deploy-plugin/actions/workflows/test.yml/badge.svg)](https://github.com/b10k-io/hardhat-uniswap-v2-deploy-plugin/actions/workflows/test.yml)

# hardhat-uniswap-v2-deploy-plugin

Simple hardhat plugin that allows you to deploy UniswapV2 (Factory, Router, WETH9) to your network.

[Hardhat](https://hardhat.org) plugin. 

## What

This plugin extends your Hardhat Runtime Environment, allowing you to deploy in one command the full UniswapV2 stack (Factory, Router, WETH9). You can use it to test features such as pair creation, liquidity provisioning, and swaps.

Additionally, you can use the Interfaces (IUniswapV2Factory, IUniswapV2Router, and IUniswapV2Pair) to communicate directly with testnet / mainnet.

Feedback, improvment suggestions are welcome.

## Installation

Install the plugin.

```bash
npm install --save-dev hardhat-uniswap-v2-deploy-plugin
```

or 

```bash
yarn add --dev hardhat-uniswap-v2-deploy-plugin
```

Import the plugin in your `hardhat.config.js`:

```js
require("hardhat-uniswap-v2-deploy-plugin");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "hardhat-uniswap-v2-deploy-plugin";
```

## Environment extensions

The UniswapV2Deployer extension allows you to deploy the UniswapV2 stack on your network.

This plugin extends the Hardhat Runtime Environment by adding an `UniswapV2Deployer` field
whose type is `UniswapV2Deployer`.

## Usage

It's so easy.

```ts
import { ethers, UniswapV2Deployer } from "hardhat"

async function main() {
  [signer] = await this.hre.ethers.getSigners();
  const deployer = new UniswapV2Deployer();
  const { factory, router, weth9 } = await deployer.deploy(signer);

  // Now you can interact with the different UniswapV2 contracts
  // ...
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

There are no additional steps you need to take for this plugin to work.

## Detailed Usage Example

Please see [protect.test.ts](test/project.test.ts) file. It shows you how to deploy and interact with the contracts i.e. adding liquidity, swapping tokens.

