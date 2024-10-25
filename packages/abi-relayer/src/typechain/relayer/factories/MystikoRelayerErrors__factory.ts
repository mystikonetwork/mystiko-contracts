/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoRelayerErrors, MystikoRelayerErrorsInterface } from '../MystikoRelayerErrors';

const _abi = [
  {
    inputs: [],
    name: 'AlreadyRegistered',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DuplicateName',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DuplicateUrl',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientBalanceForAction',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NameLengthTooBig',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NameLengthTooShort',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyRelayer',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RelayerIndexError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RelayerUnregistered',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UrlLengthTooBig',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122030656c67b787f807809d888ea1019e89bd63bbdeb6319b6008136b54fcbd6d8164736f6c634300081a0033';

type MystikoRelayerErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoRelayerErrorsConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoRelayerErrors__factory extends ContractFactory {
  constructor(...args: MystikoRelayerErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoRelayerErrors';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MystikoRelayerErrors> {
    return super.deploy(overrides || {}) as Promise<MystikoRelayerErrors>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MystikoRelayerErrors {
    return super.attach(address) as MystikoRelayerErrors;
  }
  connect(signer: Signer): MystikoRelayerErrors__factory {
    return super.connect(signer) as MystikoRelayerErrors__factory;
  }
  static readonly contractName: 'MystikoRelayerErrors';
  public readonly contractName: 'MystikoRelayerErrors';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoRelayerErrorsInterface {
    return new utils.Interface(_abi) as MystikoRelayerErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoRelayerErrors {
    return new Contract(address, _abi, signerOrProvider) as MystikoRelayerErrors;
  }
}
