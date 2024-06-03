/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2LoopERC20, MystikoV2LoopERC20Interface, IMystikoLoop } from '../MystikoV2LoopERC20';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IHasher3',
        name: '_hasher3',
        type: 'address',
      },
      {
        internalType: 'contract IERC20Metadata',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_settingsCenter',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoLoop.LocalConfig',
        name: '_localConfig',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AmountTooLarge',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AmountTooSmall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AssociatedPoolNotSet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CertificateInvalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CommitmentHashIncorrect',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DepositsDisabled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HashKGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotSupport',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RandomSGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SanctionedAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'assetAddress',
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
    name: 'assetDecimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assetName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assetSymbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assetType',
    outputs: [
      {
        internalType: 'enum AssetPool.AssetType',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridgeType',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'commitment',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'hashK',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'randomS',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'encryptedNote',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'rollupFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoLoop.DepositRequest',
        name: '_request',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '_certificateDeadline',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_certificateSignature',
        type: 'bytes',
      },
    ],
    name: 'certDeposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'commitment',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'hashK',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'randomS',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'encryptedNote',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'rollupFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoLoop.DepositRequest',
        name: '_request',
        type: 'tuple',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAssociatedCommitmentPool',
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
    name: 'getMaxAmount',
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
    name: 'getMinAmount',
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
    name: 'isDepositsDisabled',
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
    name: 'settings',
    outputs: [
      {
        internalType: 'contract MystikoSettings',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620013ae380380620013ae83398101604081905262000034916200009e565b600080546001600160a01b03199081166001600160a01b0396871617909155815160015560209091015160025560038054821692851692909217909155600480549091169190921617905562000150565b6001600160a01b03811681146200009b57600080fd5b50565b60008060008084860360a0811215620000b657600080fd5b8551620000c38162000085565b6020870151909550620000d68162000085565b6040870151909450620000e98162000085565b92506040605f1982011215620000fe57600080fd5b50604080519081016001600160401b03811182821017156200013057634e487b7160e01b600052604160045260246000fd5b604052606086015181526080909501516020860152509194909350909190565b61124e80620001606000396000f3fe6080604052600436106100d25760003560e01c8063c2d416011161007f578063ddac5dc111610059578063ddac5dc114610202578063e06174e414610217578063ed6ea33a14610237578063f6afe88f1461025c57600080fd5b8063c2d41601146101b1578063c9230c5d146101d8578063cfc7e2da146101ed57600080fd5b80632421e155116100b05780632421e155146101535780633c245a6f146101805780633fe3347a1461019557600080fd5b80630ba95909146100d7578063176de7a8146100ff5780631ba46cfd14610121575b600080fd5b3480156100e357600080fd5b506100ec61026f565b6040519081526020015b60405180910390f35b34801561010b57600080fd5b506101146102f8565b6040516100f69190610d9e565b34801561012d57600080fd5b506004546001600160a01b03165b6040516001600160a01b0390911681526020016100f6565b34801561015f57600080fd5b5060408051808201909152600481526306c6f6f760e41b6020820152610114565b61019361018e366004610f37565b61037a565b005b3480156101a157600080fd5b5060006040516100f69190610fa4565b3480156101bd57600080fd5b506101c661068f565b60405160ff90911681526020016100f6565b3480156101e457600080fd5b50610114610708565b3480156101f957600080fd5b506100ec61075d565b34801561020e57600080fd5b5061013b6107e4565b34801561022357600080fd5b5060035461013b906001600160a01b031681565b34801561024357600080fd5b5061024c610883565b60405190151581526020016100f6565b61019361026a366004610fcc565b6108f0565b60035460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa1580156102bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e09190611009565b905080156102ee57806102f2565b6002545b91505090565b6060600460009054906101000a90046001600160a01b03166001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561034d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103759190810190611022565b905090565b6003546040516355f0ba2960e01b81523060048201526001600160a01b03909116906355f0ba2990602401602060405180830381865afa1580156103c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e69190611099565b1561040457604051630e2f42c960e31b815260040160405180910390fd5b600360009054906101000a90046001600160a01b03166001600160a01b031663dc7f01246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610457573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047b9190611099565b156105525760006040518060800160405280326001600160a01b031681526020016104ae6004546001600160a01b031690565b6001600160a01b039081168252602082018690526040918201859052600354915163849e8b9f60e01b8152929350169063849e8b9f906104f29084906004016110bb565b602060405180830381865afa15801561050f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105339190611099565b61055057604051633042041f60e21b815260040160405180910390fd5b505b61055a61075d565b8351101561057b5760405163617ab12d60e11b815260040160405180910390fd5b61058361026f565b835111156105a457604051630625040160e01b815260040160405180910390fd5b60006105bd846040015185600001518660600151610909565b9050808460200151146105e3576040516301bfaa2560e51b815260040160405180910390fd5b60035460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa15801561062b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064f9190611099565b1561066d57604051632e70c0b160e01b815260040160405180910390fd5b610689846000015185602001518660a001518760800151610a22565b50505050565b6000600460009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103759190611101565b6060600460009054906101000a90046001600160a01b03166001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801561034d573d6000803e3d6000fd5b600354604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa1580156107aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ce9190611009565b905080156107dc57806102f2565b505060015490565b6003546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610831573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108559190611124565b90506001600160a01b03811661087e576040516306f3d63360e51b815260040160405180910390fd5b919050565b6003546040516355f0ba2960e01b81523060048201526000916001600160a01b0316906355f0ba2990602401602060405180830381865afa1580156108cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103759190611099565b60405163e7a24ff960e01b815260040160405180910390fd5b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180851061094c5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061097e57604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916109d69160040161114d565b602060405180830381865afa1580156109f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a179190611009565b9150505b9392505050565b60006040518060a00160405280868152602001858152602001600081526020018481526020018381525090506000610a586107e4565b6040516378d60cd760e01b81529091506001600160a01b038216906378d60cd790610a8a90859060009060040161117e565b600060405180830381600087803b158015610aa457600080fd5b505af1158015610ab8573d6000803e3d6000fd5b50505050610ad3818588610acc91906111db565b6000610adb565b505050505050565b803414610b2f5760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600454610b47906001600160a01b0316338585610b4c565b505050565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092019092526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b17905261068991869190600090610bc790841683610c15565b90508051600014158015610bec575080806020019051810190610bea9190611099565b155b15610b4757604051635274afe760e01b81526001600160a01b0384166004820152602401610b26565b6060610c2383836000610c2c565b90505b92915050565b606081471015610c515760405163cd78605960e01b8152306004820152602401610b26565b600080856001600160a01b03168486604051610c6d91906111fc565b60006040518083038185875af1925050503d8060008114610caa576040519150601f19603f3d011682016040523d82523d6000602084013e610caf565b606091505b5091509150610cbf868383610cc9565b9695505050505050565b606082610cde57610cd982610d25565b610a1b565b8151158015610cf557506001600160a01b0384163b155b15610d1e57604051639996b31560e01b81526001600160a01b0385166004820152602401610b26565b5080610a1b565b805115610d355780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60005b83811015610d69578181015183820152602001610d51565b50506000910152565b60008151808452610d8a816020860160208601610d4e565b601f01601f19169290920160200192915050565b602081526000610c236020830184610d72565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715610dea57610dea610db1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610e1957610e19610db1565b604052919050565b600067ffffffffffffffff821115610e3b57610e3b610db1565b50601f01601f191660200190565b600082601f830112610e5a57600080fd5b8135610e6d610e6882610e21565b610df0565b818152846020838601011115610e8257600080fd5b816020850160208301376000918101602001919091529392505050565b600060c08284031215610eb157600080fd5b610eb9610dc7565b905081358152602082013560208201526040820135604082015260608201356fffffffffffffffffffffffffffffffff81168114610ef657600080fd5b6060820152608082013567ffffffffffffffff811115610f1557600080fd5b610f2184828501610e49565b60808301525060a082013560a082015292915050565b600080600060608486031215610f4c57600080fd5b833567ffffffffffffffff80821115610f6457600080fd5b610f7087838801610e9f565b9450602086013593506040860135915080821115610f8d57600080fd5b50610f9a86828701610e49565b9150509250925092565b6020810160028310610fc657634e487b7160e01b600052602160045260246000fd5b91905290565b600060208284031215610fde57600080fd5b813567ffffffffffffffff811115610ff557600080fd5b61100184828501610e9f565b949350505050565b60006020828403121561101b57600080fd5b5051919050565b60006020828403121561103457600080fd5b815167ffffffffffffffff81111561104b57600080fd5b8201601f8101841361105c57600080fd5b805161106a610e6882610e21565b81815285602083850101111561107f57600080fd5b611090826020830160208601610d4e565b95945050505050565b6000602082840312156110ab57600080fd5b81518015158114610a1b57600080fd5b6020815260006001600160a01b038084511660208401528060208501511660408401525060408301516060830152606083015160808084015261100160a0840182610d72565b60006020828403121561111357600080fd5b815160ff81168114610a1b57600080fd5b60006020828403121561113657600080fd5b81516001600160a01b0381168114610a1b57600080fd5b60608101818360005b6003811015611175578151835260209283019290910190600101611156565b50505092915050565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526111c260e0840182610d72565b9150506001600160a01b03831660208301529392505050565b80820180821115610c2657634e487b7160e01b600052601160045260246000fd5b6000825161120e818460208701610d4e565b919091019291505056fea2646970667358221220743d4c9d061a4334380f94719b886509bc3f89b6b63f56b4c3ddf2ddb7c88e2f64736f6c63430008140033';

type MystikoV2LoopERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2LoopERC20ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2LoopERC20__factory extends ContractFactory {
  constructor(...args: MystikoV2LoopERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2LoopERC20';
  }

  deploy(
    _hasher3: string,
    _token: string,
    _settingsCenter: string,
    _localConfig: IMystikoLoop.LocalConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2LoopERC20> {
    return super.deploy(
      _hasher3,
      _token,
      _settingsCenter,
      _localConfig,
      overrides || {},
    ) as Promise<MystikoV2LoopERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    _settingsCenter: string,
    _localConfig: IMystikoLoop.LocalConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _token, _settingsCenter, _localConfig, overrides || {});
  }
  attach(address: string): MystikoV2LoopERC20 {
    return super.attach(address) as MystikoV2LoopERC20;
  }
  connect(signer: Signer): MystikoV2LoopERC20__factory {
    return super.connect(signer) as MystikoV2LoopERC20__factory;
  }
  static readonly contractName: 'MystikoV2LoopERC20';
  public readonly contractName: 'MystikoV2LoopERC20';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2LoopERC20Interface {
    return new utils.Interface(_abi) as MystikoV2LoopERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2LoopERC20 {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2LoopERC20;
  }
}
