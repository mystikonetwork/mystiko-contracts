/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2AxelarERC20, MystikoV2AxelarERC20Interface } from '../MystikoV2AxelarERC20';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_hasher3',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_token',
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
        internalType: 'string',
        name: '',
        type: 'string',
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
    name: 'getSanctionsContract',
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
    name: 'isSanctionCheckDisabled',
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
    name: 'toggleDeposits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_check',
        type: 'bool',
      },
    ],
    name: 'toggleSanctionCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_sanction',
        type: 'address',
      },
    ],
    name: 'updateSanctionContractAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790557f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016001553480156200005b57600080fd5b506040516200334d3803806200334d8339810160408190526200007e91620000d8565b600c8054336001600160a01b0319918216179091556002805482166001600160a01b03948516179055600f80549091169190921617905562000110565b80516001600160a01b0381168114620000d357600080fd5b919050565b60008060408385031215620000ec57600080fd5b620000f783620000bb565b91506200010760208401620000bb565b90509250929050565b61322d80620001206000396000f3fe6080604052600436106101d85760003560e01c8063825b5f8d11610102578063ce74610211610095578063e19abef811610064578063e19abef814610589578063ed6ea33a146105a9578063efbfb2ae146105c8578063f4ad17c6146105dd57600080fd5b8063ce74610214610518578063cfc7e2da14610536578063ddac5dc11461054b578063df4207371461056957600080fd5b8063a3bc64f2116100d1578063a3bc64f21461049c578063b4318ead146104bc578063c2d41601146104dc578063c9230c5d1461050357600080fd5b8063825b5f8d14610434578063897b06371461044957806399383f78146104695780639a03636c1461048957600080fd5b806330d780361161017a578063521ff05711610149578063521ff057146103b55780635898a0a8146103d55780635e10b2b7146103f45780637d2c85201461041457600080fd5b806330d780361461030457806334c33e831461032f5780633fe3347a1461034f578063491606581461039557600080fd5b8063176de7a8116101b6578063176de7a81461025c57806319e75d6e1461027e5780631a98b2e01461029e5780632421e155146102be57600080fd5b806306394c9b146101dd578063116191b6146101ff578063153dc4501461023c575b600080fd5b3480156101e957600080fd5b506101fd6101f8366004612910565b6105f2565b005b34801561020b57600080fd5b50600d5461021f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024857600080fd5b506101fd610257366004612c18565b610664565b34801561026857600080fd5b506102716106b4565b6040516102339190612f94565b34801561028a57600080fd5b506101fd610299366004612c18565b61073a565b3480156102aa57600080fd5b506101fd6102b9366004612a09565b61078a565b3480156102ca57600080fd5b5060408051808201909152600681527f6178656c617200000000000000000000000000000000000000000000000000006020820152610271565b34801561031057600080fd5b50600054600160a01b900460ff165b6040519015158152602001610233565b34801561033b57600080fd5b506101fd61034a366004612910565b61090c565b34801561035b57600080fd5b5060408051808201909152600581527f65726332300000000000000000000000000000000000000000000000000000006020820152610271565b3480156103a157600080fd5b506101fd6103b0366004612965565b610979565b3480156103c157600080fd5b506101fd6103d0366004612c18565b6109f9565b3480156103e157600080fd5b50600a545b604051908152602001610233565b34801561040057600080fd5b506101fd61040f366004612c18565b610a99565b34801561042057600080fd5b506101fd61042f366004612c4a565b610ae9565b34801561044057600080fd5b50600b546103e6565b34801561045557600080fd5b506101fd610464366004612c18565b610ba6565b34801561047557600080fd5b506101fd61048436600461292b565b610bf6565b6101fd610497366004612b5a565b610c5f565b3480156104a857600080fd5b506101fd6104b7366004612910565b610f94565b3480156104c857600080fd5b506101fd6104d736600461292b565b611001565b3480156104e857600080fd5b506104f161106a565b60405160ff9091168152602001610233565b34801561050f57600080fd5b506102716110e7565b34801561052457600080fd5b506000546001600160a01b031661021f565b34801561054257600080fd5b506007546103e6565b34801561055757600080fd5b506003546001600160a01b031661021f565b34801561057557600080fd5b506101fd610584366004612910565b61112c565b34801561059557600080fd5b506101fd6105a4366004612910565b611199565b3480156105b557600080fd5b50600c54600160a01b900460ff1661031f565b3480156105d457600080fd5b506008546103e6565b3480156105e957600080fd5b506009546103e6565b600c546001600160a01b031633146106425760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b031633146106af5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600a55565b600f54604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b1580156106f957600080fd5b505afa15801561070d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107359190810190612ae3565b905090565b600c546001600160a01b031633146107855760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600855565b6000858560405161079c929190612ddf565b604051908190038120600d54631876eed960e01b83529092506001600160a01b031690631876eed9906107e3908e908e908e908e908e9089908d908d908d90600401612f35565b602060405180830381600087803b1580156107fd57600080fd5b505af1158015610811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108359190612948565b61085257604051631403112d60e21b815260040160405180910390fd5b6108ff8a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525050604080516020601f8b018190048102820181019092528981528c93508b9250908a908a90819084018382808284376000920191909152508a9250611206915050565b5050505050505050505050565b600c546001600160a01b031633146109575760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6109f086868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a01819004810282018101909252888152925088915087908190840183828082843760009201919091525087925086915061120e9050565b50505050505050565b600c546001600160a01b03163314610a445760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b60008111610a945760405162461bcd60e51b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c757020666565006044820152606401610639565b600b55565b600c546001600160a01b03163314610ae45760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600955565b600c546001600160a01b03163314610b345760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600380547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff8616021790558151610b819060049060208501906127a0565b50600580546001600160a01b0319166001600160a01b03929092169190911790555050565b600c546001600160a01b03163314610bf15760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600755565b600c546001600160a01b03163314610c415760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600c8054911515600160a01b0260ff60a01b19909216919091179055565b600c54600160a01b900460ff1615610cb95760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c656400000000000000000000006044820152606401610639565b60075481511015610d0c5760405162461bcd60e51b815260206004820152600e60248201527f616d6f756e7420746f6f206665770000000000000000000000000000000000006044820152606401610639565b6008548160a001511015610d625760405162461bcd60e51b815260206004820152601260248201527f6272696467652066656520746f6f2066657700000000000000000000000000006044820152606401610639565b600a548160c001511015610db85760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f206665770000000000000000000000006044820152606401610639565b600b548160e001511015610e0e5760405162461bcd60e51b815260206004820152601260248201527f726f6c6c75702066656520746f6f2066657700000000000000000000000000006044820152606401610639565b6000610e27826040015183600001518460600151611286565b905080826020015114610e7c5760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f7272656374000000000000006044820152606401610639565b610e853361140e565b15610ed25760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e6564206164647265737300000000000000000000000000006044820152606401610639565b60035460e083015160c08401518451610f0d936001600160a01b03169291610ef9916130ef565b610f0391906130ef565b8460a001516114a8565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610f5082611514565b9050610f608460a0015182611583565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b600c546001600160a01b03163314610fdf5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b0316331461104c5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b60008054911515600160a01b0260ff60a01b19909216919091179055565b600f546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b1580156110af57600080fd5b505afa1580156110c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107359190612cc7565b600f54604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b1580156106f957600080fd5b600c546001600160a01b031633146111775760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600e80546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b031633146111e45760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610639565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b505050505050565b600061124f83838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506116ae92505050565b60035460055491925061127f91600160a01b90910467ffffffffffffffff16906001600160a01b03163284611776565b5050505050565b600060015484106112e55760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b6064820152608401610639565b600154831061135c5760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a4500000000000000000000000000000000000000000000000000006064820152608401610639565b60025460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916113b491600401612f04565b60206040518083038186803b1580156113cc57600080fd5b505afa1580156113e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114049190612c31565b90505b9392505050565b60008054600160a01b900460ff161561142957506000919050565b60005460405163df592f7d60e01b81526001600160a01b03848116600483015290911690819063df592f7d9060240160206040518083038186803b15801561147057600080fd5b505afa158015611484573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114079190612948565b8034146114f75760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d61746368000000000000000000000000006044820152606401610639565b600f5461150f906001600160a01b031633858561195c565b505050565b60608061152483600001516119cb565b61153184602001516119cb565b61153e85604001516119cb565b61154b86606001516119cb565b6115588760800151611a63565b60405160200161156c959493929190612e3a565b60408051601f198184030181529190529392505050565b60055460009061159d906001600160a01b03166014611a9a565b9050821561161257600e54604051630c93e3bb60e01b81526001600160a01b0390911690630c93e3bb9085906115df9030906004908790899033908401612ea5565b6000604051808303818588803b1580156115f857600080fd5b505af115801561160c573d6000803e3d6000fd5b50505050505b7fe68d82569479581bf9793b8672c8f40b6d3ad0545719dc0579fb3ee30919d3ef600482604051611644929190612fa7565b60405180910390a1600654604051631c92115f60e01b81526001600160a01b0390911690631c92115f9061168090600490859087908301612fcc565b600060405180830381600087803b15801561169a57600080fd5b505af11580156109f0573d6000803e3d6000fd5b6116e06040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6117126040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b600061171e8482611c43565b908352905061172d8482611c43565b602084019190915290506117418482611c43565b604084019190915290506117558482611c43565b606084019190915290506117698482611d74565b5060808301525092915050565b6005546001600160a01b038481169116146117d35760405162461bcd60e51b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d61746368656400006044820152606401610639565b60035467ffffffffffffffff858116600160a01b90920416146118385760405162461bcd60e51b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d617463686564000000000000006044820152606401610639565b80516118865760405162461bcd60e51b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e2030006044820152606401610639565b6003546040516378d60cd760e01b81526001600160a01b03909116906378d60cd7906118b8908490869060040161300f565b602060405180830381600087803b1580156118d257600080fd5b505af11580156118e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061190a9190612948565b6119565760405162461bcd60e51b815260206004820152601260248201527f63616c6c20656e7175657565206572726f7200000000000000000000000000006044820152606401610639565b50505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052611956908590611e81565b60606001600160ff1b03821115611a245760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401610639565b60405160208082526000601f5b82821015611a535785811a826020860101536001919091019060001901611a31565b5050506040818101905292915050565b8051606090611a7181611f66565b83604051602001611a83929190612e0b565b604051602081830303815290604052915050919050565b60606000611aa9836002613107565b611ab49060026130ef565b67ffffffffffffffff811115611acc57611acc6131d0565b6040519080825280601f01601f191660200182016040528015611af6576020820181803683370190505b509050600360fc1b81600081518110611b1157611b116131ba565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611b4057611b406131ba565b60200101906001600160f81b031916908160001a9053506000611b64846002613107565b611b6f9060016130ef565b90505b6001811115611bf4577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611bb057611bb06131ba565b1a60f81b828281518110611bc657611bc66131ba565b60200101906001600160f81b031916908160001a90535060049490941c93611bed81613152565b9050611b72565b5083156114075760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610639565b6000808351836020611c5591906130ef565b11158015611c6c5750611c698360206130ef565b83105b611cc45760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401610639565b600060405160206000600182038760208a0101515b83831015611cf95780821a83860153600183019250600182039150611cd9565b50505081016040525190506001600160ff1b03811115611d5b5760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401610639565b80611d678560206130ef565b92509250505b9250929050565b6060600080611d838585612035565b8651909550909150611d9582866130ef565b11158015611dab5750611da881856130ef565b84105b611e035760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401610639565b606081158015611e1e57604051915060208201604052611e68565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611e57578051835260209283019201611e3f565b5050848452601f01601f1916604052505b5080611e7483876130ef565b9350935050509250929050565b6000611ed6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661223b9092919063ffffffff16565b80519091501561150f5780806020019051810190611ef49190612948565b61150f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610639565b606060fd8267ffffffffffffffff161015611f9b57604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff1611611feb57611fbb60fd60f81b61224a565b611fc483612271565b604051602001611fd5929190612e0b565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff16116120165761200d607f60f91b61224a565b611fc4836122b4565b6120276001600160f81b031961224a565b611fc4836122f7565b919050565b6000806000612044858561233a565b94509050600060fd60f81b6001600160f81b0319831614156120dd5761206a86866123c2565b955061ffff16905060fd8110801590612085575061ffff8111155b6120d15760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401610639565b9250839150611d6d9050565b607f60f91b6001600160f81b031983161415612168576120fd868661247b565b955063ffffffff16905061ffff8111801561211c575063ffffffff8111155b6120d15760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610639565b6001600160f81b031980831614156121e557612184868661254d565b955067ffffffffffffffff16905063ffffffff81116120d15760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610639565b5060f881901c60fd81106120d15760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610639565b6060611404848460008561261f565b60408051600181526001600160f81b03198316602082015260218101909152606090611f95565b6040516002808252606091906000601f5b828210156122a45785811a826020860101536001919091019060001901612282565b5050506022810160405292915050565b6040516004808252606091906000601f5b828210156122e75785811a8260208601015360019190910190600019016122c5565b5050506024810160405292915050565b6040516008808252606091906000601f5b8282101561232a5785811a826020860101536001919091019060001901612308565b5050506028810160405292915050565b600080835183600161234c91906130ef565b1115801561236357506123608360016130ef565b83105b6123af5760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401610639565b8383016020015180611d678560016130ef565b60008083518360026123d491906130ef565b111580156123eb57506123e88360026130ef565b83105b6124425760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610639565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e81035191505080846002611d6791906130ef565b600080835183600461248d91906130ef565b111580156124a457506124a18360046130ef565b83105b6124fb5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610639565b600060405160046000600182038760208a0101515b838310156125305780821a83860153600183019250600182039150612510565b505050818101604052602003900351905080611d678560046130ef565b600080835183600861255f91906130ef565b1115801561257657506125738360086130ef565b83105b6125cd5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610639565b600060405160086000600182038760208a0101515b838310156126025780821a838601536001830192506001820391506125e2565b505050818101604052602003900351905080611d678560086130ef565b6060824710156126975760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610639565b6001600160a01b0385163b6126ee5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610639565b600080866001600160a01b0316858760405161270a9190612def565b60006040518083038185875af1925050503d8060008114612747576040519150601f19603f3d011682016040523d82523d6000602084013e61274c565b606091505b509150915061275c828286612767565b979650505050505050565b60608315612776575081611407565b8251156127865782518084602001fd5b8160405162461bcd60e51b81526004016106399190612f94565b8280546127ac90613169565b90600052602060002090601f0160209004810192826127ce5760008555612814565b82601f106127e757805160ff1916838001178555612814565b82800160010185558215612814579182015b828111156128145782518255916020019190600101906127f9565b50612820929150612824565b5090565b5b808211156128205760008155600101612825565b600061284c612847846130c7565b613096565b905082815283838301111561286057600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b038116811461203057600080fd5b60008083601f8401126128a057600080fd5b50813567ffffffffffffffff8111156128b857600080fd5b602083019150836020828501011115611d6d57600080fd5b600082601f8301126128e157600080fd5b61140783833560208501612839565b80356fffffffffffffffffffffffffffffffff8116811461203057600080fd5b60006020828403121561292257600080fd5b61140782612877565b60006020828403121561293d57600080fd5b8135611407816131e6565b60006020828403121561295a57600080fd5b8151611407816131e6565b60008060008060008060006080888a03121561298057600080fd5b87359650602088013567ffffffffffffffff8082111561299f57600080fd5b6129ab8b838c0161288e565b909850965060408a01359150808211156129c457600080fd5b6129d08b838c0161288e565b909650945060608a01359150808211156129e957600080fd5b506129f68a828b0161288e565b989b979a50959850939692959293505050565b60008060008060008060008060008060c08b8d031215612a2857600080fd5b8a35995060208b013567ffffffffffffffff80821115612a4757600080fd5b612a538e838f0161288e565b909b50995060408d0135915080821115612a6c57600080fd5b612a788e838f0161288e565b909950975060608d0135915080821115612a9157600080fd5b612a9d8e838f0161288e565b909750955060808d0135915080821115612ab657600080fd5b50612ac38d828e0161288e565b9150809450508092505060a08b013590509295989b9194979a5092959850565b600060208284031215612af557600080fd5b815167ffffffffffffffff811115612b0c57600080fd5b8201601f81018413612b1d57600080fd5b8051612b2b612847826130c7565b818152856020838501011115612b4057600080fd5b612b51826020830160208601613126565b95945050505050565b600060208284031215612b6c57600080fd5b813567ffffffffffffffff80821115612b8457600080fd5b908301906101008286031215612b9957600080fd5b612ba161306c565b823581526020830135602082015260408301356040820152612bc5606084016128f0565b6060820152608083013582811115612bdc57600080fd5b612be8878286016128d0565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b600060208284031215612c2a57600080fd5b5035919050565b600060208284031215612c4357600080fd5b5051919050565b600080600060608486031215612c5f57600080fd5b833567ffffffffffffffff8082168214612c7857600080fd5b90935060208501359080821115612c8e57600080fd5b508401601f81018613612ca057600080fd5b612caf86823560208401612839565b925050612cbe60408501612877565b90509250925092565b600060208284031215612cd957600080fd5b815160ff8116811461140757600080fd5b60008151808452612d02816020860160208601613126565b601f01601f19169290920160200192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8054600090600181811c9080831680612d5957607f831692505b6020808410821415612d7b57634e487b7160e01b600052602260045260246000fd5b83885260208801828015612d965760018114612da757612dd2565b60ff19871682528282019750612dd2565b60008981526020902060005b87811015612dcc57815484820152908601908401612db3565b83019850505b5050505050505092915050565b8183823760009101908152919050565b60008251612e01818460208701613126565b9190910192915050565b60008351612e1d818460208801613126565b835190830190612e31818360208801613126565b01949350505050565b60008651612e4c818460208b01613126565b865190830190612e60818360208b01613126565b8651910190612e73818360208a01613126565b8551910190612e86818360208901613126565b8451910190612e99818360208801613126565b01979650505050505050565b60006001600160a01b03808816835260a06020840152612ec860a0840188612d3f565b8381036040850152612eda8188612cea565b90508381036060850152612eee8187612cea565b9250508084166080840152509695505050505050565b60608101818360005b6003811015612f2c578151835260209283019290910190600101612f0d565b50505092915050565b89815260c060208201526000612f4f60c083018a8c612d16565b8281036040840152612f6281898b612d16565b90508660608401528281036080840152612f7d818688612d16565b9150508260a08301529a9950505050505050505050565b6020815260006114076020830184612cea565b604081526000612fba6040830185612d3f565b8281036020840152612b518185612cea565b606081526000612fdf6060830186612d3f565b8281036020840152612ff18186612cea565b905082810360408401526130058185612cea565b9695505050505050565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261305360e0840182612cea565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff81118282101715613090576130906131d0565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156130bf576130bf6131d0565b604052919050565b600067ffffffffffffffff8211156130e1576130e16131d0565b50601f01601f191660200190565b60008219821115613102576131026131a4565b500190565b6000816000190483118215151615613121576131216131a4565b500290565b60005b83811015613141578181015183820152602001613129565b838111156119565750506000910152565b600081613161576131616131a4565b506000190190565b600181811c9082168061317d57607f821691505b6020821081141561319e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80151581146131f457600080fd5b5056fea2646970667358221220bfd08ba5848987b80dfcd2fd343b7d1c15f911aff99a23d2507017490cb115c564736f6c63430008070033';

type MystikoV2AxelarERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2AxelarERC20ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2AxelarERC20__factory extends ContractFactory {
  constructor(...args: MystikoV2AxelarERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2AxelarERC20';
  }

  deploy(
    _hasher3: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2AxelarERC20> {
    return super.deploy(_hasher3, _token, overrides || {}) as Promise<MystikoV2AxelarERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _token, overrides || {});
  }
  attach(address: string): MystikoV2AxelarERC20 {
    return super.attach(address) as MystikoV2AxelarERC20;
  }
  connect(signer: Signer): MystikoV2AxelarERC20__factory {
    return super.connect(signer) as MystikoV2AxelarERC20__factory;
  }
  static readonly contractName: 'MystikoV2AxelarERC20';
  public readonly contractName: 'MystikoV2AxelarERC20';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2AxelarERC20Interface {
    return new utils.Interface(_abi) as MystikoV2AxelarERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2AxelarERC20 {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2AxelarERC20;
  }
}
