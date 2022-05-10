import { TestToken__factory } from '@mystikonetwork/contracts-abi';
import { LOGRED } from '../common/constant';
import { toDecimals } from '../common/utils';

let TestToken: TestToken__factory;

export async function initTestTokenContractFactory(ethers: any) {
  TestToken = await ethers.getContractFactory('TestToken');
}

export async function transferTokneToContract(tokenAddress: string, contractAddress: string) {
  const testToken = await TestToken.attach(tokenAddress);
  console.log('transfer token to contract ');
  let tokenDecimals = 18;
  await testToken
    .decimals()
    .then((dicmals: number) => {
      tokenDecimals = dicmals;
    })
    .catch((err: any) => {
      console.error(LOGRED, err);
      process.exit(1);
    });

  let amount = toDecimals('10000', tokenDecimals);
  if (process.env.DEFAULT_TOKEN_TRANSFER) {
    console.log('transfer amount ', process.env.DEFAULT_TOKEN_TRANSFER);
    amount = toDecimals(process.env.DEFAULT_TOKEN_TRANSFER, tokenDecimals);
  } else {
    console.log('transfer default amount 10000');
  }

  await testToken
    .transfer(contractAddress, amount)
    .then(() => {
      console.log('transfer token to contract success ');
    })
    .catch((err: any) => {
      console.error(LOGRED, err);
      process.exit(1);
    });
}
