import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  MockMystikoToken,
  MystikoV2LoopERC20,
  MystikoV2LoopMain,
} from '@mystikonetwork/contracts-abi';
import { waffle } from 'hardhat';
import { testLoopConstructor } from '../../common';
import {
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployLoopContracts,
  loadFixture,
} from '../../util/common';
import { MaxAmount, MinAmount } from '../../util/constants';

describe('Test Mystiko loop', () => {
  async function fixture(accounts: Wallet[]) {
    const { settings, mockToken, hasher3 } = await deployDependContracts(accounts);
    const pool = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});
    const loop = await deployLoopContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      settings.address,
      {},
    );
    await settings.updateAssociatedPool(loop.coreMain.address, pool.poolMain.address);
    await settings.updateAssociatedPool(loop.coreERC20.address, pool.poolERC20.address);
    return {
      settings,
      mockToken,
      hasher3,
      pool,
      loop,
    };
  }

  let accounts: Wallet[];
  let poolMain: CommitmentPoolMain;
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2LoopERC20;
  let loopMain: MystikoV2LoopMain;
  let mockToken: MockMystikoToken;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();

    const r = await loadFixture(fixture);
    poolMain = r.pool.poolMain;
    poolErc20 = r.pool.poolERC20;
    loopMain = r.loop.coreMain;
    loopERC20 = r.loop.coreERC20;
    mockToken = r.mockToken;
  });

  it('test loop constructor', () => {
    testLoopConstructor('MystikoV2LoopMain', loopMain, poolMain, MinAmount, MaxAmount, mockToken.address);
    testLoopConstructor('MystikoV2LoopERC20', loopERC20, poolErc20, MinAmount, MaxAmount, mockToken.address);
  });

  // test loop erc20 and main deposit with commitment pool test at pool.test.ts
});
