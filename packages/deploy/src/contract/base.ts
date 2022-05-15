import {
  Transaction1x0Verifier__factory,
  Transaction1x1Verifier__factory,
  Transaction1x2Verifier__factory,
  Transaction2x0Verifier__factory,
  Transaction2x1Verifier__factory,
  Transaction2x2Verifier__factory,
  Rollup1Verifier__factory,
  Rollup4Verifier__factory,
  Rollup16Verifier__factory,
  Hasher3__factory,
} from '@mystikonetwork/contracts-abi';
import { getExternalArtifact } from '../common/utils';
import { saveConfig } from '../config/config';

let Transaction1x0Verifier: Transaction1x0Verifier__factory;
let Transaction1x1Verifier: Transaction1x1Verifier__factory;
let Transaction1x2Verifier: Transaction1x2Verifier__factory;
let Transaction2x0Verifier: Transaction2x0Verifier__factory;
let Transaction2x1Verifier: Transaction2x1Verifier__factory;
let Transaction2x2Verifier: Transaction2x2Verifier__factory;
let Rollup1Verifier: Rollup1Verifier__factory;
let Rollup4Verifier: Rollup4Verifier__factory;
let Rollup16Verifier: Rollup16Verifier__factory;
let Hasher3: Hasher3__factory;

export async function initBaseContractFactory(ethers: any) {
  Rollup1Verifier = await ethers.getContractFactory('Rollup1Verifier');
  Rollup4Verifier = await ethers.getContractFactory('Rollup4Verifier');
  Rollup16Verifier = await ethers.getContractFactory('Rollup16Verifier');

  Transaction1x0Verifier = await ethers.getContractFactory('Transaction1x0Verifier');
  Transaction1x1Verifier = await ethers.getContractFactory('Transaction1x1Verifier');
  Transaction1x2Verifier = await ethers.getContractFactory('Transaction1x2Verifier');
  Transaction2x0Verifier = await ethers.getContractFactory('Transaction2x0Verifier');
  Transaction2x1Verifier = await ethers.getContractFactory('Transaction2x1Verifier');
  Transaction2x2Verifier = await ethers.getContractFactory('Transaction2x2Verifier');

  const Hasher3Artifact = await getExternalArtifact('Hasher3');
  Hasher3 = (await ethers.getContractFactoryFromArtifact(Hasher3Artifact)) as Hasher3__factory;
}

// deploy hasher and verifier
export async function deployBaseContract(c: any) {
  const chainCfg = c.srcChainCfg;

  if (c.override === 'true' || chainCfg.hasher3Address === undefined || chainCfg.hasher3Address === '') {
    console.log('deploy hasher3');
    const hasher3 = await Hasher3.deploy();
    await hasher3.deployed();
    const hasher3Address = hasher3.address;
    console.log('hasher3 address: ', hasher3Address);
    chainCfg.hasher3Address = hasher3Address;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (c.override === 'true' || chainCfg.rollup1Address === undefined || chainCfg.rollup1Address === '') {
    console.log('deploy rollup1 verifier');
    const rollup1 = await Rollup1Verifier.deploy();
    await rollup1.deployed();
    const rollup1VerifierAddress = rollup1.address;
    console.log('rollup1 verifier address: ', rollup1VerifierAddress);
    chainCfg.rollup1Address = rollup1VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (c.override === 'true' || chainCfg.rollup4Address === undefined || chainCfg.rollup4Address === '') {
    console.log('deploy rollup4 verifier');
    const rollup4 = await Rollup4Verifier.deploy();
    await rollup4.deployed();
    const rollup4VerifierAddress = rollup4.address;
    console.log('rollup4 verifier address: ', rollup4VerifierAddress);
    chainCfg.rollup4Address = rollup4VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (c.override === 'true' || chainCfg.rollup16Address === undefined || chainCfg.rollup16Address === '') {
    console.log('deploy rollup16 verifier');
    const rollup16 = await Rollup16Verifier.deploy();
    await rollup16.deployed();
    const rollup16VerifierAddress = rollup16.address;
    console.log('rollup16 verifier address: ', rollup16VerifierAddress);
    chainCfg.rollup16Address = rollup16VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (
    c.override === 'true' ||
    chainCfg.transaction1x0VerifierAddress === undefined ||
    chainCfg.transaction1x0VerifierAddress === ''
  ) {
    console.log('deploy transaction1x0 verifier');
    const transaction1x0Verifier = await Transaction1x0Verifier.deploy();
    await transaction1x0Verifier.deployed();
    const transaction1x0VerifierAddress = transaction1x0Verifier.address;
    console.log('transaction1x0 verifier address: ', transaction1x0VerifierAddress);
    chainCfg.transaction1x0VerifierAddress = transaction1x0VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (
    c.override === 'true' ||
    chainCfg.transaction1x1VerifierAddress === undefined ||
    chainCfg.transaction1x1VerifierAddress === ''
  ) {
    console.log('deploy transaction1x1 verifier');
    const transaction1x1Verifier = await Transaction1x1Verifier.deploy();
    await transaction1x1Verifier.deployed();
    const transaction1x1VerifierAddress = transaction1x1Verifier.address;
    console.log('transaction1x1 verifier address: ', transaction1x1VerifierAddress);
    chainCfg.transaction1x1VerifierAddress = transaction1x1VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (
    c.override === 'true' ||
    chainCfg.transaction1x2VerifierAddress === undefined ||
    chainCfg.transaction1x2VerifierAddress === ''
  ) {
    console.log('deploy transaction1x2 verifier');
    const transaction1x2Verifier = await Transaction1x2Verifier.deploy();
    await transaction1x2Verifier.deployed();
    const transaction1x2VerifierAddress = transaction1x2Verifier.address;
    console.log('transaction1x2 verifier address: ', transaction1x2VerifierAddress);
    chainCfg.transaction1x2VerifierAddress = transaction1x2VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (
    c.override === 'true' ||
    chainCfg.transaction2x0VerifierAddress === undefined ||
    chainCfg.transaction2x0VerifierAddress === ''
  ) {
    console.log('deploy transaction2x0 verifier');
    const transaction2x0Verifier = await Transaction2x0Verifier.deploy();
    await transaction2x0Verifier.deployed();
    const transaction2x0VerifierAddress = transaction2x0Verifier.address;
    console.log('transaction2x0 verifier address: ', transaction2x0VerifierAddress);
    chainCfg.transaction2x0VerifierAddress = transaction2x0VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (
    c.override === 'true' ||
    chainCfg.transaction2x1VerifierAddress === undefined ||
    chainCfg.transaction2x1VerifierAddress === ''
  ) {
    console.log('deploy transaction2x1 verifier');
    const transaction2x1Verifier = await Transaction2x1Verifier.deploy();
    await transaction2x1Verifier.deployed();
    const transaction2x1VerifierAddress = transaction2x1Verifier.address;
    console.log('transaction2x1 verifier address: ', transaction2x1VerifierAddress);
    chainCfg.transaction2x1VerifierAddress = transaction2x1VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (
    c.override === 'true' ||
    chainCfg.transaction2x2VerifierAddress === undefined ||
    chainCfg.transaction2x2VerifierAddress === ''
  ) {
    console.log('deploy transaction2x2 verifier');
    const transaction2x2Verifier = await Transaction2x2Verifier.deploy();
    await transaction2x2Verifier.deployed();
    const transaction2x2VerifierAddress = transaction2x2Verifier.address;
    console.log('transaction2x2 verifier address: ', transaction2x2VerifierAddress);
    chainCfg.transaction2x2VerifierAddress = transaction2x2VerifierAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }
}
