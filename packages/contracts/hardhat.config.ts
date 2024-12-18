import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-contract-sizer';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';
import './scripts/compileHasher.hardhat';
import 'solidity-coverage';

require('@nomicfoundation/hardhat-foundry');

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    localhost: { timeout: 600000 },
  },
  solidity: {
    version: '0.8.26',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
        details: {
          yul: true,
        },
      },
      viaIR: true,
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
