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
import { checkNonceExpect, waitConfirm } from '../common/utils';
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
  console.log('set deposit sanction check ', check);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);
  let rsp: any;
  try {
    if (check) {
      rsp = await coreContract.enableSanctionsCheck();
      console.log('deposit rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    } else {
      rsp = await coreContract.disableSanctionsCheck();
      console.log('deposit rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }

    depositCfg.updateSanctionCheck(check, rsp.hash);
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

  const nonce = await checkNonceExpect(ethers, srcDepositCfg.nonce);

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
  srcDepositCfg.nonce = nonce;

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
  let rsp: any;
  try {
    if (bridgeName === BridgeTBridge || bridgeName === BridgeCeler) {
      rsp = await coreContract.setBridgeProxyAddress(bridgeProxy.address);
      console.log('rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    } else if (bridgeName === BridgeAxelar) {
      const rsp1 = await coreContract.setBridgeProxyAddress(bridgeProxy.address);
      console.log('rsp hash ', rsp1.hash);
      console.log('set axelar gas receiver address');
      await waitConfirm(ethers, rsp1, true);
      rsp = await coreContract.setAxelarGasReceiver(bridgeProxy.gasReceiver);
      console.log('rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    } else if (bridgeName === BridgeLayerZero) {
      rsp = await coreContract.setEndpoint(bridgeProxy.mapChainId, bridgeProxy.address);
      console.log('rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }
    depositCfg.updateBridgeProxy(bridgeProxy.address, rsp.hash);
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
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateBridgeProxy(bridgeProxyAddress, rsp.hash);
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
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateMinBridgeFee(fee, rsp.hash);
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
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateMinExecutorFee(fee, rsp.hash);
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
    await waitConfirm(ethers, rsp, true);
    depositCfg.updatePeerMinExecutorFee(fee, rsp.hash);
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
    await waitConfirm(ethers, rsp, true);
    depositCfg.updatePeerMinRollupFee(fee, rsp.hash);
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

  console.log('set min amount ', minAmount);
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMinAmount(minAmount);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateMinAmount(minAmount, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setMaxAmount(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  maxAmount: string,
) {
  if (!inDepositCfg.isMaxAmountChange(maxAmount)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('set max amount');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setMaxAmount(maxAmount);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateMaxAmount(maxAmount, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function updateDepositAmountLimits(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
  maxAmount: string,
  minAmount: string,
) {
  if (!inDepositCfg.isMaxAmountChange(maxAmount) && inDepositCfg.isMinAmountChange(maxAmount)) {
    return;
  }

  const depositCfg = inDepositCfg;

  console.log('update deposit amount limits');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.updateDepositAmountLimits(maxAmount, minAmount);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateMaxAmount(maxAmount, rsp.hash);
    depositCfg.updateMinAmount(minAmount, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function changeDepositOperator(
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

  const RevertNotChanged = '0x36a1c33f';
  try {
    const rsp = await coreContract.changeOperator(operator);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateOperator(operator, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    const msg: string = err.message;
    if (msg.includes(RevertNotChanged) || msg.includes('revert')) {
      console.log('operator not changed');
      depositCfg.updateOperator(operator, '');
      saveConfig(c.mystikoNetwork, c.cfg);
      return;
    }
    console.log('msg ', msg);
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
    await waitConfirm(ethers, rsp, true);
    depositCfg.updateCommitmentPool(poolAddress, rsp.hash);
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
  if (depositCfg.disabled) {
    console.error(LOGRED, 'deposit contract is disabled');
    process.exit(1);
  }

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

  await updateDepositAmountLimits(
    c,
    bridgeCfg.name,
    srcChainTokenCfg.erc20,
    depositCfg,
    srcChainTokenCfg.maxAmount,
    srcChainTokenCfg.minAmount,
  );
  await setAssociatedCommitmentPool(
    c,
    bridgeCfg.name,
    srcChainTokenCfg.erc20,
    depositCfg,
    commitmentPoolAddress,
  );

  if (mystikoNetwork === MystikoTestnet) {
    await setDepositSanctionCheck(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, false);
  }

  if (operatorCfg.admin !== '') {
    await changeDepositOperator(c, bridgeCfg.name, srcChainTokenCfg.erc20, depositCfg, operatorCfg.admin);
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
    await waitConfirm(ethers, rsp, true);
    depositConfig.updatePeerContract(peerContractAddress, rsp.hash);
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
  srcContractAddress: string,
  peerContractAddress: string,
) {
  const lzPeerAddress = ethers.utils.solidityPack(
    ['address', 'address'],
    [peerContractAddress, srcContractAddress],
  );
  console.log('lzPeerAddress ', lzPeerAddress);
  if (!inDepositConfig.isTrustedRemoteChange(lzPeerAddress)) {
    return;
  }
  const depositConfig = inDepositConfig;
  console.log('set trusted remote');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositConfig.address);

  try {
    const rsp = await coreContract.setTrustedRemote(peerLayerZeroChainId, lzPeerAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    depositConfig.updateTrustedRemote(lzPeerAddress, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function disableDeposit(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositCfg: DepositDeployConfig,
) {
  if (inDepositCfg.disabled) {
    return;
  }
  const depositCfg = inDepositCfg;

  console.log('disable deposit contract');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositCfg.address);

  try {
    const rsp = await coreContract.setDepositsDisabled(true);
    console.log('rsp hash ', rsp.hash);
    const block = await waitConfirm(ethers, rsp, true);
    depositCfg.updateDisabledAt(block, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function checkOneTx(tx: string | undefined) {
  if (tx === undefined || tx === '') {
    console.log('ignore tx', tx);
    return;
  }

  const receipt = await ethers.provider.getTransactionReceipt(tx);
  if (receipt === null) {
    console.log(LOGRED, 'tx not confirmed ', tx);
    process.exit(-1);
  }

  if (receipt.status !== 1) {
    console.log(LOGRED, 'tx failed', tx);
    process.exit(-1);
  }
}
