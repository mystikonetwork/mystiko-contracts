/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2CelerMain, MystikoV2CelerMainInterface, IMystikoBridge } from '../MystikoV2CelerMain';

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
  '0x60806040526000805460ff60a01b191690553480156200001e57600080fd5b506040516200270238038062002702833981016040819052620000419162000126565b600080546001600160a01b039687166001600160a01b031991821617909155600880549587169582169590951790945581516003556020808301516004556040909201516005558051600655015160075560098054919093169116179055620001ec565b6001600160a01b0381168114620000bb57600080fd5b50565b604051606081016001600160401b0381118282101715620000ef57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715620000ef57634e487b7160e01b600052604160045260246000fd5b60008060008060008587036101008112156200014157600080fd5b86516200014e81620000a5565b60208801519096506200016181620000a5565b60408801519095506200017481620000a5565b93506060605f19820112156200018957600080fd5b62000193620000be565b606088015181526080880151602082015260a0880151604082015280935050604060bf1982011215620001c557600080fd5b50620001d0620000f5565b60c0870151815260e09096015160208701525092959194509290565b61250680620001fc6000396000f3fe6080604052600436106101965760003560e01c80639a03636c116100e1578063d0b436bd1161008a578063ed6ea33a11610064578063ed6ea33a14610423578063efbfb2ae14610438578063fa750f561461044d578063fb3e3d731461046e57600080fd5b8063d0b436bd146103d8578063ddac5dc1146103ee578063e06174e41461040357600080fd5b8063cbe34285116100bb578063cbe342851461036c578063cdfceeba14610382578063cfc7e2da146103c357600080fd5b80639a03636c146103235780639c649fdf14610336578063cb5c029a1461035957600080fd5b8063422e0028116101435780635898a0a81161011d5780635898a0a8146102e3578063640c0b36146102f8578063825b5f8d1461030e57600080fd5b8063422e0028146102965780634dde6fbc146102b85780634e3c10b7146102ce57600080fd5b80632421e155116101745780632421e1551461020b5780632cd26d451461025a5780633fe3347a1461027a57600080fd5b80630ba959091461019b5780631ba46cfd146101c357806321e32d55146101eb575b600080fd5b3480156101a757600080fd5b506101b0610484565b6040519081526020015b60405180910390f35b3480156101cf57600080fd5b5060005b6040516001600160a01b0390911681526020016101ba565b3480156101f757600080fd5b506002546101d3906001600160a01b031681565b34801561021757600080fd5b5060408051808201909152600581527f63656c657200000000000000000000000000000000000000000000000000000060208201525b6040516101ba9190611d4e565b34801561026657600080fd5b506008546101d3906001600160a01b031681565b34801561028657600080fd5b5060016040516101ba9190611d68565b3480156102a257600080fd5b506102b66102b1366004611e99565b61050d565b005b3480156102c457600080fd5b506101b060055481565b3480156102da57600080fd5b5061024d6105fa565b3480156102ef57600080fd5b506101b0610688565b34801561030457600080fd5b506101b060065481565b34801561031a57600080fd5b506101b061070f565b6102b6610331366004612019565b610796565b610349610344366004612056565b6107af565b60405190151581526020016101ba565b6102b6610367366004612101565b610839565b34801561037857600080fd5b506101b060075481565b34801561038e57600080fd5b506000546103aa90600160a81b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101ba565b3480156103cf57600080fd5b506101b0610c64565b3480156103e457600080fd5b506101b060045481565b3480156103fa57600080fd5b506101d3610ceb565b34801561040f57600080fd5b506009546101d3906001600160a01b031681565b34801561042f57600080fd5b50610349610d8a565b34801561044457600080fd5b506101b0610dfc565b34801561045957600080fd5b5060005461034990600160a01b900460ff1681565b34801561047a57600080fd5b506101b060035481565b60095460405163473a063160e01b815230600482015260009182916001600160a01b039091169063473a063190602401602060405180830381865afa1580156104d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f5919061216e565b905080156105035780610507565b6004545b91505090565b600054600160a01b900460ff161561053857604051636d8f115160e11b815260040160405180910390fd5b80516000805467ffffffffffffffff909216600160a81b027fffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffff909216919091179055602081015160019061058c9082612210565b5060400151600280546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b6001805461060790612187565b80601f016020809104026020016040519081016040528092919081815260200182805461063390612187565b80156106805780601f1061065557610100808354040283529160200191610680565b820191906000526020600020905b81548152906001019060200180831161066357829003601f168201915b505050505081565b600954604051634f314f9d60e11b815230600482015260009182916001600160a01b0390911690639e629f3a90602401602060405180830381865afa1580156106d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f9919061216e565b905080156107075780610507565b505060065490565b6009546040516361863c0360e11b815230600482015260009182916001600160a01b039091169063c30c780690602401602060405180830381865afa15801561075c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610780919061216e565b9050801561078e5780610507565b505060075490565b60405163e7a24ff960e01b815260040160405180910390fd5b6008546000906001600160a01b031633146107dd57604051633dca01cf60e11b815260040160405180910390fd5b600061081e85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e8392505050565b905061082c86888584610f4b565b5060019695505050505050565b60095460405163bb07320560e01b81523060048201526001600160a01b039091169063bb07320590602401602060405180830381865afa158015610881573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a591906122d0565b156108c357604051630e2f42c960e31b815260040160405180910390fd5b600960009054906101000a90046001600160a01b03166001600160a01b031663bc5877066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610916573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093a91906122d0565b15610a075760006040518060800160405280326001600160a01b03168152602001610963600090565b6001600160a01b039081168252602082018690526040918201859052600954915163849e8b9f60e01b8152929350169063849e8b9f906109a79084906004016122f2565b602060405180830381865afa1580156109c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e891906122d0565b610a0557604051633042041f60e21b815260040160405180910390fd5b505b610a0f610c64565b83511015610a305760405163617ab12d60e11b815260040160405180910390fd5b610a38610484565b83511115610a5957604051630625040160e01b815260040160405180910390fd5b610a61610dfc565b8360a001511015610a855760405163c4d8d00d60e01b815260040160405180910390fd5b610a8d610688565b8360c001511015610ab1576040516355a6d6a160e11b815260040160405180910390fd5b610ab961070f565b8360e001511015610add5760405163784f02bd60e11b815260040160405180910390fd5b6000610af684604001518560000151866060015161103e565b905080846020015114610b1c576040516301bfaa2560e51b815260040160405180910390fd5b60095460405163df592f7d60e01b81523260048201526001600160a01b039091169063df592f7d90602401602060405180830381865afa158015610b64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8891906122d0565b15610ba657604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252855181526020808701519082015260c08601519181019190915260e08501516060820152608080860151908201526000610be982611155565b9050610bf98660a00151826111c4565b610c2e610c04610ceb565b60e088015160c08901518951610c1a9190612338565b610c249190612338565b8860a0015161124a565b60208601516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a2505050505050565b600954604051635525984960e01b815230600482015260009182916001600160a01b0390911690635525984990602401602060405180830381865afa158015610cb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd5919061216e565b90508015610ce35780610507565b505060035490565b6009546040516341fb697960e01b815230600482015260009182916001600160a01b03909116906341fb697990602401602060405180830381865afa158015610d38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5c9190612359565b90506001600160a01b038116610d85576040516306f3d63360e51b815260040160405180910390fd5b919050565b60095460405163bb07320560e01b81523060048201526000916001600160a01b03169063bb07320590602401602060405180830381865afa158015610dd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df791906122d0565b905090565b600954604051637b52b00d60e01b815230600482015260009182916001600160a01b0390911690637b52b00d90602401602060405180830381865afa158015610e49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6d919061216e565b90508015610e7b5780610507565b505060055490565b610eb56040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b610ee76040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6000610ef38482611350565b9083529050610f028482611350565b60208401919091529050610f168482611350565b60408401919091529050610f2a8482611350565b60608401919091529050610f3e8482611481565b5060808301525092915050565b6002546001600160a01b03848116911614610f7957604051631b495ecf60e31b815260040160405180910390fd5b60005467ffffffffffffffff858116600160a81b9092041614610faf5760405163373bc12160e11b815260040160405180910390fd5b8051600003610fd15760405163820bf1e560e01b815260040160405180910390fd5b610fd9610ceb565b6001600160a01b03166378d60cd782846040518363ffffffff1660e01b8152600401611006929190612376565b600060405180830381600087803b15801561102057600080fd5b505af1158015611034573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106110815760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff16106110b357604051633bbde0bf60e21b815260040160405180910390fd5b60005460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e89161110b916004016123d3565b602060405180830381865afa158015611128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114c919061216e565b95945050505050565b606080611165836000015161158e565b611172846020015161158e565b61117f856040015161158e565b61118c866060015161158e565b6111998760800151611626565b6040516020016111ad959493929190612404565b60408051601f198184030181529190529392505050565b600854600254600054604051634f9e72ad60e11b81526001600160a01b0393841693639f3ce55a93879361121493919092169167ffffffffffffffff600160a81b9091041690879060040161246f565b6000604051808303818588803b15801561122d57600080fd5b505af1158015611241573d6000803e3d6000fd5b50505050505050565b6112548183612338565b34146112a75760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064015b60405180910390fd5b6000836001600160a01b03168360405160006040518083038185875af1925050503d80600081146112f4576040519150601f19603f3d011682016040523d82523d6000602084013e6112f9565b606091505b505090508061134a5760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c656400000000000000000000604482015260640161129e565b50505050565b60008083518360206113629190612338565b111580156113795750611376836020612338565b83105b6113d15760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161129e565b600060405160206000600182038760208a0101515b838310156114065780821a838601536001830192506001820391506113e6565b50505081016040525190506001600160ff1b038111156114685760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161129e565b80611474856020612338565b92509250505b9250929050565b6060600080611490858561165d565b86519095509091506114a28286612338565b111580156114b857506114b58185612338565b84105b6115105760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161129e565b60608115801561152b57604051915060208201604052611575565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561156457805183526020928301920161154c565b5050848452601f01601f1916604052505b50806115818387612338565b9350935050509250929050565b60606001600160ff1b038211156115e75760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161129e565b60405160208082526000601f5b828210156116165785811a8260208601015360019190910190600019016115f4565b5050506040818101905292915050565b805160609061163481611861565b836040516020016116469291906124a1565b604051602081830303815290604052915050919050565b600080600061166c858561192b565b9450905060006001600160f81b0319821660fd60f81b036117045761169186866119b3565b955061ffff16905060fd81108015906116ac575061ffff8111155b6116f85760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161129e565b925083915061147a9050565b6001600160f81b03198216607f60f91b0361178e576117238686611a6c565b955063ffffffff16905061ffff81118015611742575063ffffffff8111155b6116f85760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161129e565b6001600160f81b0319808316900361180b576117aa8686611b3d565b955067ffffffffffffffff16905063ffffffff81116116f85760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161129e565b5060f881901c60fd81106116f85760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161129e565b606060fd8267ffffffffffffffff16101561189657604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff16116118e6576118b660fd60f81b611c0e565b6118bf83611c35565b6040516020016118d09291906124a1565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff161161191157611908607f60f91b611c0e565b6118bf83611c78565b6119226001600160f81b0319611c0e565b6118bf83611cbb565b600080835183600161193d9190612338565b111580156119545750611951836001612338565b83105b6119a05760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161129e565b8383016020015180611474856001612338565b60008083518360026119c59190612338565b111580156119dc57506119d9836002612338565b83105b611a335760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161129e565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026114749190612338565b6000808351836004611a7e9190612338565b11158015611a955750611a92836004612338565b83105b611aec5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161129e565b600060405160046000600182038760208a0101515b83831015611b215780821a83860153600183019250600182039150611b01565b505050016040819052601f190151905080611474856004612338565b6000808351836008611b4f9190612338565b11158015611b665750611b63836008612338565b83105b611bbd5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161129e565b600060405160086000600182038760208a0101515b83831015611bf25780821a83860153600183019250600182039150611bd2565b505050016040819052601f190151905080611474856008612338565b60408051600181526001600160f81b03198316602082015260218101909152606090611890565b6040516002808252606091906000601f5b82821015611c685785811a826020860101536001919091019060001901611c46565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611cab5785811a826020860101536001919091019060001901611c89565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611cee5785811a826020860101536001919091019060001901611ccc565b5050506028810160405292915050565b60005b83811015611d19578181015183820152602001611d01565b50506000910152565b60008151808452611d3a816020860160208601611cfe565b601f01601f19169290920160200192915050565b602081526000611d616020830184611d22565b9392505050565b6020810160028310611d8a57634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611dc957611dc9611d90565b60405290565b604051610100810167ffffffffffffffff81118282101715611dc957611dc9611d90565b803567ffffffffffffffff81168114610d8557600080fd5b600067ffffffffffffffff80841115611e2657611e26611d90565b604051601f8501601f19908116603f01168101908282118183101715611e4e57611e4e611d90565b81604052809350858152868686011115611e6757600080fd5b858560208301376000602087830101525050509392505050565b6001600160a01b0381168114611e9657600080fd5b50565b600060208284031215611eab57600080fd5b813567ffffffffffffffff80821115611ec357600080fd5b9083019060608286031215611ed757600080fd5b611edf611da6565b611ee883611df3565b8152602083013582811115611efc57600080fd5b83019150601f82018613611f0f57600080fd5b611f1e86833560208501611e0b565b602082015260408301359250611f3383611e81565b6040810192909252509392505050565b80356fffffffffffffffffffffffffffffffff81168114610d8557600080fd5b600082601f830112611f7457600080fd5b611d6183833560208501611e0b565b60006101008284031215611f9657600080fd5b611f9e611dcf565b9050813581526020820135602082015260408201356040820152611fc460608301611f43565b6060820152608082013567ffffffffffffffff811115611fe357600080fd5b611fef84828501611f63565b60808301525060a082013560a082015260c082013560c082015260e082013560e082015292915050565b60006020828403121561202b57600080fd5b813567ffffffffffffffff81111561204257600080fd5b61204e84828501611f83565b949350505050565b60008060008060006080868803121561206e57600080fd5b853561207981611e81565b945061208760208701611df3565b9350604086013567ffffffffffffffff808211156120a457600080fd5b818801915088601f8301126120b857600080fd5b8135818111156120c757600080fd5b8960208285010111156120d957600080fd5b60208301955080945050505060608601356120f381611e81565b809150509295509295909350565b60008060006060848603121561211657600080fd5b833567ffffffffffffffff8082111561212e57600080fd5b61213a87838801611f83565b945060208601359350604086013591508082111561215757600080fd5b5061216486828701611f63565b9150509250925092565b60006020828403121561218057600080fd5b5051919050565b600181811c9082168061219b57607f821691505b6020821081036121bb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561220b57600081815260208120601f850160051c810160208610156121e85750805b601f850160051c820191505b81811015612207578281556001016121f4565b5050505b505050565b815167ffffffffffffffff81111561222a5761222a611d90565b61223e816122388454612187565b846121c1565b602080601f831160018114612273576000841561225b5750858301515b600019600386901b1c1916600185901b178555612207565b600085815260208120601f198616915b828110156122a257888601518255948401946001909101908401612283565b50858210156122c05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156122e257600080fd5b81518015158114611d6157600080fd5b6020815260006001600160a01b038084511660208401528060208501511660408401525060408301516060830152606083015160808084015261204e60a0840182611d22565b8082018082111561189057634e487b7160e01b600052601160045260246000fd5b60006020828403121561236b57600080fd5b8151611d6181611e81565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526123ba60e0840182611d22565b9150506001600160a01b03831660208301529392505050565b60608101818360005b60038110156123fb5781518352602092830192909101906001016123dc565b50505092915050565b60008651612416818460208b01611cfe565b86519083019061242a818360208b01611cfe565b865191019061243d818360208a01611cfe565b8551910190612450818360208901611cfe565b8451910190612463818360208801611cfe565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820152600061114c6060830184611d22565b600083516124b3818460208801611cfe565b8351908301906124c7818360208801611cfe565b0194935050505056fea2646970667358221220d762d8fb6214b55f983e43a5ca44682e7c1ee966fb6968937af47de46b28a93e64736f6c63430008140033';

type MystikoV2CelerMainConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2CelerMainConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2CelerMain__factory extends ContractFactory {
  constructor(...args: MystikoV2CelerMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2CelerMain';
  }

  deploy(
    _hasher3: string,
    _bridgeProxyAddress: string,
    _settingsCenter: string,
    _localConfig: IMystikoBridge.LocalConfigStruct,
    _peerConfig: IMystikoBridge.PeerConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2CelerMain> {
    return super.deploy(
      _hasher3,
      _bridgeProxyAddress,
      _settingsCenter,
      _localConfig,
      _peerConfig,
      overrides || {},
    ) as Promise<MystikoV2CelerMain>;
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
  attach(address: string): MystikoV2CelerMain {
    return super.attach(address) as MystikoV2CelerMain;
  }
  connect(signer: Signer): MystikoV2CelerMain__factory {
    return super.connect(signer) as MystikoV2CelerMain__factory;
  }
  static readonly contractName: 'MystikoV2CelerMain';
  public readonly contractName: 'MystikoV2CelerMain';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2CelerMainInterface {
    return new utils.Interface(_abi) as MystikoV2CelerMainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2CelerMain {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2CelerMain;
  }
}
