/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoTBridgeProxy, MystikoTBridgeProxyInterface } from '../MystikoTBridgeProxy';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Failed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Unauthorized',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Unexpected',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'toContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'toChainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'fromContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'message',
        type: 'bytes',
      },
    ],
    name: 'TBridgeCrossChainMessage',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
    ],
    name: 'addExecutorWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_register',
        type: 'address',
      },
    ],
    name: 'addRegisterWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOperator',
        type: 'address',
      },
    ],
    name: 'changeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_fromChainId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: '_fromContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_toContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_message',
        type: 'bytes',
      },
    ],
    name: 'crossChainSyncTx',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
    ],
    name: 'removeExecutorWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_register',
        type: 'address',
      },
    ],
    name: 'removeRegisterWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_toContract',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: '_toChainId',
        type: 'uint64',
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
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556109c4806100326000396000f3fe60806040526004361061007b5760003560e01c8063bfdfd5631161004e578063bfdfd56314610109578063c81739cd14610129578063d15209481461013c578063f919d4691461015c57600080fd5b806306394c9b1461008057806351cff8d9146100a2578063919c1df5146100b5578063a071e9b1146100e9575b600080fd5b34801561008c57600080fd5b506100a061009b3660046106ce565b61017c565b005b6100a06100b03660046106ce565b610207565b3480156100c157600080fd5b506100d56100d03660046107e4565b6102fb565b604051901515815260200160405180910390f35b3480156100f557600080fd5b506100a06101043660046106ce565b61043b565b34801561011557600080fd5b506100a06101243660046106ce565b6104ae565b6100a06101373660046106f0565b61051e565b34801561014857600080fd5b506100a06101573660046106ce565b6105c0565b34801561016857600080fd5b506100a06101773660046106ce565b61062d565b6000546001600160a01b031633146101cd5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000546001600160a01b031633146102535760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016101c4565b6000816001600160a01b03164760405160006040518083038185875af1925050503d80600081146102a0576040519150601f19603f3d011682016040523d82523d6000602084013e6102a5565b606091505b50509050806102f7576040516318cb089d60e31b815260206004820152600f60248201527f7769746864726177206661696c6564000000000000000000000000000000000060448201526064016101c4565b5050565b3360009081526001602052604081205460ff1661035b5760405163973d02cb60e01b815260206004820152601a60248201527f6f6e6c792077686974656c6973746564206578656375746f722e00000000000060448201526064016101c4565b60405163105a439b60e31b81526001600160a01b038616906382d21cd89061038f908a908a90889088908b9060040161091b565b602060405180830381600087803b1580156103a957600080fd5b505af11580156103bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e191906107c2565b61042e5760405163c83ad1cd60e01b815260206004820152601b60248201527f63616c6c2063726f7373436861696e53796e635478206572726f72000000000060448201526064016101c4565b5060019695505050505050565b6000546001600160a01b031633146104875760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016101c4565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6000546001600160a01b031633146104fa5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016101c4565b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b3360009081526002602052604090205460ff1661057e5760405163973d02cb60e01b815260206004820152600e60248201527f6f6e6c792072656769737465722e00000000000000000000000000000000000060448201526064016101c4565b7fd80857a183b2092f9e8ac431b7677da383dab7002c167fd82e6b3172ab86e8d8838333846040516105b39493929190610898565b60405180910390a1505050565b6000546001600160a01b0316331461060c5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016101c4565b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b031633146106795760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016101c4565b6001600160a01b03166000908152600260205260409020805460ff19169055565b80356001600160a01b03811681146106b157600080fd5b919050565b803567ffffffffffffffff811681146106b157600080fd5b6000602082840312156106e057600080fd5b6106e98261069a565b9392505050565b60008060006060848603121561070557600080fd5b61070e8461069a565b925061071c602085016106b6565b9150604084013567ffffffffffffffff8082111561073957600080fd5b818601915086601f83011261074d57600080fd5b81358181111561075f5761075f610978565b604051601f8201601f19908116603f0116810190838211818310171561078757610787610978565b816040528281528960208487010111156107a057600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6000602082840312156107d457600080fd5b815180151581146106e957600080fd5b60008060008060008060a087890312156107fd57600080fd5b610806876106b6565b95506108146020880161069a565b94506108226040880161069a565b93506108306060880161069a565b9250608087013567ffffffffffffffff8082111561084d57600080fd5b818901915089601f83011261086157600080fd5b81358181111561087057600080fd5b8a602082850101111561088257600080fd5b6020830194508093505050509295509295509295565b60006001600160a01b038087168352602067ffffffffffffffff8716818501528186166040850152608060608501528451915081608085015260005b828110156108f05785810182015185820160a0015281016108d4565b8281111561090257600060a084870101525b5050601f01601f19169190910160a00195945050505050565b67ffffffffffffffff8616815260006001600160a01b03808716602084015260806040840152846080840152848660a0850137600083860160a0908101919091529316606083015250601f909201601f1916909101019392505050565b634e487b7160e01b600052604160045260246000fdfea264697066735822122075b7842cc61e996bce12e31abe4974f10bd6534b34ab0a1aeda8b28685d15a6b64736f6c63430008070033';

type MystikoTBridgeProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoTBridgeProxyConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoTBridgeProxy__factory extends ContractFactory {
  constructor(...args: MystikoTBridgeProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoTBridgeProxy';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MystikoTBridgeProxy> {
    return super.deploy(overrides || {}) as Promise<MystikoTBridgeProxy>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MystikoTBridgeProxy {
    return super.attach(address) as MystikoTBridgeProxy;
  }
  connect(signer: Signer): MystikoTBridgeProxy__factory {
    return super.connect(signer) as MystikoTBridgeProxy__factory;
  }
  static readonly contractName: 'MystikoTBridgeProxy';
  public readonly contractName: 'MystikoTBridgeProxy';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoTBridgeProxyInterface {
    return new utils.Interface(_abi) as MystikoTBridgeProxyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoTBridgeProxy {
    return new Contract(address, _abi, signerOrProvider) as MystikoTBridgeProxy;
  }
}
