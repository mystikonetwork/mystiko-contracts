import { MystikoTBridgeProxy__factory } from '@mystikonetwork/contracts-abi';
import { waitConfirm } from '../common/utils';
import { BridgeConfig } from '../config/bridge';
import { OperatorConfig } from '../config/operator';
import {
  BridgeAxelar,
  BridgeCeler,
  BridgeLayerZero,
  BridgeLoop,
  BridgeTBridge,
  LOGRED,
  MystikoDevelopment,
} from '../common/constant';
import { BridgeProxyConfig } from '../config/bridgeProxy';
import { saveConfig } from '../config/config';

let MystikoTBridgeProxy: MystikoTBridgeProxy__factory;

let ethers: any;

export async function initTBridgeContractFactory(eth: any) {
  ethers = eth;
  MystikoTBridgeProxy = await ethers.getContractFactory('MystikoTBridgeProxy');
}

async function deployTBridgeProxy() {
  console.log('deploy MystikoTBridgeProxy');
  const proxy = await MystikoTBridgeProxy.deploy();
  await proxy.deployed();
  return proxy.address;
}

async function setExecutorWhitelist(c: any, bridgeCfg: BridgeProxyConfig, executor: string) {
  if (bridgeCfg.isInExecutorWhitelist(executor)) {
    return;
  }

  console.log('add executor to whitelist');
  const proxy = await MystikoTBridgeProxy.attach(bridgeCfg.address);

  try {
    const rsp = await proxy.addExecutorWhitelist(executor);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    bridgeCfg.addExecutorToWhitelist(executor);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function addExecutorWhitelist(c: any, inBridgeProxyCfg: BridgeProxyConfig, executors: string[]) {
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < executors.length; i += 1) {
    await setExecutorWhitelist(c, inBridgeProxyCfg, executors[i]);
  }
  /* eslint-enable no-await-in-loop */
}

async function changeOperator(c: any, inBridgeProxyCfg: BridgeProxyConfig, operator: string) {
  const bridgeProxyCfg = inBridgeProxyCfg;

  if (!bridgeProxyCfg.isOperatorChange(operator)) {
    return;
  }

  console.log('change tbridge operator');
  const proxy = await MystikoTBridgeProxy.attach(bridgeProxyCfg.address);

  try {
    const rsp = await proxy.changeOperator(operator);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    bridgeProxyCfg.updateOperator(operator);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function addRegisterWhitelist(
  c: any,
  inBridgeProxyConfig: BridgeProxyConfig,
  depositContractAddress: string,
) {
  const bridgeProxyConfig = inBridgeProxyConfig;

  if (bridgeProxyConfig.isInRegisterWhitelist(depositContractAddress)) {
    return;
  }

  console.log('add register whitelist');
  const proxy = await MystikoTBridgeProxy.attach(bridgeProxyConfig.address);

  try {
    const rsp = await proxy.addRegisterWhitelist(depositContractAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    bridgeProxyConfig.addRegisterToWhitelist(depositContractAddress);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function getOrDeployBridgeProxy(
  c: any,
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  inBridgeProxyCfg: BridgeProxyConfig | undefined,
  operatorCfg: OperatorConfig,
  chainNetwork: string,
  dstChainNetwork: string,
  override: string,
) {
  if (bridgeCfg.name === BridgeLoop) {
    return undefined;
  }

  if (
    bridgeCfg.name === BridgeCeler ||
    bridgeCfg.name === BridgeLayerZero ||
    bridgeCfg.name === BridgeAxelar
  ) {
    if (
      inBridgeProxyCfg === undefined ||
      inBridgeProxyCfg.address === undefined ||
      inBridgeProxyCfg.address === ''
    ) {
      console.error(LOGRED, 'bridge proxy address not configure');
      process.exit(-1);
    }

    if (bridgeCfg.name === BridgeLayerZero && inBridgeProxyCfg.mapChainId === undefined) {
      console.error(LOGRED, 'bridge proxy map chain id not configure');
      process.exit(-1);
    }

    if (
      bridgeCfg.name === BridgeAxelar &&
      (inBridgeProxyCfg?.gasReceiver === undefined || inBridgeProxyCfg?.mapChainName === undefined)
    ) {
      console.error(LOGRED, 'bridge proxy map gas receiver or map chain name not configure');
      process.exit(-1);
    }

    return inBridgeProxyCfg;
  }

  let bridgeProxyCfg = inBridgeProxyCfg;
  if (bridgeProxyCfg === undefined) {
    bridgeProxyCfg = bridgeCfg.addBridgeProxyConfig(chainNetwork, dstChainNetwork, '');
  }

  if (override === 'true' || bridgeProxyCfg.address === '' || mystikoNetwork === MystikoDevelopment) {
    bridgeProxyCfg.reset();
  }

  if (bridgeProxyCfg.address === '') {
    console.log('deploy tbridge proxy');

    const bridgeProxyAddress = await deployTBridgeProxy();
    console.log('bridgeProxy address is ', bridgeProxyAddress);
    bridgeProxyCfg.address = bridgeProxyAddress;
  }

  saveConfig(c.mystikoNetwork, c.cfg);
  return bridgeProxyCfg;
}

export async function doBridgeProxyConfigure(
  c: any,
  bridgeCfg: BridgeConfig,
  bridgeProxyCfg: BridgeProxyConfig | undefined,
  operatorCfg: OperatorConfig,
) {
  if (bridgeCfg.name === BridgeTBridge) {
    if (bridgeProxyCfg === undefined) {
      console.error('bridge proxy configure not exist');
      process.exit(-1);
    }
    await addExecutorWhitelist(c, bridgeProxyCfg, operatorCfg.executors);

    if (operatorCfg.admin !== '') {
      await changeOperator(c, bridgeProxyCfg, operatorCfg.admin);
    }
  }
}
