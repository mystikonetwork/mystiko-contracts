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
  MystikoV2LoopERC20__factory,
  MystikoV2LoopERC20,
  MystikoV2LoopMain__factory,
  MystikoV2LoopMain,
  MystikoV2TBridgeMain__factory,
  MystikoTBridgeProxy__factory,
  CommitmentPoolMain,
  CommitmentPoolMain__factory,
  CommitmentPoolERC20,
  CommitmentPoolERC20__factory,
  MystikoTBridgeProxy,
  DummySanctionsList,
  DummySanctionsList__factory,
  MystikoV2TBridgeERC20__factory,
  DummyCelerMessageBus,
  MystikoV2CelerMain__factory,
  MystikoV2CelerERC20__factory,
  DummyCelerMessageBus__factory,
  DummyLZEndpoint__factory,
  MystikoV2LayerZeroMain__factory,
  MystikoV2LayerZeroERC20__factory,
  DummyLZEndpoint,
  DummyAxelarGateway,
  DummyAxelarGateway__factory,
  MystikoV2AxelarMain__factory,
  MystikoV2AxelarERC20__factory,
  DummyAxelarGasService,
  DummyAxelarGasService__factory,
} from '@mystikonetwork/contracts-abi';
import {
  MerkleTreeHeight,
  MinBridgeFee,
  MinExecutorFee,
  MinRollupFee,
  UserPrivKeys,
  DefaultTokenAmount,
  MinAmount,
  BridgeAccountIndex,
  LzChainID,
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
  coreMain: MystikoV2LoopMain;
  coreERC20: MystikoV2LoopERC20;
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
  { treeHeight = MerkleTreeHeight, minRollupFee = MinRollupFee },
): Promise<CommitmentPoolDeploymentInfo> {
  const poolMainFactory = (await ethers.getContractFactory(
    'CommitmentPoolMain',
  )) as CommitmentPoolMain__factory;
  const poolMain = await poolMainFactory.connect(accounts[0]).deploy(treeHeight);
  await poolMain.deployed();
  await poolMain.setMinRollupFee(minRollupFee.toString());
  await poolMain.updateSanctionsListAddress(sanctionListAddress);

  const poolERC20Factory = (await ethers.getContractFactory(
    'CommitmentPoolERC20',
  )) as CommitmentPoolERC20__factory;
  const poolERC20 = await poolERC20Factory.connect(accounts[0]).deploy(treeHeight, tokenAddress);
  await poolERC20.deployed();
  await poolERC20.setMinRollupFee(minRollupFee.toString());
  await poolERC20.updateSanctionsListAddress(sanctionListAddress);

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
    'MystikoV2LoopMain',
  )) as MystikoV2LoopMain__factory;
  const coreMain = await loopMainFactory.connect(accounts[0]).deploy(hasher3Address);
  await coreMain.deployed();
  await coreMain.setMinAmount(minAmount);
  await coreMain.setAssociatedCommitmentPool(poolMain.address);
  await coreMain.updateSanctionsListAddress(sanctionListAddress);
  await poolMain.addEnqueueWhitelist(coreMain.address);

  const loopERC20Factory = (await ethers.getContractFactory(
    'MystikoV2LoopERC20',
  )) as MystikoV2LoopERC20__factory;
  const coreERC20 = await loopERC20Factory.connect(accounts[0]).deploy(hasher3Address, tokenAddress);
  await coreERC20.deployed();
  await coreERC20.setMinAmount(minAmount);
  await coreERC20.setAssociatedCommitmentPool(poolERC20.address);
  await coreERC20.updateSanctionsListAddress(sanctionListAddress);
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
    'MystikoV2TBridgeMain',
  )) as MystikoV2TBridgeMain__factory;

  const coreMain = await tBridgeMainFactory.connect(accounts[0]).deploy(hasher3Address);
  await coreMain.deployed();
  await coreMain.setAssociatedCommitmentPool(poolMain.address);
  await coreMain.setBridgeProxyAddress(tbridge.address);
  await coreMain.setMinAmount(minAmount);
  await coreMain.setMinBridgeFee(minBridgeFee);
  await coreMain.setMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinRollupFee(minRollupFee);
  await coreMain.updateSanctionsListAddress(sanctionListAddress);
  await poolMain.addEnqueueWhitelist(coreMain.address);
  await tbridge.addRegisterWhitelist(coreMain.address);

  const tBridgeERC20Factory = (await ethers.getContractFactory(
    'MystikoV2TBridgeERC20',
  )) as MystikoV2TBridgeERC20__factory;

  const coreERC20 = await tBridgeERC20Factory.connect(accounts[0]).deploy(hasher3Address, tokenAddress);
  await coreERC20.deployed();
  await coreERC20.setAssociatedCommitmentPool(poolERC20.address);
  await coreERC20.setBridgeProxyAddress(tbridge.address);
  await coreERC20.setMinAmount(minAmount);
  await coreERC20.setMinBridgeFee(minBridgeFee);
  await coreERC20.setMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinRollupFee(minRollupFee);
  await coreERC20.updateSanctionsListAddress(sanctionListAddress);
  await poolERC20.addEnqueueWhitelist(coreERC20.address);
  await tbridge.addRegisterWhitelist(coreERC20.address);

  return { coreMain, coreERC20 };
}

