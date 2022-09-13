import { CommitmentPoolMain__factory, CommitmentPoolERC20__factory } from '@mystikonetwork/contracts-abi';
import { waitConfirm } from '../common/utils';
import { ChainConfig } from '../config/chain';
import { ChainTokenConfig } from '../config/chainToken';
import { OperatorConfig } from '../config/operator';
import { PoolDeployConfig } from '../config/bridgePool';
import { LOGRED, MerkleTreeHeight, MystikoDevelopment, MystikoTestnet } from '../common/constant';
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
    pool = await PoolContractFactory.deploy(MerkleTreeHeight, chainTokenCfg.address);
  } else {
    pool = await PoolContractFactory.deploy(MerkleTreeHeight);
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
  if (!inPoolCfg.isMinRollupFeeChange(chainTokenCfg.minRollupFee)) {
    return;
  }

  const poolCfg = inPoolCfg;
  console.log('set commitment pool min rollup fee');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.setMinRollupFee(chainTokenCfg.minRollupFee);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateMinRollupFee(chainTokenCfg.minRollupFee);
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
  if (chainCfg.rollup1Address === undefined) {
    console.error(LOGRED, 'rollup1 address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isRollup1VerifierChange(chainCfg.rollup1Address)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool rollup1 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableRollupVerifier(1, chainCfg.rollup1Address);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateRollup1Verifier(chainCfg.rollup1Address);
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
  if (chainCfg.rollup4Address === undefined) {
    console.error(LOGRED, 'rollup4 address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isRollup4VerifierChange(chainCfg.rollup4Address)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool rollup4 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableRollupVerifier(4, chainCfg.rollup4Address);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateRollup4Verifier(chainCfg.rollup4Address);
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
  if (chainCfg.rollup16Address === undefined) {
    console.error(LOGRED, 'rollup16 address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isRollup16VerifierChange(chainCfg.rollup16Address)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool rollup16 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableRollupVerifier(16, chainCfg.rollup16Address);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateRollup16Verifier(chainCfg.rollup16Address);
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
  if (chainCfg.transaction1x0VerifierAddress === undefined) {
    console.error(LOGRED, 'transaction1x0 verifier address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isTransact1x0VerifierChange(chainCfg.transaction1x0VerifierAddress)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact1x0 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(1, 0, chainCfg.transaction1x0VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateTransact1x0Verifier(chainCfg.transaction1x0VerifierAddress);
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
  if (chainCfg.transaction1x1VerifierAddress === undefined) {
    console.error(LOGRED, 'transaction1x1 verifier address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isTransact1x1VerifierChange(chainCfg.transaction1x1VerifierAddress)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact1x1 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(1, 1, chainCfg.transaction1x1VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateTransact1x1Verifier(chainCfg.transaction1x1VerifierAddress);
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
  if (chainCfg.transaction1x2VerifierAddress === undefined) {
    console.error(LOGRED, 'transaction1x2 verifier address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isTransact1x2VerifierChange(chainCfg.transaction1x2VerifierAddress)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact1x2 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(1, 2, chainCfg.transaction1x2VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateTransact1x2Verifier(chainCfg.transaction1x2VerifierAddress);
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
  if (chainCfg.transaction2x0VerifierAddress === undefined) {
    console.error(LOGRED, 'transaction2x0 verifier address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isTransact2x0VerifierChange(chainCfg.transaction2x0VerifierAddress)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact2x0 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(2, 0, chainCfg.transaction2x0VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateTransact2x0Verifier(chainCfg.transaction2x0VerifierAddress);
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
  if (chainCfg.transaction2x1VerifierAddress === undefined) {
    console.error(LOGRED, 'transaction2x1 verifier address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isTransact2x1VerifierChange(chainCfg.transaction2x1VerifierAddress)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set commitment pool transact2x1 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(2, 1, chainCfg.transaction2x1VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateTransact2x1Verifier(chainCfg.transaction2x1VerifierAddress);
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
  if (chainCfg.transaction2x2VerifierAddress === undefined) {
    console.error(LOGRED, 'transaction2x2 verifier address not exist');
    process.exit(1);
  }

  if (!inPoolCfg.isTransact2x2VerifierChange(chainCfg.transaction2x2VerifierAddress)) {
    return;
  }

  const poolCfg = inPoolCfg;
  console.log('set commitment pool transact2x2 verifier');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);
  try {
    const rsp = await poolContract.enableTransactVerifier(2, 2, chainCfg.transaction2x2VerifierAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateTransact2x2Verifier(chainCfg.transaction2x2VerifierAddress);
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

export async function setPoolSanctionCheck(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  check: boolean,
) {
  if (!inPoolCfg.isSanctionCheckChange(check)) {
    return;
  }

  const poolCfg = inPoolCfg;

  console.log('set pool sanction check ', check);
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(poolCfg.address);

  try {
    if (check) {
      const rsp = await poolContract.enableSanctionsCheck();
      console.log('pool rsp hash ', rsp.hash);
      await waitConfirm(rsp, true);
    } else {
      const rsp = await poolContract.disableSanctionsCheck();
      console.log('pool rsp hash ', rsp.hash);
      await waitConfirm(rsp, true);
    }
    poolCfg.updateSanctionCheck(check);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function changeOperator(c: any, erc20: boolean, inPoolCfg: PoolDeployConfig, operator: string) {
  if (!inPoolCfg.isOperatorChange(operator)) {
    return;
  }

  const poolCfg = inPoolCfg;
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const pool = await PoolContractFactory.attach(poolCfg.address);
  console.log('change operator');

  const RevertNotChanged = '0x36a1c33f';
  try {
    const rsp = await pool.changeOperator(operator);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.updateOperator(operator);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    const msg: string = err.message;
    if (msg.includes(RevertNotChanged) || msg.includes('revert')) {
      console.log('operator not changed');
      poolCfg.updateOperator(operator);
      saveConfig(c.mystikoNetwork, c.cfg);
      return;
    }
    console.log('msg ', msg);
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setRollupWhitelist(c: any, erc20: boolean, poolCfg: PoolDeployConfig, roller: string) {
  if (poolCfg.isInRollupWhitelist(roller)) {
    return;
  }

  console.log('add roller to whitelist');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const pool = await PoolContractFactory.attach(poolCfg.address);

  try {
    const rsp = await pool.addRollupWhitelist(roller);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.addRollupToWhitelist(roller);
    saveConfig(c.mystikoNetwork, c.cfg);
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
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < rollers.length; i += 1) {
    await setRollupWhitelist(c, erc20, inPoolCfg, rollers[i]);
  }
  /* eslint-enable no-await-in-loop */
}

export async function addEnqueueWhitelist(
  c: any,
  erc20: boolean,
  inPoolCfg: PoolDeployConfig,
  enqueueContractAddress: string,
) {
  if (inPoolCfg.isInEnqueueWhitelist(enqueueContractAddress)) {
    return;
  }

  const poolCfg = inPoolCfg;
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const pool = await PoolContractFactory.attach(poolCfg.address);
  console.log('add enqueue whitelist');

  try {
    const rsp = await pool.addEnqueueWhitelist(enqueueContractAddress);
    console.log('rsp hash ', rsp.hash);
    await waitConfirm(rsp, true);
    poolCfg.AddEnqueueToWhitelist(enqueueContractAddress);
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

  if (operatorCfg.admin !== '') {
    await changeOperator(c, chainTokenCfg.erc20, poolCfg, operatorCfg.admin);
  }

  if (mystikoNetwork === MystikoTestnet) {
    await setPoolSanctionCheck(c, chainTokenCfg.erc20, poolCfg, false);
  }
}
