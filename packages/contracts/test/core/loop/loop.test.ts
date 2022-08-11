import { Wallet } from '@ethersproject/wallet';
import { waffle } from 'hardhat';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  MystikoV2LoopERC20,
  MystikoV2LoopMain,
  SanctionsOracle,
} from '@mystikonetwork/contracts-abi';
import {
  deployLoopContracts,
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
} from '../../util/common';
import { testLoopConstructor, testLoopAdminOperations } from '../../common';
import { MinAmount, ServiceAccountIndex } from '../../util/constants';

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
      sanctionList1,
      sanctionList2,
    } = await deployDependContracts(accounts);
    const pool = await deployCommitmentPoolContracts(
      accounts,
      testToken.address,
      sanctionList1.address,
      sanctionList2.address,
      {},
    );
    const loop = await deployLoopContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList1.address,
      sanctionList2.address,
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
      sanctionList1,
      sanctionList2,
    };
  }

  let accounts: Wallet[];
  let poolMain: CommitmentPoolMain;
  let poolErc20: CommitmentPoolERC20;
  let sanctionList1: SanctionsOracle;
  let loopERC20: MystikoV2LoopERC20;
  let loopMain: MystikoV2LoopMain;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();

    const r = await loadFixture(fixture);
    poolMain = r.pool.poolMain;
    poolErc20 = r.pool.poolERC20;
    loopMain = r.loop.coreMain;
    loopERC20 = r.loop.coreERC20;
    sanctionList1 = r.sanctionList1;
  });

  it('test loop constructor', () => {
    testLoopConstructor(
      'MystikoV2LoopMain',
      loopMain,
      poolMain,
      sanctionList1,
      MinAmount,
      accounts[ServiceAccountIndex].address,
    );
    testLoopConstructor(
      'MystikoV2LoopERC20',
      loopERC20,
      poolErc20,
      sanctionList1,
      MinAmount,
      accounts[ServiceAccountIndex].address,
    );
  });

  it('test admin operation', () => {
    testLoopAdminOperations('MystikoV2LoopMain', loopMain, accounts);
    testLoopAdminOperations('MystikoV2LoopERC20', loopERC20, accounts);
  });

  // test loop erc20 and main deposit with commitment pool test at pool.test.ts
});
