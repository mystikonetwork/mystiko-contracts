import { Signer, providers } from 'ethers';
import {
  CommitmentPool,
  CommitmentPool__factory,
  ERC20,
  ERC20__factory,
  MystikoV2Bridge,
  MystikoV2Bridge__factory,
  MystikoV2Loop,
  MystikoV2Loop__factory,
  MystikoV2WithCeler,
  MystikoV2WithCeler__factory,
  MystikoV2WithTBridge,
  MystikoV2WithTBridge__factory,
} from './typechain';

export type SupportedContractType =
  | ERC20
  | CommitmentPool
  | MystikoV2Loop
  | MystikoV2Bridge
  | MystikoV2WithCeler
  | MystikoV2WithTBridge;

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
    if (contractName === 'MystikoV2Loop' || contractName.startsWith('MystikoV2WithLoop')) {
      return MystikoV2Loop__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName === 'MystikoV2Bridge') {
      return MystikoV2Bridge__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2WithTBridge')) {
      return MystikoV2WithTBridge__factory.connect(address, signerOrProvider) as T;
    }
    if (contractName.startsWith('MystikoV2WithCeler')) {
      return MystikoV2WithCeler__factory.connect(address, signerOrProvider) as T;
    }
    throw new Error(`unsupported contract name ${contractName}`);
  }
}
