/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoGovernorRegistry, MystikoGovernorRegistryInterface } from '../MystikoGovernorRegistry';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
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
    anonymous: false,
    inputs: [],
    name: 'DeployerRenounced',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newDao',
        type: 'address',
      },
    ],
    name: 'MystikoDAOChanged',
    type: 'event',
  },
  {
    inputs: [],
    name: 'dao',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'daoMap',
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
    inputs: [],
    name: 'deployer',
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
    name: 'renounceDeployer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_previousDao',
        type: 'address',
      },
    ],
    name: 'rollBackMystikoDAO',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newDao',
        type: 'address',
      },
    ],
    name: 'setMystikoDAO',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newDao',
        type: 'address',
      },
    ],
    name: 'transferOwnerToDAO',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6080604052348015600f57600080fd5b5060008054336001600160a01b031991821681178355600180549092161790556103f190819061003f90396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639545c1711161005b5780639545c171146100da578063bf6f00d81461010d578063d5f3948814610115578063ddee8f9b1461012857600080fd5b806326abb3fd1461008257806327781ff0146100975780634162169f146100aa575b600080fd5b61009561009036600461038b565b61013b565b005b6100956100a536600461038b565b610222565b6000546100bd906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fd6100e836600461038b565b60026020526000908152604090205460ff1681565b60405190151581526020016100d1565b6100956102cf565b6001546100bd906001600160a01b031681565b61009561013636600461038b565b610342565b6001546001600160a01b031633146101665760405163618bbdd560e01b815260040160405180910390fd5b6000546001600160a01b0390811690821603610195576040516336a1c33f60e01b815260040160405180910390fd5b6001600160a01b03811660009081526002602052604090205460ff166101cd57604051623e148760e41b815260040160405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038316908117825560405190917fde2e1324f3df3c01ca8d6df2ffe554430c8ad84c48bef85f850875e15f81eb8691a250565b6000546001600160a01b03163314158061024657506001546001600160a01b031633145b156102645760405163177bc95160e11b815260040160405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038316908117825580825260026020526040808320805460ff191660011790555190917fde2e1324f3df3c01ca8d6df2ffe554430c8ad84c48bef85f850875e15f81eb8691a250565b6001546001600160a01b031633146102fa5760405163618bbdd560e01b815260040160405180910390fd5b6001805473ffffffffffffffffffffffffffffffffffffffff191690556040517f10dc94362cceafb01741f9b4a773a328c549fb0ff6f72ddaddedc4b7b96f6f1990600090a1565b6001546001600160a01b03163314158061036d57506001546000546001600160a01b03908116911614155b156102645760405163363da34960e11b815260040160405180910390fd5b60006020828403121561039d57600080fd5b81356001600160a01b03811681146103b457600080fd5b939250505056fea2646970667358221220d89bd1d39447b7b08769681ea5fc45686034c4c53f25454f52bea2ee4081a55f64736f6c634300081a0033';

type MystikoGovernorRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoGovernorRegistryConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoGovernorRegistry__factory extends ContractFactory {
  constructor(...args: MystikoGovernorRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoGovernorRegistry';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MystikoGovernorRegistry> {
    return super.deploy(overrides || {}) as Promise<MystikoGovernorRegistry>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MystikoGovernorRegistry {
    return super.attach(address) as MystikoGovernorRegistry;
  }
  connect(signer: Signer): MystikoGovernorRegistry__factory {
    return super.connect(signer) as MystikoGovernorRegistry__factory;
  }
  static readonly contractName: 'MystikoGovernorRegistry';
  public readonly contractName: 'MystikoGovernorRegistry';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoGovernorRegistryInterface {
    return new utils.Interface(_abi) as MystikoGovernorRegistryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoGovernorRegistry {
    return new Contract(address, _abi, signerOrProvider) as MystikoGovernorRegistry;
  }
}
