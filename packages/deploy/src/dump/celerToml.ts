import { readTomlFile, writeTomlFile } from '../common/utils';
import { LOGRED, MystikoTestnet } from '../common/constant';

const TOML = require('@iarna/toml');

const ConfigFilePath = './src/json/bridge/celer/';

function getConfigFileName(mystikoNetwork: string, chainNetwork: string) {
  const prefix = chainNetwork === '' ? '' : chainNetwork.concat('/config/');
  switch (mystikoNetwork) {
    case MystikoTestnet:
      return ConfigFilePath.concat(prefix).concat('executor.toml');
    default:
      console.error(LOGRED, 'load rollup config, network not support');
      return '';
  }
}

function loadCelerConfig(mystikoNetwork: string): any {
  const fileName = getConfigFileName(mystikoNetwork, '');
  if (fileName === '') {
    return undefined;
  }

  return readTomlFile(fileName);
}

function saveCelerConfig(mystikoNetwork: string, data: string) {
  const fileName = getConfigFileName(mystikoNetwork, '');
  if (fileName === null) {
    return;
  }
  const jsonData = TOML.stringify(data);
  writeTomlFile(fileName, jsonData);
}

function buildSenderGroupName(c: any) {
  let srcNetwork;
  let dstNetwork;
  let tokenName: string;
  if (c.srcChainCfg.chainId < c.dstChainCfg.chainId) {
    srcNetwork = c.srcChainCfg.network;
    dstNetwork = c.dstChainCfg.network;
    tokenName = c.srcTokenCfg.assetSymbol;
  } else {
    srcNetwork = c.dstChainCfg.network;
    dstNetwork = c.srcChainCfg.network;
    tokenName = c.dstTokenCfg.assetSymbol;
  }

  return srcNetwork.concat('-').concat(dstNetwork).concat('-').concat(tokenName);
}

export function saveCelerToml(c: any) {
  const celerConfig = loadCelerConfig(c.mystikoNetwork);
  if (celerConfig === undefined) {
    return;
  }

  const senderGroupName = buildSenderGroupName(c);
  let oldSrcContractAddress: string;
  let oldDstContractAddress: string;
  const service = celerConfig.service[0];

  for (let i = 0; i < service.contract_sender_groups.length; i += 1) {
    const groups = service.contract_sender_groups[i];
    if (groups.name === senderGroupName) {
      for (let j = 0; j < groups.allow.length; j += 1) {
        if (groups.allow[j].chain_id === c.srcChainCfg.chainId) {
          oldSrcContractAddress = groups.allow[j].address;
          groups.allow[j].address = c.pairSrcDepositCfg.address;
        }

        if (groups.allow[j].chain_id === c.dstChainCfg.chainId) {
          oldDstContractAddress = groups.allow[j].address;
          groups.allow[j].address = c.pairDstDepositCfg.address;
        }
      }

      for (let k = 0; k < service.contracts.length; k += 1) {
        const contract = service.contracts[k];
        // @ts-ignore
        if (contract.address === oldSrcContractAddress) {
          contract.address = c.pairSrcDepositCfg.address;
        }

        // @ts-ignore
        if (contract.address === oldDstContractAddress) {
          contract.address = c.pairSrcDepositCfg.address;
        }
      }

      return;
    }
  }

  console.log('add new celer pair');

  const group = {
    name: senderGroupName,
    allow: [
      {
        chain_id: c.srcChainCfg.chainId,
        address: c.pairSrcDepositCfg.address,
      },
      {
        chain_id: c.dstChainCfg.chainId,
        address: c.pairDstDepositCfg.address,
      },
    ],
  };

  const contracts = [
    {
      chain_id: c.srcChainCfg.chainId,
      address: c.pairSrcDepositCfg.address,
      allow_sender_groups: senderGroupName,
    },
    {
      chain_id: c.dstChainCfg.chainId,
      address: c.pairDstDepositCfg.address,
      allow_sender_groups: senderGroupName,
    },
  ];

  service.contracts.push(...contracts);
  service.contract_sender_groups.push(group);

  saveCelerConfig(c.mystikoNetwork, celerConfig);
}
