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
import { toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { constructCommitment } from '../../common';
import { loopDeposit, loopDepositRevert } from '../../common/loopDepositTests';
import {
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployLoopContracts,
  loadFixture,
} from '../../util/common';
import { MystikoCertificate, MystikoSettings } from '@mystikonetwork/contracts-abi-settings';

describe('Test Mystiko pool revert', () => {
  async function fixture(accounts: Wallet[]) {
    const { mockToken, hasher3, mockSanctionList, settings, certificate } = await deployDependContracts(
      accounts,
    );
    const pool = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {
      treeHeight: 1,
    });
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
      settings,
    };
  }

  let accounts: Wallet[];
  let mockToken: MockToken;
  let mockSanctionList: MockSanctionList;
  let certificate: MystikoCertificate;
  let settings: MystikoSettings;
  let poolMain: CommitmentPoolMain;
  let loopMain: MystikoV2LoopMain;
  let poolErc20: CommitmentPoolERC20;
  let loopERC20: MystikoV2LoopERC20;
  let protocol: MystikoProtocolV2;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    mockToken = r.mockToken;
    mockSanctionList = r.mockSanctionList;
    certificate = r.certificate;
    settings = r.settings;

    poolMain = r.pool.poolMain;
    loopMain = r.loop.coreMain;
    poolErc20 = r.pool.poolERC20;
    loopERC20 = r.loop.coreERC20;
  });

  it('test pool revert main', async () => {
    const depositAmount = toDecimals(40);

    const count = 2;
    const cmInfo1 = await constructCommitment(protocol, count, depositAmount.toString());

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
      cmInfo1,
    );

    const cmInfo2 = await constructCommitment(protocol, count, depositAmount.toString());
    await loopDepositRevert(
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
      cmInfo2,
    );
  });

  it('test pool erc20', async () => {
    const depositAmount = toDecimals(40);

    const count = 2;
    const cmInfo1 = await constructCommitment(protocol, count, depositAmount.toString());

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
      cmInfo1,
    );

    const cmInfo2 = await constructCommitment(protocol, count, depositAmount.toString());
    await loopDepositRevert(
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
      cmInfo2,
    );
  });
});
