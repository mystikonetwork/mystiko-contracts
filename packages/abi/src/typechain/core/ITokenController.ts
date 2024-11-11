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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface ITokenControllerInterface extends utils.Interface {
  contractName: 'ITokenController';
  functions: {
    'burnLimitsPerMessage(address)': FunctionFragment;
    'linkTokenPair(address,uint32,bytes32)': FunctionFragment;
    'remoteTokensToLocalTokens(bytes32)': FunctionFragment;
    'setMaxBurnAmountPerMessage(address,uint256)': FunctionFragment;
    'tokenController()': FunctionFragment;
    'unlinkTokenPair(address,uint32,bytes32)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'burnLimitsPerMessage', values: [string]): string;
  encodeFunctionData(functionFragment: 'linkTokenPair', values: [string, BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: 'remoteTokensToLocalTokens', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'setMaxBurnAmountPerMessage', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'tokenController', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unlinkTokenPair', values: [string, BigNumberish, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'burnLimitsPerMessage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'linkTokenPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'remoteTokensToLocalTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMaxBurnAmountPerMessage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenController', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unlinkTokenPair', data: BytesLike): Result;

  events: {
    'SetBurnLimitPerMessage(address,uint256)': EventFragment;
    'SetTokenController(address)': EventFragment;
    'TokenPairLinked(address,uint32,bytes32)': EventFragment;
    'TokenPairUnlinked(address,uint32,bytes32)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'SetBurnLimitPerMessage'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetTokenController'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenPairLinked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenPairUnlinked'): EventFragment;
}

export type SetBurnLimitPerMessageEvent = TypedEvent<
  [string, BigNumber],
  { token: string; burnLimitPerMessage: BigNumber }
>;

export type SetBurnLimitPerMessageEventFilter = TypedEventFilter<SetBurnLimitPerMessageEvent>;

export type SetTokenControllerEvent = TypedEvent<[string], { tokenController: string }>;

export type SetTokenControllerEventFilter = TypedEventFilter<SetTokenControllerEvent>;

export type TokenPairLinkedEvent = TypedEvent<
  [string, number, string],
  { localToken: string; remoteDomain: number; remoteToken: string }
>;

export type TokenPairLinkedEventFilter = TypedEventFilter<TokenPairLinkedEvent>;

export type TokenPairUnlinkedEvent = TypedEvent<
  [string, number, string],
  { localToken: string; remoteDomain: number; remoteToken: string }
>;

export type TokenPairUnlinkedEventFilter = TypedEventFilter<TokenPairUnlinkedEvent>;

export interface ITokenController extends BaseContract {
  contractName: 'ITokenController';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenControllerInterface;

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
    burnLimitsPerMessage(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    linkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    remoteTokensToLocalTokens(sourceIdHash: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    setMaxBurnAmountPerMessage(
      localToken: string,
      burnLimitPerMessage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    tokenController(overrides?: CallOverrides): Promise<[string]>;

    unlinkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  burnLimitsPerMessage(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  linkTokenPair(
    localToken: string,
    remoteDomain: BigNumberish,
    remoteToken: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  remoteTokensToLocalTokens(sourceIdHash: BytesLike, overrides?: CallOverrides): Promise<string>;

  setMaxBurnAmountPerMessage(
    localToken: string,
    burnLimitPerMessage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  tokenController(overrides?: CallOverrides): Promise<string>;

  unlinkTokenPair(
    localToken: string,
    remoteDomain: BigNumberish,
    remoteToken: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    burnLimitsPerMessage(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    linkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    remoteTokensToLocalTokens(sourceIdHash: BytesLike, overrides?: CallOverrides): Promise<string>;

    setMaxBurnAmountPerMessage(
      localToken: string,
      burnLimitPerMessage: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    tokenController(overrides?: CallOverrides): Promise<string>;

    unlinkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'SetBurnLimitPerMessage(address,uint256)'(
      token?: string | null,
      burnLimitPerMessage?: null,
    ): SetBurnLimitPerMessageEventFilter;
    SetBurnLimitPerMessage(
      token?: string | null,
      burnLimitPerMessage?: null,
    ): SetBurnLimitPerMessageEventFilter;

    'SetTokenController(address)'(tokenController?: null): SetTokenControllerEventFilter;
    SetTokenController(tokenController?: null): SetTokenControllerEventFilter;

    'TokenPairLinked(address,uint32,bytes32)'(
      localToken?: null,
      remoteDomain?: null,
      remoteToken?: null,
    ): TokenPairLinkedEventFilter;
    TokenPairLinked(localToken?: null, remoteDomain?: null, remoteToken?: null): TokenPairLinkedEventFilter;

    'TokenPairUnlinked(address,uint32,bytes32)'(
      localToken?: null,
      remoteDomain?: null,
      remoteToken?: null,
    ): TokenPairUnlinkedEventFilter;
    TokenPairUnlinked(
      localToken?: null,
      remoteDomain?: null,
      remoteToken?: null,
    ): TokenPairUnlinkedEventFilter;
  };

  estimateGas: {
    burnLimitsPerMessage(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    linkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    remoteTokensToLocalTokens(sourceIdHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    setMaxBurnAmountPerMessage(
      localToken: string,
      burnLimitPerMessage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    tokenController(overrides?: CallOverrides): Promise<BigNumber>;

    unlinkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burnLimitsPerMessage(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    linkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    remoteTokensToLocalTokens(
      sourceIdHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    setMaxBurnAmountPerMessage(
      localToken: string,
      burnLimitPerMessage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    tokenController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlinkTokenPair(
      localToken: string,
      remoteDomain: BigNumberish,
      remoteToken: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
