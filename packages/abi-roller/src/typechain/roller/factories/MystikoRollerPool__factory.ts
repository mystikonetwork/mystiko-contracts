/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoRollerPool, MystikoRollerPoolInterface } from '../MystikoRollerPool';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_daoRegistry',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_vXZK',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minVoteTokenAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AccessControlBadConfirmation',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'neededRole',
        type: 'bytes32',
      },
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientBalanceForAction',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyMystikoDAO',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupSizeTooSmall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnauthorizedRole',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_size',
        type: 'uint256',
      },
    ],
    name: 'MinRollupSizeChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'RollerMinVoteTokenAmountChanged',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ROLLER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'daoRegistry',
    outputs: [
      {
        internalType: 'contract MystikoGovernorRegistry',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
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
    name: 'minRollupSize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minVoteTokenAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'callerConfirmation',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setAdminRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newMinRollupSize',
        type: 'uint256',
      },
    ],
    name: 'setMinRollupSize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newMinVoteTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'setRollerMinVoteTokenAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
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
    name: 'vXZK',
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
        components: [
          {
            internalType: 'address',
            name: 'pool',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'roller',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'rollupSize',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'queueCount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'includedCount',
            type: 'uint256',
          },
        ],
        internalType: 'struct RollerValidateParams',
        name: '_params',
        type: 'tuple',
      },
    ],
    name: 'validateRoller',
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
];

const _bytecode =
  '0x6080604052348015600f57600080fd5b50604051610b3e380380610b3e833981016040819052602c91607f565b600180546001600160a01b039485166001600160a01b03199182161782556002929092556003556004805492909316911617905560b6565b80516001600160a01b0381168114607a57600080fd5b919050565b600080600060608486031215609357600080fd5b609a846064565b925060a6602085016064565b9150604084015190509250925092565b610a79806100c56000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c806374feb05911610097578063d547741f11610066578063d547741f1461024d578063da4fff5114610260578063e254001c14610273578063ecf773ec1461028657600080fd5b806374feb059146101f25780637850c69f146101fb57806391d148541461020e578063a217fddf1461024557600080fd5b80632a2b6ba0116100d35780632a2b6ba0146101975780632f2ff15d146101c257806336568abe146101d7578063374de218146101ea57600080fd5b80620736261461010457806301ffc9a71461012c5780631d8148151461013f578063248a9ca314610174575b600080fd5b610117610112366004610946565b61028f565b60405190151581526020015b60405180910390f35b61011761013a366004610961565b6103fe565b6101667fe2135251f547a5efd5bea7c3093f0320fb2500ec516aa532242391a2610016eb81565b604051908152602001610123565b610166610182366004610992565b60009081526020819052604090206001015490565b6001546101aa906001600160a01b031681565b6040516001600160a01b039091168152602001610123565b6101d56101d03660046109c0565b610435565b005b6101d56101e53660046109c0565b610460565b6101d5610498565b61016660025481565b6101d5610209366004610992565b6105b2565b61011761021c3660046109c0565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610166600081565b6101d561025b3660046109c0565b6106a4565b6101d561026e366004610992565b6106c9565b6004546101aa906001600160a01b031681565b61016660035481565b60007fe2135251f547a5efd5bea7c3093f0320fb2500ec516aa532242391a2610016eb6102c260408401602085016109f0565b60008281526020818152604080832083805290915290205460ff16610322576000828152602081815260408083206001600160a01b038516845290915290205460ff1661032257604051630aedfc3560e21b815260040160405180910390fd5b600354846040013510156103495760405163150a617b60e31b815260040160405180910390fd5b6002546004546001600160a01b03166370a0823161036d60408801602089016109f0565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156103b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d59190610a0d565b10156103f45760405163f241cafb60e01b815260040160405180910390fd5b5060019392505050565b60006001600160e01b03198216637965db0b60e01b148061042f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082815260208190526040902060010154610450816107b4565b61045a83836107be565b50505050565b6001600160a01b03811633146104895760405163334bd91960e11b815260040160405180910390fd5b6104938282610868565b505050565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa1580156104e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105059190610a26565b6001600160a01b03161461052c5760405163177bc95160e11b815260040160405180910390fd5b6105af6000801b600160009054906101000a90046001600160a01b03166001600160a01b0316634162169f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105aa9190610a26565b6107be565b50565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa1580156105fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f9190610a26565b6001600160a01b0316146106465760405163177bc95160e11b815260040160405180910390fd5b8060025403610668576040516336a1c33f60e01b815260040160405180910390fd5b60028190556040518181527fdc550064f5802443f83c40758575664bb8bed4998660ea69df133c47b43f0aad906020015b60405180910390a150565b6000828152602081905260409020600101546106bf816107b4565b61045a8383610868565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa158015610712573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107369190610a26565b6001600160a01b03161461075d5760405163177bc95160e11b815260040160405180910390fd5b806003540361077f576040516336a1c33f60e01b815260040160405180910390fd5b60038190556040518181527fe1f038c60e1a2d2ed2958fbb3feefb7f259dedc375ad27e6a53bf91e9fa2feca90602001610699565b6105af81336108eb565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610860576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556108183390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161042f565b50600061042f565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610860576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161042f565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166109425760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b600060a082840312801561095957600080fd5b509092915050565b60006020828403121561097357600080fd5b81356001600160e01b03198116811461098b57600080fd5b9392505050565b6000602082840312156109a457600080fd5b5035919050565b6001600160a01b03811681146105af57600080fd5b600080604083850312156109d357600080fd5b8235915060208301356109e5816109ab565b809150509250929050565b600060208284031215610a0257600080fd5b813561098b816109ab565b600060208284031215610a1f57600080fd5b5051919050565b600060208284031215610a3857600080fd5b815161098b816109ab56fea2646970667358221220cf976cf850f0fde8bc2b093fc92c61efade91ee71b36f9e99ecb4425d295861464736f6c634300081a0033';

type MystikoRollerPoolConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoRollerPoolConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoRollerPool__factory extends ContractFactory {
  constructor(...args: MystikoRollerPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoRollerPool';
  }

  deploy(
    _daoRegistry: string,
    _vXZK: string,
    _minVoteTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoRollerPool> {
    return super.deploy(
      _daoRegistry,
      _vXZK,
      _minVoteTokenAmount,
      overrides || {},
    ) as Promise<MystikoRollerPool>;
  }
  getDeployTransaction(
    _daoRegistry: string,
    _vXZK: string,
    _minVoteTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_daoRegistry, _vXZK, _minVoteTokenAmount, overrides || {});
  }
  attach(address: string): MystikoRollerPool {
    return super.attach(address) as MystikoRollerPool;
  }
  connect(signer: Signer): MystikoRollerPool__factory {
    return super.connect(signer) as MystikoRollerPool__factory;
  }
  static readonly contractName: 'MystikoRollerPool';
  public readonly contractName: 'MystikoRollerPool';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoRollerPoolInterface {
    return new utils.Interface(_abi) as MystikoRollerPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoRollerPool {
    return new Contract(address, _abi, signerOrProvider) as MystikoRollerPool;
  }
}
