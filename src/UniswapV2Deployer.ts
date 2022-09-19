import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import deployFactory from "./deployers/deployFactory";
import deployRouter from "./deployers/deployRouter";
import deployWETH9 from "./deployers/deployWETH9";

export class UniswapV2Deployer {
  public deployWETH9 = deployWETH9;
  public deployFactory = deployFactory;
  public async deploy(signer: SignerWithAddress) {
    const { factory, Factory } = await deployFactory(signer, signer);
    const { weth9, WETH9 } = await deployWETH9(signer);
    const { router, Router } = await deployRouter(signer, factory, weth9);
    return {
      weth9,
      WETH9,
      factory,
      Factory,
      router,
      Router,
    };
  }
}
