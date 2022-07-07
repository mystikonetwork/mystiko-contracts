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
    inputs: [],
    name: 'CallCrossChainSyncTxError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyOperator',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyRegister',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyWhitelistedExecutor',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WithdrawFailed',
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
  '0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610838806100326000396000f3fe60806040526004361061007b5760003560e01c8063bfdfd5631161004e578063bfdfd56314610109578063c81739cd14610129578063d15209481461013c578063f919d4691461015c57600080fd5b806306394c9b1461008057806351cff8d9146100a2578063919c1df5146100b5578063a071e9b1146100e9575b600080fd5b34801561008c57600080fd5b506100a061009b366004610542565b61017c565b005b6100a06100b0366004610542565b6101e1565b3480156100c157600080fd5b506100d56100d0366004610658565b610284565b604051901515815260200160405180910390f35b3480156100f557600080fd5b506100a0610104366004610542565b610363565b34801561011557600080fd5b506100a0610124366004610542565b6103b5565b6100a0610137366004610564565b610404565b34801561014857600080fd5b506100a0610157366004610542565b610476565b34801561016857600080fd5b506100a0610177366004610542565b6104c2565b6000546001600160a01b031633146101a7576040516327e1f1e560e01b815260040160405180910390fd5b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461020c576040516327e1f1e560e01b815260040160405180910390fd5b6000816001600160a01b03164760405160006040518083038185875af1925050503d8060008114610259576040519150601f19603f3d011682016040523d82523d6000602084013e61025e565b606091505b505090508061028057604051631d42c86760e21b815260040160405180910390fd5b5050565b3360009081526001602052604081205460ff166102b35760405162111e9960e21b815260040160405180910390fd5b60405163105a439b60e31b81526001600160a01b038616906382d21cd8906102e7908a908a90889088908b9060040161078f565b602060405180830381600087803b15801561030157600080fd5b505af1158015610315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103399190610636565b61035657604051635eb9870360e11b815260040160405180910390fd5b5060019695505050505050565b6000546001600160a01b0316331461038e576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6000546001600160a01b031633146103e0576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b3360009081526002602052604090205460ff1661043457604051632d7858e160e11b815260040160405180910390fd5b7fd80857a183b2092f9e8ac431b7677da383dab7002c167fd82e6b3172ab86e8d883833384604051610469949392919061070c565b60405180910390a1505050565b6000546001600160a01b031633146104a1576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b031633146104ed576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19169055565b80356001600160a01b038116811461052557600080fd5b919050565b803567ffffffffffffffff8116811461052557600080fd5b60006020828403121561055457600080fd5b61055d8261050e565b9392505050565b60008060006060848603121561057957600080fd5b6105828461050e565b92506105906020850161052a565b9150604084013567ffffffffffffffff808211156105ad57600080fd5b818601915086601f8301126105c157600080fd5b8135818111156105d3576105d36107ec565b604051601f8201601f19908116603f011681019083821181831017156105fb576105fb6107ec565b8160405282815289602084870101111561061457600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561064857600080fd5b8151801515811461055d57600080fd5b60008060008060008060a0878903121561067157600080fd5b61067a8761052a565b95506106886020880161050e565b94506106966040880161050e565b93506106a46060880161050e565b9250608087013567ffffffffffffffff808211156106c157600080fd5b818901915089601f8301126106d557600080fd5b8135818111156106e457600080fd5b8a60208285010111156106f657600080fd5b6020830194508093505050509295509295509295565b60006001600160a01b038087168352602067ffffffffffffffff8716818501528186166040850152608060608501528451915081608085015260005b828110156107645785810182015185820160a001528101610748565b8281111561077657600060a084870101525b5050601f01601f19169190910160a00195945050505050565b67ffffffffffffffff8616815260006001600160a01b03808716602084015260806040840152846080840152848660a0850137600083860160a0908101919091529316606083015250601f909201601f1916909101019392505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f58471b330c1979a8a2f2ca46d4917a551b6442b2de12da277d6fe1de78a51bc64736f6c63430008070033';

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
