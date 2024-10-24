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

export type RollerValidateParamsStruct = {
  pool: string;
  roller: string;
  rollupSize: BigNumberish;
  queueCount: BigNumberish;
  includedCount: BigNumberish;
};

export type RollerValidateParamsStructOutput = [string, string, BigNumber, BigNumber, BigNumber] & {
  pool: string;
  roller: string;
  rollupSize: BigNumber;
  queueCount: BigNumber;
  includedCount: BigNumber;
};

export interface IMystikoRollerPoolInterface extends utils.Interface {
  contractName: 'IMystikoRollerPool';
  functions: {
    'validateRoller((address,address,uint256,uint256,uint256))': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'validateRoller', values: [RollerValidateParamsStruct]): string;

  decodeFunctionResult(functionFragment: 'validateRoller', data: BytesLike): Result;

  events: {};
}

export interface IMystikoRollerPool extends BaseContract {
  contractName: 'IMystikoRollerPool';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMystikoRollerPoolInterface;

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
    validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<[boolean]>;
  };

  validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    validateRoller(
      _params: RollerValidateParamsStruct,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
