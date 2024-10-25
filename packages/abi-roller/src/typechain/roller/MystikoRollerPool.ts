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

export interface MystikoRollerPoolInterface extends utils.Interface {
  contractName: 'MystikoRollerPool';
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment;
    'ROLLER_ROLE()': FunctionFragment;
    'daoRegistry()': FunctionFragment;
    'getRoleAdmin(bytes32)': FunctionFragment;
    'grantRole(bytes32,address)': FunctionFragment;
    'hasRole(bytes32,address)': FunctionFragment;
    'minRollupSize()': FunctionFragment;
    'minVoteTokenAmount()': FunctionFragment;
    'renounceRole(bytes32,address)': FunctionFragment;
    'revokeRole(bytes32,address)': FunctionFragment;
    'setAdminRole()': FunctionFragment;
    'setMinRollupSize(uint256)': FunctionFragment;
    'setRollerMinVoteTokenAmount(uint256)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'vXZK()': FunctionFragment;
    'validateRoller((address,address,uint256,uint256,uint256))': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ROLLER_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'daoRegistry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'minRollupSize', values?: undefined): string;
  encodeFunctionData(functionFragment: 'minVoteTokenAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'setAdminRole', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setMinRollupSize', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setRollerMinVoteTokenAmount', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'vXZK', values?: undefined): string;
  encodeFunctionData(functionFragment: 'validateRoller', values: [RollerValidateParamsStruct]): string;

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ROLLER_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'daoRegistry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minRollupSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minVoteTokenAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAdminRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinRollupSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRollerMinVoteTokenAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vXZK', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'validateRoller', data: BytesLike): Result;

  events: {
    'MinRollupSizeChanged(uint256)': EventFragment;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
    'RoleGranted(bytes32,address,address)': EventFragment;
    'RoleRevoked(bytes32,address,address)': EventFragment;
    'RollerMinVoteTokenAmountChanged(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'MinRollupSizeChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RollerMinVoteTokenAmountChanged'): EventFragment;
}

export type MinRollupSizeChangedEvent = TypedEvent<[BigNumber], { _size: BigNumber }>;

export type MinRollupSizeChangedEventFilter = TypedEventFilter<MinRollupSizeChangedEvent>;

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

export type RollerMinVoteTokenAmountChangedEvent = TypedEvent<[BigNumber], { _amount: BigNumber }>;

export type RollerMinVoteTokenAmountChangedEventFilter =
  TypedEventFilter<RollerMinVoteTokenAmountChangedEvent>;

export interface MystikoRollerPool extends BaseContract {
  contractName: 'MystikoRollerPool';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoRollerPoolInterface;

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

    ROLLER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    daoRegistry(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;

    minRollupSize(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    setAdminRole(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setMinRollupSize(
      _newMinRollupSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRollerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    vXZK(overrides?: CallOverrides): Promise<[string]>;

    validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  ROLLER_ROLE(overrides?: CallOverrides): Promise<string>;

  daoRegistry(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

  minRollupSize(overrides?: CallOverrides): Promise<BigNumber>;

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

  setAdminRole(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setMinRollupSize(
    _newMinRollupSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setRollerMinVoteTokenAmount(
    _newMinVoteTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  vXZK(overrides?: CallOverrides): Promise<string>;

  validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    ROLLER_ROLE(overrides?: CallOverrides): Promise<string>;

    daoRegistry(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

    minRollupSize(overrides?: CallOverrides): Promise<BigNumber>;

    minVoteTokenAmount(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(role: BytesLike, callerConfirmation: string, overrides?: CallOverrides): Promise<void>;

    revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    setAdminRole(overrides?: CallOverrides): Promise<void>;

    setMinRollupSize(_newMinRollupSize: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setRollerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    vXZK(overrides?: CallOverrides): Promise<string>;

    validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'MinRollupSizeChanged(uint256)'(_size?: null): MinRollupSizeChangedEventFilter;
    MinRollupSizeChanged(_size?: null): MinRollupSizeChangedEventFilter;

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

    'RollerMinVoteTokenAmountChanged(uint256)'(_amount?: null): RollerMinVoteTokenAmountChangedEventFilter;
    RollerMinVoteTokenAmountChanged(_amount?: null): RollerMinVoteTokenAmountChangedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    ROLLER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    daoRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;

    minRollupSize(overrides?: CallOverrides): Promise<BigNumber>;

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

    setAdminRole(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setMinRollupSize(
      _newMinRollupSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setRollerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    vXZK(overrides?: CallOverrides): Promise<BigNumber>;

    validateRoller(_params: RollerValidateParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROLLER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minRollupSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setAdminRole(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setMinRollupSize(
      _newMinRollupSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setRollerMinVoteTokenAmount(
      _newMinVoteTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vXZK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validateRoller(
      _params: RollerValidateParamsStruct,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
