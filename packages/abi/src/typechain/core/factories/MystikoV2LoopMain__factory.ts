/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2LoopMain, MystikoV2LoopMainInterface, IMystikoLoop } from '../MystikoV2LoopMain';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IHasher3',
        name: '_hasher3',
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
        internalType: 'struct IMystikoLoop.LoopLocalConfig',
        name: '_localConfig',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
    stateMutability: 'pure',
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
        internalType: 'struct IMystikoLoop.LoopDepositRequest',
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
        internalType: 'struct IMystikoLoop.LoopDepositRequest',
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
    name: 'isCertificateCheckEnabled',
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
  '0x608060405234801561001057600080fd5b50604051610fcd380380610fcd83398101604081905261002f91610086565b600080546001600160a01b039485166001600160a01b03199182161790915581516001556020909101516002556003805492909316911617905561011a565b6001600160a01b038116811461008357600080fd5b50565b6000806000838503608081121561009c57600080fd5b84516100a78161006e565b60208601519094506100b88161006e565b92506040603f19820112156100cc57600080fd5b50604080519081016001600160401b03811182821017156100fd57634e487b7160e01b600052604160045260246000fd5b604090815285015181526060909401516020850152509093909250565b610ea4806101296000396000f3fe6080604052600436106100bc5760003560e01c8063bc58770611610074578063e06174e41161004e578063e06174e4146101c4578063ed6ea33a146101e4578063f6afe88f146101f957600080fd5b8063bc58770614610175578063cfc7e2da1461019a578063ddac5dc1146101af57600080fd5b80632421e155116100a55780632421e155146101115780633c245a6f146101445780633fe3347a1461015957600080fd5b80630ba95909146100c15780631ba46cfd146100e9575b600080fd5b3480156100cd57600080fd5b506100d661020c565b6040519081526020015b60405180910390f35b3480156100f557600080fd5b5060005b6040516001600160a01b0390911681526020016100e0565b34801561011d57600080fd5b50604080518082018252600481526306c6f6f760e41b602082015290516100e09190610ab1565b610157610152366004610c33565b610295565b005b34801561016557600080fd5b5060016040516100e09190610ca5565b34801561018157600080fd5b5061018a6105a0565b60405190151581526020016100e0565b3480156101a657600080fd5b506100d6610613565b3480156101bb57600080fd5b506100f961069a565b3480156101d057600080fd5b506003546100f9906001600160a01b031681565b3480156101f057600080fd5b5061018a610739565b610157610207366004610ccd565b610782565b60035460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa158015610259573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027d9190610d0a565b9050801561028b578061028f565b6002545b91505090565b60035460405163bb07320560e01b81523060048201526001600160a01b039091169063bb07320590602401602060405180830381865afa1580156102dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103019190610d23565b1561031f57604051630e2f42c960e31b815260040160405180910390fd5b600360009054906101000a90046001600160a01b03166001600160a01b031663bc5877066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190610d23565b156104635760006040518060800160405280326001600160a01b031681526020016103bf600090565b6001600160a01b039081168252602082018690526040918201859052600354915163849e8b9f60e01b8152929350169063849e8b9f90610403908490600401610d45565b602060405180830381865afa158015610420573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104449190610d23565b61046157604051633042041f60e21b815260040160405180910390fd5b505b61046b610613565b8351101561048c5760405163617ab12d60e11b815260040160405180910390fd5b61049461020c565b835111156104b557604051630625040160e01b815260040160405180910390fd5b60006104ce84604001518560000151866060015161079b565b9050808460200151146104f4576040516301bfaa2560e51b815260040160405180910390fd5b60035460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa15801561053c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105609190610d23565b1561057e57604051632e70c0b160e01b815260040160405180910390fd5b61059a846000015185602001518660a0015187608001516108b2565b50505050565b60035460408051635e2c3b8360e11b815290516000926001600160a01b03169163bc5877069160048083019260209291908290030181865afa1580156105ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060e9190610d23565b905090565b600354604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610660573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106849190610d0a565b90508015610692578061028f565b505060015490565b6003546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa1580156106e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070b9190610d90565b90506001600160a01b038116610734576040516306f3d63360e51b815260040160405180910390fd5b919050565b60035460405163bb07320560e01b81523060048201526000916001600160a01b03169063bb07320590602401602060405180830381865afa1580156105ea573d6000803e3d6000fd5b60405163e7a24ff960e01b815260040160405180910390fd5b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106107de5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061081057604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e89161086891600401610db9565b602060405180830381865afa158015610885573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a99190610d0a565b95945050505050565b60006040518060a001604052808681526020018581526020016000815260200184815260200183815250905060006108e861069a565b6040516378d60cd760e01b81529091506001600160a01b038216906378d60cd79061091a908590600090600401610dea565b600060405180830381600087803b15801561093457600080fd5b505af1158015610948573d6000803e3d6000fd5b5050505061096381858861095c9190610e47565b600061096b565b505050505050565b6109758183610e47565b34146109c85760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064015b60405180910390fd5b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114610a15576040519150601f19603f3d011682016040523d82523d6000602084013e610a1a565b606091505b505090508061059a5760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c65640000000000000000000060448201526064016109bf565b6000815180845260005b81811015610a9157602081850181015186830182015201610a75565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ac46020830184610a6b565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715610b0457610b04610acb565b60405290565b600082601f830112610b1b57600080fd5b813567ffffffffffffffff811115610b3557610b35610acb565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610b6457610b64610acb565b604052818152838201602001851015610b7c57600080fd5b816020850160208301376000918101602001919091529392505050565b600060c08284031215610bab57600080fd5b610bb3610ae1565b823581526020808401359082015260408084013590820152905060608201356fffffffffffffffffffffffffffffffff81168114610bf057600080fd5b6060820152608082013567ffffffffffffffff811115610c0f57600080fd5b610c1b84828501610b0a565b60808301525060a09182013591810191909152919050565b600080600060608486031215610c4857600080fd5b833567ffffffffffffffff811115610c5f57600080fd5b610c6b86828701610b99565b93505060208401359150604084013567ffffffffffffffff811115610c8f57600080fd5b610c9b86828701610b0a565b9150509250925092565b6020810160028310610cc757634e487b7160e01b600052602160045260246000fd5b91905290565b600060208284031215610cdf57600080fd5b813567ffffffffffffffff811115610cf657600080fd5b610d0284828501610b99565b949350505050565b600060208284031215610d1c57600080fd5b5051919050565b600060208284031215610d3557600080fd5b81518015158114610ac457600080fd5b602081526001600160a01b0382511660208201526001600160a01b0360208301511660408201526040820151606082015260006060830151608080840152610d0260a0840182610a6b565b600060208284031215610da257600080fd5b81516001600160a01b0381168114610ac457600080fd5b60608101818360005b6003811015610de1578151835260209283019290910190600101610dc2565b50505092915050565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c0840152610e2e60e0840182610a6b565b9150506001600160a01b03831660208301529392505050565b80820180821115610e6857634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220c2778d7a9ba852c2197a45fc031105c011ab6164b82a46d83fee7d1d008d456564736f6c634300081a0033';

type MystikoV2LoopMainConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2LoopMainConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2LoopMain__factory extends ContractFactory {
  constructor(...args: MystikoV2LoopMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2LoopMain';
  }

  deploy(
    _hasher3: string,
    _settingsCenter: string,
    _localConfig: IMystikoLoop.LoopLocalConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2LoopMain> {
    return super.deploy(
      _hasher3,
      _settingsCenter,
      _localConfig,
      overrides || {},
    ) as Promise<MystikoV2LoopMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    _settingsCenter: string,
    _localConfig: IMystikoLoop.LoopLocalConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _settingsCenter, _localConfig, overrides || {});
  }
  attach(address: string): MystikoV2LoopMain {
    return super.attach(address) as MystikoV2LoopMain;
  }
  connect(signer: Signer): MystikoV2LoopMain__factory {
    return super.connect(signer) as MystikoV2LoopMain__factory;
  }
  static readonly contractName: 'MystikoV2LoopMain';
  public readonly contractName: 'MystikoV2LoopMain';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2LoopMainInterface {
    return new utils.Interface(_abi) as MystikoV2LoopMainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2LoopMain {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2LoopMain;
  }
}
