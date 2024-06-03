import { MockMystikoToken__factory } from '@mystikonetwork/contracts-abi';
import { toDecimals } from '@mystikonetwork/utils';
import { LOGRED } from '../common/constant';
import { waitConfirm } from '../common/utils';
import { PoolDeployConfig } from '../config/bridgePool';
import { saveConfig } from '../config/config';
import { ChainTokenConfig } from '../config/chainToken';

let MockToken: MockMystikoToken__factory;
let ethers: any;

export async function initTestTokenContractFactory(eth: any) {
  ethers = eth;
  MockToken = await ethers.getContractFactory('MockMystikoToken');
}
//
// async function transferMainToContract(c: any, srcTokenCfg: ChainTokenConfig, inPoolCfg: PoolDeployConfig) {
//   const poolCfg = inPoolCfg;
//
//   let contractAmount = 0;
//   if (inPoolCfg.tokenTransfer !== undefined) {
//     contractAmount = parseInt(inPoolCfg.tokenTransfer, 10);
//   }
//
//   const amount = 1;
//   const amountWithDecimals = ethers.utils.parseEther(amount.toString());
//   const accounts = await ethers.getSigners();
//   await accounts[0]
//     .sendTransaction({
//       to: inPoolCfg.address,
//       value: amountWithDecimals,
//     })
//     .then((rsp: any) =>
//       waitConfirm(ethers, rsp, true).then(() => {
//         console.log('transfer main token to pool success, amount ', amount);
//         poolCfg.updateTokenTransfer((amount + contractAmount).toString());
//         saveConfig(c.mystikoNetwork, c.cfg);
//       }),
//     )
//     .catch((err: any) => {
//       console.error(LOGRED, err);
//       process.exit(1);
//     });
// }

async function transferTokenToContract(c: any, srcTokenCfg: ChainTokenConfig, inPoolCfg: PoolDeployConfig) {
  const poolCfg = inPoolCfg;

  let contractAmount = 0;
  if (inPoolCfg.tokenTransfer !== undefined) {
    contractAmount = parseInt(inPoolCfg.tokenTransfer, 10);
  }

  const testToken = await MockToken.attach(srcTokenCfg.address);

  let amount = 1000;
  if (process.env.DEFAULT_TOKEN_TRANSFER) {
    console.log('transfer amount ', process.env.DEFAULT_TOKEN_TRANSFER);
    amount = parseInt(process.env.DEFAULT_TOKEN_TRANSFER, 10);
  } else {
    console.log('transfer default amount 1000');
  }

  const amountWithDecimals = toDecimals(amount, srcTokenCfg.assetDecimals);
  await testToken
    .transfer(inPoolCfg.address, amountWithDecimals.toString())
    .then((rsp) =>
      waitConfirm(ethers, rsp, true).then(() => {
        console.log('transfer token to pool success, amount ', amount);
        poolCfg.updateTokenTransfer((amount + contractAmount).toString(), rsp.hash);
        saveConfig(c.mystikoNetwork, c.cfg);
      }),
    )
    .catch((err: any) => {
      console.error(LOGRED, err);
      process.exit(1);
    });
}

export async function transferToContract(c: any, srcTokenCfg: ChainTokenConfig, inPoolCfg: PoolDeployConfig) {
  if (srcTokenCfg.erc20 && srcTokenCfg.assetSymbol !== 'MATIC') {
    await transferTokenToContract(c, srcTokenCfg, inPoolCfg);
  } else {
    console.log('skip main token transfer');
    // await transferMainToContract(c, srcTokenCfg, inPoolCfg);
  }
}

export async function transferOnDeploy(c: any, srcTokenCfg: ChainTokenConfig, inPoolCfg: PoolDeployConfig) {
  if (inPoolCfg.isTokenTransfer()) {
    return;
  }

  await transferToContract(c, srcTokenCfg, inPoolCfg);
}

export async function deployChainTestToken(assetSymbol: string) {
  const tokenDecimals = 18;
  console.log(assetSymbol);
  const testToken = await MockToken.deploy(assetSymbol, assetSymbol, tokenDecimals);
  await testToken.deployed();
  console.log('test token address ', testToken.address);

  const amount = toDecimals(200000000, tokenDecimals);
  const holders = process.env.TOKEN_HOLDERS?.split(',');
  if (holders === undefined) {
    return;
  }

  const ethersInstance = ethers;
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < holders.length; i += 1) {
    await testToken
      .transfer(holders[i], amount.toString())
      .then((rsp) =>
        waitConfirm(ethersInstance, rsp, true).then(() => {
          console.log('transfer token to ', holders[i]);
        }),
      )
      .catch((err: any) => {
        console.error(LOGRED, err);
        process.exit(1);
      });
  }
  /* eslint-enable no-await-in-loop */
}
