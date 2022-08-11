import { Wallet } from '@ethersproject/wallet';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import {
  MystikoV2LoopERC20,
  Transaction1x0Verifier,
  Transaction1x1Verifier,
  Rollup1Verifier,
  TestToken,
  CommitmentPoolERC20,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toBN, toDecimals } from '@mystikonetwork/utils';
import {
  deployLoopContracts,
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
} from '../util/common';
import { constructCommitment, testTransact } from '../common';
import { loopDeposit } from '../common/loopDepositTests';
import { rollup } from '../common/rollupTests';

describe('Mystiko combination test R1', () => {
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
  let testToken: TestToken;
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2LoopERC20;
  let transaction1x0Verifier: Transaction1x0Verifier;
  let transaction1x1Verifier: Transaction1x1Verifier;
  let rollup1: Rollup1Verifier;
  let protocol: MystikoProtocolV2;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    testToken = r.testToken;

    poolErc20 = r.pool.poolERC20;
    loopERC20 = r.loop.coreERC20;
    transaction1x0Verifier = r.transaction1x0Verifier;
    transaction1x1Verifier = r.transaction1x1Verifier;
    rollup1 = r.rollup1;
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
      testToken,
      accounts,
      depositAmount.toString(),
      false,
      cmInfo,
    );

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

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

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x1Verifier,
      cmInfo,
      [1],
      queueSize,
      includedCounter,
      depositAmount.sub(toDecimals(42)),
      toDecimals(1),
      [toDecimals(40)],
      [toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction1x1.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x1.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.vkey.gz',
      testToken,
    );
    queueSize += 1;

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x1Verifier,
      cmInfo,
      [2],
      queueSize,
      includedCounter,
      toDecimals(40).sub(toDecimals(12)),
      toDecimals(1),
      [toDecimals(10)],
      [toDecimals(1)],
      'circuits/dist/zokrates/dev/Transaction1x1.program.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.abi.json',
      'circuits/dist/zokrates/dev/Transaction1x1.pkey.gz',
      'circuits/dist/zokrates/dev/Transaction1x1.vkey.gz',
      testToken,
    );
    queueSize += 1;

    rollup('CommitmentPoolERC20', protocol, poolErc20, rollup1, testToken, accounts, cmInfo.commitments, {
      isMainAsset: false,
      rollupSize: 1,
      rollupFee: toDecimals(1).toString(),
      includedCount: includedCounter,
    });
    queueSize -= 1;
    includedCounter += 1;

    testTransact(
      'CommitmentPoolERC20',
      protocol,
      poolErc20,
      transaction1x0Verifier,
      cmInfo,
      [3],
      queueSize,
      includedCounter,
      toDecimals(10),
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
