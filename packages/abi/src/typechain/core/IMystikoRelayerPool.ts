/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export type RelayerValidateParamsStruct = { pool: string; relayer: string };

export type RelayerValidateParamsStructOutput = [string, string] & {
  pool: string;
  relayer: string;
};

export interface IMystikoRelayerPoolInterface extends utils.Interface {
  contractName: 'IMystikoRelayerPool';
  functions: {
    'validate((address,address))': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'validate', values: [RelayerValidateParamsStruct]): string;

  decodeFunctionResult(functionFragment: 'validate', data: BytesLike): Result;

  events: {};
}

export interface IMystikoRelayerPool extends BaseContract {
  contractName: 'IMystikoRelayerPool';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMystikoRelayerPoolInterface;

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
    validate(_params: RelayerValidateParamsStruct, overrides?: CallOverrides): Promise<[boolean]>;
  };

  validate(_params: RelayerValidateParamsStruct, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    validate(_params: RelayerValidateParamsStruct, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    validate(_params: RelayerValidateParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    validate(_params: RelayerValidateParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}