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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace IMystikoBridge {
  export type DepositRequestStruct = {
    amount: BigNumberish;
    commitment: BigNumberish;
    hashK: BigNumberish;
    randomS: BigNumberish;
    encryptedNote: BytesLike;
    bridgeFee: BigNumberish;
    executorFee: BigNumberish;
    rollupFee: BigNumberish;
  };

  export type DepositRequestStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
  ] & {
    amount: BigNumber;
    commitment: BigNumber;
    hashK: BigNumber;
    randomS: BigNumber;
    encryptedNote: string;
    bridgeFee: BigNumber;
    executorFee: BigNumber;
    rollupFee: BigNumber;
  };
}

export interface MystikoV2TBridgeInterface extends utils.Interface {
  contractName: 'MystikoV2TBridge';
  functions: {
    'assetType()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'changeOperator(address)': FunctionFragment;
    'crossChainSyncTx(uint64,address,bytes,address)': FunctionFragment;
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256))': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'getMinBridgeFee()': FunctionFragment;
    'getMinExecutorFee()': FunctionFragment;
    'getPeerMinExecutorFee()': FunctionFragment;
    'getPeerMinRollupFee()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'sanctionsCheckDisabled()': FunctionFragment;
    'sanctionsList()': FunctionFragment;
    'setAssociatedCommitmentPool(address)': FunctionFragment;
    'setBridgeProxyAddress(address)': FunctionFragment;
    'setDepositsDisabled(bool)': FunctionFragment;
    'setMinAmount(uint256)': FunctionFragment;
    'setMinBridgeFee(uint256)': FunctionFragment;
    'setMinExecutorFee(uint256)': FunctionFragment;
    'setPeerContract(uint64,string,address)': FunctionFragment;
    'setPeerMinExecutorFee(uint256)': FunctionFragment;
    'setPeerMinRollupFee(uint256)': FunctionFragment;
    'setSanctionCheckDisabled(bool)': FunctionFragment;
    'updateSanctionContractAddress(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'crossChainSyncTx',
    values: [BigNumberish, string, BytesLike, string],
  ): string;
  encodeFunctionData(functionFragment: 'deposit', values: [IMystikoBridge.DepositRequestStruct]): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sanctionsCheckDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sanctionsList', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setAssociatedCommitmentPool', values: [string]): string;
  encodeFunctionData(functionFragment: 'setBridgeProxyAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'setDepositsDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'setMinAmount', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setMinBridgeFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setMinExecutorFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setPeerContract', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'setPeerMinExecutorFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setPeerMinRollupFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setSanctionCheckDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'updateSanctionContractAddress', values: [string]): string;

  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crossChainSyncTx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBridgeProxyAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSanctionCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateSanctionContractAddress', data: BytesLike): Result;

  events: {
    'CommitmentCrossChain(uint256)': EventFragment;
    'SanctionsCheckDisabled(bool)': EventFragment;
    'SanctionsList(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CommitmentCrossChain'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsCheckDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsList'): EventFragment;
}

export type CommitmentCrossChainEvent = TypedEvent<[BigNumber], { commitment: BigNumber }>;

export type CommitmentCrossChainEventFilter = TypedEventFilter<CommitmentCrossChainEvent>;

export type SanctionsCheckDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type SanctionsCheckDisabledEventFilter = TypedEventFilter<SanctionsCheckDisabledEvent>;

export type SanctionsListEvent = TypedEvent<[string], { sanctions: string }>;

export type SanctionsListEventFilter = TypedEventFilter<SanctionsListEvent>;

export interface MystikoV2TBridge extends BaseContract {
  contractName: 'MystikoV2TBridge';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoV2TBridgeInterface;

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
    assetType(overrides?: CallOverrides): Promise<[number]>;

    bridgeType(overrides?: CallOverrides): Promise<[string]>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<[string]>;

    getMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    sanctionsList(overrides?: CallOverrides): Promise<[string]>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setBridgeProxyAddress(
      _bridgeProxyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setDepositsDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinAmount(
      _minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinBridgeFee(
      _minBridgeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinExecutorFee(
      _minExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPeerContract(
      _peerChainId: BigNumberish,
      _peerChainName: string,
      _peerContract: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPeerMinExecutorFee(
      _peerMinExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPeerMinRollupFee(
      _peerMinRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setSanctionCheckDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateSanctionContractAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  assetType(overrides?: CallOverrides): Promise<number>;

  bridgeType(overrides?: CallOverrides): Promise<string>;

  changeOperator(
    _newOperator: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  crossChainSyncTx(
    _fromChainId: BigNumberish,
    _fromContract: string,
    _message: BytesLike,
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _request: IMystikoBridge.DepositRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

  getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

  sanctionsList(overrides?: CallOverrides): Promise<string>;

  setAssociatedCommitmentPool(
    _commitmentPoolAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setBridgeProxyAddress(
    _bridgeProxyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setDepositsDisabled(
    _state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinAmount(
    _minAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinBridgeFee(
    _minBridgeFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinExecutorFee(
    _minExecutorFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPeerContract(
    _peerChainId: BigNumberish,
    _peerChainName: string,
    _peerContract: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPeerMinExecutorFee(
    _peerMinExecutorFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPeerMinRollupFee(
    _peerMinRollupFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setSanctionCheckDisabled(
    _state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateSanctionContractAddress(
    _sanction: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    assetType(overrides?: CallOverrides): Promise<number>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    changeOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    deposit(_request: IMystikoBridge.DepositRequestStruct, overrides?: CallOverrides): Promise<void>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

    sanctionsList(overrides?: CallOverrides): Promise<string>;

    setAssociatedCommitmentPool(_commitmentPoolAddress: string, overrides?: CallOverrides): Promise<void>;

    setBridgeProxyAddress(_bridgeProxyAddress: string, overrides?: CallOverrides): Promise<void>;

    setDepositsDisabled(_state: boolean, overrides?: CallOverrides): Promise<void>;

    setMinAmount(_minAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setMinBridgeFee(_minBridgeFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setMinExecutorFee(_minExecutorFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPeerContract(
      _peerChainId: BigNumberish,
      _peerChainName: string,
      _peerContract: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setPeerMinExecutorFee(_peerMinExecutorFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPeerMinRollupFee(_peerMinRollupFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setSanctionCheckDisabled(_state: boolean, overrides?: CallOverrides): Promise<void>;

    updateSanctionContractAddress(_sanction: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'CommitmentCrossChain(uint256)'(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;
    CommitmentCrossChain(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;

    'SanctionsCheckDisabled(bool)'(state?: null): SanctionsCheckDisabledEventFilter;
    SanctionsCheckDisabled(state?: null): SanctionsCheckDisabledEventFilter;

    'SanctionsList(address)'(sanctions?: null): SanctionsListEventFilter;
    SanctionsList(sanctions?: null): SanctionsListEventFilter;
  };

  estimateGas: {
    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsList(overrides?: CallOverrides): Promise<BigNumber>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setBridgeProxyAddress(
      _bridgeProxyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setDepositsDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMinAmount(
      _minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMinBridgeFee(
      _minBridgeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMinExecutorFee(
      _minExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setPeerContract(
      _peerChainId: BigNumberish,
      _peerChainName: string,
      _peerContract: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setPeerMinExecutorFee(
      _peerMinExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setPeerMinRollupFee(
      _peerMinRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setSanctionCheckDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateSanctionContractAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setBridgeProxyAddress(
      _bridgeProxyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setDepositsDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinAmount(
      _minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinBridgeFee(
      _minBridgeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinExecutorFee(
      _minExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPeerContract(
      _peerChainId: BigNumberish,
      _peerChainName: string,
      _peerContract: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPeerMinExecutorFee(
      _peerMinExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPeerMinRollupFee(
      _peerMinRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setSanctionCheckDisabled(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateSanctionContractAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
