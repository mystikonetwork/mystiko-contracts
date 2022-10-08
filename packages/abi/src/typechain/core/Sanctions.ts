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
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SanctionsInterface extends utils.Interface {
  contractName: "Sanctions";
  functions: {
    "sanctionsCheck()": FunctionFragment;
    "sanctionsList()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "sanctionsCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sanctionsList",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "sanctionsCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sanctionsList",
    data: BytesLike
  ): Result;

  events: {
    "SanctionsCheck(bool)": EventFragment;
    "SanctionsList(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SanctionsCheck"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SanctionsList"): EventFragment;
}

export type SanctionsCheckEvent = TypedEvent<[boolean], { state: boolean }>;

export type SanctionsCheckEventFilter = TypedEventFilter<SanctionsCheckEvent>;

export type SanctionsListEvent = TypedEvent<[string], { sanctions: string }>;

export type SanctionsListEventFilter = TypedEventFilter<SanctionsListEvent>;

export interface Sanctions extends BaseContract {
  contractName: "Sanctions";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SanctionsInterface;

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
    sanctionsCheck(overrides?: CallOverrides): Promise<[boolean]>;

    sanctionsList(overrides?: CallOverrides): Promise<[string]>;
  };

  sanctionsCheck(overrides?: CallOverrides): Promise<boolean>;

  sanctionsList(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    sanctionsCheck(overrides?: CallOverrides): Promise<boolean>;

    sanctionsList(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "SanctionsCheck(bool)"(state?: null): SanctionsCheckEventFilter;
    SanctionsCheck(state?: null): SanctionsCheckEventFilter;

    "SanctionsList(address)"(sanctions?: null): SanctionsListEventFilter;
    SanctionsList(sanctions?: null): SanctionsListEventFilter;
  };

  estimateGas: {
    sanctionsCheck(overrides?: CallOverrides): Promise<BigNumber>;

    sanctionsList(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    sanctionsCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sanctionsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}