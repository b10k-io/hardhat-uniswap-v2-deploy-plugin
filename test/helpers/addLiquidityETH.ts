import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber, Contract, Transaction } from "ethers";

async function addLiquidityETH(
  router: Contract,
  token: Contract,
  amountTokenDesired: BigNumber,
  amountTokenMin: BigNumber,
  amountETHMin: BigNumber,
  to: SignerWithAddress,
  deadline: BigNumber
) {
  const tx = await router.addLiquidityETH(
    token.address,
    amountTokenDesired,
    amountTokenMin,
    amountETHMin,
    to.address,
    deadline,
    { value: amountETHMin }
  );
  return tx;
}

export default addLiquidityETH;
