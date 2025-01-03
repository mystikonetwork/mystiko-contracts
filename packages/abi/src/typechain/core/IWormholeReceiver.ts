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

export interface IWormholeReceiverInterface extends utils.Interface {
  contractName: 'IWormholeReceiver';
  functions: {
    'receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'receiveWormholeMessages',
    values: [BytesLike, BytesLike[], BytesLike, BigNumberish, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: 'receiveWormholeMessages', data: BytesLike): Result;

  events: {};
}

export interface IWormholeReceiver extends BaseContract {
  contractName: 'IWormholeReceiver';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWormholeReceiverInterface;

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
    receiveWormholeMessages(
      payload: BytesLike,
      additionalMessages: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      deliveryHash: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  receiveWormholeMessages(
    payload: BytesLike,
    additionalMessages: BytesLike[],
    sourceAddress: BytesLike,
    sourceChain: BigNumberish,
    deliveryHash: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    receiveWormholeMessages(
      payload: BytesLike,
      additionalMessages: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      deliveryHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    receiveWormholeMessages(
      payload: BytesLike,
      additionalMessages: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      deliveryHash: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    receiveWormholeMessages(
      payload: BytesLike,
      additionalMessages: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      deliveryHash: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
