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
  export type BridgeLocalConfigStruct = {
    minAmount: BigNumberish;
    maxAmount: BigNumberish;
    minBridgeFee: BigNumberish;
    bridgeGasLimit: BigNumberish;
  };

  export type BridgeLocalConfigStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
    minAmount: BigNumber;
    maxAmount: BigNumber;
    minBridgeFee: BigNumber;
    bridgeGasLimit: BigNumber;
  };

  export type BridgePeerConfigStruct = {
    peerMinExecutorFee: BigNumberish;
    peerMinRollupFee: BigNumberish;
  };

  export type BridgePeerConfigStructOutput = [BigNumber, BigNumber] & {
    peerMinExecutorFee: BigNumber;
    peerMinRollupFee: BigNumber;
  };

  export type BridgeDepositRequestStruct = {
    amount: BigNumberish;
    commitment: BigNumberish;
    hashK: BigNumberish;
    randomS: BigNumberish;
    encryptedNote: BytesLike;
    bridgeFee: BigNumberish;
    executorFee: BigNumberish;
    rollupFee: BigNumberish;
  };

  export type BridgeDepositRequestStructOutput = [
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

  export type BridgePeerContractStruct = {
    peerChainId: BigNumberish;
    peerChainName: string;
    peerContract: string;
  };

  export type BridgePeerContractStructOutput = [BigNumber, string, string] & {
    peerChainId: BigNumber;
    peerChainName: string;
    peerContract: string;
  };
}

export interface MystikoV2TBridgeERC20Interface extends utils.Interface {
  contractName: 'MystikoV2TBridgeERC20';
  functions: {
    'assetAddress()': FunctionFragment;
    'assetDecimals()': FunctionFragment;
    'assetName()': FunctionFragment;
    'assetSymbol()': FunctionFragment;
    'assetType()': FunctionFragment;
    'bridgeProxyAddress()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'certDeposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256),uint256,bytes)': FunctionFragment;
    'crossChainSyncTx(uint64,address,bytes,address)': FunctionFragment;
    'defaultBridgeGasLimit()': FunctionFragment;
    'defaultMaxAmount()': FunctionFragment;
    'defaultMinAmount()': FunctionFragment;
    'defaultMinBridgeFee()': FunctionFragment;
    'defaultPeerMinExecutorFee()': FunctionFragment;
    'defaultPeerMinRollupFee()': FunctionFragment;
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256))': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getBridgeGasLimit()': FunctionFragment;
    'getMaxAmount()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'getMinBridgeFee()': FunctionFragment;
    'getMinExecutorFee()': FunctionFragment;
    'getPeerMinRollupFee()': FunctionFragment;
    'isCertificateCheckEnabled()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'isPeerContractSet()': FunctionFragment;
    'peerChainId()': FunctionFragment;
    'peerChainName()': FunctionFragment;
    'peerContract()': FunctionFragment;
    'setPeerContract((uint64,string,address))': FunctionFragment;
    'settings()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetDecimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetSymbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeProxyAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'certDeposit',
    values: [IMystikoBridge.BridgeDepositRequestStruct, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'crossChainSyncTx',
    values: [BigNumberish, string, BytesLike, string],
  ): string;
  encodeFunctionData(functionFragment: 'defaultBridgeGasLimit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMaxAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultPeerMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [IMystikoBridge.BridgeDepositRequestStruct],
  ): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getBridgeGasLimit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMaxAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isCertificateCheckEnabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isPeerContractSet', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerContract', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setPeerContract',
    values: [IMystikoBridge.BridgePeerContractStruct],
  ): string;
  encodeFunctionData(functionFragment: 'settings', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'assetAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetDecimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetSymbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeProxyAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'certDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crossChainSyncTx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultBridgeGasLimit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMaxAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBridgeGasLimit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMaxAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isCertificateCheckEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isPeerContractSet', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'settings', data: BytesLike): Result;

  events: {
    'CommitmentCrossChain(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CommitmentCrossChain'): EventFragment;
}

export type CommitmentCrossChainEvent = TypedEvent<[BigNumber], { commitment: BigNumber }>;

export type CommitmentCrossChainEventFilter = TypedEventFilter<CommitmentCrossChainEvent>;

