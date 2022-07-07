import { Wallet } from '@ethersproject/wallet';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import {
  MystikoV2LoopERC20,
  MystikoV2LoopMain,
  Transaction1x0Verifier,
  Transaction1x1Verifier,
  Transaction1x2Verifier,
  Transaction2x0Verifier,
  Transaction2x1Verifier,
  Transaction2x2Verifier,
  Rollup16Verifier,
  Rollup1Verifier,
  Rollup4Verifier,
  TestToken,
  CommitmentPoolMain,
  CommitmentPoolERC20,
  DummySanctionsList,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toBN, toDecimals } from '@mystikonetwork/utils';
import { loopDeposit, loopDepositRevert } from '../../common/loopDepositTests';
import {
  deployLoopContracts,
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
} from '../../util/common';
import {
  constructCommitment,
  testCommitmentPoolAdminOperations,
  testCommitmentPoolConstructor,
  testLoopDeposit,
  testRollup,
  testTransact,
} from '../../common';
import { testTransactRevert } from '../../common/transactTests';
import { rollup } from '../../common/rollupTests';

describe('Test Mystiko pool', () => {
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
    const pool = await deployCommitmentPoolContracts(accounts, testToken.address, sanctionList.address, {
      treeHeight: 1,
    });
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
  let testToken: TestToken;
  let sanctionList: DummySanctionsList;
  let poolMain: CommitmentPoolMain;
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2LoopERC20;
  let loopMain: MystikoV2LoopMain;
  let transaction1x0Verifier: Transaction1x0Verifier;
  let transaction1x1Verifier: Transaction1x1Verifier;
  let transaction1x2Verifier: Transaction1x2Verifier;
  let transaction2x0Verifier: Transaction2x0Verifier;
  let transaction2x1Verifier: Transaction2x1Verifier;
  let transaction2x2Verifier: Transaction2x2Verifier;
  let rollup1: Rollup1Verifier;
  let rollup4: Rollup4Verifier;
  let rollup16: Rollup16Verifier;
  let protocol: MystikoProtocolV2;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    testToken = r.testToken;
    sanctionList = r.sanctionList;

    poolMain = r.pool.poolMain;
    poolErc20 = r.pool.poolERC20;
    loopMain = r.loop.coreMain;
    loopERC20 = r.loop.coreERC20;
    transaction1x0Verifier = r.transaction1x0Verifier;
    transaction1x1Verifier = r.transaction1x1Verifier;
    transaction1x2Verifier = r.transaction1x2Verifier;
    transaction2x0Verifier = r.transaction2x0Verifier;
    transaction2x1Verifier = r.transaction2x1Verifier;
    transaction2x2Verifier = r.transaction2x2Verifier;
    rollup1 = r.rollup1;
    rollup4 = r.rollup4;
    rollup16 = r.rollup16;
  });

  it('test pool main', async () => {
    const depositAmount = toDecimals(40);

    const count = 2;
    const cmInfo1 = await constructCommitment(protocol, count, depositAmount.toString());

    await loopDeposit(
      'MystikoV2LoopMain',
      protocol,
      loopMain,
      poolMain,
      testToken,
      sanctionList,
      accounts,
      depositAmount.toString(),
      true,
      cmInfo1,
    );

    const cmInfo2 = await constructCommitment(protocol, count, depositAmount.toString());
    await loopDepositRevert(
      'MystikoV2LoopMain',
      protocol,
      loopMain,
      poolMain,
      testToken,
      sanctionList,
      accounts,
      depositAmount.toString(),
      true,
      cmInfo2,
    );
  });
});
