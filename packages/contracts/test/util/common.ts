import { Fixture } from 'ethereum-waffle/dist/esm';
import { Artifacts } from 'hardhat/internal/artifacts';
import { Artifact } from 'hardhat/types';
import { ethers, waffle } from 'hardhat';
import BN from 'bn.js';
import { parseUnits } from '@ethersproject/units';
import { Wallet } from '@ethersproject/wallet';
import { toBN } from '@mystikonetwork/utils';
import {
  Hasher3,
  Hasher3__factory,
  TestToken,
  TestToken__factory,
  Rollup1Verifier__factory,
  Rollup1Verifier,
  Rollup4Verifier__factory,
  Rollup4Verifier,
  Rollup16Verifier__factory,
  Rollup16Verifier,
  Transaction1x0Verifier__factory,
  Transaction1x0Verifier,
  Transaction1x1Verifier__factory,
  Transaction1x1Verifier,
  Transaction1x2Verifier__factory,
  Transaction1x2Verifier,
  Transaction2x0Verifier__factory,
  Transaction2x0Verifier,
  Transaction2x1Verifier__factory,
  Transaction2x1Verifier,
  Transaction2x2Verifier__factory,
  Transaction2x2Verifier,
  MystikoV2WithLoopERC20__factory,
  MystikoV2WithLoopERC20,
  MystikoV2WithLoopMain__factory,
  MystikoV2WithLoopMain,
  MystikoV2WithTBridgeMain__factory,
  MystikoTBridgeProxy__factory,
  CommitmentPoolMain,
  CommitmentPoolMain__factory,
  CommitmentPoolERC20,
  CommitmentPoolERC20__factory,
  MystikoTBridgeProxy,
  DummySanctionsList,
  DummySanctionsList__factory,
  MystikoV2WithTBridgeERC20__factory,
} from '@mystikonetwork/contracts-abi';
import {
  MerkleTreeHeight,
  RootHistoryLength,
  MinBridgeFee,
  MinExecutorFee,
  MinRollupFee,
  UserPrivKeys,
  DefaultTokenAmount,
  MinAmount,
  BridgeAccountIndex,
} from './constants';

// Workaround for https://github.com/nomiclabs/hardhat/issues/849
// TODO: Remove once fixed upstream.
export function loadFixture<T>(fixture: Fixture<T>): Promise<T> {
  return waffle.createFixtureLoader(waffle.provider.getWallets(), waffle.provider)(fixture);
}

interface CommitmentPoolDeploymentInfo {
  poolMain: CommitmentPoolMain;
  poolERC20: CommitmentPoolERC20;
}

interface CoreLoopDeploymentInfo {
  coreMain: MystikoV2WithLoopMain;
  coreERC20: MystikoV2WithLoopERC20;
}

interface CoreBridgeDeploymentInfo {
  coreMain: any;
  coreERC20: any;
}

interface DependDeploymentInfo {
  testToken: TestToken;
  hasher3: Hasher3;
  transaction1x0Verifier: Transaction1x0Verifier;
  transaction1x1Verifier: Transaction1x1Verifier;
  transaction1x2Verifier: Transaction1x2Verifier;
  transaction2x0Verifier: Transaction2x0Verifier;
  transaction2x1Verifier: Transaction2x1Verifier;
  transaction2x2Verifier: Transaction2x2Verifier;
  rollup1: Rollup1Verifier;
  rollup4: Rollup4Verifier;
  rollup16: Rollup16Verifier;
  tbridge: MystikoTBridgeProxy;
  sanctionList: DummySanctionsList;
}

