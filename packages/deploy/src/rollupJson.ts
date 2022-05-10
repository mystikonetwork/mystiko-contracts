import { readJsonFile, writeJsonFile } from './common/utils';
import { LOGRED, MystikoTestnet, MystikoDevelopment, MystikoMainnet } from './common/constant';

const rollupTestnetConfigFile = './src/json/rollup/testnet.json';
const rollupDevelopmentConfigFile = './src/json/rollup/development.json';
const rollupMainnetConfigFile = './src/json/rollup/development.json';

function getConfigFileName(mystikoNetwork: string) {
  switch (mystikoNetwork) {
    case MystikoTestnet:
      return rollupTestnetConfigFile;
    case MystikoDevelopment:
      return rollupDevelopmentConfigFile;
    case MystikoMainnet:
      return rollupMainnetConfigFile;
    default:
      console.error(LOGRED, 'load rollup config, network not support');
      return '';
  }
}

function loadRollupConfig(mystikoNetwork: string): any {
  const fileName = getConfigFileName(mystikoNetwork);
  if (fileName === '') {
    return undefined;
  }

  return readJsonFile(fileName);
}

function saveRollupConfig(mystikoNetwork: string, data: string) {
  const fileName = getConfigFileName(mystikoNetwork);
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
      poolCfg.network === c.pairSrcPoolCfg.network &&
      poolCfg.assetSymbol === c.srcTokenCfg.assetSymbol &&
      poolCfg.bridgeType === c.bridgeCfg.name
    ) {
      poolCfg.address = c.pairSrcPoolCfg.address;
      poolCfg.isRollupEnable = true;
      poolCfg.syncStart = c.pairSrcPoolCfg.syncStart;
      console.log('update rollup config');
      saveRollupConfig(c.mystikoNetwork, rollupConfig);
      return;
    }
  }

  console.log('add new rollup config');

  const poolCfg = {
    network: c.pairSrcPoolCfg.network,
    assetSymbol: c.srcTokenCfg.assetSymbol,
    bridgeType: c.bridgeCfg.name,
    address: c.pairSrcPoolCfg.address,
    isRollupEnable: true,
    syncStart: c.pairSrcPoolCfg.syncStart,
  };

  rollupConfig.commitmentPools.push(poolCfg);

  saveRollupConfig(c.mystikoNetwork, rollupConfig);
}
