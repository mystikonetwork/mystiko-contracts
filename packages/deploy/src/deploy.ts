import { BridgeLoop, BridgeTBridge, LOGRED, MystikoTestnet } from './common/constant';
import { loadConfig, saveConfig } from './config/config';
import { addEnqueueWhitelist, getOrDeployCommitPool, initPoolContractFactory } from './contract/commitment';
import { initTestTokenContractFactory, transferTokneToContract } from './contract/token';
import {
  addRegisterWhitelist,
  getOrDeployTBridgeProxy,
  initTBridgeContractFactory,
} from './contract/tbridge';
import { deployDepositContract, initDepositContractFactory, setPeerContract } from './contract/depsit';
import { deployBaseContract, initBaseContractFactory } from './contract/base';
import { checkCoreConfig, saveCoreContractJson } from './coreJson';
import { saveTBridgeJson } from './tbridgeJson';
import { saveRollupJson } from './rollupJson';
import { delay } from './common/utils';

let ethers: any;

// deploy hasher and verifier
async function deployStep1(taskArgs: any) {
  const c = loadConfig(taskArgs);
  await deployBaseContract(c.srcChainCfg);
  saveConfig(c.mystikoNetwork, c.cfg);
}

function dumpConfig(c: any) {
  saveCoreContractJson(c);
  saveRollupJson(c);
  if (c.bridgeCfg.name === BridgeTBridge) {
    saveTBridgeJson(c);
  }
}

// deploy mystiko contract and config contract
async function deployStep2(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (!c.srcChainCfg.checkBaseAddress()) {
    console.error(LOGRED, 'base address not configure, should do step1 first');
    process.exit(-1);
  }

  const bridgeProxyAddress = await getOrDeployTBridgeProxy(
    c.mystikoNetwork,
    c.bridgeCfg,
    c.proxyCfg,
    c.operatorCfg,
    c.srcChainCfg.network,
  );

  const commitmentPoolAddress = await getOrDeployCommitPool(
    c.mystikoNetwork,
    c.bridgeCfg,
    c.srcChainCfg,
    c.srcTokenCfg,
    c.pairSrcPoolCfg,
    c.operatorCfg,
  );

  await delay(10000);

  const depositAddress = await deployDepositContract(
    c.mystikoNetwork,
    c.bridgeCfg,
    c.srcChainCfg,
    c.srcTokenCfg,
    c.dstTokenCfg,
    c.pairSrcDepositCfg,
    commitmentPoolAddress,
    bridgeProxyAddress,
  );

  await delay(10000);

  await addEnqueueWhitelist(c.srcTokenCfg.erc20, commitmentPoolAddress, depositAddress);
  await delay(2000);

  if (c.bridgeCfg.name === BridgeTBridge) {
    await addRegisterWhitelist(bridgeProxyAddress, depositAddress);
  }

  saveConfig(c.mystikoNetwork, c.cfg);
}

// deploy mystiko contract and config contract
async function deployStep3(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (c.pairSrcDepositCfg.address === '' || c.pairDstDepositCfg.address === '') {
    console.error(LOGRED, 'token pair address not configure, should do step2 first');
    process.exit(-1);
  }

  // transfer token to contract
  if (c.srcTokenCfg.erc20 && c.bridgeCfg.name !== BridgeLoop && c.mystikoNetwork === MystikoTestnet) {
    // @ts-ignore
    await transferTokneToContract(c.srcTokenCfg.address, c.pairSrcPoolCfg.address);
  }

  if (c.bridgeCfg.name !== BridgeLoop) {
    await setPeerContract(
      c.bridgeCfg.name,
      c.srcTokenCfg.erc20,
      c.pairSrcDepositCfg.address,
      c.dstChainCfg.chainId,
      c.pairDstDepositCfg.address,
    );
  }

  dumpConfig(c);
}

function dump(taskArgs: any) {
  const c = loadConfig(taskArgs);
  dumpConfig(c);
}

async function check(taskArgs: any) {
  const c = loadConfig(taskArgs);
  await checkCoreConfig(c.mystikoNetwork);
}

export async function deploy(taskArgs: any, hre: any) {
  ethers = hre.ethers;
  await initBaseContractFactory(ethers);
  await initTestTokenContractFactory(ethers);
  await initTBridgeContractFactory(ethers);
  await initPoolContractFactory(ethers);
  await initDepositContractFactory(ethers);

  const { step } = taskArgs;
  if (step === 'step1') {
    await deployStep1(taskArgs);
  } else if (step === 'step2') {
    await deployStep2(taskArgs);
  } else if (step === 'step3') {
    await deployStep3(taskArgs);
  } else if (step === 'dump') {
    dump(taskArgs);
  } else if (step === 'check') {
    await check(taskArgs);
  } else {
    console.error(LOGRED, 'wrong step');
  }
}
