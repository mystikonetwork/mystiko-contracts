import { check } from './check';
import {
  BridgeAxelar,
  BridgeCeler,
  BridgeLayerZero,
  BridgeLoop,
  BridgeTBridge,
  LOGRED,
  MainNetworks,
  MystikoTestnet,
  TestNetworks,
} from './common/constant';
import { getMystikoNetwork } from './common/utils';
import { loadConfig, loadDeployConfig, saveConfig } from './config/config';
import { deployCommitmentPool, initPoolContractFactory } from './contract/pool';
import { deployChainTestToken, initTestTokenContractFactory, transferOnDeploy } from './contract/token';
import {
  doTBridgeProxyConfigure,
  getOrDeployBridgeProxy,
  initTBridgeContractFactory,
} from './contract/tbridge';
import {
  deployDepositContract,
  doDepositContractConfigure,
  initDepositContractFactory,
  setPeerContract,
  setLZTrustedRemote,
  setLZEndpoint,
} from './contract/depsit';
import { deployVerifierContract, initVerifierContractFactory } from './contract/verifier';
import { checkCoreConfig, saveCoreContractJson } from './dump/coreJson';
import { dumpChainTBridgeConfig, saveTBridgeJson } from './dump/tbridgeJson';
import { saveCelerToml } from './dump/celerToml';
import {
  deploySettingsContract,
  doSettingsCenterConfig,
  initSettingsContractFactory,
} from './contract/settings';

let ethers: any;

// deploy hasher and verifier
async function deployStep1(taskArgs: any) {
  const c = loadConfig(taskArgs);
  if (c.override === 'true') {
    c.srcChainCfg.reset();
  }
  await deployVerifierContract(c);
  await deploySettingsContract(c);
}

function dumpConfig(c: any) {
  saveCoreContractJson(c);
  if (c.bridgeCfg.name === BridgeTBridge) {
    saveTBridgeJson(c);
  }
  if (c.bridgeCfg.name === BridgeCeler) {
    saveCelerToml(c);
  }
}

// deploy pool contract and deposit contract
async function deployStep2(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (!c.srcChainCfg.checkBaseAddress()) {
    console.error(LOGRED, 'base address not configure, should do step1 first');
    process.exit(-1);
  }

  const poolCfg = await deployCommitmentPool(
    c,
    c.mystikoNetwork,
    c.bridgeCfg,
    c.srcChainCfg,
    c.srcTokenCfg,
    c.srcPoolCfg,
    c.operatorCfg,
    c.override,
  );

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

  await deployDepositContract(
    c,
    c.mystikoNetwork,
    c.bridgeCfg,
    c.srcChainCfg,
    c.srcTokenCfg,
    c.dstTokenCfg,
    c.pairSrcDepositCfg,
    poolCfg.address,
    bridgeProxyConfig,
    c.override,
  );
}

// config contract
async function deployStep3(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (!c.srcPoolCfg || c.srcPoolCfg.address === '' || c.pairSrcDepositCfg.address === '') {
    console.error(LOGRED, 'core contract not configure, should do step2 first');
    process.exit(-1);
  }

  await doSettingsCenterConfig(c);

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

  await doDepositContractConfigure(
    c,
    c.srcChainCfg,
    c.pairSrcDepositCfg,
    c.bridgeCfg,
    c.srcTokenCfg,
    c.srcPoolCfg.address,
    bridgeProxyConfig,
  );

  if (c.bridgeCfg.name === BridgeTBridge) {
    await doTBridgeProxyConfigure(c, c.bridgeCfg, bridgeProxyConfig, c.operatorCfg);
  } else if (c.bridgeCfg.name === BridgeLayerZero) {
    const proxyConfig = c.bridgeCfg.getBridgeProxyConfig(c.dstChainCfg.network, '');
    if (proxyConfig === undefined || proxyConfig.mapChainId === undefined) {
      console.error(LOGRED, 'proxy or proxy map chain id not configure');
      process.exit(-1);
    }

    await setLZEndpoint(c, c.bridgeCfg.name, c.srcTokenCfg.erc20, c.pairSrcDepositCfg, proxyConfig);
    await setLZTrustedRemote(
      c,
      c.bridgeCfg.name,
      c.srcTokenCfg.erc20,
      c.pairSrcDepositCfg,
      proxyConfig.mapChainId,
      c.pairSrcDepositCfg.address,
      c.pairDstDepositCfg.address,
    );
  }

  if (c.bridgeCfg.name !== BridgeLoop) {
    let mapChainName = '';
    if (c.bridgeCfg.name === BridgeAxelar) {
      const proxy = c.bridgeCfg.getBridgeProxyConfig(c.dstChainCfg.network, '');
      if (proxy === undefined) {
        console.error(LOGRED, 'proxy not configure');
        process.exit(-1);
      }

      mapChainName = proxy.mapChainName ? proxy.mapChainName : '';
    }

    await setPeerContract(
      c,
      c.bridgeCfg.name,
      c.srcTokenCfg.erc20,
      c.pairSrcDepositCfg,
      c.dstChainCfg.chainId,
      mapChainName,
      c.pairDstDepositCfg.address,
    );
  }
}

