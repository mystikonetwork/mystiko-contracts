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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace CommitmentPool {
  export type AuditorNoteStruct = {
    id: BigNumberish;
    publicKey: BigNumberish;
    note: BigNumberish;
  };

  export type AuditorNoteStructOutput = [BigNumber, BigNumber, BigNumber] & {
    id: BigNumber;
    publicKey: BigNumber;
    note: BigNumber;
  };
}

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
    randomAuditingPublicKey: BigNumberish;
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
    BigNumber,
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
    randomAuditingPublicKey: BigNumber;
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

export interface CommitmentPoolInterface extends utils.Interface {
  contractName: 'CommitmentPool';
  functions: {
    'AUDITOR_COUNT()': FunctionFragment;
    '_pathIndices(uint256,uint32)': FunctionFragment;
    'assetAddress()': FunctionFragment;
    'assetType()': FunctionFragment;
    'defaultMinRollupFee()': FunctionFragment;
    'enqueue((uint256,uint256,uint256,uint256,bytes),address)': FunctionFragment;
    'getAllAuditorPublicKeys()': FunctionFragment;
    'getAuditorPublicKey(uint256)': FunctionFragment;
    'getCommitmentCount()': FunctionFragment;
    'getCommitmentIncludedCount()': FunctionFragment;
    'getCommitmentQueuedCount()': FunctionFragment;
    'getMinRollupFee()': FunctionFragment;
    'getNullifierCount()': FunctionFragment;
    'getQueuedCommitments()': FunctionFragment;
    'getTreeCapacity()': FunctionFragment;
    'isHistoricCommitment(uint256)': FunctionFragment;
    'isKnownRoot(uint256)': FunctionFragment;
    'isSpentSerialNumber(uint256)': FunctionFragment;
    'rollup((((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint32,uint256,uint256))': FunctionFragment;
    'settings()': FunctionFragment;
    'transact((((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256,uint256[],uint256[],bytes32,uint256,uint256,uint256[],uint256[],address,address,bytes[],uint256,uint256[]),bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'AUDITOR_COUNT', values?: undefined): string;
  encodeFunctionData(functionFragment: '_pathIndices', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'assetAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMinRollupFee', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'enqueue',
    values: [ICommitmentPool.CommitmentRequestStruct, string],
  ): string;
  encodeFunctionData(functionFragment: 'getAllAuditorPublicKeys', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAuditorPublicKey', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getCommitmentCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getCommitmentIncludedCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getCommitmentQueuedCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getNullifierCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getQueuedCommitments', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getTreeCapacity', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isHistoricCommitment', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isKnownRoot', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isSpentSerialNumber', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'rollup', values: [ICommitmentPool.RollupRequestStruct]): string;
  encodeFunctionData(functionFragment: 'settings', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transact',
    values: [ICommitmentPool.TransactRequestStruct, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: 'AUDITOR_COUNT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: '_pathIndices', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enqueue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllAuditorPublicKeys', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAuditorPublicKey', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCommitmentCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCommitmentIncludedCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCommitmentQueuedCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getNullifierCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getQueuedCommitments', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTreeCapacity', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isHistoricCommitment', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isKnownRoot', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isSpentSerialNumber', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rollup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'settings', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transact', data: BytesLike): Result;

  events: {
    'CommitmentIncluded(uint256)': EventFragment;
    'CommitmentQueued(uint256,uint256,uint256,bytes)': EventFragment;
    'CommitmentSpent(uint256,uint256)': EventFragment;
    'EncryptedAuditorNote(uint64,uint256,uint256)': EventFragment;
    'EncryptedAuditorNotes(tuple[])': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CommitmentIncluded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommitmentQueued'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommitmentSpent'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EncryptedAuditorNote'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EncryptedAuditorNotes'): EventFragment;
}

export type CommitmentIncludedEvent = TypedEvent<[BigNumber], { commitment: BigNumber }>;

export type CommitmentIncludedEventFilter = TypedEventFilter<CommitmentIncludedEvent>;

export type CommitmentQueuedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string],
  {
    commitment: BigNumber;
    rollupFee: BigNumber;
    leafIndex: BigNumber;
    encryptedNote: string;
  }
>;

export type CommitmentQueuedEventFilter = TypedEventFilter<CommitmentQueuedEvent>;

export type CommitmentSpentEvent = TypedEvent<
  [BigNumber, BigNumber],
  { rootHash: BigNumber; serialNumber: BigNumber }
>;

export type CommitmentSpentEventFilter = TypedEventFilter<CommitmentSpentEvent>;

export type EncryptedAuditorNoteEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  {
    id: BigNumber;
    auditorPublicKey: BigNumber;
    encryptedAuditorNote: BigNumber;
  }
>;

export type EncryptedAuditorNoteEventFilter = TypedEventFilter<EncryptedAuditorNoteEvent>;

export type EncryptedAuditorNotesEvent = TypedEvent<
  [CommitmentPool.AuditorNoteStructOutput[]],
  { notes: CommitmentPool.AuditorNoteStructOutput[] }
>;

export type EncryptedAuditorNotesEventFilter = TypedEventFilter<EncryptedAuditorNotesEvent>;

export interface CommitmentPool extends BaseContract {
  contractName: 'CommitmentPool';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CommitmentPoolInterface;

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
    AUDITOR_COUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    assetAddress(overrides?: CallOverrides): Promise<[string]>;

    assetType(overrides?: CallOverrides): Promise<[number]>;

    defaultMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getAllAuditorPublicKeys(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getAuditorPublicKey(_index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    getCommitmentCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCommitmentQueuedCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNullifierCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getQueuedCommitments(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getTreeCapacity(overrides?: CallOverrides): Promise<[BigNumber]>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    settings(overrides?: CallOverrides): Promise<[string]>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  AUDITOR_COUNT(overrides?: CallOverrides): Promise<BigNumber>;

  _pathIndices(
    _fullPath: BigNumberish,
    _rollupSize: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  assetAddress(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<number>;

  defaultMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  enqueue(
    _request: ICommitmentPool.CommitmentRequestStruct,
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getAllAuditorPublicKeys(overrides?: CallOverrides): Promise<BigNumber[]>;

  getAuditorPublicKey(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getCommitmentCount(overrides?: CallOverrides): Promise<BigNumber>;

  getCommitmentIncludedCount(overrides?: CallOverrides): Promise<BigNumber>;

  getCommitmentQueuedCount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  getNullifierCount(overrides?: CallOverrides): Promise<BigNumber>;

  getQueuedCommitments(overrides?: CallOverrides): Promise<BigNumber[]>;

  getTreeCapacity(overrides?: CallOverrides): Promise<BigNumber>;

  isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  rollup(
    _request: ICommitmentPool.RollupRequestStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  settings(overrides?: CallOverrides): Promise<string>;

  transact(
    _request: ICommitmentPool.TransactRequestStruct,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    AUDITOR_COUNT(overrides?: CallOverrides): Promise<BigNumber>;

    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    assetAddress(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<number>;

    defaultMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    getAllAuditorPublicKeys(overrides?: CallOverrides): Promise<BigNumber[]>;

    getAuditorPublicKey(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getCommitmentCount(overrides?: CallOverrides): Promise<BigNumber>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getCommitmentQueuedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    getNullifierCount(overrides?: CallOverrides): Promise<BigNumber>;

    getQueuedCommitments(overrides?: CallOverrides): Promise<BigNumber[]>;

    getTreeCapacity(overrides?: CallOverrides): Promise<BigNumber>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    rollup(_request: ICommitmentPool.RollupRequestStruct, overrides?: CallOverrides): Promise<void>;

    settings(overrides?: CallOverrides): Promise<string>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'CommitmentIncluded(uint256)'(commitment?: BigNumberish | null): CommitmentIncludedEventFilter;
    CommitmentIncluded(commitment?: BigNumberish | null): CommitmentIncludedEventFilter;

    'CommitmentQueued(uint256,uint256,uint256,bytes)'(
      commitment?: BigNumberish | null,
      rollupFee?: null,
      leafIndex?: null,
      encryptedNote?: null,
    ): CommitmentQueuedEventFilter;
    CommitmentQueued(
      commitment?: BigNumberish | null,
      rollupFee?: null,
      leafIndex?: null,
      encryptedNote?: null,
    ): CommitmentQueuedEventFilter;

    'CommitmentSpent(uint256,uint256)'(
      rootHash?: BigNumberish | null,
      serialNumber?: BigNumberish | null,
    ): CommitmentSpentEventFilter;
    CommitmentSpent(
      rootHash?: BigNumberish | null,
      serialNumber?: BigNumberish | null,
    ): CommitmentSpentEventFilter;

    'EncryptedAuditorNote(uint64,uint256,uint256)'(
      id?: null,
      auditorPublicKey?: null,
      encryptedAuditorNote?: null,
    ): EncryptedAuditorNoteEventFilter;
    EncryptedAuditorNote(
      id?: null,
      auditorPublicKey?: null,
      encryptedAuditorNote?: null,
    ): EncryptedAuditorNoteEventFilter;

    'EncryptedAuditorNotes(tuple[])'(notes?: null): EncryptedAuditorNotesEventFilter;
    EncryptedAuditorNotes(notes?: null): EncryptedAuditorNotesEventFilter;
  };

  estimateGas: {
    AUDITOR_COUNT(overrides?: CallOverrides): Promise<BigNumber>;

    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    assetAddress(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getAllAuditorPublicKeys(overrides?: CallOverrides): Promise<BigNumber>;

    getAuditorPublicKey(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getCommitmentCount(overrides?: CallOverrides): Promise<BigNumber>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getCommitmentQueuedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    getNullifierCount(overrides?: CallOverrides): Promise<BigNumber>;

    getQueuedCommitments(overrides?: CallOverrides): Promise<BigNumber>;

    getTreeCapacity(overrides?: CallOverrides): Promise<BigNumber>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    settings(overrides?: CallOverrides): Promise<BigNumber>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AUDITOR_COUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    assetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAllAuditorPublicKeys(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAuditorPublicKey(_index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCommitmentCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCommitmentQueuedCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNullifierCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getQueuedCommitments(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTreeCapacity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSpentSerialNumber(
      _serialNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    settings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
