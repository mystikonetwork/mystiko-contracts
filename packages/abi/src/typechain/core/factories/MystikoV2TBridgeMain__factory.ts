/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  MystikoV2TBridgeMain,
  MystikoV2TBridgeMainInterface,
  IMystikoBridge,
} from '../MystikoV2TBridgeMain';

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
    name: 'getPeerMinExecutorFee',
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
  '0x60806040526000805460ff60a01b191690553480156200001e57600080fd5b506040516200270f3803806200270f833981016040819052620000419162000126565b600080546001600160a01b039687166001600160a01b031991821617909155600880549587169582169590951790945581516003556020808301516004556040909201516005558051600655015160075560098054919093169116179055620001ec565b6001600160a01b0381168114620000bb57600080fd5b50565b604051606081016001600160401b0381118282101715620000ef57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715620000ef57634e487b7160e01b600052604160045260246000fd5b60008060008060008587036101008112156200014157600080fd5b86516200014e81620000a5565b60208801519096506200016181620000a5565b60408801519095506200017481620000a5565b93506060605f19820112156200018957600080fd5b62000193620000be565b606088015181526080880151602082015260a0880151604082015280935050604060bf1982011215620001c557600080fd5b50620001d0620000f5565b60c0870151815260e09096015160208701525092959194509290565b61251380620001fc6000396000f3fe6080604052600436106101965760003560e01c806382d21cd8116100e1578063d0b436bd1161008a578063ed6ea33a11610064578063ed6ea33a14610430578063efbfb2ae14610445578063fa750f561461045a578063fb3e3d731461047b57600080fd5b8063d0b436bd146103e5578063ddac5dc1146103fb578063e06174e41461041057600080fd5b8063cbe34285116100bb578063cbe3428514610379578063cdfceeba1461038f578063cfc7e2da146103d057600080fd5b806382d21cd8146103235780639a03636c14610353578063cb5c029a1461036657600080fd5b8063422e0028116101435780635898a0a81161011d5780635898a0a8146102e3578063640c0b36146102f8578063825b5f8d1461030e57600080fd5b8063422e0028146102965780634dde6fbc146102b85780634e3c10b7146102ce57600080fd5b80632421e155116101745780632421e1551461020b5780632cd26d451461025a5780633fe3347a1461027a57600080fd5b80630ba959091461019b5780631ba46cfd146101c357806321e32d55146101eb575b600080fd5b3480156101a757600080fd5b506101b0610491565b6040519081526020015b60405180910390f35b3480156101cf57600080fd5b5060005b6040516001600160a01b0390911681526020016101ba565b3480156101f757600080fd5b506002546101d3906001600160a01b031681565b34801561021757600080fd5b5060408051808201909152600781527f746272696467650000000000000000000000000000000000000000000000000060208201525b6040516101ba9190611d5b565b34801561026657600080fd5b506008546101d3906001600160a01b031681565b34801561028657600080fd5b5060016040516101ba9190611d75565b3480156102a257600080fd5b506102b66102b1366004611ea6565b61051a565b005b3480156102c457600080fd5b506101b060055481565b3480156102da57600080fd5b5061024d610607565b3480156102ef57600080fd5b506101b0610695565b34801561030457600080fd5b506101b060065481565b34801561031a57600080fd5b506101b061071c565b34801561032f57600080fd5b5061034361033e366004611f50565b6107a3565b60405190151581526020016101ba565b6102b66103613660046120d1565b61082d565b6102b661037436600461210e565b610846565b34801561038557600080fd5b506101b060075481565b34801561039b57600080fd5b506000546103b790600160a81b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101ba565b3480156103dc57600080fd5b506101b0610c71565b3480156103f157600080fd5b506101b060045481565b34801561040757600080fd5b506101d3610cf8565b34801561041c57600080fd5b506009546101d3906001600160a01b031681565b34801561043c57600080fd5b50610343610d97565b34801561045157600080fd5b506101b0610e09565b34801561046657600080fd5b5060005461034390600160a01b900460ff1681565b34801561048757600080fd5b506101b060035481565b60095460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa1580156104de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610502919061217b565b905080156105105780610514565b6004545b91505090565b600054600160a01b900460ff161561054557604051636d8f115160e11b815260040160405180910390fd5b80516000805467ffffffffffffffff909216600160a81b027fffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffff9092169190911790556020810151600190610599908261221d565b5060400151600280546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b6001805461061490612194565b80601f016020809104026020016040519081016040528092919081815260200182805461064090612194565b801561068d5780601f106106625761010080835404028352916020019161068d565b820191906000526020600020905b81548152906001019060200180831161067057829003601f168201915b505050505081565b600954604051634f314f9d60e11b815230600482015260009182916001600160a01b0390911690639e629f3a90602401602060405180830381865afa1580156106e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610706919061217b565b905080156107145780610514565b505060065490565b6009546040516361863c0360e11b815230600482015260009182916001600160a01b039091169063c30c780690602401602060405180830381865afa158015610769573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078d919061217b565b9050801561079b5780610514565b505060075490565b6008546000906001600160a01b031633146107d157604051633dca01cf60e11b815260040160405180910390fd5b600061081285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e9092505050565b905061082087878584610f58565b5060019695505050505050565b60405163e7a24ff960e01b815260040160405180910390fd5b60095460405163bb07320560e01b81523060048201526001600160a01b039091169063bb07320590602401602060405180830381865afa15801561088e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b291906122dd565b156108d057604051630e2f42c960e31b815260040160405180910390fd5b600960009054906101000a90046001600160a01b03166001600160a01b031663bc5877066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610923573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094791906122dd565b15610a145760006040518060800160405280326001600160a01b03168152602001610970600090565b6001600160a01b039081168252602082018690526040918201859052600954915163849e8b9f60e01b8152929350169063849e8b9f906109b49084906004016122ff565b602060405180830381865afa1580156109d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f591906122dd565b610a1257604051633042041f60e21b815260040160405180910390fd5b505b610a1c610c71565b83511015610a3d5760405163617ab12d60e11b815260040160405180910390fd5b610a45610491565b83511115610a6657604051630625040160e01b815260040160405180910390fd5b610a6e610e09565b8360a001511015610a925760405163c4d8d00d60e01b815260040160405180910390fd5b610a9a610695565b8360c001511015610abe576040516355a6d6a160e11b815260040160405180910390fd5b610ac661071c565b8360e001511015610aea5760405163784f02bd60e11b815260040160405180910390fd5b6000610b0384604001518560000151866060015161104b565b905080846020015114610b29576040516301bfaa2560e51b815260040160405180910390fd5b60095460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa158015610b71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9591906122dd565b15610bb357604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252855181526020808701519082015260c08601519181019190915260e08501516060820152608080860151908201526000610bf682611162565b9050610c068660a00151826111d1565b610c3b610c11610cf8565b60e088015160c08901518951610c279190612345565b610c319190612345565b8860a00151611257565b60208601516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a2505050505050565b600954604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610cbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce2919061217b565b90508015610cf05780610514565b505060035490565b6009546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610d45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d699190612366565b90506001600160a01b038116610d92576040516306f3d63360e51b815260040160405180910390fd5b919050565b60095460405163bb07320560e01b81523060048201526000916001600160a01b03169063bb07320590602401602060405180830381865afa158015610de0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0491906122dd565b905090565b600954604051637b52b00d60e01b815230600482015260009182916001600160a01b0390911690637b52b00d90602401602060405180830381865afa158015610e56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7a919061217b565b90508015610e885780610514565b505060055490565b610ec26040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b610ef46040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6000610f00848261135d565b9083529050610f0f848261135d565b60208401919091529050610f23848261135d565b60408401919091529050610f37848261135d565b60608401919091529050610f4b848261148e565b5060808301525092915050565b6002546001600160a01b03848116911614610f8657604051631b495ecf60e31b815260040160405180910390fd5b60005467ffffffffffffffff858116600160a81b9092041614610fbc5760405163373bc12160e11b815260040160405180910390fd5b8051600003610fde5760405163820bf1e560e01b815260040160405180910390fd5b610fe6610cf8565b6001600160a01b03166378d60cd782846040518363ffffffff1660e01b8152600401611013929190612383565b600060405180830381600087803b15801561102d57600080fd5b505af1158015611041573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180851061108e5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff16106110c057604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891611118916004016123e0565b602060405180830381865afa158015611135573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611159919061217b565b95945050505050565b606080611172836000015161159b565b61117f846020015161159b565b61118c856040015161159b565b611199866060015161159b565b6111a68760800151611633565b6040516020016111ba959493929190612411565b60408051601f198184030181529190529392505050565b60085460025460005460405163c81739cd60e01b81526001600160a01b039384169363c81739cd93879361122193919092169167ffffffffffffffff600160a81b9091041690879060040161247c565b6000604051808303818588803b15801561123a57600080fd5b505af115801561124e573d6000803e3d6000fd5b50505050505050565b6112618183612345565b34146112b45760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064015b60405180910390fd5b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114611301576040519150601f19603f3d011682016040523d82523d6000602084013e611306565b606091505b50509050806113575760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c65640000000000000000000060448201526064016112ab565b50505050565b600080835183602061136f9190612345565b111580156113865750611383836020612345565b83105b6113de5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b60648201526084016112ab565b600060405160206000600182038760208a0101515b838310156114135780821a838601536001830192506001820391506113f3565b50505081016040525190506001600160ff1b038111156114755760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e676500000000000000000060448201526064016112ab565b80611481856020612345565b92509250505b9250929050565b606060008061149d858561166a565b86519095509091506114af8286612345565b111580156114c557506114c28185612345565b84105b61151d5760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b60648201526084016112ab565b60608115801561153857604051915060208201604052611582565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611571578051835260209283019201611559565b5050848452601f01601f1916604052505b508061158e8387612345565b9350935050509250929050565b60606001600160ff1b038211156115f45760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e6765000000000060448201526064016112ab565b60405160208082526000601f5b828210156116235785811a826020860101536001919091019060001901611601565b5050506040818101905292915050565b80516060906116418161186e565b836040516020016116539291906124ae565b604051602081830303815290604052915050919050565b60008060006116798585611938565b9450905060006001600160f81b0319821660fd60f81b036117115761169e86866119c0565b955061ffff16905060fd81108015906116b9575061ffff8111155b6117055760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e67650060448201526064016112ab565b92508391506114879050565b6001600160f81b03198216607f60f91b0361179b576117308686611a79565b955063ffffffff16905061ffff8111801561174f575063ffffffff8111155b6117055760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016112ab565b6001600160f81b03198083169003611818576117b78686611b4a565b955067ffffffffffffffff16905063ffffffff81116117055760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016112ab565b5060f881901c60fd81106117055760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016112ab565b606060fd8267ffffffffffffffff1610156118a357604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff16116118f3576118c360fd60f81b611c1b565b6118cc83611c42565b6040516020016118dd9291906124ae565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff161161191e57611915607f60f91b611c1b565b6118cc83611c85565b61192f6001600160f81b0319611c1b565b6118cc83611cc8565b600080835183600161194a9190612345565b11158015611961575061195e836001612345565b83105b6119ad5760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d60448201526064016112ab565b8383016020015180611481856001612345565b60008083518360026119d29190612345565b111580156119e957506119e6836002612345565b83105b611a405760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016112ab565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026114819190612345565b6000808351836004611a8b9190612345565b11158015611aa25750611a9f836004612345565b83105b611af95760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016112ab565b600060405160046000600182038760208a0101515b83831015611b2e5780821a83860153600183019250600182039150611b0e565b505050016040819052601f190151905080611481856004612345565b6000808351836008611b5c9190612345565b11158015611b735750611b70836008612345565b83105b611bca5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016112ab565b600060405160086000600182038760208a0101515b83831015611bff5780821a83860153600183019250600182039150611bdf565b505050016040819052601f190151905080611481856008612345565b60408051600181526001600160f81b0319831660208201526021810190915260609061189d565b6040516002808252606091906000601f5b82821015611c755785811a826020860101536001919091019060001901611c53565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611cb85785811a826020860101536001919091019060001901611c96565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611cfb5785811a826020860101536001919091019060001901611cd9565b5050506028810160405292915050565b60005b83811015611d26578181015183820152602001611d0e565b50506000910152565b60008151808452611d47816020860160208601611d0b565b601f01601f19169290920160200192915050565b602081526000611d6e6020830184611d2f565b9392505050565b6020810160028310611d9757634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611dd657611dd6611d9d565b60405290565b604051610100810167ffffffffffffffff81118282101715611dd657611dd6611d9d565b803567ffffffffffffffff81168114610d9257600080fd5b600067ffffffffffffffff80841115611e3357611e33611d9d565b604051601f8501601f19908116603f01168101908282118183101715611e5b57611e5b611d9d565b81604052809350858152868686011115611e7457600080fd5b858560208301376000602087830101525050509392505050565b6001600160a01b0381168114611ea357600080fd5b50565b600060208284031215611eb857600080fd5b813567ffffffffffffffff80821115611ed057600080fd5b9083019060608286031215611ee457600080fd5b611eec611db3565b611ef583611e00565b8152602083013582811115611f0957600080fd5b83019150601f82018613611f1c57600080fd5b611f2b86833560208501611e18565b602082015260408301359250611f4083611e8e565b6040810192909252509392505050565b600080600080600060808688031215611f6857600080fd5b611f7186611e00565b94506020860135611f8181611e8e565b9350604086013567ffffffffffffffff80821115611f9e57600080fd5b818801915088601f830112611fb257600080fd5b813581811115611fc157600080fd5b896020828501011115611fd357600080fd5b6020830195508094505050506060860135611fed81611e8e565b809150509295509295909350565b80356fffffffffffffffffffffffffffffffff81168114610d9257600080fd5b600082601f83011261202c57600080fd5b611d6e83833560208501611e18565b6000610100828403121561204e57600080fd5b612056611ddc565b905081358152602082013560208201526040820135604082015261207c60608301611ffb565b6060820152608082013567ffffffffffffffff81111561209b57600080fd5b6120a78482850161201b565b60808301525060a082013560a082015260c082013560c082015260e082013560e082015292915050565b6000602082840312156120e357600080fd5b813567ffffffffffffffff8111156120fa57600080fd5b6121068482850161203b565b949350505050565b60008060006060848603121561212357600080fd5b833567ffffffffffffffff8082111561213b57600080fd5b6121478783880161203b565b945060208601359350604086013591508082111561216457600080fd5b506121718682870161201b565b9150509250925092565b60006020828403121561218d57600080fd5b5051919050565b600181811c908216806121a857607f821691505b6020821081036121c857634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561221857600081815260208120601f850160051c810160208610156121f55750805b601f850160051c820191505b8181101561221457828155600101612201565b5050505b505050565b815167ffffffffffffffff81111561223757612237611d9d565b61224b816122458454612194565b846121ce565b602080601f83116001811461228057600084156122685750858301515b600019600386901b1c1916600185901b178555612214565b600085815260208120601f198616915b828110156122af57888601518255948401946001909101908401612290565b50858210156122cd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156122ef57600080fd5b81518015158114611d6e57600080fd5b6020815260006001600160a01b038084511660208401528060208501511660408401525060408301516060830152606083015160808084015261210660a0840182611d2f565b8082018082111561189d57634e487b7160e01b600052601160045260246000fd5b60006020828403121561237857600080fd5b8151611d6e81611e8e565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526123c760e0840182611d2f565b9150506001600160a01b03831660208301529392505050565b60608101818360005b60038110156124085781518352602092830192909101906001016123e9565b50505092915050565b60008651612423818460208b01611d0b565b865190830190612437818360208b01611d0b565b865191019061244a818360208a01611d0b565b855191019061245d818360208901611d0b565b8451910190612470818360208801611d0b565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff831660208201526060604082015260006111596060830184611d2f565b600083516124c0818460208801611d0b565b8351908301906124d4818360208801611d0b565b0194935050505056fea2646970667358221220db3fd8a6cae0a22d44c9f749f4bc11a28bde88ef821d6ce57dd605413dc15a5064736f6c63430008140033';

