/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Checkpoints, CheckpointsInterface } from '../Checkpoints';

const _abi = [
  {
    inputs: [],
    name: 'CheckpointUnorderedInsertion',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220616af6e3288290c67108437bb52e848475d15fefc7791bc51aa79ec79c277a9c64736f6c63430008140033';

type CheckpointsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: CheckpointsConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class Checkpoints__factory extends ContractFactory {
  constructor(...args: CheckpointsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Checkpoints';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Checkpoints> {
    return super.deploy(overrides || {}) as Promise<Checkpoints>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Checkpoints {
    return super.attach(address) as Checkpoints;
  }
  connect(signer: Signer): Checkpoints__factory {
    return super.connect(signer) as Checkpoints__factory;
  }
  static readonly contractName: 'Checkpoints';
  public readonly contractName: 'Checkpoints';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheckpointsInterface {
    return new utils.Interface(_abi) as CheckpointsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Checkpoints {
    return new Contract(address, _abi, signerOrProvider) as Checkpoints;
  }
}