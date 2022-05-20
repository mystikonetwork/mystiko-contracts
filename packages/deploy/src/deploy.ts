import { BridgeLoop, BridgeTBridge, LOGRED, MystikoTestnet } from './common/constant';
import { loadConfig } from './config/config';
import {
  addEnqueueWhitelist,
  doCommitmentPoolConfigure,
  getOrDeployCommitmentPool,
  initPoolContractFactory,
} from './contract/commitment';
import { deployChainTestToken, initTestTokenContractFactory, transferOnDeploy } from './contract/token';
import {
  addRegisterWhitelist,
  doBridgeProxyConfigure,
  getOrDeployBridgeProxy,
  initTBridgeContractFactory,
} from './contract/tbridge';
import {
  deployDepositContract,
  doDepositContractConfigure,
  initDepositContractFactory,
  setPeerContract,
} from './contract/depsit';
import { deployBaseContract, initBaseContractFactory } from './contract/base';
import { checkCoreConfig, saveCoreContractJson } from './coreJson';
import { dumpChainTBridgeConfig, saveTBridgeJson } from './tbridgeJson';
import { dumpChainRollerConfig, saveRollupJson } from './rollupJson';

let ethers: any;

// deploy hasher and verifier
async function deployStep1(taskArgs: any) {
  const c = loadConfig(taskArgs);
  await deployBaseContract(c);
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

  const bridgeProxyConfig = await getOrDeployBridgeProxy(
    c,
    c.mystikoNetwork,
    c.bridgeCfg,
    c.proxyCfg,
    c.operatorCfg,
    c.srcChainCfg.network,
    c.dstChainCfg?.network,
    c.override,
  );

  await doBridgeProxyConfigure(c, c.bridgeCfg, bridgeProxyConfig, c.operatorCfg);

  const poolCfg = await getOrDeployCommitmentPool(
    c,
    c.mystikoNetwork,
    c.bridgeCfg,
    c.srcChainCfg,
    c.srcTokenCfg,
    c.srcPoolCfg,
    c.operatorCfg,
    c.override,
  );

  await doCommitmentPoolConfigure(c, c.mystikoNetwork, poolCfg, c.srcChainCfg, c.srcTokenCfg, c.operatorCfg);

  const depositCfg = await deployDepositContract(
    c,
    c.mystikoNetwork,
    c.bridgeCfg,
    c.srcChainCfg,
    c.srcTokenCfg,
    c.dstTokenCfg,
    c.pairSrcDepositCfg,
    poolCfg.address,
    c.override,
  );

  await doDepositContractConfigure(
    c,
    c.mystikoNetwork,
    depositCfg,
    c.bridgeCfg,
    c.srcChainCfg,
    c.srcTokenCfg,
    c.dstTokenCfg,
    c.pairSrcDepositCfg,
    poolCfg.address,
    bridgeProxyConfig ? bridgeProxyConfig.address : '',
  );

  await addEnqueueWhitelist(c, c.srcTokenCfg.erc20, poolCfg, depositCfg.address);

  if (c.bridgeCfg.name === BridgeTBridge) {
    if (bridgeProxyConfig === undefined) {
      console.error('bridge proxy configure not exist');
      process.exit(-1);
    }
    await addRegisterWhitelist(c, bridgeProxyConfig, depositCfg.address);
  }
}

// deploy mystiko contract and config contract
async function deployStep3(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (c.pairSrcDepositCfg.address === '' || c.pairDstDepositCfg.address === '') {
    console.error(LOGRED, 'token pair address not configure, should do step2 first');
    process.exit(-1);
  }

  // transfer token to contract
  if (c.bridgeCfg.name !== BridgeLoop && c.mystikoNetwork === MystikoTestnet) {
    // @ts-ignore
    await transferOnDeploy(ethers, c, c.srcTokenCfg, c.srcPoolCfg);
  }

  if (c.bridgeCfg.name !== BridgeLoop) {
    await setPeerContract(
      c,
      c.bridgeCfg.name,
      c.srcTokenCfg.erc20,
      c.pairSrcDepositCfg,
      c.dstChainCfg.chainId,
      c.pairDstDepositCfg.address,
    );
  }

  dumpConfig(c);
}

async function testToken(taskArgs: any) {
  await deployChainTestToken(taskArgs.token);
}

function dump(taskArgs: any) {
  const c = loadConfig(taskArgs);
  dumpConfig(c);
}

function dumpRollerConfig(taskArgs: any) {
  const srcNetwork = taskArgs.src;
  dumpChainRollerConfig(srcNetwork);
}

function dumpTBridgeConfig(taskArgs: any) {
  const srcNetwork = taskArgs.src;
  dumpChainTBridgeConfig(srcNetwork);
}

function dumpAllRollerConfig() {
  dumpChainRollerConfig('bsctestnet');
  dumpChainRollerConfig('ropsten');
  dumpChainRollerConfig('goerli');
  dumpChainRollerConfig('polygontestnet');
  dumpChainRollerConfig('fantomtestnet');
  dumpChainRollerConfig('avalanchetestnet');
  dumpChainRollerConfig('auroratestnet');
  dumpChainRollerConfig('moonbase');
}

function dumpAllTBridgeConfig() {
  dumpChainTBridgeConfig('bsctestnet');
  dumpChainTBridgeConfig('ropsten');
  dumpChainTBridgeConfig('goerli');
  dumpChainTBridgeConfig('polygontestnet');
  dumpChainTBridgeConfig('fantomtestnet');
  dumpChainTBridgeConfig('avalanchetestnet');
  dumpChainTBridgeConfig('auroratestnet');
  dumpChainTBridgeConfig('moonbase');
}

function dumpChain(taskArgs: any) {
  dumpRollerConfig(taskArgs);
  dumpTBridgeConfig(taskArgs);
}

function dumpAllChain() {
  dumpAllRollerConfig();
  dumpAllTBridgeConfig();
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
  } else if (step === 'testToken') {
    await testToken(taskArgs);
  } else if (step === 'dump') {
    dump(taskArgs);
  } else if (step === 'dumpChain') {
    dumpChain(taskArgs);
  } else if (step === 'dumpAllChain') {
    dumpAllChain();
  } else if (step === 'check') {
    await check(taskArgs);
  } else {
    console.error(LOGRED, 'wrong step');
  }
}
