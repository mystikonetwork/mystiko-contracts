import { initBaseContractFactory } from './contract/base';
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
  poolSanctionCheckQuery,
  poolSanctionListQuery,
} from './contract/poolQuery';
import {
  depositContractInstance,
  depositSanctionCheckQuery,
  depositSanctionListQuery,
} from './contract/depsitQuery';

let ethers: any;

// deploy mystiko contract and config contract
async function commitmentQueueQuery(taskArgs: any) {
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
}

// deploy mystiko contract and config contract
async function sanctionQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);

  const pool = await poolContractInstance(c.srcTokenCfg.erc20, c.srcPoolCfg?.address);
  const poolCheck = await poolSanctionCheckQuery(pool);
  console.log('pool sanction disabled ', poolCheck);
  const poolList = await poolSanctionListQuery(pool);
  console.log('pool sanction address ', poolList);

  const depositContract = await depositContractInstance(
    c.bridgeCfg.name,
    c.srcTokenCfg.erc20,
    c.pairSrcDepositCfg.address,
  );
  const depositCheck = await depositSanctionCheckQuery(depositContract);
  console.log('deposit sanction disabled ', depositCheck);
  const depositList = await depositSanctionListQuery(depositContract);
  console.log('deposit sanction address ', depositList);
}

export async function query(taskArgs: any, hre: any) {
  ethers = hre.ethers;
  await initBaseContractFactory(ethers);
  await initTestTokenContractFactory(ethers);
  await initTBridgeContractFactory(ethers);
  await initPoolContractFactory(ethers);
  await initDepositContractFactory(ethers);

  if (taskArgs.func === 'commitmentQueue') {
    await commitmentQueueQuery(taskArgs);
  } else if (taskArgs.func === 'sanction') {
    await sanctionQuery(taskArgs);
  } else {
    console.error(LOGRED, 'un support function');
  }
}
