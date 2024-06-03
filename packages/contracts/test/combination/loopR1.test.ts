import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  MockMystikoToken,
  MockSanctionList,
  MystikoV2LoopERC20,
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

describe('Mystiko combination test R1', () => {
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
    await settings.updateAssociatedPool(loop.coreMain.address, pool.poolMain.address);
    await settings.updateAssociatedPool(loop.coreERC20.address, pool.poolERC20.address);

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
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2LoopERC20;
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
    poolErc20 = r.pool.poolERC20;
    loopERC20 = r.loop.coreERC20;
    certificate = r.certificate;
    rollerPool = r.rollerPool;
    relayerPool = r.relayerPool;
    settings = r.settings;
  });

  it('combination erc20 [ rollup1 + transact1 ]', async () => {
    const depositAmount = toDecimals(100);
    let queueSize = 2;
    let includedCounter = 0;
    const cmInfo = await constructCommitment(protocol, queueSize, depositAmount.toString());

    await loopDeposit(
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
      rollupSize: 1,
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

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

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

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
      depositAmount.sub(toDecimals(42)),
      toDecimals(1),
      [toDecimals(40)],
      [toDecimals(1)],
      CircuitsPath.concat('Transaction1x1.program.gz'),
      CircuitsPath.concat('Transaction1x1.abi.json'),
      CircuitsPath.concat('Transaction1x1.pkey.gz'),
      CircuitsPath.concat('Transaction1x1.vkey.gz'),
      mockToken,
    );
    queueSize += 1;

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

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
      toDecimals(40).sub(toDecimals(12)),
      toDecimals(1),
      [toDecimals(10)],
      [toDecimals(1)],
      CircuitsPath.concat('Transaction1x1.program.gz'),
      CircuitsPath.concat('Transaction1x1.abi.json'),
      CircuitsPath.concat('Transaction1x1.pkey.gz'),
      CircuitsPath.concat('Transaction1x1.vkey.gz'),
      mockToken,
    );
    queueSize += 1;

    rollup('CommitmentPoolERC20', protocol, poolErc20, mockToken, rollerPool, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

    testTransact(
      'CommitmentPoolERC20',
      accounts[0],
      protocol,
      poolErc20,
      settings,
      relayerPool,
      cmInfo,
      [3],
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
      mockToken,
    );
  });
});
