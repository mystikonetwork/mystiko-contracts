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
  '0x60806040526000805460ff60a01b191690553480156200001e57600080fd5b5060405162002ac938038062002ac983398101604081905262000041916200012b565b600080546001600160a01b03199081166001600160a01b039889161790915560088054821695881695909517909455815160035560208083015160045560409092015160055580516006550151600755600980548316918516919091179055600a80549091169190921617905562000210565b6001600160a01b0381168114620000ca57600080fd5b50565b600060408284031215620000e057600080fd5b604080519081016001600160401b03811182821017156200011157634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b6000806000806000808688036101208112156200014757600080fd5b87516200015481620000b4565b60208901519097506200016781620000b4565b60408901519096506200017a81620000b4565b60608901519095506200018d81620000b4565b93506060607f1982011215620001a257600080fd5b50604051606081016001600160401b0381118282101715620001d457634e487b7160e01b600052604160045260246000fd5b60409081526080890151825260a0890151602083015260c0890151908201529150620002048860e08901620000cd565b90509295509295509295565b6128a980620002206000396000f3fe6080604052600436106101ac5760003560e01c80639a03636c116100ec578063cdfceeba1161008a578063ddac5dc111610064578063ddac5dc114610483578063ed6ea33a14610498578063efbfb2ae146104ad578063fb3e3d73146104c257600080fd5b8063cdfceeba14610417578063cfc7e2da14610458578063d0b436bd1461046d57600080fd5b8063c2d41601116100c6578063c2d41601146103b2578063c9230c5d146103d9578063cb5c029a146103ee578063cbe342851461040157600080fd5b80639a03636c1461035c5780639c649fdf1461036f578063abc1bd221461039257600080fd5b80633fe3347a116101595780634e3c10b7116101335780634e3c10b7146103075780635898a0a81461031c578063640c0b3614610331578063825b5f8d1461034757600080fd5b80633fe3347a146102b3578063422e0028146102cf5780634dde6fbc146102f157600080fd5b806321e32d551161018a57806321e32d551461022d5780632421e1551461024d5780632cd26d451461029357600080fd5b80630ba95909146101b1578063176de7a8146101d95780631ba46cfd146101fb575b600080fd5b3480156101bd57600080fd5b506101c66104d8565b6040519081526020015b60405180910390f35b3480156101e557600080fd5b506101ee610561565b6040516101d09190612025565b34801561020757600080fd5b50600a546001600160a01b03165b6040516001600160a01b0390911681526020016101d0565b34801561023957600080fd5b50600254610215906001600160a01b031681565b34801561025957600080fd5b5060408051808201909152600581527f63656c657200000000000000000000000000000000000000000000000000000060208201526101ee565b34801561029f57600080fd5b50600854610215906001600160a01b031681565b3480156102bf57600080fd5b5060006040516101d09190612038565b3480156102db57600080fd5b506102ef6102ea366004612187565b6105d8565b005b3480156102fd57600080fd5b506101c660055481565b34801561031357600080fd5b506101ee6106c5565b34801561032857600080fd5b506101c6610753565b34801561033d57600080fd5b506101c660065481565b34801561035357600080fd5b506101c66107da565b6102ef61036a366004612307565b610861565b61038261037d366004612344565b61087a565b60405190151581526020016101d0565b34801561039e57600080fd5b50600954610215906001600160a01b031681565b3480156103be57600080fd5b506103c7610904565b60405160ff90911681526020016101d0565b3480156103e557600080fd5b506101ee610972565b6102ef6103fc3660046123ef565b6109bc565b34801561040d57600080fd5b506101c660075481565b34801561042357600080fd5b5060005461043f90600160a81b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101d0565b34801561046457600080fd5b506101c6610df1565b34801561047957600080fd5b506101c660045481565b34801561048f57600080fd5b50610215610e78565b3480156104a457600080fd5b50610382610f17565b3480156104b957600080fd5b506101c6610f84565b3480156104ce57600080fd5b506101c660035481565b60095460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa158015610525573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610549919061245c565b90508015610557578061055b565b6004545b91505090565b600a54604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b419160048083019260009291908290030181865afa1580156105ab573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105d39190810190612475565b905090565b600054600160a01b900460ff161561060357604051636d8f115160e11b815260040160405180910390fd5b80516000805467ffffffffffffffff909216600160a81b027fffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffff90921691909117905560208101516001906106579082612574565b5060400151600280546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b600180546106d2906124ec565b80601f01602080910402602001604051908101604052809291908181526020018280546106fe906124ec565b801561074b5780601f106107205761010080835404028352916020019161074b565b820191906000526020600020905b81548152906001019060200180831161072e57829003601f168201915b505050505081565b600954604051634f314f9d60e11b815230600482015260009182916001600160a01b0390911690639e629f3a90602401602060405180830381865afa1580156107a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c4919061245c565b905080156107d2578061055b565b505060065490565b6009546040516361863c0360e11b815230600482015260009182916001600160a01b039091169063c30c780690602401602060405180830381865afa158015610827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084b919061245c565b90508015610859578061055b565b505060075490565b60405163e7a24ff960e01b815260040160405180910390fd5b6008546000906001600160a01b031633146108a857604051633dca01cf60e11b815260040160405180910390fd5b60006108e985858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061100b92505050565b90506108f7868885846110d3565b5060019695505050505050565b600a546040805163313ce56760e01b815290516000926001600160a01b03169163313ce5679160048083019260209291908290030181865afa15801561094e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d39190612634565b600a54604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde039160048083019260009291908290030181865afa1580156105ab573d6000803e3d6000fd5b6009546040516355f0ba2960e01b81523060048201526001600160a01b03909116906355f0ba2990602401602060405180830381865afa158015610a04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a289190612657565b15610a4657604051630e2f42c960e31b815260040160405180910390fd5b600960009054906101000a90046001600160a01b03166001600160a01b031663dc7f01246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abd9190612657565b15610b945760006040518060800160405280326001600160a01b03168152602001610af0600a546001600160a01b031690565b6001600160a01b039081168252602082018690526040918201859052600954915163849e8b9f60e01b8152929350169063849e8b9f90610b34908490600401612679565b602060405180830381865afa158015610b51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b759190612657565b610b9257604051633042041f60e21b815260040160405180910390fd5b505b610b9c610df1565b83511015610bbd5760405163617ab12d60e11b815260040160405180910390fd5b610bc56104d8565b83511115610be657604051630625040160e01b815260040160405180910390fd5b610bee610f84565b8360a001511015610c125760405163c4d8d00d60e01b815260040160405180910390fd5b610c1a610753565b8360c001511015610c3e576040516355a6d6a160e11b815260040160405180910390fd5b610c466107da565b8360e001511015610c6a5760405163784f02bd60e11b815260040160405180910390fd5b6000610c838460400151856000015186606001516111c6565b905080846020015114610ca9576040516301bfaa2560e51b815260040160405180910390fd5b60095460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa158015610cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d159190612657565b15610d3357604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252855181526020808701519082015260c08601519181019190915260e08501516060820152608080860151908201526000610d76826112df565b9050610d868660a001518261134e565b610dbb610d91610e78565b60e088015160c08901518951610da791906126bf565b610db191906126bf565b8860a001516113d4565b60208601516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a2505050505050565b600954604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610e3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e62919061245c565b90508015610e70578061055b565b505060035490565b6009546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610ec5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee991906126e0565b90506001600160a01b038116610f12576040516306f3d63360e51b815260040160405180910390fd5b919050565b6009546040516355f0ba2960e01b81523060048201526000916001600160a01b0316906355f0ba2990602401602060405180830381865afa158015610f60573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d39190612657565b600954604051637b52b00d60e01b815230600482015260009182916001600160a01b0390911690637b52b00d90602401602060405180830381865afa158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff5919061245c565b90508015611003578061055b565b505060055490565b61103d6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b61106f6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b600061107b8482611445565b908352905061108a8482611445565b6020840191909152905061109e8482611445565b604084019190915290506110b28482611445565b606084019190915290506110c68482611576565b5060808301525092915050565b6002546001600160a01b0384811691161461110157604051631440e07960e11b815260040160405180910390fd5b60005467ffffffffffffffff858116600160a81b909204161461113757604051633876304f60e21b815260040160405180910390fd5b80516000036111595760405163820bf1e560e01b815260040160405180910390fd5b611161610e78565b6001600160a01b03166378d60cd782846040518363ffffffff1660e01b815260040161118e9291906126fd565b600060405180830381600087803b1580156111a857600080fd5b505af11580156111bc573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106112095760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061123b57604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916112939160040161275a565b602060405180830381865afa1580156112b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d4919061245c565b9150505b9392505050565b6060806112ef8360000151611683565b6112fc8460200151611683565b6113098560400151611683565b6113168660600151611683565b611323876080015161171b565b60405160200161133795949392919061278b565b60408051601f198184030181529190529392505050565b600854600254600054604051634f9e72ad60e11b81526001600160a01b0393841693639f3ce55a93879361139e93919092169167ffffffffffffffff600160a81b909104169087906004016127f6565b6000604051808303818588803b1580156113b757600080fd5b505af11580156113cb573d6000803e3d6000fd5b50505050505050565b8034146114285760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600a54611440906001600160a01b0316338585611752565b505050565b600080835183602061145791906126bf565b1115801561146e575061146b8360206126bf565b83105b6114c65760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161141f565b600060405160206000600182038760208a0101515b838310156114fb5780821a838601536001830192506001820391506114db565b50505081016040525190506001600160ff1b0381111561155d5760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161141f565b806115698560206126bf565b92509250505b9250929050565b606060008061158585856117c7565b865190955090915061159782866126bf565b111580156115ad57506115aa81856126bf565b84105b6116055760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161141f565b6060811580156116205760405191506020820160405261166a565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611659578051835260209283019201611641565b5050848452601f01601f1916604052505b508061167683876126bf565b9350935050509250929050565b60606001600160ff1b038211156116dc5760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161141f565b60405160208082526000601f5b8282101561170b5785811a8260208601015360019190910190600019016116e9565b5050506040818101905292915050565b8051606090611729816119cb565b8360405160200161173b929190612828565b604051602081830303815290604052915050919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526117c1908590611a95565b50505050565b60008060006117d68585611af8565b9450905060006001600160f81b0319821660fd60f81b0361186e576117fb8686611b80565b955061ffff16905060fd8110801590611816575061ffff8111155b6118625760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161141f565b925083915061156f9050565b6001600160f81b03198216607f60f91b036118f85761188d8686611c39565b955063ffffffff16905061ffff811180156118ac575063ffffffff8111155b6118625760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161141f565b6001600160f81b03198083169003611975576119148686611d0a565b955067ffffffffffffffff16905063ffffffff81116118625760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161141f565b5060f881901c60fd81106118625760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161141f565b606060fd8267ffffffffffffffff161015611a0057604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff1611611a5057611a2060fd60f81b611ddb565b611a2983611e02565b604051602001611a3a929190612828565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611a7b57611a72607f60f91b611ddb565b611a2983611e45565b611a8c6001600160f81b0319611ddb565b611a2983611e88565b6000611aaa6001600160a01b03841683611ecb565b90508051600014158015611acf575080806020019051810190611acd9190612657565b155b1561144057604051635274afe760e01b81526001600160a01b038416600482015260240161141f565b6000808351836001611b0a91906126bf565b11158015611b215750611b1e8360016126bf565b83105b611b6d5760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161141f565b83830160200151806115698560016126bf565b6000808351836002611b9291906126bf565b11158015611ba95750611ba68360026126bf565b83105b611c005760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161141f565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261156991906126bf565b6000808351836004611c4b91906126bf565b11158015611c625750611c5f8360046126bf565b83105b611cb95760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161141f565b600060405160046000600182038760208a0101515b83831015611cee5780821a83860153600183019250600182039150611cce565b505050016040819052601f1901519050806115698560046126bf565b6000808351836008611d1c91906126bf565b11158015611d335750611d308360086126bf565b83105b611d8a5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161141f565b600060405160086000600182038760208a0101515b83831015611dbf5780821a83860153600183019250600182039150611d9f565b505050016040819052601f1901519050806115698560086126bf565b60408051600181526001600160f81b031983166020820152602181019091526060906119fa565b6040516002808252606091906000601f5b82821015611e355785811a826020860101536001919091019060001901611e13565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611e785785811a826020860101536001919091019060001901611e56565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611ebb5785811a826020860101536001919091019060001901611e99565b5050506028810160405292915050565b60606112d88383600084600080856001600160a01b03168486604051611ef19190612857565b60006040518083038185875af1925050503d8060008114611f2e576040519150601f19603f3d011682016040523d82523d6000602084013e611f33565b606091505b5091509150611f43868383611f4d565b9695505050505050565b606082611f6257611f5d82611fa9565b6112d8565b8151158015611f7957506001600160a01b0384163b155b15611fa257604051639996b31560e01b81526001600160a01b038516600482015260240161141f565b50806112d8565b805115611fb95780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60005b83811015611ff0578181015183820152602001611fd8565b50506000910152565b60008151808452612011816020860160208601611fd5565b601f01601f19169290920160200192915050565b6020815260006112d86020830184611ff9565b602081016002831061205a57634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561209957612099612060565b60405290565b604051610100810167ffffffffffffffff8111828210171561209957612099612060565b604051601f8201601f1916810167ffffffffffffffff811182821017156120ec576120ec612060565b604052919050565b803567ffffffffffffffff81168114610f1257600080fd5b600067ffffffffffffffff82111561212657612126612060565b50601f01601f191660200190565b60006121476121428461210c565b6120c3565b905082815283838301111561215b57600080fd5b828260208301376000602084830101529392505050565b6001600160a01b0381168114611fd257600080fd5b60006020828403121561219957600080fd5b813567ffffffffffffffff808211156121b157600080fd5b90830190606082860312156121c557600080fd5b6121cd612076565b6121d6836120f4565b81526020830135828111156121ea57600080fd5b83019150601f820186136121fd57600080fd5b61220c86833560208501612134565b60208201526040830135925061222183612172565b6040810192909252509392505050565b80356fffffffffffffffffffffffffffffffff81168114610f1257600080fd5b600082601f83011261226257600080fd5b6112d883833560208501612134565b6000610100828403121561228457600080fd5b61228c61209f565b90508135815260208201356020820152604082013560408201526122b260608301612231565b6060820152608082013567ffffffffffffffff8111156122d157600080fd5b6122dd84828501612251565b60808301525060a082013560a082015260c082013560c082015260e082013560e082015292915050565b60006020828403121561231957600080fd5b813567ffffffffffffffff81111561233057600080fd5b61233c84828501612271565b949350505050565b60008060008060006080868803121561235c57600080fd5b853561236781612172565b9450612375602087016120f4565b9350604086013567ffffffffffffffff8082111561239257600080fd5b818801915088601f8301126123a657600080fd5b8135818111156123b557600080fd5b8960208285010111156123c757600080fd5b60208301955080945050505060608601356123e181612172565b809150509295509295909350565b60008060006060848603121561240457600080fd5b833567ffffffffffffffff8082111561241c57600080fd5b61242887838801612271565b945060208601359350604086013591508082111561244557600080fd5b5061245286828701612251565b9150509250925092565b60006020828403121561246e57600080fd5b5051919050565b60006020828403121561248757600080fd5b815167ffffffffffffffff81111561249e57600080fd5b8201601f810184136124af57600080fd5b80516124bd6121428261210c565b8181528560208385010111156124d257600080fd5b6124e3826020830160208601611fd5565b95945050505050565b600181811c9082168061250057607f821691505b60208210810361252057634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561144057600081815260208120601f850160051c8101602086101561254d5750805b601f850160051c820191505b8181101561256c57828155600101612559565b505050505050565b815167ffffffffffffffff81111561258e5761258e612060565b6125a28161259c84546124ec565b84612526565b602080601f8311600181146125d757600084156125bf5750858301515b600019600386901b1c1916600185901b17855561256c565b600085815260208120601f198616915b82811015612606578886015182559484019460019091019084016125e7565b50858210156126245787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561264657600080fd5b815160ff811681146112d857600080fd5b60006020828403121561266957600080fd5b815180151581146112d857600080fd5b6020815260006001600160a01b038084511660208401528060208501511660408401525060408301516060830152606083015160808084015261233c60a0840182611ff9565b808201808211156119fa57634e487b7160e01b600052601160045260246000fd5b6000602082840312156126f257600080fd5b81516112d881612172565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261274160e0840182611ff9565b9150506001600160a01b03831660208301529392505050565b60608101818360005b6003811015612782578151835260209283019290910190600101612763565b50505092915050565b6000865161279d818460208b01611fd5565b8651908301906127b1818360208b01611fd5565b86519101906127c4818360208a01611fd5565b85519101906127d7818360208901611fd5565b84519101906127ea818360208801611fd5565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff831660208201526060604082015260006124e36060830184611ff9565b6000835161283a818460208801611fd5565b83519083019061284e818360208801611fd5565b01949350505050565b60008251612869818460208701611fd5565b919091019291505056fea2646970667358221220a0a1df79c68159b93008650ab637dbef353cfe4df2ba611bbe18cd542ba42a9364736f6c63430008140033';

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
