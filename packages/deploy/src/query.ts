import { initBaseContractFactory } from './contract/base';
import { initTestTokenContractFactory } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory } from './contract/commitment';
import { initDepositContractFactory } from './contract/depsit';
import { LOGRED } from './common/constant';
import { loadConfig } from './config/config';
import { commitmentQueue, poolSanctionQuery } from './contract/commitmentQuery';
import { depositSanctionQuery } from './contract/depsitQuery';

let ethers: any;

// deploy mystiko contract and config contract
async function commitmentQueueQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);

  // @ts-ignore
  const poolAddress = c.srcPoolCfg.address;
  await commitmentQueue(c.srcTokenCfg.erc20, poolAddress);
}

// deploy mystiko contract and config contract
async function sanctionQuery(taskArgs: any) {
  const c = loadConfig(taskArgs);

  // @ts-ignore
  const poolAddress = c.srcPoolCfg.address;
  await poolSanctionQuery(c.srcTokenCfg.erc20, poolAddress);

  // @ts-ignore
  const depositAddress = c.pairSrcDepositCfg.address;
  await depositSanctionQuery(c.bridgeCfg.name, c.srcTokenCfg.erc20, depositAddress);
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
