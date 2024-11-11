import { getMystikoNetwork, readJsonFile, writeJsonFile } from '../common/utils';
import {
  LOGRED,
  MystikoTestnet,
  MystikoMainnet,
  MystikoDevelopment,
  BridgeLoop,
  BridgeTBridge,
} from '../common/constant';
import { DeployConfig } from './deployConfig';

function configFileName(mystikoNetwork: string): string {
  if (mystikoNetwork === MystikoTestnet) {
    return './src/json/deploy/testnet-'
      .concat(process.env.POOLNAME ? process.env.POOLNAME : '')
      .concat('.json');
  }
  if (mystikoNetwork === MystikoMainnet) {
    return './src/json/deploy/mainnet-'
      .concat(process.env.POOLNAME ? process.env.POOLNAME : '')
      .concat('.json');
  }
  if (mystikoNetwork === MystikoDevelopment) {
    return './src/json/deploy/development.json';
  }
  console.error(LOGRED, 'config network not support');
  process.exit(-1);
  return '';
}

function load(mystikoNetwork: string): DeployConfig {
  const fileName = configFileName(mystikoNetwork);
  const deployConfig = readJsonFile(fileName);
  return new DeployConfig(deployConfig);
}

export function saveConfig(mystikoNetwork: string, cfg: DeployConfig) {
  const copyCfg = cfg.clone();
  const fileName = configFileName(mystikoNetwork);
  writeJsonFile(fileName, copyCfg.toString());
}

export function loadDeployConfig(mystikoNetwork: string) {
  const cfg = load(mystikoNetwork);
  if (cfg === undefined) {
    console.error(LOGRED, 'cfg load empty');
    process.exit(-1);
  }
  return cfg;
}

export function loadConfig(taskArgs: any) {
  let srcNetwork = taskArgs.src;
  if (srcNetwork === 'localhost') {
    srcNetwork = 'hardhat';
  }
  let dstNetwork = taskArgs.dst;
  if (dstNetwork === 'localhost') {
    dstNetwork = 'hardhat';
  }

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

  let bridgeProxyCfg;
  if (bridgeCfg.name === BridgeTBridge) {
    bridgeProxyCfg = bridgeCfg.getBridgeProxyConfig(srcNetwork, dstNetwork);
  } else {
    bridgeProxyCfg = bridgeCfg.getBridgeProxyConfig(srcNetwork, '');
  }

  let peerBridgeProxyCfg;
  if (bridgeCfg.name === BridgeTBridge) {
    peerBridgeProxyCfg = bridgeCfg.getBridgeProxyConfig(dstNetwork, srcNetwork);
  } else {
    peerBridgeProxyCfg = bridgeCfg.getBridgeProxyConfig(dstNetwork, '');
  }

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
    bridgeProxyCfg,
    peerBridgeProxyCfg,
    operatorCfg,
    override,
  };
}
