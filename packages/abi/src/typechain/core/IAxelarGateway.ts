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
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IAxelarGatewayInterface extends utils.Interface {
  contractName: "IAxelarGateway";
  functions: {
    "adminEpoch()": FunctionFragment;
    "adminThreshold(uint256)": FunctionFragment;
    "admins(uint256)": FunctionFragment;
    "allTokensFrozen()": FunctionFragment;
    "callContract(string,string,bytes)": FunctionFragment;
    "callContractWithToken(string,string,bytes,string,uint256)": FunctionFragment;
    "execute(bytes)": FunctionFragment;
    "freezeAllTokens()": FunctionFragment;
    "freezeToken(string)": FunctionFragment;
    "implementation()": FunctionFragment;
    "isCommandExecuted(bytes32)": FunctionFragment;
    "isContractCallAndMintApproved(bytes32,string,string,address,bytes32,string,uint256)": FunctionFragment;
    "isContractCallApproved(bytes32,string,string,address,bytes32)": FunctionFragment;
    "sendToken(string,string,string,uint256)": FunctionFragment;
    "setup(bytes)": FunctionFragment;
    "tokenAddresses(string)": FunctionFragment;
    "tokenFrozen(string)": FunctionFragment;
    "unfreezeAllTokens()": FunctionFragment;
    "unfreezeToken(string)": FunctionFragment;
    "upgrade(address,bytes32,bytes)": FunctionFragment;
    "validateContractCall(bytes32,string,string,bytes32)": FunctionFragment;
    "validateContractCallAndMint(bytes32,string,string,bytes32,string,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "adminEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adminThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "admins",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allTokensFrozen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callContract",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "callContractWithToken",
    values: [string, string, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "execute", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "freezeAllTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "freezeToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isCommandExecuted",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isContractCallAndMintApproved",
    values: [BytesLike, string, string, string, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isContractCallApproved",
    values: [BytesLike, string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendToken",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setup", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "tokenAddresses",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tokenFrozen", values: [string]): string;
  encodeFunctionData(
    functionFragment: "unfreezeAllTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unfreezeToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgrade",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateContractCall",
    values: [BytesLike, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateContractCallAndMint",
    values: [BytesLike, string, string, BytesLike, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "adminEpoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allTokensFrozen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callContractWithToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "freezeAllTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCommandExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isContractCallAndMintApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isContractCallApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenFrozen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezeAllTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateContractCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateContractCallAndMint",
    data: BytesLike
  ): Result;

  events: {
    "AccountBlacklisted(address)": EventFragment;
    "AccountWhitelisted(address)": EventFragment;
    "AllTokensFrozen()": EventFragment;
    "AllTokensUnfrozen()": EventFragment;
    "ContractCall(address,string,string,bytes32,bytes)": EventFragment;
    "ContractCallApproved(bytes32,string,string,address,bytes32,bytes32,uint256)": EventFragment;
    "ContractCallApprovedWithMint(bytes32,string,string,address,bytes32,string,uint256,bytes32,uint256)": EventFragment;
    "ContractCallWithToken(address,string,string,bytes32,bytes,string,uint256)": EventFragment;
    "Executed(bytes32)": EventFragment;
    "TokenDeployed(string,address)": EventFragment;
    "TokenFrozen(string)": EventFragment;
    "TokenSent(address,string,string,string,uint256)": EventFragment;
    "TokenUnfrozen(string)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountBlacklisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountWhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllTokensFrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllTokensUnfrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractCall"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractCallApproved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ContractCallApprovedWithMint"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractCallWithToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenFrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUnfrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export type AccountBlacklistedEvent = TypedEvent<[string], { account: string }>;

export type AccountBlacklistedEventFilter =
  TypedEventFilter<AccountBlacklistedEvent>;

export type AccountWhitelistedEvent = TypedEvent<[string], { account: string }>;

export type AccountWhitelistedEventFilter =
  TypedEventFilter<AccountWhitelistedEvent>;

export type AllTokensFrozenEvent = TypedEvent<[], {}>;

export type AllTokensFrozenEventFilter = TypedEventFilter<AllTokensFrozenEvent>;

export type AllTokensUnfrozenEvent = TypedEvent<[], {}>;

export type AllTokensUnfrozenEventFilter =
  TypedEventFilter<AllTokensUnfrozenEvent>;

export type ContractCallEvent = TypedEvent<
  [string, string, string, string, string],
  {
    sender: string;
    destinationChain: string;
    destinationContractAddress: string;
    payloadHash: string;
    payload: string;
  }
>;

export type ContractCallEventFilter = TypedEventFilter<ContractCallEvent>;

export type ContractCallApprovedEvent = TypedEvent<
  [string, string, string, string, string, string, BigNumber],
  {
    commandId: string;
    sourceChain: string;
    sourceAddress: string;
    contractAddress: string;
    payloadHash: string;
    sourceTxHash: string;
    sourceEventIndex: BigNumber;
  }
>;

export type ContractCallApprovedEventFilter =
  TypedEventFilter<ContractCallApprovedEvent>;

export type ContractCallApprovedWithMintEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber
  ],
  {
    commandId: string;
    sourceChain: string;
    sourceAddress: string;
    contractAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    sourceTxHash: string;
    sourceEventIndex: BigNumber;
  }
>;

export type ContractCallApprovedWithMintEventFilter =
  TypedEventFilter<ContractCallApprovedWithMintEvent>;

export type ContractCallWithTokenEvent = TypedEvent<
  [string, string, string, string, string, string, BigNumber],
  {
    sender: string;
    destinationChain: string;
    destinationContractAddress: string;
    payloadHash: string;
    payload: string;
    symbol: string;
    amount: BigNumber;
  }
>;

export type ContractCallWithTokenEventFilter =
  TypedEventFilter<ContractCallWithTokenEvent>;

export type ExecutedEvent = TypedEvent<[string], { commandId: string }>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export type TokenDeployedEvent = TypedEvent<
  [string, string],
  { symbol: string; tokenAddresses: string }
>;

export type TokenDeployedEventFilter = TypedEventFilter<TokenDeployedEvent>;

export type TokenFrozenEvent = TypedEvent<[string], { symbol: string }>;

export type TokenFrozenEventFilter = TypedEventFilter<TokenFrozenEvent>;

export type TokenSentEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  {
    sender: string;
    destinationChain: string;
    destinationAddress: string;
    symbol: string;
    amount: BigNumber;
  }
>;

export type TokenSentEventFilter = TypedEventFilter<TokenSentEvent>;

export type TokenUnfrozenEvent = TypedEvent<[string], { symbol: string }>;

export type TokenUnfrozenEventFilter = TypedEventFilter<TokenUnfrozenEvent>;

export type UpgradedEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface IAxelarGateway extends BaseContract {
  contractName: "IAxelarGateway";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAxelarGatewayInterface;

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
    adminEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    adminThreshold(
      epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<[string[]]>;

    allTokensFrozen(overrides?: CallOverrides): Promise<[boolean]>;

    callContract(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callContractWithToken(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      input: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    freezeAllTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    freezeToken(
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    isCommandExecuted(
      commandId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isContractCallAndMintApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isContractCallApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    sendToken(
      destinationChain: string,
      destinationAddress: string,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setup(
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenAddresses(
      symbol: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<[boolean]>;

    unfreezeAllTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unfreezeToken(
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgrade(
      newImplementation: string,
      newImplementationCodeHash: BytesLike,
      setupParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateContractCall(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateContractCallAndMint(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  adminEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  adminThreshold(
    epoch: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<string[]>;

  allTokensFrozen(overrides?: CallOverrides): Promise<boolean>;

  callContract(
    destinationChain: string,
    contractAddress: string,
    payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callContractWithToken(
    destinationChain: string,
    contractAddress: string,
    payload: BytesLike,
    symbol: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    input: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  freezeAllTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  freezeToken(
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  isCommandExecuted(
    commandId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isContractCallAndMintApproved(
    commandId: BytesLike,
    sourceChain: string,
    sourceAddress: string,
    contractAddress: string,
    payloadHash: BytesLike,
    symbol: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isContractCallApproved(
    commandId: BytesLike,
    sourceChain: string,
    sourceAddress: string,
    contractAddress: string,
    payloadHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  sendToken(
    destinationChain: string,
    destinationAddress: string,
    symbol: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setup(
    params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenAddresses(symbol: string, overrides?: CallOverrides): Promise<string>;

  tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<boolean>;

  unfreezeAllTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unfreezeToken(
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgrade(
    newImplementation: string,
    newImplementationCodeHash: BytesLike,
    setupParams: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateContractCall(
    commandId: BytesLike,
    sourceChain: string,
    sourceAddress: string,
    payloadHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateContractCallAndMint(
    commandId: BytesLike,
    sourceChain: string,
    sourceAddress: string,
    payloadHash: BytesLike,
    symbol: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    adminEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    adminThreshold(
      epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<string[]>;

    allTokensFrozen(overrides?: CallOverrides): Promise<boolean>;

    callContract(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    callContractWithToken(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(input: BytesLike, overrides?: CallOverrides): Promise<void>;

    freezeAllTokens(overrides?: CallOverrides): Promise<void>;

    freezeToken(symbol: string, overrides?: CallOverrides): Promise<void>;

    implementation(overrides?: CallOverrides): Promise<string>;

    isCommandExecuted(
      commandId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isContractCallAndMintApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isContractCallApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sendToken(
      destinationChain: string,
      destinationAddress: string,
      symbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setup(params: BytesLike, overrides?: CallOverrides): Promise<void>;

    tokenAddresses(symbol: string, overrides?: CallOverrides): Promise<string>;

    tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<boolean>;

    unfreezeAllTokens(overrides?: CallOverrides): Promise<void>;

    unfreezeToken(symbol: string, overrides?: CallOverrides): Promise<void>;

    upgrade(
      newImplementation: string,
      newImplementationCodeHash: BytesLike,
      setupParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validateContractCall(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateContractCallAndMint(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AccountBlacklisted(address)"(
      account?: string | null
    ): AccountBlacklistedEventFilter;
    AccountBlacklisted(account?: string | null): AccountBlacklistedEventFilter;

    "AccountWhitelisted(address)"(
      account?: string | null
    ): AccountWhitelistedEventFilter;
    AccountWhitelisted(account?: string | null): AccountWhitelistedEventFilter;

    "AllTokensFrozen()"(): AllTokensFrozenEventFilter;
    AllTokensFrozen(): AllTokensFrozenEventFilter;

    "AllTokensUnfrozen()"(): AllTokensUnfrozenEventFilter;
    AllTokensUnfrozen(): AllTokensUnfrozenEventFilter;

    "ContractCall(address,string,string,bytes32,bytes)"(
      sender?: string | null,
      destinationChain?: null,
      destinationContractAddress?: null,
      payloadHash?: BytesLike | null,
      payload?: null
    ): ContractCallEventFilter;
    ContractCall(
      sender?: string | null,
      destinationChain?: null,
      destinationContractAddress?: null,
      payloadHash?: BytesLike | null,
      payload?: null
    ): ContractCallEventFilter;

    "ContractCallApproved(bytes32,string,string,address,bytes32,bytes32,uint256)"(
      commandId?: BytesLike | null,
      sourceChain?: null,
      sourceAddress?: null,
      contractAddress?: string | null,
      payloadHash?: BytesLike | null,
      sourceTxHash?: null,
      sourceEventIndex?: null
    ): ContractCallApprovedEventFilter;
    ContractCallApproved(
      commandId?: BytesLike | null,
      sourceChain?: null,
      sourceAddress?: null,
      contractAddress?: string | null,
      payloadHash?: BytesLike | null,
      sourceTxHash?: null,
      sourceEventIndex?: null
    ): ContractCallApprovedEventFilter;

    "ContractCallApprovedWithMint(bytes32,string,string,address,bytes32,string,uint256,bytes32,uint256)"(
      commandId?: BytesLike | null,
      sourceChain?: null,
      sourceAddress?: null,
      contractAddress?: string | null,
      payloadHash?: BytesLike | null,
      symbol?: null,
      amount?: null,
      sourceTxHash?: null,
      sourceEventIndex?: null
    ): ContractCallApprovedWithMintEventFilter;
    ContractCallApprovedWithMint(
      commandId?: BytesLike | null,
      sourceChain?: null,
      sourceAddress?: null,
      contractAddress?: string | null,
      payloadHash?: BytesLike | null,
      symbol?: null,
      amount?: null,
      sourceTxHash?: null,
      sourceEventIndex?: null
    ): ContractCallApprovedWithMintEventFilter;

    "ContractCallWithToken(address,string,string,bytes32,bytes,string,uint256)"(
      sender?: string | null,
      destinationChain?: null,
      destinationContractAddress?: null,
      payloadHash?: BytesLike | null,
      payload?: null,
      symbol?: null,
      amount?: null
    ): ContractCallWithTokenEventFilter;
    ContractCallWithToken(
      sender?: string | null,
      destinationChain?: null,
      destinationContractAddress?: null,
      payloadHash?: BytesLike | null,
      payload?: null,
      symbol?: null,
      amount?: null
    ): ContractCallWithTokenEventFilter;

    "Executed(bytes32)"(commandId?: BytesLike | null): ExecutedEventFilter;
    Executed(commandId?: BytesLike | null): ExecutedEventFilter;

    "TokenDeployed(string,address)"(
      symbol?: null,
      tokenAddresses?: null
    ): TokenDeployedEventFilter;
    TokenDeployed(
      symbol?: null,
      tokenAddresses?: null
    ): TokenDeployedEventFilter;

    "TokenFrozen(string)"(symbol?: null): TokenFrozenEventFilter;
    TokenFrozen(symbol?: null): TokenFrozenEventFilter;

    "TokenSent(address,string,string,string,uint256)"(
      sender?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      symbol?: null,
      amount?: null
    ): TokenSentEventFilter;
    TokenSent(
      sender?: string | null,
      destinationChain?: null,
      destinationAddress?: null,
      symbol?: null,
      amount?: null
    ): TokenSentEventFilter;

    "TokenUnfrozen(string)"(symbol?: null): TokenUnfrozenEventFilter;
    TokenUnfrozen(symbol?: null): TokenUnfrozenEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    adminEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    adminThreshold(
      epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    allTokensFrozen(overrides?: CallOverrides): Promise<BigNumber>;

    callContract(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    callContractWithToken(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      input: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    freezeAllTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    freezeToken(
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    isCommandExecuted(
      commandId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isContractCallAndMintApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isContractCallApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendToken(
      destinationChain: string,
      destinationAddress: string,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setup(
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenAddresses(
      symbol: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;

    unfreezeAllTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unfreezeToken(
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgrade(
      newImplementation: string,
      newImplementationCodeHash: BytesLike,
      setupParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateContractCall(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateContractCallAndMint(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adminEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminThreshold(
      epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admins(
      epoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allTokensFrozen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callContract(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    callContractWithToken(
      destinationChain: string,
      contractAddress: string,
      payload: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      input: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    freezeAllTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    freezeToken(
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCommandExecuted(
      commandId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isContractCallAndMintApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isContractCallApproved(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      contractAddress: string,
      payloadHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendToken(
      destinationChain: string,
      destinationAddress: string,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setup(
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenAddresses(
      symbol: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenFrozen(
      symbol: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unfreezeAllTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unfreezeToken(
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgrade(
      newImplementation: string,
      newImplementationCodeHash: BytesLike,
      setupParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateContractCall(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateContractCallAndMint(
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payloadHash: BytesLike,
      symbol: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}