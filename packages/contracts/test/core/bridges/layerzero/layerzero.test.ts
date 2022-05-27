import { Wallet } from '@ethersproject/wallet';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { toDecimals } from '@mystikonetwork/utils';
import {
  TestToken,
  CommitmentPoolMain,
  DummySanctionsList,
  DummyLZEndpoint,
  MystikoV2LayerZeroMain,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import {
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
  deployDummyLayerZeroContracts,
  deployLayerZeroContracts,
} from '../../../util/common';
import { constructCommitment } from '../../../common';

// @ts-ignore
import { SourceChainID, LzChainID } from '../../../util/constants';
import { testLayerZeroDeposit } from '../../../common/depositLayerZeroTests';

describe('Test Mystiko layer zero', () => {
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

    const dummyLZEndpoint = await deployDummyLayerZeroContracts(accounts);

    const poolLocal = await deployCommitmentPoolContracts(
      accounts,
      testToken.address,
      sanctionList.address,
      {},
    );
    const poolRemote = await deployCommitmentPoolContracts(
      accounts,
      testToken.address,
      sanctionList.address,
      {},
    );

    const local = await deployLayerZeroContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      dummyLZEndpoint,
      poolLocal.poolMain,
      poolLocal.poolERC20,
      {},
    );

    const remote = await deployLayerZeroContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      dummyLZEndpoint,
      poolRemote.poolMain,
      poolRemote.poolERC20,
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
      poolLocal,
      poolRemote,
      local,
      remote,
      sanctionList,
      dummyLZEndpoint,
    };
  }

  let accounts: Wallet[];
  let testToken: TestToken;
  let sanctionList: DummySanctionsList;
  let localPoolMain: CommitmentPoolMain;
  let remotePoolMain: CommitmentPoolMain;
  let localMain: MystikoV2LayerZeroMain;
  let remoteMain: MystikoV2LayerZeroMain;
  let protocol: MystikoProtocolV2;
  let dummyLZEndpoint: DummyLZEndpoint;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    testToken = r.testToken;
    localPoolMain = r.poolLocal.poolMain;
    remotePoolMain = r.poolRemote.poolMain;
    localMain = r.local.coreMain;
    remoteMain = r.remote.coreMain;
    sanctionList = r.sanctionList;
    dummyLZEndpoint = r.dummyLZEndpoint;
  });

  it('test bridge main to main deposit', async () => {
    const depositAmount = toDecimals(10);
    const cmInfo = await constructCommitment(protocol, 1, depositAmount.toString());
    // layer zero test with same chain id
    await localMain.setTrustedRemote(LzChainID, remoteMain.address);
    await remoteMain.setTrustedRemote(LzChainID, localMain.address);
    await localMain.setPeerContract(SourceChainID, remoteMain.address);
    await dummyLZEndpoint.setDestLzEndpoint(localMain.address, dummyLZEndpoint.address);
    await dummyLZEndpoint.setDestLzEndpoint(remoteMain.address, dummyLZEndpoint.address);

    await testLayerZeroDeposit(
      'MystikoV2LayerZeroMain',
      protocol,
      localMain,
      localPoolMain,
      remotePoolMain,
      sanctionList,
      dummyLZEndpoint,
      testToken,
      accounts,
      depositAmount.toString(),
      true,
      true,
      cmInfo,
    );
  });
});