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
  '0x6080604052348015600f57600080fd5b50600080546001600160a01b03191633179055610836806100316000396000f3fe60806040526004361061007b5760003560e01c8063bfdfd5631161004e578063bfdfd56314610109578063c81739cd14610129578063d15209481461013c578063f919d4691461015c57600080fd5b806306394c9b1461008057806351cff8d9146100a2578063919c1df5146100b5578063a071e9b1146100e9575b600080fd5b34801561008c57600080fd5b506100a061009b36600461051b565b61017c565b005b6100a06100b036600461051b565b6101e1565b3480156100c157600080fd5b506100d56100d0366004610555565b610284565b604051901515815260200160405180910390f35b3480156100f557600080fd5b506100a061010436600461051b565b610354565b34801561011557600080fd5b506100a061012436600461051b565b6103a6565b6100a0610137366004610622565b6103f5565b34801561014857600080fd5b506100a061015736600461051b565b610467565b34801561016857600080fd5b506100a061017736600461051b565b6104b3565b6000546001600160a01b031633146101a7576040516327e1f1e560e01b815260040160405180910390fd5b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461020c576040516327e1f1e560e01b815260040160405180910390fd5b6000816001600160a01b03164760405160006040518083038185875af1925050503d8060008114610259576040519150601f19603f3d011682016040523d82523d6000602084013e61025e565b606091505b505090508061028057604051631d42c86760e21b815260040160405180910390fd5b5050565b3360009081526001602052604081205460ff166102b35760405162111e9960e21b815260040160405180910390fd5b60405163105a439b60e31b81526001600160a01b038616906382d21cd8906102e7908a908a90889088908b906004016106fc565b6020604051808303816000875af1158015610306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032a919061075f565b61034757604051635eb9870360e11b815260040160405180910390fd5b5060019695505050505050565b6000546001600160a01b0316331461037f576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6000546001600160a01b031633146103d1576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b3360009081526002602052604090205460ff1661042557604051632d7858e160e11b815260040160405180910390fd5b7fd80857a183b2092f9e8ac431b7677da383dab7002c167fd82e6b3172ab86e8d88383338460405161045a9493929190610781565b60405180910390a1505050565b6000546001600160a01b03163314610492576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b031633146104de576040516327e1f1e560e01b815260040160405180910390fd5b6001600160a01b03166000908152600260205260409020805460ff19169055565b80356001600160a01b038116811461051657600080fd5b919050565b60006020828403121561052d57600080fd5b610536826104ff565b9392505050565b803567ffffffffffffffff8116811461051657600080fd5b60008060008060008060a0878903121561056e57600080fd5b6105778761053d565b9550610585602088016104ff565b9450610593604088016104ff565b93506105a1606088016104ff565b9250608087013567ffffffffffffffff8111156105bd57600080fd5b8701601f810189136105ce57600080fd5b803567ffffffffffffffff8111156105e557600080fd5b8960208284010111156105f757600080fd5b60208201935080925050509295509295509295565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561063757600080fd5b610640846104ff565b925061064e6020850161053d565b9150604084013567ffffffffffffffff81111561066a57600080fd5b8401601f8101861361067b57600080fd5b803567ffffffffffffffff8111156106955761069561060c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156106c4576106c461060c565b6040528181528282016020018810156106dc57600080fd5b816020840160208301376000602083830101528093505050509250925092565b67ffffffffffffffff861681526001600160a01b038516602082015260806040820152826080820152828460a0830137600060a08483010152600060a0601f19601f86011683010190506001600160a01b03831660608301529695505050505050565b60006020828403121561077157600080fd5b8151801515811461053657600080fd5b6001600160a01b038516815267ffffffffffffffff841660208201526001600160a01b0383166040820152608060608201526000825180608084015260005b818110156107dd57602081860181015160a08684010152016107c0565b50600060a0828501015260a0601f19601f8301168401019150509594505050505056fea26469706673582212206f42bf0bad813ecba2f31d7a286649e8bdf64f79401f2aaf9e1864a1bc23bcc964736f6c634300081a0033';

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
