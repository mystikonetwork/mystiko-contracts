/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2CelerMain, MystikoV2CelerMainInterface } from '../MystikoV2CelerMain';

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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790553480156200003757600080fd5b506040516200263a3803806200263a8339810160408190526200005a916200008e565b600b80546001600160a01b03199081163317909155600180546001600160a01b0390931692909116919091179055620000c0565b600060208284031215620000a157600080fd5b81516001600160a01b0381168114620000b957600080fd5b9392505050565b61256a80620000d06000396000f3fe6080604052600436106101965760003560e01c8063830d9ebe116100e1578063ddac5dc11161008a578063ec571c6a11610064578063ec571c6a14610460578063ed6ea33a14610480578063efbfb2ae1461049f578063f4ad17c6146104b457600080fd5b8063ddac5dc1146103ee578063e19abef814610420578063ea0cde851461044057600080fd5b80639c649fdf116100bb5780639c649fdf146103a6578063a3bc64f2146103b9578063cfc7e2da146103d957600080fd5b8063830d9ebe14610342578063897b0637146103735780639a03636c1461039357600080fd5b80633fe3347a116101435780635e10b2b71161011d5780635e10b2b7146102ed5780637d2c85201461030d578063825b5f8d1461032d57600080fd5b80633fe3347a14610292578063521ff057146102ae5780635898a0a8146102ce57600080fd5b806319e75d6e1161017457806319e75d6e146101fd5780632421e1551461021d57806334c33e831461027257600080fd5b806306394c9b1461019b57806306b2ad59146101bd578063153dc450146101dd575b600080fd5b3480156101a757600080fd5b506101bb6101b636600461200f565b6104c9565b005b3480156101c957600080fd5b506101bb6101d83660046120d7565b61053b565b3480156101e957600080fd5b506101bb6101f83660046121cf565b6105de565b34801561020957600080fd5b506101bb6102183660046121cf565b61062e565b34801561022957600080fd5b50604080518082018252600581527f63656c65720000000000000000000000000000000000000000000000000000006020820152905161026991906123d1565b60405180910390f35b34801561027e57600080fd5b506101bb61028d36600461200f565b61067e565b34801561029e57600080fd5b50600160405161026991906123a9565b3480156102ba57600080fd5b506101bb6102c93660046121cf565b610717565b3480156102da57600080fd5b506009545b604051908152602001610269565b3480156102f957600080fd5b506101bb6103083660046121cf565b6107b7565b34801561031957600080fd5b506101bb610328366004612201565b610807565b34801561033957600080fd5b50600a546102df565b34801561034e57600080fd5b5060005461036390600160a01b900460ff1681565b6040519015158152602001610269565b34801561037f57600080fd5b506101bb61038e3660046121cf565b6108c4565b6101bb6103a1366004612111565b610914565b6103636103b436600461202c565b610c49565b3480156103c557600080fd5b506101bb6103d436600461200f565b610d02565b3480156103e557600080fd5b506006546102df565b3480156103fa57600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610269565b34801561042c57600080fd5b506101bb61043b36600461200f565b610d6f565b34801561044c57600080fd5b506101bb61045b3660046120d7565b610ddc565b34801561046c57600080fd5b50600054610408906001600160a01b031681565b34801561048c57600080fd5b50600b54600160a01b900460ff16610363565b3480156104ab57600080fd5b506007546102df565b3480156104c057600080fd5b506008546102df565b600b546001600160a01b031633146105195760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031633146105865760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a443906105d390831515815260200190565b60405180910390a150565b600b546001600160a01b031633146106295760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600955565b600b546001600160a01b031633146106795760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600755565b600b546001600160a01b031633146106c95760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016105d3565b600b546001600160a01b031633146107625760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600081116107b25760405162461bcd60e51b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c757020666565006044820152606401610510565b600a55565b600b546001600160a01b031633146108025760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600855565b600b546001600160a01b031633146108525760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600280547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff861602179055815161089f906003906020850190611ea1565b50600480546001600160a01b0319166001600160a01b03929092169190911790555050565b600b546001600160a01b0316331461090f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600655565b600b54600160a01b900460ff161561096e5760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c656400000000000000000000006044820152606401610510565b600654815110156109c15760405162461bcd60e51b815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c000000000000000000000000000000006044820152606401610510565b6007548160a001511015610a175760405162461bcd60e51b815260206004820152601260248201527f6272696467652066656520746f6f2066657700000000000000000000000000006044820152606401610510565b6009548160c001511015610a6d5760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f206665770000000000000000000000006044820152606401610510565b600a548160e001511015610ac35760405162461bcd60e51b815260206004820152601260248201527f726f6c6c75702066656520746f6f2066657700000000000000000000000000006044820152606401610510565b6000610adc826040015183600001518460600151610e45565b905080826020015114610b315760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f7272656374000000000000006044820152606401610510565b610b3a33611019565b15610b875760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e6564206164647265737300000000000000000000000000006044820152606401610510565b60025460e083015160c08401518451610bc2936001600160a01b03169291610bae9161246b565b610bb8919061246b565b8460a001516110b7565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610c05826111b8565b9050610c158460a0015182611227565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b6005546000906001600160a01b03163314610ca65760405162461bcd60e51b815260206004820152601e60248201527f6d73672073656e646572206973206e6f74206272696467652070726f787900006044820152606401610510565b6000610ce785858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112aa92505050565b9050610cf586888584611372565b5060019695505050505050565b600b546001600160a01b03163314610d4d5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610dba5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610e275760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610510565b600b8054911515600160a01b0260ff60a01b19909216919091179055565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018410610ec25760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b6064820152608401610510565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff1610610f695760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a4500000000000000000000000000000000000000000000000000006064820152608401610510565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610fc191600401612378565b60206040518083038186803b158015610fd957600080fd5b505afa158015610fed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101191906121e8565b949350505050565b60008054600160a01b900460ff161561103457506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b15801561107957600080fd5b505afa15801561108d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b191906120f4565b92915050565b6110c1818361246b565b341461110f5760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e00000000000000000000000000006044820152606401610510565b6000836001600160a01b03168360405160006040518083038185875af1925050503d806000811461115c576040519150601f19603f3d011682016040523d82523d6000602084013e611161565b606091505b50509050806111b25760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c6564000000000000000000006044820152606401610510565b50505050565b6060806111c883600001516114ec565b6111d584602001516114ec565b6111e285604001516114ec565b6111ef86606001516114ec565b6111fc8760800151611584565b6040516020016112109594939291906122d2565b60408051601f198184030181529190529392505050565b60055460048054600254604051634f9e72ad60e11b81526001600160a01b0394851694639f3ce55a94889461127494921692600160a01b90920467ffffffffffffffff169188910161233d565b6000604051808303818588803b15801561128d57600080fd5b505af11580156112a1573d6000803e3d6000fd5b50505050505050565b6112dc6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b61130e6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b600061131a84826115bb565b908352905061132984826115bb565b6020840191909152905061133d84826115bb565b6040840191909152905061135184826115bb565b6060840191909152905061136584826116ec565b5060808301525092915050565b6004546001600160a01b038481169116146113cf5760405162461bcd60e51b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d61746368656400006044820152606401610510565b60025467ffffffffffffffff858116600160a01b90920416146114345760405162461bcd60e51b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d617463686564000000000000006044820152606401610510565b80516114825760405162461bcd60e51b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e2030006044820152606401610510565b6002546040516378d60cd760e01b81526001600160a01b03909116906378d60cd7906114b490849086906004016123e4565b600060405180830381600087803b1580156114ce57600080fd5b505af11580156114e2573d6000803e3d6000fd5b5050505050505050565b60606001600160ff1b038211156115455760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401610510565b60405160208082526000601f5b828210156115745785811a826020860101536001919091019060001901611552565b5050506040818101905292915050565b8051606090611592816117f9565b836040516020016115a49291906122a3565b604051602081830303815290604052915050919050565b60008083518360206115cd919061246b565b111580156115e457506115e183602061246b565b83105b61163c5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401610510565b600060405160206000600182038760208a0101515b838310156116715780821a83860153600183019250600182039150611651565b50505081016040525190506001600160ff1b038111156116d35760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401610510565b806116df85602061246b565b92509250505b9250929050565b60606000806116fb85856118c6565b865190955090915061170d828661246b565b111580156117235750611720818561246b565b84105b61177b5760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401610510565b606081158015611796576040519150602082016040526117e0565b6040519150601f8316801560200281840101848101888315602002848c0101015b818310156117cf5780518352602092830192016117b7565b5050848452601f01601f1916604052505b50806117ec838761246b565b9350935050509250929050565b606060fd8267ffffffffffffffff16101561182c57604080516001815260f884901b6020820152602181019091526110b1565b61ffff8267ffffffffffffffff161161187c5761184c60fd60f81b611acc565b61185583611af3565b6040516020016118669291906122a3565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff16116118a75761189e607f60f91b611acc565b61185583611b36565b6118b86001600160f81b0319611acc565b61185583611b79565b919050565b60008060006118d58585611bbc565b94509050600060fd60f81b6001600160f81b03198316141561196e576118fb8686611c44565b955061ffff16905060fd8110801590611916575061ffff8111155b6119625760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401610510565b92508391506116e59050565b607f60f91b6001600160f81b0319831614156119f95761198e8686611cfd565b955063ffffffff16905061ffff811180156119ad575063ffffffff8111155b6119625760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610510565b6001600160f81b03198083161415611a7657611a158686611dcf565b955067ffffffffffffffff16905063ffffffff81116119625760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610510565b5060f881901c60fd81106119625760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610510565b60408051600181526001600160f81b031983166020820152602181019091526060906110b1565b6040516002808252606091906000601f5b82821015611b265785811a826020860101536001919091019060001901611b04565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611b695785811a826020860101536001919091019060001901611b47565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611bac5785811a826020860101536001919091019060001901611b8a565b5050506028810160405292915050565b6000808351836001611bce919061246b565b11158015611be55750611be283600161246b565b83105b611c315760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401610510565b83830160200151806116df85600161246b565b6000808351836002611c56919061246b565b11158015611c6d5750611c6a83600261246b565b83105b611cc45760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610510565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026116df919061246b565b6000808351836004611d0f919061246b565b11158015611d265750611d2383600461246b565b83105b611d7d5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610510565b600060405160046000600182038760208a0101515b83831015611db25780821a83860153600183019250600182039150611d92565b5050508181016040526020039003519050806116df85600461246b565b6000808351836008611de1919061246b565b11158015611df85750611df583600861246b565b83105b611e4f5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610510565b600060405160086000600182038760208a0101515b83831015611e845780821a83860153600183019250600182039150611e64565b5050508181016040526020039003519050806116df85600861246b565b828054611ead906124bd565b90600052602060002090601f016020900481019282611ecf5760008555611f15565b82601f10611ee857805160ff1916838001178555611f15565b82800160010185558215611f15579182015b82811115611f15578251825591602001919060010190611efa565b50611f21929150611f25565b5090565b5b80821115611f215760008155600101611f26565b600067ffffffffffffffff80841115611f5557611f556124f8565b604051601f8501601f19908116603f01168101908282118183101715611f7d57611f7d6124f8565b81604052809350858152868686011115611f9657600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611fc157600080fd5b611fd083833560208501611f3a565b9392505050565b80356fffffffffffffffffffffffffffffffff811681146118c157600080fd5b803567ffffffffffffffff811681146118c157600080fd5b60006020828403121561202157600080fd5b8135611fd08161250e565b60008060008060006080868803121561204457600080fd5b853561204f8161250e565b945061205d60208701611ff7565b9350604086013567ffffffffffffffff8082111561207a57600080fd5b818801915088601f83011261208e57600080fd5b81358181111561209d57600080fd5b8960208285010111156120af57600080fd5b60208301955080945050505060608601356120c98161250e565b809150509295509295909350565b6000602082840312156120e957600080fd5b8135611fd081612526565b60006020828403121561210657600080fd5b8151611fd081612526565b60006020828403121561212357600080fd5b813567ffffffffffffffff8082111561213b57600080fd5b90830190610100828603121561215057600080fd5b612158612441565b82358152602083013560208201526040830135604082015261217c60608401611fd7565b606082015260808301358281111561219357600080fd5b61219f87828601611fb0565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b6000602082840312156121e157600080fd5b5035919050565b6000602082840312156121fa57600080fd5b5051919050565b60008060006060848603121561221657600080fd5b61221f84611ff7565b9250602084013567ffffffffffffffff81111561223b57600080fd5b8401601f8101861361224c57600080fd5b61225b86823560208401611f3a565b925050604084013561226c8161250e565b809150509250925092565b6000815180845261228f816020860160208601612491565b601f01601f19169290920160200192915050565b600083516122b5818460208801612491565b8351908301906122c9818360208801612491565b01949350505050565b600086516122e4818460208b01612491565b8651908301906122f8818360208b01612491565b865191019061230b818360208a01612491565b855191019061231e818360208901612491565b8451910190612331818360208801612491565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820152600061236f6060830184612277565b95945050505050565b60608101818360005b60038110156123a0578151835260209283019290910190600101612381565b50505092915050565b60208101600283106123cb57634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000611fd06020830184612277565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261242860e0840182612277565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff81118282101715612465576124656124f8565b60405290565b6000821982111561248c57634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156124ac578181015183820152602001612494565b838111156111b25750506000910152565b600181811c908216806124d157607f821691505b602082108114156124f257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461252357600080fd5b50565b801515811461252357600080fdfea2646970667358221220280b47865c53d0e182871f014dd0af20190d856e7475bbe76afd9d10ecf82c5164736f6c63430008070033';

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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2CelerMain> {
    return super.deploy(_hasher3, overrides || {}) as Promise<MystikoV2CelerMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, overrides || {});
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
