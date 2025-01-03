import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-contract-sizer';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';
import { task } from 'hardhat/config';
import { deploy } from './src/deploy';
import { set } from './src/set';
import { query } from './src/query';

dotenv.config();

task('migrate', 'deploy contract')
  .addParam('bridge', 'loop、tbridge、celer', 'loop')
  .addParam('dst', 'sepolia、bsctestnet', 'bsctestnet')
  .addParam('token', 'ETH、BNB、MTT、mUSD', 'MTT')
  .addParam(
    'step',
    'step1、step2、step3、step4、check、dump、dumpMiner、dumpAllMiner、testToken、resetAll、resetAllVerifier',
  )
  .addParam('override', 'true、false', 'false')
  .setAction(async (taskArgs, hre) => {
    taskArgs.src = hre.network.name;
    await deploy(taskArgs, hre);
  });

task('set', 'update contract configure')
  .addParam('bridge', 'loop、tbridge、celer', 'loop')
  .addParam('dst', 'sepolia、bsctestnet', 'bsctestnet')
  .addParam('token', 'ETH、BNB、MTT、mUSD', 'MTT')
  .addParam(
    'func',
    'sanctionCheck、tokenTransfer、changeOperator, disablePoolContract, disableDepositContract',
  )
  .addParam('param', 'parameter', '')
  .setAction(async (taskArgs, hre) => {
    taskArgs.src = hre.network.name;
    await set(taskArgs, hre);
  });

task('query', 'update contract configure')
  .addParam('bridge', 'loop、tbridge、celer', 'loop')
  .addParam('dst', 'sepolia、bsctestnet', 'bsctestnet')
  .addParam('token', 'ETH、BNB、MTT、mUSD', 'MTT')
  .addParam('func', 'commitmentQueue、sanction')
  .addParam('param', 'parameter', '')
  .setAction(async (taskArgs, hre) => {
    taskArgs.src = hre.network.name;
    await query(taskArgs, hre);
  });

const DEFAULT_ENDPOINT = 'http://localhost:8545';
const DEFAULT_TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVATE_KEY;
const DEFAULT_MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;

// Testnets
const sepoliaEndpoint = process.env.SEPOLIA_ENDPOINT || DEFAULT_ENDPOINT;
const sepoliaPrivateKey = process.env.SEPOLIA_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const baseSepoliaEndpoint = process.env.BASE_SEPOLIA_ENDPOINT || DEFAULT_ENDPOINT;
const baseSepoliaPrivateKey = process.env.BASE_SEPOLIA_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const bscTestEndpoint = process.env.BSC_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const bscTestPrivateKey = process.env.BSC_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const fantomTestEndpoint = process.env.FANTOM_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const fantomTestPrivateKey = process.env.FANTOM_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const avalancheTestEndpoint = process.env.AVALANCHE_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const avalancheTestPrivateKey = process.env.AVALANCHE_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const auroraTestEndpoint = process.env.AURORA_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const auroraTestPrivateKey = process.env.AURORA_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const polygonTestEndpoint = process.env.POLYGON_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const polygonTestPrivateKey = process.env.POLYGON_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const moonbaseAlphaTestEndpoint = process.env.MOONBASE_ALPHA_ENDPOINT || DEFAULT_ENDPOINT;
const moonbaseAlphaTestPrivateKey = process.env.MOONBASE_ALPHA_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

const zetaTestEndpoint = process.env.ZETA_TESTNET_ENDPOINT || DEFAULT_ENDPOINT;
const zetaTestPrivateKey = process.env.ZETA_TESTNET_PRIVATE_KEY || DEFAULT_TESTNET_PRIVATE_KEY;

// Mainnets
const ethEndpoint = process.env.ETH_ENDPOINT || DEFAULT_ENDPOINT;
const ethPrivateKey = process.env.ETH_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const bscEndpoint = process.env.BSC_ENDPOINT || DEFAULT_ENDPOINT;
const bscPrivateKey = process.env.BSC_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const fantomEndpoint = process.env.FANTOM_ENDPOINT || DEFAULT_ENDPOINT;
const fantomPrivateKey = process.env.FANTOM_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const avalancheEndpoint = process.env.AVALANCHE_ENDPOINT || DEFAULT_ENDPOINT;
const avalanchePrivateKey = process.env.AVALANCHE_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const polygonEndpoint = process.env.POLYGON_ENDPOINT || DEFAULT_ENDPOINT;
const polygonPrivateKey = process.env.POLYGON_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const moonbeamEndpoint = process.env.MOONBEAM_ENDPOINT || DEFAULT_ENDPOINT;
const moonbeamPrivateKey = process.env.MOONBEAM_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const baseEndpoint = process.env.BASE_ENDPOINT || DEFAULT_ENDPOINT;
const basePrivateKey = process.env.BASE_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const lineaEndpoint = process.env.LINEA_ENDPOINT || DEFAULT_ENDPOINT;
const lineaPrivateKey = process.env.LINEA_MAINNET_PRIVATE_KEY || DEFAULT_MAINNET_PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    localhost: { timeout: 600000 },
    sepolia: {
      url: sepoliaEndpoint,
      accounts: [`0x${sepoliaPrivateKey}`],
    },
    baseSepolia: {
      url: baseSepoliaEndpoint,
      accounts: [`0x${baseSepoliaPrivateKey}`],
      gasPrice: 10000000,
    },
    bsctestnet: {
      url: bscTestEndpoint,
      accounts: [`0x${bscTestPrivateKey}`],
    },
    fantomtestnet: {
      url: fantomTestEndpoint,
      accounts: [`0x${fantomTestPrivateKey}`],
    },
    avalanchetestnet: {
      url: avalancheTestEndpoint,
      accounts: [`0x${avalancheTestPrivateKey}`],
    },
    moonbase: {
      url: moonbaseAlphaTestEndpoint,
      accounts: [`0x${moonbaseAlphaTestPrivateKey}`],
    },
    auroratestnet: {
      url: auroraTestEndpoint,
      accounts: [`0x${auroraTestPrivateKey}`],
    },
    polygontestnet: {
      url: polygonTestEndpoint,
      accounts: [`0x${polygonTestPrivateKey}`],
    },
    zetatestnet: {
      url: zetaTestEndpoint,
      accounts: [`0x${zetaTestPrivateKey}`],
    },
    Ethereum: {
      url: ethEndpoint,
      accounts: [`0x${ethPrivateKey}`],
      gasPrice: 5400000000,
      timeout: 60000000,
    },
    BSC: {
      url: bscEndpoint,
      accounts: [`0x${bscPrivateKey}`],
    },
    fantom: {
      url: fantomEndpoint,
      accounts: [`0x${fantomPrivateKey}`],
    },
    Avalanche: {
      url: avalancheEndpoint,
      accounts: [`0x${avalanchePrivateKey}`],
    },
    moonbeam: {
      url: moonbeamEndpoint,
      accounts: [`0x${moonbeamPrivateKey}`],
    },
    Polygon: {
      url: polygonEndpoint,
      accounts: [`0x${polygonPrivateKey}`],
      gasPrice: 80000000000,
    },
    Base: {
      url: baseEndpoint,
      accounts: [`0x${basePrivateKey}`],
    },
    Linea: {
      url: lineaEndpoint,
      accounts: [`0x${lineaPrivateKey}`],
    },
  },
  paths: {
    artifacts: '../contracts/artifacts',
  },
};

export default config;
