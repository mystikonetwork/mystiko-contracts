import { MystikoTBridgeProxy__factory } from '@mystikonetwork/contracts-abi';
import { BridgeConfig } from '../config/bridge';
import { OperatorConfig } from '../config/operator';
import { BridgeLoop, BridgeTBridge, LOGRED, MystikoDevelopment } from '../common/constant';
import { BridgeProxyConfig } from '../config/bridgeProxy';
import { saveConfig } from '../config/config';

let MystikoTBridgeProxy: MystikoTBridgeProxy__factory;

export async function initTBridgeContractFactory(ethers: any) {
  MystikoTBridgeProxy = await ethers.getContractFactory('MystikoTBridgeProxy');
}

async function deployTBridgeProxy() {
  console.log('deploy MystikoTBridgeProxy');
  const proxy = await MystikoTBridgeProxy.deploy();
  await proxy.deployed();
  return proxy.address;
}

async function setExecutorWhitelist(c: any, inBridgeProxyCfg: BridgeProxyConfig, executor: string) {
  let bridgeCfg = inBridgeProxyCfg;
  if (bridgeCfg.isInExecutorWhitelist(executor)) {
    return;
  }

  console.log('add executor to whitelist');
  const proxy = await MystikoTBridgeProxy.attach(inBridgeProxyCfg.address);

  try {
    const rsp = await proxy.addExecutorWhitelist(executor);
    console.log('rsp hash ', rsp.hash);
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

  if (bridgeCfg.name !== BridgeTBridge) {
    if (
      inBridgeProxyCfg === undefined ||
      inBridgeProxyCfg.address === undefined ||
      inBridgeProxyCfg.address === ''
    ) {
      console.error(LOGRED, 'bridge proxy address not configure');
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
  }
}
