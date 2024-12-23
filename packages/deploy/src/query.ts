import { initVerifierContractFactory } from './contract/verifier';
import { initTestTokenContractFactory } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory, poolContractInstance } from './contract/pool';
import { depositContractInstance, initDepositContractFactory } from './contract/depsit';
import { BridgeLoop, BridgeWormhole, LOGRED } from './common/constant';
import { loadConfig } from './config/config';
import {
  certifacteContractInstance,
  getRelayerRegisterContract,
  initSettingsContractFactory,
  relayerPoolContractInstance,
  rollerPoolContractInstance,
  settingsContractInstance,
} from './contract/settings';
import { settingsQueryTransact, settingsQueryVerifier } from './contract/query';

let ethers: any;

async function depositQuery(taskArgs: any) {
  console.log('depositQuery');
  const c = loadConfig(taskArgs);
  if (
    c.bridgeCfg === undefined ||
    c.srcTokenCfg === undefined ||
    c.pairSrcDepositCfg === undefined ||
    c.srcChainCfg === undefined
  ) {
    console.error(LOGRED, 'config not configure');
    process.exit(-1);
  }

  const deposit = await depositContractInstance(
    c.bridgeCfg.name,
    c.srcTokenCfg.erc20,
    c.srcTokenCfg.assetSymbol,
    c.pairSrcDepositCfg?.address,
  );

  const minAmount = await deposit.getMinAmount();
  console.log('min amount ', minAmount);
  if (c.srcTokenCfg.minAmount !== minAmount.toString()) {
    console.error(LOGRED, 'min amount mismatch', minAmount, c.srcTokenCfg.minAmount);
  }
  const maxAmount = await deposit.getMaxAmount();
  console.log('max amount ', maxAmount);
  if (c.srcTokenCfg.maxAmount !== maxAmount.toString()) {
    console.error(LOGRED, 'max amount mismatch', maxAmount, c.srcTokenCfg.maxAmount);
  }

  const assetAddress = await deposit.assetAddress();
  if (
    (c.srcTokenCfg.address && c.srcTokenCfg.address !== assetAddress) ||
    (!c.srcTokenCfg.address && assetAddress !== '0x0000000000000000000000000000000000000000')
  ) {
    console.error(LOGRED, 'asset address mismatch', assetAddress, c.srcTokenCfg.address);
  } else {
    console.log('asset address ', assetAddress);
  }

  if (c.bridgeCfg?.name !== BridgeLoop) {
    console.log('bridge query');
    const minBridgeFee = await deposit.getMinBridgeFee();
    console.log('min bridge fee ', minBridgeFee);

    const minExecutionFee = await deposit.getMinExecutorFee();
    if (c.dstTokenCfg.minExecutorFee !== minExecutionFee.toString()) {
      console.error(LOGRED, 'min execution fee mismatch', minExecutionFee, c.dstTokenCfg.minExecutorFee);
    } else {
      console.log('min execution fee ', minExecutionFee);
    }

    const peerRollupFee = await deposit.getPeerMinRollupFee();
    if (c.dstTokenCfg.minRollupFee !== peerRollupFee.toString()) {
      console.error(LOGRED, 'peer min rollup fee mismatch', peerRollupFee, c.dstTokenCfg.minRollupFee);
    } else {
      console.log('peer rollup fee ', peerRollupFee);
    }
    const peerChainId = await deposit.peerChainId();
    if (c.dstChainCfg.chainId.toString() !== peerChainId.toString()) {
      console.error(LOGRED, 'peer chain id mismatch', peerChainId, c.dstChainCfg.chainId);
    } else {
      console.log('peer chain id ', peerChainId);
    }
    const peerChainName = await deposit.peerChainName();
    console.log('peer chain name ', peerChainName);

    const peerContract = await deposit.peerContract();
    if (c.pairDstDepositCfg?.address !== peerContract) {
      console.error(LOGRED, 'peer contract address mismatch', peerContract, c.pairDstDepositCfg?.address);
    } else {
      console.log('peer contract ', peerContract);
    }

    if (c.bridgeCfg?.name === BridgeWormhole) {
      const gasLimit = await deposit.getBridgeGasLimit();
      const bridgeGasLimit = c.bridgeCfg.getPeerMinBridgeGasLimit(c.dstChainCfg?.network);
      if (gasLimit.toString() !== bridgeGasLimit) {
        console.error(LOGRED, 'bridge gas limit mismatch', gasLimit, bridgeGasLimit);
      } else {
        console.log('bridge gas limit ', gasLimit);
      }
    }
  }

  const disabled = await deposit.isDepositsDisabled();
  console.log('deposit disable ', disabled);

  const enabled = await deposit.isCertificateCheckEnabled();
  console.log('certificate check ', enabled);

  const settingsAddress = await deposit.settings();
  console.log('settings address ', settingsAddress);
  if (c.srcChainCfg.settingsCenter !== settingsAddress) {
    console.error(LOGRED, 'settings address mismatch', settingsAddress, c.srcChainCfg.settingsCenter);
  }

  const settingContract = await settingsContractInstance(settingsAddress);
  const poolAddress = await settingContract.queryAssociatedPool(c.pairSrcDepositCfg?.address);
  const poolAddress2 = await deposit.getAssociatedCommitmentPool();
  console.log('associated pool address ', poolAddress);
  if (c.srcPoolCfg?.address !== poolAddress || poolAddress !== poolAddress2) {
    console.error(LOGRED, 'associated pool address mismatch', poolAddress, c.srcPoolCfg?.address);
  }
}

