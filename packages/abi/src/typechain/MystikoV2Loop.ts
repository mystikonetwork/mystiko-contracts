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
import { FunctionFragment, Result } from '@ethersproject/abi';
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
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256))': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'getSanctionsContract()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'isSanctionCheckDisabled()': FunctionFragment;
    'setAssociatedCommitmentPool(address)': FunctionFragment;
    'setMinAmount(uint256)': FunctionFragment;
    'toggleDeposits(bool)': FunctionFragment;
    'toggleSanctionCheck(bool)': FunctionFragment;
    'updateSanctionContractAddress(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [IMystikoLoop.DepositRequestStruct]): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getSanctionsContract', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isSanctionCheckDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setAssociatedCommitmentPool', values: [string]): string;
  encodeFunctionData(functionFragment: 'setMinAmount', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'toggleDeposits', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'toggleSanctionCheck', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'updateSanctionContractAddress', values: [string]): string;

  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getSanctionsContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isSanctionCheckDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'toggleDeposits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'toggleSanctionCheck', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateSanctionContractAddress', data: BytesLike): Result;

  events: {};
}

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
    assetType(overrides?: CallOverrides): Promise<[string]>;

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

    getSanctionsContract(overrides?: CallOverrides): Promise<[string]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    isSanctionCheckDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinAmount(
      _minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    toggleDeposits(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    toggleSanctionCheck(
      _check: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateSanctionContractAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  assetType(overrides?: CallOverrides): Promise<string>;

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

  getSanctionsContract(overrides?: CallOverrides): Promise<string>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  isSanctionCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

  setAssociatedCommitmentPool(
    _commitmentPoolAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinAmount(
    _minAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  toggleDeposits(
    _state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  toggleSanctionCheck(
    _check: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateSanctionContractAddress(
    _sanction: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    assetType(overrides?: CallOverrides): Promise<string>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    changeOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>;

    deposit(_request: IMystikoLoop.DepositRequestStruct, overrides?: CallOverrides): Promise<void>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getSanctionsContract(overrides?: CallOverrides): Promise<string>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    isSanctionCheckDisabled(overrides?: CallOverrides): Promise<boolean>;

    setAssociatedCommitmentPool(_commitmentPoolAddress: string, overrides?: CallOverrides): Promise<void>;

    setMinAmount(_minAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    toggleDeposits(_state: boolean, overrides?: CallOverrides): Promise<void>;

    toggleSanctionCheck(_check: boolean, overrides?: CallOverrides): Promise<void>;

    updateSanctionContractAddress(_sanction: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
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

    getSanctionsContract(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    isSanctionCheckDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMinAmount(
      _minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    toggleDeposits(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    toggleSanctionCheck(
      _check: boolean,
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

    deposit(
      _request: IMystikoLoop.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSanctionsContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSanctionCheckDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAssociatedCommitmentPool(
      _commitmentPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinAmount(
      _minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    toggleDeposits(
      _state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    toggleSanctionCheck(
      _check: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateSanctionContractAddress(
      _sanction: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
