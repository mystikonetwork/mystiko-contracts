import { LOGRED } from '../common/constant';
import { getMystikoPoolContract } from './commitment';

export async function commitmentQueue(erc20: boolean, addr: string) {
  console.log('commitment queue query');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(addr);

  try {
    const queueSize = await poolContract.commitmentQueueSize();
    const includedCount = await poolContract.commitmentIncludedCount();

    console.log('queue size ', queueSize);
    console.log('included count ', includedCount);
    console.log('commitment queue', await poolContract.commitmentQueue(queueSize - 1));
    // console.log('commitment queue', await poolContract.commitmentQueue(includedCount));
    // console.log('commitment queue', await poolContract.commitmentQueue(includedCount+1));
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function poolSanctionQuery(erc20: boolean, addr: string) {
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(addr);

  try {
    console.log('pool sanctione disable ', await poolContract.isSanctionCheckDisabled());
    console.log('pool sanction address ', await poolContract.sanctionsContract());
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
