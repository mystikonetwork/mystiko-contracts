import { readJsonFile, writeJsonFile } from './common/utils';
import { LOGRED, MystikoTestnet, MystikoDevelopment, MystikoMainnet } from './common/constant';

const tbridgeTestnetConfigFile = './src/json/bridge/tbridge/testnet.json';
const tbridgeDevelopmentConfigFile = './src/json/bridge/tbridge/development.json';
const tbridgeMainnetConfigFile = './src/json/bridge/tbridge/mainnet.json';

function getConfigFileName(mystikoNetwork: string) {
  switch (mystikoNetwork) {
    case MystikoTestnet:
      return tbridgeTestnetConfigFile;
    case MystikoDevelopment:
      return tbridgeDevelopmentConfigFile;
    case MystikoMainnet:
      return tbridgeMainnetConfigFile;
    default:
      console.error(LOGRED, 'load tbridge config, network not support');
      return '';
  }
}

function loadTBridgeConfig(mystikoNetwork: string): any {
  const fileName = getConfigFileName(mystikoNetwork);
  if (fileName === '') {
    return undefined;
  }

  return readJsonFile(fileName);
}

function saveTBridgeConfig(mystikoNetwork: string, data: string) {
  const fileName = getConfigFileName(mystikoNetwork);
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
      pair.local.assetSymbol === c.pairSrcDepositCfg.assetSymbol &&
      pair.remote.network === c.pairDstDepositCfg.network
    ) {
      tbridgeConfig.bridge.pairs[i].local.mystikoAddress = c.pairSrcDepositCfg.address;
      tbridgeConfig.bridge.pairs[i].local.relayProxyAddress = c.proxyCfg.address;
      tbridgeConfig.bridge.pairs[i].local.bridgeEnalbe = true;
      console.log('update tbridge config');
      saveTBridgeConfig(c.mystikoNetwork, tbridgeConfig);
      return;
    }

    if (
      pair.remote.network === c.pairSrcDepositCfg.network &&
      pair.remote.assetSymbol === c.pairSrcDepositCfg.assetSymbol &&
      pair.local.network === c.pairDstDepositCfg.network
    ) {
      tbridgeConfig.bridge.pairs[i].remote.mystikoAddress = c.pairSrcDepositCfg.address;
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
      assetSymbol: c.srcTokenCfg.assetSymbol,
      mystikoAddress: c.pairSrcDepositCfg.address,
      relayProxyAddress: c.proxyCfg.address,
      bridgeEnalbe: true,
    },
    remote: {
      network: c.pairDstDepositCfg.network,
      chainId: c.dstChainCfg.chainId,
      assetSymbol: c.dstTokenCfg.assetSymbol,
    },
  };

  tbridgeConfig.bridge.pairs.push(pair);

  saveTBridgeConfig(c.mystikoNetwork, tbridgeConfig);
}
