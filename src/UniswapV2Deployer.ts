import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import deployWETH9 from "./deployers/deployWETH9";

export class UniswapV2Deployer {
  public deployWETH9 = deployWETH9;
  public async deploy(signer: SignerWithAddress) {
    const { weth9, WETH9 } = await deployWETH9(signer);
    return {
      weth9,
      WETH9,
    };
  }
}
