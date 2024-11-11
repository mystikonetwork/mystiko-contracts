/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Pairing, PairingInterface } from '../Pairing';

const _abi = [
  {
    inputs: [],
    name: 'StaticCallFailed',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220be3ec9f67cb0b245f1c82098cc3afe1166d578538892eb6acd8a4384bbcd277364736f6c634300081a0033';

type PairingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: PairingConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class Pairing__factory extends ContractFactory {
  constructor(...args: PairingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Pairing';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Pairing> {
    return super.deploy(overrides || {}) as Promise<Pairing>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Pairing {
    return super.attach(address) as Pairing;
  }
  connect(signer: Signer): Pairing__factory {
    return super.connect(signer) as Pairing__factory;
  }
  static readonly contractName: 'Pairing';
  public readonly contractName: 'Pairing';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PairingInterface {
    return new utils.Interface(_abi) as PairingInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Pairing {
    return new Contract(address, _abi, signerOrProvider) as Pairing;
  }
}
