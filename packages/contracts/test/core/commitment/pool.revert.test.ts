import { Wallet } from '@ethersproject/wallet';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import {
  MystikoV2LoopMain,
  TestToken,
  CommitmentPoolMain,
  DummySanctionsList,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toDecimals } from '@mystikonetwork/utils';
import { loopDeposit, loopDepositRevert } from '../../common/loopDepositTests';
import {
  deployLoopContracts,
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
} from '../../util/common';
import { constructCommitment } from '../../common';

describe('Test Mystiko pool revert', () => {
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
  let loopMain: MystikoV2LoopMain;
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