export interface MystikoV2TBridgeERC20 extends BaseContract {
  contractName: 'MystikoV2TBridgeERC20';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoV2TBridgeERC20Interface;

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
    assetAddress(overrides?: CallOverrides): Promise<[string]>;

    assetDecimals(overrides?: CallOverrides): Promise<[number]>;

    assetName(overrides?: CallOverrides): Promise<[string]>;

    assetSymbol(overrides?: CallOverrides): Promise<[string]>;

    assetType(overrides?: CallOverrides): Promise<[number]>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<[string]>;

    bridgeType(overrides?: CallOverrides): Promise<[string]>;

    certDeposit(
      _request: IMystikoBridge.BridgeDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    defaultBridgeGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      arg0: IMystikoBridge.BridgeDepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<[string]>;

    getBridgeGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    isPeerContractSet(overrides?: CallOverrides): Promise<[boolean]>;

    peerChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    peerChainName(overrides?: CallOverrides): Promise<[string]>;

    peerContract(overrides?: CallOverrides): Promise<[string]>;

    setPeerContract(
      _peerContract: IMystikoBridge.BridgePeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    settings(overrides?: CallOverrides): Promise<[string]>;
  };

  assetAddress(overrides?: CallOverrides): Promise<string>;

  assetDecimals(overrides?: CallOverrides): Promise<number>;

  assetName(overrides?: CallOverrides): Promise<string>;

  assetSymbol(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<number>;

  bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

  bridgeType(overrides?: CallOverrides): Promise<string>;

  certDeposit(
    _request: IMystikoBridge.BridgeDepositRequestStruct,
    _certificateDeadline: BigNumberish,
    _certificateSignature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  crossChainSyncTx(
    _fromChainId: BigNumberish,
    _fromContract: string,
    _message: BytesLike,
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  defaultBridgeGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

  defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    arg0: IMystikoBridge.BridgeDepositRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

  getBridgeGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  isCertificateCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  isPeerContractSet(overrides?: CallOverrides): Promise<boolean>;

  peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

  peerChainName(overrides?: CallOverrides): Promise<string>;

  peerContract(overrides?: CallOverrides): Promise<string>;

  setPeerContract(
    _peerContract: IMystikoBridge.BridgePeerContractStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  settings(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    assetAddress(overrides?: CallOverrides): Promise<string>;

    assetDecimals(overrides?: CallOverrides): Promise<number>;

    assetName(overrides?: CallOverrides): Promise<string>;

    assetSymbol(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<number>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    certDeposit(
      _request: IMystikoBridge.BridgeDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    defaultBridgeGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(arg0: IMystikoBridge.BridgeDepositRequestStruct, overrides?: CallOverrides): Promise<void>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

    getBridgeGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    isPeerContractSet(overrides?: CallOverrides): Promise<boolean>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<string>;

    peerContract(overrides?: CallOverrides): Promise<string>;

    setPeerContract(
      _peerContract: IMystikoBridge.BridgePeerContractStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    settings(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'CommitmentCrossChain(uint256)'(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;
    CommitmentCrossChain(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;
  };

  estimateGas: {
    assetAddress(overrides?: CallOverrides): Promise<BigNumber>;

    assetDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    assetName(overrides?: CallOverrides): Promise<BigNumber>;

    assetSymbol(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    certDeposit(
      _request: IMystikoBridge.BridgeDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    defaultBridgeGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      arg0: IMystikoBridge.BridgeDepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<BigNumber>;

    getBridgeGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    isPeerContractSet(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<BigNumber>;

    peerContract(overrides?: CallOverrides): Promise<BigNumber>;

    setPeerContract(
      _peerContract: IMystikoBridge.BridgePeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    settings(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    assetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetSymbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    certDeposit(
      _request: IMystikoBridge.BridgeDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    crossChainSyncTx(
      _fromChainId: BigNumberish,
      _fromContract: string,
      _message: BytesLike,
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    defaultBridgeGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      arg0: IMystikoBridge.BridgeDepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBridgeGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPeerContractSet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPeerContract(
      _peerContract: IMystikoBridge.BridgePeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    settings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
