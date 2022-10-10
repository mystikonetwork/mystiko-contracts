import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  DummySanctionsList,
  MystikoTBridgeProxy,
  MystikoV2TBridgeERC20,
  MystikoV2TBridgeMain,
  TestToken,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { constructCommitment, testBridgeAdminOperations, testBridgeConstructor } from '../../../common';
import { testTBridgeProxyAdminOperations } from '../../../common/adminOperationTests';
import { testTBridgeDeposit } from '../../../common/depositTBridgeTests';
import {
  deployCommitmentPoolContracts,
  deployDependContracts,
  deployTBridgeContracts,
  deployTbridgeProxyContracts,
  loadFixture,
} from '../../../util/common';

// @ts-ignore
import {
  DestinationChainID,
  MaxAmount,
  MinAmount,
  MinBridgeFee,
  MinExecutorFee,
  MinRollupFee,
} from '../../../util/constants';

describe('Test Mystiko tbridge', () => {
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

    const tbridge = await deployTbridgeProxyContracts(accounts);

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

    const local = await deployTBridgeContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      tbridge,
      poolLocal.poolMain,
      poolLocal.poolERC20,
      {},
    );

    const remote = await deployTBridgeContracts(
      accounts,
      hasher3.address,
      testToken.address,
      sanctionList.address,
      tbridge,
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
      tbridge,
      sanctionList,
    };
  }

  let accounts: Wallet[];
  let testToken: TestToken;
  let sanctionList: DummySanctionsList;
  let tbridgeProxy: MystikoTBridgeProxy;
  let localPoolMain: CommitmentPoolMain;
  let remotePoolMain: CommitmentPoolMain;
  let localPoolERC20: CommitmentPoolERC20;
  let remotePoolERC20: CommitmentPoolERC20;
  let localERC20: MystikoV2TBridgeERC20;
  let localMain: MystikoV2TBridgeMain;
  let remoteERC20: MystikoV2TBridgeERC20;
  let remoteMain: MystikoV2TBridgeMain;
  let protocol: MystikoProtocolV2;

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
    tbridgeProxy = r.tbridge;
  });

  it('test constructor', async () => {
    await localMain.setPeerContract(DestinationChainID, '', remoteMain.address);
    testBridgeConstructor(
      'MystikoV2TBridgeMain',
      localMain,
      localPoolMain,
      MinAmount,
      MaxAmount,
      MinBridgeFee,
      MinExecutorFee,
      MinRollupFee,
    );

    await localERC20.setPeerContract(DestinationChainID, '', remoteERC20.address);
    testBridgeConstructor(
      'MystikoV2TBridgeERC20',
      localERC20,
      localPoolERC20,
      MinAmount,
      MaxAmount,
      MinBridgeFee,
      MinExecutorFee,
      MinRollupFee,
    );
  });

  it('test admin operation', () => {
    testBridgeAdminOperations('MystikoV2TBridgeMain', localMain, accounts, {});
    testBridgeAdminOperations('MystikoV2TBridgeERC20', localERC20, accounts, {});
    testTBridgeProxyAdminOperations('MystikoTBridgeProxy', tbridgeProxy, accounts);
  });

  it('test bridge main to main deposit', async () => {
    const depositAmount = toDecimals(10);
    const cmInfo = await constructCommitment(protocol, 21, depositAmount.toString());

    await testTBridgeDeposit(
      'MystikoV2TBridgeMain',
      protocol,
      localMain,
      localPoolMain,
      remoteMain,
      remotePoolMain,
      sanctionList,
      tbridgeProxy,
      testToken,
      accounts,
      depositAmount.toString(),
      true,
      true,
      cmInfo,
    );
  });
  //
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

    await testTBridgeDeposit(
      'MystikoV2TBridgeERC20',
      protocol,
      localERC20,
      localPoolERC20,
      remoteERC20,
      remotePoolERC20,
      sanctionList,
      tbridgeProxy,
      testToken,
      accounts,
      depositAmount.toString(),
      false,
      false,
      cmInfo,
    );
  });
});
