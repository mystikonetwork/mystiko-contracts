import developmentJson from '../json/deploy/development.json';
import testnetJson from '../json/deploy/testnet.json';
import mainnetJson from '../json/deploy/mainnet.json';

import { getMystikoNetwork, writeJsonFile } from '../common/utils';
import { LOGRED, MystikoTestnet, MystikoMainnet, MystikoDevelopment, BridgeLoop } from '../common/constant';
import { DeployConfig } from './deployConfig';

function load(mystikoNetwork: string): DeployConfig {
  let cfg: DeployConfig;
  if (mystikoNetwork === MystikoTestnet) {
    cfg = new DeployConfig(testnetJson);
  } else if (mystikoNetwork === MystikoMainnet) {
    cfg = new DeployConfig(mainnetJson);
  } else if (mystikoNetwork === MystikoDevelopment) {
    cfg = new DeployConfig(developmentJson);
  } else {
    console.error(LOGRED, 'load config network not support');
    process.exit(-1);
  }
  return cfg;
}

export function saveConfig(mystikoNetwork: string, cfg: DeployConfig) {
  const copyCfg = cfg.clone();

  if (mystikoNetwork === MystikoTestnet) {
    writeJsonFile('./src/json/deploy/testnet.json', copyCfg.toString());
  } else if (mystikoNetwork === MystikoMainnet) {
    writeJsonFile('./src/json/deploy/mainnet.json', copyCfg.toString());
  } else if (mystikoNetwork === MystikoDevelopment) {
    writeJsonFile('./src/json/deploy/development.json', copyCfg.toString());
  } else {
    console.error(LOGRED, 'save base address config network not support');
  }
}

export function loadConfig(taskArgs: any) {
  const srcNetwork = taskArgs.src;
  const dstNetwork = taskArgs.dst;
  const bridgeName = taskArgs.bridge;
  const assetSymbol = taskArgs.token;
  const { override } = taskArgs;

  const mystikoNetwork = getMystikoNetwork(srcNetwork);

  if (bridgeName === BridgeLoop && srcNetwork !== dstNetwork) {
    console.error(LOGRED, 'src and dst must be same when bridge type is loop');
    process.exit(-1);
  }

  const cfg = load(mystikoNetwork);
  if (cfg === undefined) {
    console.error(LOGRED, 'cfg load empty');
    process.exit(-1);
  }

  const bridgeCfg = cfg.getBridge(bridgeName);
  if (bridgeCfg === undefined) {
    console.error(LOGRED, 'bridge configure not exist');
    process.exit(-1);
  }

  const srcChainCfg = cfg.getChain(srcNetwork);
  if (srcChainCfg === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const srcTokenCfg = srcChainCfg.getToken(assetSymbol);
  if (srcTokenCfg === undefined) {
    console.error(LOGRED, 'chain token not configure');
    process.exit(-1);
  }

  const depositPairCfg = bridgeCfg.getBridgeTokenPair(srcNetwork, assetSymbol, dstNetwork);
  if (depositPairCfg === undefined) {
    console.log(LOGRED, 'bridge token pair configure not exist');
    process.exit(-1);
  }

  const pairSrcDepositCfg = depositPairCfg.getPairDepositCfg(srcNetwork, assetSymbol);
  if (pairSrcDepositCfg === undefined) {
    console.log(LOGRED, 'src deposit pair not exist');
    process.exit(-1);
  }

  const srcPoolCfg = bridgeCfg.getCommitmentPoolConfig(srcNetwork, assetSymbol);

  const pairDstDepositCfg = depositPairCfg.getPairPeerDepositCfg(srcNetwork, assetSymbol, dstNetwork);
  if (pairDstDepositCfg === undefined) {
    console.log(LOGRED, 'dst deposit pair  not exist');
    process.exit(-1);
  }

  const dstChainCfg = cfg.getChain(dstNetwork);
  if (dstChainCfg === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const dstTokenName = pairDstDepositCfg.assetSymbol;
  const dstTokenCfg = dstChainCfg.getToken(dstTokenName);
  if (dstTokenCfg === undefined) {
    console.error(LOGRED, 'chain token not configure');
    process.exit(-1);
  }

  const proxyCfg = bridgeCfg.getBridgeProxyConfig(srcNetwork);

  const operatorCfg = cfg.getOperator();
  if (operatorCfg === undefined) {
    console.error(LOGRED, 'operator not configure');
    process.exit(-1);
  }

  return {
    mystikoNetwork,
    cfg,
    bridgeCfg,
    srcChainCfg,
    dstChainCfg,
    srcTokenCfg,
    dstTokenCfg,
    pairSrcDepositCfg,
    pairDstDepositCfg,
    srcPoolCfg,
    proxyCfg,
    operatorCfg,
    override,
  };
}
