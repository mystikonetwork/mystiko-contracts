import { initVerifierContractFactory } from './contract/verifier';
import { initTestTokenContractFactory } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory } from './contract/pool';
import { initDepositContractFactory } from './contract/depsit';
import { LOGRED } from './common/constant';
import { loadConfig } from './config/config';
import {
  poolCommitmentCount,
  poolContractInstance,
  poolIncludedCount,
  poolMinRollupFee,
  poolNullifierCount,
  poolQueuedCommitments,
  poolQueuedCount,
} from './contract/poolQuery';
import {
  getRelayerPoolContract,
  getRelayerRegisterContract,
  getRollerPoolContract,
  getSettingsCenterContract,
  initSettingsContractFactory,
} from './contract/settings';
import { depositContractInstance, depositMinAmount } from './contract/depsitQuery';

let ethers: any;

async function depositQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);
  if (c.bridgeCfg === undefined || c.srcTokenCfg === undefined || c.srcPoolCfg === undefined) {
    console.error(LOGRED, 'config not configure');
    process.exit(-1);
  }
  const deposit = await depositContractInstance(c.bridgeCfg.name, c.srcTokenCfg.erc20, c.srcPoolCfg?.address);
  const minAmount = await depositMinAmount(deposit);
  console.log('min amount ', minAmount);
  const maxAmount = await deposit.getMaxAmount();
  console.log('max amount ', maxAmount);
}

// deploy mystiko contract and config contract
async function poolQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);

  const pool = await poolContractInstance(c.srcTokenCfg.erc20, c.srcPoolCfg?.address);
  const includedCount = await poolIncludedCount(pool);
  console.log('included count ', includedCount);
  const queuedCount = await poolQueuedCount(pool);
  console.log('queued count ', queuedCount);
  const total = await poolCommitmentCount(pool);
  console.log('total commitment count ', total);
  const nullifierCount = await poolNullifierCount(pool);
  console.log('nullifier count ', nullifierCount);

  const queuedCms = await poolQueuedCommitments(pool);
  console.log('queued commitments: ', queuedCms);

  const minRollupFee = await poolMinRollupFee(pool);
  console.log('min rollup fee ', minRollupFee);

  const settingsAddress = await pool.settings();
  console.log('settings address ', settingsAddress);
}

// deploy mystiko contract and config contract
async function settingsQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.settingsCenter === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const settingsFactory = getSettingsCenterContract();
  const settingsContract = await settingsFactory.attach(chainCfg.settingsCenter);

  const sanctionsCheck = await settingsContract.sanctionsCheck();
  console.log('deposit sanction check ', sanctionsCheck);
  const certificateCheck = await settingsContract.isCertificateCheckEnabled();
  console.log('certificate check ', certificateCheck);

  const rollerPool = await settingsContract.rollerPool();
  console.log('roller pool address', rollerPool);

  const relayerPool = await settingsContract.relayerPool();
  console.log('relayer pool address', relayerPool);

  const certificate = await settingsContract.certificate();
  console.log('certificate address', certificate);

  const dao = await settingsContract.daoRegistry();
  console.log('dao address', dao);
}

// deploy mystiko contract and config contract
async function rollerPoolQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.rollerPool === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const rollerPoolFactory = getRollerPoolContract();
  const rollerPoolContract = await rollerPoolFactory.attach(chainCfg.rollerPool);

  const vXZK = await rollerPoolContract.vXZK();
  console.log('vXZK address ', vXZK);

  const minAmount = await rollerPoolContract.minVoteTokenAmount();
  console.log('min vote token amount ', minAmount);

  const role = await rollerPoolContract.ROLLER_ROLE();
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < c.operatorCfg?.rollers.length; i += 1) {
    const roller = c.operatorCfg?.rollers[i];
    const hashRole = await rollerPoolContract.hasRole(role, roller);
    console.log('roller ', roller, ' has role ', hashRole);
  }
  /* eslint-enable no-await-in-loop */

  const dao = await rollerPoolContract.daoRegistry();
  console.log('dao address', dao);
}

// deploy mystiko contract and config contract
async function relayerPoolQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.relayerPool === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const relayerPoolFactory = getRelayerPoolContract();
  const relayerPoolContract = await relayerPoolFactory.attach(chainCfg.relayerPool);

  const minAmount = await relayerPoolContract.minVoteTokenAmount();
  console.log('min vote token amount ', minAmount);

  const dao = await relayerPoolContract.daoRegistry();
  console.log('dao address', dao);
}

// deploy mystiko contract and config contract
async function relayerRegisterQuery(taskArgs: any) {
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
  const c = loadConfig(taskArgs);
  const chainCfg = c.srcChainCfg;
  if (chainCfg === undefined || chainCfg.certificateVerifier === undefined) {
    console.error(LOGRED, 'chain not configure');
    process.exit(-1);
  }

  const certificateFactory = getSettingsCenterContract();
  const certificateContract = await certificateFactory.attach(chainCfg.certificateVerifier);

  const certificateCheck = await certificateContract.isCertificateCheckEnabled();
  console.log('certificate check ', certificateCheck);

  const dao = await certificateContract.daoRegistry();
  console.log('dao address', dao);
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
  } else if (taskArgs.func === 'allQuery') {
    await settingsQuery(taskArgs);
    await certificateQuery(taskArgs);
    await rollerPoolQuery(taskArgs);
    await relayerPoolQuery(taskArgs);
    await relayerRegisterQuery(taskArgs);
    await poolQuery(taskArgs);
  } else {
    console.error(LOGRED, 'un support function');
  }
}
