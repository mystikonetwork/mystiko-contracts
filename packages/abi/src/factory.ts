import { providers, Signer } from 'ethers';
import {
  CommitmentPool,
  CommitmentPool__factory,
  ERC20,
  ERC20__factory,
  MystikoV2Axelar,
  MystikoV2Axelar__factory,
  MystikoV2Bridge,
  MystikoV2Bridge__factory,
  MystikoV2Celer,
  MystikoV2Celer__factory,
  MystikoV2LayerZero,
  MystikoV2LayerZero__factory,
  MystikoV2Loop,
  MystikoV2Loop__factory,
  MystikoV2TBridge,
  MystikoV2TBridge__factory,
  MystikoSettings,
  MystikoSettings__factory,
  MystikoV2WormholeUSDC__factory,
  MystikoV2WormholeUSDC,
  MystikoV2WormholeETH__factory,
  MystikoV2WormholeETH,
  MystikoV2WormholeERC20__factory,
  MystikoV2WormholeERC20,
} from './typechain/core';

export type SupportedContractType =
  | ERC20
  | CommitmentPool
  | MystikoV2Loop
  | MystikoV2Axelar
  | MystikoV2Bridge
  | MystikoV2Celer
  | MystikoV2LayerZero
  | MystikoV2TBridge
  | MystikoV2WormholeUSDC
  | MystikoV2WormholeETH
  | MystikoV2WormholeERC20
  | MystikoSettings;

export class MystikoContractFactory {
  public static connect<T extends SupportedContractType>(
    contractName: string,
    address: string,
    signerOrProvider: Signer | providers.Provider,
  ): T {
    if (contractName === 'ERC20') {
      return ERC20__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('CommitmentPool')) {
      return CommitmentPool__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName === 'MystikoV2Loop' || contractName.startsWith('MystikoV2Loop')) {
      return MystikoV2Loop__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName === 'MystikoV2Bridge') {
      return MystikoV2Bridge__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2Axelar')) {
      return MystikoV2Axelar__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2Celer')) {
      return MystikoV2Celer__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2LayerZero')) {
      return MystikoV2LayerZero__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2TBridge')) {
      return MystikoV2TBridge__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoSettings')) {
      return MystikoSettings__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2WormholeUSDC')) {
      return MystikoV2WormholeUSDC__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2WormholeETH')) {
      return MystikoV2WormholeETH__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2WormholeERC20')) {
      return MystikoV2WormholeERC20__factory.connect(address, signerOrProvider) as T;
    }
    throw new Error(`unsupported contract name ${contractName}`);
  }
}
