import { TestToken__factory } from '@mystikonetwork/contracts-abi';
import { toDecimals } from '@mystikonetwork/utils';
import { LOGRED } from '../common/constant';
import { PoolDeployConfig } from '../config/bridgePool';
import { saveConfig } from '../config/config';
import { ChainTokenConfig } from '../config/chainToken';

let TestToken: TestToken__factory;

export async function initTestTokenContractFactory(ethers: any) {
  TestToken = await ethers.getContractFactory('TestToken');
}

async function transferMainToContract(
  ethers: any,
  c: any,
  srcTokenCfg: ChainTokenConfig,
  inPoolCfg: PoolDeployConfig,
) {
  const poolCfg = inPoolCfg;

  let contractAmount = 0;
  if (inPoolCfg.tokenTransfer !== undefined) {
    contractAmount = parseInt(inPoolCfg.tokenTransfer, 10);
  }

  const amount = 1;
  const amountWithDecimals = ethers.utils.parseEther(amount.toString());

  const accounts = await ethers.getSigners();
  await accounts[0]
    .sendTransaction({
      to: inPoolCfg.address,
      value: amountWithDecimals,
    })
    .then(() => {
      console.log('transfer main token contract success ');
      poolCfg.updateTokenTransfer((amount + contractAmount).toString());
      saveConfig(c.mystikoNetwork, c.cfg);
    })
    .catch((err: any) => {
      console.error(LOGRED, err);
      process.exit(1);
    });
}

async function transferTokenToContract(c: any, srcTokenCfg: ChainTokenConfig, inPoolCfg: PoolDeployConfig) {
  const poolCfg = inPoolCfg;

  let contractAmount = 0;
  if (inPoolCfg.tokenTransfer !== undefined) {
    contractAmount = parseInt(inPoolCfg.tokenTransfer, 10);
  }

  const testToken = await TestToken.attach(srcTokenCfg.address);

  let amount = 10000;
  if (process.env.DEFAULT_TOKEN_TRANSFER) {
    console.log('transfer amount ', process.env.DEFAULT_TOKEN_TRANSFER);
    amount = parseInt(process.env.DEFAULT_TOKEN_TRANSFER, 10);
  } else {
    console.log('transfer default amount 10000');
  }

  const amountWithDecimals = toDecimals(amount, srcTokenCfg.assetDecimals);
  await testToken
    .transfer(inPoolCfg.address, amountWithDecimals.toString())
    .then(() => {
      console.log('transfer token to contract success ');
      poolCfg.updateTokenTransfer((amount + contractAmount).toString());
      saveConfig(c.mystikoNetwork, c.cfg);
    })
    .catch((err: any) => {
      console.error(LOGRED, err);
      process.exit(1);
    });
}

export async function transferToContract(
  ethers: any,
  c: any,
  srcTokenCfg: ChainTokenConfig,
  inPoolCfg: PoolDeployConfig,
) {
  if (srcTokenCfg.erc20) {
    await transferTokenToContract(c, srcTokenCfg, inPoolCfg);
  } else {
    await transferMainToContract(ethers, c, srcTokenCfg, inPoolCfg);
  }
}

export async function transferOnDeploy(
  ethers: any,
  c: any,
  srcTokenCfg: ChainTokenConfig,
  inPoolCfg: PoolDeployConfig,
) {
  if (inPoolCfg.isTokenTransfer()) {
    return;
  }

  await transferToContract(ethers, c, srcTokenCfg, inPoolCfg);
}

export async function deployChainTestToken(assetSymbol: string) {
  const tokenDecimals = 18;
  console.log(assetSymbol);
  const testToken = await TestToken.deploy(assetSymbol, assetSymbol, tokenDecimals);
  await testToken.deployed();
  console.log('test token address ', testToken.address);

  const amount = toDecimals(200000000, tokenDecimals);
  const holders = process.env.TOKEN_HOLDERS?.split(',');
  if (holders === undefined) {
    return;
  }

  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < holders.length; i += 1) {
    await testToken
      .transfer(holders[i], amount.toString())
      .then(() => {
        console.log('transfer token to ', holders[i]);
      })
      .catch((err: any) => {
        console.error(LOGRED, err);
        process.exit(1);
      });
  }
  /* eslint-enable no-await-in-loop */
}
