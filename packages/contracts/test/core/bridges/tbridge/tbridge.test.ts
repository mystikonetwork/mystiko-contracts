import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  CommitmentPoolMain,
  MockSanctionList,
  MystikoTBridgeProxy,
  MystikoV2TBridgeERC20,
  MystikoV2TBridgeMain,
  MockToken,
} from '@mystikonetwork/contracts-abi';
import { MystikoProtocolV2, ProtocolFactoryV2 } from '@mystikonetwork/protocol';
import { toDecimals } from '@mystikonetwork/utils';
import { ZokratesNodeProverFactory } from '@mystikonetwork/zkp-node';
import { waffle } from 'hardhat';
import { expect } from 'chai';
import { MystikoSettings } from '@mystikonetwork/contracts-abi-settings';
import { constructCommitment, testBridgeConstructor } from '../../../common';
import { testTBridgeDeposit } from '../../../common/depositTBridgeTests';
import {
  associateContract,
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
  PeerMinExecutorFee,
  PeerMinRollupFee,
} from '../../../util/constants';

function testTBridgeProxyAdminOperations(
  contractName: string,
  tbridgeProxy: MystikoTBridgeProxy,
  accounts: any[],
) {
  describe(`Test ${contractName} admin operations`, () => {
    before(async () => {});

    it('should changeOperator correctly', async () => {
      await expect(tbridgeProxy.connect(accounts[1]).changeOperator(accounts[1].address)).to.be.revertedWith(
        'OnlyOperator()',
      );
    });

    // todo check executor/register/withdraw
    it('should remove executor whitelist correctly', async () => {
      await tbridgeProxy.removeExecutorWhitelist(accounts[1].address);
    });

    it('should remove register whitelist correctly', async () => {
      await tbridgeProxy.removeRegisterWhitelist(accounts[1].address);
    });

    it('should remove executor whitelist correctly', async () => {
      await tbridgeProxy.withdraw(accounts[1].address);
    });
  });
}

describe('Test Mystiko tbridge', () => {
  async function fixture(accounts: Wallet[]) {
    const { mockToken, hasher3, mockSanctionList, settings } = await deployDependContracts(accounts);

    const tbridgeProxy = await deployTbridgeProxyContracts(accounts);

    const poolLocal = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});
    const poolRemote = await deployCommitmentPoolContracts(accounts, mockToken.address, settings.address, {});

    const local = await deployTBridgeContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      tbridgeProxy,
      settings.address,
      {},
    );

    const remote = await deployTBridgeContracts(
      accounts,
      hasher3.address,
      mockToken.address,
      tbridgeProxy,
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
      tbridgeProxy,
      mockSanctionList,
      settings,
    };
  }

  let accounts: Wallet[];
  let mockToken: MockToken;
  let mockSanctionList: MockSanctionList;
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
    tbridgeProxy = r.tbridgeProxy;
    settings = r.settings;
  });

  it('test constructor', () => {
    testBridgeConstructor(
      'MystikoV2TBridgeMain',
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
      'MystikoV2TBridgeERC20',
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

  it('test admin operation', () => {
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
      mockSanctionList,
      tbridgeProxy,
      mockToken,
      settings,
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

    await testTBridgeDeposit(
      'MystikoV2TBridgeERC20',
      protocol,
      localERC20,
      localPoolERC20,
      remoteERC20,
      remotePoolERC20,
      mockSanctionList,
      tbridgeProxy,
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
