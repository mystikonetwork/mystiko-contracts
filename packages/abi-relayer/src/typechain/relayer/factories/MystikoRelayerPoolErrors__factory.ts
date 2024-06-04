/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  MystikoRelayerPoolErrors,
  MystikoRelayerPoolErrorsInterface,
} from '../MystikoRelayerPoolErrors';

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
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f69f27d25a2fe3b914add216b8319be3afd634bb26f3c31131a7b4f9c509951664736f6c63430008140033';

type MystikoRelayerPoolErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoRelayerPoolErrorsConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoRelayerPoolErrors__factory extends ContractFactory {
  constructor(...args: MystikoRelayerPoolErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoRelayerPoolErrors';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MystikoRelayerPoolErrors> {
    return super.deploy(overrides || {}) as Promise<MystikoRelayerPoolErrors>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MystikoRelayerPoolErrors {
    return super.attach(address) as MystikoRelayerPoolErrors;
  }
  connect(signer: Signer): MystikoRelayerPoolErrors__factory {
    return super.connect(signer) as MystikoRelayerPoolErrors__factory;
  }
  static readonly contractName: 'MystikoRelayerPoolErrors';
  public readonly contractName: 'MystikoRelayerPoolErrors';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoRelayerPoolErrorsInterface {
    return new utils.Interface(_abi) as MystikoRelayerPoolErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoRelayerPoolErrors {
    return new Contract(address, _abi, signerOrProvider) as MystikoRelayerPoolErrors;
  }
}
