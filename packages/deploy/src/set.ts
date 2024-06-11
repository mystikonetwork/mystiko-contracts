import { initVerifierContractFactory } from './contract/verifier';
import { initTestTokenContractFactory, transferToContract } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory } from './contract/pool';
import { initDepositContractFactory } from './contract/depsit';
import { BridgeLoop, LOGRED, MystikoTestnet } from './common/constant';
import { loadConfig } from './config/config';
import { getRelayerRegisterContract, initSettingsContractFactory } from './contract/settings';

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

  const relayer = '0x11f85D418dE9238a4e48D8e242AA518F0352e280';
  const name = 'Demon Hunter';
  const url = 'https://gasrelayer01.privacyguard.network';

  if (c.srcChainCfg?.relayerRegister === undefined) {
    console.error(LOGRED, 'relayerRegister contract address is undefined');
    return;
  }
  const relayerFactory = getRelayerRegisterContract();
  const relayerContract = relayerFactory.attach(c.srcChainCfg.relayerRegister);
  const tx = await relayerContract.registerRelayer(relayer, url, name);
  console.log('tx', tx.hash);
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
  } else {
    console.error(LOGRED, 'un support function');
  }
}
