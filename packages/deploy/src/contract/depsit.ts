import {
  MystikoV2LoopERC20__factory,
  MystikoV2LoopMain__factory,
  MystikoV2CelerERC20__factory,
  MystikoV2CelerMain__factory,
  MystikoV2TBridgeERC20__factory,
  MystikoV2TBridgeMain__factory,
  MystikoV2LayerZeroERC20__factory,
  MystikoV2LayerZeroMain__factory,
  MystikoV2AxelarERC20__factory,
  MystikoV2AxelarMain__factory,
} from '@mystikonetwork/contracts-abi';
import { BridgeConfig } from '../config/bridge';
import { ChainConfig } from '../config/chain';
import { ChainTokenConfig } from '../config/chainToken';
import {
  BridgeAxelar,
  BridgeCeler,
  BridgeLayerZero,
  BridgeLoop,
  BridgeTBridge,
  LOGRED,
  MystikoTestnet,
} from '../common/constant';
import { DepositDeployConfig } from '../config/bridgeDeposit';
import { saveConfig } from '../config/config';
import { BridgeProxyConfig } from '../config/bridgeProxy';
import { OperatorConfig } from '../config/operator';

let MystikoV2LoopERC20: MystikoV2LoopERC20__factory;
let MystikoV2LoopMain: MystikoV2LoopMain__factory;
let MystikoV2TBridgeERC20: MystikoV2TBridgeERC20__factory;
let MystikoV2TBridgeMain: MystikoV2TBridgeMain__factory;
let MystikoV2CelerERC20: MystikoV2CelerERC20__factory;
let MystikoV2CelerMain: MystikoV2CelerMain__factory;
let MystikoV2LayerZeroERC20: MystikoV2LayerZeroERC20__factory;
let MystikoV2LayerZeroMain: MystikoV2LayerZeroMain__factory;
let MystikoV2AxelarERC20: MystikoV2AxelarERC20__factory;
let MystikoV2AxelarMain: MystikoV2AxelarMain__factory;

let ethers: any;

export async function initDepositContractFactory(eth: any) {
  ethers = eth;

  MystikoV2LoopERC20 = await ethers.getContractFactory('MystikoV2LoopERC20');
  MystikoV2LoopMain = await ethers.getContractFactory('MystikoV2LoopMain');
  MystikoV2TBridgeERC20 = await ethers.getContractFactory('MystikoV2TBridgeERC20');
  MystikoV2TBridgeMain = await ethers.getContractFactory('MystikoV2TBridgeMain');
  MystikoV2CelerERC20 = await ethers.getContractFactory('MystikoV2CelerERC20');
  MystikoV2CelerMain = await ethers.getContractFactory('MystikoV2CelerMain');
  MystikoV2LayerZeroERC20 = await ethers.getContractFactory('MystikoV2LayerZeroERC20');
  MystikoV2LayerZeroMain = await ethers.getContractFactory('MystikoV2LayerZeroMain');
  MystikoV2AxelarERC20 = await ethers.getContractFactory('MystikoV2AxelarERC20');
  MystikoV2AxelarMain = await ethers.getContractFactory('MystikoV2AxelarMain');
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
  } else if (bridge === BridgeLayerZero) {
    if (bErc20) {
      coreContract = MystikoV2LayerZeroERC20;
    } else {
      coreContract = MystikoV2LayerZeroMain;
    }
  } else if (bridge === BridgeAxelar) {
    if (bErc20) {
      coreContract = MystikoV2AxelarERC20;
    } else {
      coreContract = MystikoV2AxelarMain;
    }
  } else {
    console.error(LOGRED, 'bridge not support');
  }
  return coreContract;
}

