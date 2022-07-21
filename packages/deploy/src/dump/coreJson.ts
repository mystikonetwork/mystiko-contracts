import { MystikoConfig } from '@mystikonetwork/config';
import { LOGRED, MystikoTestnet, MystikoMainnet, MystikoDevelopment, BridgeLoop } from '../common/constant';
import { readJsonFile, writeJsonFile } from '../common/utils';

function getCoreConfigFileName(mystikoNetwork: string) {
  let fileNameWithPath = '';
  if (mystikoNetwork === MystikoTestnet) {
    fileNameWithPath = './src/json/core/testnet.json';
  } else if (mystikoNetwork === MystikoMainnet) {
    fileNameWithPath = './src/json/core/mainnet.json';
  } else if (mystikoNetwork === MystikoDevelopment) {
    fileNameWithPath = './src/json/core/development.json';
  } else {
    console.error(LOGRED, 'load config network not support');
    process.exit(-1);
  }
  return fileNameWithPath;
}

function loadCoreConfig(mystikoNetwork: string): any {
  const fileName = getCoreConfigFileName(mystikoNetwork);
  return readJsonFile(fileName);
}

function saveCoreConfig(mystikoNetwork: string, data: string) {
  const fileName = getCoreConfigFileName(mystikoNetwork);
  const jsonData = JSON.stringify(data, null, 2);
  writeJsonFile(fileName, jsonData);
}

export async function checkCoreConfig(mystikoNetwork: string) {
  const fileName = getCoreConfigFileName(mystikoNetwork);
  await MystikoConfig.createFromFile(fileName);
}

function getChainConfig(coreConfig: any, chainId: number): any {
  for (let i = 0; i < coreConfig.chains.length; i += 1) {
    if (coreConfig.chains[i].chainId === chainId) {
      return coreConfig.chains[i];
    }
  }

  console.error(LOGRED, 'chain config not exist');
  process.exit(-1);
  return undefined;
}

function addTokenConfig(
  inCoreConfig: any,
  chainId: number,
  isERC20: boolean,
  assetSymbol: string,
  assetDecimals: number,
  assetAddress: string,
  recommendedAmounts: string[],
): any {
  const coreConfig = inCoreConfig;

  if (!isERC20) {
    return coreConfig;
  }

  const chainConfig = getChainConfig(coreConfig, chainId);
  const assetType = isERC20 ? 'erc20' : 'main';

  for (let j = 0; j < chainConfig.assets.length; j += 1) {
    if (chainConfig.assets[j].assetSymbol === assetSymbol) {
      console.log('update token configure');
      chainConfig.assets[j].assetType = assetType;
      chainConfig.assets[j].assetDecimals = assetDecimals;
      chainConfig.assets[j].recommendedAmounts = recommendedAmounts;
      if (isERC20) {
        chainConfig.assets[j].assetAddress = assetAddress;
      }
      return coreConfig;
    }
  }

  console.log('add new token configure');
  const newToken = {
    assetType,
    assetSymbol,
    assetDecimals,
    recommendedAmounts,
  };

  if (isERC20) {
    // @ts-ignore
    newToken.assetAddress = assetAddress;
  }

  chainConfig.assets.push(newToken);
  return coreConfig;
}

function addPoolContractConfig(
  inCoreConfig: any,
  chainId: number,
  version: number,
  poolName: string,
  bridgeType: string,
  address: string,
  startBlock: number,
  isERC20: boolean,
  assetAddress: string,
  minRollupFee: string,
  circuits: string[],
): any {
  const coreConfig = inCoreConfig;
  const chainConfig = getChainConfig(coreConfig, chainId);

  for (let j = 0; j < chainConfig.poolContracts.length; j += 1) {
    const poolContract = chainConfig.poolContracts[j];
    if (poolContract.address === address) {
      poolContract.version = version;
      poolContract.poolName = poolName;
      poolContract.bridgeType = bridgeType;
      poolContract.startBlock = startBlock;
      if (isERC20) {
        poolContract.assetAddress = assetAddress;
      }
      poolContract.minRollupFee = minRollupFee;
      if (circuits.length > 0) {
        poolContract.circuits = circuits;
      }

      return coreConfig;
    }
  }

  console.log('add new commitment pool configure');

  const name = 'CommitmentPool';
  const newPoolContract = {
    version,
    name,
    poolName,
    bridgeType,
    address,
    startBlock,
  };

  // @ts-ignore
  // newPoolContract.type = 'pool';

  if (isERC20) {
    // @ts-ignore
    newPoolContract.assetAddress = assetAddress;
  }
  // @ts-ignore
  newPoolContract.minRollupFee = minRollupFee;
  if (circuits.length > 0) {
    // @ts-ignore
    newPoolContract.circuits = circuits;
  }

  chainConfig.poolContracts.push(newPoolContract);
  return coreConfig;
}

