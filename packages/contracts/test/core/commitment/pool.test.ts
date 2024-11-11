import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  MockSanctionList,
  MystikoV2LoopERC20,
  MystikoV2LoopMain,
  MockToken,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toBN, toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { expect } from 'chai';
import { waffle } from 'hardhat';
import {
  MystikoCertificate,
  MystikoRelayerPool,
  MystikoRollerPool,
  MystikoSettings,
} from '@mystikonetwork/contracts-abi-settings';
import {
  constructCommitment,
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
    const { mockToken, settings } = await deployDependContracts(accounts);
    for (let i = 1; i < 33; i += 1) {
      await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {
        treeHeight: i,
      });
    }
  });

  it('should revert when treeHeight less than zero', async () => {
    const accounts = waffle.provider.getWallets();
    const { mockToken, settings } = await deployDependContracts(accounts);
    await expect(
      deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, { treeHeight: 0 }),
    ).revertedWith('TreeHeightLessThanZero()');
  });

  it('should revert when treeHeight out of bounds', async () => {
    const accounts = waffle.provider.getWallets();
    const { mockToken, settings } = await deployDependContracts(accounts);
    await expect(
      deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, { treeHeight: 33 }),
    ).revertedWith('TreeHeightOutOfBounds()');
  });
});

describe('Test Mystiko pool', () => {
  async function fixture(accounts: Wallet[]) {
    const { mockToken, hasher3, settings, mockSanctionList, certificate, rollerPool, relayerPool } =
      await deployDependContracts(accounts);
    const pool = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});
    const loop = await deployLoopContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      settings.address,
      {},
    );
    await settings.setAssociatedPool(loop.coreMain.address, pool.poolMain.address);
    await settings.setAssociatedPool(loop.coreERC20.address, pool.poolERC20.address);
    return {
      mockToken,
      hasher3,
      pool,
      loop,
      mockSanctionList,
      settings,
      certificate,
      rollerPool,
      relayerPool,
    };
  }

  let accounts: Wallet[];
  let mockToken: MockToken;
  let mockSanctionList: MockSanctionList;
  let settings: MystikoSettings;
  let certificate: MystikoCertificate;
  let rollerPool: MystikoRollerPool;
  let relayerPool: MystikoRelayerPool;
  let poolMain: CommitmentPoolMain;
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2LoopERC20;
  let loopMain: MystikoV2LoopMain;
  let protocol: MystikoProtocolV2;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    mockToken = r.mockToken;
    mockSanctionList = r.mockSanctionList;
    settings = r.settings;
    certificate = r.certificate;
    rollerPool = r.rollerPool;
    relayerPool = r.relayerPool;

    poolMain = r.pool.poolMain;
    poolErc20 = r.pool.poolERC20;
    loopMain = r.loop.coreMain;
    loopERC20 = r.loop.coreERC20;
  });

  it('test constructor', async () => {
    await testCommitmentPoolConstructor('CommitmentPoolMain', poolMain, {});
    await testCommitmentPoolConstructor('CommitmentPoolERC20', poolErc20, {});
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
      mockToken,
      mockSanctionList,
      certificate,
      settings,
      accounts,
      depositAmount.toString(),
      true,
      cmInfo,
    );

    testRollup(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      mockToken,
      settings,
      rollerPool,
      accounts,
      cmInfo.commitments,
      {
        rollupSize: 16,
        includedCount: 0,
      },
    );
    testRollup(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      mockToken,
      settings,
      rollerPool,
      accounts,
      cmInfo.commitments,
      {
        rollupSize: 8,
        includedCount: 16,
      },
    );
    testRollup(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      mockToken,
      settings,
      rollerPool,
      accounts,
      cmInfo.commitments,
      {
        rollupSize: 4,
        includedCount: 24,
      },
    );
    testRollup(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      mockToken,
      settings,
      rollerPool,
      accounts,
      cmInfo.commitments,
      {
        rollupSize: 2,
        includedCount: 28,
      },
    );
    testRollup(
      'CommitmentPoolMain',
      protocol,
      poolMain,
      mockToken,
      settings,
      rollerPool,
      accounts,
      cmInfo.commitments,
      {
        rollupSize: 1,
        includedCount: 30,
      },
    );

    queueSize = 0;
    includedCounter = 31;
    testTransactRevert(
      'CommitmentPoolMain',
      accounts,
      protocol,
      poolMain,
      mockSanctionList,
      relayerPool,
      settings,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: 31,
    });

    queueSize = 0;
    includedCounter = 32;

    testTransact(
      'CommitmentPoolMain',
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      mockToken,
      mockSanctionList,
      certificate,
      settings,
      accounts,
      depositAmount.toString(),
      false,
      cmInfo,
    );

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 16,
      includedCount: 0,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 8,
      includedCount: 16,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 4,
      includedCount: 24,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 2,
      includedCount: 28,
    });

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: 30,
    });

    queueSize = 0;
    includedCounter = 31;
    testTransact(
      'CommitmentPoolERC20',
      accounts[0],
      protocol,
      poolErc20,
      settings,
      relayerPool,
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
      mockToken,
    );

    testTransact(
      'CommitmentPoolERC20',
      accounts[0],
      protocol,
      poolErc20,
      settings,
      relayerPool,
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
      mockToken,
    );
    queueSize = 1;
    includedCounter = 31;

    testTransact(
      'CommitmentPoolERC20',
      accounts[0],
      protocol,
      poolErc20,
      settings,
      relayerPool,
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
      mockToken,
    );
    queueSize = 3;
    includedCounter = 31;

    testTransact(
      'CommitmentPoolERC20',
      accounts[0],
      protocol,
      poolErc20,
      settings,
      relayerPool,
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
      mockToken,
    );

    testTransact(
      'CommitmentPoolERC20',
      accounts[0],
      protocol,
      poolErc20,
      settings,
      relayerPool,
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
      mockToken,
    );
    queueSize = 4;
    includedCounter = 31;

    testTransact(
      'CommitmentPoolERC20',
      accounts[0],
      protocol,
      poolErc20,
      settings,
      relayerPool,
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
      mockToken,
    );
  });
});
