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
    name: 'certificateCheck',
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
    name: 'checkEnabled',
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
    name: 'getIssuerAddress',
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
        internalType: 'address',
        name: '_newIssuer',
        type: 'address',
      },
    ],
    name: 'updateIssuerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
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
  '0x60806040526002805460ff60a01b1916600160a01b1790553480156200002457600080fd5b5060405162000f1138038062000f118339810160408190526200004791620001cc565b600180546001600160a01b0319166001600160a01b03841690811790915560408051634162169f60e01b815290518492620000d792600092634162169f916004808201926020929091908290030181865afa158015620000ab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d1919062000204565b62000100565b5050600280546001600160a01b0319166001600160a01b03929092169190911790555062000229565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16620001a5576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556200015c3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001a9565b5060005b92915050565b80516001600160a01b0381168114620001c757600080fd5b919050565b60008060408385031215620001e057600080fd5b620001eb83620001af565b9150620001fb60208401620001af565b90509250929050565b6000602082840312156200021757600080fd5b6200022282620001af565b9392505050565b610cd880620002396000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806336568abe11610097578063be102b6a11610066578063be102b6a14610242578063d547741f14610256578063dc7f012414610269578063e24207aa1461027b57600080fd5b806336568abe146101dd578063849e8b9f146101f057806391d1485414610203578063a217fddf1461023a57600080fd5b8063248a9ca3116100d3578063248a9ca3146101755780632a2b6ba0146101a65780632f2ff15d146101b957806332e71ead146101cc57600080fd5b806301ffc9a7146101055780631d1438481461012d5780631dfab65b1461015857806323f4c8261461016d575b600080fd5b610118610113366004610a62565b610283565b60405190151581526020015b60405180910390f35b600254610140906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b61016b610166366004610aa8565b6102ba565b005b61016b6103ba565b610198610183366004610ac5565b60009081526020819052604090206001015490565b604051908152602001610124565b600154610140906001600160a01b031681565b61016b6101c7366004610ade565b6104a5565b6002546001600160a01b0316610140565b61016b6101eb366004610ade565b6104d0565b6101186101fe366004610b7e565b610508565b610118610211366004610ade565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610198600081565b60025461011890600160a01b900460ff1681565b61016b610264366004610ade565b6105c5565b600254600160a01b900460ff16610118565b61016b6105ea565b60006001600160e01b03198216637965db0b60e01b14806102b457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610c6f565b6001600160a01b03161461034e5760405163177bc95160e11b815260040160405180910390fd5b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527fcad349a575b7a312fc947b899cb436e2fde2cde8be518bf412258b1d7836a54e9060200160405180910390a150565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa158015610403573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104279190610c6f565b6001600160a01b03161461044e5760405163177bc95160e11b815260040160405180910390fd5b6002805460ff60a01b1916908190556040517ffea2f793d2c6ac256ea0dfcb898c0e552223a2a6ed4d2c25d1ed2eca25aad3109161049b91600160a01b90910460ff161515815260200190565b60405180910390a1565b6000828152602081905260409020600101546104c0816106cd565b6104ca83836106da565b50505050565b6001600160a01b03811633146104f95760405163334bd91960e11b815260040160405180910390fd5b6105038282610784565b505050565b6000816040015142111561051e57506000919050565b6000468360000151846020015185604001516040516020016105719493929190938452606092831b6bffffffffffffffffffffffff1990811660208601529190921b166034830152604882015260680190565b6040516020818303038152906040528051906020012090506000610599828560600151610807565b6002549091506001600160a01b038083169116146105bb575060009392505050565b5060019392505050565b6000828152602081905260409020600101546105e0816106cd565b6104ca8383610784565b60015460408051634162169f60e01b8152905133926001600160a01b031691634162169f9160048083019260209291908290030181865afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106579190610c6f565b6001600160a01b03161461067e5760405163177bc95160e11b815260040160405180910390fd5b6002805460ff60a01b1916600160a01b908117918290556040517ffea2f793d2c6ac256ea0dfcb898c0e552223a2a6ed4d2c25d1ed2eca25aad3109261049b92900460ff161515815260200190565b6106d78133610831565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1661077c576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556107343390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016102b4565b5060006102b4565b6000828152602081815260408083206001600160a01b038516845290915281205460ff161561077c576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016102b4565b600080600080610817868661088d565b92509250925061082782826108da565b5090949350505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166108895760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044015b60405180910390fd5b5050565b600080600083516041036108c75760208401516040850151606086015160001a6108b988828585610993565b9550955095505050506108d3565b50508151600091506002905b9250925092565b60008260038111156108ee576108ee610c8c565b036108f7575050565b600182600381111561090b5761090b610c8c565b036109295760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561093d5761093d610c8c565b0361095e5760405163fce698f760e01b815260048101829052602401610880565b600382600381111561097257610972610c8c565b03610889576040516335e2f38360e21b815260048101829052602401610880565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156109ce5750600091506003905082610a58565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610a22573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610a4e57506000925060019150829050610a58565b9250600091508190505b9450945094915050565b600060208284031215610a7457600080fd5b81356001600160e01b031981168114610a8c57600080fd5b9392505050565b6001600160a01b03811681146106d757600080fd5b600060208284031215610aba57600080fd5b8135610a8c81610a93565b600060208284031215610ad757600080fd5b5035919050565b60008060408385031215610af157600080fd5b823591506020830135610b0381610a93565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610b4757610b47610b0e565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b7657610b76610b0e565b604052919050565b60006020808385031215610b9157600080fd5b823567ffffffffffffffff80821115610ba957600080fd5b9084019060808287031215610bbd57600080fd5b610bc5610b24565b8235610bd081610a93565b815282840135610bdf81610a93565b8185015260408381013590820152606083013582811115610bff57600080fd5b80840193505086601f840112610c1457600080fd5b823582811115610c2657610c26610b0e565b610c38601f8201601f19168601610b4d565b92508083528785828601011115610c4e57600080fd5b80858501868501376000908301909401939093526060830152509392505050565b600060208284031215610c8157600080fd5b8151610a8c81610a93565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220a50bc7ae4f3798dee2b94b257f81ba6d8d60807922105e63c65273bcaf6d130464736f6c63430008140033';

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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoCertificate> {
    return super.deploy(_daoRegistry, _issuer, overrides || {}) as Promise<MystikoCertificate>;
  }
  getDeployTransaction(
    _daoRegistry: string,
    _issuer: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_daoRegistry, _issuer, overrides || {});
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
