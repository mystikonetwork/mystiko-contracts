import { initBaseContractFactory } from './contract/base';
import { initTestTokenContractFactory, transferTokneToContract } from './contract/token';
import { initTBridgeContractFactory } from './contract/tbridge';
import { initPoolContractFactory, togglePoolSanctionCheck } from './contract/commitment';
import { initDepositContractFactory, toggleDepositSanctionCheck } from './contract/depsit';
import { BridgeLoop, LOGRED, MystikoTestnet } from './common/constant';
import { loadConfig } from './config/config';

let ethers: any;

// deploy mystiko contract and config contract
async function toggleSaction(taskArgs: any) {
  const c = loadConfig(taskArgs);
  const parameter = taskArgs.param;

  if (parameter !== 'true' && parameter !== 'false') {
    console.error(LOGRED, 'wrong parameter');
    return;
  }

  const checkDisable = parameter === 'true';
  console.log('sanction check disabled ', checkDisable);

  if (c.srcPoolCfg === undefined) {
    console.error('commitment pool configure not exist');
    process.exit(-1);
  }

  await togglePoolSanctionCheck(c, c.srcTokenCfg.erc20, c.srcPoolCfg, checkDisable);
  await toggleDepositSanctionCheck(
    c,
    c.bridgeCfg.name,
    c.srcTokenCfg.erc20,
    c.pairSrcDepositCfg,
    checkDisable,
  );
}

async function tokenTransfer(taskArgs: any) {
  const c = loadConfig(taskArgs);

  console.log('token transfer');
  // transfer token to contract
  if (c.srcTokenCfg.erc20 && c.bridgeCfg.name !== BridgeLoop && c.mystikoNetwork === MystikoTestnet) {
    // @ts-ignore
    await transferTokneToContract(c, c.srcTokenCfg.address, c.srcPoolCfg);
  }
}

export async function set(taskArgs: any, hre: any) {
  ethers = hre.ethers;
  await initBaseContractFactory(ethers);
  await initTestTokenContractFactory(ethers);
  await initTBridgeContractFactory(ethers);
  await initPoolContractFactory(ethers);
  await initDepositContractFactory(ethers);

  if (taskArgs.func === 'toggleSaction') {
    await toggleSaction(taskArgs);
  } else if (taskArgs.func === 'tokenTransfer') {
    await tokenTransfer(taskArgs);
  } else {
    console.error(LOGRED, 'un support function');
  }
}
