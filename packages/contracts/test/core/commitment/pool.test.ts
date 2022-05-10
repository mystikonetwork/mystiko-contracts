import { Wallet } from '@ethersproject/wallet';
import { waffle } from 'hardhat';
import {
  MystikoV2WithLoopERC20,
  MystikoV2WithLoopMain,
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
import { ZokratesRuntime, MystikoProtocolV2, ZokratesCliRuntime } from '@mystikonetwork/protocol';
import { toBN, toDecimals } from '@mystikonetwork/utils';
import {
  deployLoopContracts,
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
} from '../../util/common';
import { constructCommitment, testLoopDeposit, testRollup, testTransact } from '../../common';
import { testTransactRevert } from '../../common/transactTests';

const { initialize } = require('zokrates-js/node');

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
  let testToken: TestToken;
  let sanctionList: DummySanctionsList;
  let poolMain: CommitmentPoolMain;
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2WithLoopERC20;
  let loopMain: MystikoV2WithLoopMain;
  let transaction1x0Verifier: Transaction1x0Verifier;
  let transaction1x1Verifier: Transaction1x1Verifier;
  let transaction1x2Verifier: Transaction1x2Verifier;
  let transaction2x0Verifier: Transaction2x0Verifier;
  let transaction2x1Verifier: Transaction2x1Verifier;
  let transaction2x2Verifier: Transaction2x2Verifier;
  let rollup1: Rollup1Verifier;
  let rollup4: Rollup4Verifier;
  let rollup16: Rollup16Verifier;
  let zokratesRuntime: ZokratesRuntime;
  let protocol: MystikoProtocolV2;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const zokrates = await initialize();
    zokratesRuntime = new ZokratesCliRuntime(zokrates);
    protocol = new MystikoProtocolV2(zokratesRuntime);

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

  it('test loop main deposit', async () => {
    const depositAmount = toDecimals(10);
    let queueSize = 21;
    let includedCounter = 0;
    const cmInfo = await constructCommitment(protocol, queueSize, depositAmount.toString());

    await testLoopDeposit(
      'MystikoV2WithLoopMain',
      protocol,
      loopMain,
      poolMain,
      testToken,
      sanctionList,
      accounts,
      depositAmount.toString(),
      true,
      cmInfo,
    );

    testRollup('CommitmentPoolMain', protocol, poolMain, rollup16, testToken, accounts, cmInfo.commitments, {
      rollupSize: 16,
      includedCount: 0,
    });
    testRollup('CommitmentPoolMain', protocol, poolMain, rollup4, testToken, accounts, cmInfo.commitments, {
      rollupSize: 4,
      includedCount: 16,
    });
    testRollup('CommitmentPoolMain', protocol, poolMain, rollup1, testToken, accounts, cmInfo.commitments, {
      rollupSize: 1,
      includedCount: 20,
    });

    queueSize = 0;
    includedCounter = 21;
    testTransactRevert(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      sanctionList,
      transaction1x0Verifier,
      cmInfo,
      [0],
      queueSize,
      includedCounter,
      depositAmount,
      toBN(0),
      [],
      [],
      'circuits/dist/zokrates/dev/Transaction1x0.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x0.pkey.gz',
    );

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x0Verifier,
      cmInfo,
      [0],
      queueSize,
      includedCounter,
      depositAmount,
      toBN(0),
      [],
      [],
      'circuits/dist/zokrates/dev/Transaction1x0.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x0.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.vkey.gz',
    );

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x1Verifier,
      cmInfo,
      [1],
      queueSize,
      includedCounter,
      depositAmount.sub(toDecimals(3)),
      toDecimals(1),
      [toDecimals(1)],
      [toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction1x1.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x1.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.vkey.gz',
    );
    queueSize = 1;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x2Verifier,
      cmInfo,
      [2],
      queueSize,
      includedCounter,
      depositAmount.sub(toDecimals(5)),
      toDecimals(1),
      [toDecimals(1), toDecimals(1)],
      [toDecimals(1), toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction1x2.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x2.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x2.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x2.vkey.gz',
    );
    queueSize = 3;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x0Verifier,
      cmInfo,
      [3, 4],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(1)),
      toDecimals(1),
      [],
      [],
      'circuits/dist/zokrates/dev/Transaction2x0.program.gz',
      'circuits/dist/zokrates/dev/Transaction2x0.abi.json',
      'circuits/dist/zokrates/dev/Transaction2x0.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction2x0.vkey.gz',
    );
    queueSize = 3;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x1Verifier,
      cmInfo,
      [5, 6],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(3)),
      toDecimals(1),
      [toDecimals(1)],
      [toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction2x1.program.gz',
      'circuits/dist/zokrates/dev/Transaction2x1.abi.json',
      'circuits/dist/zokrates/dev/Transaction2x1.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction2x1.vkey.gz',
    );
    queueSize = 4;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x2Verifier,
      cmInfo,
      [7, 8],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(5)),
      toDecimals(1),
      [toDecimals(1), toDecimals(1)],
      [toDecimals(1), toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction2x2.program.gz',
      'circuits/dist/zokrates/dev/Transaction2x2.abi.json',
      'circuits/dist/zokrates/dev/Transaction2x2.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction2x2.vkey.gz',
    );
  });

  it('test loop erc20 deposit', async () => {
    const depositAmount = toDecimals(100);
    let queueSize = 21;
    let includedCounter = 0;
    const cmInfo = await constructCommitment(protocol, queueSize, depositAmount.toString());

    await testLoopDeposit(
      'MystikoV2WithLoopERC20',
      protocol,
      loopERC20,
      poolErc20,
      testToken,
      sanctionList,
      accounts,
      depositAmount.toString(),
      false,
      cmInfo,
    );

    testRollup(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      rollup16,
      testToken,
      accounts,
      cmInfo.commitments,
      {
        isMainAsset: false,
        rollupSize: 16,
        includedCount: 0,
      },
    );
    testRollup('CommitmentPoolERC20', protocol, poolErc20, rollup4, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 4,
      includedCount: 16,
    });
    testRollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: 20,
    });

    queueSize = 0;
    includedCounter = 21;
    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x0Verifier,
      cmInfo,
      [0],
      queueSize,
      includedCounter,
      depositAmount,
      toBN(0),
      [],
      [],
      'circuits/dist/zokrates/dev/Transaction1x0.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x0.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.vkey.gz',
      testToken,
    );
    queueSize = 0;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x1Verifier,
      cmInfo,
      [1],
      queueSize,
      includedCounter,
      depositAmount.sub(toDecimals(3)),
      toDecimals(1),
      [toDecimals(1)],
      [toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction1x1.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x1.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.vkey.gz',
      testToken,
    );
    queueSize = 1;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x2Verifier,
      cmInfo,
      [2],
      queueSize,
      includedCounter,
      depositAmount.sub(toDecimals(5)),
      toDecimals(1),
      [toDecimals(1), toDecimals(1)],
      [toDecimals(1), toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction1x2.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x2.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x2.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x2.vkey.gz',
      testToken,
    );
    queueSize = 3;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction2x0Verifier,
      cmInfo,
      [3, 4],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(1)),
      toDecimals(1),
      [],
      [],
      'circuits/dist/zokrates/dev/Transaction2x0.program.gz',
      'circuits/dist/zokrates/dev/Transaction2x0.abi.json',
      'circuits/dist/zokrates/dev/Transaction2x0.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction2x0.vkey.gz',
      testToken,
    );
    queueSize = 3;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction2x1Verifier,
      cmInfo,
      [5, 6],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(3)),
      toDecimals(1),
      [toDecimals(1)],
      [toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction2x1.program.gz',
      'circuits/dist/zokrates/dev/Transaction2x1.abi.json',
      'circuits/dist/zokrates/dev/Transaction2x1.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction2x1.vkey.gz',
      testToken,
    );
    queueSize = 4;
    includedCounter = 21;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction2x2Verifier,
      cmInfo,
      [7, 8],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(5)),
      toDecimals(1),
      [toDecimals(1), toDecimals(1)],
      [toDecimals(1), toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction2x2.program.gz',
      'circuits/dist/zokrates/dev/Transaction2x2.abi.json',
      'circuits/dist/zokrates/dev/Transaction2x2.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction2x2.vkey.gz',
      testToken,
    );
  });

  it('test loop erc20 [ rollup + transact ]', async () => {
    const depositAmount = toDecimals(100);
    let queueSize = 21;
    let includedCounter = 0;
    const cmInfo = await constructCommitment(protocol, queueSize, depositAmount.toString());

    await testLoopDeposit(
      'MystikoV2WithLoopERC20',
      protocol,
      loopERC20,
      poolErc20,
      testToken,
      sanctionList,
      accounts,
      depositAmount.toString(),
      false,
      cmInfo,
    );

    testRollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: 0,
    });
    queueSize = 0;
    includedCounter = 1;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x0Verifier,
      cmInfo,
      [0],
      queueSize,
      includedCounter,
      depositAmount,
      toBN(0),
      [],
      [],
      'circuits/dist/zokrates/dev/Transaction1x0.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x0.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.vkey.gz',
      testToken,
    );
    queueSize = 0;
    includedCounter = 1;

    testRollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: 1,
    });
    queueSize = 0;
    includedCounter = 2;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x0Verifier,
      cmInfo,
      [1],
      queueSize,
      includedCounter,
      depositAmount,
      toBN(0),
      [],
      [],
      'circuits/dist/zokrates/dev/Transaction1x0.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x0.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x0.vkey.gz',
      testToken,
    );
  });
});
