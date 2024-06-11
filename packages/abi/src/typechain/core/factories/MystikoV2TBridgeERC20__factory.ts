/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  MystikoV2TBridgeERC20,
  MystikoV2TBridgeERC20Interface,
  IMystikoBridge,
} from '../MystikoV2TBridgeERC20';

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
        name: '_bridgeProxyAddress',
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
          {
            internalType: 'uint256',
            name: 'minBridgeFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoBridge.LocalConfig',
        name: '_localConfig',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'peerMinExecutorFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'peerMinRollupFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoBridge.PeerConfig',
        name: '_peerConfig',
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
    name: 'AmountLessThanZero',
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
    name: 'BridgeFeeTooFew',
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
    name: 'ExecutorFeeTooFew',
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
    name: 'PeerChainIdNotMatched',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PeerContractAlreadySet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PeerContractNotMatched',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RandomSGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupFeeToFew',
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
    name: 'SenderIsNotBridgeProxy',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'commitment',
        type: 'uint256',
      },
    ],
    name: 'CommitmentCrossChain',
    type: 'event',
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
    name: 'bridgeProxyAddress',
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
            name: 'bridgeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executorFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rollupFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoBridge.DepositRequest',
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
        internalType: 'bytes',
        name: '_message',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
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
    inputs: [],
    name: 'defaultMaxAmount',
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
    name: 'defaultMinAmount',
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
    name: 'defaultMinBridgeFee',
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
    name: 'defaultPeerMinExecutorFee',
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
    name: 'defaultPeerMinRollupFee',
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
            name: 'bridgeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executorFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rollupFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoBridge.DepositRequest',
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
    name: 'getMinBridgeFee',
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
    name: 'getMinExecutorFee',
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
    name: 'getPeerMinRollupFee',
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
    name: 'isPeerContractSet',
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
    name: 'peerChainId',
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
    name: 'peerChainName',
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
    name: 'peerContract',
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
            internalType: 'uint64',
            name: 'peerChainId',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'peerChainName',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'peerContract',
            type: 'address',
          },
        ],
        internalType: 'struct IMystikoBridge.PeerContract',
        name: '_peerContract',
        type: 'tuple',
      },
    ],
    name: 'setPeerContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'settings',
    outputs: [
      {
        internalType: 'contract MystikoBridgeSettings',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526000805460ff60a01b1916905534801561001d57600080fd5b50604051612b05380380612b0583398101604081905261003c91610158565b600080546001600160a01b03199081166001600160a01b039889161790915560088054821695881695909517909455815160035560208083015160045560409092015160055580516006550151600755600980548316918516919091179055600a805490911691909216179055610204565b6001600160a01b03811681146100c357600080fd5b50565b604051606081016001600160401b03811182821017156100f657634e487b7160e01b600052604160045260246000fd5b60405290565b60006040828403121561010e57600080fd5b604080519081016001600160401b038111828210171561013e57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b60008060008060008086880361012081121561017357600080fd5b875161017e816100ae565b602089015190975061018f816100ae565b60408901519096506101a0816100ae565b60608901519095506101b1816100ae565b93506060607f19820112156101c557600080fd5b506101ce6100c6565b6080880151815260a0880151602082015260c0880151604082015291506101f88860e089016100fc565b90509295509295509295565b6128f2806102136000396000f3fe6080604052600436106101b75760003560e01c8063c2d41601116100ec578063ddac5dc11161008a578063efbfb2ae11610064578063efbfb2ae146104b0578063f4ad17c6146104c5578063fa750f56146104da578063fb3e3d73146104fb57600080fd5b8063ddac5dc114610466578063e06174e41461047b578063ed6ea33a1461049b57600080fd5b8063cbe34285116100c6578063cbe34285146103e4578063cdfceeba146103fa578063cfc7e2da1461043b578063d0b436bd1461045057600080fd5b8063c2d4160114610395578063c9230c5d146103bc578063cb5c029a146103d157600080fd5b8063422e002811610159578063640c0b3611610133578063640c0b3614610327578063825b5f8d1461033d57806382d21cd8146103525780639a03636c1461038257600080fd5b8063422e0028146102da5780634dde6fbc146102fc5780634e3c10b71461031257600080fd5b806321e32d551161019557806321e32d55146102385780632421e155146102585780632cd26d451461029e5780633fe3347a146102be57600080fd5b80630ba95909146101bc578063176de7a8146101e45780631ba46cfd14610206575b600080fd5b3480156101c857600080fd5b506101d1610511565b6040519081526020015b60405180910390f35b3480156101f057600080fd5b506101f961059a565b6040516101db919061205e565b34801561021257600080fd5b50600a546001600160a01b03165b6040516001600160a01b0390911681526020016101db565b34801561024457600080fd5b50600254610220906001600160a01b031681565b34801561026457600080fd5b5060408051808201909152600781527f746272696467650000000000000000000000000000000000000000000000000060208201526101f9565b3480156102aa57600080fd5b50600854610220906001600160a01b031681565b3480156102ca57600080fd5b5060006040516101db9190612071565b3480156102e657600080fd5b506102fa6102f53660046121c0565b610611565b005b34801561030857600080fd5b506101d160055481565b34801561031e57600080fd5b506101f96106fe565b34801561033357600080fd5b506101d160065481565b34801561034957600080fd5b506101d161078c565b34801561035e57600080fd5b5061037261036d36600461226d565b610813565b60405190151581526020016101db565b6102fa6103903660046123f2565b61089d565b3480156103a157600080fd5b506103aa6108b6565b60405160ff90911681526020016101db565b3480156103c857600080fd5b506101f9610924565b6102fa6103df36600461242f565b61096e565b3480156103f057600080fd5b506101d160075481565b34801561040657600080fd5b5060005461042290600160a81b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101db565b34801561044757600080fd5b506101d1610da3565b34801561045c57600080fd5b506101d160045481565b34801561047257600080fd5b50610220610e2a565b34801561048757600080fd5b50600954610220906001600160a01b031681565b3480156104a757600080fd5b50610372610ec9565b3480156104bc57600080fd5b506101d1610f36565b3480156104d157600080fd5b506101d1610fbd565b3480156104e657600080fd5b5060005461037290600160a01b900460ff1681565b34801561050757600080fd5b506101d160035481565b60095460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa15801561055e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058291906124a1565b905080156105905780610594565b6004545b91505090565b600a54604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b419160048083019260009291908290030181865afa1580156105e4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261060c91908101906124ba565b905090565b600054600160a01b900460ff161561063c57604051636d8f115160e11b815260040160405180910390fd5b80516000805467ffffffffffffffff909216600160a81b027fffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffff909216919091179055602081015160019061069090826125b9565b5060400151600280546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b6001805461070b90612531565b80601f016020809104026020016040519081016040528092919081815260200182805461073790612531565b80156107845780601f1061075957610100808354040283529160200191610784565b820191906000526020600020905b81548152906001019060200180831161076757829003601f168201915b505050505081565b6009546040516361863c0360e11b815230600482015260009182916001600160a01b039091169063c30c780690602401602060405180830381865afa1580156107d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fd91906124a1565b9050801561080b5780610594565b505060075490565b6008546000906001600160a01b0316331461084157604051633dca01cf60e11b815260040160405180910390fd5b600061088285858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061104492505050565b90506108908787858461110c565b5060019695505050505050565b60405163e7a24ff960e01b815260040160405180910390fd5b600a546040805163313ce56760e01b815290516000926001600160a01b03169163313ce5679160048083019260209291908290030181865afa158015610900573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060c9190612678565b600a54604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde039160048083019260009291908290030181865afa1580156105e4573d6000803e3d6000fd5b60095460405163bb07320560e01b81523060048201526001600160a01b039091169063bb07320590602401602060405180830381865afa1580156109b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109da919061269b565b156109f857604051630e2f42c960e31b815260040160405180910390fd5b600960009054906101000a90046001600160a01b03166001600160a01b031663bc5877066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6f919061269b565b15610b465760006040518060800160405280326001600160a01b03168152602001610aa2600a546001600160a01b031690565b6001600160a01b039081168252602082018690526040918201859052600954915163849e8b9f60e01b8152929350169063849e8b9f90610ae69084906004016126bd565b602060405180830381865afa158015610b03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b27919061269b565b610b4457604051633042041f60e21b815260040160405180910390fd5b505b610b4e610da3565b83511015610b6f5760405163617ab12d60e11b815260040160405180910390fd5b610b77610511565b83511115610b9857604051630625040160e01b815260040160405180910390fd5b610ba0610f36565b8360a001511015610bc45760405163c4d8d00d60e01b815260040160405180910390fd5b610bcc610fbd565b8360c001511015610bf0576040516355a6d6a160e11b815260040160405180910390fd5b610bf861078c565b8360e001511015610c1c5760405163784f02bd60e11b815260040160405180910390fd5b6000610c358460400151856000015186606001516111ff565b905080846020015114610c5b576040516301bfaa2560e51b815260040160405180910390fd5b60095460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa158015610ca3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc7919061269b565b15610ce557604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252855181526020808701519082015260c08601519181019190915260e08501516060820152608080860151908201526000610d2882611318565b9050610d388660a0015182611387565b610d6d610d43610e2a565b60e088015160c08901518951610d599190612708565b610d639190612708565b8860a0015161140d565b60208601516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a2505050505050565b600954604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610df0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1491906124a1565b90508015610e225780610594565b505060035490565b6009546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610e77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b9190612729565b90506001600160a01b038116610ec4576040516306f3d63360e51b815260040160405180910390fd5b919050565b60095460405163bb07320560e01b81523060048201526000916001600160a01b03169063bb07320590602401602060405180830381865afa158015610f12573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060c919061269b565b600954604051637b52b00d60e01b815230600482015260009182916001600160a01b0390911690637b52b00d90602401602060405180830381865afa158015610f83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa791906124a1565b90508015610fb55780610594565b505060055490565b600954604051634f314f9d60e11b815230600482015260009182916001600160a01b0390911690639e629f3a90602401602060405180830381865afa15801561100a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102e91906124a1565b9050801561103c5780610594565b505060065490565b6110766040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6110a86040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b60006110b4848261147e565b90835290506110c3848261147e565b602084019190915290506110d7848261147e565b604084019190915290506110eb848261147e565b606084019190915290506110ff84826115af565b5060808301525092915050565b6002546001600160a01b0384811691161461113a57604051631b495ecf60e31b815260040160405180910390fd5b60005467ffffffffffffffff858116600160a81b90920416146111705760405163373bc12160e11b815260040160405180910390fd5b80516000036111925760405163820bf1e560e01b815260040160405180910390fd5b61119a610e2a565b6001600160a01b03166378d60cd782846040518363ffffffff1660e01b81526004016111c7929190612746565b600060405180830381600087803b1580156111e157600080fd5b505af11580156111f5573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106112425760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061127457604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916112cc916004016127a3565b602060405180830381865afa1580156112e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130d91906124a1565b9150505b9392505050565b60608061132883600001516116bc565b61133584602001516116bc565b61134285604001516116bc565b61134f86606001516116bc565b61135c8760800151611754565b6040516020016113709594939291906127d4565b60408051601f198184030181529190529392505050565b60085460025460005460405163c81739cd60e01b81526001600160a01b039384169363c81739cd9387936113d793919092169167ffffffffffffffff600160a81b9091041690879060040161283f565b6000604051808303818588803b1580156113f057600080fd5b505af1158015611404573d6000803e3d6000fd5b50505050505050565b8034146114615760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600a54611479906001600160a01b031633858561178b565b505050565b60008083518360206114909190612708565b111580156114a757506114a4836020612708565b83105b6114ff5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401611458565b600060405160206000600182038760208a0101515b838310156115345780821a83860153600183019250600182039150611514565b50505081016040525190506001600160ff1b038111156115965760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401611458565b806115a2856020612708565b92509250505b9250929050565b60606000806115be8585611800565b86519095509091506115d08286612708565b111580156115e657506115e38185612708565b84105b61163e5760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401611458565b606081158015611659576040519150602082016040526116a3565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561169257805183526020928301920161167a565b5050848452601f01601f1916604052505b50806116af8387612708565b9350935050509250929050565b60606001600160ff1b038211156117155760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401611458565b60405160208082526000601f5b828210156117445785811a826020860101536001919091019060001901611722565b5050506040818101905292915050565b805160609061176281611a04565b83604051602001611774929190612871565b604051602081830303815290604052915050919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526117fa908590611ace565b50505050565b600080600061180f8585611b31565b9450905060006001600160f81b0319821660fd60f81b036118a7576118348686611bb9565b955061ffff16905060fd811080159061184f575061ffff8111155b61189b5760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401611458565b92508391506115a89050565b6001600160f81b03198216607f60f91b03611931576118c68686611c72565b955063ffffffff16905061ffff811180156118e5575063ffffffff8111155b61189b5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401611458565b6001600160f81b031980831690036119ae5761194d8686611d43565b955067ffffffffffffffff16905063ffffffff811161189b5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401611458565b5060f881901c60fd811061189b5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401611458565b606060fd8267ffffffffffffffff161015611a3957604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff1611611a8957611a5960fd60f81b611e14565b611a6283611e3b565b604051602001611a73929190612871565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611ab457611aab607f60f91b611e14565b611a6283611e7e565b611ac56001600160f81b0319611e14565b611a6283611ec1565b6000611ae36001600160a01b03841683611f04565b90508051600014158015611b08575080806020019051810190611b06919061269b565b155b1561147957604051635274afe760e01b81526001600160a01b0384166004820152602401611458565b6000808351836001611b439190612708565b11158015611b5a5750611b57836001612708565b83105b611ba65760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401611458565b83830160200151806115a2856001612708565b6000808351836002611bcb9190612708565b11158015611be25750611bdf836002612708565b83105b611c395760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401611458565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026115a29190612708565b6000808351836004611c849190612708565b11158015611c9b5750611c98836004612708565b83105b611cf25760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401611458565b600060405160046000600182038760208a0101515b83831015611d275780821a83860153600183019250600182039150611d07565b505050016040819052601f1901519050806115a2856004612708565b6000808351836008611d559190612708565b11158015611d6c5750611d69836008612708565b83105b611dc35760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401611458565b600060405160086000600182038760208a0101515b83831015611df85780821a83860153600183019250600182039150611dd8565b505050016040819052601f1901519050806115a2856008612708565b60408051600181526001600160f81b03198316602082015260218101909152606090611a33565b6040516002808252606091906000601f5b82821015611e6e5785811a826020860101536001919091019060001901611e4c565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611eb15785811a826020860101536001919091019060001901611e8f565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611ef45785811a826020860101536001919091019060001901611ed2565b5050506028810160405292915050565b60606113118383600084600080856001600160a01b03168486604051611f2a91906128a0565b60006040518083038185875af1925050503d8060008114611f67576040519150601f19603f3d011682016040523d82523d6000602084013e611f6c565b606091505b5091509150611f7c868383611f86565b9695505050505050565b606082611f9b57611f9682611fe2565b611311565b8151158015611fb257506001600160a01b0384163b155b15611fdb57604051639996b31560e01b81526001600160a01b0385166004820152602401611458565b5080611311565b805115611ff25780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60005b83811015612029578181015183820152602001612011565b50506000910152565b6000815180845261204a81602086016020860161200e565b601f01601f19169290920160200192915050565b6020815260006113116020830184612032565b602081016002831061209357634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156120d2576120d2612099565b60405290565b604051610100810167ffffffffffffffff811182821017156120d2576120d2612099565b604051601f8201601f1916810167ffffffffffffffff8111828210171561212557612125612099565b604052919050565b803567ffffffffffffffff81168114610ec457600080fd5b600067ffffffffffffffff82111561215f5761215f612099565b50601f01601f191660200190565b600061218061217b84612145565b6120fc565b905082815283838301111561219457600080fd5b828260208301376000602084830101529392505050565b6001600160a01b038116811461200b57600080fd5b6000602082840312156121d257600080fd5b813567ffffffffffffffff8111156121e957600080fd5b8201606081850312156121fb57600080fd5b6122036120af565b61220c8261212d565b8152602082013567ffffffffffffffff81111561222857600080fd5b8201601f8101861361223957600080fd5b6122488682356020840161216d565b6020830152506040820135915061225e826121ab565b60408101919091529392505050565b60008060008060006080868803121561228557600080fd5b61228e8661212d565b9450602086013561229e816121ab565b9350604086013567ffffffffffffffff8111156122ba57600080fd5b8601601f810188136122cb57600080fd5b803567ffffffffffffffff8111156122e257600080fd5b8860208284010111156122f457600080fd5b60209190910193509150606086013561230c816121ab565b809150509295509295909350565b80356fffffffffffffffffffffffffffffffff81168114610ec457600080fd5b600082601f83011261234b57600080fd5b6113118383356020850161216d565b6000610100828403121561236d57600080fd5b6123756120d8565b823581526020808401359082015260408084013590820152905061239b6060830161231a565b6060820152608082013567ffffffffffffffff8111156123ba57600080fd5b6123c68482850161233a565b60808301525060a0828101359082015260c0808301359082015260e09182013591810191909152919050565b60006020828403121561240457600080fd5b813567ffffffffffffffff81111561241b57600080fd5b6124278482850161235a565b949350505050565b60008060006060848603121561244457600080fd5b833567ffffffffffffffff81111561245b57600080fd5b6124678682870161235a565b93505060208401359150604084013567ffffffffffffffff81111561248b57600080fd5b6124978682870161233a565b9150509250925092565b6000602082840312156124b357600080fd5b5051919050565b6000602082840312156124cc57600080fd5b815167ffffffffffffffff8111156124e357600080fd5b8201601f810184136124f457600080fd5b805161250261217b82612145565b81815285602083850101111561251757600080fd5b61252882602083016020860161200e565b95945050505050565b600181811c9082168061254557607f821691505b60208210810361256557634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561147957806000526020600020601f840160051c810160208510156125925750805b601f840160051c820191505b818110156125b2576000815560010161259e565b5050505050565b815167ffffffffffffffff8111156125d3576125d3612099565b6125e7816125e18454612531565b8461256b565b6020601f82116001811461261b57600083156126035750848201515b600019600385901b1c1916600184901b1784556125b2565b600084815260208120601f198516915b8281101561264b578785015182556020948501946001909201910161262b565b50848210156126695786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006020828403121561268a57600080fd5b815160ff8116811461131157600080fd5b6000602082840312156126ad57600080fd5b8151801515811461131157600080fd5b602081526001600160a01b0382511660208201526001600160a01b036020830151166040820152604082015160608201526000606083015160808084015261242760a0840182612032565b80820180821115611a3357634e487b7160e01b600052601160045260246000fd5b60006020828403121561273b57600080fd5b8151611311816121ab565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261278a60e0840182612032565b9150506001600160a01b03831660208301529392505050565b60608101818360005b60038110156127cb5781518352602092830192909101906001016127ac565b50505092915050565b600086516127e6818460208b0161200e565b8651908301906127fa818360208b0161200e565b865191019061280d818360208a0161200e565b855191019061282081836020890161200e565b845191019061283381836020880161200e565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff831660208201526060604082015260006125286060830184612032565b6000835161288381846020880161200e565b83519083019061289781836020880161200e565b01949350505050565b600082516128b281846020870161200e565b919091019291505056fea2646970667358221220a4c117099d6db3eb42303a4929ce3350d3d806957a08e8e94bd0d536c0fe007364736f6c634300081a0033';

type MystikoV2TBridgeERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2TBridgeERC20ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2TBridgeERC20__factory extends ContractFactory {
  constructor(...args: MystikoV2TBridgeERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2TBridgeERC20';
  }

  deploy(
    _hasher3: string,
    _token: string,
    _bridgeProxyAddress: string,
    _settingsCenter: string,
    _localConfig: IMystikoBridge.LocalConfigStruct,
    _peerConfig: IMystikoBridge.PeerConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2TBridgeERC20> {
    return super.deploy(
      _hasher3,
      _token,
      _bridgeProxyAddress,
      _settingsCenter,
      _localConfig,
      _peerConfig,
      overrides || {},
    ) as Promise<MystikoV2TBridgeERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    _bridgeProxyAddress: string,
    _settingsCenter: string,
    _localConfig: IMystikoBridge.LocalConfigStruct,
    _peerConfig: IMystikoBridge.PeerConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _hasher3,
      _token,
      _bridgeProxyAddress,
      _settingsCenter,
      _localConfig,
      _peerConfig,
      overrides || {},
    );
  }
  attach(address: string): MystikoV2TBridgeERC20 {
    return super.attach(address) as MystikoV2TBridgeERC20;
  }
  connect(signer: Signer): MystikoV2TBridgeERC20__factory {
    return super.connect(signer) as MystikoV2TBridgeERC20__factory;
  }
  static readonly contractName: 'MystikoV2TBridgeERC20';
  public readonly contractName: 'MystikoV2TBridgeERC20';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2TBridgeERC20Interface {
    return new utils.Interface(_abi) as MystikoV2TBridgeERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2TBridgeERC20 {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2TBridgeERC20;
  }
}
