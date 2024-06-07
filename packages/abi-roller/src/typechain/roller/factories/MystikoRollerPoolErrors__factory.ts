/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoRollerPoolErrors, MystikoRollerPoolErrorsInterface } from '../MystikoRollerPoolErrors';

const _abi = [
  {
    inputs: [],
    name: 'InsufficientBalanceForAction',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupSizeTooSmall',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122054e05ca2cda177977720f1c51762275db51f65d461f1326e70075eb176d3b10664736f6c63430008140033';

type MystikoRollerPoolErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoRollerPoolErrorsConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoRollerPoolErrors__factory extends ContractFactory {
  constructor(...args: MystikoRollerPoolErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoRollerPoolErrors';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MystikoRollerPoolErrors> {
    return super.deploy(overrides || {}) as Promise<MystikoRollerPoolErrors>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MystikoRollerPoolErrors {
    return super.attach(address) as MystikoRollerPoolErrors;
  }
  connect(signer: Signer): MystikoRollerPoolErrors__factory {
    return super.connect(signer) as MystikoRollerPoolErrors__factory;
  }
  static readonly contractName: 'MystikoRollerPoolErrors';
  public readonly contractName: 'MystikoRollerPoolErrors';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoRollerPoolErrorsInterface {
    return new utils.Interface(_abi) as MystikoRollerPoolErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoRollerPoolErrors {
    return new Contract(address, _abi, signerOrProvider) as MystikoRollerPoolErrors;
  }
}