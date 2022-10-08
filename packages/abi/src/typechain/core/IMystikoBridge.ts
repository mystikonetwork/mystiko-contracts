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
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace IMystikoBridge {
  export type DepositRequestStruct = {
    amount: BigNumberish;
    commitment: BigNumberish;
    hashK: BigNumberish;
    randomS: BigNumberish;
    encryptedNote: BytesLike;
    bridgeFee: BigNumberish;
    executorFee: BigNumberish;
    rollupFee: BigNumberish;
  };

  export type DepositRequestStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    amount: BigNumber;
    commitment: BigNumber;
    hashK: BigNumber;
    randomS: BigNumber;
    encryptedNote: string;
    bridgeFee: BigNumber;
    executorFee: BigNumber;
    rollupFee: BigNumber;
  };
}

export interface IMystikoBridgeInterface extends utils.Interface {
  contractName: "IMystikoBridge";
  functions: {
    "deposit((uint256,uint256,uint256,uint128,bytes,uint256,uint256,uint256))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [IMystikoBridge.DepositRequestStruct]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;

  events: {};
}

export interface IMystikoBridge extends BaseContract {
  contractName: "IMystikoBridge";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMystikoBridgeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    _request: IMystikoBridge.DepositRequestStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      _request: IMystikoBridge.DepositRequestStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}