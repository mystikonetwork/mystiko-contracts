import { LOGRED } from '../common/constant';
import { getSettingsCenterContract } from './settings';
import { waitConfirm } from '../common/utils';
import { ChainTokenConfig } from '../config/chainToken';
import { getMystikoDepositContract } from './depsit';

export async function setDepositMinAmount(
  settingsAddress: string,
  depositAddress: string,
  tokenConfig: ChainTokenConfig,
  bridgeName: string,
  ethers: any,
) {
  console.log('set deposit min  amount');
  try {
    const deposit = getMystikoDepositContract(bridgeName, tokenConfig.erc20, tokenConfig.assetSymbol);
    const depositContract = await deposit.attach(depositAddress);
    const currentMinAmount = await depositContract.getMinAmount();
    if (currentMinAmount.toString() === tokenConfig.minAmount) {
      console.log('min amount not change');
      return;
    }

    const settingsFactory = getSettingsCenterContract();
    const settingsContract = settingsFactory.attach(settingsAddress);
    const maxAmount = await settingsContract.queryMaxDepositAmount(depositAddress);
    if (maxAmount.toString() !== tokenConfig.maxAmount) {
      console.log('set deposit max  amount first');
      const rsp = await settingsContract.setMaxDepositAmount(depositAddress, tokenConfig.maxAmount);
      await waitConfirm(ethers, rsp, true);
      console.log('set deposit max amount ', rsp.hash);
    }

    const rsp = await settingsContract.setMinDepositAmount(depositAddress, tokenConfig.minAmount);
    console.log('set deposit min amount ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setBridgePeerMinRollupFee(
  settingsAddress: string,
  srcDepositAddress: string,
  tokenConfig: ChainTokenConfig,
  bridgeName: string,
  peerMinRollupFee: string,
  ethers: any,
) {
  console.log('set bridge peer min rollup fee');

  const deposit = getMystikoDepositContract(bridgeName, tokenConfig.erc20, tokenConfig.assetSymbol);
  const depositContract = await deposit.attach(srcDepositAddress);
  const minRollupFee = await depositContract.getPeerMinRollupFee();
  if (minRollupFee.toString() === peerMinRollupFee) {
    console.log('peer min rollup fee not change');
    return;
  }

  console.log('update deposit peer min rollup fee', peerMinRollupFee);

  try {
    const settingsFactory = getSettingsCenterContract();
    const settingsContract = settingsFactory.attach(settingsAddress);

    const rsp = await settingsContract.setMinPeerRollupFee(srcDepositAddress, peerMinRollupFee);
    console.log('set peer min rollup fee ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
