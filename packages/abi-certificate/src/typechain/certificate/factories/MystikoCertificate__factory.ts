/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoCertificate, MystikoCertificateInterface } from '../MystikoCertificate';

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
        name: '_issuer',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_certCheckEnabled',
        type: 'bool',
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
    name: 'ECDSAInvalidSignature',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256',
      },
    ],
    name: 'ECDSAInvalidSignatureLength',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'ECDSAInvalidSignatureS',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyMystikoDAO',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: 'CertificateCheck',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'issuer',
        type: 'address',
      },
    ],
    name: 'IssuerChanged',
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
    name: 'certCheckEnabled',
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
    inputs: [],
    name: 'disableCertificateCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'enableCertificateCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCertificateIssuer',
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
    name: 'issuer',
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
        internalType: 'address',
        name: '_newIssuer',
        type: 'address',
      },
    ],
    name: 'setIssuerAddress',
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
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
        ],
        internalType: 'struct CertificateParams',
        name: '_params',
        type: 'tuple',
      },
    ],
    name: 'verifyCertificate',
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
  '0x6080604052348015600f57600080fd5b50604051610ef1380380610ef1833981016040819052602c91608d565b600180546001600160a01b039485166001600160a01b031990911617905560028054911515600160a01b026001600160a81b0319909216929093169190911717905560d3565b80516001600160a01b0381168114608857600080fd5b919050565b60008060006060848603121560a157600080fd5b60a8846072565b925060b4602085016072565b91506040840151801515811460c857600080fd5b809150509250925092565b610e0f806100e26000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80636838899e116100b2578063a217fddf11610081578063c8f2d95811610066578063c8f2d95814610277578063d547741f1461028b578063e24207aa1461029e57600080fd5b8063a217fddf1461025d578063bc5877061461026557600080fd5b80636838899e146101ef57806377bc43d614610202578063849e8b9f1461021357806391d148541461022657600080fd5b80632a2b6ba0116100ee5780632a2b6ba0146101ae5780632f2ff15d146101c157806336568abe146101d4578063374de218146101e757600080fd5b806301ffc9a7146101205780631d1438481461014857806323f4c82614610173578063248a9ca31461017d575b600080fd5b61013361012e366004610b89565b6102a6565b60405190151581526020015b60405180910390f35b60025461015b906001600160a01b031681565b6040516001600160a01b03909116815260200161013f565b61017b6102dd565b005b6101a061018b366004610bba565b60009081526020819052604090206001015490565b60405190815260200161013f565b60015461015b906001600160a01b031681565b61017b6101cf366004610be8565b6103c8565b61017b6101e2366004610be8565b6103f3565b61017b61042b565b61017b6101fd366004610c18565b610545565b6002546001600160a01b031661015b565b610133610221366004610ca5565b610645565b610133610234366004610be8565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101a0600081565b600254600160a01b900460ff16610133565b60025461013390600160a01b900460ff1681565b61017b610299366004610be8565b6106ef565b61017b610714565b60006001600160e01b03198216637965db0b60e01b14806102d757506301ffc9a760e01b6001600160e01b03198316145b92915050565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa158015610326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034a9190610da6565b6001600160a01b0316146103715760405163177bc95160e11b815260040160405180910390fd5b6002805460ff60a01b1916908190556040517ffea2f793d2c6ac256ea0dfcb898c0e552223a2a6ed4d2c25d1ed2eca25aad310916103be91600160a01b90910460ff161515815260200190565b60405180910390a1565b6000828152602081905260409020600101546103e3816107f7565b6103ed8383610801565b50505050565b6001600160a01b038116331461041c5760405163334bd91960e11b815260040160405180910390fd5b61042682826108ab565b505050565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa158015610474573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104989190610da6565b6001600160a01b0316146104bf5760405163177bc95160e11b815260040160405180910390fd5b6105426000801b600160009054906101000a90046001600160a01b03166001600160a01b0316634162169f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610519573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053d9190610da6565b610801565b50565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa15801561058e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b29190610da6565b6001600160a01b0316146105d95760405163177bc95160e11b815260040160405180910390fd5b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527fcad349a575b7a312fc947b899cb436e2fde2cde8be518bf412258b1d7836a54e9060200160405180910390a150565b6000816040015142111561065b57506000919050565b6000468360000151846020015185604001516040516020016106ae9493929190938452606092831b6bffffffffffffffffffffffff1990811660208601529190921b166034830152604882015260680190565b60405160208183030381529060405280519060200120905060006106d682856060015161092e565b6002546001600160a01b03918216911614949350505050565b60008281526020819052604090206001015461070a816107f7565b6103ed83836108ab565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa15801561075d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107819190610da6565b6001600160a01b0316146107a85760405163177bc95160e11b815260040160405180910390fd5b6002805460ff60a01b1916600160a01b908117918290556040517ffea2f793d2c6ac256ea0dfcb898c0e552223a2a6ed4d2c25d1ed2eca25aad310926103be92900460ff161515815260200190565b6105428133610958565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166108a3576000838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561085b3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016102d7565b5060006102d7565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16156108a3576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016102d7565b60008060008061093e86866109b4565b92509250925061094e8282610a01565b5090949350505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166109b05760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044015b60405180910390fd5b5050565b600080600083516041036109ee5760208401516040850151606086015160001a6109e088828585610aba565b9550955095505050506109fa565b50508151600091506002905b9250925092565b6000826003811115610a1557610a15610dc3565b03610a1e575050565b6001826003811115610a3257610a32610dc3565b03610a505760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610a6457610a64610dc3565b03610a855760405163fce698f760e01b8152600481018290526024016109a7565b6003826003811115610a9957610a99610dc3565b036109b0576040516335e2f38360e21b8152600481018290526024016109a7565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610af55750600091506003905082610b7f565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610b49573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610b7557506000925060019150829050610b7f565b9250600091508190505b9450945094915050565b600060208284031215610b9b57600080fd5b81356001600160e01b031981168114610bb357600080fd5b9392505050565b600060208284031215610bcc57600080fd5b5035919050565b6001600160a01b038116811461054257600080fd5b60008060408385031215610bfb57600080fd5b823591506020830135610c0d81610bd3565b809150509250929050565b600060208284031215610c2a57600080fd5b8135610bb381610bd3565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610c6e57610c6e610c35565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610c9d57610c9d610c35565b604052919050565b600060208284031215610cb757600080fd5b813567ffffffffffffffff811115610cce57600080fd5b820160808185031215610ce057600080fd5b610ce8610c4b565b8135610cf381610bd3565b81526020820135610d0381610bd3565b602082015260408281013590820152606082013567ffffffffffffffff811115610d2c57600080fd5b80830192505084601f830112610d4157600080fd5b813567ffffffffffffffff811115610d5b57610d5b610c35565b610d6e601f8201601f1916602001610c74565b818152866020838601011115610d8357600080fd5b816020850160208301376000918101602001919091526060820152949350505050565b600060208284031215610db857600080fd5b8151610bb381610bd3565b634e487b7160e01b600052602160045260246000fdfea264697066735822122077cd73316532baa5f7df5f403dd57585af2482168f52d350e62af7e2fe1f774b64736f6c634300081a0033';

type MystikoCertificateConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoCertificateConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoCertificate__factory extends ContractFactory {
  constructor(...args: MystikoCertificateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoCertificate';
  }

  deploy(
    _daoRegistry: string,
    _issuer: string,
    _certCheckEnabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoCertificate> {
    return super.deploy(
      _daoRegistry,
      _issuer,
      _certCheckEnabled,
      overrides || {},
    ) as Promise<MystikoCertificate>;
  }
  getDeployTransaction(
    _daoRegistry: string,
    _issuer: string,
    _certCheckEnabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_daoRegistry, _issuer, _certCheckEnabled, overrides || {});
  }
  attach(address: string): MystikoCertificate {
    return super.attach(address) as MystikoCertificate;
  }
  connect(signer: Signer): MystikoCertificate__factory {
    return super.connect(signer) as MystikoCertificate__factory;
  }
  static readonly contractName: 'MystikoCertificate';
  public readonly contractName: 'MystikoCertificate';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoCertificateInterface {
    return new utils.Interface(_abi) as MystikoCertificateInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoCertificate {
    return new Contract(address, _abi, signerOrProvider) as MystikoCertificate;
  }
}
