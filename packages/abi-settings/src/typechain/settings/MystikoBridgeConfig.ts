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

export interface MystikoBridgeConfigInterface extends utils.Interface {
  contractName: 'MystikoBridgeConfig';
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment;
    'daoRegistry()': FunctionFragment;
    'getRoleAdmin(bytes32)': FunctionFragment;
    'grantRole(bytes32,address)': FunctionFragment;
    'hasRole(bytes32,address)': FunctionFragment;
    'minBridgeFeeAmount(address)': FunctionFragment;
    'minPeerExecutorFeeAmount(address)': FunctionFragment;
    'minPeerRollupFeeAmount(address)': FunctionFragment;
    'queryMinBridgeFee(address)': FunctionFragment;
    'queryMinPeerExecutorFee(address)': FunctionFragment;
    'queryMinPeerRollupFee(address)': FunctionFragment;
    'renounceRole(bytes32,address)': FunctionFragment;
    'revokeRole(bytes32,address)': FunctionFragment;
    'setMinBridgeFee(address,uint256)': FunctionFragment;
    'setMinPeerExecutorFee(address,uint256)': FunctionFragment;
    'setMinPeerRollupFee(address,uint256)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'daoRegistry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'minBridgeFeeAmount', values: [string]): string;
  encodeFunctionData(functionFragment: 'minPeerExecutorFeeAmount', values: [string]): string;
  encodeFunctionData(functionFragment: 'minPeerRollupFeeAmount', values: [string]): string;
  encodeFunctionData(functionFragment: 'queryMinBridgeFee', values: [string]): string;
  encodeFunctionData(functionFragment: 'queryMinPeerExecutorFee', values: [string]): string;
  encodeFunctionData(functionFragment: 'queryMinPeerRollupFee', values: [string]): string;
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'setMinBridgeFee', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setMinPeerExecutorFee', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setMinPeerRollupFee', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'daoRegistry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minBridgeFeeAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minPeerExecutorFeeAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minPeerRollupFeeAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queryMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queryMinPeerExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queryMinPeerRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinBridgeFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinPeerExecutorFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinPeerRollupFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;

  events: {
    'MinBridgeFeeChanged(address,uint256)': EventFragment;
    'MinPeerExecutorFeeChanged(address,uint256)': EventFragment;
    'MinPeerRollupFeeChanged(address,uint256)': EventFragment;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
    'RoleGranted(bytes32,address,address)': EventFragment;
    'RoleRevoked(bytes32,address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'MinBridgeFeeChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinPeerExecutorFeeChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinPeerRollupFeeChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
}

export type MinBridgeFeeChangedEvent = TypedEvent<
  [string, BigNumber],
  { deposit: string; minBridgeFee: BigNumber }
>;

export type MinBridgeFeeChangedEventFilter = TypedEventFilter<MinBridgeFeeChangedEvent>;

export type MinPeerExecutorFeeChangedEvent = TypedEvent<
  [string, BigNumber],
  { deposit: string; minPeerExecutorFee: BigNumber }
>;

export type MinPeerExecutorFeeChangedEventFilter = TypedEventFilter<MinPeerExecutorFeeChangedEvent>;

export type MinPeerRollupFeeChangedEvent = TypedEvent<
  [string, BigNumber],
  { deposit: string; minPeerRollupFee: BigNumber }
>;

export type MinPeerRollupFeeChangedEventFilter = TypedEventFilter<MinPeerRollupFeeChangedEvent>;

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

export interface MystikoBridgeConfig extends BaseContract {
  contractName: 'MystikoBridgeConfig';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoBridgeConfigInterface;

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

    daoRegistry(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;

    minBridgeFeeAmount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    minPeerExecutorFeeAmount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    minPeerRollupFeeAmount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    queryMinBridgeFee(_pool: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    queryMinPeerExecutorFee(_pool: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    queryMinPeerRollupFee(_pool: string, overrides?: CallOverrides): Promise<[BigNumber]>;

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

    setMinBridgeFee(
      _pool: string,
      _minBridgeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinPeerExecutorFee(
      _pool: string,
      _minPeerExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinPeerRollupFee(
      _pool: string,
      _minPeerRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  daoRegistry(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

  minBridgeFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  minPeerExecutorFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  minPeerRollupFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  queryMinBridgeFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

  queryMinPeerExecutorFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

  queryMinPeerRollupFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

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

  setMinBridgeFee(
    _pool: string,
    _minBridgeFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinPeerExecutorFee(
    _pool: string,
    _minPeerExecutorFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinPeerRollupFee(
    _pool: string,
    _minPeerRollupFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    daoRegistry(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

    minBridgeFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    minPeerExecutorFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    minPeerRollupFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    queryMinBridgeFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    queryMinPeerExecutorFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    queryMinPeerRollupFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(role: BytesLike, callerConfirmation: string, overrides?: CallOverrides): Promise<void>;

    revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    setMinBridgeFee(_pool: string, _minBridgeFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setMinPeerExecutorFee(
      _pool: string,
      _minPeerExecutorFee: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    setMinPeerRollupFee(
      _pool: string,
      _minPeerRollupFee: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'MinBridgeFeeChanged(address,uint256)'(
      deposit?: string | null,
      minBridgeFee?: null,
    ): MinBridgeFeeChangedEventFilter;
    MinBridgeFeeChanged(deposit?: string | null, minBridgeFee?: null): MinBridgeFeeChangedEventFilter;

    'MinPeerExecutorFeeChanged(address,uint256)'(
      deposit?: string | null,
      minPeerExecutorFee?: null,
    ): MinPeerExecutorFeeChangedEventFilter;
    MinPeerExecutorFeeChanged(
      deposit?: string | null,
      minPeerExecutorFee?: null,
    ): MinPeerExecutorFeeChangedEventFilter;

    'MinPeerRollupFeeChanged(address,uint256)'(
      deposit?: string | null,
      minPeerRollupFee?: null,
    ): MinPeerRollupFeeChangedEventFilter;
    MinPeerRollupFeeChanged(
      deposit?: string | null,
      minPeerRollupFee?: null,
    ): MinPeerRollupFeeChangedEventFilter;

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

    daoRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;

    minBridgeFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    minPeerExecutorFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    minPeerRollupFeeAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    queryMinBridgeFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    queryMinPeerExecutorFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    queryMinPeerRollupFee(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

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

    setMinBridgeFee(
      _pool: string,
      _minBridgeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMinPeerExecutorFee(
      _pool: string,
      _minPeerExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMinPeerRollupFee(
      _pool: string,
      _minPeerRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minBridgeFeeAmount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minPeerExecutorFeeAmount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minPeerRollupFeeAmount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryMinBridgeFee(_pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryMinPeerExecutorFee(_pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryMinPeerRollupFee(_pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setMinBridgeFee(
      _pool: string,
      _minBridgeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinPeerExecutorFee(
      _pool: string,
      _minPeerExecutorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinPeerRollupFee(
      _pool: string,
      _minPeerRollupFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