export async function setDepositSanctionCheck(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  check: boolean,
) {
  if (!inDepositCfg.isSanctionCheckChange(check)) {
    return;
  }

  const depositCfg = inDepositCfg;
  console.log('set deposit sanction check disable ', check);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    if (check) {
      const rsp = await coreContract.enableSanctions();
      console.log('deposit rsp hash ', rsp.hash);
    } else {
      const rsp = await coreContract.disableSanctions();
      console.log('deposit rsp hash ', rsp.hash);
    }

    depositCfg.updateSanctionCheck(check);
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
    console.log('depositContract factory not exist');
    process.exit(-1);
  }

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
  bridgeProxy: BridgeProxyConfig,
) {
  if (!inDepositCfg.isBridgeProxyChange(bridgeProxy.address)) {
    return;
  }

  const depositCfg = inDepositCfg;
  console.log('set bridge proxy address');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    if (bridgeName === BridgeTBridge || bridgeName === BridgeCeler) {
      const rsp = await coreContract.setBridgeProxyAddress(bridgeProxy.address);
      console.log('rsp hash ', rsp.hash);
    } else if (bridgeName === BridgeAxelar) {
      const rsp = await coreContract.setBridgeProxyAddress(bridgeProxy.address);
      console.log('rsp hash ', rsp.hash);
      console.log('set axelar gas receiver address');
      const rsp2 = await coreContract.setAxelarGasReceiver(bridgeProxy.gasReceiver);
      console.log('rsp hash ', rsp2.hash);
    } else if (bridgeName === BridgeLayerZero) {
      const rsp = await coreContract.setEndpoint(bridgeProxy.mapChainId, bridgeProxy.address);
      console.log('rsp hash ', rsp.hash);
    }
    depositCfg.updateBridgeProxy(bridgeProxy.address);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setLzEndpoint(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  bridgeProxyAddress: string,
) {
  if (!inDepositCfg.isBridgeProxyChange(bridgeProxyAddress)) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set bridge proxy address');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setBridgeProxyAddress(bridgeProxyAddress);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateBridgeProxy(bridgeProxyAddress);
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
  if (!inDepositCfg.isMinBridgeFeeChange(fee)) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set min bridge fee');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMinBridgeFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateMinBridgeFee(fee);
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
  inFee: string,
) {
  let fee = inFee;
  if (bridgeName === BridgeLayerZero || bridgeName === BridgeAxelar) {
    fee = '0';
  }

  if (!inDepositCfg.isMinExecutorFeeChange(fee)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('set min executor fee ', fee);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMinExecutorFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateMinExecutorFee(fee);
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
  inFee: string,
) {
  let fee = inFee;
  if (bridgeName === BridgeLayerZero || bridgeName === BridgeAxelar) {
    fee = '0';
  }

  if (!inDepositCfg.isPeerMinExecutorFeeChange(fee)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('set peer min executor fee ', fee);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setPeerMinExecutorFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updatePeerMinExecutorFee(fee);
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
  if (!inDepositCfg.isPeerMinRollupFeeChange(fee)) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('set peer min rollup fee');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setPeerMinRollupFee(fee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updatePeerMinRollupFee(fee);
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
  if (!inDepositCfg.isMinAmountChange(minAmount)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('set min amount');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMinAmount(minAmount);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateMinAmount(minAmount);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function changeOperator(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  operator: string,
) {
  if (!inDepositCfg.isOperatorChange(operator)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('change operator');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.changeOperator(operator);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateOperator(operator);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function changeServiceFeeCollector(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  serviceFeeCollector: string,
) {
  if (!inDepositCfg.isServiceFeeCollectorChange(serviceFeeCollector)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('change service fee collector');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.changeServiceFeeCollector(serviceFeeCollector);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateServiceFeeCollector(serviceFeeCollector);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function changeServiceFee(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  serviceFee: number,
) {
  if (!inDepositCfg.isServiceFeeChange(serviceFee)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('change service fee');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.changeServiceFee(serviceFee);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateServiceFee(serviceFee);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function changeServiceFeeDivider(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  serviceFeeDivider: number,
) {
  if (!inDepositCfg.isServiceFeeDividerChange(serviceFeeDivider)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('change service fee divider');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.changeServiceFeeDivider(serviceFeeDivider);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateServiceFeeDivider(serviceFeeDivider);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function changeDepositDisable(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  disable: boolean,
) {
  if (!inDepositCfg.isDepositDisableChange(disable)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('disable deposit ', disable);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.toggleDeposits(disable);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateDepositDisable(disable);
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
  if (!inDepositCfg.isCommitmentPoolChange(poolAddress)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('set associated commitment pool');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setAssociatedCommitmentPool(poolAddress);
    console.log('rsp hash ', rsp.hash);
    depositCfg.updateCommitmentPool(poolAddress);
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
  operatorCfg: OperatorConfig,
  bridgeProxy?: BridgeProxyConfig,
) {
  console.log('do deposit contract configure');

  if (bridgeCfg.name !== BridgeLoop) {
    if (bridgeProxy === undefined) {
      console.log(' bridge proxy not configure');
      process.exit(-1);
    }

    await setBridgeProxyAddress(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, bridgeProxy);

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

  if (operatorCfg.admin !== '') {
    await changeOperator(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, operatorCfg.admin);
  }

  await changeServiceFeeCollector(
    c,
    bridgeCfg.name,
    srcChainTokenCfg.erc20,
    depositCfg,
    operatorCfg.serviceFeeCollector,
  );

  if (srcChainTokenCfg.serviceFee !== undefined) {
    await changeServiceFee(
      c,
      bridgeCfg.name,
      srcChainTokenCfg.erc20,
      depositCfg,
      srcChainTokenCfg.serviceFee,
    );
  }

  if (srcChainTokenCfg.serviceFeeDivider !== undefined) {
    await changeServiceFeeDivider(
      c,
      bridgeCfg.name,
      srcChainTokenCfg.erc20,
      depositCfg,
      srcChainTokenCfg.serviceFeeDivider,
    );
  }

  if (c.depositDisable) {
    await changeDepositDisable(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, true);
  }

  if (mystikoNetwork === MystikoTestnet) {
    await setDepositSanctionCheck(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, false);
  }
}

export async function setPeerContract(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositConfig: DepositDeployConfig,
  peerChainId: number,
  peerChainMapName: string,
  peerContractAddress: string,
) {
  if (!inDepositConfig.isPeerContractChange(peerContractAddress)) {
    return;
  }
  const depositConfig = inDepositConfig;
  console.log('set peer contract');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositConfig.address);

  try {
    const rsp = await coreContract.setPeerContract(peerChainId, peerChainMapName, peerContractAddress);
    console.log('rsp hash ', rsp.hash);

    depositConfig.updatePeerContract(peerContractAddress);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setTrustedRemote(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositConfig: DepositDeployConfig,
  peerLayerZeroChainId: number,
  peerContractAddress: string,
) {
  if (!inDepositConfig.isTrustedRemoteChange(peerContractAddress)) {
    return;
  }
  const depositConfig = inDepositConfig;
  console.log('set trusted remote');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositConfig.address);

  try {
    const rsp = await coreContract.setTrustedRemote(peerLayerZeroChainId, peerContractAddress);
    console.log('rsp hash ', rsp.hash);
    depositConfig.updateTrustedRemote(peerContractAddress);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}
