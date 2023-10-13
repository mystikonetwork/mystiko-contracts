import { initBaseContractFactory } from './contract/base';
import { initTestTokenContractFactory, transferToContract } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import {
  changePoolOperator,
  disableCommitmentPool,
  initPoolContractFactory,
  setPoolSanctionCheck,
} from './contract/pool';
import {
  changeDepositOperator,
  disableDeposit,
  initDepositContractFactory,
  setDepositSanctionCheck,
} from './contract/depsit';
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

// deploy mystiko contract and config contract
async function changeOperator(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (c.srcPoolCfg === undefined) {
    console.error('commitment pool configure not exist');
    process.exit(-1);
  }

  // @ts-ignore
  if (c.operatorCfg.admin !== '' && c.operatorCfg.admin !== c.pairSrcDepositCfg.operator) {
    console.log('change deposit operator');
    await changeDepositOperator(
      c,
      c.bridgeCfg.name,
      c.srcTokenCfg.erc20,
      c.pairSrcDepositCfg,
      c.operatorCfg.admin,
    );
  }

  // @ts-ignore
  if (c.operatorCfg.admin !== '' && c.operatorCfg.admin !== c.srcPoolCfg.operator) {
    console.log('change pool operator');
    await changePoolOperator(c, c.srcTokenCfg.erc20, c.srcPoolCfg, c.operatorCfg.admin);
  }
}

async function disablePoolContract(taskArgs: any) {
  const c = loadConfig(taskArgs);

  if (c.srcPoolCfg === undefined) {
    console.error('commitment pool configure not exist');
    process.exit(-1);
  }

  await disableCommitmentPool(c, c.srcTokenCfg.erc20, c.srcPoolCfg);
}

// deploy mystiko contract and config contract
async function disableDepositContract(taskArgs: any) {
  const c = loadConfig(taskArgs);

  await disableDeposit(c, c.bridgeCfg.name, c.srcTokenCfg.erc20, c.pairSrcDepositCfg);
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
  } else if (taskArgs.func === 'changeOperator') {
    await changeOperator(taskArgs);
  } else if (taskArgs.func === 'disablePoolContract') {
    await disablePoolContract(taskArgs);
  } else if (taskArgs.func === 'disableDepositContract') {
    await disableDepositContract(taskArgs);
  } else {
    console.error(LOGRED, 'un support function');
  }
}
