import {
  MystikoV2LoopERC20__factory,
  MystikoV2LoopMain__factory,
  MystikoV2CelerERC20__factory,
  MystikoV2CelerMain__factory,
  MystikoV2TBridgeERC20__factory,
  MystikoV2TBridgeMain__factory,
} from '@mystikonetwork/contracts-abi';
import { BridgeConfig } from '../config/bridge';
import { ChainConfig } from '../config/chain';
import { ChainTokenConfig } from '../config/chainToken';
import { ContractDeployConfig } from '../config/bridgeDeploy';
import { BridgeCeler, BridgeLoop, BridgeTBridge, LOGRED, MystikoTestnet } from '../common/constant';
import { delay } from '../common/utils';

let MystikoV2LoopERC20: MystikoV2LoopERC20__factory;
let MystikoV2LoopMain: MystikoV2LoopMain__factory;
let MystikoV2TBridgeERC20: MystikoV2TBridgeERC20__factory;
let MystikoV2TBridgeMain: MystikoV2TBridgeMain__factory;
let MystikoV2CelerERC20: MystikoV2CelerERC20__factory;
let MystikoV2CelerMain: MystikoV2CelerMain__factory;

let ethers: any;

export async function initDepositContractFactory(eth: any) {
  ethers = eth;

  MystikoV2LoopERC20 = await ethers.getContractFactory('MystikoV2LoopERC20');
  MystikoV2LoopMain = await ethers.getContractFactory('MystikoV2LoopMain');
  MystikoV2TBridgeERC20 = await ethers.getContractFactory('MystikoV2TBridgeERC20');
  MystikoV2TBridgeMain = await ethers.getContractFactory('MystikoV2TBridgeMain');
  MystikoV2CelerERC20 = await ethers.getContractFactory('MystikoV2CelerERC20');
  MystikoV2CelerMain = await ethers.getContractFactory('MystikoV2CelerMain');
}

export function getMystikoDeployContract(bridge: string, bErc20: boolean) {
  let coreContract: any;
  if (bridge === BridgeLoop) {
    if (bErc20) {
      coreContract = MystikoV2LoopERC20;
    } else {
      coreContract = MystikoV2LoopMain;
    }
  } else if (bridge === BridgeTBridge) {
    if (bErc20) {
      coreContract = MystikoV2TBridgeERC20;
    } else {
      coreContract = MystikoV2TBridgeMain;
    }
  } else if (bridge === BridgeCeler) {
    if (bErc20) {
      coreContract = MystikoV2CelerERC20;
    } else {
      coreContract = MystikoV2CelerMain;
    }
  } else {
    console.error(LOGRED, 'bridge not support');
  }
  return coreContract;
}

export async function toggleDepositSanctionCheck(
  bridgeName: string,
  erc20: boolean,
  addr: string,
  check: boolean,
) {
  console.log('toggle deposit sanction check disable ', check);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(addr);

  try {
    await coreContract.toggleSanctionCheck(check);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function deployDepositContract(
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  srcChainCfg: ChainConfig,
  srcChainTokenCfg: ChainTokenConfig,
  dstChainTokenCfg: ChainTokenConfig,
  pairSrcDepositContractCfg: ContractDeployConfig,
  commitmentPoolAddress: string,
  bridgeProxyAddress: string,
) {
  const srcDepositCfg = pairSrcDepositContractCfg;
  const DepositContractFactory = getMystikoDeployContract(bridgeCfg.name, srcChainTokenCfg.erc20);
  if (DepositContractFactory === undefined) {
    process.exit(-1);
  }

  console.log('deploy Mystiko deposit contract');
  let coreContract: any;
  if (srcChainTokenCfg.erc20) {
    // @ts-ignore
    coreContract = await DepositContractFactory.deploy(srcChainCfg.hasher3Address, srcChainTokenCfg.address);
  } else {
    // @ts-ignore
    coreContract = await DepositContractFactory.deploy(srcChainCfg.hasher3Address);
  }
  await coreContract.deployed();

  await delay(10000);

  if (bridgeCfg.name !== BridgeLoop) {
    await coreContract.setBridgeProxyAddress(bridgeProxyAddress);
    await coreContract.setMinBridgeFee(bridgeCfg.getMinBridgeFee(srcChainCfg.network));
    await coreContract.setMinExecutorFee(srcChainTokenCfg.minExecutorFee);

    await coreContract.setPeerMinExecutorFee(dstChainTokenCfg.minExecutorFee);
    await coreContract.setPeerMinRollupFee(dstChainTokenCfg.minRollupFee);
  }

  await coreContract.setMinAmount(srcChainTokenCfg.minAmount);
  await coreContract.setAssociatedCommitmentPool(commitmentPoolAddress);

  if (mystikoNetwork === MystikoTestnet) {
    toggleDepositSanctionCheck(bridgeCfg.name, srcChainTokenCfg.erc20, coreContract.address, true);
  }

  const syncStart = await ethers.provider.getBlockNumber();

  // todo support update contract , flag depositDisabled
  console.log('mystiko core deposit address ', coreContract.address, ' block height ', syncStart);
  srcDepositCfg.address = coreContract.address;
  srcDepositCfg.syncStart = syncStart;
  return coreContract.address;
}

export async function setPeerContract(
  bridgeName: string,
  erc20: boolean,
  addr: string,
  peerChainId: number,
  peerContractAddress: string,
) {
  console.log('add set peer contr whitelist');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(addr);

  try {
    await coreContract.setPeerContract(peerChainId, peerContractAddress);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
