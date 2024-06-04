import { parseUnits } from '@ethersproject/units';
import { Wallet } from '@ethersproject/wallet';
import {
  CommitmentPoolERC20,
  CommitmentPoolERC20__factory,
  CommitmentPoolMain,
  CommitmentPoolMain__factory,
  MockAxelarGasService,
  MockAxelarGasService__factory,
  MockAxelarGateway,
  MockAxelarGateway__factory,
  MockCelerMessageBus,
  MockCelerMessageBus__factory,
  MockLZEndpoint,
  MockLZEndpoint__factory,
  Hasher3,
  Hasher3__factory,
  MystikoTBridgeProxy,
  MystikoTBridgeProxy__factory,
  MystikoV2AxelarERC20__factory,
  MystikoV2AxelarMain__factory,
  MystikoV2CelerERC20__factory,
  MystikoV2CelerMain__factory,
  MystikoV2LayerZeroERC20__factory,
  MystikoV2LayerZeroMain__factory,
  MystikoV2LoopERC20,
  MystikoV2LoopERC20__factory,
  MystikoV2LoopMain,
  MystikoV2LoopMain__factory,
  MystikoV2TBridgeERC20__factory,
  MystikoV2TBridgeMain__factory,
  Rollup16Verifier__factory,
  Rollup1Verifier__factory,
  Rollup2Verifier__factory,
  Rollup4Verifier__factory,
  Rollup8Verifier__factory,
  Transaction1x0Verifier__factory,
  Transaction1x1Verifier__factory,
  Transaction1x2Verifier__factory,
  Transaction2x0Verifier__factory,
  Transaction2x1Verifier__factory,
  Transaction2x2Verifier__factory,
  MockDaoRegistry__factory,
  MockSanctionsList__factory,
  MockSanctionList,
  MockMystikoToken__factory,
  MockMystikoVoteToken__factory,
  MockMystikoVoteToken,
  MockMystikoToken,
} from '@mystikonetwork/contracts-abi';
import { MystikoCertificate, MystikoCertificate__factory } from '@mystikonetwork/contracts-abi-certificate';
import { MystikoRollerPool, MystikoRollerPool__factory } from '@mystikonetwork/contracts-abi-roller';
import { MystikoRelayerPool, MystikoRelayerPool__factory } from '@mystikonetwork/contracts-abi-relayer';
import { MystikoBridgeSettings, MystikoSettings__factory } from '@mystikonetwork/contracts-abi-settings';
import { toBN } from '@mystikonetwork/utils';
import BN from 'bn.js';
import { Fixture } from 'ethereum-waffle/dist/esm';
import { ethers, waffle } from 'hardhat';
import { Artifacts } from 'hardhat/internal/artifacts';
import { Artifact } from 'hardhat/types';
import {
  BridgeAccountIndex,
  DefaultTokenAmount,
  DestinationChainID,
  IssuerAddress,
  LzChainID,
  MaxAmount,
  MerkleTreeHeight,
  MinAmount,
  MinBridgeFee,
  MinRollupFee,
  PeerMinExecutorFee,
  PeerMinRollupFee,
  SourceChainID,
  UserPrivateKeys,
  ZeroAddress,
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
  settings: MystikoBridgeSettings;
  mockToken: MockMystikoToken;
  mockVoteToken: MockMystikoVoteToken;
  mockSanctionList: MockSanctionList;
  hasher3: Hasher3;
  rollerPool: MystikoRollerPool;
  relayerPool: MystikoRelayerPool;
  certificate: MystikoCertificate;
}

