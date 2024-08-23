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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace IMystikoLoop {
  export type LoopDepositRequestStruct = {
    amount: BigNumberish;
    commitment: BigNumberish;
    hashK: BigNumberish;
    randomS: BigNumberish;
    encryptedNote: BytesLike;
    rollupFee: BigNumberish;
  };

  export type LoopDepositRequestStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
  ] & {
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
    'assetAddress()': FunctionFragment;
    'assetType()': FunctionFragment;
    'bridgeType()': FunctionFragment;
    'certDeposit((uint256,uint256,uint256,uint128,bytes,uint256),uint256,bytes)': FunctionFragment;
    'deposit((uint256,uint256,uint256,uint128,bytes,uint256))': FunctionFragment;
    'getAssociatedCommitmentPool()': FunctionFragment;
    'getMaxAmount()': FunctionFragment;
    'getMinAmount()': FunctionFragment;
    'isCertificateCheckEnabled()': FunctionFragment;
    'isDepositsDisabled()': FunctionFragment;
    'settings()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'assetAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bridgeType', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'certDeposit',
    values: [IMystikoLoop.LoopDepositRequestStruct, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'deposit', values: [IMystikoLoop.LoopDepositRequestStruct]): string;
  encodeFunctionData(functionFragment: 'getAssociatedCommitmentPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMaxAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMinAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isCertificateCheckEnabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isDepositsDisabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'settings', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'assetAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'certDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedCommitmentPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMaxAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMinAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isCertificateCheckEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isDepositsDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'settings', data: BytesLike): Result;

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
    assetAddress(overrides?: CallOverrides): Promise<[string]>;

    assetType(overrides?: CallOverrides): Promise<[number]>;

    bridgeType(overrides?: CallOverrides): Promise<[string]>;

    certDeposit(
      _request: IMystikoLoop.LoopDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _request: IMystikoLoop.LoopDepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<[string]>;

    getMaxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    settings(overrides?: CallOverrides): Promise<[string]>;
  };

  assetAddress(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<number>;

  bridgeType(overrides?: CallOverrides): Promise<string>;

  certDeposit(
    _request: IMystikoLoop.LoopDepositRequestStruct,
    _certificateDeadline: BigNumberish,
    _certificateSignature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _request: IMystikoLoop.LoopDepositRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

  getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  isCertificateCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

  isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

  settings(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    assetAddress(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<number>;

    bridgeType(overrides?: CallOverrides): Promise<string>;

    certDeposit(
      _request: IMystikoLoop.LoopDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    deposit(_request: IMystikoLoop.LoopDepositRequestStruct, overrides?: CallOverrides): Promise<void>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<string>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<boolean>;

    settings(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    assetAddress(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeType(overrides?: CallOverrides): Promise<BigNumber>;

    certDeposit(
      _request: IMystikoLoop.LoopDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deposit(
      _request: IMystikoLoop.LoopDepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    settings(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    assetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    certDeposit(
      _request: IMystikoLoop.LoopDepositRequestStruct,
      _certificateDeadline: BigNumberish,
      _certificateSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _request: IMystikoLoop.LoopDepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getAssociatedCommitmentPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDepositsDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    settings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
