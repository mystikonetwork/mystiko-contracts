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
  '0x60806040526000805460ff60a01b1916905534801561001d57600080fd5b50604051612b62380380612b6283398101604081905261003c91610158565b600080546001600160a01b03199081166001600160a01b039889161790915560088054821695881695909517909455815160035560208083015160045560409092015160055580516006550151600755600980548316918516919091179055600a805490911691909216179055610204565b6001600160a01b03811681146100c357600080fd5b50565b604051606081016001600160401b03811182821017156100f657634e487b7160e01b600052604160045260246000fd5b60405290565b60006040828403121561010e57600080fd5b604080519081016001600160401b038111828210171561013e57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b60008060008060008086880361012081121561017357600080fd5b875161017e816100ae565b602089015190975061018f816100ae565b60408901519096506101a0816100ae565b60608901519095506101b1816100ae565b93506060607f19820112156101c557600080fd5b506101ce6100c6565b6080880151815260a0880151602082015260c0880151604082015291506101f88860e089016100fc565b90509295509295509295565b61294f806102136000396000f3fe6080604052600436106101c25760003560e01c8063bc587706116100f7578063d0b436bd11610095578063efbfb2ae11610064578063efbfb2ae146104c3578063f4ad17c6146104d8578063fa750f56146104ed578063fb3e3d731461050e57600080fd5b8063d0b436bd14610463578063ddac5dc114610479578063e06174e41461048e578063ed6ea33a146104ae57600080fd5b8063cb5c029a116100d1578063cb5c029a146103e4578063cbe34285146103f7578063cdfceeba1461040d578063cfc7e2da1461044e57600080fd5b8063bc58770614610393578063c2d41601146103a8578063c9230c5d146103cf57600080fd5b8063422e002811610164578063640c0b361161013e578063640c0b3614610332578063825b5f8d146103485780639a03636c1461035d5780639c649fdf1461037057600080fd5b8063422e0028146102e55780634dde6fbc146103075780634e3c10b71461031d57600080fd5b806321e32d55116101a057806321e32d55146102435780632421e155146102635780632cd26d45146102a95780633fe3347a146102c957600080fd5b80630ba95909146101c7578063176de7a8146101ef5780631ba46cfd14610211575b600080fd5b3480156101d357600080fd5b506101dc610524565b6040519081526020015b60405180910390f35b3480156101fb57600080fd5b506102046105ad565b6040516101e691906120bb565b34801561021d57600080fd5b50600a546001600160a01b03165b6040516001600160a01b0390911681526020016101e6565b34801561024f57600080fd5b5060025461022b906001600160a01b031681565b34801561026f57600080fd5b5060408051808201909152600581527f63656c65720000000000000000000000000000000000000000000000000000006020820152610204565b3480156102b557600080fd5b5060085461022b906001600160a01b031681565b3480156102d557600080fd5b5060006040516101e691906120ce565b3480156102f157600080fd5b5061030561030036600461221d565b610624565b005b34801561031357600080fd5b506101dc60055481565b34801561032957600080fd5b50610204610711565b34801561033e57600080fd5b506101dc60065481565b34801561035457600080fd5b506101dc61079f565b61030561036b3660046123a2565b610826565b61038361037e3660046123df565b61083f565b60405190151581526020016101e6565b34801561039f57600080fd5b506103836108c9565b3480156103b457600080fd5b506103bd610937565b60405160ff90911681526020016101e6565b3480156103db57600080fd5b506102046109a5565b6103056103f236600461248c565b6109ef565b34801561040357600080fd5b506101dc60075481565b34801561041957600080fd5b5060005461043590600160a81b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101e6565b34801561045a57600080fd5b506101dc610e24565b34801561046f57600080fd5b506101dc60045481565b34801561048557600080fd5b5061022b610eab565b34801561049a57600080fd5b5060095461022b906001600160a01b031681565b3480156104ba57600080fd5b50610383610f4a565b3480156104cf57600080fd5b506101dc610f93565b3480156104e457600080fd5b506101dc61101a565b3480156104f957600080fd5b5060005461038390600160a01b900460ff1681565b34801561051a57600080fd5b506101dc60035481565b60095460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa158015610571573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059591906124fe565b905080156105a357806105a7565b6004545b91505090565b600a54604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b419160048083019260009291908290030181865afa1580156105f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261061f9190810190612517565b905090565b600054600160a01b900460ff161561064f57604051636d8f115160e11b815260040160405180910390fd5b80516000805467ffffffffffffffff909216600160a81b027fffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffff90921691909117905560208101516001906106a39082612616565b5060400151600280546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b6001805461071e9061258e565b80601f016020809104026020016040519081016040528092919081815260200182805461074a9061258e565b80156107975780601f1061076c57610100808354040283529160200191610797565b820191906000526020600020905b81548152906001019060200180831161077a57829003601f168201915b505050505081565b6009546040516361863c0360e11b815230600482015260009182916001600160a01b039091169063c30c780690602401602060405180830381865afa1580156107ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081091906124fe565b9050801561081e57806105a7565b505060075490565b60405163e7a24ff960e01b815260040160405180910390fd5b6008546000906001600160a01b0316331461086d57604051633dca01cf60e11b815260040160405180910390fd5b60006108ae85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506110a192505050565b90506108bc86888584611169565b5060019695505050505050565b60095460408051635e2c3b8360e11b815290516000926001600160a01b03169163bc5877069160048083019260209291908290030181865afa158015610913573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f91906126d5565b600a546040805163313ce56760e01b815290516000926001600160a01b03169163313ce5679160048083019260209291908290030181865afa158015610981573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f91906126f7565b600a54604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde039160048083019260009291908290030181865afa1580156105f7573d6000803e3d6000fd5b60095460405163bb07320560e01b81523060048201526001600160a01b039091169063bb07320590602401602060405180830381865afa158015610a37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5b91906126d5565b15610a7957604051630e2f42c960e31b815260040160405180910390fd5b600960009054906101000a90046001600160a01b03166001600160a01b031663bc5877066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610acc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af091906126d5565b15610bc75760006040518060800160405280326001600160a01b03168152602001610b23600a546001600160a01b031690565b6001600160a01b039081168252602082018690526040918201859052600954915163849e8b9f60e01b8152929350169063849e8b9f90610b6790849060040161271a565b602060405180830381865afa158015610b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba891906126d5565b610bc557604051633042041f60e21b815260040160405180910390fd5b505b610bcf610e24565b83511015610bf05760405163617ab12d60e11b815260040160405180910390fd5b610bf8610524565b83511115610c1957604051630625040160e01b815260040160405180910390fd5b610c21610f93565b8360a001511015610c455760405163c4d8d00d60e01b815260040160405180910390fd5b610c4d61101a565b8360c001511015610c71576040516355a6d6a160e11b815260040160405180910390fd5b610c7961079f565b8360e001511015610c9d5760405163784f02bd60e11b815260040160405180910390fd5b6000610cb684604001518560000151866060015161125c565b905080846020015114610cdc576040516301bfaa2560e51b815260040160405180910390fd5b60095460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa158015610d24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4891906126d5565b15610d6657604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252855181526020808701519082015260c08601519181019190915260e08501516060820152608080860151908201526000610da982611375565b9050610db98660a00151826113e4565b610dee610dc4610eab565b60e088015160c08901518951610dda9190612765565b610de49190612765565b8860a0015161146a565b60208601516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a2505050505050565b600954604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610e71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9591906124fe565b90508015610ea357806105a7565b505060035490565b6009546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610ef8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1c9190612786565b90506001600160a01b038116610f45576040516306f3d63360e51b815260040160405180910390fd5b919050565b60095460405163bb07320560e01b81523060048201526000916001600160a01b03169063bb07320590602401602060405180830381865afa158015610913573d6000803e3d6000fd5b600954604051637b52b00d60e01b815230600482015260009182916001600160a01b0390911690637b52b00d90602401602060405180830381865afa158015610fe0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100491906124fe565b9050801561101257806105a7565b505060055490565b600954604051634f314f9d60e11b815230600482015260009182916001600160a01b0390911690639e629f3a90602401602060405180830381865afa158015611067573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108b91906124fe565b9050801561109957806105a7565b505060065490565b6110d36040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6111056040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b600061111184826114db565b908352905061112084826114db565b6020840191909152905061113484826114db565b6040840191909152905061114884826114db565b6060840191909152905061115c848261160c565b5060808301525092915050565b6002546001600160a01b0384811691161461119757604051631b495ecf60e31b815260040160405180910390fd5b60005467ffffffffffffffff858116600160a81b90920416146111cd5760405163373bc12160e11b815260040160405180910390fd5b80516000036111ef5760405163820bf1e560e01b815260040160405180910390fd5b6111f7610eab565b6001600160a01b03166378d60cd782846040518363ffffffff1660e01b81526004016112249291906127a3565b600060405180830381600087803b15801561123e57600080fd5b505af1158015611252573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180851061129f5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff16106112d157604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e89161132991600401612800565b602060405180830381865afa158015611346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136a91906124fe565b9150505b9392505050565b6060806113858360000151611719565b6113928460200151611719565b61139f8560400151611719565b6113ac8660600151611719565b6113b987608001516117b1565b6040516020016113cd959493929190612831565b60408051601f198184030181529190529392505050565b600854600254600054604051634f9e72ad60e11b81526001600160a01b0393841693639f3ce55a93879361143493919092169167ffffffffffffffff600160a81b9091041690879060040161289c565b6000604051808303818588803b15801561144d57600080fd5b505af1158015611461573d6000803e3d6000fd5b50505050505050565b8034146114be5760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600a546114d6906001600160a01b03163385856117e8565b505050565b60008083518360206114ed9190612765565b111580156115045750611501836020612765565b83105b61155c5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b60648201526084016114b5565b600060405160206000600182038760208a0101515b838310156115915780821a83860153600183019250600182039150611571565b50505081016040525190506001600160ff1b038111156115f35760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e676500000000000000000060448201526064016114b5565b806115ff856020612765565b92509250505b9250929050565b606060008061161b858561185d565b865190955090915061162d8286612765565b1115801561164357506116408185612765565b84105b61169b5760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b60648201526084016114b5565b6060811580156116b657604051915060208201604052611700565b6040519150601f8316801560200281840101848101888315602002848c0101015b818310156116ef5780518352602092830192016116d7565b5050848452601f01601f1916604052505b508061170c8387612765565b9350935050509250929050565b60606001600160ff1b038211156117725760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e6765000000000060448201526064016114b5565b60405160208082526000601f5b828210156117a15785811a82602086010153600191909101906000190161177f565b5050506040818101905292915050565b80516060906117bf81611a61565b836040516020016117d19291906128ce565b604051602081830303815290604052915050919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052611857908590611b2b565b50505050565b600080600061186c8585611b8e565b9450905060006001600160f81b0319821660fd60f81b03611904576118918686611c16565b955061ffff16905060fd81108015906118ac575061ffff8111155b6118f85760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e67650060448201526064016114b5565b92508391506116059050565b6001600160f81b03198216607f60f91b0361198e576119238686611ccf565b955063ffffffff16905061ffff81118015611942575063ffffffff8111155b6118f85760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016114b5565b6001600160f81b03198083169003611a0b576119aa8686611da0565b955067ffffffffffffffff16905063ffffffff81116118f85760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016114b5565b5060f881901c60fd81106118f85760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016114b5565b606060fd8267ffffffffffffffff161015611a9657604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff1611611ae657611ab660fd60f81b611e71565b611abf83611e98565b604051602001611ad09291906128ce565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611b1157611b08607f60f91b611e71565b611abf83611edb565b611b226001600160f81b0319611e71565b611abf83611f1e565b6000611b406001600160a01b03841683611f61565b90508051600014158015611b65575080806020019051810190611b6391906126d5565b155b156114d657604051635274afe760e01b81526001600160a01b03841660048201526024016114b5565b6000808351836001611ba09190612765565b11158015611bb75750611bb4836001612765565b83105b611c035760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d60448201526064016114b5565b83830160200151806115ff856001612765565b6000808351836002611c289190612765565b11158015611c3f5750611c3c836002612765565b83105b611c965760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016114b5565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026115ff9190612765565b6000808351836004611ce19190612765565b11158015611cf85750611cf5836004612765565b83105b611d4f5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016114b5565b600060405160046000600182038760208a0101515b83831015611d845780821a83860153600183019250600182039150611d64565b505050016040819052601f1901519050806115ff856004612765565b6000808351836008611db29190612765565b11158015611dc95750611dc6836008612765565b83105b611e205760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016114b5565b600060405160086000600182038760208a0101515b83831015611e555780821a83860153600183019250600182039150611e35565b505050016040819052601f1901519050806115ff856008612765565b60408051600181526001600160f81b03198316602082015260218101909152606090611a90565b6040516002808252606091906000601f5b82821015611ecb5785811a826020860101536001919091019060001901611ea9565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611f0e5785811a826020860101536001919091019060001901611eec565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611f515785811a826020860101536001919091019060001901611f2f565b5050506028810160405292915050565b606061136e8383600084600080856001600160a01b03168486604051611f8791906128fd565b60006040518083038185875af1925050503d8060008114611fc4576040519150601f19603f3d011682016040523d82523d6000602084013e611fc9565b606091505b5091509150611fd9868383611fe3565b9695505050505050565b606082611ff857611ff38261203f565b61136e565b815115801561200f57506001600160a01b0384163b155b1561203857604051639996b31560e01b81526001600160a01b03851660048201526024016114b5565b508061136e565b80511561204f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60005b8381101561208657818101518382015260200161206e565b50506000910152565b600081518084526120a781602086016020860161206b565b601f01601f19169290920160200192915050565b60208152600061136e602083018461208f565b60208101600283106120f057634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561212f5761212f6120f6565b60405290565b604051610100810167ffffffffffffffff8111828210171561212f5761212f6120f6565b604051601f8201601f1916810167ffffffffffffffff81118282101715612182576121826120f6565b604052919050565b803567ffffffffffffffff81168114610f4557600080fd5b600067ffffffffffffffff8211156121bc576121bc6120f6565b50601f01601f191660200190565b60006121dd6121d8846121a2565b612159565b90508281528383830111156121f157600080fd5b828260208301376000602084830101529392505050565b6001600160a01b038116811461206857600080fd5b60006020828403121561222f57600080fd5b813567ffffffffffffffff81111561224657600080fd5b82016060818503121561225857600080fd5b61226061210c565b6122698261218a565b8152602082013567ffffffffffffffff81111561228557600080fd5b8201601f8101861361229657600080fd5b6122a5868235602084016121ca565b602083015250604082013591506122bb82612208565b60408101919091529392505050565b80356fffffffffffffffffffffffffffffffff81168114610f4557600080fd5b600082601f8301126122fb57600080fd5b61136e838335602085016121ca565b6000610100828403121561231d57600080fd5b612325612135565b823581526020808401359082015260408084013590820152905061234b606083016122ca565b6060820152608082013567ffffffffffffffff81111561236a57600080fd5b612376848285016122ea565b60808301525060a0828101359082015260c0808301359082015260e09182013591810191909152919050565b6000602082840312156123b457600080fd5b813567ffffffffffffffff8111156123cb57600080fd5b6123d78482850161230a565b949350505050565b6000806000806000608086880312156123f757600080fd5b853561240281612208565b94506124106020870161218a565b9350604086013567ffffffffffffffff81111561242c57600080fd5b8601601f8101881361243d57600080fd5b803567ffffffffffffffff81111561245457600080fd5b88602082840101111561246657600080fd5b60209190910193509150606086013561247e81612208565b809150509295509295909350565b6000806000606084860312156124a157600080fd5b833567ffffffffffffffff8111156124b857600080fd5b6124c48682870161230a565b93505060208401359150604084013567ffffffffffffffff8111156124e857600080fd5b6124f4868287016122ea565b9150509250925092565b60006020828403121561251057600080fd5b5051919050565b60006020828403121561252957600080fd5b815167ffffffffffffffff81111561254057600080fd5b8201601f8101841361255157600080fd5b805161255f6121d8826121a2565b81815285602083850101111561257457600080fd5b61258582602083016020860161206b565b95945050505050565b600181811c908216806125a257607f821691505b6020821081036125c257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156114d657806000526020600020601f840160051c810160208510156125ef5750805b601f840160051c820191505b8181101561260f57600081556001016125fb565b5050505050565b815167ffffffffffffffff811115612630576126306120f6565b6126448161263e845461258e565b846125c8565b6020601f82116001811461267857600083156126605750848201515b600019600385901b1c1916600184901b17845561260f565b600084815260208120601f198516915b828110156126a85787850151825560209485019460019092019101612688565b50848210156126c65786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b6000602082840312156126e757600080fd5b8151801515811461136e57600080fd5b60006020828403121561270957600080fd5b815160ff8116811461136e57600080fd5b602081526001600160a01b0382511660208201526001600160a01b03602083015116604082015260408201516060820152600060608301516080808401526123d760a084018261208f565b80820180821115611a9057634e487b7160e01b600052601160045260246000fd5b60006020828403121561279857600080fd5b815161136e81612208565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526127e760e084018261208f565b9150506001600160a01b03831660208301529392505050565b60608101818360005b6003811015612828578151835260209283019290910190600101612809565b50505092915050565b60008651612843818460208b0161206b565b865190830190612857818360208b0161206b565b865191019061286a818360208a0161206b565b855191019061287d81836020890161206b565b845191019061289081836020880161206b565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff83166020820152606060408201526000612585606083018461208f565b600083516128e081846020880161206b565b8351908301906128f481836020880161206b565b01949350505050565b6000825161290f81846020870161206b565b919091019291505056fea264697066735822122029211fbe9ffcd6267c54d52ae8b226dab05e06a8d2f11cef5d7c3b948772eb5864736f6c634300081a0033';

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
