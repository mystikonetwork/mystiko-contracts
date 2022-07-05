/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { CustomErrors, CustomErrorsInterface } from '../CustomErrors';

const _abi = [
  {
    inputs: [],
    name: 'CommitmentHasBeenSubmitted',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'Duplicated',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IndexOutOfBound',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'Invalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NewRootGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NewRootIsDuplicated',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoteHasBeenSpent',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyOperator',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyWhitelistedRoller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyWhitelistedSender',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupFeeToFew',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SanctionedAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TreeHeightLessThanZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TreeIsFull',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220df12c3982338f8707f01949e80405aa23fcff14782115772889f8a33afcd8f3a64736f6c63430008070033';

type CustomErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CustomErrorsConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CustomErrors__factory extends ContractFactory {
  constructor(...args: CustomErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'CustomErrors';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CustomErrors> {
    return super.deploy(overrides || {}) as Promise<CustomErrors>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CustomErrors {
    return super.attach(address) as CustomErrors;
  }
  connect(signer: Signer): CustomErrors__factory {
    return super.connect(signer) as CustomErrors__factory;
  }
  static readonly contractName: 'CustomErrors';
  public readonly contractName: 'CustomErrors';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CustomErrorsInterface {
    return new utils.Interface(_abi) as CustomErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CustomErrors {
    return new Contract(address, _abi, signerOrProvider) as CustomErrors;
  }
}
