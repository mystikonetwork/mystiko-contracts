import { Wallet } from '@ethersproject/wallet';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { toDecimals } from '@mystikonetwork/utils';
import {
  TestToken,
  CommitmentPoolMain,
  DummySanctionsList,
  MystikoV2LayerZeroMain,
  DummyAxelarGateway,
  DummyAxelarGasService,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import {
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
  deployDummyAxelarGateway,
  deployAxelarContracts,
  deployDummyAxelarGasService,
} from '../../../util/common';
import { constructCommitment, testBridgeConstructor } from '../../../common';

// @ts-ignore
import { MaxAmount, MinAmount, MinBridgeFee, MinRollupFee } from '../../../util/constants';
import { testAxelarDeposit } from '../../../common/depositAxelarTests';

describe('Test Mystiko axelar', () => {
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

    const dummyAxelarGateway = await deployDummyAxelarGateway(accounts);
    const dummyAxelarGasService = await deployDummyAxelarGasService(accounts);

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

    const local = await deployAxelarContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      dummyAxelarGateway,
      dummyAxelarGasService,
      poolLocal.poolMain,
      poolLocal.poolERC20,
      { minExecutorFee: '0' },
    );

    const remote = await deployAxelarContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      dummyAxelarGateway,
      dummyAxelarGasService,
      poolRemote.poolMain,
      poolRemote.poolERC20,
      { minExecutorFee: '0' },
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
      dummyAxelarGateway,
      dummyAxelarGasService,
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
  let dummyAxelarGateway: DummyAxelarGateway;
  let dummyAxelarGasService: DummyAxelarGasService;

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
    dummyAxelarGateway = r.dummyAxelarGateway;
    dummyAxelarGasService = r.dummyAxelarGasService;
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
      MinRollupFee,
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
      sanctionList,
      dummyAxelarGateway,
      dummyAxelarGasService,
      testToken,
      accounts,
      depositAmount.toString(),
      true,
      true,
      cmInfo,
    );
  });
});
