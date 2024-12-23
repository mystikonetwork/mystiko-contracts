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
  MystikoV2WormholeUSDC__factory,
  MystikoV2WormholeETH__factory,
  MystikoV2WormholeERC20__factory,
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
  BridgeWormhole,
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
let MystikoV2WormholeUSDC: MystikoV2WormholeUSDC__factory;
let MystikoV2WormholeETH: MystikoV2WormholeETH__factory;
let MystikoV2WormholeERC20: MystikoV2WormholeERC20__factory;

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
  MystikoV2WormholeUSDC = await ethers.getContractFactory('MystikoV2WormholeUSDC');
  MystikoV2WormholeETH = await ethers.getContractFactory('MystikoV2WormholeETH');
  MystikoV2WormholeERC20 = await ethers.getContractFactory('MystikoV2WormholeERC20');
}

export function getMystikoDepositContract(bridge: string, bErc20: boolean, assetSymbol: string) {
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
  } else if (bridge === BridgeWormhole) {
    if (assetSymbol === 'USDC') {
      coreContract = MystikoV2WormholeUSDC;
    } else if (assetSymbol === 'WETHWormhole') {
      coreContract = MystikoV2WormholeERC20;
    } else if (assetSymbol === 'ETH') {
      coreContract = MystikoV2WormholeETH;
    } else {
      console.error(LOGRED, 'wormhole not support ', assetSymbol);
      process.exit(1);
    }
  } else {
    console.error(LOGRED, 'bridge not support');
  }
  return coreContract;
}

export function depositContractInstance(
  bridgeName: string,
  erc20: boolean,
  assetSymbol: string,
  addr: string | undefined,
): Promise<any> {
  const DepositContractFactory = getMystikoDepositContract(bridgeName, erc20, assetSymbol);
  return Promise.resolve(DepositContractFactory.attach(addr));
}

export async function deployDepositContract(
  c: any,
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  srcChainCfg: ChainConfig,
  dstChainCfg: ChainConfig,
  srcChainTokenCfg: ChainTokenConfig,
  dstChainTokenCfg: ChainTokenConfig,
  pairSrcDepositContractCfg: DepositDeployConfig,
  commitmentPoolAddress: string,
  bridgeProxyConfig: BridgeProxyConfig | undefined,
  peerBridgeProxyCfg: BridgeProxyConfig | undefined,
  override: string,
) {
  console.log('deploy deposit contract');
  const srcDepositCfg = pairSrcDepositContractCfg;

  // todo eric override should set old contract disable to core configure
  if (override === 'true' || srcDepositCfg.address === '') {
    srcDepositCfg.reset();
  }

  if (srcDepositCfg.address !== '') {
    return srcDepositCfg;
  }

  const DepositContractFactory = getMystikoDepositContract(
    bridgeCfg.name,
    srcChainTokenCfg.erc20,
    srcChainTokenCfg.assetSymbol,
  );
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

    const peerBridgeGasLimit = bridgeCfg.getPeerMinBridgeGasLimit(dstChainCfg.network);

    const localConfig = {
      minAmount: srcChainTokenCfg.minAmount,
      maxAmount: srcChainTokenCfg.maxAmount,
      minBridgeFee: bridgeFee,
      bridgeGasLimit: peerBridgeGasLimit || '0',
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
    } else if (bridgeCfg.name === BridgeWormhole) {
      if (
        srcChainTokenCfg.assetSymbol !== 'USDC' &&
        srcChainTokenCfg.assetSymbol !== 'WETHWormhole' &&
        srcChainTokenCfg.assetSymbol !== 'ETH'
      ) {
        console.error(LOGRED, 'wormhole not support ', srcChainTokenCfg.assetSymbol);
        process.exit(1);
      }

      if (localConfig.bridgeGasLimit === '0') {
        console.error(LOGRED, 'bridge gas limit not configure');
        process.exit(1);
      }

      if (srcChainTokenCfg.assetSymbol === 'USDC') {
        const bridgeWormholeConfig = {
          peerWormholeChainId: peerBridgeProxyCfg?.mapChainId,
          wormholeRelayer: bridgeProxyConfig?.wormholeRelayer,
          wormhole: bridgeProxyConfig?.wormhole,
          circleMessageTransmitter: bridgeProxyConfig?.circleMessageTransmitter,
          circleTokenMessenger: bridgeProxyConfig?.circleTokenMessenger,
          USDCToken: srcChainTokenCfg.address,
        };

        localConfig.minBridgeFee = '0';
        peerConfig.peerMinExecutorFee = '0';
        coreContract = await DepositContractFactory.deploy(
          srcChainCfg.hasher3Address,
          srcChainCfg.settingsCenter,
          localConfig,
          peerConfig,
          bridgeWormholeConfig,
        );
      } else {
        const bridgeWormholeConfig = {
          peerWormholeChainId: peerBridgeProxyCfg?.mapChainId,
          wormholeRelayer: bridgeProxyConfig?.wormholeRelayer,
          tokenBridge: bridgeProxyConfig?.wormholeTokenBridge,
          wormhole: bridgeProxyConfig?.wormhole,
          token:
            srcChainTokenCfg.assetSymbol === 'WETHWormhole'
              ? srcChainTokenCfg.address
              : '0x0000000000000000000000000000000000000000',
        };

        localConfig.minBridgeFee = '0';
        peerConfig.peerMinExecutorFee = '0';
        coreContract = await DepositContractFactory.deploy(
          srcChainCfg.hasher3Address,
          srcChainCfg.settingsCenter,
          localConfig,
          peerConfig,
          bridgeWormholeConfig,
        );
      }
    } else if (srcChainTokenCfg.erc20) {
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
  commitmentPoolAddress: string,
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
  assetSymbol: string,
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
  const DepositContractFactoruy = getMystikoDepositContract(bridgeName, erc20, assetSymbol);
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
  const DepositContractFactoruy = getMystikoDepositContract(bridgeName, erc20, '');
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
  const DepositContractFactoruy = getMystikoDepositContract(bridgeName, erc20, '');
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
