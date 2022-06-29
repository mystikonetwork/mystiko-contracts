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

export interface MystikoV2LoopERC20Interface extends utils.Interface {
  contractName: 'MystikoV2LoopERC20';
  functions: {
    'assetDecimals()': FunctionFragment;
    'assetName()': FunctionFragment;
    'assetSymbol()': FunctionFragment;
    'assetType()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'changeOperator(address)': FunctionFragment;
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

  encodeFunctionData(functionFragment: 'assetDecimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetSymbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
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

  decodeFunctionResult(functionFragment: 'assetDecimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetSymbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
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
  };

  getEvent(nameOrSignatureOrTopic: 'DepositsDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinAmount'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OperatorChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsCheckDisabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SanctionsList'): EventFragment;
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

export interface MystikoV2LoopERC20 extends BaseContract {
  contractName: 'MystikoV2LoopERC20';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoV2LoopERC20Interface;

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
    assetDecimals(overrides?: CallOverrides): Promise<[number]>;

    assetName(overrides?: CallOverrides): Promise<[string]>;

    assetSymbol(overrides?: CallOverrides): Promise<[string]>;

    assetType(overrides?: CallOverrides): Promise<[number]>;

    bridgeType(overrides?: CallOverrides): Promise<[string]>;

    changeOperator(
      _newOperator: string,
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

  assetDecimals(overrides?: CallOverrides): Promise<number>;

  assetName(overrides?: CallOverrides): Promise<string>;

  assetSymbol(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<number>;

  bridgeType(overrides?: CallOverrides): Promise<string>;

  changeOperator(
    _newOperator: string,
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
    assetDecimals(overrides?: CallOverrides): Promise<number>;

    assetName(overrides?: CallOverrides): Promise<string>;

    assetSymbol(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<number>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    changeOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>;

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
  };

  estimateGas: {
    assetDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    assetName(overrides?: CallOverrides): Promise<BigNumber>;

    assetSymbol(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    changeOperator(
      _newOperator: string,
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
    assetDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetSymbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOperator(
      _newOperator: string,
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
