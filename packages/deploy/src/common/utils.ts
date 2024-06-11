import { Artifact } from 'hardhat/types';
import { Artifacts } from 'hardhat/internal/artifacts';
import { LOGRED, MainNetworks, MystikoDevelopment, MystikoMainnet, MystikoTestnet } from './constant';

const fs = require('fs');
const TOML = require('@iarna/toml');

export function getMystikoNetwork(chainNetwork: string) {
  if (chainNetwork === 'hardhat') {
    console.log('development network');
    return MystikoDevelopment;
  }
  let networkType = MystikoTestnet;
  MainNetworks.forEach((n: any) => {
    if (n === chainNetwork) {
      networkType = MystikoMainnet;
    }
  });

  return networkType;
}

export function readJsonFile(fileName: string): any {
  if (!fs.existsSync(fileName)) {
    console.error(LOGRED, fileName, ' not exist');
    return undefined;
  }

  try {
    const data = fs.readFileSync(fileName);
    return JSON.parse(data);
  } catch (err) {
    console.error(LOGRED, err);
    console.error(LOGRED, 'read file error');
    return undefined;
  }
}

export function writeJsonFile(fileName: string, data: string) {
  try {
    fs.writeFileSync(fileName, data);
  } catch (err) {
    console.error(LOGRED, err);
    console.error(LOGRED, 'write file error');
  }
}

export function readTomlFile(fileName: string): any {
  if (!fs.existsSync(fileName)) {
    console.error(LOGRED, fileName, ' not exist');
    return undefined;
  }

  try {
    const data = fs.readFileSync(fileName);
    return TOML.parse(data);
  } catch (err) {
    console.error(LOGRED, err);
    console.error(LOGRED, 'read file error');
    return undefined;
  }
}

export function writeTomlFile(fileName: string, data: string) {
  try {
    fs.writeFileSync(fileName, data);
  } catch (err) {
    console.error(LOGRED, err);
    console.error(LOGRED, 'write file error');
  }
}

export function getVerifierArtifact(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-verifier/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getExternalArtifact(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts/artifactsExternal';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getCertificateArtifact(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-certificate/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getRelayerArtifact(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-Relayer/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getRollerArtifact(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-Roller/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function getSettingsArtifact(contract: string): Promise<Artifact> {
  const artifactsPath: string = '../contracts-Settings/artifacts';
  const artifacts = new Artifacts(artifactsPath);
  return artifacts.readArtifact(contract);
}

export function delay(timeoutMs: number) {
  // return new Promise((resolve) => setTimeout(resolve, ms));

  return new Promise((resolve) => {
    setTimeout(resolve, timeoutMs);
  }).then(() => {});
}

export function waitConfirm(ethers: any, rsp: any, force: boolean): Promise<number> {
  if (force) {
    return rsp.wait(1).then((receipt: any) => {
      if (receipt.status === 1) {
        return Promise.resolve(receipt.blockNumber);
      }
      return Promise.reject(new Error('transaction failed'));
    });
  }

  return Promise.resolve(0);
}

export async function checkNonceExpect(ethers: any, expectNonce: number | undefined): Promise<number> {
  const accounts = await ethers.getSigners();
  return accounts[0]
    .getTransactionCount('latest')
    .then((nonce: number) => {
      if (!expectNonce || nonce === expectNonce) {
        return Promise.resolve(nonce);
      }

      console.error(LOGRED, 'nonce ', nonce, ' not meet expect ', expectNonce);
      process.exit(1);
      return Promise.resolve(-1);
    })
    .catch((err: Error) => {
      console.error(LOGRED, 'get nonce meet error ', err);
      process.exit(1);
    });
}
