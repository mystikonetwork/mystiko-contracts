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

export type CertificateParamsStruct = {
  account: string;
  asset: string;
  deadline: BigNumberish;
  signature: BytesLike;
};

export type CertificateParamsStructOutput = [string, string, BigNumber, string] & {
  account: string;
  asset: string;
  deadline: BigNumber;
  signature: string;
};

export interface MystikoCertificateInterface extends utils.Interface {
  contractName: 'MystikoCertificate';
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment;
    'certCheckEnabled()': FunctionFragment;
    'daoRegistry()': FunctionFragment;
    'disableCertificateCheck()': FunctionFragment;
    'enableCertificateCheck()': FunctionFragment;
    'getCertificateIssuer()': FunctionFragment;
    'getRoleAdmin(bytes32)': FunctionFragment;
    'grantRole(bytes32,address)': FunctionFragment;
    'hasRole(bytes32,address)': FunctionFragment;
    'isCertificateCheckEnabled()': FunctionFragment;
    'issuer()': FunctionFragment;
    'renounceRole(bytes32,address)': FunctionFragment;
    'revokeRole(bytes32,address)': FunctionFragment;
    'setIssuerAddress(address)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'verifyCertificate((address,address,uint256,bytes))': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'certCheckEnabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'daoRegistry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'disableCertificateCheck', values?: undefined): string;
  encodeFunctionData(functionFragment: 'enableCertificateCheck', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getCertificateIssuer', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'isCertificateCheckEnabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'issuer', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'setIssuerAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'verifyCertificate', values: [CertificateParamsStruct]): string;

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'certCheckEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'daoRegistry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disableCertificateCheck', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enableCertificateCheck', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCertificateIssuer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isCertificateCheckEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issuer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setIssuerAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'verifyCertificate', data: BytesLike): Result;

  events: {
    'CertificateCheck(bool)': EventFragment;
    'IssuerChanged(address)': EventFragment;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
    'RoleGranted(bytes32,address,address)': EventFragment;
    'RoleRevoked(bytes32,address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CertificateCheck'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'IssuerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
}

export type CertificateCheckEvent = TypedEvent<[boolean], { state: boolean }>;

export type CertificateCheckEventFilter = TypedEventFilter<CertificateCheckEvent>;

export type IssuerChangedEvent = TypedEvent<[string], { issuer: string }>;

export type IssuerChangedEventFilter = TypedEventFilter<IssuerChangedEvent>;

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

export interface MystikoCertificate extends BaseContract {
  contractName: 'MystikoCertificate';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MystikoCertificateInterface;

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

    certCheckEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    daoRegistry(overrides?: CallOverrides): Promise<[string]>;

    disableCertificateCheck(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    enableCertificateCheck(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getCertificateIssuer(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    issuer(overrides?: CallOverrides): Promise<[string]>;

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

    setIssuerAddress(
      _newIssuer: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    verifyCertificate(_params: CertificateParamsStruct, overrides?: CallOverrides): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  certCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

  daoRegistry(overrides?: CallOverrides): Promise<string>;

  disableCertificateCheck(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  enableCertificateCheck(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getCertificateIssuer(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

  isCertificateCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

  issuer(overrides?: CallOverrides): Promise<string>;

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

  setIssuerAddress(
    _newIssuer: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  verifyCertificate(_params: CertificateParamsStruct, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    certCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

    daoRegistry(overrides?: CallOverrides): Promise<string>;

    disableCertificateCheck(overrides?: CallOverrides): Promise<void>;

    enableCertificateCheck(overrides?: CallOverrides): Promise<void>;

    getCertificateIssuer(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<boolean>;

    issuer(overrides?: CallOverrides): Promise<string>;

    renounceRole(role: BytesLike, callerConfirmation: string, overrides?: CallOverrides): Promise<void>;

    revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    setIssuerAddress(_newIssuer: string, overrides?: CallOverrides): Promise<void>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    verifyCertificate(_params: CertificateParamsStruct, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'CertificateCheck(bool)'(state?: null): CertificateCheckEventFilter;
    CertificateCheck(state?: null): CertificateCheckEventFilter;

    'IssuerChanged(address)'(issuer?: null): IssuerChangedEventFilter;
    IssuerChanged(issuer?: null): IssuerChangedEventFilter;

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

    certCheckEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    daoRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    disableCertificateCheck(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    enableCertificateCheck(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getCertificateIssuer(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    issuer(overrides?: CallOverrides): Promise<BigNumber>;

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

    setIssuerAddress(
      _newIssuer: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    verifyCertificate(_params: CertificateParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    certCheckEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableCertificateCheck(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    enableCertificateCheck(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getCertificateIssuer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCertificateCheckEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issuer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setIssuerAddress(
      _newIssuer: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyCertificate(
      _params: CertificateParamsStruct,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}