// deploy mystiko contract and config contract
async function deployStep4(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (c.pairSrcDepositCfg.address === '' || c.pairDstDepositCfg.address === '') {
    console.error(LOGRED, 'token pair address not configure, should do step2 first');
    process.exit(-1);
  }

  // transfer token to contract
  if (c.bridgeCfg.name !== BridgeLoop && c.mystikoNetwork === MystikoTestnet) {
    // @ts-ignore
    await transferOnDeploy(c, c.srcTokenCfg, c.srcPoolCfg);
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

function dumpTBridgeConfig(taskArgs: any) {
  const srcNetwork = taskArgs.src;
  dumpChainTBridgeConfig(srcNetwork);
}

function dumpAllTBridgeConfig() {
  TestNetworks.forEach((network) => {
    dumpChainTBridgeConfig(network);
  });
}

function dumpMiner(taskArgs: any) {
  dumpTBridgeConfig(taskArgs);
}

function dumpAllMiner() {
  dumpAllTBridgeConfig();
}

async function checkJson(taskArgs: any) {
  const c = loadConfig(taskArgs);
  await checkCoreConfig(c.mystikoNetwork);
}

function resetAllDeployConfig(taskArgs: any) {
  const srcNetwork = taskArgs.src;
  const mystikoNetwork = getMystikoNetwork(srcNetwork);

  const cfg = loadDeployConfig(mystikoNetwork);
  if (mystikoNetwork === MystikoTestnet) {
    TestNetworks.forEach((network) => {
      const chain = cfg.getChain(network);
      chain?.reset();
    });
    let bridge = cfg.getBridge(BridgeLoop);
    bridge?.resetConfig();
    bridge = cfg.getBridge(BridgeTBridge);
    bridge?.resetConfig();
    bridge?.resetProxyConfig();

    bridge = cfg.getBridge(BridgeCeler);
    bridge?.resetConfig();
    bridge = cfg.getBridge(BridgeLayerZero);
    bridge?.resetConfig();
    bridge = cfg.getBridge(BridgeAxelar);
    bridge?.resetConfig();
  } else {
    MainNetworks.forEach((network) => {
      const chain = cfg.getChain(network);
      chain?.reset();
    });

    const bridge = cfg.getBridge(BridgeLoop);
    bridge?.resetConfig();
  }

  saveConfig(mystikoNetwork, cfg);
}

function resetAllVerifier(taskArgs: any) {
  const srcNetwork = taskArgs.src;
  const mystikoNetwork = getMystikoNetwork(srcNetwork);

  const cfg = loadDeployConfig(mystikoNetwork);
  if (mystikoNetwork === MystikoTestnet) {
    TestNetworks.forEach((network) => {
      const chain = cfg.getChain(network);
      chain?.resetChainContract();
    });
  } else {
    MainNetworks.forEach((network) => {
      const chain = cfg.getChain(network);
      chain?.resetChainContract();
    });
  }

  saveConfig(mystikoNetwork, cfg);
}

export async function deploy(taskArgs: any, hre: any) {
  ethers = hre.ethers;
  await initVerifierContractFactory(ethers);
  await initSettingsContractFactory(ethers);
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
  } else if (step === 'step4') {
    await deployStep4(taskArgs);
  } else if (step === 'check') {
    await check(ethers, taskArgs);
  } else if (step === 'checkJson') {
    await checkJson(taskArgs);
  } else if (step === 'testToken') {
    await testToken(taskArgs);
  } else if (step === 'dump') {
    dump(taskArgs);
  } else if (step === 'dumpMiner') {
    dumpMiner(taskArgs);
  } else if (step === 'dumpAllMiner') {
    dumpAllMiner();
  } else if (step === 'resetAll') {
    resetAllDeployConfig(taskArgs);
  } else if (step === 'resetAllVerifier') {
    resetAllVerifier(taskArgs);
  } else {
    console.error(LOGRED, 'wrong step');
  }
}
