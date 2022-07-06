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
  .addParam('step', 'step1、step2、step3、check、dump、dumpRoller、testToken、reset、resetVerifier')
  .addParam('bridge', 'loop、tbridge、celer', 'loop')
  .addParam('dst', 'ropsten、goerli、bsctestnet', 'bsctestnet')
  .addParam('token', 'ETH、BNB、MTT、mUSD', 'MTT')
  .addParam('override', 'true、false', 'false')
  .setAction(async (taskArgs, hre) => {
    // const accounts = await hre.ethers.getSigners();
    // const provider = await hre.ethers.getDefaultProvider();
    taskArgs.src = hre.network.name;
    await deploy(taskArgs, hre);
  });

task('set', 'update contract configure')
  .addParam('bridge', 'loop、tbridge、celer', 'loop')
  .addParam('dst', 'ropsten、goerli、bsctestnet', 'bsctestnet')
  .addParam('token', 'ETH、BNB、MTT、mUSD', 'MTT')
  .addParam('func', 'sanctionCheckDisabled、tokenTransfer')
  .addParam('param', 'parameter', '')
  .setAction(async (taskArgs, hre) => {
    taskArgs.src = hre.network.name;
    await set(taskArgs, hre);
  });

task('query', 'update contract configure')
  .addParam('bridge', 'loop、tbridge、celer', 'loop')
  .addParam('dst', 'ropsten、goerli、bsctestnet', 'bsctestnet')
  .addParam('token', 'ETH、BNB、MTT、mUSD', 'MTT')
  .addParam('func', 'commitmentQueue、sanction')
  .addParam('param', 'parameter', '')
  .setAction(async (taskArgs, hre) => {
    taskArgs.src = hre.network.name;
    await query(taskArgs, hre);
  });

const DEFAULT_ENDPOINT = 'http://localhost:8545';
const DEFAULT_PRIVATE_KEY = process.env.PRIVATE_KEY;

// Testnets
const ropstenEndpoint = process.env.ROPSTEN_ENDPOINT || DEFAULT_ENDPOINT;
const ropstenPrivateKey = process.env.ROPSTEN_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const goerliEndpoint = process.env.GOERLI_ENDPOINT || DEFAULT_ENDPOINT;
const goerliPrivateKey = process.env.GOERLI_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const bscTestEndpoint = process.env.BSC_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const bscTestPrivateKey = process.env.BSC_TEST_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const fantomTestEndpoint = process.env.FANTOM_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const fantomTestPrivateKey = process.env.FANTOM_TEST_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const avalancheTestEndpoint = process.env.AVALANCHE_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const avalancheTestPrivateKey = process.env.AVALANCHE_TEST_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const auroraTestEndpoint = process.env.AURORA_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const auroraTestPrivateKey = process.env.AURORA_TEST_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const polygonTestEndpoint = process.env.POLYGON_TEST_ENDPOINT || DEFAULT_ENDPOINT;
const polygonTestPrivateKey = process.env.POLYGON_TEST_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const moonbaseAlphaTestEndpoint = process.env.MOONBASE_ALPHA_ENDPOINT || DEFAULT_ENDPOINT;
const moonbaseAlphaTestPrivateKey = process.env.MOONBASE_ALPHA_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

// Mainnets
const ethMainnetEndpoint = process.env.ETH_MAINNET_ENDPOINT || DEFAULT_ENDPOINT;
const ethMainnetPrivateKey = process.env.ETH_MAINNET_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const bscEndpoint = process.env.BSC_ENDPOINT || DEFAULT_ENDPOINT;
const bscPrivateKey = process.env.BSC_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    localhost: { timeout: 600000 },
    ropsten: {
      url: ropstenEndpoint,
      accounts: [`0x${ropstenPrivateKey}`],
    },
    goerli: {
      url: goerliEndpoint,
      accounts: [`0x${goerliPrivateKey}`],
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
    ethMainnet: {
      url: ethMainnetEndpoint,
      accounts: [`0x${ethMainnetPrivateKey}`],
    },
    bsc: {
      url: bscEndpoint,
      accounts: [`0x${bscPrivateKey}`],
    },
  },
  paths: {
    artifacts: '../contracts/artifacts',
  },
};

export default config;
