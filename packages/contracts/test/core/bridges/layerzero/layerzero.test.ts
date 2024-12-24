import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolMain,
  MockLZEndpoint,
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
import { testLayerZeroDeposit } from '../../../common/depositLayerZeroTests';
import {
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployMockLayerZeroContracts,
  deployLayerZeroContracts,
  loadFixture,
  associateContract,
} from '../../../util/common';

// @ts-ignore
import {
  DestinationChainID,
  LzChainID,
  MaxAmount,
  MinAmount,
  MinBridgeFee,
  PeerMinRollupFee,
} from '../../../util/constants';

describe('Test Mystiko layer zero', () => {
  async function fixture(accounts: Wallet[]) {
    const { mockToken, hasher3, mockSanctionList, settings } = await deployDependContracts(accounts);

    const dummyLZEndpoint = await deployMockLayerZeroContracts(accounts);

    const poolLocal = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});
    const poolRemote = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});

    const local = await deployLayerZeroContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      dummyLZEndpoint,
      settings.address,
      { peerMinExecutorFee: '0' },
    );

    const remote = await deployLayerZeroContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      dummyLZEndpoint,
      settings.address,
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
      dummyLZEndpoint,
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
  let dummyLZEndpoint: MockLZEndpoint;
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
    dummyLZEndpoint = r.dummyLZEndpoint;
    settings = r.settings;
  });

  it('test constructor', () => {
    testBridgeConstructor(
      'MystikoV2LayerZeroMain',
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

    // layer zero test with same chain id
    await localMain.setTrustedRemote(LzChainID, remoteMain.address);
    await remoteMain.setTrustedRemote(LzChainID, localMain.address);
    await dummyLZEndpoint.setDestLzEndpoint(localMain.address, dummyLZEndpoint.address);
    await dummyLZEndpoint.setDestLzEndpoint(remoteMain.address, dummyLZEndpoint.address);

    await testLayerZeroDeposit(
      'MystikoV2LayerZeroMain',
      protocol,
      localMain,
      localPoolMain,
      remotePoolMain,
      mockSanctionList,
      dummyLZEndpoint,
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
