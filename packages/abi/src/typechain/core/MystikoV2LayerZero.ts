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

export interface MystikoV2LayerZeroInterface extends utils.Interface {
  contractName: 'MystikoV2LayerZero';
  functions: {
    'assetAddress()': FunctionFragment;
    'assetType()': FunctionFragment;
    'bridgeProxyAddress()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'certDeposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256),uint256,bytes)': FunctionFragment;
    'defaultMaxAmount()': FunctionFragment;
    'defaultMinAmount()': FunctionFragment;
    'defaultMinBridgeFee()': FunctionFragment;
    'defaultPeerMinExecutorFee()': FunctionFragment;
    'defaultPeerMinRollupFee()': FunctionFragment;
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256))': FunctionFragment;
    'failedMessages(uint16,bytes,uint64)': FunctionFragment;
    'forceResumeReceive(uint16,bytes)': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getConfig(uint16,uint16,address,uint256)': FunctionFragment;
    'getMaxAmount()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'getMinBridgeFee()': FunctionFragment;
    'getPeerMinExecutorFee()': FunctionFragment;
    'getPeerMinRollupFee()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'isTrustedRemote(uint16,bytes)': FunctionFragment;
    'localLayerZeroChainId()': FunctionFragment;
    'lzEndpoint()': FunctionFragment;
    'lzReceive(uint16,bytes,uint64,bytes)': FunctionFragment;
    'nonblockingLzReceive(uint16,bytes,uint64,bytes)': FunctionFragment;
    'owner()': FunctionFragment;
    'peerChainId()': FunctionFragment;
    'peerChainName()': FunctionFragment;
    'peerContract()': FunctionFragment;
    'peerLayerZeroChainId()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'retryMessage(uint16,bytes,uint64,bytes)': FunctionFragment;
    'setConfig(uint16,uint16,uint256,bytes)': FunctionFragment;
    'setEndpoint(uint16,address)': FunctionFragment;
    'setPeerContract((uint64,string,address))': FunctionFragment;
    'setReceiveVersion(uint16)': FunctionFragment;
    'setSendVersion(uint16)': FunctionFragment;
    'setTrustedRemote(uint16,bytes)': FunctionFragment;
    'settingsCenter()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'trustedRemoteLookup(uint16)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeProxyAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'certDeposit',
    values: [IMystikoBridge.DepositRequestStruct, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'defaultMaxAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultPeerMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposit', values: [IMystikoBridge.DepositRequestStruct]): string;
  encodeFunctionData(
    functionFragment: 'failedMessages',
    values: [BigNumberish, BytesLike, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'forceResumeReceive', values: [BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getConfig',
    values: [BigNumberish, BigNumberish, string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'getMaxAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isTrustedRemote', values: [BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: 'localLayerZeroChainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lzEndpoint', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'lzReceive',
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'nonblockingLzReceive',
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerContract', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerLayerZeroChainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'retryMessage',
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'setConfig',
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'setEndpoint', values: [BigNumberish, string]): string;
  encodeFunctionData(
    functionFragment: 'setPeerContract',
    values: [IMystikoBridge.PeerContractStruct],
  ): string;
  encodeFunctionData(functionFragment: 'setReceiveVersion', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setSendVersion', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setTrustedRemote', values: [BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: 'settingsCenter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'trustedRemoteLookup', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'assetAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeProxyAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'certDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMaxAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'failedMessages', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'forceResumeReceive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getConfig', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMaxAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isTrustedRemote', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'localLayerZeroChainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lzEndpoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lzReceive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nonblockingLzReceive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerLayerZeroChainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'retryMessage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setConfig', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setEndpoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setReceiveVersion', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSendVersion', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTrustedRemote', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'settingsCenter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'trustedRemoteLookup', data: BytesLike): Result;

  events: {
    'CommitmentCrossChain(uint256)': EventFragment;
    'MessageFailed(uint16,bytes,uint64,bytes)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'SetTrustedRemote(uint16,bytes)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CommitmentCrossChain'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MessageFailed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetTrustedRemote'): EventFragment;
}

export type CommitmentCrossChainEvent = TypedEvent<[BigNumber], { commitment: BigNumber }>;

export type CommitmentCrossChainEventFilter = TypedEventFilter<CommitmentCrossChainEvent>;

export type MessageFailedEvent = TypedEvent<
  [number, string, BigNumber, string],
  {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
  }
>;

export type MessageFailedEventFilter = TypedEventFilter<MessageFailedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type SetTrustedRemoteEvent = TypedEvent<
  [number, string],
  { _srcChainId: number; _srcAddress: string }
>;

export type SetTrustedRemoteEventFilter = TypedEventFilter<SetTrustedRemoteEvent>;

export interface MystikoV2LayerZero extends BaseContract {
  contractName: 'MystikoV2LayerZero';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoV2LayerZeroInterface;

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

    certDeposit(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<[string]>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    getMaxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    localLayerZeroChainId(overrides?: CallOverrides): Promise<[number]>;

    lzEndpoint(overrides?: CallOverrides): Promise<[string]>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    peerChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    peerChainName(overrides?: CallOverrides): Promise<[string]>;

    peerContract(overrides?: CallOverrides): Promise<[string]>;

    peerLayerZeroChainId(overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setEndpoint(
      _lzChainId: BigNumberish,
      _lzEndpoint: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setTrustedRemote(
      _peerLayerZeroChainId: BigNumberish,
      _peerAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    settingsCenter(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    trustedRemoteLookup(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  assetAddress(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<number>;

  bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

  bridgeType(overrides?: CallOverrides): Promise<string>;

  certDeposit(
    _request: IMystikoBridge.DepositRequestStruct,
    _certificateDeadline: BigNumberish,
    _certificateSignature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _request: IMystikoBridge.DepositRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  failedMessages(
    arg0: BigNumberish,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  forceResumeReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

  getConfig(
    _version: BigNumberish,
    _chainId: BigNumberish,
    arg2: string,
    _configType: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  isTrustedRemote(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  localLayerZeroChainId(overrides?: CallOverrides): Promise<number>;

  lzEndpoint(overrides?: CallOverrides): Promise<string>;

  lzReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  nonblockingLzReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

  peerChainName(overrides?: CallOverrides): Promise<string>;

  peerContract(overrides?: CallOverrides): Promise<string>;

  peerLayerZeroChainId(overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  retryMessage(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setConfig(
    _version: BigNumberish,
    _chainId: BigNumberish,
    _configType: BigNumberish,
    _config: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setEndpoint(
    _lzChainId: BigNumberish,
    _lzEndpoint: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPeerContract(
    _peerContract: IMystikoBridge.PeerContractStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setReceiveVersion(
    _version: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setSendVersion(
    _version: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setTrustedRemote(
    _peerLayerZeroChainId: BigNumberish,
    _peerAddress: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  settingsCenter(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  trustedRemoteLookup(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    assetAddress(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<number>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    certDeposit(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_request: IMystikoBridge.DepositRequestStruct, overrides?: CallOverrides): Promise<void>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    localLayerZeroChainId(overrides?: CallOverrides): Promise<number>;

    lzEndpoint(overrides?: CallOverrides): Promise<string>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<string>;

    peerContract(overrides?: CallOverrides): Promise<string>;

    peerLayerZeroChainId(overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    setEndpoint(_lzChainId: BigNumberish, _lzEndpoint: string, overrides?: CallOverrides): Promise<void>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    setReceiveVersion(_version: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setSendVersion(_version: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setTrustedRemote(
      _peerLayerZeroChainId: BigNumberish,
      _peerAddress: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    settingsCenter(overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    trustedRemoteLookup(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'CommitmentCrossChain(uint256)'(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;
    CommitmentCrossChain(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;

    'MessageFailed(uint16,bytes,uint64,bytes)'(
      _srcChainId?: null,
      _srcAddress?: null,
      _nonce?: null,
      _payload?: null,
    ): MessageFailedEventFilter;
    MessageFailed(
      _srcChainId?: null,
      _srcAddress?: null,
      _nonce?: null,
      _payload?: null,
    ): MessageFailedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;

    'SetTrustedRemote(uint16,bytes)'(_srcChainId?: null, _srcAddress?: null): SetTrustedRemoteEventFilter;
    SetTrustedRemote(_srcChainId?: null, _srcAddress?: null): SetTrustedRemoteEventFilter;
  };

  estimateGas: {
    assetAddress(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    certDeposit(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    localLayerZeroChainId(overrides?: CallOverrides): Promise<BigNumber>;

    lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<BigNumber>;

    peerContract(overrides?: CallOverrides): Promise<BigNumber>;

    peerLayerZeroChainId(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setEndpoint(
      _lzChainId: BigNumberish,
      _lzEndpoint: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setTrustedRemote(
      _peerLayerZeroChainId: BigNumberish,
      _peerAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    settingsCenter(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    trustedRemoteLookup(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    assetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    certDeposit(
      _request: IMystikoBridge.DepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    defaultMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultPeerMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: string,
      _configType: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTrustedRemote(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    localLayerZeroChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    nonblockingLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerLayerZeroChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setEndpoint(
      _lzChainId: BigNumberish,
      _lzEndpoint: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPeerContract(
      _peerContract: IMystikoBridge.PeerContractStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setTrustedRemote(
      _peerLayerZeroChainId: BigNumberish,
      _peerAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    settingsCenter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    trustedRemoteLookup(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
