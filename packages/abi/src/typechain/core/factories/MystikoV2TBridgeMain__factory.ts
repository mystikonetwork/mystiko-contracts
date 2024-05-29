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
    name: 'FromChainIdNotMatched',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FromProxyAddressNotMatched',
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
    name: 'PeerContractAlreadySet',
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
    name: 'settingsCenter',
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
  '0x60806040526000805460ff60a01b191690553480156200001e57600080fd5b50604051620026e3380380620026e3833981016040819052620000419162000126565b600080546001600160a01b039687166001600160a01b031991821617909155600880549587169582169590951790945581516003556020808301516004556040909201516005558051600655015160075560098054919093169116179055620001ec565b6001600160a01b0381168114620000bb57600080fd5b50565b604051606081016001600160401b0381118282101715620000ef57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715620000ef57634e487b7160e01b600052604160045260246000fd5b60008060008060008587036101008112156200014157600080fd5b86516200014e81620000a5565b60208801519096506200016181620000a5565b60408801519095506200017481620000a5565b93506060605f19820112156200018957600080fd5b62000193620000be565b606088015181526080880151602082015260a0880151604082015280935050604060bf1982011215620001c557600080fd5b50620001d0620000f5565b60c0870151815260e09096015160208701525092959194509290565b6124e780620001fc6000396000f3fe60806040526004361061018b5760003560e01c806382d21cd8116100d6578063cfc7e2da1161007f578063ed6ea33a11610059578063ed6ea33a14610425578063efbfb2ae1461043a578063fb3e3d731461044f57600080fd5b8063cfc7e2da146103e5578063d0b436bd146103fa578063ddac5dc11461041057600080fd5b8063cb5c029a116100b0578063cb5c029a1461037b578063cbe342851461038e578063cdfceeba146103a457600080fd5b806382d21cd8146103185780639a03636c14610348578063abc1bd221461035b57600080fd5b8063422e0028116101385780635898a0a8116101125780635898a0a8146102d8578063640c0b36146102ed578063825b5f8d1461030357600080fd5b8063422e00281461028b5780634dde6fbc146102ad5780634e3c10b7146102c357600080fd5b80632421e155116101695780632421e155146102005780632cd26d451461024f5780633fe3347a1461026f57600080fd5b80630ba95909146101905780631ba46cfd146101b857806321e32d55146101e0575b600080fd5b34801561019c57600080fd5b506101a5610465565b6040519081526020015b60405180910390f35b3480156101c457600080fd5b5060005b6040516001600160a01b0390911681526020016101af565b3480156101ec57600080fd5b506002546101c8906001600160a01b031681565b34801561020c57600080fd5b5060408051808201909152600781527f746272696467650000000000000000000000000000000000000000000000000060208201525b6040516101af9190611d2f565b34801561025b57600080fd5b506008546101c8906001600160a01b031681565b34801561027b57600080fd5b5060016040516101af9190611d49565b34801561029757600080fd5b506102ab6102a6366004611e7a565b6104ee565b005b3480156102b957600080fd5b506101a560055481565b3480156102cf57600080fd5b506102426105db565b3480156102e457600080fd5b506101a5610669565b3480156102f957600080fd5b506101a560065481565b34801561030f57600080fd5b506101a56106f0565b34801561032457600080fd5b50610338610333366004611f24565b610777565b60405190151581526020016101af565b6102ab6103563660046120a5565b610801565b34801561036757600080fd5b506009546101c8906001600160a01b031681565b6102ab6103893660046120e2565b61081a565b34801561039a57600080fd5b506101a560075481565b3480156103b057600080fd5b506000546103cc90600160a81b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101af565b3480156103f157600080fd5b506101a5610c45565b34801561040657600080fd5b506101a560045481565b34801561041c57600080fd5b506101c8610ccc565b34801561043157600080fd5b50610338610d6b565b34801561044657600080fd5b506101a5610ddd565b34801561045b57600080fd5b506101a560035481565b60095460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa1580156104b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d6919061214f565b905080156104e457806104e8565b6004545b91505090565b600054600160a01b900460ff161561051957604051636d8f115160e11b815260040160405180910390fd5b80516000805467ffffffffffffffff909216600160a81b027fffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffff909216919091179055602081015160019061056d90826121f1565b5060400151600280546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b600180546105e890612168565b80601f016020809104026020016040519081016040528092919081815260200182805461061490612168565b80156106615780601f1061063657610100808354040283529160200191610661565b820191906000526020600020905b81548152906001019060200180831161064457829003601f168201915b505050505081565b600954604051634f314f9d60e11b815230600482015260009182916001600160a01b0390911690639e629f3a90602401602060405180830381865afa1580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da919061214f565b905080156106e857806104e8565b505060065490565b6009546040516361863c0360e11b815230600482015260009182916001600160a01b039091169063c30c780690602401602060405180830381865afa15801561073d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610761919061214f565b9050801561076f57806104e8565b505060075490565b6008546000906001600160a01b031633146107a557604051633dca01cf60e11b815260040160405180910390fd5b60006107e685858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e6492505050565b90506107f487878584610f2c565b5060019695505050505050565b60405163e7a24ff960e01b815260040160405180910390fd5b6009546040516355f0ba2960e01b81523060048201526001600160a01b03909116906355f0ba2990602401602060405180830381865afa158015610862573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088691906122b1565b156108a457604051630e2f42c960e31b815260040160405180910390fd5b600960009054906101000a90046001600160a01b03166001600160a01b031663dc7f01246040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091b91906122b1565b156109e85760006040518060800160405280326001600160a01b03168152602001610944600090565b6001600160a01b039081168252602082018690526040918201859052600954915163849e8b9f60e01b8152929350169063849e8b9f906109889084906004016122d3565b602060405180830381865afa1580156109a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c991906122b1565b6109e657604051633042041f60e21b815260040160405180910390fd5b505b6109f0610c45565b83511015610a115760405163617ab12d60e11b815260040160405180910390fd5b610a19610465565b83511115610a3a57604051630625040160e01b815260040160405180910390fd5b610a42610ddd565b8360a001511015610a665760405163c4d8d00d60e01b815260040160405180910390fd5b610a6e610669565b8360c001511015610a92576040516355a6d6a160e11b815260040160405180910390fd5b610a9a6106f0565b8360e001511015610abe5760405163784f02bd60e11b815260040160405180910390fd5b6000610ad784604001518560000151866060015161101f565b905080846020015114610afd576040516301bfaa2560e51b815260040160405180910390fd5b60095460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa158015610b45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6991906122b1565b15610b8757604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252855181526020808701519082015260c08601519181019190915260e08501516060820152608080860151908201526000610bca82611136565b9050610bda8660a00151826111a5565b610c0f610be5610ccc565b60e088015160c08901518951610bfb9190612319565b610c059190612319565b8860a0015161122b565b60208601516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a2505050505050565b600954604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610c92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb6919061214f565b90508015610cc457806104e8565b505060035490565b6009546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610d19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3d919061233a565b90506001600160a01b038116610d66576040516306f3d63360e51b815260040160405180910390fd5b919050565b6009546040516355f0ba2960e01b81523060048201526000916001600160a01b0316906355f0ba2990602401602060405180830381865afa158015610db4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd891906122b1565b905090565b600954604051637b52b00d60e01b815230600482015260009182916001600160a01b0390911690637b52b00d90602401602060405180830381865afa158015610e2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4e919061214f565b90508015610e5c57806104e8565b505060055490565b610e966040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b610ec86040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6000610ed48482611331565b9083529050610ee38482611331565b60208401919091529050610ef78482611331565b60408401919091529050610f0b8482611331565b60608401919091529050610f1f8482611462565b5060808301525092915050565b6002546001600160a01b03848116911614610f5a57604051631440e07960e11b815260040160405180910390fd5b60005467ffffffffffffffff858116600160a81b9092041614610f9057604051633876304f60e21b815260040160405180910390fd5b8051600003610fb25760405163820bf1e560e01b815260040160405180910390fd5b610fba610ccc565b6001600160a01b03166378d60cd782846040518363ffffffff1660e01b8152600401610fe7929190612357565b600060405180830381600087803b15801561100157600080fd5b505af1158015611015573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106110625760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061109457604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916110ec916004016123b4565b602060405180830381865afa158015611109573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112d919061214f565b95945050505050565b606080611146836000015161156f565b611153846020015161156f565b611160856040015161156f565b61116d866060015161156f565b61117a8760800151611607565b60405160200161118e9594939291906123e5565b60408051601f198184030181529190529392505050565b60085460025460005460405163c81739cd60e01b81526001600160a01b039384169363c81739cd9387936111f593919092169167ffffffffffffffff600160a81b90910416908790600401612450565b6000604051808303818588803b15801561120e57600080fd5b505af1158015611222573d6000803e3d6000fd5b50505050505050565b6112358183612319565b34146112885760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064015b60405180910390fd5b6000836001600160a01b03168360405160006040518083038185875af1925050503d80600081146112d5576040519150601f19603f3d011682016040523d82523d6000602084013e6112da565b606091505b505090508061132b5760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c656400000000000000000000604482015260640161127f565b50505050565b60008083518360206113439190612319565b1115801561135a5750611357836020612319565b83105b6113b25760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161127f565b600060405160206000600182038760208a0101515b838310156113e75780821a838601536001830192506001820391506113c7565b50505081016040525190506001600160ff1b038111156114495760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161127f565b80611455856020612319565b92509250505b9250929050565b6060600080611471858561163e565b86519095509091506114838286612319565b1115801561149957506114968185612319565b84105b6114f15760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161127f565b60608115801561150c57604051915060208201604052611556565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561154557805183526020928301920161152d565b5050848452601f01601f1916604052505b50806115628387612319565b9350935050509250929050565b60606001600160ff1b038211156115c85760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161127f565b60405160208082526000601f5b828210156115f75785811a8260208601015360019190910190600019016115d5565b5050506040818101905292915050565b805160609061161581611842565b83604051602001611627929190612482565b604051602081830303815290604052915050919050565b600080600061164d858561190c565b9450905060006001600160f81b0319821660fd60f81b036116e5576116728686611994565b955061ffff16905060fd811080159061168d575061ffff8111155b6116d95760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161127f565b925083915061145b9050565b6001600160f81b03198216607f60f91b0361176f576117048686611a4d565b955063ffffffff16905061ffff81118015611723575063ffffffff8111155b6116d95760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161127f565b6001600160f81b031980831690036117ec5761178b8686611b1e565b955067ffffffffffffffff16905063ffffffff81116116d95760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161127f565b5060f881901c60fd81106116d95760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161127f565b606060fd8267ffffffffffffffff16101561187757604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff16116118c75761189760fd60f81b611bef565b6118a083611c16565b6040516020016118b1929190612482565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff16116118f2576118e9607f60f91b611bef565b6118a083611c59565b6119036001600160f81b0319611bef565b6118a083611c9c565b600080835183600161191e9190612319565b111580156119355750611932836001612319565b83105b6119815760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161127f565b8383016020015180611455856001612319565b60008083518360026119a69190612319565b111580156119bd57506119ba836002612319565b83105b611a145760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161127f565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026114559190612319565b6000808351836004611a5f9190612319565b11158015611a765750611a73836004612319565b83105b611acd5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161127f565b600060405160046000600182038760208a0101515b83831015611b025780821a83860153600183019250600182039150611ae2565b505050016040819052601f190151905080611455856004612319565b6000808351836008611b309190612319565b11158015611b475750611b44836008612319565b83105b611b9e5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161127f565b600060405160086000600182038760208a0101515b83831015611bd35780821a83860153600183019250600182039150611bb3565b505050016040819052601f190151905080611455856008612319565b60408051600181526001600160f81b03198316602082015260218101909152606090611871565b6040516002808252606091906000601f5b82821015611c495785811a826020860101536001919091019060001901611c27565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611c8c5785811a826020860101536001919091019060001901611c6a565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611ccf5785811a826020860101536001919091019060001901611cad565b5050506028810160405292915050565b60005b83811015611cfa578181015183820152602001611ce2565b50506000910152565b60008151808452611d1b816020860160208601611cdf565b601f01601f19169290920160200192915050565b602081526000611d426020830184611d03565b9392505050565b6020810160028310611d6b57634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611daa57611daa611d71565b60405290565b604051610100810167ffffffffffffffff81118282101715611daa57611daa611d71565b803567ffffffffffffffff81168114610d6657600080fd5b600067ffffffffffffffff80841115611e0757611e07611d71565b604051601f8501601f19908116603f01168101908282118183101715611e2f57611e2f611d71565b81604052809350858152868686011115611e4857600080fd5b858560208301376000602087830101525050509392505050565b6001600160a01b0381168114611e7757600080fd5b50565b600060208284031215611e8c57600080fd5b813567ffffffffffffffff80821115611ea457600080fd5b9083019060608286031215611eb857600080fd5b611ec0611d87565b611ec983611dd4565b8152602083013582811115611edd57600080fd5b83019150601f82018613611ef057600080fd5b611eff86833560208501611dec565b602082015260408301359250611f1483611e62565b6040810192909252509392505050565b600080600080600060808688031215611f3c57600080fd5b611f4586611dd4565b94506020860135611f5581611e62565b9350604086013567ffffffffffffffff80821115611f7257600080fd5b818801915088601f830112611f8657600080fd5b813581811115611f9557600080fd5b896020828501011115611fa757600080fd5b6020830195508094505050506060860135611fc181611e62565b809150509295509295909350565b80356fffffffffffffffffffffffffffffffff81168114610d6657600080fd5b600082601f83011261200057600080fd5b611d4283833560208501611dec565b6000610100828403121561202257600080fd5b61202a611db0565b905081358152602082013560208201526040820135604082015261205060608301611fcf565b6060820152608082013567ffffffffffffffff81111561206f57600080fd5b61207b84828501611fef565b60808301525060a082013560a082015260c082013560c082015260e082013560e082015292915050565b6000602082840312156120b757600080fd5b813567ffffffffffffffff8111156120ce57600080fd5b6120da8482850161200f565b949350505050565b6000806000606084860312156120f757600080fd5b833567ffffffffffffffff8082111561210f57600080fd5b61211b8783880161200f565b945060208601359350604086013591508082111561213857600080fd5b5061214586828701611fef565b9150509250925092565b60006020828403121561216157600080fd5b5051919050565b600181811c9082168061217c57607f821691505b60208210810361219c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156121ec57600081815260208120601f850160051c810160208610156121c95750805b601f850160051c820191505b818110156121e8578281556001016121d5565b5050505b505050565b815167ffffffffffffffff81111561220b5761220b611d71565b61221f816122198454612168565b846121a2565b602080601f831160018114612254576000841561223c5750858301515b600019600386901b1c1916600185901b1785556121e8565b600085815260208120601f198616915b8281101561228357888601518255948401946001909101908401612264565b50858210156122a15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156122c357600080fd5b81518015158114611d4257600080fd5b6020815260006001600160a01b03808451166020840152806020850151166040840152506040830151606083015260608301516080808401526120da60a0840182611d03565b8082018082111561187157634e487b7160e01b600052601160045260246000fd5b60006020828403121561234c57600080fd5b8151611d4281611e62565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261239b60e0840182611d03565b9150506001600160a01b03831660208301529392505050565b60608101818360005b60038110156123dc5781518352602092830192909101906001016123bd565b50505092915050565b600086516123f7818460208b01611cdf565b86519083019061240b818360208b01611cdf565b865191019061241e818360208a01611cdf565b8551910190612431818360208901611cdf565b8451910190612444818360208801611cdf565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820152600061112d6060830184611d03565b60008351612494818460208801611cdf565b8351908301906124a8818360208801611cdf565b0194935050505056fea2646970667358221220ae286bd9806e61f1ce52e27f36e927b6036af1aa935b004e8500ac2f47b7823e64736f6c63430008140033';

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
