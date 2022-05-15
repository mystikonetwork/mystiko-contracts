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

async function setExecutorWhitelist(addr: string, executor: string) {
  console.log('set executor whitelist');
  const proxy = await MystikoTBridgeProxy.attach(addr);

  try {
    const rsp = await proxy.addExecutorWhitelist(executor);
    console.log('rsp hash ', rsp.hash);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function addExecutorWhitelist(c: any, inBridgeProxyCfg: BridgeProxyConfig, executors: string[]) {
  // todo eric executor white list should be array
  if (inBridgeProxyCfg.isExecutorWhitelistSet) {
    return;
  }

  const bridgeProxyCfg = inBridgeProxyCfg;
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < executors.length; i += 1) {
    await setExecutorWhitelist(bridgeProxyCfg.address, executors[i]);
  }
  /* eslint-enable no-await-in-loop */

  bridgeProxyCfg.isExecutorWhitelistSet = true;
  saveConfig(c.mystikoNetwork, c.cfg);
}

export async function addRegisterWhitelist(
  c: any,
  inBridgeProxyConfig: BridgeProxyConfig,
  depositContractAddress: string,
) {
  // todo eric register white list should be array
  // if (inBridgeProxyConfig.isRegisterWhitelistSet) {
  //   return;
  // }
  const bridgeProxyConfig = inBridgeProxyConfig;

  console.log('add register whitelist');
  const proxy = await MystikoTBridgeProxy.attach(bridgeProxyConfig.address);

  try {
    const rsp = await proxy.addRegisterWhitelist(depositContractAddress);
    console.log('rsp hash ', rsp.hash);
    // bridgeProxyConfig.isRegisterWhitelistSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function getOrDeployTBridgeProxy(
  c: any,
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  inBridgeProxyCfg: BridgeProxyConfig | undefined,
  operatorCfg: OperatorConfig,
  chainNetwork: string,
  override: string,
) {
  if (bridgeCfg.name === BridgeLoop) {
    return undefined;
  }

  if (bridgeCfg.name === BridgeTBridge) {
    if (override === 'true' || inBridgeProxyCfg === undefined || mystikoNetwork === MystikoDevelopment) {
      console.log('deploy tbridge proxy');
      let bridgeProxyCfg = inBridgeProxyCfg;
      if (bridgeProxyCfg === undefined) {
        bridgeProxyCfg = bridgeCfg.addBridgeProxyConfig(chainNetwork, '');
      }

      const bridgeProxyAddress = await deployTBridgeProxy();
      console.log('bridgeProxy address is ', bridgeProxyAddress);
      bridgeProxyCfg.address = bridgeProxyAddress;
      bridgeProxyCfg.reset();
      saveConfig(c.mystikoNetwork, c.cfg);
      return bridgeProxyCfg;
    }
  }

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

export async function doTBridgeProxyConfigure(
  c: any,
  bridgeCfg: BridgeConfig,
  bridgeProxyCfg: BridgeProxyConfig | undefined,
  operatorCfg: OperatorConfig,
) {
  if (bridgeCfg.name === BridgeLoop || bridgeProxyCfg === undefined) {
    return;
  }

  await addExecutorWhitelist(c, bridgeProxyCfg, operatorCfg.executors);
}