// deploy mystiko contract and config contract
async function poolQuery(taskArgs: any) {
  console.log('poolQuery');
  const c = loadConfig(taskArgs);

  const pool = await poolContractInstance(c.srcTokenCfg.erc20, c.srcPoolCfg?.address);
  const includedCount = await pool.getCommitmentIncludedCount();
  console.log('included count ', includedCount);
  const queuedCount = await pool.getCommitmentQueuedCount();
  console.log('queued count ', queuedCount);
  const total = await pool.getCommitmentCount();
  console.log('total commitment count ', total);
  const nullifierCount = await pool.getNullifierCount();
  console.log('nullifier count ', nullifierCount);

  const minRollupFee = await pool.getMinRollupFee();
  console.log('min rollup fee ', minRollupFee);
  if (c.srcTokenCfg.minRollupFee !== minRollupFee.toString()) {
    console.error(LOGRED, 'min rollup fee mismatch', minRollupFee, c.srcTokenCfg.minRollupFee);
  }

  const assetAddress = await pool.assetAddress();
  if (
    (c.srcTokenCfg.address && c.srcTokenCfg.address !== assetAddress) ||
    (!c.srcTokenCfg.address && assetAddress !== '0x0000000000000000000000000000000000000000')
  ) {
    console.error(LOGRED, 'asset address mismatch', assetAddress, c.srcTokenCfg.address);
  } else {
    console.log('asset address ', assetAddress);
  }

  const settingsAddress = await pool.settings();
  console.log('settings address ', settingsAddress);
  if (c.srcChainCfg.settingsCenter !== settingsAddress) {
    console.error(LOGRED, 'settings address mismatch', settingsAddress, c.srcChainCfg.settingsCenter);
  }
}

