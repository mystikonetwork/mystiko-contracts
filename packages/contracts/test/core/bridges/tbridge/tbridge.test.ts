import { Wallet } from '@ethersproject/wallet';
import { waffle } from 'hardhat';
import { toDecimals } from '@mystikonetwork/utils';
import {
  MystikoTBridgeProxy,
  MystikoV2WithTBridgeERC20,
  MystikoV2WithTBridgeMain,
  TestToken,
  CommitmentPoolMain,
  DummySanctionsList,
} from '@mystikonetwork/contracts-abi';
import { ZokratesRuntime, MystikoProtocolV2, ZokratesCliRuntime } from '@mystikonetwork/protocol';
import {
  deployDependContracts,
  loadFixture,
  deployTBridgeContracts,
  deployCommitmentPoolContracts,
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
import { testBridgeDeposit } from '../../../common/bridgeDepositTests';

const { initialize } = require('zokrates-js/node');

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
      tbridge,
      sanctionList,
    } = await deployDependContracts(accounts);
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
  // let localPoolERC20: CommitmentPoolERC20;
  let localERC20: MystikoV2WithTBridgeERC20;
  let localMain: MystikoV2WithTBridgeMain;
  let remoteERC20: MystikoV2WithTBridgeERC20;
  let remoteMain: MystikoV2WithTBridgeMain;
  let zokratesRuntime: ZokratesRuntime;
  let protocol: MystikoProtocolV2;

  beforeEach(async () => {
    accounts = waffle.provider.getWallets();
    const zokrates = await initialize();
    zokratesRuntime = new ZokratesCliRuntime(zokrates);
    protocol = new MystikoProtocolV2(zokratesRuntime);

    const r = await loadFixture(fixture);
    testToken = r.testToken;
    localPoolMain = r.poolLocal.poolMain;
    // localPoolERC20 = r.poolLocal.poolERC20;
    remotePoolMain = r.poolRemote.poolMain;
    localMain = r.local.coreMain;
    localERC20 = r.local.coreERC20;
    remoteMain = r.remote.coreMain;
    remoteERC20 = r.remote.coreERC20;
    sanctionList = r.sanctionList;
    tbridgeProxy = r.tbridge;
  });

  it('test constructor', async () => {
    await localMain.setPeerContract(DestinationChainID, remoteMain.address);
    testBridgeConstructor(
      'MystikoV2WithTBridgeMain',
      localMain,
      MinAmount,
      MinBridgeFee,
      MinExecutorFee,
      MinRollupFee,
    );

    await localERC20.setPeerContract(DestinationChainID, remoteERC20.address);
    testBridgeConstructor(
      'MystikoV2WithTBridgeERC20',
      localERC20,
      MinAmount,
      MinBridgeFee,
      MinExecutorFee,
      MinRollupFee,
    );
  });

  it('test admin operation', () => {
    testBridgeAdminOperations('MystikoV2WithTBridgeMain', localMain, accounts);
    testBridgeAdminOperations('MystikoV2WithTBridgeERC20', localERC20, accounts);
  });

  it('test bridge main to main deposit', async () => {
    const depositAmount = toDecimals(10);
    const cmInfo = await constructCommitment(protocol, 21, depositAmount.toString());

    await testBridgeDeposit(
      'MystikoV2WithTBridgeMain',
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
  //     'MystikoV2WithTBridgeMain',
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
  //     'MystikoV2WithTBridgeERC20',
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
  // it('test bridge erc20 to erc20 deposit', async () => {
  //   const depositAmount = toDecimals(10);
  //   const cmInfo = await constructCommitment(protocol, 21, depositAmount.toString());
  //
  //   await testBridgeDeposit(
  //     'MystikoV2WithTBridgeERC20',
  //     protocol,
  //     localERC20,
  //     remoteERC20,
  //     proxy,
  //     testToken,
  //     accounts,
  //     depositAmount.toString(),
  //     false,
  //     false,
  //     cmInfo,
  //   );
  // });
});
