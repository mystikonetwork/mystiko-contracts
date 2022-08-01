import { initBaseContractFactory } from './contract/base';
import { initTestTokenContractFactory, transferToContract } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory, setPoolSanctionCheck } from './contract/commitment';
import { initDepositContractFactory, setDepositSanctionCheck } from './contract/depsit';
import { BridgeLoop, LOGRED, MystikoTestnet } from './common/constant';
import { loadConfig } from './config/config';

let ethers: any;

// deploy mystiko contract and config contract
async function sanctionCheck(taskArgs: any) {
  const c = loadConfig(taskArgs);
  const parameter = taskArgs.param;

  if (parameter !== 'true' && parameter !== 'false') {
    console.error(LOGRED, 'wrong parameter');
    return;
  }

  const check = parameter === 'true';
  console.log('sanction check ', check);

  if (c.srcPoolCfg === undefined) {
    console.error('commitment pool configure not exist');
    process.exit(-1);
  }

  await setPoolSanctionCheck(c, c.srcTokenCfg.erc20, c.srcPoolCfg, check);
  await setDepositSanctionCheck(c, c.bridgeCfg.name, c.srcTokenCfg.erc20, c.pairSrcDepositCfg, check);
}

async function tokenTransfer(taskArgs: any) {
  const c = loadConfig(taskArgs);

  console.log('token transfer');
  // transfer token to contract
  if (c.bridgeCfg.name !== BridgeLoop && c.mystikoNetwork === MystikoTestnet) {
    // @ts-ignore
    await transferToContract(ethers, c, c.srcTokenCfg, c.srcPoolCfg);
  }
}

export async function set(taskArgs: any, hre: any) {
  ethers = hre.ethers;
  await initBaseContractFactory(ethers);
  await initTestTokenContractFactory(ethers);
  await initTBridgeContractFactory(ethers);
  await initPoolContractFactory(ethers);
  await initDepositContractFactory(ethers);

  if (taskArgs.func === 'sanctionCheck') {
    await sanctionCheck(taskArgs);
  } else if (taskArgs.func === 'tokenTransfer') {
    await tokenTransfer(taskArgs);
  } else {
    console.error(LOGRED, 'un support function');
  }
}
