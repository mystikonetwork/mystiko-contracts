import { getMystikoDeployContract } from './depsit';
import { LOGRED } from '../common/constant';

export async function depositSanctionQuery(bridgeName: string, erc20: boolean, addr: string) {
  const DepositContractFactory = getMystikoDeployContract(bridgeName, erc20);
  const depositContract = await DepositContractFactory.attach(addr);

  try {
    console.log('deposit sanction disable', await depositContract.isSanctionCheckDisabled());
    console.log('deposit sanction address ', await depositContract.getSanctionsContract());
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
