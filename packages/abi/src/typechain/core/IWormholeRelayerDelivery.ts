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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface IWormholeRelayerDeliveryInterface extends utils.Interface {
  contractName: 'IWormholeRelayerDelivery';
  functions: {
    'deliver(bytes[],bytes,address,bytes)': FunctionFragment;
    'deliveryAttempted(bytes32)': FunctionFragment;
    'deliveryFailureBlock(bytes32)': FunctionFragment;
    'deliverySuccessBlock(bytes32)': FunctionFragment;
    'getRegisteredWormholeRelayerContract(uint16)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'deliver',
    values: [BytesLike[], BytesLike, string, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'deliveryAttempted', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'deliveryFailureBlock', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'deliverySuccessBlock', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'getRegisteredWormholeRelayerContract',
    values: [BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'deliver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deliveryAttempted', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deliveryFailureBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deliverySuccessBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRegisteredWormholeRelayerContract', data: BytesLike): Result;

  events: {
    'Delivery(address,uint16,uint64,bytes32,uint8,uint256,uint8,bytes,bytes)': EventFragment;
    'SendEvent(uint64,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Delivery'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SendEvent'): EventFragment;
}

export type DeliveryEvent = TypedEvent<
  [string, number, BigNumber, string, number, BigNumber, number, string, string],
  {
    recipientContract: string;
    sourceChain: number;
    sequence: BigNumber;
    deliveryVaaHash: string;
    status: number;
    gasUsed: BigNumber;
    refundStatus: number;
    additionalStatusInfo: string;
    overridesInfo: string;
  }
>;

export type DeliveryEventFilter = TypedEventFilter<DeliveryEvent>;

export type SendEventEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  {
    sequence: BigNumber;
    deliveryQuote: BigNumber;
    paymentForExtraReceiverValue: BigNumber;
  }
>;

export type SendEventEventFilter = TypedEventFilter<SendEventEvent>;

export interface IWormholeRelayerDelivery extends BaseContract {
  contractName: 'IWormholeRelayerDelivery';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWormholeRelayerDeliveryInterface;

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
    deliver(
      encodedVMs: BytesLike[],
      encodedDeliveryVAA: BytesLike,
      relayerRefundAddress: string,
      deliveryOverrides: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

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

  deliver(
    encodedVMs: BytesLike[],
    encodedDeliveryVAA: BytesLike,
    relayerRefundAddress: string,
    deliveryOverrides: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getRegisteredWormholeRelayerContract(chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    deliver(
      encodedVMs: BytesLike[],
      encodedDeliveryVAA: BytesLike,
      relayerRefundAddress: string,
      deliveryOverrides: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getRegisteredWormholeRelayerContract(chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'Delivery(address,uint16,uint64,bytes32,uint8,uint256,uint8,bytes,bytes)'(
      recipientContract?: string | null,
      sourceChain?: BigNumberish | null,
      sequence?: BigNumberish | null,
      deliveryVaaHash?: null,
      status?: null,
      gasUsed?: null,
      refundStatus?: null,
      additionalStatusInfo?: null,
      overridesInfo?: null,
    ): DeliveryEventFilter;
    Delivery(
      recipientContract?: string | null,
      sourceChain?: BigNumberish | null,
      sequence?: BigNumberish | null,
      deliveryVaaHash?: null,
      status?: null,
      gasUsed?: null,
      refundStatus?: null,
      additionalStatusInfo?: null,
      overridesInfo?: null,
    ): DeliveryEventFilter;

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
    deliver(
      encodedVMs: BytesLike[],
      encodedDeliveryVAA: BytesLike,
      relayerRefundAddress: string,
      deliveryOverrides: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getRegisteredWormholeRelayerContract(
      chainId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deliver(
      encodedVMs: BytesLike[],
      encodedDeliveryVAA: BytesLike,
      relayerRefundAddress: string,
      deliveryOverrides: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deliveryAttempted(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deliveryFailureBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deliverySuccessBlock(deliveryHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRegisteredWormholeRelayerContract(
      chainId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
