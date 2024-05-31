import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  MockCelerMessageBus,
  MockSanctionList,
  MystikoV2CelerERC20,
  MystikoV2CelerMain,
  MockToken,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { MystikoSettings } from '@mystikonetwork/contracts-abi-settings';
import { constructCommitment, testBridgeConstructor } from '../../../common';
import { testCelerDeposit } from '../../../common/depositCelerTests';
import {
  deployCelerContracts,
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployMockCelerContracts,
  loadFixture,
  associateContract,
} from '../../../util/common';

// @ts-ignore
import {
  DestinationChainID,
  MaxAmount,
  MinAmount,
  MinBridgeFee,
  PeerMinExecutorFee,
  PeerMinRollupFee,
} from '../../../util/constants';

describe('Test Mystiko celer', () => {
  async function fixture(accounts: Wallet[]) {
    const { mockToken, hasher3, mockSanctionList, settings } = await deployDependContracts(accounts);

    const dummyCeler = await deployMockCelerContracts(accounts);

    const poolLocal = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});
    const poolRemote = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});

    const local = await deployCelerContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      dummyCeler,
      settings.address,
      {},
    );

    const remote = await deployCelerContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      dummyCeler,
      settings.address,
      {},
    );

    await associateContract(settings, local, remote, poolLocal, poolRemote);

    return {
      mockToken,
      hasher3,
      poolLocal,
      poolRemote,
      local,
      remote,
      mockSanctionList,
      dummyCeler,
      settings,
    };
  }

  let accounts: Wallet[];
  let mockToken: MockToken;
  let mockSanctionList: MockSanctionList;
  let localPoolMain: CommitmentPoolMain;
  let remotePoolMain: CommitmentPoolMain;
  let localPoolERC20: CommitmentPoolERC20;
  let remotePoolERC20: CommitmentPoolERC20;
  let localERC20: MystikoV2CelerERC20;
  let localMain: MystikoV2CelerMain;
  let remoteERC20: MystikoV2CelerERC20;
  let remoteMain: MystikoV2CelerMain;
  let protocol: MystikoProtocolV2;
  let dummyCeler: MockCelerMessageBus;
  let settings: MystikoSettings;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    mockToken = r.mockToken;
    localPoolMain = r.poolLocal.poolMain;
    localPoolERC20 = r.poolLocal.poolERC20;
    remotePoolMain = r.poolRemote.poolMain;
    remotePoolERC20 = r.poolRemote.poolERC20;
    localMain = r.local.coreMain;
    localERC20 = r.local.coreERC20;
    remoteMain = r.remote.coreMain;
    remoteERC20 = r.remote.coreERC20;
    mockSanctionList = r.mockSanctionList;
    dummyCeler = r.dummyCeler;
    settings = r.settings;
  });

  it('test constructor', () => {
    testBridgeConstructor(
      'MystikoV2CelerMain',
      localMain,
      localPoolMain,
      MinAmount,
      MaxAmount,
      MinBridgeFee,
      PeerMinExecutorFee,
      PeerMinRollupFee,
      DestinationChainID,
      remoteMain.address,
    );

    testBridgeConstructor(
      'MystikoV2CelerERC20',
      localERC20,
      localPoolERC20,
      MinAmount,
      MaxAmount,
      MinBridgeFee,
      PeerMinExecutorFee,
      PeerMinRollupFee,
      DestinationChainID,
      remoteERC20.address,
    );
  });

  it('test bridge main to main deposit', async () => {
    const depositAmount = toDecimals(10);
    const cmInfo = await constructCommitment(protocol, 1, depositAmount.toString());

    await testCelerDeposit(
      'MystikoV2CelerMain',
      protocol,
      localMain,
      localPoolMain,
      remoteMain,
      remotePoolMain,
      mockSanctionList,
      dummyCeler,
      mockToken,
      settings,
      accounts,
      depositAmount.toString(),
      true,
      true,
      cmInfo,
    );
  });

  // it('test bridge main to erc20 deposit', async () => {
  //   const depositAmount = toDecimals(10);
  //   const cmInfo = await constructCommitment(protocol, 21, depositAmount.toString());
  //
  //   await testBridgeDeposit(
  //     'MystikoV2TBridgeMain',
  //     protocol,
  //     localMain,
  //     remoteERC20,
  //     proxy,
  //     mockToken,
  //     accounts,
  //     depositAmount.toString(),
  //     true,
  //     false,
  //     cmInfo,
  //   );
  // });
  //
  // it('test bridge erc20 to main deposit', async () => {
  //   const depositAmount = toDecimals(10);
  //   const cmInfo = await constructCommitment(protocol, 21, depositAmount.toString());
  //
  //   await testBridgeDeposit(
  //     'MystikoV2TBridgeERC20',
  //     protocol,
  //     localERC20,
  //     remoteMain,
  //     proxy,
  //     mockToken,
  //     accounts,
  //     depositAmount.toString(),
  //     false,
  //     true,
  //     cmInfo,
  //   );
  // });
  //
  it('test bridge erc20 to erc20 deposit', async () => {
    const depositAmount = toDecimals(10);
    const cmInfo = await constructCommitment(protocol, 21, depositAmount.toString());

    await testCelerDeposit(
      'MystikoV2CelerERC20',
      protocol,
      localERC20,
      localPoolERC20,
      remoteERC20,
      remotePoolERC20,
      mockSanctionList,
      dummyCeler,
      mockToken,
      settings,
      accounts,
      depositAmount.toString(),
      false,
      false,
      cmInfo,
    );
  });
});
