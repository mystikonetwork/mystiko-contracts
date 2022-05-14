/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2CelerERC20, MystikoV2CelerERC20Interface } from '../MystikoV2CelerERC20';

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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790557f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016001553480156200005b57600080fd5b5060405162002aad38038062002aad8339810160408190526200007e91620000d8565b600b8054336001600160a01b0319918216179091556002805482166001600160a01b03948516179055600c80549091169190921617905562000110565b80516001600160a01b0381168114620000d357600080fd5b919050565b60008060408385031215620000ec57600080fd5b620000f783620000bb565b91506200010760208401620000bb565b90509250929050565b61298d80620001206000396000f3fe6080604052600436106101ac5760003560e01c806399383f78116100ec578063c9230c5d1161008a578063e19abef811610064578063e19abef8146104c8578063ed6ea33a146104e8578063efbfb2ae14610507578063f4ad17c61461051c57600080fd5b8063c9230c5d14610476578063ce7461021461048b578063cfc7e2da146104b357600080fd5b8063a3bc64f2116100c6578063a3bc64f2146103ef578063b4318ead1461040f578063babc20441461042f578063c2d416011461044f57600080fd5b806399383f78146103a95780639a03636c146103c95780639c649fdf146103dc57600080fd5b806334c33e83116101595780635898a0a8116101335780635898a0a8146103355780635e10b2b714610354578063825b5f8d14610374578063897b06371461038957600080fd5b806334c33e83146102af5780633fe3347a146102cf578063521ff0571461031557600080fd5b806319e75d6e1161018a57806319e75d6e1461021e5780632421e1551461023e57806330d780361461028457600080fd5b806306394c9b146101b1578063153dc450146101d3578063176de7a8146101f3575b600080fd5b3480156101bd57600080fd5b506101d16101cc3660046123ef565b610531565b005b3480156101df57600080fd5b506101d16101ee36600461261e565b6105a3565b3480156101ff57600080fd5b5061020861064d565b60405161021591906127eb565b60405180910390f35b34801561022a57600080fd5b506101d161023936600461261e565b6106d3565b34801561024a57600080fd5b5060408051808201909152600581527f63656c65720000000000000000000000000000000000000000000000000000006020820152610208565b34801561029057600080fd5b50600054600160a01b900460ff165b6040519015158152602001610215565b3480156102bb57600080fd5b506101d16102ca3660046123ef565b610723565b3480156102db57600080fd5b5060408051808201909152600581527f65726332300000000000000000000000000000000000000000000000000000006020820152610208565b34801561032157600080fd5b506101d161033036600461261e565b610790565b34801561034157600080fd5b506009545b604051908152602001610215565b34801561036057600080fd5b506101d161036f36600461261e565b610830565b34801561038057600080fd5b50600a54610346565b34801561039557600080fd5b506101d16103a436600461261e565b6108d0565b3480156103b557600080fd5b506101d16103c43660046124af565b610920565b6101d16103d7366004612560565b610989565b61029f6103ea36600461240a565b610cbe565b3480156103fb57600080fd5b506101d161040a3660046123ef565b610d77565b34801561041b57600080fd5b506101d161042a3660046124af565b610de4565b34801561043b57600080fd5b506101d161044a366004612650565b610e4d565b34801561045b57600080fd5b50610464610efc565b60405160ff9091168152602001610215565b34801561048257600080fd5b50610208610f79565b34801561049757600080fd5b506000546040516001600160a01b039091168152602001610215565b3480156104bf57600080fd5b50600654610346565b3480156104d457600080fd5b506101d16104e33660046123ef565b610fbe565b3480156104f457600080fd5b50600b54600160a01b900460ff1661029f565b34801561051357600080fd5b50600754610346565b34801561052857600080fd5b50600854610346565b600b546001600160a01b031633146105815760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031633146105ee5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600081116106485760405162461bcd60e51b815260206004820152602160248201527f696e76616c69642070656572206d696e696d616c206578656375746f722066656044820152606560f81b6064820152608401610578565b600955565b600c54604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b15801561069257600080fd5b505afa1580156106a6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106ce91908101906124e9565b905090565b600b546001600160a01b0316331461071e5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600755565b600b546001600160a01b0316331461076e5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031633146107db5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b6000811161082b5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c757020666565006044820152606401610578565b600a55565b600b546001600160a01b0316331461087b5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600081116108cb5760405162461bcd60e51b815260206004820152601c60248201527f696e76616c6964206d696e696d616c206578656375746f7220666565000000006044820152606401610578565b600855565b600b546001600160a01b0316331461091b5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600655565b600b546001600160a01b0316331461096b5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600b8054911515600160a01b0260ff60a01b19909216919091179055565b600b54600160a01b900460ff16156109e35760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c656400000000000000000000006044820152606401610578565b60065481511015610a365760405162461bcd60e51b815260206004820152600e60248201527f616d6f756e7420746f6f206665770000000000000000000000000000000000006044820152606401610578565b6007548160a001511015610a8c5760405162461bcd60e51b815260206004820152601260248201527f6272696467652066656520746f6f2066657700000000000000000000000000006044820152606401610578565b6009548160c001511015610ae25760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f206665770000000000000000000000006044820152606401610578565b600a548160e001511015610b385760405162461bcd60e51b815260206004820152601260248201527f726f6c6c75702066656520746f6f2066657700000000000000000000000000006044820152606401610578565b6000610b5182604001518360000151846060015161102b565b905080826020015114610ba65760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f7272656374000000000000006044820152606401610578565b610baf336111b3565b15610bfc5760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e6564206164647265737300000000000000000000000000006044820152606401610578565b60035460e083015160c08401518451610c37936001600160a01b03169291610c23916128de565b610c2d91906128de565b8460a0015161124d565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610c7a826112b9565b9050610c8a8460a0015182611328565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b6005546000906001600160a01b03163314610d1b5760405162461bcd60e51b815260206004820152601e60248201527f6d73672073656e646572206973206e6f74206272696467652070726f787900006044820152606401610578565b6000610d5c85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113ab92505050565b9050610d6a86888584611473565b5060019695505050505050565b600b546001600160a01b03163314610dc25760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610e2f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b60008054911515600160a01b0260ff60a01b19909216919091179055565b600b546001600160a01b03163314610e985760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b6003805467ffffffffffffffff909316600160a01b027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff90931692909217909155600480546001600160a01b039092166001600160a01b0319909216919091179055565b600c546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b158015610f4157600080fd5b505afa158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ce9190612683565b600c54604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b15801561069257600080fd5b600b546001600160a01b031633146110095760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610578565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000600154841061108a5760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b6064820152608401610578565b60015483106111015760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a4500000000000000000000000000000000000000000000000000006064820152608401610578565b60025460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891611159916004016127ba565b60206040518083038186803b15801561117157600080fd5b505afa158015611185573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a99190612637565b90505b9392505050565b60008054600160a01b900460ff16156111ce57506000919050565b60005460405163df592f7d60e01b81526001600160a01b03848116600483015290911690819063df592f7d9060240160206040518083038186803b15801561121557600080fd5b505afa158015611229573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ac91906124cc565b80341461129c5760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d61746368000000000000000000000000006044820152606401610578565b600c546112b4906001600160a01b03163385856116af565b505050565b6060806112c9836000015161171e565b6112d6846020015161171e565b6112e3856040015161171e565b6112f0866060015161171e565b6112fd87608001516117b6565b60405160200161131195949392919061271d565b60408051601f198184030181529190529392505050565b60055460048054600354604051634f9e72ad60e11b81526001600160a01b0394851694639f3ce55a94889461137594921692600160a01b90920467ffffffffffffffff1691889101612788565b6000604051808303818588803b15801561138e57600080fd5b505af11580156113a2573d6000803e3d6000fd5b50505050505050565b6113dd6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b61140f6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b600061141b84826117ed565b908352905061142a84826117ed565b6020840191909152905061143e84826117ed565b6040840191909152905061145284826117ed565b60608401919091529050611466848261191e565b5060808301525092915050565b6004546001600160a01b038481169116146114d05760405162461bcd60e51b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d61746368656400006044820152606401610578565b60035467ffffffffffffffff858116600160a01b90920416146115355760405162461bcd60e51b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d617463686564000000000000006044820152606401610578565b80516115835760405162461bcd60e51b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e2030006044820152606401610578565b600854816040015110156115d95760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f206665770000000000000000000000006044820152606401610578565b6003546040516378d60cd760e01b81526001600160a01b03909116906378d60cd79061160b90849086906004016127fe565b602060405180830381600087803b15801561162557600080fd5b505af1158015611639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165d91906124cc565b6116a95760405162461bcd60e51b815260206004820152601260248201527f63616c6c20656e7175657565206572726f7200000000000000000000000000006044820152606401610578565b50505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526116a9908590611a2b565b60606001600160ff1b038211156117775760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401610578565b60405160208082526000601f5b828210156117a65785811a826020860101536001919091019060001901611784565b5050506040818101905292915050565b80516060906117c481611b10565b836040516020016117d69291906126ee565b604051602081830303815290604052915050919050565b60008083518360206117ff91906128de565b1115801561181657506118138360206128de565b83105b61186e5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401610578565b600060405160206000600182038760208a0101515b838310156118a35780821a83860153600183019250600182039150611883565b50505081016040525190506001600160ff1b038111156119055760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401610578565b806119118560206128de565b92509250505b9250929050565b606060008061192d8585611bdf565b865190955090915061193f82866128de565b11158015611955575061195281856128de565b84105b6119ad5760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401610578565b6060811580156119c857604051915060208201604052611a12565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611a015780518352602092830192016119e9565b5050848452601f01601f1916604052505b5080611a1e83876128de565b9350935050509250929050565b6000611a80826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611de59092919063ffffffff16565b8051909150156112b45780806020019051810190611a9e91906124cc565b6112b45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610578565b606060fd8267ffffffffffffffff161015611b4557604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff1611611b9557611b6560fd60f81b611df4565b611b6e83611e1b565b604051602001611b7f9291906126ee565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611bc057611bb7607f60f91b611df4565b611b6e83611e5e565b611bd16001600160f81b0319611df4565b611b6e83611ea1565b919050565b6000806000611bee8585611ee4565b94509050600060fd60f81b6001600160f81b031983161415611c8757611c148686611f6c565b955061ffff16905060fd8110801590611c2f575061ffff8111155b611c7b5760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401610578565b92508391506119179050565b607f60f91b6001600160f81b031983161415611d1257611ca78686612025565b955063ffffffff16905061ffff81118015611cc6575063ffffffff8111155b611c7b5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610578565b6001600160f81b03198083161415611d8f57611d2e86866120f7565b955067ffffffffffffffff16905063ffffffff8111611c7b5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610578565b5060f881901c60fd8110611c7b5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610578565b60606111a984846000856121c9565b60408051600181526001600160f81b03198316602082015260218101909152606090611b3f565b6040516002808252606091906000601f5b82821015611e4e5785811a826020860101536001919091019060001901611e2c565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611e915785811a826020860101536001919091019060001901611e6f565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611ed45785811a826020860101536001919091019060001901611eb2565b5050506028810160405292915050565b6000808351836001611ef691906128de565b11158015611f0d5750611f0a8360016128de565b83105b611f595760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401610578565b83830160200151806119118560016128de565b6000808351836002611f7e91906128de565b11158015611f955750611f928360026128de565b83105b611fec5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610578565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261191191906128de565b600080835183600461203791906128de565b1115801561204e575061204b8360046128de565b83105b6120a55760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610578565b600060405160046000600182038760208a0101515b838310156120da5780821a838601536001830192506001820391506120ba565b5050508181016040526020039003519050806119118560046128de565b600080835183600861210991906128de565b11158015612120575061211d8360086128de565b83105b6121775760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610578565b600060405160086000600182038760208a0101515b838310156121ac5780821a8386015360018301925060018203915061218c565b5050508181016040526020039003519050806119118560086128de565b6060824710156122415760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610578565b6001600160a01b0385163b6122985760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610578565b600080866001600160a01b031685876040516122b491906126d2565b60006040518083038185875af1925050503d80600081146122f1576040519150601f19603f3d011682016040523d82523d6000602084013e6122f6565b606091505b5091509150612306828286612311565b979650505050505050565b606083156123205750816111ac565b8251156123305782518084602001fd5b8160405162461bcd60e51b815260040161057891906127eb565b80356001600160a01b0381168114611bda57600080fd5b600082601f83011261237257600080fd5b8135612385612380826128b6565b612885565b81815284602083860101111561239a57600080fd5b816020850160208301376000918101602001919091529392505050565b80356fffffffffffffffffffffffffffffffff81168114611bda57600080fd5b803567ffffffffffffffff81168114611bda57600080fd5b60006020828403121561240157600080fd5b6111ac8261234a565b60008060008060006080868803121561242257600080fd5b61242b8661234a565b9450612439602087016123d7565b9350604086013567ffffffffffffffff8082111561245657600080fd5b818801915088601f83011261246a57600080fd5b81358181111561247957600080fd5b89602082850101111561248b57600080fd5b6020830195508094505050506124a36060870161234a565b90509295509295909350565b6000602082840312156124c157600080fd5b81356111ac81612946565b6000602082840312156124de57600080fd5b81516111ac81612946565b6000602082840312156124fb57600080fd5b815167ffffffffffffffff81111561251257600080fd5b8201601f8101841361252357600080fd5b8051612531612380826128b6565b81815285602083850101111561254657600080fd5b612557826020830160208601612904565b95945050505050565b60006020828403121561257257600080fd5b813567ffffffffffffffff8082111561258a57600080fd5b90830190610100828603121561259f57600080fd5b6125a761285b565b8235815260208301356020820152604083013560408201526125cb606084016123b7565b60608201526080830135828111156125e257600080fd5b6125ee87828601612361565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b60006020828403121561263057600080fd5b5035919050565b60006020828403121561264957600080fd5b5051919050565b6000806040838503121561266357600080fd5b61266c836123d7565b915061267a6020840161234a565b90509250929050565b60006020828403121561269557600080fd5b815160ff811681146111ac57600080fd5b600081518084526126be816020860160208601612904565b601f01601f19169290920160200192915050565b600082516126e4818460208701612904565b9190910192915050565b60008351612700818460208801612904565b835190830190612714818360208801612904565b01949350505050565b6000865161272f818460208b01612904565b865190830190612743818360208b01612904565b8651910190612756818360208a01612904565b8551910190612769818360208901612904565b845191019061277c818360208801612904565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820152600061255760608301846126a6565b60608101818360005b60038110156127e25781518352602092830192909101906001016127c3565b50505092915050565b6020815260006111ac60208301846126a6565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261284260e08401826126a6565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff8111828210171561287f5761287f612930565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156128ae576128ae612930565b604052919050565b600067ffffffffffffffff8211156128d0576128d0612930565b50601f01601f191660200190565b600082198211156128ff57634e487b7160e01b600052601160045260246000fd5b500190565b60005b8381101561291f578181015183820152602001612907565b838111156116a95750506000910152565b634e487b7160e01b600052604160045260246000fd5b801515811461295457600080fd5b5056fea2646970667358221220422da93b2dc1d6ba221148b550f6930935991a3da15ea5c34cd21406bf82994c64736f6c63430008070033';

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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2CelerERC20> {
    return super.deploy(_hasher3, _token, overrides || {}) as Promise<MystikoV2CelerERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _token, overrides || {});
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