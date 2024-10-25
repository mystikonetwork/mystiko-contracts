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

export declare namespace IVerifier {
  export type G1PointStruct = { X: BigNumberish; Y: BigNumberish };

  export type G1PointStructOutput = [BigNumber, BigNumber] & {
    X: BigNumber;
    Y: BigNumber;
  };

  export type G2PointStruct = {
    X: [BigNumberish, BigNumberish];
    Y: [BigNumberish, BigNumberish];
  };

  export type G2PointStructOutput = [[BigNumber, BigNumber], [BigNumber, BigNumber]] & {
    X: [BigNumber, BigNumber];
    Y: [BigNumber, BigNumber];
  };

  export type ProofStruct = {
    a: IVerifier.G1PointStruct;
    b: IVerifier.G2PointStruct;
    c: IVerifier.G1PointStruct;
  };

  export type ProofStructOutput = [
    IVerifier.G1PointStructOutput,
    IVerifier.G2PointStructOutput,
    IVerifier.G1PointStructOutput,
  ] & {
    a: IVerifier.G1PointStructOutput;
    b: IVerifier.G2PointStructOutput;
    c: IVerifier.G1PointStructOutput;
  };
}

export interface IVerifierInterface extends utils.Interface {
  contractName: 'IVerifier';
  functions: {
    'verifyTx(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256[])': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'verifyTx', values: [IVerifier.ProofStruct, BigNumberish[]]): string;

  decodeFunctionResult(functionFragment: 'verifyTx', data: BytesLike): Result;

  events: {};
}

export interface IVerifier extends BaseContract {
  contractName: 'IVerifier';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVerifierInterface;

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
    verifyTx(
      proof: IVerifier.ProofStruct,
      input: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  verifyTx(
    proof: IVerifier.ProofStruct,
    input: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    verifyTx(
      proof: IVerifier.ProofStruct,
      input: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verifyTx(
      proof: IVerifier.ProofStruct,
      input: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyTx(
      proof: IVerifier.ProofStruct,
      input: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
