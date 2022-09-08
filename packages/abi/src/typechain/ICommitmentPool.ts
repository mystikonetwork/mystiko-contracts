/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace ICommitmentPool {
  export type CommitmentRequestStruct = {
    amount: BigNumberish;
    commitment: BigNumberish;
    executorFee: BigNumberish;
    rollupFee: BigNumberish;
    encryptedNote: BytesLike;
  };

  export type CommitmentRequestStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, string] & {
    amount: BigNumber;
    commitment: BigNumber;
    executorFee: BigNumber;
    rollupFee: BigNumber;
    encryptedNote: string;
  };

  export type RollupRequestStruct = {
    proof: IVerifier.ProofStruct;
    rollupSize: BigNumberish;
    newRoot: BigNumberish;
    leafHash: BigNumberish;
  };

  export type RollupRequestStructOutput = [IVerifier.ProofStructOutput, number, BigNumber, BigNumber] & {
    proof: IVerifier.ProofStructOutput;
    rollupSize: number;
    newRoot: BigNumber;
    leafHash: BigNumber;
  };

  export type TransactRequestStruct = {
    proof: IVerifier.ProofStruct;
    rootHash: BigNumberish;
    serialNumbers: BigNumberish[];
    sigHashes: BigNumberish[];
    sigPk: BytesLike;
    publicAmount: BigNumberish;
    relayerFeeAmount: BigNumberish;
    outCommitments: BigNumberish[];
    outRollupFees: BigNumberish[];
    publicRecipient: string;
    relayerAddress: string;
    outEncryptedNotes: BytesLike[];
    randomAuditingPublicKey: BytesLike;
    encryptedAuditorNotes: BigNumberish[];
  };

  export type TransactRequestStructOutput = [
    IVerifier.ProofStructOutput,
    BigNumber,
    BigNumber[],
    BigNumber[],
    string,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    string,
    string,
    string[],
    string,
    BigNumber[],
  ] & {
    proof: IVerifier.ProofStructOutput;
    rootHash: BigNumber;
    serialNumbers: BigNumber[];
    sigHashes: BigNumber[];
    sigPk: string;
    publicAmount: BigNumber;
    relayerFeeAmount: BigNumber;
    outCommitments: BigNumber[];
    outRollupFees: BigNumber[];
    publicRecipient: string;
    relayerAddress: string;
    outEncryptedNotes: string[];
    randomAuditingPublicKey: string;
    encryptedAuditorNotes: BigNumber[];
  };
}

export declare namespace IVerifier {
  export type G1PointStruct = { X: BigNumberish; Y: BigNumberish };

  export type G1PointStructOutput = [BigNumber, BigNumber] & {
    X: BigNumber;
    Y: BigNumber;
  };

  export type G2PointStruct = {
    X: [BigNumberish, BigNumberish];
    Y: [BigNumberish, BigNumberish];
  };

  export type G2PointStructOutput = [[BigNumber, BigNumber], [BigNumber, BigNumber]] & {
    X: [BigNumber, BigNumber];
    Y: [BigNumber, BigNumber];
  };

  export type ProofStruct = {
    a: IVerifier.G1PointStruct;
    b: IVerifier.G2PointStruct;
    c: IVerifier.G1PointStruct;
  };

  export type ProofStructOutput = [
    IVerifier.G1PointStructOutput,
    IVerifier.G2PointStructOutput,
    IVerifier.G1PointStructOutput,
  ] & {
    a: IVerifier.G1PointStructOutput;
    b: IVerifier.G2PointStructOutput;
    c: IVerifier.G1PointStructOutput;
  };
}

export interface ICommitmentPoolInterface extends utils.Interface {
  contractName: 'ICommitmentPool';
  functions: {
    'enqueue((uint256,uint256,uint256,uint256,bytes),address)': FunctionFragment;
    'rollup((((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint32,uint256,uint256))': FunctionFragment;
    'transact((((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256,uint256[],uint256[],bytes32,uint256,uint256,uint256[],uint256[],address,address,bytes[],bytes32,uint256[]),bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'enqueue',
    values: [ICommitmentPool.CommitmentRequestStruct, string],
  ): string;
  encodeFunctionData(functionFragment: 'rollup', values: [ICommitmentPool.RollupRequestStruct]): string;
  encodeFunctionData(
    functionFragment: 'transact',
    values: [ICommitmentPool.TransactRequestStruct, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: 'enqueue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rollup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transact', data: BytesLike): Result;

  events: {};
}

export interface ICommitmentPool extends BaseContract {
  contractName: 'ICommitmentPool';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICommitmentPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  enqueue(
    _request: ICommitmentPool.CommitmentRequestStruct,
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  rollup(
    _request: ICommitmentPool.RollupRequestStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transact(
    _request: ICommitmentPool.TransactRequestStruct,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    rollup(_request: ICommitmentPool.RollupRequestStruct, overrides?: CallOverrides): Promise<void>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
