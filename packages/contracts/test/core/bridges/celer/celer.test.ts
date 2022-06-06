import { Wallet } from '@ethersproject/wallet';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { toDecimals } from '@mystikonetwork/utils';
import {
  MystikoV2CelerERC20,
  MystikoV2CelerMain,
  TestToken,
  CommitmentPoolMain,
  DummySanctionsList,
  DummyCelerMessageBus,
  CommitmentPoolERC20,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import {
  deployDependContracts,
  loadFixture,
  deployCommitmentPoolContracts,
  deployCelerContracts,
  deployDummyCelerContracts,
} from '../../../util/common';
import { testBridgeConstructor, testBridgeAdminOperations, constructCommitment } from '../../../common';

// @ts-ignore
import {
  DestinationChainID,
  MinRollupFee,
  MinBridgeFee,
  MinExecutorFee,
  MinAmount,
} from '../../../util/constants';
import { testCelerDeposit } from '../../../common/depositCelerTests';

describe('Test Mystiko celer', () => {
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

    const dummyCeler = await deployDummyCelerContracts(accounts);

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

    const local = await deployCelerContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      dummyCeler,
      poolLocal.poolMain,
      poolLocal.poolERC20,
      {},
    );

    const remote = await deployCelerContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      dummyCeler,
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
      dummyCeler,
    };
  }

  let accounts: Wallet[];
  let testToken: TestToken;
  let sanctionList: DummySanctionsList;
  let localPoolMain: CommitmentPoolMain;
  let remotePoolMain: CommitmentPoolMain;
  let localPoolERC20: CommitmentPoolERC20;
  let remotePoolERC20: CommitmentPoolERC20;
  let localERC20: MystikoV2CelerERC20;
  let localMain: MystikoV2CelerMain;
  let remoteERC20: MystikoV2CelerERC20;
  let remoteMain: MystikoV2CelerMain;
  let protocol: MystikoProtocolV2;
  let dummyCeler: DummyCelerMessageBus;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const protocolFactory = new ProtocolFactoryV2(new ZokratesNodeProverFactory());
    protocol = await protocolFactory.create();

    const r = await loadFixture(fixture);
    testToken = r.testToken;
    localPoolMain = r.poolLocal.poolMain;
    localPoolERC20 = r.poolLocal.poolERC20;
    remotePoolMain = r.poolRemote.poolMain;
    remotePoolERC20 = r.poolRemote.poolERC20;
    localMain = r.local.coreMain;
    localERC20 = r.local.coreERC20;
    remoteMain = r.remote.coreMain;
    remoteERC20 = r.remote.coreERC20;
    sanctionList = r.sanctionList;
    dummyCeler = r.dummyCeler;
  });

  it('test constructor', async () => {
    await localMain.setPeerContract(DestinationChainID, '', remoteMain.address);
    testBridgeConstructor(
      'MystikoV2CelerMain',
      localMain,
      MinAmount,
      MinBridgeFee,
      MinExecutorFee,
      MinRollupFee,
    );

    await localERC20.setPeerContract(DestinationChainID, '', remoteERC20.address);
    testBridgeConstructor(
      'MystikoV2CelerERC20',
      localERC20,
      MinAmount,
      MinBridgeFee,
      MinExecutorFee,
      MinRollupFee,
    );
  });

  it('test admin operation', () => {
    testBridgeAdminOperations('MystikoV2CelerMain', localMain, accounts);
    testBridgeAdminOperations('MystikoV2CelerERC20', localERC20, accounts);
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
      sanctionList,
      dummyCeler,
      testToken,
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
  //     testToken,
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
  //     testToken,
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
      sanctionList,
      dummyCeler,
      testToken,
      accounts,
      depositAmount.toString(),
      false,
      false,
      cmInfo,
    );
  });
});
