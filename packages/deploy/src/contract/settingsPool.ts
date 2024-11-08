import { getMystikoPoolContract } from './pool';
import { waitConfirm } from '../common/utils';
import { LOGRED } from '../common/constant';
import { getSettingsCenterContract } from './settings';

export async function setPoolMinRollupFee(
  settingsAddress: string,
  poolAddress: string,
  minRollupFee: string,
  ethers: any,
) {
  console.log('set pool min rollup fee');

  try {
    const pool = getMystikoPoolContract(false);
    const poolContract = await pool.attach(poolAddress);
    const rollupFee = await poolContract.getMinRollupFee();
    console.log('current rollup fee ', rollupFee.toString());
    if (rollupFee.toString() === minRollupFee) {
      console.log('min rollup fee not change');
      return;
    }
    console.log('update min rollup fee ', minRollupFee);
    const settingsFactory = getSettingsCenterContract();
    const settingsContract = settingsFactory.attach(settingsAddress);

    const rsp = await settingsContract.setMinRollupFee(poolAddress, minRollupFee);
    console.log('set min rollup fee ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
