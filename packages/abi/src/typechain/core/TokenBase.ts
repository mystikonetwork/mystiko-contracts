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
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface TokenBaseInterface extends utils.Interface {
  contractName: 'TokenBase';
  functions: {
    'setRegisteredSender(uint16,bytes32)': FunctionFragment;
    'tokenBridge()': FunctionFragment;
    'wormhole()': FunctionFragment;
    'wormholeRelayer()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'setRegisteredSender', values: [BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: 'tokenBridge', values?: undefined): string;
  encodeFunctionData(functionFragment: 'wormhole', values?: undefined): string;
  encodeFunctionData(functionFragment: 'wormholeRelayer', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'setRegisteredSender', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenBridge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'wormhole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'wormholeRelayer', data: BytesLike): Result;

  events: {};
}

export interface TokenBase extends BaseContract {
  contractName: 'TokenBase';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenBaseInterface;

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
    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    tokenBridge(overrides?: CallOverrides): Promise<[string]>;

    wormhole(overrides?: CallOverrides): Promise<[string]>;

    wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
  };

  setRegisteredSender(
    sourceChain: BigNumberish,
    sourceAddress: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  tokenBridge(overrides?: CallOverrides): Promise<string>;

  wormhole(overrides?: CallOverrides): Promise<string>;

  wormholeRelayer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    tokenBridge(overrides?: CallOverrides): Promise<string>;

    wormhole(overrides?: CallOverrides): Promise<string>;

    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    tokenBridge(overrides?: CallOverrides): Promise<BigNumber>;

    wormhole(overrides?: CallOverrides): Promise<BigNumber>;

    wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    tokenBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