async function settingsQuery(taskArgs: any) {
  console.log('settingsQuery');
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.settingsCenter === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const settingsContract = await settingsContractInstance(chainCfg.settingsCenter);
  console.log('settingsContract address ', chainCfg.settingsCenter);

  const rollerPool = await settingsContract.rollerPool();
  console.log('roller pool address', rollerPool);
  if (chainCfg.rollerPool !== rollerPool) {
    console.error(LOGRED, 'roller pool address mismatch', rollerPool, chainCfg.rollerPool);
  }

  const relayerPool = await settingsContract.relayerPool();
  console.log('relayer pool address', relayerPool);
  if (chainCfg.relayerPool !== relayerPool) {
    console.error(LOGRED, 'relayer pool address mismatch', relayerPool, chainCfg.relayerPool);
  }

  const certificate = await settingsContract.certificate();
  console.log('certificate address', certificate);
  if (chainCfg.certificateVerifier !== certificate) {
    console.error(LOGRED, 'certificate address mismatch', certificate, chainCfg.certificateVerifier);
  }

  const dao = await settingsContract.daoRegistry();
  console.log('dao address', dao);
  if (chainCfg.daoRegistry !== dao) {
    console.error(LOGRED, 'dao address mismatch', dao, chainCfg.daoRegistry);
  }

  const sanctionCheck = await settingsContract.sanctionsCheck();
  console.log('sanction check ', sanctionCheck);
  const cfgSanctionCheck = chainCfg.settingsConfig.sanctionCheck ?? true;
  if (cfgSanctionCheck !== sanctionCheck) {
    console.error(LOGRED, 'sanction check mismatch', sanctionCheck, chainCfg.settingsConfig.sanctionCheck);
  }

  const certCheck = await settingsContract.isCertificateCheckEnabled();
  console.log('deposit certificate check ', certCheck);

  if (c.srcChainCfg?.chainId === 1) {
    const signatureHex =
      '0x9e516c8e01db48ace3767fd638d0c501ec69772c05cfb13820d53e55e1b6009b4f520f890401c21d8f20320dbd72f1548b8d53bf30059df151efbb5ce3144d121c';
    const signatureBytes = ethers.utils.arrayify(signatureHex);
    const result = await settingsContract.verifyCertificate({
      account: '0xB842DdBda89eCDe7C49281bCC1F2bb586c9f785d',
      asset: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      deadline: 1731304043,
      signature: signatureBytes,
    });
    if (!result) {
      console.error(LOGRED, 'verify certificate error');
    } else {
      console.log('verify certificate success');
    }
  }

  const issuer = await settingsContract.getCertificateIssuer();
  console.log('certificate issuer ', issuer);
  if (c.operatorCfg?.issuer !== issuer) {
    console.error(LOGRED, 'certificate issuer mismatch', issuer, c.operatorCfg.issuer);
  }

  const auditors = await settingsContract.queryAllAuditorPublicKeys();
  if (auditors.length !== c.operatorCfg?.auditors.length) {
    console.error(LOGRED, 'auditors length mismatch', auditors.length, c.operatorCfg?.auditors.length);
  }
  for (let i = 0; i < c.operatorCfg?.auditors.length; i += 1) {
    if (
      c.operatorCfg?.auditors[i] !==
        '00000000000000000000000000000000000000000000000000000000000000000000000000000' &&
      c.operatorCfg?.auditors[i] !== auditors[i].toString()
    ) {
      console.error(LOGRED, 'auditors mismatch', auditors[i].toString(), c.operatorCfg?.auditors[i]);
    }
  }

  await settingsQueryVerifier(chainCfg, settingsContract);
  await settingsQueryTransact(chainCfg, settingsContract);
}

// deploy mystiko contract and config contract
async function rollerPoolQuery(taskArgs: any) {
  console.log('rollerPoolQuery');
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.rollerPool === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const rollerPoolContract = await rollerPoolContractInstance(chainCfg.rollerPool);

  const vXZK = await rollerPoolContract.vXZK();
  console.log('vXZK address ', vXZK);
  if (
    (vXZK === '0x0000000000000000000000000000000000000000' && chainCfg?.vXZKAddress) ||
    (vXZK !== '0x0000000000000000000000000000000000000000' && chainCfg?.vXZKAddress !== vXZK)
  ) {
    console.error(LOGRED, 'vXZK address mismatch', vXZK, chainCfg?.vXZKAddress);
  }

  const minAmount = await rollerPoolContract.minVoteTokenAmount();
  console.log('min vote token amount ', minAmount);
  if (!minAmount.eq(0)) {
    console.error(LOGRED, 'min vote token amount mismatch', minAmount);
  }

  const minRollupSize = await rollerPoolContract.minRollupSize();
  console.log('min rollup fee ', minRollupSize);
  if (!minRollupSize.eq(1)) {
    console.error(LOGRED, 'min rollup size error', minRollupSize);
  }

  const role = await rollerPoolContract.ROLLER_ROLE();
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < c.operatorCfg?.rollers.length; i += 1) {
    const roller = c.operatorCfg?.rollers[i];
    const hashRole = await rollerPoolContract.hasRole(role, roller);
    console.log('roller ', roller, ' has role ', hashRole);
    if (!hashRole) {
      console.error(LOGRED, 'roller role mismatch', roller);
    }
  }
  /* eslint-enable no-await-in-loop */

  const dao = await rollerPoolContract.daoRegistry();
  console.log('dao address', dao);
  if (chainCfg.daoRegistry !== dao) {
    console.error(LOGRED, 'dao address mismatch', dao, chainCfg.daoRegistry);
  }
}

// deploy mystiko contract and config contract
async function relayerPoolQuery(taskArgs: any) {
  console.log('relayerPoolQuery');
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.relayerPool === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const relayerPoolContract = await relayerPoolContractInstance(chainCfg.relayerPool);

  const minAmount = await relayerPoolContract.minVoteTokenAmount();
  console.log('min vote token amount ', minAmount);
  if (!minAmount.eq(0)) {
    console.error(LOGRED, 'min vote token amount mismatch', minAmount);
  }

  const dao = await relayerPoolContract.daoRegistry();
  console.log('dao address', dao);
  if (chainCfg.daoRegistry !== dao) {
    console.error(LOGRED, 'dao address mismatch', dao, chainCfg.daoRegistry);
  }
}

