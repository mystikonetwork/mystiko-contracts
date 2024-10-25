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

export interface ICrossChainProxyInterface extends utils.Interface {
  contractName: 'ICrossChainProxy';
  functions: {
    'sendMessage(address,uint64,bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'sendMessage', values: [string, BigNumberish, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'sendMessage', data: BytesLike): Result;

  events: {
    'TBridgeCrossChainMessage(address,uint256,address,bytes)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'TBridgeCrossChainMessage'): EventFragment;
}

export type TBridgeCrossChainMessageEvent = TypedEvent<
  [string, BigNumber, string, string],
  {
    toContract: string;
    toChainId: BigNumber;
    fromContract: string;
    message: string;
  }
>;

export type TBridgeCrossChainMessageEventFilter = TypedEventFilter<TBridgeCrossChainMessageEvent>;

export interface ICrossChainProxy extends BaseContract {
  contractName: 'ICrossChainProxy';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICrossChainProxyInterface;

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
    sendMessage(
      _toContract: string,
      _toChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  sendMessage(
    _toContract: string,
    _toChainId: BigNumberish,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    sendMessage(
      _toContract: string,
      _toChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'TBridgeCrossChainMessage(address,uint256,address,bytes)'(
      toContract?: null,
      toChainId?: null,
      fromContract?: null,
      message?: null,
    ): TBridgeCrossChainMessageEventFilter;
    TBridgeCrossChainMessage(
      toContract?: null,
      toChainId?: null,
      fromContract?: null,
      message?: null,
    ): TBridgeCrossChainMessageEventFilter;
  };

  estimateGas: {
    sendMessage(
      _toContract: string,
      _toChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    sendMessage(
      _toContract: string,
      _toChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