export function getArtifact(contract: string): Promise<Artifact> {
  const artifactsPath: string = './artifactsExternal';
  // const artifactsPath: string = "./artifacts";
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export async function deployCommitmentPoolContracts(
  accounts: Wallet[],
  tokenAddress: string,
  sanctionListAddress: string,
  { treeHeight = MerkleTreeHeight, rootHistoryLength = RootHistoryLength, minRollupFee = MinRollupFee },
): Promise<CommitmentPoolDeploymentInfo> {
  const poolMainFactory = (await ethers.getContractFactory(
    'CommitmentPoolMain',
  )) as CommitmentPoolMain__factory;
  const poolMain = await poolMainFactory.connect(accounts[0]).deploy(treeHeight, rootHistoryLength);
  await poolMain.deployed();
  await poolMain.setMinRollupFee(minRollupFee.toString());
  await poolMain.updateSanctionContractAddress(sanctionListAddress);

  const poolERC20Factory = (await ethers.getContractFactory(
    'CommitmentPoolERC20',
  )) as CommitmentPoolERC20__factory;
  const poolERC20 = await poolERC20Factory
    .connect(accounts[0])
    .deploy(treeHeight, rootHistoryLength, tokenAddress);
  await poolERC20.deployed();
  await poolERC20.setMinRollupFee(minRollupFee.toString());
  await poolERC20.updateSanctionContractAddress(sanctionListAddress);

  return { poolMain, poolERC20 };
}

export async function deployLoopContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  sanctionListAddress: string,
  poolMain: CommitmentPoolMain,
  poolERC20: CommitmentPoolERC20,
  { minAmount = MinAmount },
): Promise<CoreLoopDeploymentInfo> {
  const loopMainFactory = (await ethers.getContractFactory(
    'MystikoV2WithLoopMain',
  )) as MystikoV2WithLoopMain__factory;
  const coreMain = await loopMainFactory.connect(accounts[0]).deploy(hasher3Address);
  await coreMain.deployed();
  await coreMain.setMinAmount(minAmount);
  await coreMain.setAssociatedCommitmentPool(poolMain.address);
  await coreMain.updateSanctionContractAddress(sanctionListAddress);
  await poolMain.addEnqueueWhitelist(coreMain.address);

  const loopERC20Factory = (await ethers.getContractFactory(
    'MystikoV2WithLoopERC20',
  )) as MystikoV2WithLoopERC20__factory;
  const coreERC20 = await loopERC20Factory.connect(accounts[0]).deploy(hasher3Address, tokenAddress);
  await coreERC20.deployed();
  await coreERC20.setMinAmount(minAmount);
  await coreERC20.setAssociatedCommitmentPool(poolERC20.address);
  await coreERC20.updateSanctionContractAddress(sanctionListAddress);
  await poolERC20.addEnqueueWhitelist(coreERC20.address);

  return { coreMain, coreERC20 };
}

export async function deployTBridgeContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  sanctionListAddress: string,
  tbridge: MystikoTBridgeProxy,
  poolMain: CommitmentPoolMain,
  poolERC20: CommitmentPoolERC20,
  {
    minAmount = MinAmount,
    minBridgeFee = MinBridgeFee,
    minExecutorFee = MinExecutorFee,
    minRollupFee = MinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const tBridgeMainFactory = (await ethers.getContractFactory(
    'MystikoV2WithTBridgeMain',
  )) as MystikoV2WithTBridgeMain__factory;

  const coreMain = await tBridgeMainFactory.connect(accounts[0]).deploy(hasher3Address);
  await coreMain.deployed();
  await coreMain.setAssociatedCommitmentPool(poolMain.address);
  await coreMain.setBridgeProxyAddress(tbridge.address);
  await coreMain.setMinAmount(minAmount);
  await coreMain.setMinBridgeFee(minBridgeFee);
  await coreMain.setMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinRollupFee(minRollupFee);
  await coreMain.updateSanctionContractAddress(sanctionListAddress);
  await poolMain.addEnqueueWhitelist(coreMain.address);
  await tbridge.addRegisterWhitelist(coreMain.address);

  const tBridgeERC20Factory = (await ethers.getContractFactory(
    'MystikoV2WithTBridgeERC20',
  )) as MystikoV2WithTBridgeERC20__factory;

  const coreERC20 = await tBridgeERC20Factory.connect(accounts[0]).deploy(hasher3Address, tokenAddress);
  await coreERC20.deployed();
  await coreERC20.setAssociatedCommitmentPool(poolERC20.address);
  await coreERC20.setBridgeProxyAddress(tbridge.address);
  await coreERC20.setMinAmount(minAmount);
  await coreERC20.setMinBridgeFee(minBridgeFee);
  await coreERC20.setMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinRollupFee(minRollupFee);
  await coreERC20.updateSanctionContractAddress(sanctionListAddress);
  await poolERC20.addEnqueueWhitelist(coreERC20.address);
  await tbridge.addRegisterWhitelist(coreERC20.address);

  return { coreMain, coreERC20 };
}

