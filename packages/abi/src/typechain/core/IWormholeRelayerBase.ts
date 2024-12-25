/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface IWormholeRelayerBaseInterface extends utils.Interface {
  contractName: 'IWormholeRelayerBase';
  functions: {
    'deliveryAttempted(bytes32)': FunctionFragment;
    'deliveryFailureBlock(bytes32)': FunctionFragment;
    'deliverySuccessBlock(bytes32)': FunctionFragment;
    'getRegisteredWormholeRelayerContract(uint16)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'deliveryAttempted', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'deliveryFailureBlock', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'deliverySuccessBlock', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'getRegisteredWormholeRelayerContract',
    values: [BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'deliveryAttempted', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deliveryFailureBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deliverySuccessBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRegisteredWormholeRelayerContract', data: BytesLike): Result;

  events: {
    'SendEvent(uint64,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'SendEvent'): EventFragment;
}

export type SendEventEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  {
    sequence: BigNumber;
    deliveryQuote: BigNumber;
    paymentForExtraReceiverValue: BigNumber;
  }
>;

export type SendEventEventFilter = TypedEventFilter<SendEventEvent>;

export interface IWormholeRelayerBase extends BaseContract {
  contractName: 'IWormholeRelayerBase';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWormholeRelayerBaseInterface;

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
    deliveryAttempted(
      deliveryHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { attempted: boolean }>;

    deliveryFailureBlock(
      deliveryHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { blockNumber: BigNumber }>;

    deliverySuccessBlock(
      deliveryHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { blockNumber: BigNumber }>;

    getRegisteredWormholeRelayerContract(chainId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getRegisteredWormholeRelayerContract(chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getRegisteredWormholeRelayerContract(chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'SendEvent(uint64,uint256,uint256)'(
      sequence?: BigNumberish | null,
      deliveryQuote?: null,
      paymentForExtraReceiverValue?: null,
    ): SendEventEventFilter;
    SendEvent(
      sequence?: BigNumberish | null,
      deliveryQuote?: null,
      paymentForExtraReceiverValue?: null,
    ): SendEventEventFilter;
  };

  estimateGas: {
    deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getRegisteredWormholeRelayerContract(
      chainId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRegisteredWormholeRelayerContract(
      chainId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}