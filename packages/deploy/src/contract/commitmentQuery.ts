import { LOGRED } from '../common/constant';
import { getMystikoPoolContract } from './commitment';

export async function commitmentQueue(erc20: boolean, addr: string) {
  console.log('commitment queue query');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(addr);

  try {
    const includedCount = await poolContract.getCommitmentIncludedCount();
    console.log('included count ', includedCount);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function poolSanctionQuery(erc20: boolean, addr: string) {
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(addr);

  try {
    console.log('pool sanctione disable ', await poolContract.sanctionsCheckDisabled());
    console.log('pool sanction address ', await poolContract.sanctionsList());
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
