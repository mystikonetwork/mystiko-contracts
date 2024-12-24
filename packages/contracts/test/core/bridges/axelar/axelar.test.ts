import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolMain,
  MockAxelarGasService,
  MockAxelarGateway,
  MockSanctionList,
  MystikoV2LayerZeroMain,
  MockToken,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { MystikoSettings } from '@mystikonetwork/contracts-abi-settings';
import { constructCommitment, testBridgeConstructor } from '../../../common';
import { testAxelarDeposit } from '../../../common/depositAxelarTests';
import {
  deployAxelarContracts,
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployMockAxelarGasService,
  deployMockAxelarGateway,
  loadFixture,
  associateContract,
} from '../../../util/common';

// @ts-ignore
import {
  MaxAmount,
  DestinationChainID,
  MinAmount,
  MinBridgeFee,
  PeerMinRollupFee,
} from '../../../util/constants';

describe('Test Mystiko axelar', () => {
  async function fixture(accounts: Wallet[]) {
    const { mockToken, hasher3, mockSanctionList, settings } = await deployDependContracts(accounts);

    const dummyAxelarGateway = await deployMockAxelarGateway(accounts);
    const dummyAxelarGasService = await deployMockAxelarGasService(accounts);

    const poolLocal = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});
    const poolRemote = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});

    const local = await deployAxelarContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      settings.address,
      dummyAxelarGateway,
      dummyAxelarGasService,
      { peerMinExecutorFee: '0' },
    );

    const remote = await deployAxelarContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      settings.address,
      dummyAxelarGateway,
      dummyAxelarGasService,
      { peerMinExecutorFee: '0' },
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
      dummyAxelarGateway,
      dummyAxelarGasService,
      settings,
    };
  }

  let accounts: Wallet[];
  let mockToken: MockToken;
  let mockSanctionList: MockSanctionList;
  let localPoolMain: CommitmentPoolMain;
  let remotePoolMain: CommitmentPoolMain;
  let localMain: MystikoV2LayerZeroMain;
  let remoteMain: MystikoV2LayerZeroMain;
  let protocol: MystikoProtocolV2;
  let dummyAxelarGateway: MockAxelarGateway;
  let dummyAxelarGasService: MockAxelarGasService;
  let settings: MystikoSettings;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    mockToken = r.mockToken;
    localPoolMain = r.poolLocal.poolMain;
    remotePoolMain = r.poolRemote.poolMain;
    localMain = r.local.coreMain;
    remoteMain = r.remote.coreMain;
    mockSanctionList = r.mockSanctionList;
    dummyAxelarGateway = r.dummyAxelarGateway;
    dummyAxelarGasService = r.dummyAxelarGasService;
    settings = r.settings;
  });

  it('test constructor', () => {
    testBridgeConstructor(
      'MystikoV2AxelarMain',
      localMain,
      localPoolMain,
      MinAmount,
      MaxAmount,
      MinBridgeFee,
      '0',
      PeerMinRollupFee,
      DestinationChainID,
      remoteMain.address,
      '0',
    );
  });

  it('test bridge main to main deposit', async () => {
    const depositAmount = toDecimals(10);
    const cmInfo = await constructCommitment(protocol, 1, depositAmount.toString());

    await testAxelarDeposit(
      'MystikoV2AxelarMain',
      protocol,
      localMain,
      remoteMain,
      localPoolMain,
      remotePoolMain,
      mockSanctionList,
      dummyAxelarGateway,
      dummyAxelarGasService,
      mockToken,
      settings,
      accounts,
      depositAmount.toString(),
      true,
      true,
      cmInfo,
    );
  });
});