type MystikoV2TBridgeMainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2TBridgeMainConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2TBridgeMain__factory extends ContractFactory {
  constructor(...args: MystikoV2TBridgeMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2TBridgeMain';
  }

  deploy(
    _hasher3: string,
    _bridgeProxyAddress: string,
    _settingsCenter: string,
    _localConfig: IMystikoBridge.LocalConfigStruct,
    _peerConfig: IMystikoBridge.PeerConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2TBridgeMain> {
    return super.deploy(
      _hasher3,
      _bridgeProxyAddress,
      _settingsCenter,
      _localConfig,
      _peerConfig,
      overrides || {},
    ) as Promise<MystikoV2TBridgeMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    _bridgeProxyAddress: string,
    _settingsCenter: string,
    _localConfig: IMystikoBridge.LocalConfigStruct,
    _peerConfig: IMystikoBridge.PeerConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _hasher3,
      _bridgeProxyAddress,
      _settingsCenter,
      _localConfig,
      _peerConfig,
      overrides || {},
    );
  }
  attach(address: string): MystikoV2TBridgeMain {
    return super.attach(address) as MystikoV2TBridgeMain;
  }
  connect(signer: Signer): MystikoV2TBridgeMain__factory {
    return super.connect(signer) as MystikoV2TBridgeMain__factory;
  }
  static readonly contractName: 'MystikoV2TBridgeMain';
  public readonly contractName: 'MystikoV2TBridgeMain';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2TBridgeMainInterface {
    return new utils.Interface(_abi) as MystikoV2TBridgeMainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2TBridgeMain {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2TBridgeMain;
  }
}
