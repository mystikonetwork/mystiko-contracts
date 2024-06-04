/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoSettingsErrors, MystikoSettingsErrorsInterface } from '../MystikoSettingsErrors';

const _abi = [
  {
    inputs: [],
    name: 'AuditorIndexError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientBalanceForAction',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidDepositAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidNumInputs',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidRollupFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidRollupSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupSizeNotPowerOfTwo',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupSizeTooSmall',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a7b9564e61303b045df7f84bee45b3dc9a3defc8716b85dd6718691dca4ea87264736f6c63430008140033';

type MystikoSettingsErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoSettingsErrorsConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoSettingsErrors__factory extends ContractFactory {
  constructor(...args: MystikoSettingsErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoSettingsErrors';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MystikoSettingsErrors> {
    return super.deploy(overrides || {}) as Promise<MystikoSettingsErrors>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MystikoSettingsErrors {
    return super.attach(address) as MystikoSettingsErrors;
  }
  connect(signer: Signer): MystikoSettingsErrors__factory {
    return super.connect(signer) as MystikoSettingsErrors__factory;
  }
  static readonly contractName: 'MystikoSettingsErrors';
  public readonly contractName: 'MystikoSettingsErrors';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoSettingsErrorsInterface {
    return new utils.Interface(_abi) as MystikoSettingsErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoSettingsErrors {
    return new Contract(address, _abi, signerOrProvider) as MystikoSettingsErrors;
  }
}
