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
    name: 'updateSanctionContractAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790553480156200003757600080fd5b5060405162002647380380620026478339810160408190526200005a916200008e565b600b80546001600160a01b03199081163317909155600180546001600160a01b0390931692909116919091179055620000c0565b600060208284031215620000a157600080fd5b81516001600160a01b0381168114620000b957600080fd5b9392505050565b61257780620000d06000396000f3fe6080604052600436106101965760003560e01c806382d21cd8116100e1578063ddac5dc11161008a578063ec571c6a11610064578063ec571c6a1461046d578063ed6ea33a1461048d578063efbfb2ae146104ac578063f4ad17c6146104c157600080fd5b8063ddac5dc1146103fb578063e19abef81461042d578063ea0cde851461044d57600080fd5b80639a03636c116100bb5780639a03636c146103b3578063a3bc64f2146103c6578063cfc7e2da146103e657600080fd5b806382d21cd814610342578063830d9ebe14610372578063897b06371461039357600080fd5b80633fe3347a116101435780635e10b2b71161011d5780635e10b2b7146102ed5780637d2c85201461030d578063825b5f8d1461032d57600080fd5b80633fe3347a14610292578063521ff057146102ae5780635898a0a8146102ce57600080fd5b806319e75d6e1161017457806319e75d6e146101fd5780632421e1551461021d57806334c33e831461027257600080fd5b806306394c9b1461019b57806306b2ad59146101bd578063153dc450146101dd575b600080fd5b3480156101a757600080fd5b506101bb6101b636600461201c565b6104d6565b005b3480156101c957600080fd5b506101bb6101d8366004612039565b610548565b3480156101e957600080fd5b506101bb6101f8366004612131565b6105eb565b34801561020957600080fd5b506101bb610218366004612131565b61063b565b34801561022957600080fd5b50604080518082018252600781527f74627269646765000000000000000000000000000000000000000000000000006020820152905161026991906123de565b60405180910390f35b34801561027e57600080fd5b506101bb61028d36600461201c565b61068b565b34801561029e57600080fd5b50600160405161026991906123b6565b3480156102ba57600080fd5b506101bb6102c9366004612131565b610724565b3480156102da57600080fd5b506009545b604051908152602001610269565b3480156102f957600080fd5b506101bb610308366004612131565b6107c4565b34801561031957600080fd5b506101bb61032836600461220e565b610814565b34801561033957600080fd5b50600a546102df565b34801561034e57600080fd5b5061036261035d366004612163565b6108d1565b6040519015158152602001610269565b34801561037e57600080fd5b5060005461036290600160a01b900460ff1681565b34801561039f57600080fd5b506101bb6103ae366004612131565b61098a565b6101bb6103c1366004612073565b6109da565b3480156103d257600080fd5b506101bb6103e136600461201c565b610d0f565b3480156103f257600080fd5b506006546102df565b34801561040757600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610269565b34801561043957600080fd5b506101bb61044836600461201c565b610d7c565b34801561045957600080fd5b506101bb610468366004612039565b610de9565b34801561047957600080fd5b50600054610415906001600160a01b031681565b34801561049957600080fd5b50600b54600160a01b900460ff16610362565b3480156104b857600080fd5b506007546102df565b3480156104cd57600080fd5b506008546102df565b600b546001600160a01b031633146105265760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031633146105935760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a443906105e090831515815260200190565b60405180910390a150565b600b546001600160a01b031633146106365760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600955565b600b546001600160a01b031633146106865760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600755565b600b546001600160a01b031633146106d65760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016105e0565b600b546001600160a01b0316331461076f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600081116107bf5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c75702066656500604482015260640161051d565b600a55565b600b546001600160a01b0316331461080f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600855565b600b546001600160a01b0316331461085f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600280547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff86160217905581516108ac906003906020850190611eae565b50600480546001600160a01b0319166001600160a01b03929092169190911790555050565b6005546000906001600160a01b0316331461092e5760405162461bcd60e51b815260206004820152601e60248201527f6d73672073656e646572206973206e6f74206272696467652070726f78790000604482015260640161051d565b600061096f85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e5292505050565b905061097d87878584610f1a565b5060019695505050505050565b600b546001600160a01b031633146109d55760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600655565b600b54600160a01b900460ff1615610a345760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c65640000000000000000000000604482015260640161051d565b60065481511015610a875760405162461bcd60e51b815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c00000000000000000000000000000000604482015260640161051d565b6007548160a001511015610add5760405162461bcd60e51b815260206004820152601260248201527f6272696467652066656520746f6f206665770000000000000000000000000000604482015260640161051d565b6009548160c001511015610b335760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f20666577000000000000000000000000604482015260640161051d565b600a548160e001511015610b895760405162461bcd60e51b815260206004820152601260248201527f726f6c6c75702066656520746f6f206665770000000000000000000000000000604482015260640161051d565b6000610ba2826040015183600001518460600151611094565b905080826020015114610bf75760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f727265637400000000000000604482015260640161051d565b610c0033611268565b15610c4d5760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e656420616464726573730000000000000000000000000000604482015260640161051d565b60025460e083015160c08401518451610c88936001600160a01b03169291610c7491612478565b610c7e9190612478565b8460a00151611306565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610ccb82611407565b9050610cdb8460a0015182611476565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b600b546001600160a01b03163314610d5a5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610dc75760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610e345760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161051d565b600b8054911515600160a01b0260ff60a01b19909216919091179055565b610e846040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b610eb66040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6000610ec284826114f9565b9083529050610ed184826114f9565b60208401919091529050610ee584826114f9565b60408401919091529050610ef984826114f9565b60608401919091529050610f0d848261162a565b5060808301525092915050565b6004546001600160a01b03848116911614610f775760405162461bcd60e51b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d6174636865640000604482015260640161051d565b60025467ffffffffffffffff858116600160a01b9092041614610fdc5760405162461bcd60e51b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d61746368656400000000000000604482015260640161051d565b805161102a5760405162461bcd60e51b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e203000604482015260640161051d565b6002546040516378d60cd760e01b81526001600160a01b03909116906378d60cd79061105c90849086906004016123f1565b600060405180830381600087803b15801561107657600080fd5b505af115801561108a573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184106111115760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b606482015260840161051d565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff16106111b85760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a450000000000000000000000000000000000000000000000000000606482015260840161051d565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e89161121091600401612385565b60206040518083038186803b15801561122857600080fd5b505afa15801561123c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611260919061214a565b949350505050565b60008054600160a01b900460ff161561128357506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b1580156112c857600080fd5b505afa1580156112dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113009190612056565b92915050565b6113108183612478565b341461135e5760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e0000000000000000000000000000604482015260640161051d565b6000836001600160a01b03168360405160006040518083038185875af1925050503d80600081146113ab576040519150601f19603f3d011682016040523d82523d6000602084013e6113b0565b606091505b50509050806114015760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c656400000000000000000000604482015260640161051d565b50505050565b6060806114178360000151611737565b6114248460200151611737565b6114318560400151611737565b61143e8660600151611737565b61144b87608001516117cf565b60405160200161145f9594939291906122df565b60408051601f198184030181529190529392505050565b6005546004805460025460405163c81739cd60e01b81526001600160a01b039485169463c81739cd9488946114c394921692600160a01b90920467ffffffffffffffff169188910161234a565b6000604051808303818588803b1580156114dc57600080fd5b505af11580156114f0573d6000803e3d6000fd5b50505050505050565b600080835183602061150b9190612478565b11158015611522575061151f836020612478565b83105b61157a5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161051d565b600060405160206000600182038760208a0101515b838310156115af5780821a8386015360018301925060018203915061158f565b50505081016040525190506001600160ff1b038111156116115760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161051d565b8061161d856020612478565b92509250505b9250929050565b60606000806116398585611806565b865190955090915061164b8286612478565b11158015611661575061165e8185612478565b84105b6116b95760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161051d565b6060811580156116d45760405191506020820160405261171e565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561170d5780518352602092830192016116f5565b5050848452601f01601f1916604052505b508061172a8387612478565b9350935050509250929050565b60606001600160ff1b038211156117905760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161051d565b60405160208082526000601f5b828210156117bf5785811a82602086010153600191909101906000190161179d565b5050506040818101905292915050565b80516060906117dd81611a0c565b836040516020016117ef9291906122b0565b604051602081830303815290604052915050919050565b60008060006118158585611ad9565b94509050600060fd60f81b6001600160f81b0319831614156118ae5761183b8686611b61565b955061ffff16905060fd8110801590611856575061ffff8111155b6118a25760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161051d565b92508391506116239050565b607f60f91b6001600160f81b031983161415611939576118ce8686611c1a565b955063ffffffff16905061ffff811180156118ed575063ffffffff8111155b6118a25760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161051d565b6001600160f81b031980831614156119b6576119558686611cec565b955067ffffffffffffffff16905063ffffffff81116118a25760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161051d565b5060f881901c60fd81106118a25760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161051d565b606060fd8267ffffffffffffffff161015611a3f57604080516001815260f884901b602082015260218101909152611300565b61ffff8267ffffffffffffffff1611611a8f57611a5f60fd60f81b611dbe565b611a6883611de5565b604051602001611a799291906122b0565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611aba57611ab1607f60f91b611dbe565b611a6883611e28565b611acb6001600160f81b0319611dbe565b611a6883611e6b565b919050565b6000808351836001611aeb9190612478565b11158015611b025750611aff836001612478565b83105b611b4e5760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161051d565b838301602001518061161d856001612478565b6000808351836002611b739190612478565b11158015611b8a5750611b87836002612478565b83105b611be15760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161051d565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261161d9190612478565b6000808351836004611c2c9190612478565b11158015611c435750611c40836004612478565b83105b611c9a5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161051d565b600060405160046000600182038760208a0101515b83831015611ccf5780821a83860153600183019250600182039150611caf565b50505081810160405260200390035190508061161d856004612478565b6000808351836008611cfe9190612478565b11158015611d155750611d12836008612478565b83105b611d6c5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161051d565b600060405160086000600182038760208a0101515b83831015611da15780821a83860153600183019250600182039150611d81565b50505081810160405260200390035190508061161d856008612478565b60408051600181526001600160f81b03198316602082015260218101909152606090611300565b6040516002808252606091906000601f5b82821015611e185785811a826020860101536001919091019060001901611df6565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611e5b5785811a826020860101536001919091019060001901611e39565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611e9e5785811a826020860101536001919091019060001901611e7c565b5050506028810160405292915050565b828054611eba906124ca565b90600052602060002090601f016020900481019282611edc5760008555611f22565b82601f10611ef557805160ff1916838001178555611f22565b82800160010185558215611f22579182015b82811115611f22578251825591602001919060010190611f07565b50611f2e929150611f32565b5090565b5b80821115611f2e5760008155600101611f33565b600067ffffffffffffffff80841115611f6257611f62612505565b604051601f8501601f19908116603f01168101908282118183101715611f8a57611f8a612505565b81604052809350858152868686011115611fa357600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611fce57600080fd5b611fdd83833560208501611f47565b9392505050565b80356fffffffffffffffffffffffffffffffff81168114611ad457600080fd5b803567ffffffffffffffff81168114611ad457600080fd5b60006020828403121561202e57600080fd5b8135611fdd8161251b565b60006020828403121561204b57600080fd5b8135611fdd81612533565b60006020828403121561206857600080fd5b8151611fdd81612533565b60006020828403121561208557600080fd5b813567ffffffffffffffff8082111561209d57600080fd5b9083019061010082860312156120b257600080fd5b6120ba61244e565b8235815260208301356020820152604083013560408201526120de60608401611fe4565b60608201526080830135828111156120f557600080fd5b61210187828601611fbd565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b60006020828403121561214357600080fd5b5035919050565b60006020828403121561215c57600080fd5b5051919050565b60008060008060006080868803121561217b57600080fd5b61218486612004565b945060208601356121948161251b565b9350604086013567ffffffffffffffff808211156121b157600080fd5b818801915088601f8301126121c557600080fd5b8135818111156121d457600080fd5b8960208285010111156121e657600080fd5b60208301955080945050505060608601356122008161251b565b809150509295509295909350565b60008060006060848603121561222357600080fd5b61222c84612004565b9250602084013567ffffffffffffffff81111561224857600080fd5b8401601f8101861361225957600080fd5b61226886823560208401611f47565b92505060408401356122798161251b565b809150509250925092565b6000815180845261229c81602086016020860161249e565b601f01601f19169290920160200192915050565b600083516122c281846020880161249e565b8351908301906122d681836020880161249e565b01949350505050565b600086516122f1818460208b0161249e565b865190830190612305818360208b0161249e565b8651910190612318818360208a0161249e565b855191019061232b81836020890161249e565b845191019061233e81836020880161249e565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820152600061237c6060830184612284565b95945050505050565b60608101818360005b60038110156123ad57815183526020928301929091019060010161238e565b50505092915050565b60208101600283106123d857634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000611fdd6020830184612284565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261243560e0840182612284565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff8111828210171561247257612472612505565b60405290565b6000821982111561249957634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156124b95781810151838201526020016124a1565b838111156114015750506000910152565b600181811c908216806124de57607f821691505b602082108114156124ff57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461253057600080fd5b50565b801515811461253057600080fdfea2646970667358221220ff1235cd0fa5999e22c1795c72229cc7e0c6c5b5e201efb29d3e7fa375fd138964736f6c63430008070033';

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
