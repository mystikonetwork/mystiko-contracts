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
  export type LocalConfigStruct = {
    minAmount: BigNumberish;
    maxAmount: BigNumberish;
    minBridgeFee: BigNumberish;
  };

  export type LocalConfigStructOutput = [BigNumber, BigNumber, BigNumber] & {
    minAmount: BigNumber;
    maxAmount: BigNumber;
    minBridgeFee: BigNumber;
  };

  export type PeerConfigStruct = {
    peerMinExecutorFee: BigNumberish;
    peerMinRollupFee: BigNumberish;
  };

  export type PeerConfigStructOutput = [BigNumber, BigNumber] & {
    peerMinExecutorFee: BigNumber;
    peerMinRollupFee: BigNumber;
  };

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

  export type PeerContractStruct = {
    peerChainId: BigNumberish;
    peerChainName: string;
    peerContract: string;
  };

  export type PeerContractStructOutput = [BigNumber, string, string] & {
    peerChainId: BigNumber;
    peerChainName: string;
    peerContract: string;
  };
}

export interface MystikoV2AxelarMainInterface extends utils.Interface {
  contractName: 'MystikoV2AxelarMain';
  functions: {
    'assetAddress()': FunctionFragment;
    'assetType()': FunctionFragment;
    'bridgeProxyAddress()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'defaultMaxAmount()': FunctionFragment;
    'defaultMinAmount()': FunctionFragment;
    'defaultMinBridgeFee()': FunctionFragment;
    'defaultPeerMinExecutorFee()': FunctionFragment;
    'defaultPeerMinRollupFee()': FunctionFragment;
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256))': FunctionFragment;
    'depositWithCertificate((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256),uint256,bytes)': FunctionFragment;
    'execute(bytes32,string,string,bytes)': FunctionFragment;
    'executeWithToken(bytes32,string,string,bytes,string,uint256)': FunctionFragment;
    'gateway()': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getMaxAmount()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'getMinBridgeFee()': FunctionFragment;
    'getPeerMinExecutorFee()': FunctionFragment;
    'getPeerMinRollupFee()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'peerChainId()': FunctionFragment;
    'peerChainName()': FunctionFragment;
    'peerContract()': FunctionFragment;
    'setPeerContract((uint64,string,address))': FunctionFragment;
    'settingsCenter()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeProxyAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMaxAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultPeerMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposit', values: [IMystikoBridge.DepositRequestStruct]): string;
  encodeFunctionData(
    functionFragment: 'depositWithCertificate',
    values: [IMystikoBridge.DepositRequestStruct, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'execute', values: [BytesLike, string, string, BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'executeWithToken',
    values: [BytesLike, string, string, BytesLike, string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'gateway', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMaxAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerContract', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setPeerContract',
    values: [IMystikoBridge.PeerContractStruct],
  ): string;
  encodeFunctionData(functionFragment: 'settingsCenter', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'assetAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeProxyAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMaxAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositWithCertificate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'executeWithToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'gateway', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMaxAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'settingsCenter', data: BytesLike): Result;

  events: {
    'CallContractMessage(string,string)': EventFragment;
    'CommitmentCrossChain(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CallContractMessage'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommitmentCrossChain'): EventFragment;
}

export type CallContractMessageEvent = TypedEvent<
  [string, string],
  { peerChainName: string; destinationAddress: string }
>;

export type CallContractMessageEventFilter = TypedEventFilter<CallContractMessageEvent>;

export type CommitmentCrossChainEvent = TypedEvent<[BigNumber], { commitment: BigNumber }>;

export type CommitmentCrossChainEventFilter = TypedEventFilter<CommitmentCrossChainEvent>;

export interface MystikoV2AxelarMain extends BaseContract {
  contractName: 'MystikoV2AxelarMain';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoV2AxelarMainInterface;

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

    assetType(overrides?: CallOverrides): Promise<[number]>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<[string]>;

    bridgeType(overrides?: CallOverrides): Promise<[string]>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    depositWithCertificate(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    execute(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeWithToken(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      tokenSymbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    gateway(overrides?: CallOverrides): Promise<[string]>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<[string]>;

    getMaxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    peerChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    peerChainName(overrides?: CallOverrides): Promise<[string]>;

    peerContract(overrides?: CallOverrides): Promise<[string]>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    settingsCenter(overrides?: CallOverrides): Promise<[string]>;
  };

  assetAddress(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<number>;

  bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

  bridgeType(overrides?: CallOverrides): Promise<string>;

  defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _request: IMystikoBridge.DepositRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  depositWithCertificate(
    _request: IMystikoBridge.DepositRequestStruct,
    _certificateDeadline: BigNumberish,
    _certificateSignature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  execute(
    commandId: BytesLike,
    sourceChain: string,
    sourceAddress: string,
    payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeWithToken(
    commandId: BytesLike,
    sourceChain: string,
    sourceAddress: string,
    payload: BytesLike,
    tokenSymbol: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  gateway(overrides?: CallOverrides): Promise<string>;

  getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

  getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

  peerChainName(overrides?: CallOverrides): Promise<string>;

  peerContract(overrides?: CallOverrides): Promise<string>;

  setPeerContract(
    _peerContract: IMystikoBridge.PeerContractStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  settingsCenter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    assetAddress(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<number>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_request: IMystikoBridge.DepositRequestStruct, overrides?: CallOverrides): Promise<void>;

    depositWithCertificate(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    execute(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    executeWithToken(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      tokenSymbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    gateway(overrides?: CallOverrides): Promise<string>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<string>;

    peerContract(overrides?: CallOverrides): Promise<string>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    settingsCenter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'CallContractMessage(string,string)'(
      peerChainName?: null,
      destinationAddress?: null,
    ): CallContractMessageEventFilter;
    CallContractMessage(peerChainName?: null, destinationAddress?: null): CallContractMessageEventFilter;

    'CommitmentCrossChain(uint256)'(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;
    CommitmentCrossChain(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;
  };

  estimateGas: {
    assetAddress(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    depositWithCertificate(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    execute(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeWithToken(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      tokenSymbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    gateway(overrides?: CallOverrides): Promise<BigNumber>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<BigNumber>;

    peerContract(overrides?: CallOverrides): Promise<BigNumber>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    settingsCenter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    assetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    depositWithCertificate(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    execute(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeWithToken(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      tokenSymbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    settingsCenter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
