import { initVerifierContractFactory } from './contract/verifier';
import { initTestTokenContractFactory } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory, poolContractInstance } from './contract/pool';
import { depositContractInstance, initDepositContractFactory } from './contract/depsit';
import { LOGRED } from './common/constant';
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

  const settingsAddress = await deposit.settings();
  console.log('settings address ', settingsAddress);
  if (c.srcChainCfg.settingsCenter !== settingsAddress) {
    console.error(LOGRED, 'settings address mismatch', settingsAddress, c.srcChainCfg.settingsCenter);
  }

  const settingContract = await settingsContractInstance(settingsAddress);
  const poolAddress = await settingContract.queryAssociatedPool(c.pairSrcDepositCfg?.address);
  console.log('associated pool address ', poolAddress);
  if (c.srcPoolCfg?.address !== poolAddress) {
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
  if (
    (!chainCfg.settingsConfig.sanctionCheck && !sanctionCheck) ||
    (chainCfg.settingsConfig.sanctionCheck && chainCfg.settingsConfig.sanctionCheck !== sanctionCheck)
  ) {
    console.error(LOGRED, 'sanction check mismatch', sanctionCheck, chainCfg.settingsConfig.sanctionCheck);
  }

  const certCheck = await settingsContract.isCertificateCheckEnabled();
  console.log('deposit sanction check ', certCheck);

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
  if (chainCfg?.vXZKAddress !== vXZK) {
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
    console.log('relayer ', relayer, ' url  ', result[0], ' name ', result[1]);
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

  if (taskArgs.func === 'poolQuery') {
    await poolQuery(taskArgs);
  } else if (taskArgs.func === 'depositQuery') {
    await depositQuery(taskArgs);
  } else if (taskArgs.func === 'settingsQuery') {
    await settingsQuery(taskArgs);
  } else if (taskArgs.func === 'rollerPoolQuery') {
    await rollerPoolQuery(taskArgs);
  } else if (taskArgs.func === 'relayerPoolQuery') {
    await relayerPoolQuery(taskArgs);
  } else if (taskArgs.func === 'relayerRegisterQuery') {
    await relayerRegisterQuery(taskArgs);
  } else if (taskArgs.func === 'certificateQuery') {
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
