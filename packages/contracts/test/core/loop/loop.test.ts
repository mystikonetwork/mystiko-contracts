import { Wallet } from '@ethersproject/wallet';
import { waffle } from 'hardhat';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  MystikoV2LoopERC20,
  MystikoV2LoopMain,
} from '@mystikonetwork/contracts-abi';
import {
  deployLoopContracts,
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
} from '../../util/common';
import { testLoopConstructor, testLoopAdminOperations } from '../../common';
import { MaxAmount, MinAmount, ServiceAccountIndex } from '../../util/constants';

describe('Test Mystiko loop', () => {
  async function fixture(accounts: Wallet[]) {
    const {
      testToken,
      hasher3,
      transaction1x0Verifier,
      transaction1x1Verifier,
      transaction1x2Verifier,
      transaction2x0Verifier,
      transaction2x1Verifier,
      transaction2x2Verifier,
      rollup1,
      rollup4,
      rollup16,
      sanctionList,
    } = await deployDependContracts(accounts);
    const pool = await deployCommitmentPoolContracts(accounts, testToken.address, sanctionList.address, {});
    const loop = await deployLoopContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      pool.poolMain,
      pool.poolERC20,
      {},
    );
    return {
      testToken,
      hasher3,
      transaction1x0Verifier,
      transaction1x1Verifier,
      transaction1x2Verifier,
      transaction2x0Verifier,
      transaction2x1Verifier,
      transaction2x2Verifier,
      rollup1,
      rollup4,
      rollup16,
      pool,
      loop,
      sanctionList,
    };
  }

  let accounts: Wallet[];
  let poolMain: CommitmentPoolMain;
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2LoopERC20;
  let loopMain: MystikoV2LoopMain;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();

    const r = await loadFixture(fixture);
    poolMain = r.pool.poolMain;
    poolErc20 = r.pool.poolERC20;
    loopMain = r.loop.coreMain;
    loopERC20 = r.loop.coreERC20;
  });

  it('test loop constructor', () => {
    testLoopConstructor(
      'MystikoV2LoopMain',
      loopMain,
      poolMain,
      MinAmount,
      MaxAmount,
      accounts[ServiceAccountIndex].address,
    );
    testLoopConstructor(
      'MystikoV2LoopERC20',
      loopERC20,
      poolErc20,
      MinAmount,
      MaxAmount,
      accounts[ServiceAccountIndex].address,
    );
  });

  it('test admin operation', () => {
    testLoopAdminOperations('MystikoV2LoopMain', loopMain, accounts, {});
    testLoopAdminOperations('MystikoV2LoopERC20', loopERC20, accounts, {});
  });

  // test loop erc20 and main deposit with commitment pool test at pool.test.ts
});
