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

export declare namespace IMystikoLoop {
  export type DepositRequestStruct = {
    amount: BigNumberish;
    commitment: BigNumberish;
    hashK: BigNumberish;
    randomS: BigNumberish;
    encryptedNote: BytesLike;
    rollupFee: BigNumberish;
  };

  export type DepositRequestStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, string, BigNumber] & {
    amount: BigNumber;
    commitment: BigNumber;
    hashK: BigNumber;
    randomS: BigNumber;
    encryptedNote: string;
    rollupFee: BigNumber;
  };
}

export interface MystikoV2LoopInterface extends utils.Interface {
  contractName: 'MystikoV2Loop';
  functions: {
    'assetType()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'changeOperator(address)': FunctionFragment;
    'changeServiceFee(uint256,uint256)': FunctionFragment;
    'changeServiceFeeCollector(address)': FunctionFragment;
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256))': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'sanctionsCheckDisabled()': FunctionFragment;
    'sanctionsList()': FunctionFragment;
    'setAssociatedCommitmentPool(address)': FunctionFragment;
    'setDepositsDisabled(bool)': FunctionFragment;
    'setMinAmount(uint256)': FunctionFragment;
    'setSanctionCheckDisabled(bool)': FunctionFragment;
    'updateSanctionsListAddress(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
  encodeFunctionData(functionFragment: 'changeServiceFee', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'changeServiceFeeCollector', values: [string]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [IMystikoLoop.DepositRequestStruct]): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sanctionsCheckDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sanctionsList', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setAssociatedCommitmentPool', values: [string]): string;
  encodeFunctionData(functionFragment: 'setDepositsDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'setMinAmount', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setSanctionCheckDisabled', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'updateSanctionsListAddress', values: [string]): string;

  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeServiceFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeServiceFeeCollector', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sanctionsList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSanctionCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateSanctionsListAddress', data: BytesLike): Result;

  events: {
    'DepositsDisabled(bool)': EventFragment;
    'MinAmount(uint256)': EventFragment;
    'OperatorChanged(address)': EventFragment;
    'SanctionsCheckDisabled(bool)': EventFragment;
    'SanctionsList(address)': EventFragment;
    'ServiceFeeChanged(uint256,uint256)': EventFragment;
    'ServiceFeeCollectorChanged(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'DepositsDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinAmount'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OperatorChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsCheckDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsList'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ServiceFeeChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ServiceFeeCollectorChanged'): EventFragment;
}

export type DepositsDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type DepositsDisabledEventFilter = TypedEventFilter<DepositsDisabledEvent>;

export type MinAmountEvent = TypedEvent<[BigNumber], { minAmount: BigNumber }>;

export type MinAmountEventFilter = TypedEventFilter<MinAmountEvent>;

export type OperatorChangedEvent = TypedEvent<[string], { operator: string }>;

export type OperatorChangedEventFilter = TypedEventFilter<OperatorChangedEvent>;

export type SanctionsCheckDisabledEvent = TypedEvent<[boolean], { state: boolean }>;

export type SanctionsCheckDisabledEventFilter = TypedEventFilter<SanctionsCheckDisabledEvent>;

export type SanctionsListEvent = TypedEvent<[string], { sanctions: string }>;

export type SanctionsListEventFilter = TypedEventFilter<SanctionsListEvent>;

export type ServiceFeeChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { serviceFee: BigNumber; serviceFeeDivider: BigNumber }
>;

export type ServiceFeeChangedEventFilter = TypedEventFilter<ServiceFeeChangedEvent>;

export type ServiceFeeCollectorChangedEvent = TypedEvent<[string], { servicer: string }>;

export type ServiceFeeCollectorChangedEventFilter = TypedEventFilter<ServiceFeeCollectorChangedEvent>;

export interface MystikoV2Loop extends BaseContract {
  contractName: 'MystikoV2Loop';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoV2LoopInterface;

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

    changeServiceFee(
      _newServiceFee: BigNumberish,
      _newServiceFeeDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeServiceFeeCollector(
      _newCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _request: IMystikoLoop.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<[string]>;

    getMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    sanctionsList(overrides?: CallOverrides): Promise<[string]>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
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

  bridgeType(overrides?: CallOverrides): Promise<string>;

  changeOperator(
    _newOperator: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeServiceFee(
    _newServiceFee: BigNumberish,
    _newServiceFeeDivider: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeServiceFeeCollector(
    _newCollector: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _request: IMystikoLoop.DepositRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

  getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

  sanctionsList(overrides?: CallOverrides): Promise<string>;

  setAssociatedCommitmentPool(
    _commitmentPoolAddress: string,
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

    bridgeType(overrides?: CallOverrides): Promise<string>;

    changeOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>;

    changeServiceFee(
      _newServiceFee: BigNumberish,
      _newServiceFeeDivider: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    changeServiceFeeCollector(_newCollector: string, overrides?: CallOverrides): Promise<void>;

    deposit(_request: IMystikoLoop.DepositRequestStruct, overrides?: CallOverrides): Promise<void>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

    sanctionsList(overrides?: CallOverrides): Promise<string>;

    setAssociatedCommitmentPool(_commitmentPoolAddress: string, overrides?: CallOverrides): Promise<void>;

    setDepositsDisabled(_state: boolean, overrides?: CallOverrides): Promise<void>;

    setMinAmount(_minAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setSanctionCheckDisabled(_state: boolean, overrides?: CallOverrides): Promise<void>;

    updateSanctionsListAddress(_sanction: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'DepositsDisabled(bool)'(state?: null): DepositsDisabledEventFilter;
    DepositsDisabled(state?: null): DepositsDisabledEventFilter;

    'MinAmount(uint256)'(minAmount?: null): MinAmountEventFilter;
    MinAmount(minAmount?: null): MinAmountEventFilter;

    'OperatorChanged(address)'(operator?: null): OperatorChangedEventFilter;
    OperatorChanged(operator?: null): OperatorChangedEventFilter;

    'SanctionsCheckDisabled(bool)'(state?: null): SanctionsCheckDisabledEventFilter;
    SanctionsCheckDisabled(state?: null): SanctionsCheckDisabledEventFilter;

    'SanctionsList(address)'(sanctions?: null): SanctionsListEventFilter;
    SanctionsList(sanctions?: null): SanctionsListEventFilter;

    'ServiceFeeChanged(uint256,uint256)'(
      serviceFee?: null,
      serviceFeeDivider?: null,
    ): ServiceFeeChangedEventFilter;
    ServiceFeeChanged(serviceFee?: null, serviceFeeDivider?: null): ServiceFeeChangedEventFilter;

    'ServiceFeeCollectorChanged(address)'(servicer?: null): ServiceFeeCollectorChangedEventFilter;
    ServiceFeeCollectorChanged(servicer?: null): ServiceFeeCollectorChangedEventFilter;
  };

  estimateGas: {
    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeServiceFee(
      _newServiceFee: BigNumberish,
      _newServiceFeeDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeServiceFeeCollector(
      _newCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deposit(
      _request: IMystikoLoop.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsList(overrides?: CallOverrides): Promise<BigNumber>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
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

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeServiceFee(
      _newServiceFee: BigNumberish,
      _newServiceFeeDivider: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeServiceFeeCollector(
      _newCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _request: IMystikoLoop.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsCheckDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
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
