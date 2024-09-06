import { initVerifierContractFactory } from './contract/verifier';
import { initTestTokenContractFactory, transferToContract } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory } from './contract/pool';
import { initDepositContractFactory } from './contract/depsit';
import { BridgeLoop, LOGRED, MystikoTestnet } from './common/constant';
import { loadConfig } from './config/config';
import {
  getRelayerRegisterContract,
  initSettingsContractFactory,
  setPoolMinRollupFee,
} from './contract/settings';

let ethers: any;

async function tokenTransfer(taskArgs: any) {
  const c = loadConfig(taskArgs);

  console.log('token transfer');
  // transfer token to contract
  if (c.bridgeCfg.name !== BridgeLoop && c.mystikoNetwork === MystikoTestnet) {
    // @ts-ignore
    await transferToContract(ethers, c, c.srcTokenCfg, c.srcPoolCfg);
  }
}

async function registerRelayer(taskArgs: any) {
  console.log('register relayer');
  const c = loadConfig(taskArgs);

  if (c.srcChainCfg?.relayerRegister === undefined) {
    console.error(LOGRED, 'relayerRegister contract address is undefined');
    return;
  }

  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < c.operatorCfg?.relayers.length; i += 1) {
    const relayer = c.operatorCfg.relayers[i];
    const name = c.operatorCfg.relayerNames[i];
    const url = c.operatorCfg.relayerUrls[i];
    const relayerFactory = getRelayerRegisterContract();
    const relayerContract = relayerFactory.attach(c.srcChainCfg.relayerRegister);
    const tx = await relayerContract.registerRelayer(relayer, url, name);
    console.log('tx', tx.hash);
  }
  /* eslint-enable no-await-in-loop */
}

async function updatePoolMinRollupFee(taskArgs: any) {
  console.log('update pool min rollup fee');
  const c = loadConfig(taskArgs);

  if (c.srcChainCfg?.settingsCenter === undefined) {
    console.error(LOGRED, 'settingsCenter contract address is undefined');
    return;
  }

  if (c.srcPoolCfg?.address === undefined) {
    console.error(LOGRED, 'pool contract address is undefined');
    return;
  }

  await setPoolMinRollupFee(c.srcChainCfg?.settingsCenter, c.srcPoolCfg?.address, c.srcTokenCfg.minRollupFee);
}

export async function set(taskArgs: any, hre: any) {
  ethers = hre.ethers;
  await initVerifierContractFactory(ethers);
  await initSettingsContractFactory(ethers);
  await initTestTokenContractFactory(ethers);
  await initTBridgeContractFactory(ethers);
  await initPoolContractFactory(ethers);
  await initDepositContractFactory(ethers);

  if (taskArgs.func === 'tokenTransfer') {
    await tokenTransfer(taskArgs);
  } else if (taskArgs.func === 'registerRelayer') {
    await registerRelayer(taskArgs);
  } else if (taskArgs.func === 'updatePoolMinRollupFee') {
    await updatePoolMinRollupFee(taskArgs);
  } else {
    console.error(LOGRED, 'un support function');
  }
}
