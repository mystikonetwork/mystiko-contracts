/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  MystikoV2CelerERC20,
  MystikoV2CelerERC20Interface,
  IMystikoBridge,
} from '../MystikoV2CelerERC20';

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
    inputs: [
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: '_srcChainId',
        type: 'uint64',
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
    name: 'executeMessage',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
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
  '0x60806040526000805460ff60a01b191690553480156200001e57600080fd5b5060405162002af538038062002af583398101604081905262000041916200012b565b600080546001600160a01b03199081166001600160a01b039889161790915560088054821695881695909517909455815160035560208083015160045560409092015160055580516006550151600755600980548316918516919091179055600a80549091169190921617905562000210565b6001600160a01b0381168114620000ca57600080fd5b50565b600060408284031215620000e057600080fd5b604080519081016001600160401b03811182821017156200011157634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b6000806000806000808688036101208112156200014757600080fd5b87516200015481620000b4565b60208901519097506200016781620000b4565b60408901519096506200017a81620000b4565b60608901519095506200018d81620000b4565b93506060607f1982011215620001a257600080fd5b50604051606081016001600160401b0381118282101715620001d457634e487b7160e01b600052604160045260246000fd5b60409081526080890151825260a0890151602083015260c0890151908201529150620002048860e08901620000cd565b90509295509295509295565b6128d580620002206000396000f3fe6080604052600436106101b75760003560e01c80639c649fdf116100ec578063d0b436bd1161008a578063ed6ea33a11610064578063ed6ea33a146104a3578063efbfb2ae146104b8578063fa750f56146104cd578063fb3e3d73146104ee57600080fd5b8063d0b436bd14610458578063ddac5dc11461046e578063e06174e41461048357600080fd5b8063cb5c029a116100c6578063cb5c029a146103d9578063cbe34285146103ec578063cdfceeba14610402578063cfc7e2da1461044357600080fd5b80639c649fdf1461037a578063c2d416011461039d578063c9230c5d146103c457600080fd5b8063422e0028116101595780635898a0a8116101335780635898a0a814610327578063640c0b361461033c578063825b5f8d146103525780639a03636c1461036757600080fd5b8063422e0028146102da5780634dde6fbc146102fc5780634e3c10b71461031257600080fd5b806321e32d551161019557806321e32d55146102385780632421e155146102585780632cd26d451461029e5780633fe3347a146102be57600080fd5b80630ba95909146101bc578063176de7a8146101e45780631ba46cfd14610206575b600080fd5b3480156101c857600080fd5b506101d1610504565b6040519081526020015b60405180910390f35b3480156101f057600080fd5b506101f961058d565b6040516101db9190612051565b34801561021257600080fd5b50600a546001600160a01b03165b6040516001600160a01b0390911681526020016101db565b34801561024457600080fd5b50600254610220906001600160a01b031681565b34801561026457600080fd5b5060408051808201909152600581527f63656c657200000000000000000000000000000000000000000000000000000060208201526101f9565b3480156102aa57600080fd5b50600854610220906001600160a01b031681565b3480156102ca57600080fd5b5060006040516101db9190612064565b3480156102e657600080fd5b506102fa6102f53660046121b3565b610604565b005b34801561030857600080fd5b506101d160055481565b34801561031e57600080fd5b506101f96106f1565b34801561033357600080fd5b506101d161077f565b34801561034857600080fd5b506101d160065481565b34801561035e57600080fd5b506101d1610806565b6102fa610375366004612333565b61088d565b61038d610388366004612370565b6108a6565b60405190151581526020016101db565b3480156103a957600080fd5b506103b2610930565b60405160ff90911681526020016101db565b3480156103d057600080fd5b506101f961099e565b6102fa6103e736600461241b565b6109e8565b3480156103f857600080fd5b506101d160075481565b34801561040e57600080fd5b5060005461042a90600160a81b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101db565b34801561044f57600080fd5b506101d1610e1d565b34801561046457600080fd5b506101d160045481565b34801561047a57600080fd5b50610220610ea4565b34801561048f57600080fd5b50600954610220906001600160a01b031681565b3480156104af57600080fd5b5061038d610f43565b3480156104c457600080fd5b506101d1610fb0565b3480156104d957600080fd5b5060005461038d90600160a01b900460ff1681565b3480156104fa57600080fd5b506101d160035481565b60095460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa158015610551573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105759190612488565b905080156105835780610587565b6004545b91505090565b600a54604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b419160048083019260009291908290030181865afa1580156105d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105ff91908101906124a1565b905090565b600054600160a01b900460ff161561062f57604051636d8f115160e11b815260040160405180910390fd5b80516000805467ffffffffffffffff909216600160a81b027fffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffff909216919091179055602081015160019061068390826125a0565b5060400151600280546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b600180546106fe90612518565b80601f016020809104026020016040519081016040528092919081815260200182805461072a90612518565b80156107775780601f1061074c57610100808354040283529160200191610777565b820191906000526020600020905b81548152906001019060200180831161075a57829003601f168201915b505050505081565b600954604051634f314f9d60e11b815230600482015260009182916001600160a01b0390911690639e629f3a90602401602060405180830381865afa1580156107cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f09190612488565b905080156107fe5780610587565b505060065490565b6009546040516361863c0360e11b815230600482015260009182916001600160a01b039091169063c30c780690602401602060405180830381865afa158015610853573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108779190612488565b905080156108855780610587565b505060075490565b60405163e7a24ff960e01b815260040160405180910390fd5b6008546000906001600160a01b031633146108d457604051633dca01cf60e11b815260040160405180910390fd5b600061091585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061103792505050565b9050610923868885846110ff565b5060019695505050505050565b600a546040805163313ce56760e01b815290516000926001600160a01b03169163313ce5679160048083019260209291908290030181865afa15801561097a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ff9190612660565b600a54604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde039160048083019260009291908290030181865afa1580156105d7573d6000803e3d6000fd5b6009546040516355f0ba2960e01b81523060048201526001600160a01b03909116906355f0ba2990602401602060405180830381865afa158015610a30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a549190612683565b15610a7257604051630e2f42c960e31b815260040160405180910390fd5b600960009054906101000a90046001600160a01b03166001600160a01b031663dc7f01246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ac5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae99190612683565b15610bc05760006040518060800160405280326001600160a01b03168152602001610b1c600a546001600160a01b031690565b6001600160a01b039081168252602082018690526040918201859052600954915163849e8b9f60e01b8152929350169063849e8b9f90610b609084906004016126a5565b602060405180830381865afa158015610b7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba19190612683565b610bbe57604051633042041f60e21b815260040160405180910390fd5b505b610bc8610e1d565b83511015610be95760405163617ab12d60e11b815260040160405180910390fd5b610bf1610504565b83511115610c1257604051630625040160e01b815260040160405180910390fd5b610c1a610fb0565b8360a001511015610c3e5760405163c4d8d00d60e01b815260040160405180910390fd5b610c4661077f565b8360c001511015610c6a576040516355a6d6a160e11b815260040160405180910390fd5b610c72610806565b8360e001511015610c965760405163784f02bd60e11b815260040160405180910390fd5b6000610caf8460400151856000015186606001516111f2565b905080846020015114610cd5576040516301bfaa2560e51b815260040160405180910390fd5b60095460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa158015610d1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d419190612683565b15610d5f57604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252855181526020808701519082015260c08601519181019190915260e08501516060820152608080860151908201526000610da28261130b565b9050610db28660a001518261137a565b610de7610dbd610ea4565b60e088015160c08901518951610dd391906126eb565b610ddd91906126eb565b8860a00151611400565b60208601516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a2505050505050565b600954604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610e6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8e9190612488565b90508015610e9c5780610587565b505060035490565b6009546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610ef1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f15919061270c565b90506001600160a01b038116610f3e576040516306f3d63360e51b815260040160405180910390fd5b919050565b6009546040516355f0ba2960e01b81523060048201526000916001600160a01b0316906355f0ba2990602401602060405180830381865afa158015610f8c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ff9190612683565b600954604051637b52b00d60e01b815230600482015260009182916001600160a01b0390911690637b52b00d90602401602060405180830381865afa158015610ffd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110219190612488565b9050801561102f5780610587565b505060055490565b6110696040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b61109b6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b60006110a78482611471565b90835290506110b68482611471565b602084019190915290506110ca8482611471565b604084019190915290506110de8482611471565b606084019190915290506110f284826115a2565b5060808301525092915050565b6002546001600160a01b0384811691161461112d57604051631b495ecf60e31b815260040160405180910390fd5b60005467ffffffffffffffff858116600160a81b90920416146111635760405163373bc12160e11b815260040160405180910390fd5b80516000036111855760405163820bf1e560e01b815260040160405180910390fd5b61118d610ea4565b6001600160a01b03166378d60cd782846040518363ffffffff1660e01b81526004016111ba929190612729565b600060405180830381600087803b1580156111d457600080fd5b505af11580156111e8573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106112355760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061126757604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916112bf91600401612786565b602060405180830381865afa1580156112dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113009190612488565b9150505b9392505050565b60608061131b83600001516116af565b61132884602001516116af565b61133585604001516116af565b61134286606001516116af565b61134f8760800151611747565b6040516020016113639594939291906127b7565b60408051601f198184030181529190529392505050565b600854600254600054604051634f9e72ad60e11b81526001600160a01b0393841693639f3ce55a9387936113ca93919092169167ffffffffffffffff600160a81b90910416908790600401612822565b6000604051808303818588803b1580156113e357600080fd5b505af11580156113f7573d6000803e3d6000fd5b50505050505050565b8034146114545760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600a5461146c906001600160a01b031633858561177e565b505050565b600080835183602061148391906126eb565b1115801561149a57506114978360206126eb565b83105b6114f25760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161144b565b600060405160206000600182038760208a0101515b838310156115275780821a83860153600183019250600182039150611507565b50505081016040525190506001600160ff1b038111156115895760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161144b565b806115958560206126eb565b92509250505b9250929050565b60606000806115b185856117f3565b86519095509091506115c382866126eb565b111580156115d957506115d681856126eb565b84105b6116315760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161144b565b60608115801561164c57604051915060208201604052611696565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561168557805183526020928301920161166d565b5050848452601f01601f1916604052505b50806116a283876126eb565b9350935050509250929050565b60606001600160ff1b038211156117085760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161144b565b60405160208082526000601f5b828210156117375785811a826020860101536001919091019060001901611715565b5050506040818101905292915050565b8051606090611755816119f7565b83604051602001611767929190612854565b604051602081830303815290604052915050919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526117ed908590611ac1565b50505050565b60008060006118028585611b24565b9450905060006001600160f81b0319821660fd60f81b0361189a576118278686611bac565b955061ffff16905060fd8110801590611842575061ffff8111155b61188e5760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161144b565b925083915061159b9050565b6001600160f81b03198216607f60f91b03611924576118b98686611c65565b955063ffffffff16905061ffff811180156118d8575063ffffffff8111155b61188e5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161144b565b6001600160f81b031980831690036119a1576119408686611d36565b955067ffffffffffffffff16905063ffffffff811161188e5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161144b565b5060f881901c60fd811061188e5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161144b565b606060fd8267ffffffffffffffff161015611a2c57604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff1611611a7c57611a4c60fd60f81b611e07565b611a5583611e2e565b604051602001611a66929190612854565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611aa757611a9e607f60f91b611e07565b611a5583611e71565b611ab86001600160f81b0319611e07565b611a5583611eb4565b6000611ad66001600160a01b03841683611ef7565b90508051600014158015611afb575080806020019051810190611af99190612683565b155b1561146c57604051635274afe760e01b81526001600160a01b038416600482015260240161144b565b6000808351836001611b3691906126eb565b11158015611b4d5750611b4a8360016126eb565b83105b611b995760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161144b565b83830160200151806115958560016126eb565b6000808351836002611bbe91906126eb565b11158015611bd55750611bd28360026126eb565b83105b611c2c5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161144b565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261159591906126eb565b6000808351836004611c7791906126eb565b11158015611c8e5750611c8b8360046126eb565b83105b611ce55760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161144b565b600060405160046000600182038760208a0101515b83831015611d1a5780821a83860153600183019250600182039150611cfa565b505050016040819052601f1901519050806115958560046126eb565b6000808351836008611d4891906126eb565b11158015611d5f5750611d5c8360086126eb565b83105b611db65760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161144b565b600060405160086000600182038760208a0101515b83831015611deb5780821a83860153600183019250600182039150611dcb565b505050016040819052601f1901519050806115958560086126eb565b60408051600181526001600160f81b03198316602082015260218101909152606090611a26565b6040516002808252606091906000601f5b82821015611e615785811a826020860101536001919091019060001901611e3f565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611ea45785811a826020860101536001919091019060001901611e82565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611ee75785811a826020860101536001919091019060001901611ec5565b5050506028810160405292915050565b60606113048383600084600080856001600160a01b03168486604051611f1d9190612883565b60006040518083038185875af1925050503d8060008114611f5a576040519150601f19603f3d011682016040523d82523d6000602084013e611f5f565b606091505b5091509150611f6f868383611f79565b9695505050505050565b606082611f8e57611f8982611fd5565b611304565b8151158015611fa557506001600160a01b0384163b155b15611fce57604051639996b31560e01b81526001600160a01b038516600482015260240161144b565b5080611304565b805115611fe55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60005b8381101561201c578181015183820152602001612004565b50506000910152565b6000815180845261203d816020860160208601612001565b601f01601f19169290920160200192915050565b6020815260006113046020830184612025565b602081016002831061208657634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156120c5576120c561208c565b60405290565b604051610100810167ffffffffffffffff811182821017156120c5576120c561208c565b604051601f8201601f1916810167ffffffffffffffff811182821017156121185761211861208c565b604052919050565b803567ffffffffffffffff81168114610f3e57600080fd5b600067ffffffffffffffff8211156121525761215261208c565b50601f01601f191660200190565b600061217361216e84612138565b6120ef565b905082815283838301111561218757600080fd5b828260208301376000602084830101529392505050565b6001600160a01b0381168114611ffe57600080fd5b6000602082840312156121c557600080fd5b813567ffffffffffffffff808211156121dd57600080fd5b90830190606082860312156121f157600080fd5b6121f96120a2565b61220283612120565b815260208301358281111561221657600080fd5b83019150601f8201861361222957600080fd5b61223886833560208501612160565b60208201526040830135925061224d8361219e565b6040810192909252509392505050565b80356fffffffffffffffffffffffffffffffff81168114610f3e57600080fd5b600082601f83011261228e57600080fd5b61130483833560208501612160565b600061010082840312156122b057600080fd5b6122b86120cb565b90508135815260208201356020820152604082013560408201526122de6060830161225d565b6060820152608082013567ffffffffffffffff8111156122fd57600080fd5b6123098482850161227d565b60808301525060a082013560a082015260c082013560c082015260e082013560e082015292915050565b60006020828403121561234557600080fd5b813567ffffffffffffffff81111561235c57600080fd5b6123688482850161229d565b949350505050565b60008060008060006080868803121561238857600080fd5b85356123938161219e565b94506123a160208701612120565b9350604086013567ffffffffffffffff808211156123be57600080fd5b818801915088601f8301126123d257600080fd5b8135818111156123e157600080fd5b8960208285010111156123f357600080fd5b602083019550809450505050606086013561240d8161219e565b809150509295509295909350565b60008060006060848603121561243057600080fd5b833567ffffffffffffffff8082111561244857600080fd5b6124548783880161229d565b945060208601359350604086013591508082111561247157600080fd5b5061247e8682870161227d565b9150509250925092565b60006020828403121561249a57600080fd5b5051919050565b6000602082840312156124b357600080fd5b815167ffffffffffffffff8111156124ca57600080fd5b8201601f810184136124db57600080fd5b80516124e961216e82612138565b8181528560208385010111156124fe57600080fd5b61250f826020830160208601612001565b95945050505050565b600181811c9082168061252c57607f821691505b60208210810361254c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561146c57600081815260208120601f850160051c810160208610156125795750805b601f850160051c820191505b8181101561259857828155600101612585565b505050505050565b815167ffffffffffffffff8111156125ba576125ba61208c565b6125ce816125c88454612518565b84612552565b602080601f83116001811461260357600084156125eb5750858301515b600019600386901b1c1916600185901b178555612598565b600085815260208120601f198616915b8281101561263257888601518255948401946001909101908401612613565b50858210156126505787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561267257600080fd5b815160ff8116811461130457600080fd5b60006020828403121561269557600080fd5b8151801515811461130457600080fd5b6020815260006001600160a01b038084511660208401528060208501511660408401525060408301516060830152606083015160808084015261236860a0840182612025565b80820180821115611a2657634e487b7160e01b600052601160045260246000fd5b60006020828403121561271e57600080fd5b81516113048161219e565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261276d60e0840182612025565b9150506001600160a01b03831660208301529392505050565b60608101818360005b60038110156127ae57815183526020928301929091019060010161278f565b50505092915050565b600086516127c9818460208b01612001565b8651908301906127dd818360208b01612001565b86519101906127f0818360208a01612001565b8551910190612803818360208901612001565b8451910190612816818360208801612001565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820152600061250f6060830184612025565b60008351612866818460208801612001565b83519083019061287a818360208801612001565b01949350505050565b60008251612895818460208701612001565b919091019291505056fea2646970667358221220a0fbb3a4456a37c425a9a015c5cbb431f610a5f1daeed5a0a024bd5d1a3947d164736f6c63430008140033';

type MystikoV2CelerERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2CelerERC20ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2CelerERC20__factory extends ContractFactory {
  constructor(...args: MystikoV2CelerERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2CelerERC20';
  }

  deploy(
    _hasher3: string,
    _token: string,
    _bridgeProxyAddress: string,
    _settingsCenter: string,
    _localConfig: IMystikoBridge.LocalConfigStruct,
    _peerConfig: IMystikoBridge.PeerConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2CelerERC20> {
    return super.deploy(
      _hasher3,
      _token,
      _bridgeProxyAddress,
      _settingsCenter,
      _localConfig,
      _peerConfig,
      overrides || {},
    ) as Promise<MystikoV2CelerERC20>;
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
  attach(address: string): MystikoV2CelerERC20 {
    return super.attach(address) as MystikoV2CelerERC20;
  }
  connect(signer: Signer): MystikoV2CelerERC20__factory {
    return super.connect(signer) as MystikoV2CelerERC20__factory;
  }
  static readonly contractName: 'MystikoV2CelerERC20';
  public readonly contractName: 'MystikoV2CelerERC20';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2CelerERC20Interface {
    return new utils.Interface(_abi) as MystikoV2CelerERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2CelerERC20 {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2CelerERC20;
  }
}
