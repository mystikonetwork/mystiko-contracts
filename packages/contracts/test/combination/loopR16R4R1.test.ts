import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolMain,
  MockMystikoToken,
  MockSanctionList,
  MystikoV2LoopMain,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toBN, toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import {
  MystikoCertificate,
  MystikoRelayerPool,
  MystikoRollerPool,
  MystikoBridgeSettings,
} from '@mystikonetwork/contracts-abi-settings';
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
    const { mockToken, hasher3, mockSanctionList, certificate, rollerPool, relayerPool, settings } =
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
      certificate,
      rollerPool,
      relayerPool,
      settings,
    };
  }

  let accounts: Wallet[];
  let mockToken: MockMystikoToken;
  let mockSanctionList: MockSanctionList;
  let poolMain: CommitmentPoolMain;
  let loopMain: MystikoV2LoopMain;
  let protocol: MystikoProtocolV2;
  let certificate: MystikoCertificate;
  let rollerPool: MystikoRollerPool;
  let relayerPool: MystikoRelayerPool;
  let settings: MystikoBridgeSettings;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    mockToken = r.mockToken;
    mockSanctionList = r.mockSanctionList;

    poolMain = r.pool.poolMain;
    loopMain = r.loop.coreMain;
    certificate = r.certificate;
    rollerPool = r.rollerPool;
    relayerPool = r.relayerPool;
    settings = r.settings;
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
      mockToken,
      mockSanctionList,
      certificate,
      settings,
      accounts,
      depositAmount.toString(),
      true,
      cmInfo,
    );

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 16,
      includedCount: 0,
    });

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 4,
      includedCount: 16,
    });

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 1,
      includedCount: 20,
    });

    queueSize = 0;
    includedCounter = 21;

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
      includedCount: 21,
    });

    queueSize = 0;
    includedCounter = 22;

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
    includedCounter = 22;

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
    includedCounter = 22;

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
    includedCounter = 22;

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
    queueSize = 5;
    includedCounter = 22;

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: 22,
    });

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: 23,
    });

    queueSize = 3;
    includedCounter = 24;

    testTransact(
      'CommitmentPoolMain',
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 4,
      rollupFee: toDecimals(1).toString(),
      includedCount: 24,
    });

    queueSize = 0;
    includedCounter = 28;

    testTransact(
      'CommitmentPoolMain',
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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
      accounts[0],
      protocol,
      poolMain,
      settings,
      relayerPool,
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

    rollup('CommitmentPoolMain', protocol, poolMain, mockToken, rollerPool, accounts, cmInfo.commitments, {
      rollupSize: 4,
      rollupFee: toDecimals(1).toString(),
      includedCount: 28,
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
