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

export interface AxelarGasServiceInterface extends utils.Interface {
  contractName: 'AxelarGasService';
  functions: {
    'collectFees(address,address[])': FunctionFragment;
    'contractId()': FunctionFragment;
    'payGasForContractCall(address,string,string,bytes,address,uint256,address)': FunctionFragment;
    'payGasForContractCallWithToken(address,string,string,bytes,string,uint256,address,uint256,address)': FunctionFragment;
    'payNativeGasForContractCall(address,string,string,bytes,address)': FunctionFragment;
    'payNativeGasForContractCallWithToken(address,string,string,bytes,string,uint256,address)': FunctionFragment;
    'refund(address,address,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'collectFees', values: [string, string[]]): string;
  encodeFunctionData(functionFragment: 'contractId', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'payGasForContractCall',
    values: [string, string, string, BytesLike, string, BigNumberish, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'payGasForContractCallWithToken',
    values: [string, string, string, BytesLike, string, BigNumberish, string, BigNumberish, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'payNativeGasForContractCall',
    values: [string, string, string, BytesLike, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'payNativeGasForContractCallWithToken',
    values: [string, string, string, BytesLike, string, BigNumberish, string],
  ): string;
  encodeFunctionData(functionFragment: 'refund', values: [string, string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'collectFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'contractId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'payGasForContractCall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'payGasForContractCallWithToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'payNativeGasForContractCall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'payNativeGasForContractCallWithToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'refund', data: BytesLike): Result;

  events: {
    'GasPaidForContractCall(address,string,string,bytes32,address,uint256,address)': EventFragment;
    'GasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,address,uint256,address)': EventFragment;
    'NativeGasPaidForContractCall(address,string,string,bytes32,uint256,address)': EventFragment;
    'NativeGasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GasPaidForContractCall'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GasPaidForContractCallWithToken'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NativeGasPaidForContractCall'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NativeGasPaidForContractCallWithToken'): EventFragment;
}

export type GasPaidForContractCallEvent = TypedEvent<
  [string, string, string, string, string, BigNumber, string],
  {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
  }
>;

export type GasPaidForContractCallEventFilter = TypedEventFilter<GasPaidForContractCallEvent>;

export type GasPaidForContractCallWithTokenEvent = TypedEvent<
  [string, string, string, string, string, BigNumber, string, BigNumber, string],
  {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
  }
>;

export type GasPaidForContractCallWithTokenEventFilter =
  TypedEventFilter<GasPaidForContractCallWithTokenEvent>;

export type NativeGasPaidForContractCallEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
  }
>;

export type NativeGasPaidForContractCallEventFilter = TypedEventFilter<NativeGasPaidForContractCallEvent>;

export type NativeGasPaidForContractCallWithTokenEvent = TypedEvent<
  [string, string, string, string, string, BigNumber, BigNumber, string],
  {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    gasFeeAmount: BigNumber;
    refundAddress: string;
  }
>;

export type NativeGasPaidForContractCallWithTokenEventFilter =
  TypedEventFilter<NativeGasPaidForContractCallWithTokenEvent>;

export interface AxelarGasService extends BaseContract {
  contractName: 'AxelarGasService';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AxelarGasServiceInterface;

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
    collectFees(
      receiver: string,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    contractId(overrides?: CallOverrides): Promise<[string]>;

    payGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    payGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    payNativeGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    payNativeGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    refund(
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  collectFees(
    receiver: string,
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  contractId(overrides?: CallOverrides): Promise<string>;

  payGasForContractCall(
    sender: string,
    destinationChain: string,
    destinationAddress: string,
    payload: BytesLike,
    gasToken: string,
    gasFeeAmount: BigNumberish,
    refundAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  payGasForContractCallWithToken(
    sender: string,
    destinationChain: string,
    destinationAddress: string,
    payload: BytesLike,
    symbol: string,
    amount: BigNumberish,
    gasToken: string,
    gasFeeAmount: BigNumberish,
    refundAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  payNativeGasForContractCall(
    sender: string,
    destinationChain: string,
    destinationAddress: string,
    payload: BytesLike,
    refundAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  payNativeGasForContractCallWithToken(
    sender: string,
    destinationChain: string,
    destinationAddress: string,
    payload: BytesLike,
    symbol: string,
    amount: BigNumberish,
    refundAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  refund(
    receiver: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    collectFees(receiver: string, tokens: string[], overrides?: CallOverrides): Promise<void>;

    contractId(overrides?: CallOverrides): Promise<string>;

    payGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    payGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    payNativeGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      refundAddress: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    payNativeGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    refund(receiver: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'GasPaidForContractCall(address,string,string,bytes32,address,uint256,address)'(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      gasToken?: null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): GasPaidForContractCallEventFilter;
    GasPaidForContractCall(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      gasToken?: null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): GasPaidForContractCallEventFilter;

    'GasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,address,uint256,address)'(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      symbol?: null,
      amount?: null,
      gasToken?: null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): GasPaidForContractCallWithTokenEventFilter;
    GasPaidForContractCallWithToken(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      symbol?: null,
      amount?: null,
      gasToken?: null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): GasPaidForContractCallWithTokenEventFilter;

    'NativeGasPaidForContractCall(address,string,string,bytes32,uint256,address)'(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): NativeGasPaidForContractCallEventFilter;
    NativeGasPaidForContractCall(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): NativeGasPaidForContractCallEventFilter;

    'NativeGasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,uint256,address)'(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      symbol?: null,
      amount?: null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): NativeGasPaidForContractCallWithTokenEventFilter;
    NativeGasPaidForContractCallWithToken(
      sourceAddress?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      payloadHash?: BytesLike | null,
      symbol?: null,
      amount?: null,
      gasFeeAmount?: null,
      refundAddress?: null,
    ): NativeGasPaidForContractCallWithTokenEventFilter;
  };

  estimateGas: {
    collectFees(
      receiver: string,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    contractId(overrides?: CallOverrides): Promise<BigNumber>;

    payGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    payGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    payNativeGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    payNativeGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    refund(
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collectFees(
      receiver: string,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    contractId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    payGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      gasToken: string,
      gasFeeAmount: BigNumberish,
      refundAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    payNativeGasForContractCall(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    payNativeGasForContractCallWithToken(
      sender: string,
      destinationChain: string,
      destinationAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    refund(
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
