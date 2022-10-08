/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface DummySanctionsListInterface extends utils.Interface {
  contractName: "DummySanctionsList";
  functions: {
    "addToSanctionsList(address)": FunctionFragment;
    "isSanctioned(address)": FunctionFragment;
    "removeFromSanctionsList(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addToSanctionsList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isSanctioned",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromSanctionsList",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addToSanctionsList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSanctioned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromSanctionsList",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DummySanctionsList extends BaseContract {
  contractName: "DummySanctionsList";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DummySanctionsListInterface;

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
    addToSanctionsList(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isSanctioned(addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeFromSanctionsList(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addToSanctionsList(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isSanctioned(addr: string, overrides?: CallOverrides): Promise<boolean>;

  removeFromSanctionsList(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addToSanctionsList(addr: string, overrides?: CallOverrides): Promise<void>;

    isSanctioned(addr: string, overrides?: CallOverrides): Promise<boolean>;

    removeFromSanctionsList(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addToSanctionsList(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isSanctioned(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeFromSanctionsList(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToSanctionsList(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isSanctioned(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeFromSanctionsList(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}