function buildDepositContractName(bridgeContractName: string, bERC20: boolean): string {
  if (bERC20) {
    return `MystikoV2${bridgeContractName}ERC20`;
  }

  return `MystikoV2${bridgeContractName}Main`;
}

function addNewDepositContractConfig(
  inCoreConfig: any,
  chainId: number,
  version: number,
  name: string,
  address: string,
  startBlock: number,
  bridgeType: string,
  poolAddress: string,
  peerChainId: number,
  peerContractAddress: string,
  minAmount: string,
  minBridgeFee: string,
  minExecutorFee: string,
  serviceFee?: number,
  serviceFeeDivider?: number,
): any {
  const coreConfig = inCoreConfig;
  const chainConfig = getChainConfig(coreConfig, chainId);

  for (let j = 0; j < chainConfig.depositContracts.length; j += 1) {
    const depositContract = chainConfig.depositContracts[j];
    if (depositContract.address === address) {
      depositContract.version = version;
      depositContract.poolName = undefined;
      depositContract.startBlock = startBlock;
      depositContract.poolAddress = poolAddress;

      if (bridgeType !== BridgeLoop) {
        depositContract.peerChainId = peerChainId;
        depositContract.peerContractAddress = peerContractAddress;
      }
      depositContract.minAmount = minAmount;
      if (serviceFee !== undefined) {
        depositContract.serviceFee = serviceFee;
      }
      if (serviceFeeDivider !== undefined) {
        depositContract.serviceFeeDivider = serviceFeeDivider;
      }

      if (bridgeType !== BridgeLoop) {
        depositContract.minBridgeFee = minBridgeFee;
        depositContract.minExecutorFee = minExecutorFee;
      }

      return coreConfig;
    }
  }

  console.log('add new deposit contract configure');
  const newContract = {
    version,
    name,
    address,
    startBlock,
    bridgeType,
    poolAddress,
  };

  // @ts-ignore
  // newContract.disabled = false;

  // @ts-ignore
  // newContract.type = 'deposit';

  if (bridgeType !== BridgeLoop) {
    // @ts-ignore
    newContract.peerChainId = peerChainId;
    // @ts-ignore
    newContract.peerContractAddress = peerContractAddress;
  }

  // @ts-ignore
  newContract.minAmount = minAmount;
  if (serviceFee !== undefined) {
    // @ts-ignore
    newContract.serviceFee = serviceFee;
  }

  if (serviceFeeDivider !== undefined) {
    // @ts-ignore
    newContract.serviceFeeDivider = serviceFeeDivider;
  }
  if (bridgeType !== BridgeLoop) {
    // @ts-ignore
    newContract.minBridgeFee = minBridgeFee;
    // @ts-ignore
    newContract.minExecutorFee = minExecutorFee;
  }

  chainConfig.depositContracts.push(newContract);
  return coreConfig;
}

export function saveCoreContractJson(c: any) {
  let coreCfg = loadCoreConfig(c.mystikoNetwork);

  coreCfg = addTokenConfig(
    coreCfg,
    c.srcChainCfg.chainId,
    c.srcTokenCfg.erc20,
    c.srcTokenCfg.assetSymbol,
    c.srcTokenCfg.assetDecimals,
    c.srcTokenCfg.address,
    c.srcTokenCfg.recommendedAmounts,
  );

  coreCfg = addPoolContractConfig(
    coreCfg,
    c.srcChainCfg.chainId,
    c.cfg.version,
    c.cfg.poolName,
    c.bridgeCfg.name,
    c.srcPoolCfg.address,
    c.srcPoolCfg.syncStart,
    c.srcTokenCfg.erc20,
    c.srcTokenCfg.address,
    c.srcPoolCfg.minRollupFee,
    c.cfg.circuits,
  );

  const contractName = buildDepositContractName(c.bridgeCfg.contractName, c.srcTokenCfg.erc20);
  coreCfg = addNewDepositContractConfig(
    coreCfg,
    c.srcChainCfg.chainId,
    c.cfg.version,
    contractName,
    c.pairSrcDepositCfg.address,
    c.pairSrcDepositCfg.syncStart,
    c.bridgeCfg.name,
    c.srcPoolCfg.address,
    c.dstChainCfg.chainId,
    c.pairDstDepositCfg.address,
    c.pairSrcDepositCfg.minAmount,
    c.bridgeCfg.getMinBridgeFee(c.srcChainCfg.network),
    c.pairSrcDepositCfg.minExecutorFee,
    c.pairSrcDepositCfg.serviceFee,
    c.pairSrcDepositCfg.serviceFeeDivider,
  );

  saveCoreConfig(c.mystikoNetwork, coreCfg);
}
