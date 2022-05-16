import { deepCopy } from '@mystikonetwork/utils';
import { getMystikoNetwork, readJsonFile, writeJsonFile } from './common/utils';
import { LOGRED, MystikoTestnet, MystikoDevelopment, MystikoMainnet } from './common/constant';

const ConfigFilePath = './src/json/bridge/tbridge/';

function getConfigFileName(mystikoNetwork: string, chainNetwork: string) {
  const prefix = chainNetwork === '' ? '' : chainNetwork.concat('/config/');
  switch (mystikoNetwork) {
    case MystikoTestnet:
      return ConfigFilePath.concat(prefix).concat('testnet.json');
    case MystikoDevelopment:
      return ConfigFilePath.concat(prefix).concat('development.json');
    case MystikoMainnet:
      return ConfigFilePath.concat(prefix).concat('mainnet.json');
    default:
      console.error(LOGRED, 'load rollup config, network not support');
      return '';
  }
}

function loadTBridgeConfig(mystikoNetwork: string): any {
  const fileName = getConfigFileName(mystikoNetwork, '');
  if (fileName === '') {
    return undefined;
  }

  return readJsonFile(fileName);
}

function saveTBridgeConfig(mystikoNetwork: string, data: string) {
  const fileName = getConfigFileName(mystikoNetwork, '');
  if (fileName === null) {
    return;
  }
  const jsonData = JSON.stringify(data, null, 2);
  writeJsonFile(fileName, jsonData);
}

function saveChainTBridgeConfig(mystikoNetwork: string, chainNetwork: string, data: string) {
  const fileName = getConfigFileName(mystikoNetwork, chainNetwork);
  if (fileName === null) {
    return;
  }
  const jsonData = JSON.stringify(data, null, 2);
  writeJsonFile(fileName, jsonData);
}

export function saveTBridgeJson(c: any) {
  const tbridgeConfig = loadTBridgeConfig(c.mystikoNetwork);
  if (tbridgeConfig === undefined) {
    return;
  }

  for (let i = 0; i < tbridgeConfig.bridge.pairs.length; i += 1) {
    const pair = tbridgeConfig.bridge.pairs[i];
    if (
      pair.local.network === c.pairSrcDepositCfg.network &&
      pair.remote.network === c.pairDstDepositCfg.network
    ) {
      tbridgeConfig.bridge.pairs[i].local.relayProxyAddress = c.proxyCfg.address;
      tbridgeConfig.bridge.pairs[i].local.bridgeEnalbe = true;

      console.log('update tbridge config');
      saveTBridgeConfig(c.mystikoNetwork, tbridgeConfig);
      return;
    }

    if (
      pair.remote.network === c.pairSrcDepositCfg.network &&
      pair.local.network === c.pairDstDepositCfg.network
    ) {
      tbridgeConfig.bridge.pairs[i].remote.relayProxyAddress = c.proxyCfg.address;
      tbridgeConfig.bridge.pairs[i].remote.bridgeEnalbe = true;

      console.log('update tbridge config');
      saveTBridgeConfig(c.mystikoNetwork, tbridgeConfig);
      return;
    }
  }

  console.log('add new tbridge pair');

  const pair = {
    local: {
      network: c.pairSrcDepositCfg.network,
      chainId: c.srcChainCfg.chainId,
      relayProxyAddress: c.proxyCfg.address,
      bridgeEnalbe: true,
    },
    remote: {
      network: c.pairDstDepositCfg.network,
      chainId: c.dstChainCfg.chainId,
    },
  };

  tbridgeConfig.bridge.pairs.push(pair);

  saveTBridgeConfig(c.mystikoNetwork, tbridgeConfig);
}

export function dumpChainTBridgeConfig(srcNetwork: string) {
  const mystikoNetwork = getMystikoNetwork(srcNetwork);

  const bridgeConfig = loadTBridgeConfig(mystikoNetwork);
  if (bridgeConfig === undefined) {
    console.error('load tbridge configure error');
    process.exit(-1);
  }

  const targetTBridgeConfig = deepCopy(bridgeConfig);
  targetTBridgeConfig.bridge.pairs = [];
  targetTBridgeConfig.chains = [];

  const networks = new Map();
  networks.set(srcNetwork, true);

  for (let i = 0; i < bridgeConfig.bridge.pairs.length; i += 1) {
    const pair = bridgeConfig.bridge.pairs[i];

    if (pair.local.network === srcNetwork) {
      pair.local.bridgeEnalbe = true;
      pair.remote.bridgeEnalbe = false;
      networks.set(pair.remote.network, true);
      targetTBridgeConfig.bridge.pairs.push(pair);
    } else if (pair.remote.network === srcNetwork) {
      pair.local.bridgeEnalbe = false;
      pair.remote.bridgeEnalbe = true;
      networks.set(pair.local.network, true);
      targetTBridgeConfig.bridge.pairs.push(pair);
    }
  }

  // chain check
  for (let i = 0; i < bridgeConfig.chains.length; i += 1) {
    if (networks.get(bridgeConfig.chains[i].network)) {
      targetTBridgeConfig.chains.push(bridgeConfig.chains[i]);
    }
  }

  saveChainTBridgeConfig(mystikoNetwork, srcNetwork, targetTBridgeConfig);
}
