import { CommitmentPoolMain__factory, CommitmentPoolERC20__factory } from '@mystikonetwork/contracts-abi';
import { ChainConfig } from '../config/chain';
import { ChainTokenConfig } from '../config/chainToken';
import { OperatorConfig } from '../config/operator';
import { PoolDeployConfig } from '../config/bridgePool';
import {
  LOGRED,
  MerkleTreeHeight,
  MystikoDevelopment,
  MystikoTestnet,
  RootHistoryLength,
} from '../common/constant';
import { BridgeConfig } from '../config/bridge';
import { saveConfig } from '../config/config';

let CommitmentPoolMain: CommitmentPoolMain__factory;
let CommitmentPoolERC20: CommitmentPoolERC20__factory;

let ethers: any;

export async function initPoolContractFactory(eth: any) {
  ethers = eth;
  CommitmentPoolMain = await ethers.getContractFactory('CommitmentPoolMain');
  CommitmentPoolERC20 = await ethers.getContractFactory('CommitmentPoolERC20');
}

export function getMystikoPoolContract(bErc20: boolean) {
  let coreContract: any;
  if (bErc20) {
    coreContract = CommitmentPoolERC20;
  } else {
    coreContract = CommitmentPoolMain;
  }

  return coreContract;
}

async function deployCommitmentPool(
  commitmentPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
  chainTokenCfg: ChainTokenConfig,
) {
  let pool: any;
  const poolCfg = commitmentPoolCfg;
  const PoolContractFactory = getMystikoPoolContract(chainTokenCfg.erc20);

  console.log('deploy Mystiko commitment pool contract');
  if (chainTokenCfg.erc20) {
    pool = await PoolContractFactory.deploy(MerkleTreeHeight, RootHistoryLength, chainTokenCfg.address);
  } else {
    pool = await PoolContractFactory.deploy(MerkleTreeHeight, RootHistoryLength);
  }
  await pool.deployed();

  const syncStart = await ethers.provider.getBlockNumber();
  console.log('commitmentPool address ', pool.address);
  poolCfg.address = pool.address;
  poolCfg.syncStart = syncStart;
  return pool.address;
}

