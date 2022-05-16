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
import { BridgeCeler, BridgeLoop, BridgeTBridge, LOGRED, MystikoTestnet } from '../common/constant';
import { DepositDeployConfig } from '../config/bridgeDeposit';
import { saveConfig } from '../config/config';

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
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  check: boolean,
) {
  if (inDepositCfg.isSanctionCheckSet) {
    return;
  }
  const depositCfg = inDepositCfg;
  console.log('toggle deposit sanction check disable ', check);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.toggleSanctionCheck(check);
    console.log('deposit rsp hash ', rsp.hash);
    depositCfg.isSanctionCheckSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function deployDepositContract(
  c: any,
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  srcChainCfg: ChainConfig,
  srcChainTokenCfg: ChainTokenConfig,
  dstChainTokenCfg: ChainTokenConfig,
  pairSrcDepositContractCfg: DepositDeployConfig,
  commitmentPoolAddress: string,
  override: string,
) {
  const srcDepositCfg = pairSrcDepositContractCfg;

  // todo eric override should set old contract disable to core configure
  if (override === 'true' || srcDepositCfg.address === '') {
    srcDepositCfg.reset();
  }

  if (srcDepositCfg.address !== '') {
    return srcDepositCfg;
  }

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

  const syncStart = await ethers.provider.getBlockNumber();
  // todo support update contract , flag depositDisabled
  console.log('mystiko core deposit address ', coreContract.address, ' block height ', syncStart);
  srcDepositCfg.address = coreContract.address;
  srcDepositCfg.syncStart = syncStart;

  saveConfig(c.mystikoNetwork, c.cfg);
  return srcDepositCfg;
}

export async function setBridgeProxyAddress(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  bridgeProxyAddress: string,
) {
  if (inDepositCfg.isBridgeProxySet) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set bridge proxy address');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setBridgeProxyAddress(bridgeProxyAddress);
    console.log('rsp hash ', rsp.hash);
    depositCfg.isBridgeProxySet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setMinBridgeFee(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  fee: string,
) {
  if (inDepositCfg.isMinBridgeFeeSet) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set min bridge fee');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMinBridgeFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.isMinBridgeFeeSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setMinExecutorFee(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  fee: string,
) {
  if (inDepositCfg.isMinExecutorFeeSet) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set min executor fee');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMinExecutorFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.isMinExecutorFeeSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setPeerMinExecutorFee(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  fee: string,
) {
  if (inDepositCfg.isPeerMinExecutorFeeSet) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set peer min executor fee');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setPeerMinExecutorFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.isPeerMinExecutorFeeSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setPeerMinRollupFee(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  fee: string,
) {
  if (inDepositCfg.isPeerMinRollupFeeSet) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set peer min rollup fee');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setPeerMinRollupFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.isPeerMinRollupFeeSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setMinAmount(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  minAmount: string,
) {
  if (inDepositCfg.isMinAmountSet) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('set min amount');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMinAmount(minAmount);
    console.log('rsp hash ', rsp.hash);
    depositCfg.isMinAmountSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setAssociatedCommitmentPool(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  poolAddress: string,
) {
  if (inDepositCfg.isCommitmentPoolSet) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('set associated commitment pool');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setAssociatedCommitmentPool(poolAddress);
    console.log('rsp hash ', rsp.hash);
    depositCfg.isCommitmentPoolSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function doDepositContractConfigure(
  c: any,
  mystikoNetwork: string,
  depositCfg: DepositDeployConfig,
  bridgeCfg: BridgeConfig,
  srcChainCfg: ChainConfig,
  srcChainTokenCfg: ChainTokenConfig,
  dstChainTokenCfg: ChainTokenConfig,
  pairSrcDepositContractCfg: DepositDeployConfig,
  commitmentPoolAddress: string,
  bridgeProxyAddress: string,
) {
  console.log('do deposit contract configure');

  if (bridgeCfg.name !== BridgeLoop) {
    await setBridgeProxyAddress(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, bridgeProxyAddress);

    const bridgeFee = bridgeCfg.getMinBridgeFee(srcChainCfg.network);
    if (bridgeFee === undefined) {
      console.log('minimal bridge fee not configure');
      process.exit(-1);
    }
    await setMinBridgeFee(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, bridgeFee);

    await setMinExecutorFee(
      c,
      bridgeCfg.name,
      srcChainTokenCfg.erc20,
      depositCfg,
      srcChainTokenCfg.minExecutorFee,
    );
    await setPeerMinExecutorFee(
      c,
      bridgeCfg.name,
      srcChainTokenCfg.erc20,
      depositCfg,
      dstChainTokenCfg.minExecutorFee,
    );
    await setPeerMinRollupFee(
      c,
      bridgeCfg.name,
      srcChainTokenCfg.erc20,
      depositCfg,
      dstChainTokenCfg.minRollupFee,
    );
  }

  await setMinAmount(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, srcChainTokenCfg.minAmount);
  await setAssociatedCommitmentPool(
    c,
    bridgeCfg.name,
    srcChainTokenCfg.erc20,
    depositCfg,
    commitmentPoolAddress,
  );

  if (mystikoNetwork === MystikoTestnet) {
    await toggleDepositSanctionCheck(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, true);
  }
}

export async function setPeerContract(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositConfig: DepositDeployConfig,
  peerChainId: number,
  peerContractAddress: string,
) {
  if (inDepositConfig.isPeerContractSet) {
    return;
  }
  const depositConfig = inDepositConfig;
  console.log('set peer contract');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositConfig.address);

  try {
    const rsp = await coreContract.setPeerContract(peerChainId, peerContractAddress);
    console.log('rsp hash ', rsp.hash);
    depositConfig.isPeerContractSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
