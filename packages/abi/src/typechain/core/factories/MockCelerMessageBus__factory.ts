/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MockCelerMessageBus, MockCelerMessageBusInterface } from '../MockCelerMessageBus';

const _abi = [
  {
    inputs: [],
    name: 'chainIdA',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'chainIdB',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractAddressA',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractAddressB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_dstChainId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_message',
        type: 'bytes',
      },
    ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_chainIdA',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: '_contractAddressA',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: '_chainIdB',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: '_contractAddressB',
        type: 'address',
      },
    ],
    name: 'setChainPair',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506105af806100206000396000f3fe6080604052600436106100655760003560e01c806372b53dfa1161004357806372b53dfa146101095780639f3ce55a1461018a578063bbfb52fb1461019d57600080fd5b8063063e71281461006a57806310ef7795146100a95780632e60121f146100e8575b600080fd5b34801561007657600080fd5b5060005461008b9067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020015b60405180910390f35b3480156100b557600080fd5b506000546100d090600160401b90046001600160a01b031681565b6040516001600160a01b0390911681526020016100a0565b3480156100f457600080fd5b5060015461008b9067ffffffffffffffff1681565b34801561011557600080fd5b50610188610124366004610395565b6000805467ffffffffffffffff9586167fffffffff0000000000000000000000000000000000000000000000000000000091821617600160401b6001600160a01b039687168102919091179092556001805494909616931692909217921602179055565b005b6101886101983660046103ff565b6101c4565b3480156101a957600080fd5b506001546100d090600160401b90046001600160a01b031681565b6000806101d5565b60405180910390fd5b60005467ffffffffffffffff16840361020e57505060015467ffffffffffffffff811690600160401b90046001600160a01b031661028f565b60015467ffffffffffffffff16840361024757505060005467ffffffffffffffff811690600160401b90046001600160a01b031661028f565b60405162461bcd60e51b815260206004820152601560248201527f6e6f7420737570706f727420746869732070656572000000000000000000000060448201526064016101cc565b604051639c649fdf60e01b81526001600160a01b03861690639c649fdf906102c19084908690889032906004016104ca565b6020604051808303816000875af11580156102e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103049190610550565b61035a5760405162461bcd60e51b815260206004820152602160248201527f63616c6c20657865637574654d6573736167652072657475726e73206572726f6044820152603960f91b60648201526084016101cc565b5050505050565b803567ffffffffffffffff8116811461037957600080fd5b919050565b80356001600160a01b038116811461037957600080fd5b600080600080608085870312156103ab57600080fd5b6103b485610361565b93506103c26020860161037e565b92506103d060408601610361565b91506103de6060860161037e565b905092959194509250565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561041457600080fd5b61041d8461037e565b925060208401359150604084013567ffffffffffffffff8082111561044157600080fd5b818601915086601f83011261045557600080fd5b813581811115610467576104676103e9565b604051601f8201601f19908116603f0116810190838211818310171561048f5761048f6103e9565b816040528281528960208487010111156104a857600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6001600160a01b03851681526000602067ffffffffffffffff86168184015260806040840152845180608085015260005b818110156105175786810183015185820160a0015282016104fb565b50600060a0828601015260a0601f19601f8301168501019250505061054760608301846001600160a01b03169052565b95945050505050565b60006020828403121561056257600080fd5b8151801515811461057257600080fd5b939250505056fea2646970667358221220c57222688d83bc42da6e9013fb3b6686b1420843b2727719f72703a110a54df964736f6c63430008140033';

type MockCelerMessageBusConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockCelerMessageBusConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockCelerMessageBus__factory extends ContractFactory {
  constructor(...args: MockCelerMessageBusConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MockCelerMessageBus';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MockCelerMessageBus> {
    return super.deploy(overrides || {}) as Promise<MockCelerMessageBus>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockCelerMessageBus {
    return super.attach(address) as MockCelerMessageBus;
  }
  connect(signer: Signer): MockCelerMessageBus__factory {
    return super.connect(signer) as MockCelerMessageBus__factory;
  }
  static readonly contractName: 'MockCelerMessageBus';
  public readonly contractName: 'MockCelerMessageBus';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCelerMessageBusInterface {
    return new utils.Interface(_abi) as MockCelerMessageBusInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockCelerMessageBus {
    return new Contract(address, _abi, signerOrProvider) as MockCelerMessageBus;
  }
}
