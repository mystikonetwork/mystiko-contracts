/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2AxelarMain, MystikoV2AxelarMainInterface } from '../MystikoV2AxelarMain';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IHasher3',
        name: '_hasher3',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'NotApprovedByGateway',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'peerChainName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
    ],
    name: 'CallContractMessage',
    type: 'event',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: 'SanctionsCheckDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract ISanctionsList',
        name: 'sanctions',
        type: 'address',
      },
    ],
    name: 'SanctionsList',
    type: 'event',
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
        internalType: 'address',
        name: '_newOperator',
        type: 'address',
      },
    ],
    name: 'changeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'string',
        name: 'tokenSymbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'executeWithToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gateway',
    outputs: [
      {
        internalType: 'contract IAxelarGateway',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'sanctionsCheckDisabled',
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
    name: 'sanctionsList',
    outputs: [
      {
        internalType: 'contract ISanctionsList',
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
        internalType: 'address',
        name: '_commitmentPoolAddress',
        type: 'address',
      },
    ],
    name: 'setAssociatedCommitmentPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gasReceiver',
        type: 'address',
      },
    ],
    name: 'setAxelarGasReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridgeProxyAddress',
        type: 'address',
      },
    ],
    name: 'setBridgeProxyAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setDepositsDisabled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_minAmount',
        type: 'uint256',
      },
    ],
    name: 'setMinAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_minBridgeFee',
        type: 'uint256',
      },
    ],
    name: 'setMinBridgeFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_minExecutorFee',
        type: 'uint256',
      },
    ],
    name: 'setMinExecutorFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_peerChainId',
        type: 'uint64',
      },
      {
        internalType: 'string',
        name: '_peerChainName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_peerContract',
        type: 'address',
      },
    ],
    name: 'setPeerContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_peerMinExecutorFee',
        type: 'uint256',
      },
    ],
    name: 'setPeerMinExecutorFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_peerMinRollupFee',
        type: 'uint256',
      },
    ],
    name: 'setPeerMinRollupFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setSanctionCheckDisabled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ISanctionsList',
        name: '_sanction',
        type: 'address',
      },
    ],
    name: 'updateSanctionsListAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790553480156200003757600080fd5b5060405162002e7a38038062002e7a8339810160408190526200005a916200008e565b600b80546001600160a01b03199081163317909155600180546001600160a01b0390931692909116919091179055620000c0565b600060208284031215620000a157600080fd5b81516001600160a01b0381168114620000b957600080fd5b9392505050565b612daa80620000d06000396000f3fe6080604052600436106101b75760003560e01c8063825b5f8d116100ec578063df4207371161008a578063ec571c6a11610064578063ec571c6a146104ee578063ed6ea33a1461050e578063efbfb2ae1461052d578063f4ad17c61461054257600080fd5b8063df4207371461048e578063e19abef8146104ae578063ea0cde85146104ce57600080fd5b80639a03636c116100c65780639a03636c14610428578063a3bc64f21461043b578063cfc7e2da1461045b578063ddac5dc11461047057600080fd5b8063825b5f8d146103c2578063830d9ebe146103d7578063897b06371461040857600080fd5b806330f49cac11610159578063521ff05711610133578063521ff057146103435780635898a0a8146103635780635e10b2b7146103825780637d2c8520146103a257600080fd5b806330f49cac146102e75780633fe3347a14610307578063491606581461032357600080fd5b8063153dc45011610195578063153dc4501461023b57806319e75d6e1461025b5780631a98b2e01461027b5780632421e1551461029b57600080fd5b806306394c9b146101bc57806306b2ad59146101de578063116191b6146101fe575b600080fd5b3480156101c857600080fd5b506101dc6101d7366004612550565b610557565b005b3480156101ea57600080fd5b506101dc6101f936600461256d565b6105c9565b34801561020a57600080fd5b50600c5461021e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024757600080fd5b506101dc6102563660046127e3565b61066c565b34801561026757600080fd5b506101dc6102763660046127e3565b6106bc565b34801561028757600080fd5b506101dc61029636600461264b565b61070c565b3480156102a757600080fd5b50604080518082018252600681527f6178656c61720000000000000000000000000000000000000000000000000000602082015290516102329190612b4c565b3480156102f357600080fd5b506101dc610302366004612550565b61088e565b34801561031357600080fd5b5060016040516102329190612b24565b34801561032f57600080fd5b506101dc61033e3660046125a7565b610927565b34801561034f57600080fd5b506101dc61035e3660046127e3565b6109a7565b34801561036f57600080fd5b506009545b604051908152602001610232565b34801561038e57600080fd5b506101dc61039d3660046127e3565b610a47565b3480156103ae57600080fd5b506101dc6103bd366004612815565b610a97565b3480156103ce57600080fd5b50600a54610374565b3480156103e357600080fd5b506000546103f890600160a01b900460ff1681565b6040519015158152602001610232565b34801561041457600080fd5b506101dc6104233660046127e3565b610b54565b6101dc610436366004612725565b610ba4565b34801561044757600080fd5b506101dc610456366004612550565b610ed9565b34801561046757600080fd5b50600654610374565b34801561047c57600080fd5b506002546001600160a01b031661021e565b34801561049a57600080fd5b506101dc6104a9366004612550565b610f46565b3480156104ba57600080fd5b506101dc6104c9366004612550565b610fb3565b3480156104da57600080fd5b506101dc6104e936600461256d565b611020565b3480156104fa57600080fd5b5060005461021e906001600160a01b031681565b34801561051a57600080fd5b50600b54600160a01b900460ff166103f8565b34801561053957600080fd5b50600754610374565b34801561054e57600080fd5b50600854610374565b600b546001600160a01b031633146105a75760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031633146106145760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a4439061066190831515815260200190565b60405180910390a150565b600b546001600160a01b031633146106b75760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600955565b600b546001600160a01b031633146107075760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600755565b6000858560405161071e92919061298b565b604051908190038120600c54631876eed960e01b83529092506001600160a01b031690631876eed990610765908e908e908e908e908e9089908d908d908d90600401612ac5565b602060405180830381600087803b15801561077f57600080fd5b505af1158015610793573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b7919061258a565b6107d457604051631403112d60e21b815260040160405180910390fd5b6108818a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525050604080516020601f8b018190048102820181019092528981528c93508b9250908a908a90819084018382808284376000920191909152508a9250611089915050565b5050505050505050505050565b600b546001600160a01b031633146108d95760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b190602001610661565b61099e86868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284376000920191909152508792508691506110919050565b50505050505050565b600b546001600160a01b031633146109f25760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b60008111610a425760405162461bcd60e51b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c75702066656500604482015260640161059e565b600a55565b600b546001600160a01b03163314610a925760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600855565b600b546001600160a01b03163314610ae25760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600280547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff8616021790558151610b2f9060039060208501906123bf565b50600480546001600160a01b0319166001600160a01b03929092169190911790555050565b600b546001600160a01b03163314610b9f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600655565b600b54600160a01b900460ff1615610bfe5760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c65640000000000000000000000604482015260640161059e565b60065481511015610c515760405162461bcd60e51b815260206004820152600e60248201527f616d6f756e7420746f6f20666577000000000000000000000000000000000000604482015260640161059e565b6007548160a001511015610ca75760405162461bcd60e51b815260206004820152601260248201527f6272696467652066656520746f6f206665770000000000000000000000000000604482015260640161059e565b6009548160c001511015610cfd5760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f20666577000000000000000000000000604482015260640161059e565b600a548160e001511015610d535760405162461bcd60e51b815260206004820152601260248201527f726f6c6c75702066656520746f6f206665770000000000000000000000000000604482015260640161059e565b6000610d6c826040015183600001518460600151611109565b905080826020015114610dc15760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f727265637400000000000000604482015260640161059e565b610dca336112dd565b15610e175760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e656420616464726573730000000000000000000000000000604482015260640161059e565b60025460e083015160c08401518451610e52936001600160a01b03169291610e3e91612c57565b610e489190612c57565b8460a0015161137b565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610e958261147c565b9050610ea58460a00151826114eb565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b600b546001600160a01b03163314610f245760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610f915760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600d80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610ffe5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b0316331461106b5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161059e565b600b8054911515600160a01b0260ff60a01b19909216919091179055565b505050505050565b60006110d283838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061161892505050565b60025460045491925061110291600160a01b90910467ffffffffffffffff16906001600160a01b031632846116e0565b5050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184106111865760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b606482015260840161059e565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff161061122d5760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a450000000000000000000000000000000000000000000000000000606482015260840161059e565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e89161128591600401612a94565b60206040518083038186803b15801561129d57600080fd5b505afa1580156112b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d591906127fc565b949350505050565b60008054600160a01b900460ff16156112f857506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b15801561133d57600080fd5b505afa158015611351573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611375919061258a565b92915050565b6113858183612c57565b34146113d35760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e0000000000000000000000000000604482015260640161059e565b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114611420576040519150601f19603f3d011682016040523d82523d6000602084013e611425565b606091505b50509050806114765760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c656400000000000000000000604482015260640161059e565b50505050565b60608061148c836000015161185a565b611499846020015161185a565b6114a6856040015161185a565b6114b3866060015161185a565b6114c087608001516118f2565b6040516020016114d49594939291906129ca565b60408051601f198184030181529190529392505050565b600454600090611505906001600160a01b03166014611929565b9050821561157b57600d54604051630c93e3bb60e01b81526001600160a01b0390911690630c93e3bb908590611548903090600390879089903390600401612a35565b6000604051808303818588803b15801561156157600080fd5b505af1158015611575573d6000803e3d6000fd5b50505050505b7fe68d82569479581bf9793b8672c8f40b6d3ad0545719dc0579fb3ee30919d3ef6003826040516115ad929190612b5f565b60405180910390a1600554604051631c92115f60e01b81526001600160a01b0390911690631c92115f906115ea9060039085908790600401612b8d565b600060405180830381600087803b15801561160457600080fd5b505af115801561099e573d6000803e3d6000fd5b61164a6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b61167c6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b60006116888482611ad9565b90835290506116978482611ad9565b602084019190915290506116ab8482611ad9565b604084019190915290506116bf8482611ad9565b606084019190915290506116d38482611c0a565b5060808301525092915050565b6004546001600160a01b0384811691161461173d5760405162461bcd60e51b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d6174636865640000604482015260640161059e565b60025467ffffffffffffffff858116600160a01b90920416146117a25760405162461bcd60e51b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d61746368656400000000000000604482015260640161059e565b80516117f05760405162461bcd60e51b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e203000604482015260640161059e565b6002546040516378d60cd760e01b81526001600160a01b03909116906378d60cd7906118229084908690600401612bd0565b600060405180830381600087803b15801561183c57600080fd5b505af1158015611850573d6000803e3d6000fd5b5050505050505050565b60606001600160ff1b038211156118b35760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161059e565b60405160208082526000601f5b828210156118e25785811a8260208601015360019190910190600019016118c0565b5050506040818101905292915050565b805160609061190081611d17565b8360405160200161191292919061299b565b604051602081830303815290604052915050919050565b60606000611938836002612c6f565b611943906002612c57565b67ffffffffffffffff81111561195b5761195b612d38565b6040519080825280601f01601f191660200182016040528015611985576020820181803683370190505b509050600360fc1b816000815181106119a0576119a0612d22565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106119cf576119cf612d22565b60200101906001600160f81b031916908160001a90535060006119f3846002612c6f565b6119fe906001612c57565b90505b6001811115611a83577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611a3f57611a3f612d22565b1a60f81b828281518110611a5557611a55612d22565b60200101906001600160f81b031916908160001a90535060049490941c93611a7c81612cba565b9050611a01565b508315611ad25760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161059e565b9392505050565b6000808351836020611aeb9190612c57565b11158015611b025750611aff836020612c57565b83105b611b5a5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161059e565b600060405160206000600182038760208a0101515b83831015611b8f5780821a83860153600183019250600182039150611b6f565b50505081016040525190506001600160ff1b03811115611bf15760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161059e565b80611bfd856020612c57565b92509250505b9250929050565b6060600080611c198585611de4565b8651909550909150611c2b8286612c57565b11158015611c415750611c3e8185612c57565b84105b611c995760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161059e565b606081158015611cb457604051915060208201604052611cfe565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611ced578051835260209283019201611cd5565b5050848452601f01601f1916604052505b5080611d0a8387612c57565b9350935050509250929050565b606060fd8267ffffffffffffffff161015611d4a57604080516001815260f884901b602082015260218101909152611375565b61ffff8267ffffffffffffffff1611611d9a57611d6a60fd60f81b611fea565b611d7383612011565b604051602001611d8492919061299b565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611dc557611dbc607f60f91b611fea565b611d7383612054565b611dd66001600160f81b0319611fea565b611d7383612097565b919050565b6000806000611df385856120da565b94509050600060fd60f81b6001600160f81b031983161415611e8c57611e198686612162565b955061ffff16905060fd8110801590611e34575061ffff8111155b611e805760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161059e565b9250839150611c039050565b607f60f91b6001600160f81b031983161415611f1757611eac868661221b565b955063ffffffff16905061ffff81118015611ecb575063ffffffff8111155b611e805760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161059e565b6001600160f81b03198083161415611f9457611f3386866122ed565b955067ffffffffffffffff16905063ffffffff8111611e805760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161059e565b5060f881901c60fd8110611e805760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161059e565b60408051600181526001600160f81b03198316602082015260218101909152606090611375565b6040516002808252606091906000601f5b828210156120445785811a826020860101536001919091019060001901612022565b5050506022810160405292915050565b6040516004808252606091906000601f5b828210156120875785811a826020860101536001919091019060001901612065565b5050506024810160405292915050565b6040516008808252606091906000601f5b828210156120ca5785811a8260208601015360019190910190600019016120a8565b5050506028810160405292915050565b60008083518360016120ec9190612c57565b111580156121035750612100836001612c57565b83105b61214f5760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161059e565b8383016020015180611bfd856001612c57565b60008083518360026121749190612c57565b1115801561218b5750612188836002612c57565b83105b6121e25760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161059e565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e81035191505080846002611bfd9190612c57565b600080835183600461222d9190612c57565b111580156122445750612241836004612c57565b83105b61229b5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161059e565b600060405160046000600182038760208a0101515b838310156122d05780821a838601536001830192506001820391506122b0565b505050818101604052602003900351905080611bfd856004612c57565b60008083518360086122ff9190612c57565b111580156123165750612313836008612c57565b83105b61236d5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161059e565b600060405160086000600182038760208a0101515b838310156123a25780821a83860153600183019250600182039150612382565b505050818101604052602003900351905080611bfd856008612c57565b8280546123cb90612cd1565b90600052602060002090601f0160209004810192826123ed5760008555612433565b82601f1061240657805160ff1916838001178555612433565b82800160010185558215612433579182015b82811115612433578251825591602001919060010190612418565b5061243f929150612443565b5090565b5b8082111561243f5760008155600101612444565b600067ffffffffffffffff8084111561247357612473612d38565b604051601f8501601f19908116603f0116810190828211818310171561249b5761249b612d38565b816040528093508581528686860111156124b457600080fd5b858560208301376000602087830101525050509392505050565b60008083601f8401126124e057600080fd5b50813567ffffffffffffffff8111156124f857600080fd5b602083019150836020828501011115611c0357600080fd5b600082601f83011261252157600080fd5b611ad283833560208501612458565b80356fffffffffffffffffffffffffffffffff81168114611ddf57600080fd5b60006020828403121561256257600080fd5b8135611ad281612d4e565b60006020828403121561257f57600080fd5b8135611ad281612d66565b60006020828403121561259c57600080fd5b8151611ad281612d66565b60008060008060008060006080888a0312156125c257600080fd5b87359650602088013567ffffffffffffffff808211156125e157600080fd5b6125ed8b838c016124ce565b909850965060408a013591508082111561260657600080fd5b6126128b838c016124ce565b909650945060608a013591508082111561262b57600080fd5b506126388a828b016124ce565b989b979a50959850939692959293505050565b60008060008060008060008060008060c08b8d03121561266a57600080fd5b8a35995060208b013567ffffffffffffffff8082111561268957600080fd5b6126958e838f016124ce565b909b50995060408d01359150808211156126ae57600080fd5b6126ba8e838f016124ce565b909950975060608d01359150808211156126d357600080fd5b6126df8e838f016124ce565b909750955060808d01359150808211156126f857600080fd5b506127058d828e016124ce565b9150809450508092505060a08b013590509295989b9194979a5092959850565b60006020828403121561273757600080fd5b813567ffffffffffffffff8082111561274f57600080fd5b90830190610100828603121561276457600080fd5b61276c612c2d565b82358152602083013560208201526040830135604082015261279060608401612530565b60608201526080830135828111156127a757600080fd5b6127b387828601612510565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b6000602082840312156127f557600080fd5b5035919050565b60006020828403121561280e57600080fd5b5051919050565b60008060006060848603121561282a57600080fd5b833567ffffffffffffffff808216821461284357600080fd5b9093506020850135908082111561285957600080fd5b508401601f8101861361286b57600080fd5b61287a86823560208401612458565b925050604084013561288b81612d4e565b809150509250925092565b600081518084526128ae816020860160208601612c8e565b601f01601f19169290920160200192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8054600090600181811c908083168061290557607f831692505b602080841082141561292757634e487b7160e01b600052602260045260246000fd5b8388526020880182801561294257600181146129535761297e565b60ff1987168252828201975061297e565b60008981526020902060005b878110156129785781548482015290860190840161295f565b83019850505b5050505050505092915050565b8183823760009101908152919050565b600083516129ad818460208801612c8e565b8351908301906129c1818360208801612c8e565b01949350505050565b600086516129dc818460208b01612c8e565b8651908301906129f0818360208b01612c8e565b8651910190612a03818360208a01612c8e565b8551910190612a16818360208901612c8e565b8451910190612a29818360208801612c8e565b01979650505050505050565b60006001600160a01b03808816835260a06020840152612a5860a08401886128eb565b8381036040850152612a6a8188612896565b90508381036060850152612a7e8187612896565b9250508084166080840152509695505050505050565b60608101818360005b6003811015612abc578151835260209283019290910190600101612a9d565b50505092915050565b89815260c060208201526000612adf60c083018a8c6128c2565b8281036040840152612af281898b6128c2565b90508660608401528281036080840152612b0d8186886128c2565b9150508260a08301529a9950505050505050505050565b6020810160028310612b4657634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000611ad26020830184612896565b604081526000612b7260408301856128eb565b8281036020840152612b848185612896565b95945050505050565b606081526000612ba060608301866128eb565b8281036020840152612bb28186612896565b90508281036040840152612bc68185612896565b9695505050505050565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c0840152612c1460e0840182612896565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff81118282101715612c5157612c51612d38565b60405290565b60008219821115612c6a57612c6a612d0c565b500190565b6000816000190483118215151615612c8957612c89612d0c565b500290565b60005b83811015612ca9578181015183820152602001612c91565b838111156114765750506000910152565b600081612cc957612cc9612d0c565b506000190190565b600181811c90821680612ce557607f821691505b60208210811415612d0657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114612d6357600080fd5b50565b8015158114612d6357600080fdfea2646970667358221220aa69fb82350942a4f09f42d051aaba88a0ae8397be7d9ab906f7c6e6ac2e554e64736f6c63430008070033';

type MystikoV2AxelarMainConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2AxelarMainConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2AxelarMain__factory extends ContractFactory {
  constructor(...args: MystikoV2AxelarMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2AxelarMain';
  }

  deploy(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2AxelarMain> {
    return super.deploy(_hasher3, overrides || {}) as Promise<MystikoV2AxelarMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, overrides || {});
  }
  attach(address: string): MystikoV2AxelarMain {
    return super.attach(address) as MystikoV2AxelarMain;
  }
  connect(signer: Signer): MystikoV2AxelarMain__factory {
    return super.connect(signer) as MystikoV2AxelarMain__factory;
  }
  static readonly contractName: 'MystikoV2AxelarMain';
  public readonly contractName: 'MystikoV2AxelarMain';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2AxelarMainInterface {
    return new utils.Interface(_abi) as MystikoV2AxelarMainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2AxelarMain {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2AxelarMain;
  }
}
