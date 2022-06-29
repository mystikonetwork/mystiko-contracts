/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2TBridgeMain, MystikoV2TBridgeMainInterface } from '../MystikoV2TBridgeMain';

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
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Failed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Invalid',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Unauthorized',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Unexpected',
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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790553480156200003757600080fd5b506040516200266c3803806200266c8339810160408190526200005a916200008e565b600b80546001600160a01b03199081163317909155600180546001600160a01b0390931692909116919091179055620000c0565b600060208284031215620000a157600080fd5b81516001600160a01b0381168114620000b957600080fd5b9392505050565b61259c80620000d06000396000f3fe6080604052600436106101965760003560e01c806382d21cd8116100e1578063ddac5dc11161008a578063ec571c6a11610064578063ec571c6a1461046d578063ed6ea33a1461048d578063efbfb2ae146104ac578063f4ad17c6146104c157600080fd5b8063ddac5dc1146103fb578063e19abef81461042d578063ea0cde851461044d57600080fd5b80639a03636c116100bb5780639a03636c146103b3578063a3bc64f2146103c6578063cfc7e2da146103e657600080fd5b806382d21cd814610342578063830d9ebe14610372578063897b06371461039357600080fd5b80633fe3347a116101435780635e10b2b71161011d5780635e10b2b7146102ed5780637d2c85201461030d578063825b5f8d1461032d57600080fd5b80633fe3347a14610292578063521ff057146102ae5780635898a0a8146102ce57600080fd5b806319e75d6e1161017457806319e75d6e146101fd5780632421e1551461021d57806330f49cac1461027257600080fd5b806306394c9b1461019b57806306b2ad59146101bd578063153dc450146101dd575b600080fd5b3480156101a757600080fd5b506101bb6101b6366004612041565b6104d6565b005b3480156101c957600080fd5b506101bb6101d836600461205e565b610549565b3480156101e957600080fd5b506101bb6101f8366004612156565b6105ed565b34801561020957600080fd5b506101bb610218366004612156565b61063e565b34801561022957600080fd5b50604080518082018252600781527f7462726964676500000000000000000000000000000000000000000000000000602082015290516102699190612403565b60405180910390f35b34801561027e57600080fd5b506101bb61028d366004612041565b61068f565b34801561029e57600080fd5b50600160405161026991906123db565b3480156102ba57600080fd5b506101bb6102c9366004612156565b610729565b3480156102da57600080fd5b506009545b604051908152602001610269565b3480156102f957600080fd5b506101bb610308366004612156565b6107cb565b34801561031957600080fd5b506101bb610328366004612233565b61081c565b34801561033957600080fd5b50600a546102df565b34801561034e57600080fd5b5061036261035d366004612188565b6108da565b6040519015158152602001610269565b34801561037e57600080fd5b5060005461036290600160a01b900460ff1681565b34801561039f57600080fd5b506101bb6103ae366004612156565b610994565b6101bb6103c1366004612098565b6109e5565b3480156103d257600080fd5b506101bb6103e1366004612041565b610d21565b3480156103f257600080fd5b506006546102df565b34801561040757600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610269565b34801561043957600080fd5b506101bb610448366004612041565b610d8f565b34801561045957600080fd5b506101bb61046836600461205e565b610dfd565b34801561047957600080fd5b50600054610415906001600160a01b031681565b34801561049957600080fd5b50600b54600160a01b900460ff16610362565b3480156104b857600080fd5b506007546102df565b3480156104cd57600080fd5b506008546102df565b600b546001600160a01b031633146105275760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031633146105955760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a443906105e290831515815260200190565b60405180910390a150565b600b546001600160a01b031633146106395760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600955565b600b546001600160a01b0316331461068a5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600755565b600b546001600160a01b031633146106db5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016105e2565b600b546001600160a01b031633146107755760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600081116107c6576040516314e8955b60e21b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c75702066656500604482015260640161051e565b600a55565b600b546001600160a01b031633146108175760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600855565b600b546001600160a01b031633146108685760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600280547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff86160217905581516108b5906003906020850190611ed3565b50600480546001600160a01b0319166001600160a01b03929092169190911790555050565b6005546000906001600160a01b031633146109385760405163c83ad1cd60e01b815260206004820152601e60248201527f6d73672073656e646572206973206e6f74206272696467652070726f78790000604482015260640161051e565b600061097985858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e6792505050565b905061098787878584610f2f565b5060019695505050505050565b600b546001600160a01b031633146109e05760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600655565b600b54600160a01b900460ff1615610a405760405163c83ad1cd60e01b815260206004820152601560248201527f6465706f73697473206172652064697361626c65640000000000000000000000604482015260640161051e565b60065481511015610a945760405163c83ad1cd60e01b815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c00000000000000000000000000000000604482015260640161051e565b6007548160a001511015610aeb5760405163c83ad1cd60e01b815260206004820152601260248201527f6272696467652066656520746f6f206665770000000000000000000000000000604482015260640161051e565b6009548160c001511015610b425760405163c83ad1cd60e01b815260206004820152601460248201527f6578656375746f722066656520746f6f20666577000000000000000000000000604482015260640161051e565b600a548160e001511015610b995760405163c83ad1cd60e01b815260206004820152601260248201527f726f6c6c75702066656520746f6f206665770000000000000000000000000000604482015260640161051e565b6000610bb28260400151836000015184606001516110ac565b905080826020015114610c085760405163c83ad1cd60e01b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f727265637400000000000000604482015260640161051e565b610c1133611282565b15610c5f5760405163c83ad1cd60e01b815260206004820152601260248201527f73616e6374696f6e656420616464726573730000000000000000000000000000604482015260640161051e565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610ca282611320565b9050610cb28460a001518261138f565b60025460e085015160c08601518651610ced936001600160a01b03169291610cd99161249d565b610ce3919061249d565b8660a00151611412565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b600b546001600160a01b03163314610d6d5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610ddb5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610e495760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051e565b600b8054911515600160a01b0260ff60a01b19909216919091179055565b610e996040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b610ecb6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6000610ed78482611515565b9083529050610ee68482611515565b60208401919091529050610efa8482611515565b60408401919091529050610f0e8482611515565b60608401919091529050610f228482611648565b5060808301525092915050565b6004546001600160a01b03848116911614610f8d5760405163c83ad1cd60e01b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d6174636865640000604482015260640161051e565b60025467ffffffffffffffff858116600160a01b9092041614610ff35760405163c83ad1cd60e01b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d61746368656400000000000000604482015260640161051e565b80516110425760405163c83ad1cd60e01b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e203000604482015260640161051e565b6002546040516378d60cd760e01b81526001600160a01b03909116906378d60cd7906110749084908690600401612416565b600060405180830381600087803b15801561108e57600080fd5b505af11580156110a2573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001841061112a5760405163c83ad1cd60e01b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b606482015260840161051e565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff16106111d25760405163c83ad1cd60e01b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a450000000000000000000000000000000000000000000000000000606482015260840161051e565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e89161122a916004016123aa565b60206040518083038186803b15801561124257600080fd5b505afa158015611256573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127a919061216f565b949350505050565b60008054600160a01b900460ff161561129d57506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b1580156112e257600080fd5b505afa1580156112f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131a919061207b565b92915050565b6060806113308360000151611756565b61133d8460200151611756565b61134a8560400151611756565b6113578660600151611756565b61136487608001516117ef565b604051602001611378959493929190612304565b60408051601f198184030181529190529392505050565b6005546004805460025460405163c81739cd60e01b81526001600160a01b039485169463c81739cd9488946113dc94921692600160a01b90920467ffffffffffffffff169188910161236f565b6000604051808303818588803b1580156113f557600080fd5b505af1158015611409573d6000803e3d6000fd5b50505050505050565b61141c818361249d565b341461146b57604051637979dc8760e01b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e0000000000000000000000000000604482015260640161051e565b6000836001600160a01b03168360405160006040518083038185875af1925050503d80600081146114b8576040519150601f19603f3d011682016040523d82523d6000602084013e6114bd565b606091505b505090508061150f576040516318cb089d60e31b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c656400000000000000000000604482015260640161051e565b50505050565b6000808351836020611527919061249d565b118061153d575061153983602061249d565b8310155b156115975760405163c83ad1cd60e01b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161051e565b600060405160206000600182038760208a0101515b838310156115cc5780821a838601536001830192506001820391506115ac565b50505081016040525190506001600160ff1b0381111561162f5760405163c83ad1cd60e01b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161051e565b8061163b85602061249d565b92509250505b9250929050565b60606000806116578585611826565b8651909550909150611669828661249d565b118061167e575061167a818561249d565b8410155b156116d85760405163c83ad1cd60e01b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161051e565b6060811580156116f35760405191506020820160405261173d565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561172c578051835260209283019201611714565b5050848452601f01601f1916604052505b5080611749838761249d565b9350935050509250929050565b60606001600160ff1b038211156117b0576040516314e8955b60e21b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161051e565b60405160208082526000601f5b828210156117df5785811a8260208601015360019190910190600019016117bd565b5050506040818101905292915050565b80516060906117fd81611a2d565b8360405160200161180f9291906122d5565b604051602081830303815290604052915050919050565b60008060006118358585611afa565b94509050600060fd60f81b6001600160f81b0319831614156118cd5761185b8686611b83565b955061ffff16905060fd811080611873575061ffff81115b156118c15760405163c83ad1cd60e01b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161051e565b92508391506116419050565b607f60f91b6001600160f81b031983161415611958576118ed8686611c3d565b955063ffffffff16905061ffff81108061190a575063ffffffff81115b156118c15760405163c83ad1cd60e01b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161051e565b6001600160f81b031980831614156119d6576119748686611d10565b955067ffffffffffffffff16905063ffffffff81116118c15760405163c83ad1cd60e01b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161051e565b5060f881901c60fd81106118c15760405163c83ad1cd60e01b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161051e565b606060fd8267ffffffffffffffff161015611a6057604080516001815260f884901b60208201526021810190915261131a565b61ffff8267ffffffffffffffff1611611ab057611a8060fd60f81b611de3565b611a8983611e0a565b604051602001611a9a9291906122d5565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611adb57611ad2607f60f91b611de3565b611a8983611e4d565b611aec6001600160f81b0319611de3565b611a8983611e90565b919050565b6000808351836001611b0c919061249d565b1180611b225750611b1e83600161249d565b8310155b15611b705760405163c83ad1cd60e01b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161051e565b838301602001518061163b85600161249d565b6000808351836002611b95919061249d565b1180611bab5750611ba783600261249d565b8310155b15611c045760405163c83ad1cd60e01b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161051e565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261163b919061249d565b6000808351836004611c4f919061249d565b1180611c655750611c6183600461249d565b8310155b15611cbe5760405163c83ad1cd60e01b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161051e565b600060405160046000600182038760208a0101515b83831015611cf35780821a83860153600183019250600182039150611cd3565b50505081810160405260200390035190508061163b85600461249d565b6000808351836008611d22919061249d565b1180611d385750611d3483600861249d565b8310155b15611d915760405163c83ad1cd60e01b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161051e565b600060405160086000600182038760208a0101515b83831015611dc65780821a83860153600183019250600182039150611da6565b50505081810160405260200390035190508061163b85600861249d565b60408051600181526001600160f81b0319831660208201526021810190915260609061131a565b6040516002808252606091906000601f5b82821015611e3d5785811a826020860101536001919091019060001901611e1b565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611e805785811a826020860101536001919091019060001901611e5e565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611ec35785811a826020860101536001919091019060001901611ea1565b5050506028810160405292915050565b828054611edf906124ef565b90600052602060002090601f016020900481019282611f015760008555611f47565b82601f10611f1a57805160ff1916838001178555611f47565b82800160010185558215611f47579182015b82811115611f47578251825591602001919060010190611f2c565b50611f53929150611f57565b5090565b5b80821115611f535760008155600101611f58565b600067ffffffffffffffff80841115611f8757611f8761252a565b604051601f8501601f19908116603f01168101908282118183101715611faf57611faf61252a565b81604052809350858152868686011115611fc857600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611ff357600080fd5b61200283833560208501611f6c565b9392505050565b80356fffffffffffffffffffffffffffffffff81168114611af557600080fd5b803567ffffffffffffffff81168114611af557600080fd5b60006020828403121561205357600080fd5b813561200281612540565b60006020828403121561207057600080fd5b813561200281612558565b60006020828403121561208d57600080fd5b815161200281612558565b6000602082840312156120aa57600080fd5b813567ffffffffffffffff808211156120c257600080fd5b9083019061010082860312156120d757600080fd5b6120df612473565b82358152602083013560208201526040830135604082015261210360608401612009565b606082015260808301358281111561211a57600080fd5b61212687828601611fe2565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b60006020828403121561216857600080fd5b5035919050565b60006020828403121561218157600080fd5b5051919050565b6000806000806000608086880312156121a057600080fd5b6121a986612029565b945060208601356121b981612540565b9350604086013567ffffffffffffffff808211156121d657600080fd5b818801915088601f8301126121ea57600080fd5b8135818111156121f957600080fd5b89602082850101111561220b57600080fd5b602083019550809450505050606086013561222581612540565b809150509295509295909350565b60008060006060848603121561224857600080fd5b61225184612029565b9250602084013567ffffffffffffffff81111561226d57600080fd5b8401601f8101861361227e57600080fd5b61228d86823560208401611f6c565b925050604084013561229e81612540565b809150509250925092565b600081518084526122c18160208601602086016124c3565b601f01601f19169290920160200192915050565b600083516122e78184602088016124c3565b8351908301906122fb8183602088016124c3565b01949350505050565b60008651612316818460208b016124c3565b86519083019061232a818360208b016124c3565b865191019061233d818360208a016124c3565b85519101906123508183602089016124c3565b84519101906123638183602088016124c3565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff831660208201526060604082015260006123a160608301846122a9565b95945050505050565b60608101818360005b60038110156123d25781518352602092830192909101906001016123b3565b50505092915050565b60208101600283106123fd57634e487b7160e01b600052602160045260246000fd5b91905290565b60208152600061200260208301846122a9565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261245a60e08401826122a9565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff811182821017156124975761249761252a565b60405290565b600082198211156124be57634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156124de5781810151838201526020016124c6565b8381111561150f5750506000910152565b600181811c9082168061250357607f821691505b6020821081141561252457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461255557600080fd5b50565b801515811461255557600080fdfea2646970667358221220931b60c93c86e30e821a44bca503fa61cc90805a2d4a39b5dafcd1751835fa3864736f6c63430008070033';

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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2TBridgeMain> {
    return super.deploy(_hasher3, overrides || {}) as Promise<MystikoV2TBridgeMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, overrides || {});
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
