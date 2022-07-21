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

export interface MystikoV2AxelarInterface extends utils.Interface {
  contractName: 'MystikoV2Axelar';
  functions: {
    'assetType()': FunctionFragment;
    'bridgeProxyAddress()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'changeOperator(address)': FunctionFragment;
    'changeServiceFee(uint256)': FunctionFragment;
    'changeServiceFeeCollector(address)': FunctionFragment;
    'changeServiceFeeDivider(uint256)': FunctionFragment;
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256))': FunctionFragment;
    'execute(bytes32,string,string,bytes)': FunctionFragment;
    'executeWithToken(bytes32,string,string,bytes,string,uint256)': FunctionFragment;
    'gateway()': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'getMinBridgeFee()': FunctionFragment;
    'getMinExecutorFee()': FunctionFragment;
    'getPeerMinExecutorFee()': FunctionFragment;
    'getPeerMinRollupFee()': FunctionFragment;
    'getServiceFee()': FunctionFragment;
    'getServiceFeeCollector()': FunctionFragment;
    'getServiceFeeDivider()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'peerChainId()': FunctionFragment;
    'peerChainName()': FunctionFragment;
    'peerContract()': FunctionFragment;
    'sanctionsCheckDisabled()': FunctionFragment;
    'sanctionsList()': FunctionFragment;
    'setAssociatedCommitmentPool(address)': FunctionFragment;
    'setAxelarGasReceiver(address)': FunctionFragment;
    'setBridgeProxyAddress(address)': FunctionFragment;
    'setDepositsDisabled(bool)': FunctionFragment;
    'setMinAmount(uint256)': FunctionFragment;
    'setMinBridgeFee(uint256)': FunctionFragment;
    'setMinExecutorFee(uint256)': FunctionFragment;
    'setPeerContract(uint64,string,address)': FunctionFragment;
    'setPeerMinExecutorFee(uint256)': FunctionFragment;
    'setPeerMinRollupFee(uint256)': FunctionFragment;
    'setSanctionCheckDisabled(bool)': FunctionFragment;
    'updateSanctionsListAddress(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeProxyAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
  encodeFunctionData(functionFragment: 'changeServiceFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'changeServiceFeeCollector', values: [string]): string;
  encodeFunctionData(functionFragment: 'changeServiceFeeDivider', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [IMystikoBridge.DepositRequestStruct]): string;
  encodeFunctionData(functionFragment: 'execute', values: [BytesLike, string, string, BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'executeWithToken',
    values: [BytesLike, string, string, BytesLike, string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'gateway', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinBridgeFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinExecutorFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPeerMinRollupFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getServiceFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getServiceFeeCollector', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getServiceFeeDivider', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerChainName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'peerContract', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sanctionsCheckDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sanctionsList', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setAssociatedCommitmentPool', values: [string]): string;
  encodeFunctionData(functionFragment: 'setAxelarGasReceiver', values: [string]): string;
  encodeFunctionData(functionFragment: 'setBridgeProxyAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'setDepositsDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'setMinAmount', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setMinBridgeFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setMinExecutorFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setPeerContract', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'setPeerMinExecutorFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setPeerMinRollupFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setSanctionCheckDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'updateSanctionsListAddress', values: [string]): string;

  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeProxyAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeServiceFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeServiceFeeCollector', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeServiceFeeDivider', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'executeWithToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'gateway', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getServiceFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getServiceFeeCollector', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getServiceFeeDivider', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerChainName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'peerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAxelarGasReceiver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBridgeProxyAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerMinExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPeerMinRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSanctionCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateSanctionsListAddress', data: BytesLike): Result;

  events: {
    'CallContractMessage(string,string)': EventFragment;
    'CommitmentCrossChain(uint256)': EventFragment;
    'DepositsDisabled(bool)': EventFragment;
    'MinAmount(uint256)': EventFragment;
    'MinBridgeFee(uint256)': EventFragment;
    'MinExecutorFee(uint256)': EventFragment;
    'OperatorChanged(address)': EventFragment;
    'PeerMinExecutorFee(uint256)': EventFragment;
    'PeerMinRollupFee(uint256)': EventFragment;
    'SanctionsCheckDisabled(bool)': EventFragment;
    'SanctionsList(address)': EventFragment;
    'ServiceFeeChanged(uint256)': EventFragment;
    'ServiceFeeCollectorChanged(address)': EventFragment;
    'ServiceFeeDividerChanged(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CallContractMessage'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CommitmentCrossChain'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DepositsDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinAmount'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinBridgeFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinExecutorFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OperatorChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PeerMinExecutorFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PeerMinRollupFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsCheckDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsList'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ServiceFeeChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ServiceFeeCollectorChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ServiceFeeDividerChanged'): EventFragment;
}

export type CallContractMessageEvent = TypedEvent<
  [string, string],
  { peerChainName: string; destinationAddress: string }
>;

export type CallContractMessageEventFilter = TypedEventFilter<CallContractMessageEvent>;

export type CommitmentCrossChainEvent = TypedEvent<[BigNumber], { commitment: BigNumber }>;

export type CommitmentCrossChainEventFilter = TypedEventFilter<CommitmentCrossChainEvent>;

export type DepositsDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type DepositsDisabledEventFilter = TypedEventFilter<DepositsDisabledEvent>;

export type MinAmountEvent = TypedEvent<[BigNumber], { minAmount: BigNumber }>;

export type MinAmountEventFilter = TypedEventFilter<MinAmountEvent>;

export type MinBridgeFeeEvent = TypedEvent<[BigNumber], { minBridgeFee: BigNumber }>;

export type MinBridgeFeeEventFilter = TypedEventFilter<MinBridgeFeeEvent>;

export type MinExecutorFeeEvent = TypedEvent<[BigNumber], { minExecutorFee: BigNumber }>;

export type MinExecutorFeeEventFilter = TypedEventFilter<MinExecutorFeeEvent>;

export type OperatorChangedEvent = TypedEvent<[string], { operator: string }>;

export type OperatorChangedEventFilter = TypedEventFilter<OperatorChangedEvent>;

export type PeerMinExecutorFeeEvent = TypedEvent<[BigNumber], { peerMinExecutorFee: BigNumber }>;

export type PeerMinExecutorFeeEventFilter = TypedEventFilter<PeerMinExecutorFeeEvent>;

export type PeerMinRollupFeeEvent = TypedEvent<[BigNumber], { peerMinRollupFee: BigNumber }>;

export type PeerMinRollupFeeEventFilter = TypedEventFilter<PeerMinRollupFeeEvent>;

export type SanctionsCheckDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type SanctionsCheckDisabledEventFilter = TypedEventFilter<SanctionsCheckDisabledEvent>;

export type SanctionsListEvent = TypedEvent<[string], { sanctions: string }>;

export type SanctionsListEventFilter = TypedEventFilter<SanctionsListEvent>;

export type ServiceFeeChangedEvent = TypedEvent<[BigNumber], { serviceFee: BigNumber }>;

export type ServiceFeeChangedEventFilter = TypedEventFilter<ServiceFeeChangedEvent>;

export type ServiceFeeCollectorChangedEvent = TypedEvent<[string], { servicer: string }>;

export type ServiceFeeCollectorChangedEventFilter = TypedEventFilter<ServiceFeeCollectorChangedEvent>;

export type ServiceFeeDividerChangedEvent = TypedEvent<[BigNumber], { serviceFeeDivider: BigNumber }>;

export type ServiceFeeDividerChangedEventFilter = TypedEventFilter<ServiceFeeDividerChangedEvent>;

export interface MystikoV2Axelar extends BaseContract {
  contractName: 'MystikoV2Axelar';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoV2AxelarInterface;

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

    bridgeProxyAddress(overrides?: CallOverrides): Promise<[string]>;

    bridgeType(overrides?: CallOverrides): Promise<[string]>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeServiceFee(
      _newServiceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeServiceFeeCollector(
      _newCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeServiceFeeDivider(
      _newServiceFeeDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
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

    getMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getServiceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getServiceFeeCollector(overrides?: CallOverrides): Promise<[string]>;

    getServiceFeeDivider(overrides?: CallOverrides): Promise<[BigNumber]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    peerChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    peerChainName(overrides?: CallOverrides): Promise<[string]>;

    peerContract(overrides?: CallOverrides): Promise<[string]>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    sanctionsList(overrides?: CallOverrides): Promise<[string]>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setAxelarGasReceiver(
      _gasReceiver: string,
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

    updateSanctionsListAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  assetType(overrides?: CallOverrides): Promise<number>;

  bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

  bridgeType(overrides?: CallOverrides): Promise<string>;

  changeOperator(
    _newOperator: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeServiceFee(
    _newServiceFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeServiceFeeCollector(
    _newCollector: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeServiceFeeDivider(
    _newServiceFeeDivider: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _request: IMystikoBridge.DepositRequestStruct,
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

  getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

  getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

  getServiceFee(overrides?: CallOverrides): Promise<BigNumber>;

  getServiceFeeCollector(overrides?: CallOverrides): Promise<string>;

  getServiceFeeDivider(overrides?: CallOverrides): Promise<BigNumber>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

  peerChainName(overrides?: CallOverrides): Promise<string>;

  peerContract(overrides?: CallOverrides): Promise<string>;

  sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

  sanctionsList(overrides?: CallOverrides): Promise<string>;

  setAssociatedCommitmentPool(
    _commitmentPoolAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setAxelarGasReceiver(
    _gasReceiver: string,
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

  updateSanctionsListAddress(
    _sanction: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    assetType(overrides?: CallOverrides): Promise<number>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<string>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    changeOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>;

    changeServiceFee(_newServiceFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    changeServiceFeeCollector(_newCollector: string, overrides?: CallOverrides): Promise<void>;

    changeServiceFeeDivider(_newServiceFeeDivider: BigNumberish, overrides?: CallOverrides): Promise<void>;

    deposit(_request: IMystikoBridge.DepositRequestStruct, overrides?: CallOverrides): Promise<void>;

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

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceFeeCollector(overrides?: CallOverrides): Promise<string>;

    getServiceFeeDivider(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<string>;

    peerContract(overrides?: CallOverrides): Promise<string>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

    sanctionsList(overrides?: CallOverrides): Promise<string>;

    setAssociatedCommitmentPool(_commitmentPoolAddress: string, overrides?: CallOverrides): Promise<void>;

    setAxelarGasReceiver(_gasReceiver: string, overrides?: CallOverrides): Promise<void>;

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

    updateSanctionsListAddress(_sanction: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'CallContractMessage(string,string)'(
      peerChainName?: null,
      destinationAddress?: null,
    ): CallContractMessageEventFilter;
    CallContractMessage(peerChainName?: null, destinationAddress?: null): CallContractMessageEventFilter;

    'CommitmentCrossChain(uint256)'(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;
    CommitmentCrossChain(commitment?: BigNumberish | null): CommitmentCrossChainEventFilter;

    'DepositsDisabled(bool)'(state?: null): DepositsDisabledEventFilter;
    DepositsDisabled(state?: null): DepositsDisabledEventFilter;

    'MinAmount(uint256)'(minAmount?: null): MinAmountEventFilter;
    MinAmount(minAmount?: null): MinAmountEventFilter;

    'MinBridgeFee(uint256)'(minBridgeFee?: null): MinBridgeFeeEventFilter;
    MinBridgeFee(minBridgeFee?: null): MinBridgeFeeEventFilter;

    'MinExecutorFee(uint256)'(minExecutorFee?: null): MinExecutorFeeEventFilter;
    MinExecutorFee(minExecutorFee?: null): MinExecutorFeeEventFilter;

    'OperatorChanged(address)'(operator?: null): OperatorChangedEventFilter;
    OperatorChanged(operator?: null): OperatorChangedEventFilter;

    'PeerMinExecutorFee(uint256)'(peerMinExecutorFee?: null): PeerMinExecutorFeeEventFilter;
    PeerMinExecutorFee(peerMinExecutorFee?: null): PeerMinExecutorFeeEventFilter;

    'PeerMinRollupFee(uint256)'(peerMinRollupFee?: null): PeerMinRollupFeeEventFilter;
    PeerMinRollupFee(peerMinRollupFee?: null): PeerMinRollupFeeEventFilter;

    'SanctionsCheckDisabled(bool)'(state?: null): SanctionsCheckDisabledEventFilter;
    SanctionsCheckDisabled(state?: null): SanctionsCheckDisabledEventFilter;

    'SanctionsList(address)'(sanctions?: null): SanctionsListEventFilter;
    SanctionsList(sanctions?: null): SanctionsListEventFilter;

    'ServiceFeeChanged(uint256)'(serviceFee?: null): ServiceFeeChangedEventFilter;
    ServiceFeeChanged(serviceFee?: null): ServiceFeeChangedEventFilter;

    'ServiceFeeCollectorChanged(address)'(servicer?: null): ServiceFeeCollectorChangedEventFilter;
    ServiceFeeCollectorChanged(servicer?: null): ServiceFeeCollectorChangedEventFilter;

    'ServiceFeeDividerChanged(uint256)'(serviceFeeDivider?: null): ServiceFeeDividerChangedEventFilter;
    ServiceFeeDividerChanged(serviceFeeDivider?: null): ServiceFeeDividerChangedEventFilter;
  };

  estimateGas: {
    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeServiceFee(
      _newServiceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeServiceFeeCollector(
      _newCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeServiceFeeDivider(
      _newServiceFeeDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
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

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceFeeCollector(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceFeeDivider(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    peerChainName(overrides?: CallOverrides): Promise<BigNumber>;

    peerContract(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsList(overrides?: CallOverrides): Promise<BigNumber>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setAxelarGasReceiver(
      _gasReceiver: string,
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

    updateSanctionsListAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeProxyAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeServiceFee(
      _newServiceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeServiceFeeCollector(
      _newCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeServiceFeeDivider(
      _newServiceFeeDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
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

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinBridgeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinExecutorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPeerMinRollupFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getServiceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getServiceFeeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getServiceFeeDivider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerChainName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peerContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setAxelarGasReceiver(
      _gasReceiver: string,
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

    updateSanctionsListAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
