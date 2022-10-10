import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolMain,
  DummySanctionsList,
  MystikoV2LoopMain,
  Rollup16Verifier,
  Rollup1Verifier,
  Rollup4Verifier,
  TestToken,
  Transaction1x0Verifier,
  Transaction1x1Verifier,
  Transaction1x2Verifier,
  Transaction2x0Verifier,
  Transaction2x1Verifier,
  Transaction2x2Verifier,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toBN, toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { constructCommitment, testTransact } from '../common';
import { loopDeposit } from '../common/loopDepositTests';
import { rollup } from '../common/rollupTests';
import {
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployLoopContracts,
  loadFixture,
} from '../util/common';
import { CircuitsPath } from '../util/constants';

describe('Mystiko combination test R16R4R1 ', () => {
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
      rollup2,
      rollup4,
      rollup8,
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
      rollup2,
      rollup4,
      rollup8,
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
    loopMain = r.loop.coreMain;
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

  it('combination main R16R4R1', async () => {
    const depositAmount = toDecimals(40);

    let queueSize = 21;
    let includedCounter = 0;
    const cmInfo = await constructCommitment(protocol, queueSize, depositAmount.toString());

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
      cmInfo,
    );

    rollup('CommitmentPoolMain', protocol, poolMain, rollup16, testToken, accounts, cmInfo.commitments, {
      rollupSize: 16,
      includedCount: 0,
    });

    rollup('CommitmentPoolMain', protocol, poolMain, rollup4, testToken, accounts, cmInfo.commitments, {
      rollupSize: 4,
      includedCount: 16,
    });

    rollup('CommitmentPoolMain', protocol, poolMain, rollup1, testToken, accounts, cmInfo.commitments, {
      rollupSize: 1,
      includedCount: 20,
    });

    queueSize = 0;
    includedCounter = 21;

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
      CircuitsPath.concat('Transaction1x0.program.gz'),
      CircuitsPath.concat('Transaction1x0.abi.json'),
      CircuitsPath.concat('Transaction1x0.pkey.gz'),
      CircuitsPath.concat('Transaction1x0.vkey.gz'),
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
      depositAmount.sub(toDecimals(12)),
      toDecimals(1),
      [toDecimals(10)],
      [toDecimals(1)],
      CircuitsPath.concat('Transaction1x1.program.gz'),
      CircuitsPath.concat('Transaction1x1.abi.json'),
      CircuitsPath.concat('Transaction1x1.pkey.gz'),
      CircuitsPath.concat('Transaction1x1.vkey.gz'),
    );

    rollup('CommitmentPoolMain', protocol, poolMain, rollup1, testToken, accounts, cmInfo.commitments, {
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: 21,
    });

    queueSize = 0;
    includedCounter = 22;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x2Verifier,
      cmInfo,
      [2],
      queueSize,
      includedCounter,
      depositAmount.sub(toDecimals(23)),
      toDecimals(1),
      [toDecimals(10), toDecimals(10)],
      [toDecimals(1), toDecimals(1)],
      CircuitsPath.concat('Transaction1x2.program.gz'),
      CircuitsPath.concat('Transaction1x2.abi.json'),
      CircuitsPath.concat('Transaction1x2.pkey.gz'),
      CircuitsPath.concat('Transaction1x2.vkey.gz'),
    );
    queueSize = 2;
    includedCounter = 22;

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
      CircuitsPath.concat('Transaction2x0.program.gz'),
      CircuitsPath.concat('Transaction2x0.abi.json'),
      CircuitsPath.concat('Transaction2x0.pkey.gz'),
      CircuitsPath.concat('Transaction2x0.vkey.gz'),
    );
    queueSize = 2;
    includedCounter = 22;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x1Verifier,
      cmInfo,
      [5, 6],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(12)),
      toDecimals(1),
      [toDecimals(10)],
      [toDecimals(1)],
      CircuitsPath.concat('Transaction2x1.program.gz'),
      CircuitsPath.concat('Transaction2x1.abi.json'),
      CircuitsPath.concat('Transaction2x1.pkey.gz'),
      CircuitsPath.concat('Transaction2x1.vkey.gz'),
    );
    queueSize = 3;
    includedCounter = 22;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x2Verifier,
      cmInfo,
      [7, 8],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(23)),
      toDecimals(1),
      [toDecimals(10), toDecimals(10)],
      [toDecimals(1), toDecimals(1)],
      CircuitsPath.concat('Transaction2x2.program.gz'),
      CircuitsPath.concat('Transaction2x2.abi.json'),
      CircuitsPath.concat('Transaction2x2.pkey.gz'),
      CircuitsPath.concat('Transaction2x2.vkey.gz'),
    );
    queueSize = 5;
    includedCounter = 22;

    rollup('CommitmentPoolMain', protocol, poolMain, rollup1, testToken, accounts, cmInfo.commitments, {
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: 22,
    });

    rollup('CommitmentPoolMain', protocol, poolMain, rollup1, testToken, accounts, cmInfo.commitments, {
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: 23,
    });

    queueSize = 3;
    includedCounter = 24;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x1Verifier,
      cmInfo,
      [9, 10],
      queueSize,
      includedCounter,
      depositAmount.add(depositAmount).sub(toDecimals(12)),
      toDecimals(1),
      [toDecimals(10)],
      [toDecimals(1)],
      CircuitsPath.concat('Transaction2x1.program.gz'),
      CircuitsPath.concat('Transaction2x1.abi.json'),
      CircuitsPath.concat('Transaction2x1.pkey.gz'),
      CircuitsPath.concat('Transaction2x1.vkey.gz'),
    );

    rollup('CommitmentPoolMain', protocol, poolMain, rollup4, testToken, accounts, cmInfo.commitments, {
      rollupSize: 4,
      rollupFee: toDecimals(1).toString(),
      includedCount: 24,
    });

    queueSize = 0;
    includedCounter = 28;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x0Verifier,
      cmInfo,
      [21],
      queueSize,
      includedCounter,
      toDecimals(10),
      toBN(0),
      [],
      [],
      CircuitsPath.concat('Transaction1x0.program.gz'),
      CircuitsPath.concat('Transaction1x0.abi.json'),
      CircuitsPath.concat('Transaction1x0.pkey.gz'),
      CircuitsPath.concat('Transaction1x0.vkey.gz'),
    );

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x0Verifier,
      cmInfo,
      [22, 23],
      queueSize,
      includedCounter,
      toDecimals(20).sub(toDecimals(1)),
      toDecimals(1),
      [],
      [],
      CircuitsPath.concat('Transaction2x0.program.gz'),
      CircuitsPath.concat('Transaction2x0.abi.json'),
      CircuitsPath.concat('Transaction2x0.pkey.gz'),
      CircuitsPath.concat('Transaction2x0.vkey.gz'),
    );

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x1Verifier,
      cmInfo,
      [24],
      queueSize,
      includedCounter,
      toDecimals(10).sub(toDecimals(3)),
      toDecimals(1),
      [toDecimals(1)],
      [toDecimals(1)],
      CircuitsPath.concat('Transaction1x1.program.gz'),
      CircuitsPath.concat('Transaction1x1.abi.json'),
      CircuitsPath.concat('Transaction1x1.pkey.gz'),
      CircuitsPath.concat('Transaction1x1.vkey.gz'),
    );
    queueSize = 1;
    includedCounter = 28;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x1Verifier,
      cmInfo,
      [25],
      queueSize,
      includedCounter,
      toDecimals(10).sub(toDecimals(3)),
      toDecimals(1),
      [toDecimals(1)],
      [toDecimals(1)],
      CircuitsPath.concat('Transaction1x1.program.gz'),
      CircuitsPath.concat('Transaction1x1.abi.json'),
      CircuitsPath.concat('Transaction1x1.pkey.gz'),
      CircuitsPath.concat('Transaction1x1.vkey.gz'),
    );
    queueSize = 2;
    includedCounter = 28;

    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction2x2Verifier,
      cmInfo,
      [26, 27],
      queueSize,
      includedCounter,
      toDecimals(20).sub(toDecimals(5)),
      toDecimals(1),
      [toDecimals(1), toDecimals(1)],
      [toDecimals(1), toDecimals(1)],
      CircuitsPath.concat('Transaction2x2.program.gz'),
      CircuitsPath.concat('Transaction2x2.abi.json'),
      CircuitsPath.concat('Transaction2x2.pkey.gz'),
      CircuitsPath.concat('Transaction2x2.vkey.gz'),
    );

    queueSize = 4;
    includedCounter = 28;

    rollup('CommitmentPoolMain', protocol, poolMain, rollup4, testToken, accounts, cmInfo.commitments, {
      rollupSize: 4,
      rollupFee: toDecimals(1).toString(),
      includedCount: 28,
    });

    queueSize = 0;
    includedCounter = 32;
    testTransact(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      transaction1x0Verifier,
      cmInfo,
      [28],
      queueSize,
      includedCounter,
      toDecimals(1),
      toBN(0),
      [],
      [],
      CircuitsPath.concat('Transaction1x0.program.gz'),
      CircuitsPath.concat('Transaction1x0.abi.json'),
      CircuitsPath.concat('Transaction1x0.pkey.gz'),
      CircuitsPath.concat('Transaction1x0.vkey.gz'),
    );
  });
});