// deploy mystiko contract and config contract
async function relayerRegisterQuery(taskArgs: any) {
  console.log('relayerRegisterQuery');
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.relayerRegister === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const relayerRegisterFactory = getRelayerRegisterContract();
  const relayerRegisterContract = await relayerRegisterFactory.attach(chainCfg.relayerRegister);
  console.log('relayer register address ', relayerRegisterContract.address);
  const allRelayers = await relayerRegisterContract.getAllRelayerInfo();
  console.log('relayer ', allRelayers);

  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < c.operatorCfg?.relayers.length; i += 1) {
    const relayer = c.operatorCfg?.relayers[i];
    const result = await relayerRegisterContract.getRelayerUrlAndName(relayer);
    if (result[0] !== c.operatorCfg?.relayerUrls[i] || result[1] !== c.operatorCfg?.relayerNames[i]) {
      console.error(
        LOGRED,
        'relayer url or name mismatch',
        relayer,
        result[0],
        c.operatorCfg?.relayerUrls[i],
        result[1],
        c.operatorCfg?.relayerNames[i],
      );
    }
  }
  /* eslint-enable no-await-in-loop */

  const dao = await relayerRegisterContract.daoRegistry();
  console.log('dao address', dao);
}

async function certificateQuery(taskArgs: any) {
  console.log('certificateQuery');
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.certificateVerifier === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const certificateContract = await certifacteContractInstance(chainCfg.certificateVerifier);

  const certCheck = await certificateContract.isCertificateCheckEnabled();
  console.log('certificate check ', certCheck);

  const issuer = await certificateContract.issuer();
  if (c.operatorCfg?.issuer.toLocaleLowerCase() !== issuer.toLowerCase()) {
    console.error(LOGRED, 'certificate issuer mismatch', issuer, c.operatorCfg?.issuer);
  } else {
    console.log('certificate issuer ', issuer);
  }

  if (c.srcChainCfg?.chainId === 1) {
    const signatureHex =
      '0x9e516c8e01db48ace3767fd638d0c501ec69772c05cfb13820d53e55e1b6009b4f520f890401c21d8f20320dbd72f1548b8d53bf30059df151efbb5ce3144d121c';
    const signatureBytes = ethers.utils.arrayify(signatureHex);
    const result = await certificateContract.verifyCertificate({
      account: '0xB842DdBda89eCDe7C49281bCC1F2bb586c9f785d',
      asset: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      deadline: 1731304043,
      signature: signatureBytes,
    });
    if (!result) {
      console.error(LOGRED, 'verify certificate error');
    } else {
      console.log('verify certificate success');
    }
  }

  const dao = await certificateContract.daoRegistry();
  console.log('dao address', dao);
  if (chainCfg.daoRegistry !== dao) {
    console.error(LOGRED, 'dao address mismatch', dao, chainCfg.daoRegistry);
  }
}

export async function query(taskArgs: any, hre: any) {
  ethers = hre.ethers;
  await initSettingsContractFactory(ethers);
  await initVerifierContractFactory(ethers);
  await initTestTokenContractFactory(ethers);
  await initTBridgeContractFactory(ethers);
  await initPoolContractFactory(ethers);
  await initDepositContractFactory(ethers);

  if (taskArgs.func === 'pool') {
    await poolQuery(taskArgs);
  } else if (taskArgs.func === 'deposit') {
    await depositQuery(taskArgs);
  } else if (taskArgs.func === 'settings') {
    await settingsQuery(taskArgs);
  } else if (taskArgs.func === 'rollerPool') {
    await rollerPoolQuery(taskArgs);
  } else if (taskArgs.func === 'relayerPool') {
    await relayerPoolQuery(taskArgs);
  } else if (taskArgs.func === 'relayerRegister') {
    await relayerRegisterQuery(taskArgs);
  } else if (taskArgs.func === 'certificate') {
    await certificateQuery(taskArgs);
  } else if (taskArgs.func === 'all') {
    await certificateQuery(taskArgs);
    await rollerPoolQuery(taskArgs);
    await relayerPoolQuery(taskArgs);
    await relayerRegisterQuery(taskArgs);
    await settingsQuery(taskArgs);
    await depositQuery(taskArgs);
    await poolQuery(taskArgs);
  } else {
    console.error(LOGRED, 'un support function');
  }
}
