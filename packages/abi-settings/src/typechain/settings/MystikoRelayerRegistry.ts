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

export type CanDoRelayParamsStruct = { pool: string; relayer: string };

export type CanDoRelayParamsStructOutput = [string, string] & {
  pool: string;
  relayer: string;
};

export interface MystikoRelayerRegistryInterface extends utils.Interface {
  contractName: 'MystikoRelayerRegistry';
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment;
    'RELAYER_ROLE()': FunctionFragment;
    'canDoRelay((address,address))': FunctionFragment;
    'changeRelayerMinVoteTokenAmount(uint256)': FunctionFragment;
    'daoRegistry()': FunctionFragment;
    'getRoleAdmin(bytes32)': FunctionFragment;
    'grantRole(bytes32,address)': FunctionFragment;
    'hasRole(bytes32,address)': FunctionFragment;
    'minVoteTokenAmount()': FunctionFragment;
    'renounceRole(bytes32,address)': FunctionFragment;
    'revokeRole(bytes32,address)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'vXZK()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'RELAYER_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'canDoRelay', values: [CanDoRelayParamsStruct]): string;
  encodeFunctionData(functionFragment: 'changeRelayerMinVoteTokenAmount', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'daoRegistry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'minVoteTokenAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'vXZK', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'RELAYER_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'canDoRelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeRelayerMinVoteTokenAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'daoRegistry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minVoteTokenAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vXZK', data: BytesLike): Result;

  events: {
    'RelayerMinVoteTokenAmountChanged(uint256)': EventFragment;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
    'RoleGranted(bytes32,address,address)': EventFragment;
    'RoleRevoked(bytes32,address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'RelayerMinVoteTokenAmountChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
}

export type RelayerMinVoteTokenAmountChangedEvent = TypedEvent<[BigNumber], { _amount: BigNumber }>;

export type RelayerMinVoteTokenAmountChangedEventFilter =
  TypedEventFilter<RelayerMinVoteTokenAmountChangedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface MystikoRelayerRegistry extends BaseContract {
  contractName: 'MystikoRelayerRegistry';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoRelayerRegistryInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    canDoRelay(_params: CanDoRelayParamsStruct, overrides?: CallOverrides): Promise<[boolean]>;

    changeRelayerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    daoRegistry(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;

    minVoteTokenAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceRole(
      role: BytesLike,
      callerConfirmation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    vXZK(overrides?: CallOverrides): Promise<[string]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  RELAYER_ROLE(overrides?: CallOverrides): Promise<string>;

  canDoRelay(_params: CanDoRelayParamsStruct, overrides?: CallOverrides): Promise<boolean>;

  changeRelayerMinVoteTokenAmount(
    _newMinVoteTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  daoRegistry(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

  minVoteTokenAmount(overrides?: CallOverrides): Promise<BigNumber>;

  renounceRole(
    role: BytesLike,
    callerConfirmation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  vXZK(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<string>;

    canDoRelay(_params: CanDoRelayParamsStruct, overrides?: CallOverrides): Promise<boolean>;

    changeRelayerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    daoRegistry(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

    minVoteTokenAmount(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(role: BytesLike, callerConfirmation: string, overrides?: CallOverrides): Promise<void>;

    revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    vXZK(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'RelayerMinVoteTokenAmountChanged(uint256)'(_amount?: null): RelayerMinVoteTokenAmountChangedEventFilter;
    RelayerMinVoteTokenAmountChanged(_amount?: null): RelayerMinVoteTokenAmountChangedEventFilter;

    'RoleAdminChanged(bytes32,bytes32,bytes32)'(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null,
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null,
    ): RoleAdminChangedEventFilter;

    'RoleGranted(bytes32,address,address)'(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleGrantedEventFilter;

    'RoleRevoked(bytes32,address,address)'(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    canDoRelay(_params: CanDoRelayParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;

    changeRelayerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    daoRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;

    minVoteTokenAmount(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      callerConfirmation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    vXZK(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canDoRelay(_params: CanDoRelayParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeRelayerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    daoRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minVoteTokenAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      callerConfirmation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vXZK(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
