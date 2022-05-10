import { task } from 'hardhat/config';

const genContract = require('circomlibjs/src/poseidon_gencontract');
const path = require('path');
const fs = require('fs');

const artifactsDir = 'artifactsExternal';
const hasher2OutputPath = path.join(__dirname, '..', artifactsDir, 'Hasher2.json');
const hasher3OutputPath = path.join(__dirname, '..', artifactsDir, 'Hasher3.json');

task('compile-hasher', async () => {
  // await runSuper();
  if (!fs.existsSync(artifactsDir)) {
    fs.mkdirSync(artifactsDir);
  }

  const hasher2Contract = {
    contractName: 'Hasher2',
    sourceName: 'contracts/dummy/Hasher2.sol',
    abi: genContract.generateABI(2),
    bytecode: genContract.createCode(2),
    _format: 'hh-sol-artifact-1',
    deployedBytecode: '0x',
    linkReferences: {},
    deployedLinkReferences: {},
  };

  const hasher3Contract = {
    contractName: 'Hasher3',
    sourceName: 'contracts/dummy/Hasher3.sol',
    abi: genContract.generateABI(3),
    bytecode: genContract.createCode(3),
    _format: 'hh-sol-artifact-1',
    deployedBytecode: '0x',
    linkReferences: {},
    deployedLinkReferences: {},
  };

  await fs.writeFileSync(hasher2OutputPath, JSON.stringify(hasher2Contract, undefined, 2));
  await fs.writeFileSync(hasher3OutputPath, JSON.stringify(hasher3Contract, undefined, 2));
});
