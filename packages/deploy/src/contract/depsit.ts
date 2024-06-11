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
} from '../common/constant';
import { DepositDeployConfig } from '../config/bridgeDeposit';
import { saveConfig } from '../config/config';
import { BridgeProxyConfig } from '../config/bridgeProxy';
import { getSettingsCenterContract } from './settings';

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

export async function deployDepositContract(
  c: any,
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  srcChainCfg: ChainConfig,
  srcChainTokenCfg: ChainTokenConfig,
  dstChainTokenCfg: ChainTokenConfig,
  pairSrcDepositContractCfg: DepositDeployConfig,
  commitmentPoolAddress: string,
  bridgeProxyConfig: BridgeProxyConfig | undefined,
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
  if (bridgeCfg.name === BridgeLoop) {
    const localConfig = {
      minAmount: srcChainTokenCfg.minAmount,
      maxAmount: srcChainTokenCfg.maxAmount,
    };

    if (srcChainTokenCfg.erc20) {
      // @ts-ignore
      coreContract = await DepositContractFactory.deploy(
        srcChainCfg.hasher3Address,
        srcChainTokenCfg.address,
        srcChainCfg.settingsCenter,
        localConfig,
      );
    } else {
      // @ts-ignore
      coreContract = await DepositContractFactory.deploy(
        srcChainCfg.hasher3Address,
        srcChainCfg.settingsCenter,
        localConfig,
      );
    }
  } else {
    if (bridgeProxyConfig === undefined) {
      console.log(' bridge proxy not configure');
      process.exit(-1);
    }

    const bridgeFee = bridgeCfg.getMinBridgeFee(srcChainCfg.network);
    if (bridgeFee === undefined) {
      console.log('minimal bridge fee not configure');
      process.exit(-1);
    }

    const localConfig = {
      minAmount: srcChainTokenCfg.minAmount,
      maxAmount: srcChainTokenCfg.maxAmount,
      minBridgeFee: bridgeFee,
    };

    const peerConfig = {
      peerMinExecutorFee: dstChainTokenCfg.minExecutorFee,
      peerMinRollupFee: dstChainTokenCfg.minRollupFee,
    };

    if (bridgeCfg.name === BridgeAxelar) {
      if (bridgeProxyConfig?.gasReceiver === undefined) {
        console.log(' gas receiver not configure');
        process.exit(-1);
      }
      if (srcChainTokenCfg.erc20) {
        // @ts-ignore
        coreContract = await DepositContractFactory.deploy(
          srcChainCfg.hasher3Address,
          srcChainTokenCfg.address,
          bridgeProxyConfig?.address,
          srcChainCfg.settingsCenter,
          localConfig,
          peerConfig,
          bridgeProxyConfig?.gasReceiver,
        );
      } else {
        // @ts-ignore
        coreContract = await DepositContractFactory.deploy(
          srcChainCfg.hasher3Address,
          bridgeProxyConfig?.address,
          srcChainCfg.settingsCenter,
          localConfig,
          peerConfig,
          bridgeProxyConfig?.gasReceiver,
        );
      }
    } else {
      if (srcChainTokenCfg.erc20) {
        // @ts-ignore
        coreContract = await DepositContractFactory.deploy(
          srcChainCfg.hasher3Address,
          srcChainTokenCfg.address,
          bridgeProxyConfig?.address,
          srcChainCfg.settingsCenter,
          localConfig,
          peerConfig,
        );
      } else {
        // @ts-ignore
        coreContract = await DepositContractFactory.deploy(
          srcChainCfg.hasher3Address,
          bridgeProxyConfig?.address,
          srcChainCfg.settingsCenter,
          localConfig,
          peerConfig,
        );
      }
    }
  }

  await coreContract.deployed();

  const syncStart = await ethers.provider.getBlockNumber();
  console.log('mystiko core deposit address ', coreContract.address, ' block height ', syncStart);
  srcDepositCfg.address = coreContract.address;
  srcDepositCfg.syncStart = syncStart;
  srcDepositCfg.nonce = nonce;

  saveConfig(c.mystikoNetwork, c.cfg);
  return srcDepositCfg;
}

export async function setAssociatedCommitmentPool(
  c: any,
  srcChainCfg: ChainConfig,
  inDepositCfg: DepositDeployConfig,
  poolAddress: string,
) {
  if (!inDepositCfg.isCommitmentPoolChange(poolAddress)) {
    return;
  }
  console.log('set associated commitment pool');

  if (srcChainCfg.settingsCenter === undefined) {
    console.error(LOGRED, 'settings center not configure');
    process.exit(1);
  }

  const depositCfg = inDepositCfg;
  const settingsFactory = getSettingsCenterContract();
  const settingsContract = await settingsFactory.attach(srcChainCfg.settingsCenter);
  try {
    const rsp = await settingsContract.setAssociatedPool(depositCfg.address, poolAddress);
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
  srcChainCfg: ChainConfig,
  depositCfg: DepositDeployConfig,
  bridgeCfg: BridgeConfig,
  srcChainTokenCfg: ChainTokenConfig,
  commitmentPoolAddress: string,
  bridgeProxy?: BridgeProxyConfig,
) {
  if (depositCfg.disabled) {
    console.error(LOGRED, 'deposit contract is disabled');
    process.exit(1);
  }

  console.log('do deposit contract configure');
  await setAssociatedCommitmentPool(c, srcChainCfg, depositCfg, commitmentPoolAddress);
}

export async function setPeerContract(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositConfig: DepositDeployConfig,
  peerChainId: number,
  peerChainMapName: string,
  peerContract: string,
) {
  if (!inDepositConfig.isPeerContractChange(peerContract)) {
    return;
  }
  const depositConfig = inDepositConfig;
  console.log('set peer contract');
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositConfig.address);

  try {
    const peerContractConfig = {
      peerChainId,
      peerChainName: peerChainMapName,
      peerContract,
    };
    const rsp = await coreContract.setPeerContract(peerContractConfig);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    depositConfig.updatePeerContract(peerContract, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setLZEndpoint(
  c: any,
  bridgeName: string,
  erc20: boolean,
  inDepositConfig: DepositDeployConfig,
  bridgeProxy: BridgeProxyConfig,
) {
  console.log('set LZ Endpoint');
  const depositConfig = inDepositConfig;
  const DepositContractFactoruy = getMystikoDeployContract(bridgeName, erc20);
  const coreContract = await DepositContractFactoruy.attach(depositConfig.address);
  try {
    const rsp = await coreContract.setEndpoint(bridgeProxy.mapChainId, bridgeProxy.address);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    depositConfig.updateLzEndpoint(bridgeProxy.address, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setLZTrustedRemote(
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
  if (!inDepositConfig.isLZTrustedRemoteChange(lzPeerAddress)) {
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
    depositConfig.updateLZTrustedRemote(lzPeerAddress, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function checkOneTx(tx: string | undefined) {
  if (tx === undefined || tx === '') {
    console.log('ignore tx ', tx);
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