export async function setCommitmentPoolRollupFee(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainTokenCfg: ChainTokenConfig,
) {
  if (inPoolCfg.isMinRollupFeeSet) {
    return;
  }

  const poolCfg = inPoolCfg;
  console.log('set commitment pool min rollup fee');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.setMinRollupFee(chainTokenCfg.minRollupFee);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isMinRollupFeeSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolRollup1Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isRollup1VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool rollup1 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableRollupVerifier(1, chainCfg.rollup1Address);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isRollup1VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolRollup4Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isRollup4VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool rollup4 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableRollupVerifier(4, chainCfg.rollup4Address);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isRollup4VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolRollup16Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isRollup16VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool rollup16 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableRollupVerifier(16, chainCfg.rollup16Address);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isRollup16VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolTransact1x0Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isTransact1x0VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact1x0 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(1, 0, chainCfg.transaction1x0VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isTransact1x0VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolTransact1x1Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isTransact1x1VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact1x1 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(1, 1, chainCfg.transaction1x1VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isTransact1x1VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolTransact1x2Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isTransact1x2VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact1x2 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(1, 2, chainCfg.transaction1x2VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isTransact1x2VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolTransact2x0Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isTransact2x0VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact2x0 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(2, 0, chainCfg.transaction2x0VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isTransact2x0VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolTransact2x1Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isTransact2x1VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact2x1 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(2, 1, chainCfg.transaction2x1VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isTransact2x1VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

async function setCommitmentPoolTransact2x2Verifier(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  if (inPoolCfg.isTransact2x2VerifierSet) {
    return;
  }

  const poolCfg = inPoolCfg;
  console.log('set commitment pool transact2x2 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(2, 2, chainCfg.transaction2x2VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isTransact2x2VerifierSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setCommitmentPoolVerifier(
  c: any,
  erc20: boolean,
  poolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
) {
  await setCommitmentPoolRollup1Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolRollup4Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolRollup16Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolTransact1x0Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolTransact1x1Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolTransact1x2Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolTransact2x0Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolTransact2x1Verifier(c, erc20, poolCfg, chainCfg);
  await setCommitmentPoolTransact2x2Verifier(c, erc20, poolCfg, chainCfg);
}

export async function togglePoolSanctionCheck(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  check: boolean,
) {
  if (inPoolCfg.isSanctionCheckSet) {
    return;
  }
  const poolCfg = inPoolCfg;

  console.log('toggle pool sanction check disable ', check);
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);

  try {
    const rsp = await poolContract.toggleSanctionCheck(check);
    console.log('pool rsp hash ', rsp.hash);
    poolCfg.isSanctionCheckSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setRollupWhitelist(erc20: boolean, poolCfg: PoolDeployConfig, roller: string) {
  console.log('set roller whitelist');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const pool = await PoolContractFactory.attach(poolCfg.address);

  try {
    const rsp = await pool.addRollupWhitelist(roller);
    console.log('rsp hash ', rsp.hash);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function addRollupWhitelist(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  rollers: string[],
) {
  // todo zr rollup list should check with array
  if (inPoolCfg.isRollupWhitelistSet) {
    return;
  }

  const poolCfg = inPoolCfg;
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < rollers.length; i += 1) {
    await setRollupWhitelist(erc20, inPoolCfg, rollers[i]);
  }
  /* eslint-enable no-await-in-loop */

  poolCfg.isRollupWhitelistSet = true;
  saveConfig(c.mystikoNetwork, c.cfg);
}

export async function addEnqueueWhitelist(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  enqueueContractAddress: string,
) {
  // todo zr enqueue list should check with array
  // if (inPoolCfg.isEnqueueWhitelistSet) {
  //   return;
  // }

  const poolCfg = inPoolCfg;
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const pool = await PoolContractFactory.attach(poolCfg.address);
  console.log('set enqueue whitelist');
  try {
    const rsp = await pool.addEnqueueWhitelist(enqueueContractAddress);
    console.log('rsp hash ', rsp.hash);
    poolCfg.isEnqueueWhitelistSet = true;
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function getOrDeployCommitmentPool(
  c: any,
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  chainCfg: ChainConfig,
  chainTokenCfg: ChainTokenConfig,
  inPoolCfg: PoolDeployConfig | undefined,
  operatorCfg: OperatorConfig,
  override: string,
) {
  let poolCfg = inPoolCfg;
  if (poolCfg === undefined) {
    poolCfg = bridgeCfg.addCommitmentPoolConfig(chainCfg.network, chainTokenCfg.assetSymbol, '', 0);
  }

  if (override === 'true' || poolCfg.address === '' || mystikoNetwork === MystikoDevelopment) {
    poolCfg.reset();
  }

  if (poolCfg.address === '') {
    console.log('deploy commitment pool');
    await deployCommitmentPool(poolCfg, chainCfg, chainTokenCfg);
  }

  saveConfig(c.mystikoNetwork, c.cfg);
  return poolCfg;
}

export async function doCommitmentPoolConfigure(
  c: any,
  mystikoNetwork: string,
  poolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
  chainTokenCfg: ChainTokenConfig,
  operatorCfg: OperatorConfig,
) {
  console.log('do commitment pool configure');

  await setCommitmentPoolRollupFee(c, chainTokenCfg.erc20, poolCfg, chainTokenCfg);
  await setCommitmentPoolVerifier(c, chainTokenCfg.erc20, poolCfg, chainCfg);
  await addRollupWhitelist(c, chainTokenCfg.erc20, poolCfg, operatorCfg.rollers);
  if (mystikoNetwork === MystikoTestnet) {
    await togglePoolSanctionCheck(c, chainTokenCfg.erc20, poolCfg, true);
  }
}
