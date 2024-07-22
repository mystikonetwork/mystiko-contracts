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
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208ee8130c04e098ff4ea123b40a6200057fc1e933b979bd4ca2744edeec3ec44c64736f6c634300081a0033';

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
