import { MystikoTBridgeProxy__factory } from '@mystikonetwork/contracts-abi';
import { BridgeConfig } from '../config/bridge';
import { OperatorConfig } from '../config/operator';
import { BridgeLoop, BridgeTBridge, LOGRED, MystikoDevelopment } from '../common/constant';
import { BridgeProxyConfig } from '../config/bridgeProxy';

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

async function addExecutorWhitelist(addr: string, executors: string[]) {
  console.log('add executor whitelist');
  const proxy = await MystikoTBridgeProxy.attach(addr);

  try {
    const all = [];
    for (let i = 0; i < executors.length; i += 1) {
      const add = proxy.addExecutorWhitelist(executors[i]);
      all.push(add);
    }
    await Promise.all(all);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function addRegisterWhitelist(addr: string, depositContractAddress: string) {
  console.log('add register whitelist');
  const proxy = await MystikoTBridgeProxy.attach(addr);

  try {
    await proxy.addRegisterWhitelist(depositContractAddress);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function getOrDeployTBridgeProxy(
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  bridgeProxyCfg: BridgeProxyConfig | undefined,
  operatorCfg: OperatorConfig,
  chainNetwork: string,
) {
  if (bridgeCfg.name === BridgeLoop) {
    return '';
  }

  if (bridgeCfg.name === BridgeTBridge) {
    if (bridgeProxyCfg === undefined || mystikoNetwork === MystikoDevelopment) {
      console.log('tbridge proxy not exist, deploy');

      const addBridgeCfg = bridgeCfg.addOrUpdateBridgeProxyConfig(chainNetwork, '');
      const bridgeProxyAddress = await deployTBridgeProxy();
      console.log('bridgeProxy address is ', bridgeProxyAddress);
      addBridgeCfg.address = bridgeProxyAddress;
      await addExecutorWhitelist(bridgeProxyAddress, operatorCfg.executors);
      return bridgeProxyAddress;
    }
    return bridgeProxyCfg.address;
  }

  if (bridgeProxyCfg === undefined || bridgeProxyCfg.address === undefined || bridgeProxyCfg.address === '') {
    console.error(LOGRED, 'bridge proxy address not configure');
    process.exit(-1);
  }

  return bridgeProxyCfg.address;
}
