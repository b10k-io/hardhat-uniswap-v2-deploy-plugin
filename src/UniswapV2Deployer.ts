import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import deployFactory from "./deployers/deployFactory";
import deployWETH9 from "./deployers/deployWETH9";

export class UniswapV2Deployer {
  public deployWETH9 = deployWETH9;
  public deployFactory = deployFactory;
  public async deploy(signer: SignerWithAddress) {
    const { weth9, WETH9 } = await deployWETH9(signer);
    const { factory, Factory } = await deployFactory(signer, signer);
    return {
      weth9,
      WETH9,
      factory,
      Factory,
    };
  }
}
