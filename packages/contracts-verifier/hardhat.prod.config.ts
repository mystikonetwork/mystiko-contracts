import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-contract-sizer';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import * as dotenv from 'dotenv';
import { TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS } from 'hardhat/builtin-tasks/task-names';
import { subtask } from 'hardhat/config';
import { glob } from 'hardhat/internal/util/glob';
import { HardhatUserConfig } from 'hardhat/types';
import 'solidity-coverage';

const path = require('path');

dotenv.config();

subtask(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS, async (_, { config }) => {
  const prodContracts = await glob(path.join(config.paths.root, 'contracts/prod/**/*.sol'));

  return [...prodContracts].map(path.normalize); // not sure if normalize is needed here
});

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    localhost: { timeout: 600000 },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
        details: {
          yul: true,
        },
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === 'true' ? true : false,
    gasPrice: 1,
    showTimeSpent: true,
    noColors: true,
    outputFile: 'reports/gas/summary.txt',
  },
  mocha: {
    timeout: 600000,
  },
};

export default config;
