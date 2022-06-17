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
    '_pathIndices(uint256,uint32)': FunctionFragment;
    'addEnqueueWhitelist(address)': FunctionFragment;
    'addRollupWhitelist(address)': FunctionFragment;
    'assetType()': FunctionFragment;
    'changeOperator(address)': FunctionFragment;
    'disableRollupVerifier(uint32)': FunctionFragment;
    'disableTransactVerifier(uint32,uint32)': FunctionFragment;
    'enableRollupVerifier(uint32,address)': FunctionFragment;
    'enableTransactVerifier(uint32,uint32,address)': FunctionFragment;
    'enqueue((uint256,uint256,uint256,uint256,bytes),address)': FunctionFragment;
    'getCommitmentIncludedCount()': FunctionFragment;
    'getMinRollupFee()': FunctionFragment;
    'getTreeCapacity()': FunctionFragment;
    'isHistoricCommitment(uint256)': FunctionFragment;
    'isKnownRoot(uint256)': FunctionFragment;
    'isRollupWhitelistDisabled()': FunctionFragment;
    'isSpentSerialNumber(uint256)': FunctionFragment;
    'isVerifierUpdateDisabled()': FunctionFragment;
    'removeEnqueueWhitelist(address)': FunctionFragment;
    'removeRollupWhitelist(address)': FunctionFragment;
    'rollup((((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint32,uint256,uint256))': FunctionFragment;
    'sanctionsCheckDisabled()': FunctionFragment;
    'sanctionsList()': FunctionFragment;
    'setMinRollupFee(uint256)': FunctionFragment;
    'setRollupWhitelistDisabled(bool)': FunctionFragment;
    'setSanctionCheckDisabled(bool)': FunctionFragment;
    'setVerifierUpdateDisabled(bool)': FunctionFragment;
    'transact((((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256,uint256[],uint256[],bytes32,uint256,uint256,uint256[],uint256[],address,address,bytes[]),bytes)': FunctionFragment;
    'updateSanctionsListAddress(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: '_pathIndices', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'addEnqueueWhitelist', values: [string]): string;
  encodeFunctionData(functionFragment: 'addRollupWhitelist', values: [string]): string;
  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
  encodeFunctionData(functionFragment: 'disableRollupVerifier', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'disableTransactVerifier',
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'enableRollupVerifier', values: [BigNumberish, string]): string;
  encodeFunctionData(
    functionFragment: 'enableTransactVerifier',
    values: [BigNumberish, BigNumberish, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'enqueue',
    values: [ICommitmentPool.CommitmentRequestStruct, string],
  ): string;
  encodeFunctionData(functionFragment: 'getCommitmentIncludedCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getTreeCapacity', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isHistoricCommitment', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isKnownRoot', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isRollupWhitelistDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isSpentSerialNumber', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isVerifierUpdateDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'removeEnqueueWhitelist', values: [string]): string;
  encodeFunctionData(functionFragment: 'removeRollupWhitelist', values: [string]): string;
  encodeFunctionData(functionFragment: 'rollup', values: [ICommitmentPool.RollupRequestStruct]): string;
  encodeFunctionData(functionFragment: 'sanctionsCheckDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sanctionsList', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setMinRollupFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setRollupWhitelistDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'setSanctionCheckDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'setVerifierUpdateDisabled', values: [boolean]): string;
  encodeFunctionData(
    functionFragment: 'transact',
    values: [ICommitmentPool.TransactRequestStruct, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'updateSanctionsListAddress', values: [string]): string;

  decodeFunctionResult(functionFragment: '_pathIndices', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addEnqueueWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addRollupWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disableRollupVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disableTransactVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enableRollupVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enableTransactVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enqueue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCommitmentIncludedCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTreeCapacity', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isHistoricCommitment', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isKnownRoot', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isRollupWhitelistDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isSpentSerialNumber', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isVerifierUpdateDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeEnqueueWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeRollupWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rollup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRollupWhitelistDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSanctionCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setVerifierUpdateDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transact', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateSanctionsListAddress', data: BytesLike): Result;

  events: {
    'CommitmentIncluded(uint256)': EventFragment;
    'CommitmentQueued(uint256,uint256,uint256,bytes)': EventFragment;
    'CommitmentSpent(uint256,uint256)': EventFragment;
    'RollupWhitelistDisabled(bool)': EventFragment;
    'SanctionsCheckDisabled(bool)': EventFragment;
    'SanctionsList(address)': EventFragment;
    'VerifierUpdateDisabled(bool)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CommitmentIncluded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommitmentQueued'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommitmentSpent'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RollupWhitelistDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsCheckDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsList'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VerifierUpdateDisabled'): EventFragment;
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

export type RollupWhitelistDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type RollupWhitelistDisabledEventFilter = TypedEventFilter<RollupWhitelistDisabledEvent>;

export type SanctionsCheckDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type SanctionsCheckDisabledEventFilter = TypedEventFilter<SanctionsCheckDisabledEvent>;

export type SanctionsListEvent = TypedEvent<[string], { sanctions: string }>;

export type SanctionsListEventFilter = TypedEventFilter<SanctionsListEvent>;

export type VerifierUpdateDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type VerifierUpdateDisabledEventFilter = TypedEventFilter<VerifierUpdateDisabledEvent>;

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
    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    addEnqueueWhitelist(
      _actor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    addRollupWhitelist(
      _roller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    assetType(overrides?: CallOverrides): Promise<[number]>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    disableRollupVerifier(
      _rollupSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    disableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    enableRollupVerifier(
      _rollupSize: BigNumberish,
      _rollupVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    enableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      _transactVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTreeCapacity(overrides?: CallOverrides): Promise<[BigNumber]>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    isRollupWhitelistDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    isVerifierUpdateDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    removeEnqueueWhitelist(
      _actor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    removeRollupWhitelist(
      _roller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    sanctionsList(overrides?: CallOverrides): Promise<[string]>;

    setMinRollupFee(
      _minRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRollupWhitelistDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setSanctionCheckDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setVerifierUpdateDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateSanctionsListAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  _pathIndices(
    _fullPath: BigNumberish,
    _rollupSize: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  addEnqueueWhitelist(
    _actor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  addRollupWhitelist(
    _roller: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  assetType(overrides?: CallOverrides): Promise<number>;

  changeOperator(
    _newOperator: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  disableRollupVerifier(
    _rollupSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  disableTransactVerifier(
    _numInputs: BigNumberish,
    _numOutputs: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  enableRollupVerifier(
    _rollupSize: BigNumberish,
    _rollupVerifier: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  enableTransactVerifier(
    _numInputs: BigNumberish,
    _numOutputs: BigNumberish,
    _transactVerifier: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  enqueue(
    _request: ICommitmentPool.CommitmentRequestStruct,
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getCommitmentIncludedCount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  getTreeCapacity(overrides?: CallOverrides): Promise<BigNumber>;

  isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  isRollupWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;

  isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  isVerifierUpdateDisabled(overrides?: CallOverrides): Promise<boolean>;

  removeEnqueueWhitelist(
    _actor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  removeRollupWhitelist(
    _roller: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  rollup(
    _request: ICommitmentPool.RollupRequestStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

  sanctionsList(overrides?: CallOverrides): Promise<string>;

  setMinRollupFee(
    _minRollupFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setRollupWhitelistDisabled(
    _state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setSanctionCheckDisabled(
    _state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setVerifierUpdateDisabled(
    _state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transact(
    _request: ICommitmentPool.TransactRequestStruct,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateSanctionsListAddress(
    _sanction: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    addEnqueueWhitelist(_actor: string, overrides?: CallOverrides): Promise<void>;

    addRollupWhitelist(_roller: string, overrides?: CallOverrides): Promise<void>;

    assetType(overrides?: CallOverrides): Promise<number>;

    changeOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>;

    disableRollupVerifier(_rollupSize: BigNumberish, overrides?: CallOverrides): Promise<void>;

    disableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    enableRollupVerifier(
      _rollupSize: BigNumberish,
      _rollupVerifier: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    enableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      _transactVerifier: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTreeCapacity(overrides?: CallOverrides): Promise<BigNumber>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    isRollupWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;

    isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    isVerifierUpdateDisabled(overrides?: CallOverrides): Promise<boolean>;

    removeEnqueueWhitelist(_actor: string, overrides?: CallOverrides): Promise<void>;

    removeRollupWhitelist(_roller: string, overrides?: CallOverrides): Promise<void>;

    rollup(_request: ICommitmentPool.RollupRequestStruct, overrides?: CallOverrides): Promise<void>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

    sanctionsList(overrides?: CallOverrides): Promise<string>;

    setMinRollupFee(_minRollupFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setRollupWhitelistDisabled(_state: boolean, overrides?: CallOverrides): Promise<void>;

    setSanctionCheckDisabled(_state: boolean, overrides?: CallOverrides): Promise<void>;

    setVerifierUpdateDisabled(_state: boolean, overrides?: CallOverrides): Promise<void>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    updateSanctionsListAddress(_sanction: string, overrides?: CallOverrides): Promise<void>;
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

    'RollupWhitelistDisabled(bool)'(state?: null): RollupWhitelistDisabledEventFilter;
    RollupWhitelistDisabled(state?: null): RollupWhitelistDisabledEventFilter;

    'SanctionsCheckDisabled(bool)'(state?: null): SanctionsCheckDisabledEventFilter;
    SanctionsCheckDisabled(state?: null): SanctionsCheckDisabledEventFilter;

    'SanctionsList(address)'(sanctions?: null): SanctionsListEventFilter;
    SanctionsList(sanctions?: null): SanctionsListEventFilter;

    'VerifierUpdateDisabled(bool)'(state?: null): VerifierUpdateDisabledEventFilter;
    VerifierUpdateDisabled(state?: null): VerifierUpdateDisabledEventFilter;
  };

  estimateGas: {
    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    addEnqueueWhitelist(
      _actor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    addRollupWhitelist(
      _roller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    disableRollupVerifier(
      _rollupSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    disableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    enableRollupVerifier(
      _rollupSize: BigNumberish,
      _rollupVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    enableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      _transactVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTreeCapacity(overrides?: CallOverrides): Promise<BigNumber>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    isRollupWhitelistDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    isSpentSerialNumber(_serialNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    isVerifierUpdateDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    removeEnqueueWhitelist(
      _actor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    removeRollupWhitelist(
      _roller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsList(overrides?: CallOverrides): Promise<BigNumber>;

    setMinRollupFee(
      _minRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setRollupWhitelistDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setSanctionCheckDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setVerifierUpdateDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateSanctionsListAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _pathIndices(
      _fullPath: BigNumberish,
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    addEnqueueWhitelist(
      _actor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    addRollupWhitelist(
      _roller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    disableRollupVerifier(
      _rollupSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    disableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    enableRollupVerifier(
      _rollupSize: BigNumberish,
      _rollupVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    enableTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      _transactVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    enqueue(
      _request: ICommitmentPool.CommitmentRequestStruct,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getCommitmentIncludedCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTreeCapacity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isHistoricCommitment(_commitment: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isKnownRoot(root: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isRollupWhitelistDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSpentSerialNumber(
      _serialNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isVerifierUpdateDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeEnqueueWhitelist(
      _actor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    removeRollupWhitelist(
      _roller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    rollup(
      _request: ICommitmentPool.RollupRequestStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinRollupFee(
      _minRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setRollupWhitelistDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setSanctionCheckDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setVerifierUpdateDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transact(
      _request: ICommitmentPool.TransactRequestStruct,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateSanctionsListAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
