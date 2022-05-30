import { deepCopy } from '@mystikonetwork/utils';
import { getMystikoNetwork, readJsonFile, writeJsonFile } from '../common/utils';
import { LOGRED, MystikoTestnet, MystikoDevelopment, MystikoMainnet } from '../common/constant';

const ConfigFilePath = './src/json/rollup/';

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

function loadRollupConfig(mystikoNetwork: string): any {
  const fileName = getConfigFileName(mystikoNetwork, '');
  if (fileName === '') {
    return undefined;
  }
  return readJsonFile(fileName);
}

function saveRollupConfig(mystikoNetwork: string, data: string) {
  const fileName = getConfigFileName(mystikoNetwork, '');
  if (fileName === null) {
    return;
  }
  const jsonData = JSON.stringify(data, null, 2);
  writeJsonFile(fileName, jsonData);
}

function saveChainRollupConfig(mystikoNetwork: string, chainNetwork: string, data: string) {
  const fileName = getConfigFileName(mystikoNetwork, chainNetwork);
  if (fileName === null) {
    return;
  }

  const jsonData = JSON.stringify(data, null, 2);
  writeJsonFile(fileName, jsonData);
}

export function saveRollupJson(c: any) {
  const rollupConfig = loadRollupConfig(c.mystikoNetwork);
  if (rollupConfig === undefined) {
    return;
  }

  for (let i = 0; i < rollupConfig.commitmentPools.length; i += 1) {
    const poolCfg = rollupConfig.commitmentPools[i];
    if (
      poolCfg.network === c.srcPoolCfg.network &&
      poolCfg.assetSymbol === c.srcTokenCfg.assetSymbol &&
      poolCfg.bridgeType === c.bridgeCfg.name
    ) {
      poolCfg.address = c.srcPoolCfg.address;
      poolCfg.isRollupEnable = true;
      poolCfg.syncStart = c.srcPoolCfg.syncStart;
      console.log('update rollup config');
      saveRollupConfig(c.mystikoNetwork, rollupConfig);
      return;
    }
  }

  console.log('add new rollup config');

  const poolCfg = {
    network: c.srcPoolCfg.network,
    assetSymbol: c.srcTokenCfg.assetSymbol,
    bridgeType: c.bridgeCfg.name,
    address: c.srcPoolCfg.address,
    isRollupEnable: true,
    syncStart: c.srcPoolCfg.syncStart,
  };

  rollupConfig.commitmentPools.push(poolCfg);

  saveRollupConfig(c.mystikoNetwork, rollupConfig);
}

export function dumpChainRollerConfig(srcNetwork: string) {
  const mystikoNetwork = getMystikoNetwork(srcNetwork);

  const rollupConfig = loadRollupConfig(mystikoNetwork);
  if (rollupConfig === undefined) {
    console.error('load rollup configure error');
    process.exit(-1);
  }

  const targetRollupConfig = deepCopy(rollupConfig);
  targetRollupConfig.chains = [];
  targetRollupConfig.commitmentPools = [];

  // chain check
  for (let i = 0; i < rollupConfig.chains.length; i += 1) {
    const chain = rollupConfig.chains[i];

    if (chain.network === srcNetwork) {
      targetRollupConfig.chains.push(chain);
      break;
    }
  }

  for (let i = 0; i < rollupConfig.commitmentPools.length; i += 1) {
    const poolCfg = rollupConfig.commitmentPools[i];
    if (poolCfg.network === srcNetwork) {
      targetRollupConfig.commitmentPools.push(poolCfg);
    }
  }

  saveChainRollupConfig(mystikoNetwork, srcNetwork, targetRollupConfig);
}