export function getArtifactExternal(contract: string): Promise<Artifact> {
  const artifactsPath: string = './artifactsExternal';
  // const artifactsPath: string = "./artifacts";
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getArtifactVerifier(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-verifier/artifacts';
  // const artifactsPath: string = "./artifacts";
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getArtifactCertificate(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-certificate/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getArtifactRoller(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-roller/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getArtifactRelayer(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-relayer/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getArtifactSettings(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-settings/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export async function deployCommitmentPoolContracts(
  accounts: Wallet[],
  tokenAddress: string,
  settings: string,
  { treeHeight = MerkleTreeHeight, minRollupFee = MinRollupFee },
): Promise<CommitmentPoolDeploymentInfo> {
  const poolMainFactory = (await ethers.getContractFactory(
    'CommitmentPoolMain',
  )) as CommitmentPoolMain__factory;
  const poolMain = await poolMainFactory.connect(accounts[0]).deploy(treeHeight, minRollupFee, settings);
  await poolMain.deployed();

  const poolERC20Factory = (await ethers.getContractFactory(
    'CommitmentPoolERC20',
  )) as CommitmentPoolERC20__factory;
  const poolERC20 = await poolERC20Factory
    .connect(accounts[0])
    .deploy(treeHeight, minRollupFee, tokenAddress, settings);

  await poolERC20.deployed();

  return { poolMain, poolERC20 };
}

export async function deployLoopContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  settings: string,
  { minAmount = MinAmount, maxAmount = MaxAmount },
): Promise<CoreLoopDeploymentInfo> {
  const localConfig = { minAmount, maxAmount };

  const loopMainFactory = (await ethers.getContractFactory(
    'MystikoV2LoopMain',
  )) as MystikoV2LoopMain__factory;
  const coreMain = await loopMainFactory.connect(accounts[0]).deploy(hasher3Address, settings, localConfig);
  await coreMain.deployed();

  const loopERC20Factory = (await ethers.getContractFactory(
    'MystikoV2LoopERC20',
  )) as MystikoV2LoopERC20__factory;
  const coreERC20 = await loopERC20Factory
    .connect(accounts[0])
    .deploy(hasher3Address, tokenAddress, settings, localConfig);
  await coreERC20.deployed();

  return { coreMain, coreERC20 };
}

export async function deployTBridgeContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  tbridgeProxy: MystikoTBridgeProxy,
  settings: string,
  {
    minAmount = MinAmount,
    maxAmount = MaxAmount,
    minBridgeFee = MinBridgeFee,
    peerMinExecutorFee = PeerMinExecutorFee,
    peerMinRollupFee = PeerMinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const localConfig = { minAmount, maxAmount, minBridgeFee };
  const peerConfig = { peerMinExecutorFee, peerMinRollupFee };

  const tBridgeMainFactory = (await ethers.getContractFactory(
    'MystikoV2TBridgeMain',
  )) as MystikoV2TBridgeMain__factory;
  const coreMain = await tBridgeMainFactory
    .connect(accounts[0])
    .deploy(hasher3Address, tbridgeProxy.address, settings, localConfig, peerConfig);
  await coreMain.deployed();
  await tbridgeProxy.addRegisterWhitelist(coreMain.address);

  const tBridgeERC20Factory = (await ethers.getContractFactory(
    'MystikoV2TBridgeERC20',
  )) as MystikoV2TBridgeERC20__factory;

  const coreERC20 = await tBridgeERC20Factory
    .connect(accounts[0])
    .deploy(hasher3Address, tokenAddress, tbridgeProxy.address, settings, localConfig, peerConfig);
  await coreERC20.deployed();
  await tbridgeProxy.addRegisterWhitelist(coreERC20.address);

  return { coreMain, coreERC20 };
}

export async function deployCelerContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  dummyCeler: MockCelerMessageBus,
  settings: string,
  {
    minAmount = MinAmount,
    maxAmount = MaxAmount,
    minBridgeFee = MinBridgeFee,
    peerMinExecutorFee = PeerMinExecutorFee,
    peerMinRollupFee = PeerMinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const localConfig = { minAmount, maxAmount, minBridgeFee };
  const peerConfig = { peerMinExecutorFee, peerMinRollupFee };

  const celerMainFactory = (await ethers.getContractFactory(
    'MystikoV2CelerMain',
  )) as MystikoV2CelerMain__factory;
  const coreMain = await celerMainFactory
    .connect(accounts[0])
    .deploy(hasher3Address, dummyCeler.address, settings, localConfig, peerConfig);
  await coreMain.deployed();

  const celerERC20Factory = (await ethers.getContractFactory(
    'MystikoV2CelerERC20',
  )) as MystikoV2CelerERC20__factory;

  const coreERC20 = await celerERC20Factory
    .connect(accounts[0])
    .deploy(hasher3Address, tokenAddress, dummyCeler.address, settings, localConfig, peerConfig);
  await coreERC20.deployed();

  return { coreMain, coreERC20 };
}

export async function deployLayerZeroContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  dummyLZEndpoint: MockLZEndpoint,
  settings: string,
  {
    minAmount = MinAmount,
    maxAmount = MaxAmount,
    minBridgeFee = MinBridgeFee,
    peerMinExecutorFee = PeerMinExecutorFee,
    peerMinRollupFee = PeerMinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const localConfig = { minAmount, maxAmount, minBridgeFee };
  const peerConfig = { peerMinExecutorFee, peerMinRollupFee };

  const lzMainFactory = (await ethers.getContractFactory(
    'MystikoV2LayerZeroMain',
  )) as MystikoV2LayerZeroMain__factory;

  const coreMain = await lzMainFactory
    .connect(accounts[0])
    .deploy(hasher3Address, dummyLZEndpoint.address, settings, localConfig, peerConfig);
  await coreMain.deployed();
  await coreMain.setEndpoint(LzChainID, dummyLZEndpoint.address);

  const lzERC20Factory = (await ethers.getContractFactory(
    'MystikoV2LayerZeroERC20',
  )) as MystikoV2LayerZeroERC20__factory;

  const coreERC20 = await lzERC20Factory
    .connect(accounts[0])
    .deploy(hasher3Address, tokenAddress, dummyLZEndpoint.address, settings, localConfig, peerConfig);
  await coreERC20.deployed();
  await coreERC20.setEndpoint(LzChainID, dummyLZEndpoint.address);

  return { coreMain, coreERC20 };
}

export async function deployAxelarContracts(
  accounts: Wallet[],
  hasher3Address: string,
  tokenAddress: string,
  settings: string,
  dummyAxelarGateway: MockAxelarGateway,
  dummyAxelarGasService: MockAxelarGasService,
  {
    minAmount = MinAmount,
    maxAmount = MaxAmount,
    minBridgeFee = MinBridgeFee,
    peerMinExecutorFee = PeerMinExecutorFee,
    peerMinRollupFee = PeerMinRollupFee,
  },
): Promise<CoreBridgeDeploymentInfo> {
  const localConfig = { minAmount, maxAmount, minBridgeFee };
  const peerConfig = { peerMinExecutorFee, peerMinRollupFee };

  const lzMainFactory = (await ethers.getContractFactory(
    'MystikoV2AxelarMain',
  )) as MystikoV2AxelarMain__factory;

  const coreMain = await lzMainFactory
    .connect(accounts[0])
    .deploy(
      hasher3Address,
      dummyAxelarGateway.address,
      settings,
      localConfig,
      peerConfig,
      dummyAxelarGasService.address,
    );
  await coreMain.deployed();

  const lzERC20Factory = (await ethers.getContractFactory(
    'MystikoV2AxelarERC20',
  )) as MystikoV2AxelarERC20__factory;

  const coreERC20 = await lzERC20Factory
    .connect(accounts[0])
    .deploy(
      hasher3Address,
      tokenAddress,
      dummyAxelarGateway.address,
      settings,
      localConfig,
      peerConfig,
      dummyAxelarGasService.address,
    );
  await coreERC20.deployed();

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

export async function deployMockCelerContracts(accounts: Wallet[]): Promise<MockCelerMessageBus> {
  const mockCelerFactory = (await ethers.getContractFactory(
    'MockCelerMessageBus',
  )) as MockCelerMessageBus__factory;
  const mockCeler = await mockCelerFactory.connect(accounts[0]).deploy();
  await mockCeler.deployed();
  return mockCeler;
}

export async function deployMockLayerZeroContracts(accounts: Wallet[]): Promise<MockLZEndpoint> {
  const mockLayerZeroFactory = (await ethers.getContractFactory('MockLZEndpoint')) as MockLZEndpoint__factory;
  const mockLZ = await mockLayerZeroFactory.connect(accounts[0]).deploy(LzChainID);
  await mockLZ.deployed();
  return mockLZ;
}

export async function deployMockAxelarGateway(accounts: Wallet[]): Promise<MockAxelarGateway> {
  const mockAxelarFactory = (await ethers.getContractFactory(
    'MockAxelarGateway',
  )) as MockAxelarGateway__factory;
  const mockAxelar = await mockAxelarFactory.connect(accounts[0]).deploy();
  await mockAxelar.deployed();
  return mockAxelar;
}

export async function deployMockAxelarGasService(accounts: Wallet[]): Promise<MockAxelarGasService> {
  const mockAxelarFactory = (await ethers.getContractFactory(
    'MockAxelarGasService',
  )) as MockAxelarGasService__factory;
  const mockAxelar = await mockAxelarFactory.connect(accounts[0]).deploy();
  await mockAxelar.deployed();
  return mockAxelar;
}

export async function deployDependContracts(accounts: Wallet[]): Promise<DependDeploymentInfo> {
  const mockTokenFactory = (await ethers.getContractFactory('MockMystikoToken')) as MockMystikoToken__factory;
  const mockToken = await mockTokenFactory.connect(accounts[0]).deploy();
  await mockToken.deployed();

  const mockVoteTokenFactory = (await ethers.getContractFactory(
    'MockMystikoVoteToken',
  )) as MockMystikoVoteToken__factory;
  const mockVoteToken = await mockVoteTokenFactory.connect(accounts[0]).deploy(mockToken.address);
  await mockVoteToken.deployed();

  for (let i = 0; i < accounts.length; i += 1) {
    await mockToken.transfer(accounts[i].address, DefaultTokenAmount);
  }

  const hasher3Artifact = await getArtifactExternal('Hasher3');
  const hasher3Factory = (await ethers.getContractFactoryFromArtifact(hasher3Artifact)) as Hasher3__factory;
  const hasher3 = await hasher3Factory.deploy();
  await hasher3.deployed();

  let verifierArtifact = await getArtifactVerifier('Transaction1x0Verifier');
  const transaction1x0VerifierFactory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Transaction1x0Verifier__factory;
  const transaction1x0Verifier = await transaction1x0VerifierFactory.connect(accounts[0]).deploy();
  await transaction1x0Verifier.deployed();

  verifierArtifact = await getArtifactVerifier('Transaction1x1Verifier');
  const transaction1x1VerifierFactory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Transaction1x1Verifier__factory;
  const transaction1x1Verifier = await transaction1x1VerifierFactory.connect(accounts[0]).deploy();
  await transaction1x1Verifier.deployed();

  verifierArtifact = await getArtifactVerifier('Transaction1x2Verifier');
  const transaction1x2VerifierFactory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Transaction1x2Verifier__factory;
  const transaction1x2Verifier = await transaction1x2VerifierFactory.connect(accounts[0]).deploy();
  await transaction1x2Verifier.deployed();

  verifierArtifact = await getArtifactVerifier('Transaction2x0Verifier');
  const transaction2x0VerifierFactory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Transaction2x0Verifier__factory;
  const transaction2x0Verifier = await transaction2x0VerifierFactory.connect(accounts[0]).deploy();
  await transaction2x0Verifier.deployed();

  verifierArtifact = await getArtifactVerifier('Transaction2x1Verifier');
  const transaction2x1VerifierFactory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Transaction2x1Verifier__factory;
  const transaction2x1Verifier = await transaction2x1VerifierFactory.connect(accounts[0]).deploy();
  await transaction2x1Verifier.deployed();

  verifierArtifact = await getArtifactVerifier('Transaction2x2Verifier');
  const transaction2x2VerifierFactory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Transaction2x2Verifier__factory;
  const transaction2x2Verifier = await transaction2x2VerifierFactory.connect(accounts[0]).deploy();
  await transaction2x2Verifier.deployed();

  verifierArtifact = await getArtifactVerifier('Rollup1Verifier');
  const rollup1Factory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Rollup1Verifier__factory;
  const rollup1 = await rollup1Factory.connect(accounts[0]).deploy();
  await rollup1.deployed();

  verifierArtifact = await getArtifactVerifier('Rollup2Verifier');
  const rollup2Factory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Rollup2Verifier__factory;
  const rollup2 = await rollup2Factory.connect(accounts[0]).deploy();
  await rollup2.deployed();

  verifierArtifact = await getArtifactVerifier('Rollup4Verifier');
  const rollup4Factory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Rollup4Verifier__factory;
  const rollup4 = await rollup4Factory.connect(accounts[0]).deploy();
  await rollup4.deployed();

  verifierArtifact = await getArtifactVerifier('Rollup8Verifier');
  const rollup8Factory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Rollup8Verifier__factory;
  const rollup8 = await rollup8Factory.connect(accounts[0]).deploy();
  await rollup8.deployed();

  verifierArtifact = await getArtifactVerifier('Rollup16Verifier');
  const rollup16Factory = (await ethers.getContractFactoryFromArtifact(
    verifierArtifact,
  )) as Rollup16Verifier__factory;
  const rollup16 = await rollup16Factory.connect(accounts[0]).deploy();
  await rollup16.deployed();

  const mockDaoRegistryFactory = (await ethers.getContractFactory(
    'MockDaoRegistry',
  )) as MockDaoRegistry__factory;
  const mockDaoRegistry = await mockDaoRegistryFactory.deploy();
  await mockDaoRegistry.deployed();

  const certificateArtifact = await getArtifactCertificate('MystikoCertificate');
  const certificateFactory = (await ethers.getContractFactoryFromArtifact(
    certificateArtifact,
  )) as MystikoCertificate__factory;
  const certificate = await certificateFactory.deploy(mockDaoRegistry.address, IssuerAddress);
  await certificate.deployed();

  const rollerArtifact = await getArtifactRoller('MystikoRollerPool');
  const rollerFactory = (await ethers.getContractFactoryFromArtifact(
    rollerArtifact,
  )) as MystikoRollerPool__factory;
  const rollerPool = await rollerFactory.deploy(mockDaoRegistry.address, mockVoteToken.address, 0);
  await rollerPool.deployed();

  const relayerArtifact = await getArtifactRelayer('MystikoRelayerPool');
  const relayerFactory = (await ethers.getContractFactoryFromArtifact(
    relayerArtifact,
  )) as MystikoRelayerPool__factory;
  const relayerPool = await relayerFactory.deploy(mockDaoRegistry.address, mockVoteToken.address, 0);
  await relayerPool.deployed();

  const mockSanctionFactory = (await ethers.getContractFactory(
    'MockSanctionList',
  )) as MockSanctionsList__factory;
  const mockSanctionList = await mockSanctionFactory.deploy();
  await mockSanctionList.deployed();

  const settingsArtifact = await getArtifactSettings('MystikoBridgeSettings');
  const settingsFactory = (await ethers.getContractFactoryFromArtifact(
    settingsArtifact,
  )) as MystikoSettings__factory;
  const settings = await settingsFactory.deploy(
    mockDaoRegistry.address,
    certificate.address,
    rollerPool.address,
    relayerPool.address,
    [
      rollup1.address,
      rollup2.address,
      rollup4.address,
      rollup8.address,
      rollup16.address,
      ZeroAddress,
      ZeroAddress,
      ZeroAddress,
      ZeroAddress,
      ZeroAddress,
      ZeroAddress,
    ],
    [
      transaction1x0Verifier.address,
      transaction1x1Verifier.address,
      transaction1x2Verifier.address,
      transaction2x0Verifier.address,
      transaction2x1Verifier.address,
      transaction2x2Verifier.address,
    ],
    [ZeroAddress, ZeroAddress, ZeroAddress, ZeroAddress, ZeroAddress],
  );
  await settings.deployed();
  await settings.setSanctionsListAddress(mockSanctionList.address);

  // todo eric enable cert check
  await certificate.disableCertificateCheck();

  return {
    hasher3,
    mockToken,
    mockVoteToken,
    mockSanctionList,
    certificate,
    rollerPool,
    relayerPool,
    settings,
  };
}

export async function getAccounts(admin: Wallet, num: number): Promise<Wallet[]> {
  const accounts: Wallet[] = [];
  const accountPromise = [];
  for (let i = 0; i < num; i += 1) {
    const wallet = new ethers.Wallet(UserPrivateKeys[i]).connect(ethers.provider);
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

export function getBalance(address: string, mockToken: MockMystikoToken | undefined): Promise<BN> {
  if (!mockToken) {
    return waffle.provider.getBalance(address).then((r: any) => toBN(r.toString()));
  }
  return mockToken.balanceOf(address).then((r: any) => toBN(r.toString()));
}

export async function associateContract(
  settings: MystikoBridgeSettings,
  localDeposit: any,
  remoteDeposit: any,
  localPool: any,
  remotePool: any,
): Promise<void> {
  await settings.setAssociatedPool(localDeposit.coreMain.address, localPool.poolMain.address);
  await settings.setAssociatedPool(localDeposit.coreERC20.address, localPool.poolERC20.address);
  await settings.setAssociatedPool(remoteDeposit.coreMain.address, remotePool.poolMain.address);
  await settings.setAssociatedPool(remoteDeposit.coreERC20.address, remotePool.poolERC20.address);
  const localPeerContractMain = {
    peerChainId: DestinationChainID,
    peerChainName: '',
    peerContract: remoteDeposit.coreMain.address,
  };
  await localDeposit.coreMain.setPeerContract(localPeerContractMain);
  const localPeerContractERC20 = {
    peerChainId: DestinationChainID,
    peerChainName: '',
    peerContract: remoteDeposit.coreERC20.address,
  };
  await localDeposit.coreERC20.setPeerContract(localPeerContractERC20);

  const remotePeerContractMain = {
    peerChainId: SourceChainID,
    peerChainName: '',
    peerContract: localDeposit.coreMain.address,
  };
  await remoteDeposit.coreMain.setPeerContract(remotePeerContractMain);
  const remotePeerContractERC20 = {
    peerChainId: SourceChainID,
    peerChainName: '',
    peerContract: localDeposit.coreERC20.address,
  };
  await remoteDeposit.coreERC20.setPeerContract(remotePeerContractERC20);
}
