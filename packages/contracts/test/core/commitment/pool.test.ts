import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  DummySanctionsList,
  MystikoV2LoopERC20,
  MystikoV2LoopMain,
  Rollup16Verifier,
  Rollup1Verifier,
  Rollup2Verifier,
  Rollup4Verifier,
  Rollup8Verifier,
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
import { expect } from 'chai';
import { waffle } from 'hardhat';
import {
  constructCommitment,
  testCommitmentPoolAdminOperations,
  testCommitmentPoolConstructor,
  testLoopDeposit,
  testRollup,
  testTransact,
} from '../../common';
import { rollup } from '../../common/rollupTests';
import { testTransactRevert } from '../../common/transactTests';
import {
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployLoopContracts,
  loadFixture,
} from '../../util/common';
import { CircuitsPath } from '../../util/constants';

describe('Test Mystiko pool tree', () => {
  it('test pool tree', async () => {
    const accounts = waffle.provider.getWallets();
    const { testToken, sanctionList } = await deployDependContracts(accounts);
    for (let i = 1; i < 33; i += 1) {
      await deployCommitmentPoolContracts(accounts, testToken.address, sanctionList.address, {
        treeHeight: i,
      });
    }
  });

  it('should revert when treeHeight less than zero', async () => {
    const accounts = waffle.provider.getWallets();
    const { testToken, sanctionList } = await deployDependContracts(accounts);
    await expect(
      deployCommitmentPoolContracts(accounts, testToken.address, sanctionList.address, { treeHeight: 0 }),
    ).revertedWith('TreeHeightLessThanZero()');
  });

  it('should revert when treeHeight out of bounds', async () => {
    const accounts = waffle.provider.getWallets();
    const { testToken, sanctionList } = await deployDependContracts(accounts);
    await expect(
      deployCommitmentPoolContracts(accounts, testToken.address, sanctionList.address, { treeHeight: 33 }),
    ).revertedWith('TreeHeightOutOfBounds()');
  });
});

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
  let rollup2: Rollup2Verifier;
  let rollup4: Rollup4Verifier;
  let rollup8: Rollup8Verifier;
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
    rollup2 = r.rollup2;
    rollup4 = r.rollup4;
    rollup8 = r.rollup8;
    rollup16 = r.rollup16;
  });

  it('test constructor', async () => {
    await testCommitmentPoolConstructor('CommitmentPoolMain', poolMain, {});
    await testCommitmentPoolConstructor('CommitmentPoolERC20', poolErc20, {});
  });

  it('test admin operation', async () => {
    await testCommitmentPoolAdminOperations('CommitmentPoolMain', poolMain, accounts);
    await testCommitmentPoolAdminOperations('CommitmentPoolERC20', poolErc20, accounts);
  });

  it('test pool main', async () => {
    const depositAmount = toDecimals(40);

    let queueSize = 31;
    let includedCounter = 0;
    const cmInfo = await constructCommitment(protocol, queueSize, depositAmount.toString());

    await testLoopDeposit(
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

    testRollup('CommitmentPoolMain', protocol, poolMain, rollup16, testToken, accounts, cmInfo.commitments, {
      rollupSize: 16,
      includedCount: 0,
    });
    testRollup('CommitmentPoolMain', protocol, poolMain, rollup8, testToken, accounts, cmInfo.commitments, {
      rollupSize: 8,
      includedCount: 16,
    });
    testRollup('CommitmentPoolMain', protocol, poolMain, rollup4, testToken, accounts, cmInfo.commitments, {
      rollupSize: 4,
      includedCount: 24,
    });
    testRollup('CommitmentPoolMain', protocol, poolMain, rollup2, testToken, accounts, cmInfo.commitments, {
      rollupSize: 2,
      includedCount: 28,
    });
    testRollup('CommitmentPoolMain', protocol, poolMain, rollup1, testToken, accounts, cmInfo.commitments, {
      rollupSize: 1,
      includedCount: 30,
    });

    queueSize = 0;
    includedCounter = 31;
    testTransactRevert(
      'CommitmentPoolMain',
      accounts,
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
      CircuitsPath.concat('Transaction1x0.program.gz'),
      CircuitsPath.concat('Transaction1x0.abi.json'),
      CircuitsPath.concat('Transaction1x0.pkey.gz'),
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
      includedCount: 31,
    });

    queueSize = 0;
    includedCounter = 32;

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
    includedCounter = 32;

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
    includedCounter = 32;

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
    includedCounter = 32;

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
  });

  it('test pool erc20', async () => {
    const depositAmount = toDecimals(40);
    let queueSize = 31;
    let includedCounter = 0;
    const cmInfo = await constructCommitment(protocol, queueSize, depositAmount.toString());

    await testLoopDeposit(
      'MystikoV2LoopERC20',
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

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup16, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 16,
      includedCount: 0,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup8, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 8,
      includedCount: 16,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup4, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 4,
      includedCount: 24,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup2, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 2,
      includedCount: 28,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: 30,
    });

    queueSize = 0;
    includedCounter = 31;
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
      CircuitsPath.concat('Transaction1x0.program.gz'),
      CircuitsPath.concat('Transaction1x0.abi.json'),
      CircuitsPath.concat('Transaction1x0.pkey.gz'),
      CircuitsPath.concat('Transaction1x0.vkey.gz'),
      testToken,
    );

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
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
      testToken,
    );
    queueSize = 1;
    includedCounter = 31;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
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
      testToken,
    );
    queueSize = 3;
    includedCounter = 31;

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
      CircuitsPath.concat('Transaction2x0.program.gz'),
      CircuitsPath.concat('Transaction2x0.abi.json'),
      CircuitsPath.concat('Transaction2x0.pkey.gz'),
      CircuitsPath.concat('Transaction2x0.vkey.gz'),
      testToken,
    );

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
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
      testToken,
    );
    queueSize = 4;
    includedCounter = 31;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
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
      testToken,
    );
  });
});
