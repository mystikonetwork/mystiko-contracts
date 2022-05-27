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
        internalType: 'address',
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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790557f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160015534801561005a57600080fd5b50604051620024853803806200248583398101604081905261007b916100ae565b600b80546001600160a01b03199081163317909155600280546001600160a01b03909316929091169190911790556100de565b6000602082840312156100c057600080fd5b81516001600160a01b03811681146100d757600080fd5b9392505050565b61239780620000ee6000396000f3fe60806040526004361061018b5760003560e01c806399383f78116100d6578063ce7461021161007f578063ed6ea33a11610059578063ed6ea33a14610459578063efbfb2ae14610478578063f4ad17c61461048d57600080fd5b8063ce746102146103fc578063cfc7e2da14610424578063e19abef81461043957600080fd5b8063a3bc64f2116100b0578063a3bc64f21461039c578063b4318ead146103bc578063babc2044146103dc57600080fd5b806399383f78146103565780639a03636c146103765780639c649fdf1461038957600080fd5b80633fe3347a116101385780635e10b2b7116101125780635e10b2b714610301578063825b5f8d14610321578063897b06371461033657600080fd5b80633fe3347a14610295578063521ff057146102c25780635898a0a8146102e257600080fd5b80632421e155116101695780632421e155146101f257806330d780361461024a57806334c33e831461027557600080fd5b806306394c9b14610190578063153dc450146101b257806319e75d6e146101d2575b600080fd5b34801561019c57600080fd5b506101b06101ab366004611eff565b6104a2565b005b3480156101be57600080fd5b506101b06101cd3660046120b7565b610514565b3480156101de57600080fd5b506101b06101ed3660046120b7565b610564565b3480156101fe57600080fd5b5060408051808201909152600581527f63656c657200000000000000000000000000000000000000000000000000000060208201525b604051610241919061224e565b60405180910390f35b34801561025657600080fd5b50600054600160a01b900460ff165b6040519015158152602001610241565b34801561028157600080fd5b506101b0610290366004611eff565b6105b4565b3480156102a157600080fd5b5060408051808201909152600481526336b0b4b760e11b6020820152610234565b3480156102ce57600080fd5b506101b06102dd3660046120b7565b610621565b3480156102ee57600080fd5b506009545b604051908152602001610241565b34801561030d57600080fd5b506101b061031c3660046120b7565b6106c1565b34801561032d57600080fd5b50600a546102f3565b34801561034257600080fd5b506101b06103513660046120b7565b610711565b34801561036257600080fd5b506101b0610371366004611fbf565b610761565b6101b0610384366004611ff9565b6107ca565b610265610397366004611f1a565b610aff565b3480156103a857600080fd5b506101b06103b7366004611eff565b610bb8565b3480156103c857600080fd5b506101b06103d7366004611fbf565b610c25565b3480156103e857600080fd5b506101b06103f73660046120e9565b610c8e565b34801561040857600080fd5b506000546040516001600160a01b039091168152602001610241565b34801561043057600080fd5b506006546102f3565b34801561044557600080fd5b506101b0610454366004611eff565b610d3d565b34801561046557600080fd5b50600b54600160a01b900460ff16610265565b34801561048457600080fd5b506007546102f3565b34801561049957600080fd5b506008546102f3565b600b546001600160a01b031633146104f25760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b0316331461055f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600955565b600b546001600160a01b031633146105af5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600755565b600b546001600160a01b031633146105ff5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b0316331461066c5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600081116106bc5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c7570206665650060448201526064016104e9565b600a55565b600b546001600160a01b0316331461070c5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600855565b600b546001600160a01b0316331461075c5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600655565b600b546001600160a01b031633146107ac5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600b8054911515600160a01b0260ff60a01b19909216919091179055565b600b54600160a01b900460ff16156108245760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c6564000000000000000000000060448201526064016104e9565b600654815110156108775760405162461bcd60e51b815260206004820152600e60248201527f616d6f756e7420746f6f2066657700000000000000000000000000000000000060448201526064016104e9565b6007548160a0015110156108cd5760405162461bcd60e51b815260206004820152601260248201527f6272696467652066656520746f6f20666577000000000000000000000000000060448201526064016104e9565b6009548160c0015110156109235760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f2066657700000000000000000000000060448201526064016104e9565b600a548160e0015110156109795760405162461bcd60e51b815260206004820152601260248201527f726f6c6c75702066656520746f6f20666577000000000000000000000000000060448201526064016104e9565b6000610992826040015183600001518460600151610daa565b9050808260200151146109e75760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f72726563740000000000000060448201526064016104e9565b6109f033610f30565b15610a3d5760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e65642061646472657373000000000000000000000000000060448201526064016104e9565b60035460e083015160c08401518451610a78936001600160a01b03169291610a64916122e8565b610a6e91906122e8565b8460a00151610fd1565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610abb826110d2565b9050610acb8460a0015182611141565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b6005546000906001600160a01b03163314610b5c5760405162461bcd60e51b815260206004820152601e60248201527f6d73672073656e646572206973206e6f74206272696467652070726f7879000060448201526064016104e9565b6000610b9d85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111c492505050565b9050610bab8688858461128c565b5060019695505050505050565b600b546001600160a01b03163314610c035760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610c705760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b60008054911515600160a01b0260ff60a01b19909216919091179055565b600b546001600160a01b03163314610cd95760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b6003805467ffffffffffffffff909316600160a01b027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff90931692909217909155600480546001600160a01b039092166001600160a01b0319909216919091179055565b600b546001600160a01b03163314610d885760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104e9565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60006001548410610e095760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b60648201526084016104e9565b6001548310610e805760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a45000000000000000000000000000000000000000000000000000060648201526084016104e9565b60025460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610ed89160040161221d565b60206040518083038186803b158015610ef057600080fd5b505afa158015610f04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2891906120d0565b949350505050565b60008054600160a01b900460ff1615610f4b57506000919050565b60005460405163df592f7d60e01b81526001600160a01b03848116600483015290911690819063df592f7d9060240160206040518083038186803b158015610f9257600080fd5b505afa158015610fa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fca9190611fdc565b9392505050565b610fdb81836122e8565b34146110295760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064016104e9565b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114611076576040519150601f19603f3d011682016040523d82523d6000602084013e61107b565b606091505b50509050806110cc5760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c65640000000000000000000060448201526064016104e9565b50505050565b6060806110e2836000015161146c565b6110ef846020015161146c565b6110fc856040015161146c565b611109866060015161146c565b6111168760800151611504565b60405160200161112a959493929190612177565b60408051601f198184030181529190529392505050565b60055460048054600354604051634f9e72ad60e11b81526001600160a01b0394851694639f3ce55a94889461118e94921692600160a01b90920467ffffffffffffffff16918891016121e2565b6000604051808303818588803b1580156111a757600080fd5b505af11580156111bb573d6000803e3d6000fd5b50505050505050565b6111f66040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6112286040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6000611234848261153b565b9083529050611243848261153b565b60208401919091529050611257848261153b565b6040840191909152905061126b848261153b565b6060840191909152905061127f848261166c565b5060808301525092915050565b6004546001600160a01b038481169116146112e95760405162461bcd60e51b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d617463686564000060448201526064016104e9565b60035467ffffffffffffffff858116600160a01b909204161461134e5760405162461bcd60e51b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d6174636865640000000000000060448201526064016104e9565b805161139c5760405162461bcd60e51b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e20300060448201526064016104e9565b6003546040516378d60cd760e01b81526001600160a01b03909116906378d60cd7906113ce9084908690600401612261565b602060405180830381600087803b1580156113e857600080fd5b505af11580156113fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114209190611fdc565b6110cc5760405162461bcd60e51b815260206004820152601260248201527f63616c6c20656e7175657565206572726f72000000000000000000000000000060448201526064016104e9565b60606001600160ff1b038211156114c55760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e6765000000000060448201526064016104e9565b60405160208082526000601f5b828210156114f45785811a8260208601015360019190910190600019016114d2565b5050506040818101905292915050565b805160609061151281611779565b83604051602001611524929190612148565b604051602081830303815290604052915050919050565b600080835183602061154d91906122e8565b1115801561156457506115618360206122e8565b83105b6115bc5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b60648201526084016104e9565b600060405160206000600182038760208a0101515b838310156115f15780821a838601536001830192506001820391506115d1565b50505081016040525190506001600160ff1b038111156116535760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e676500000000000000000060448201526064016104e9565b8061165f8560206122e8565b92509250505b9250929050565b606060008061167b8585611848565b865190955090915061168d82866122e8565b111580156116a357506116a081856122e8565b84105b6116fb5760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b60648201526084016104e9565b60608115801561171657604051915060208201604052611760565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561174f578051835260209283019201611737565b5050848452601f01601f1916604052505b508061176c83876122e8565b9350935050509250929050565b606060fd8267ffffffffffffffff1610156117ae57604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff16116117fe576117ce60fd60f81b611a4e565b6117d783611a75565b6040516020016117e8929190612148565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff161161182957611820607f60f91b611a4e565b6117d783611ab8565b61183a6001600160f81b0319611a4e565b6117d783611afb565b919050565b60008060006118578585611b3e565b94509050600060fd60f81b6001600160f81b0319831614156118f05761187d8686611bc6565b955061ffff16905060fd8110801590611898575061ffff8111155b6118e45760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e67650060448201526064016104e9565b92508391506116659050565b607f60f91b6001600160f81b03198316141561197b576119108686611c7f565b955063ffffffff16905061ffff8111801561192f575063ffffffff8111155b6118e45760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016104e9565b6001600160f81b031980831614156119f8576119978686611d51565b955067ffffffffffffffff16905063ffffffff81116118e45760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016104e9565b5060f881901c60fd81106118e45760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016104e9565b60408051600181526001600160f81b031983166020820152602181019091526060906117a8565b6040516002808252606091906000601f5b82821015611aa85785811a826020860101536001919091019060001901611a86565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611aeb5785811a826020860101536001919091019060001901611ac9565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611b2e5785811a826020860101536001919091019060001901611b0c565b5050506028810160405292915050565b6000808351836001611b5091906122e8565b11158015611b675750611b648360016122e8565b83105b611bb35760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d60448201526064016104e9565b838301602001518061165f8560016122e8565b6000808351836002611bd891906122e8565b11158015611bef5750611bec8360026122e8565b83105b611c465760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016104e9565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261165f91906122e8565b6000808351836004611c9191906122e8565b11158015611ca85750611ca58360046122e8565b83105b611cff5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016104e9565b600060405160046000600182038760208a0101515b83831015611d345780821a83860153600183019250600182039150611d14565b50505081810160405260200390035190508061165f8560046122e8565b6000808351836008611d6391906122e8565b11158015611d7a5750611d778360086122e8565b83105b611dd15760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016104e9565b600060405160086000600182038760208a0101515b83831015611e065780821a83860153600183019250600182039150611de6565b50505081810160405260200390035190508061165f8560086122e8565b80356001600160a01b038116811461184357600080fd5b600082601f830112611e4b57600080fd5b813567ffffffffffffffff80821115611e6657611e6661233a565b604051601f8301601f19908116603f01168101908282118183101715611e8e57611e8e61233a565b81604052838152866020858801011115611ea757600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356fffffffffffffffffffffffffffffffff8116811461184357600080fd5b803567ffffffffffffffff8116811461184357600080fd5b600060208284031215611f1157600080fd5b610fca82611e23565b600080600080600060808688031215611f3257600080fd5b611f3b86611e23565b9450611f4960208701611ee7565b9350604086013567ffffffffffffffff80821115611f6657600080fd5b818801915088601f830112611f7a57600080fd5b813581811115611f8957600080fd5b896020828501011115611f9b57600080fd5b602083019550809450505050611fb360608701611e23565b90509295509295909350565b600060208284031215611fd157600080fd5b8135610fca81612350565b600060208284031215611fee57600080fd5b8151610fca81612350565b60006020828403121561200b57600080fd5b813567ffffffffffffffff8082111561202357600080fd5b90830190610100828603121561203857600080fd5b6120406122be565b82358152602083013560208201526040830135604082015261206460608401611ec7565b606082015260808301358281111561207b57600080fd5b61208787828601611e3a565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b6000602082840312156120c957600080fd5b5035919050565b6000602082840312156120e257600080fd5b5051919050565b600080604083850312156120fc57600080fd5b61210583611ee7565b915061211360208401611e23565b90509250929050565b6000815180845261213481602086016020860161230e565b601f01601f19169290920160200192915050565b6000835161215a81846020880161230e565b83519083019061216e81836020880161230e565b01949350505050565b60008651612189818460208b0161230e565b86519083019061219d818360208b0161230e565b86519101906121b0818360208a0161230e565b85519101906121c381836020890161230e565b84519101906121d681836020880161230e565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff83166020820152606060408201526000612214606083018461211c565b95945050505050565b60608101818360005b6003811015612245578151835260209283019290910190600101612226565b50505092915050565b602081526000610fca602083018461211c565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526122a560e084018261211c565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff811182821017156122e2576122e261233a565b60405290565b6000821982111561230957634e487b7160e01b600052601160045260246000fd5b500190565b60005b83811015612329578181015183820152602001612311565b838111156110cc5750506000910152565b634e487b7160e01b600052604160045260246000fd5b801515811461235e57600080fd5b5056fea2646970667358221220fbeb4af99a8b5388f9a402eaf0a7aff2073bf4df5605125f0df6c0a357affa8a64736f6c63430008070033';

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
