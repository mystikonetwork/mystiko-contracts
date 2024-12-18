/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MockSanctionList, MockSanctionListInterface } from '../MockSanctionList';

const _abi = [
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'addToSanctionsList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'isSanctioned',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'removeFromSanctionsList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608080604052346015576101a9908161001b8239f35b600080fdfe6080604052600436101561005e575b60405162461bcd60e51b815260206004820152602260248201527f46616c6c6261636b2066756e6374696f6e204d6f636b53616e6374696f6e4c696044820152611cdd60f21b6064820152608490fd5b60003560e01c806325186bd014610124578063933e2c93146100d85763df592f7d0361000e57346100d35760203660031901126100d35760043573ffffffffffffffffffffffffffffffffffffffff81168091036100d3576000526000602052602060ff604060002054166040519015158152f35b600080fd5b346100d35760203660031901126100d35760043573ffffffffffffffffffffffffffffffffffffffff81168091036100d3576000526000602052604060002060ff198154169055600080f35b346100d35760203660031901126100d35760043573ffffffffffffffffffffffffffffffffffffffff81168091036100d35760005260006020526040600020600160ff19825416179055600080f3fea26469706673582212208f38367ebe0f98c84f0a53e113a5fd5b356bbebcbcea47a74eab506aa0459cf564736f6c634300081a0033';

type MockSanctionListConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockSanctionListConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockSanctionList__factory extends ContractFactory {
  constructor(...args: MockSanctionListConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MockSanctionList';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MockSanctionList> {
    return super.deploy(overrides || {}) as Promise<MockSanctionList>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockSanctionList {
    return super.attach(address) as MockSanctionList;
  }
  connect(signer: Signer): MockSanctionList__factory {
    return super.connect(signer) as MockSanctionList__factory;
  }
  static readonly contractName: 'MockSanctionList';
  public readonly contractName: 'MockSanctionList';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockSanctionListInterface {
    return new utils.Interface(_abi) as MockSanctionListInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockSanctionList {
    return new Contract(address, _abi, signerOrProvider) as MockSanctionList;
  }
}
