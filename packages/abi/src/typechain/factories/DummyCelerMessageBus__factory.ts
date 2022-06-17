/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { DummyCelerMessageBus, DummyCelerMessageBusInterface } from '../DummyCelerMessageBus';

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
  '0x608060405234801561001057600080fd5b506105c8806100206000396000f3fe6080604052600436106100655760003560e01c806372b53dfa1161004357806372b53dfa146101095780639f3ce55a1461018a578063bbfb52fb1461019d57600080fd5b8063063e71281461006a57806310ef7795146100a95780632e60121f146100e8575b600080fd5b34801561007657600080fd5b5060005461008b9067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020015b60405180910390f35b3480156100b557600080fd5b506000546100d090600160401b90046001600160a01b031681565b6040516001600160a01b0390911681526020016100a0565b3480156100f457600080fd5b5060015461008b9067ffffffffffffffff1681565b34801561011557600080fd5b5061018861012436600461049a565b6000805467ffffffffffffffff9586167fffffffff0000000000000000000000000000000000000000000000000000000091821617600160401b6001600160a01b039687168102919091179092556001805494909616931692909217921602179055565b005b6101886101983660046103a6565b6101c4565b3480156101a957600080fd5b506001546100d090600160401b90046001600160a01b031681565b6000806101d5565b60405180910390fd5b60005467ffffffffffffffff1684141561020f57505060015467ffffffffffffffff811690600160401b90046001600160a01b0316610291565b60015467ffffffffffffffff1684141561024957505060005467ffffffffffffffff811690600160401b90046001600160a01b0316610291565b60405162461bcd60e51b815260206004820152601560248201527f6e6f7420737570706f727420746869732070656572000000000000000000000060448201526064016101cc565b604051639c649fdf60e01b81526001600160a01b03861690639c649fdf906102c39084908690889032906004016104ee565b602060405180830381600087803b1580156102dd57600080fd5b505af11580156102f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103159190610471565b61036b5760405162461bcd60e51b815260206004820152602160248201527f63616c6c20657865637574654d6573736167652072657475726e73206572726f6044820152603960f91b60648201526084016101cc565b5050505050565b80356001600160a01b038116811461038957600080fd5b919050565b803567ffffffffffffffff8116811461038957600080fd5b6000806000606084860312156103bb57600080fd5b6103c484610372565b925060208401359150604084013567ffffffffffffffff808211156103e857600080fd5b818601915086601f8301126103fc57600080fd5b81358181111561040e5761040e61057c565b604051601f8201601f19908116603f011681019083821181831017156104365761043661057c565b8160405282815289602084870101111561044f57600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561048357600080fd5b8151801515811461049357600080fd5b9392505050565b600080600080608085870312156104b057600080fd5b6104b98561038e565b93506104c760208601610372565b92506104d56040860161038e565b91506104e360608601610372565b905092959194509250565b6001600160a01b03851681526000602067ffffffffffffffff86168184015260806040840152845180608085015260005b8181101561053b5786810183015185820160a00152820161051f565b8181111561054d57600060a083870101525b50601f01601f1916830160a0019150610573905060608301846001600160a01b03169052565b95945050505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220064def912886ee4d2d3b5ab129f214d63231ad0bbcee09410f6904a191d4ecf964736f6c63430008070033';

type DummyCelerMessageBusConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyCelerMessageBusConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyCelerMessageBus__factory extends ContractFactory {
  constructor(...args: DummyCelerMessageBusConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'DummyCelerMessageBus';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<DummyCelerMessageBus> {
    return super.deploy(overrides || {}) as Promise<DummyCelerMessageBus>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyCelerMessageBus {
    return super.attach(address) as DummyCelerMessageBus;
  }
  connect(signer: Signer): DummyCelerMessageBus__factory {
    return super.connect(signer) as DummyCelerMessageBus__factory;
  }
  static readonly contractName: 'DummyCelerMessageBus';
  public readonly contractName: 'DummyCelerMessageBus';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyCelerMessageBusInterface {
    return new utils.Interface(_abi) as DummyCelerMessageBusInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DummyCelerMessageBus {
    return new Contract(address, _abi, signerOrProvider) as DummyCelerMessageBus;
  }
}
