/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { GovernanceErrors, GovernanceErrorsInterface } from '../GovernanceErrors';

const _abi = [
  {
    inputs: [],
    name: 'InvalidMystikoDAOAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyBeforeDaoInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyDeployer',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyMystikoDAO',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnauthorizedRole',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d60f83055a28b9450b3584fa451ac41752be100edfb0854db036cab4675ae27164736f6c634300081a0033';

type GovernanceErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernanceErrorsConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernanceErrors__factory extends ContractFactory {
  constructor(...args: GovernanceErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'GovernanceErrors';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<GovernanceErrors> {
    return super.deploy(overrides || {}) as Promise<GovernanceErrors>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernanceErrors {
    return super.attach(address) as GovernanceErrors;
  }
  connect(signer: Signer): GovernanceErrors__factory {
    return super.connect(signer) as GovernanceErrors__factory;
  }
  static readonly contractName: 'GovernanceErrors';
  public readonly contractName: 'GovernanceErrors';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceErrorsInterface {
    return new utils.Interface(_abi) as GovernanceErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GovernanceErrors {
    return new Contract(address, _abi, signerOrProvider) as GovernanceErrors;
  }
}
