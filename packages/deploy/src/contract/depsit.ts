import {
  MystikoV2WithLoopERC20__factory,
  MystikoV2WithLoopMain__factory,
  MystikoV2WithCelerERC20__factory,
  MystikoV2WithCelerMain__factory,
  MystikoV2WithTBridgeERC20__factory,
  MystikoV2WithTBridgeMain__factory,
} from '@mystikonetwork/contracts-abi';
import { BridgeConfig } from '../config/bridge';
import { ChainConfig } from '../config/chain';
import { ChainTokenConfig } from '../config/chainToken';
import { ContractDeployConfig } from '../config/bridgeDeploy';
import { BridgeCeler, BridgeLoop, BridgeTBridge, LOGRED, MystikoTestnet } from '../common/constant';
import { delay } from '../common/utils';

let MystikoV2WithLoopERC20: MystikoV2WithLoopERC20__factory;
let MystikoV2WithLoopMain: MystikoV2WithLoopMain__factory;
let MystikoV2WithTBridgeERC20: MystikoV2WithTBridgeERC20__factory;
let MystikoV2WithTBridgeMain: MystikoV2WithTBridgeMain__factory;
let MystikoV2WithCelerERC20: MystikoV2WithCelerERC20__factory;
let MystikoV2WithCelerMain: MystikoV2WithCelerMain__factory;

let ethers: any;

export async function initDepositContractFactory(eth: any) {
  ethers = eth;

  MystikoV2WithLoopERC20 = await ethers.getContractFactory('MystikoV2WithLoopERC20');
  MystikoV2WithLoopMain = await ethers.getContractFactory('MystikoV2WithLoopMain');
  MystikoV2WithTBridgeERC20 = await ethers.getContractFactory('MystikoV2WithTBridgeERC20');
  MystikoV2WithTBridgeMain = await ethers.getContractFactory('MystikoV2WithTBridgeMain');
  MystikoV2WithCelerERC20 = await ethers.getContractFactory('MystikoV2WithCelerERC20');
  MystikoV2WithCelerMain = await ethers.getContractFactory('MystikoV2WithCelerMain');
}

export function getMystikoDeployContract(bridge: string, bErc20: boolean) {
  let coreContract: any;
  if (bridge === BridgeLoop) {
    if (bErc20) {
      coreContract = MystikoV2WithLoopERC20;
    } else {
      coreContract = MystikoV2WithLoopMain;
    }
  } else if (bridge === BridgeTBridge) {
    if (bErc20) {
      coreContract = MystikoV2WithTBridgeERC20;
    } else {
      coreContract = MystikoV2WithTBridgeMain;
    }
  } else if (bridge === BridgeCeler) {
    if (bErc20) {
      coreContract = MystikoV2WithCelerERC20;
    } else {
      coreContract = MystikoV2WithCelerMain;
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