export async function deployDependContracts(accounts: Wallet[]): Promise<DependDeploymentInfo> {
  const testTokenFactory = (await ethers.getContractFactory('TestToken')) as TestToken__factory;
  const testToken = await testTokenFactory.connect(accounts[0]).deploy('Mystiko Test Token', 'MTT', 18);
  await testToken.deployed();

  for (let i = 0; i < accounts.length; i += 1) {
    await testToken.transfer(accounts[i].address, DefaultTokenAmount);
  }

  const hasher3Artifact = await getArtifact('Hasher3');
  const hasher3Factory = (await ethers.getContractFactoryFromArtifact(hasher3Artifact)) as Hasher3__factory;
  const hasher3 = await hasher3Factory.deploy();
  await hasher3.deployed();

  const transaction1x0VerifierFactory = (await ethers.getContractFactory(
    'Transaction1x0Verifier',
  )) as Transaction1x0Verifier__factory;
  const transaction1x0Verifier = await transaction1x0VerifierFactory.connect(accounts[0]).deploy();
  await transaction1x0Verifier.deployed();

  const transaction1x1VerifierFactory = (await ethers.getContractFactory(
    'Transaction1x1Verifier',
  )) as Transaction1x1Verifier__factory;
  const transaction1x1Verifier = await transaction1x1VerifierFactory.connect(accounts[0]).deploy();
  await transaction1x1Verifier.deployed();

  const transaction1x2VerifierFactory = (await ethers.getContractFactory(
    'Transaction1x2Verifier',
  )) as Transaction1x2Verifier__factory;
  const transaction1x2Verifier = await transaction1x2VerifierFactory.connect(accounts[0]).deploy();
  await transaction1x2Verifier.deployed();

  const transaction2x0VerifierFactory = (await ethers.getContractFactory(
    'Transaction2x0Verifier',
  )) as Transaction2x0Verifier__factory;
  const transaction2x0Verifier = await transaction2x0VerifierFactory.connect(accounts[0]).deploy();
  await transaction2x0Verifier.deployed();

  const transaction2x1VerifierFactory = (await ethers.getContractFactory(
    'Transaction2x1Verifier',
  )) as Transaction2x1Verifier__factory;
  const transaction2x1Verifier = await transaction2x1VerifierFactory.connect(accounts[0]).deploy();
  await transaction2x1Verifier.deployed();

  const transaction2x2VerifierFactory = (await ethers.getContractFactory(
    'Transaction2x2Verifier',
  )) as Transaction2x2Verifier__factory;
  const transaction2x2Verifier = await transaction2x2VerifierFactory.connect(accounts[0]).deploy();
  await transaction2x2Verifier.deployed();

  const rollup1Factory = (await ethers.getContractFactory('Rollup1Verifier')) as Rollup1Verifier__factory;
  const rollup1 = await rollup1Factory.connect(accounts[0]).deploy();
  await rollup1.deployed();

  const rollup4Factory = (await ethers.getContractFactory('Rollup4Verifier')) as Rollup4Verifier__factory;
  const rollup4 = await rollup4Factory.connect(accounts[0]).deploy();
  await rollup4.deployed();

  const rollup16Factory = (await ethers.getContractFactory('Rollup16Verifier')) as Rollup16Verifier__factory;
  const rollup16 = await rollup16Factory.connect(accounts[0]).deploy();
  await rollup16.deployed();

  const proxyFactory = (await ethers.getContractFactory(
    'MystikoTBridgeProxy',
  )) as MystikoTBridgeProxy__factory;
  const tbridge = await proxyFactory.connect(accounts[0]).deploy();
  await tbridge.deployed();
  await tbridge.addExecutorWhitelist(accounts[BridgeAccountIndex].address);

  const sanctionListFactory = (await ethers.getContractFactory(
    'DummySanctionsList',
  )) as DummySanctionsList__factory;
  const sanctionList = await sanctionListFactory.connect(accounts[0]).deploy();
  await sanctionList.deployed();

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
    tbridge,
    sanctionList,
  };
}

export async function getAccounts(admin: Wallet, num: number): Promise<Wallet[]> {
  const accounts: Wallet[] = [];
  const accountPromise = [];
  for (let i = 0; i < num; i += 1) {
    const wallet = new ethers.Wallet(UserPrivKeys[i]).connect(ethers.provider);
    // @ts-ignore
    accounts.push(wallet);
    const trx = admin.sendTransaction({
      to: accounts[i].address,
      value: parseUnits('10'),
    });
    accountPromise.push(trx);
    // for (let j = 0; j < assets.length; j++) {
    //   await assets[j].transfer(accounts[i].address, parseUnits('1000'));
    // }
  }

  await Promise.all(accountPromise);
  accounts.sort((a, b) => (a.address.toLowerCase() > b.address.toLowerCase() ? 1 : -1));
  return accounts;
}

export function getBalance(address: string, testToken: TestToken | undefined): Promise<BN> {
  if (!testToken) {
    return waffle.provider.getBalance(address).then((r: any) => toBN(r.toString()));
  }
  return testToken.balanceOf(address).then((r: any) => toBN(r.toString()));
}
