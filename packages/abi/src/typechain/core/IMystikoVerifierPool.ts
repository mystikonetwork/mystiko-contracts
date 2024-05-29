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
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export type WrappedVerifierStruct = { verifier: string; enabled: boolean };

export type WrappedVerifierStructOutput = [string, boolean] & {
  verifier: string;
  enabled: boolean;
};

export interface IMystikoVerifierPoolInterface extends utils.Interface {
  contractName: 'IMystikoVerifierPool';
  functions: {
    'queryRollupVerifier(uint32)': FunctionFragment;
    'queryTransactVerifier(uint32,uint32)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'queryRollupVerifier', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'queryTransactVerifier', values: [BigNumberish, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'queryRollupVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queryTransactVerifier', data: BytesLike): Result;

  events: {};
}

export interface IMystikoVerifierPool extends BaseContract {
  contractName: 'IMystikoVerifierPool';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMystikoVerifierPoolInterface;

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
    queryRollupVerifier(
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[WrappedVerifierStructOutput]>;

    queryTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[WrappedVerifierStructOutput]>;
  };

  queryRollupVerifier(
    _rollupSize: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<WrappedVerifierStructOutput>;

  queryTransactVerifier(
    _numInputs: BigNumberish,
    _numOutputs: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<WrappedVerifierStructOutput>;

  callStatic: {
    queryRollupVerifier(
      _rollupSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<WrappedVerifierStructOutput>;

    queryTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<WrappedVerifierStructOutput>;
  };

  filters: {};

  estimateGas: {
    queryRollupVerifier(_rollupSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    queryTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    queryRollupVerifier(_rollupSize: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryTransactVerifier(
      _numInputs: BigNumberish,
      _numOutputs: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}