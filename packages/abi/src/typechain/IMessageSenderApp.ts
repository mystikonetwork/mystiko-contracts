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

export interface IMessageSenderAppInterface extends utils.Interface {
  contractName: 'IMessageSenderApp';
  functions: {
    'sendMessage(address,uint256,bytes)': FunctionFragment;
    'sendMessageWithTransfer(address,uint256,address,bytes32,bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'sendMessage', values: [string, BigNumberish, BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'sendMessageWithTransfer',
    values: [string, BigNumberish, string, BytesLike, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: 'sendMessage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sendMessageWithTransfer', data: BytesLike): Result;

  events: {};
}

export interface IMessageSenderApp extends BaseContract {
  contractName: 'IMessageSenderApp';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMessageSenderAppInterface;

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
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  sendMessage(
    _receiver: string,
    _dstChainId: BigNumberish,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  sendMessageWithTransfer(
    _receiver: string,
    _dstChainId: BigNumberish,
    _srcBridge: string,
    _srcTransferId: BytesLike,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