export async function deployCelerContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  sanctionListAddress: string,
  dummyCeler: DummyCelerMessageBus,
  poolMain: CommitmentPoolMain,
  poolERC20: CommitmentPoolERC20,
  {
    minAmount = MinAmount,
    minBridgeFee = MinBridgeFee,
    minExecutorFee = MinExecutorFee,
    minRollupFee = MinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const celerMainFactory = (await ethers.getContractFactory(
    'MystikoV2CelerMain',
  )) as MystikoV2CelerMain__factory;

  const coreMain = await celerMainFactory.connect(accounts[0]).deploy(hasher3Address);
  await coreMain.deployed();
  await coreMain.setAssociatedCommitmentPool(poolMain.address);
  await coreMain.setBridgeProxyAddress(dummyCeler.address);
  await coreMain.setMinAmount(minAmount);
  await coreMain.setMinBridgeFee(minBridgeFee);
  await coreMain.setMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinRollupFee(minRollupFee);
  await coreMain.updateSanctionsListAddress(sanctionListAddress);
  await poolMain.addEnqueueWhitelist(coreMain.address);

  const celerERC20Factory = (await ethers.getContractFactory(
    'MystikoV2CelerERC20',
  )) as MystikoV2CelerERC20__factory;

  const coreERC20 = await celerERC20Factory.connect(accounts[0]).deploy(hasher3Address, tokenAddress);
  await coreERC20.deployed();
  await coreERC20.setAssociatedCommitmentPool(poolERC20.address);
  await coreERC20.setBridgeProxyAddress(dummyCeler.address);
  await coreERC20.setMinAmount(minAmount);
  await coreERC20.setMinBridgeFee(minBridgeFee);
  await coreERC20.setMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinRollupFee(minRollupFee);
  await coreERC20.updateSanctionsListAddress(sanctionListAddress);
  await poolERC20.addEnqueueWhitelist(coreERC20.address);

  return { coreMain, coreERC20 };
}

export async function deployLayerZeroContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  sanctionListAddress: string,
  dummyLZEndpoint: DummyLZEndpoint,
  poolMain: CommitmentPoolMain,
  poolERC20: CommitmentPoolERC20,
  {
    minAmount = MinAmount,
    minBridgeFee = MinBridgeFee,
    minExecutorFee = MinExecutorFee,
    minRollupFee = MinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const lzMainFactory = (await ethers.getContractFactory(
    'MystikoV2LayerZeroMain',
  )) as MystikoV2LayerZeroMain__factory;

  const coreMain = await lzMainFactory.connect(accounts[0]).deploy(hasher3Address);
  await coreMain.deployed();
  await coreMain.setAssociatedCommitmentPool(poolMain.address);
  await coreMain.setMinAmount(minAmount);
  await coreMain.setMinBridgeFee(minBridgeFee);
  await coreMain.setMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinRollupFee(minRollupFee);
  await coreMain.updateSanctionsListAddress(sanctionListAddress);
  await coreMain.setEndpoint(LzChainID, dummyLZEndpoint.address);
  await poolMain.addEnqueueWhitelist(coreMain.address);

  const lzERC20Factory = (await ethers.getContractFactory(
    'MystikoV2LayerZeroERC20',
  )) as MystikoV2LayerZeroERC20__factory;

  const coreERC20 = await lzERC20Factory.connect(accounts[0]).deploy(hasher3Address, tokenAddress);
  await coreERC20.deployed();
  await coreERC20.setAssociatedCommitmentPool(poolERC20.address);
  await coreERC20.setMinAmount(minAmount);
  await coreERC20.setMinBridgeFee(minBridgeFee);
  await coreERC20.setMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinRollupFee(minRollupFee);
  await coreERC20.updateSanctionsListAddress(sanctionListAddress);
  await coreERC20.setEndpoint(LzChainID, dummyLZEndpoint.address);
  await poolERC20.addEnqueueWhitelist(coreERC20.address);

  return { coreMain, coreERC20 };
}

export async function deployAxelarContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  sanctionListAddress: string,
  dummyAxelarGateway: DummyAxelarGateway,
  dummyAxelarGasService: DummyAxelarGasService,
  poolMain: CommitmentPoolMain,
  poolERC20: CommitmentPoolERC20,
  {
    minAmount = MinAmount,
    minBridgeFee = MinBridgeFee,
    minExecutorFee = MinExecutorFee,
    minRollupFee = MinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const lzMainFactory = (await ethers.getContractFactory(
    'MystikoV2AxelarMain',
  )) as MystikoV2AxelarMain__factory;

  const coreMain = await lzMainFactory.connect(accounts[0]).deploy(hasher3Address);
  await coreMain.deployed();
  await coreMain.setAssociatedCommitmentPool(poolMain.address);
  await coreMain.setMinAmount(minAmount);
  await coreMain.setMinBridgeFee(minBridgeFee);
  await coreMain.setMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinExecutorFee(minExecutorFee);
  await coreMain.setPeerMinRollupFee(minRollupFee);
  await coreMain.updateSanctionsListAddress(sanctionListAddress);
  await coreMain.setBridgeProxyAddress(dummyAxelarGateway.address);
  await coreMain.setAxelarGasReceiver(dummyAxelarGasService.address);
  await poolMain.addEnqueueWhitelist(coreMain.address);

  const lzERC20Factory = (await ethers.getContractFactory(
    'MystikoV2AxelarERC20',
  )) as MystikoV2AxelarERC20__factory;

  const coreERC20 = await lzERC20Factory.connect(accounts[0]).deploy(hasher3Address, tokenAddress);
  await coreERC20.deployed();
  await coreERC20.setAssociatedCommitmentPool(poolERC20.address);
  await coreERC20.setMinAmount(minAmount);
  await coreERC20.setMinBridgeFee(minBridgeFee);
  await coreERC20.setMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinExecutorFee(minExecutorFee);
  await coreERC20.setPeerMinRollupFee(minRollupFee);
  await coreERC20.updateSanctionsListAddress(sanctionListAddress);
  await coreERC20.setBridgeProxyAddress(dummyAxelarGateway.address);
  await coreERC20.setAxelarGasReceiver(dummyAxelarGasService.address);
  await poolERC20.addEnqueueWhitelist(coreERC20.address);

  return { coreMain, coreERC20 };
}

export async function deployTbridgeProxyContracts(accounts: Wallet[]): Promise<MystikoTBridgeProxy> {
  const proxyFactory = (await ethers.getContractFactory(
    'MystikoTBridgeProxy',
  )) as MystikoTBridgeProxy__factory;
  const tbridge = await proxyFactory.connect(accounts[0]).deploy();
  await tbridge.deployed();
  await tbridge.addExecutorWhitelist(accounts[BridgeAccountIndex].address);
  return tbridge;
}

export async function deployDummyCelerContracts(accounts: Wallet[]): Promise<DummyCelerMessageBus> {
  const dummyCelerFactory = (await ethers.getContractFactory(
    'DummyCelerMessageBus',
  )) as DummyCelerMessageBus__factory;
  const dummyCeler = await dummyCelerFactory.connect(accounts[0]).deploy();
  await dummyCeler.deployed();
  return dummyCeler;
}

export async function deployDummyLayerZeroContracts(accounts: Wallet[]): Promise<DummyLZEndpoint> {
  const dummyLayerZeroFactory = (await ethers.getContractFactory(
    'DummyLZEndpoint',
  )) as DummyLZEndpoint__factory;
  const dummyLZ = await dummyLayerZeroFactory.connect(accounts[0]).deploy(LzChainID);
  await dummyLZ.deployed();
  return dummyLZ;
}

export async function deployDummyAxelarGateway(accounts: Wallet[]): Promise<DummyAxelarGateway> {
  const dummyAxelarFactory = (await ethers.getContractFactory(
    'DummyAxelarGateway',
  )) as DummyAxelarGateway__factory;
  const dummyAxelar = await dummyAxelarFactory.connect(accounts[0]).deploy();
  await dummyAxelar.deployed();
  return dummyAxelar;
}

export async function deployDummyAxelarGasService(accounts: Wallet[]): Promise<DummyAxelarGasService> {
  const dummyAxelarFactory = (await ethers.getContractFactory(
    'DummyAxelarGasService',
  )) as DummyAxelarGasService__factory;
  const dummyAxelar = await dummyAxelarFactory.connect(accounts[0]).deploy();
  await dummyAxelar.deployed();
  return dummyAxelar;
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
