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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb1790557f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160015534801561005a57600080fd5b50604051620024923803806200249283398101604081905261007b916100ae565b600b80546001600160a01b03199081163317909155600280546001600160a01b03909316929091169190911790556100de565b6000602082840312156100c057600080fd5b81516001600160a01b03811681146100d757600080fd5b9392505050565b6123a480620000ee6000396000f3fe60806040526004361061018b5760003560e01c8063897b0637116100d6578063ce7461021161007f578063ed6ea33a11610059578063ed6ea33a14610466578063efbfb2ae14610485578063f4ad17c61461049a57600080fd5b8063ce74610214610409578063cfc7e2da14610431578063e19abef81461044657600080fd5b8063a3bc64f2116100b0578063a3bc64f2146103a9578063b4318ead146103c9578063babc2044146103e957600080fd5b8063897b06371461035657806399383f78146103765780639a03636c1461039657600080fd5b80633fe3347a116101385780635e10b2b7116101125780635e10b2b714610301578063825b5f8d1461032157806382d21cd81461033657600080fd5b80633fe3347a14610295578063521ff057146102c25780635898a0a8146102e257600080fd5b80632421e155116101695780632421e155146101f257806330d780361461024a57806334c33e831461027557600080fd5b806306394c9b14610190578063153dc450146101b257806319e75d6e146101d2575b600080fd5b34801561019c57600080fd5b506101b06101ab366004611f0c565b6104af565b005b3480156101be57600080fd5b506101b06101cd36600461201f565b610521565b3480156101de57600080fd5b506101b06101ed36600461201f565b610571565b3480156101fe57600080fd5b5060408051808201909152600781527f746272696467650000000000000000000000000000000000000000000000000060208201525b604051610241919061225b565b60405180910390f35b34801561025657600080fd5b50600054600160a01b900460ff165b6040519015158152602001610241565b34801561028157600080fd5b506101b0610290366004611f0c565b6105c1565b3480156102a157600080fd5b5060408051808201909152600481526336b0b4b760e11b6020820152610234565b3480156102ce57600080fd5b506101b06102dd36600461201f565b61062e565b3480156102ee57600080fd5b506009545b604051908152602001610241565b34801561030d57600080fd5b506101b061031c36600461201f565b6106ce565b34801561032d57600080fd5b50600a546102f3565b34801561034257600080fd5b50610265610351366004612084565b61071e565b34801561036257600080fd5b506101b061037136600461201f565b6107d7565b34801561038257600080fd5b506101b0610391366004611f27565b610827565b6101b06103a4366004611f61565b610890565b3480156103b557600080fd5b506101b06103c4366004611f0c565b610bc5565b3480156103d557600080fd5b506101b06103e4366004611f27565b610c32565b3480156103f557600080fd5b506101b0610404366004612051565b610c9b565b34801561041557600080fd5b506000546040516001600160a01b039091168152602001610241565b34801561043d57600080fd5b506006546102f3565b34801561045257600080fd5b506101b0610461366004611f0c565b610d4a565b34801561047257600080fd5b50600b54600160a01b900460ff16610265565b34801561049157600080fd5b506007546102f3565b3480156104a657600080fd5b506008546102f3565b600b546001600160a01b031633146104ff5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b0316331461056c5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600955565b600b546001600160a01b031633146105bc5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600755565b600b546001600160a01b0316331461060c5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031633146106795760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600081116106c95760405162461bcd60e51b815260206004820152601f60248201527f696e76616c69642070656572206d696e696d616c20726f6c6c7570206665650060448201526064016104f6565b600a55565b600b546001600160a01b031633146107195760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600855565b6005546000906001600160a01b0316331461077b5760405162461bcd60e51b815260206004820152601e60248201527f6d73672073656e646572206973206e6f74206272696467652070726f7879000060448201526064016104f6565b60006107bc85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610db792505050565b90506107ca87878584610e7f565b5060019695505050505050565b600b546001600160a01b031633146108225760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600655565b600b546001600160a01b031633146108725760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600b8054911515600160a01b0260ff60a01b19909216919091179055565b600b54600160a01b900460ff16156108ea5760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c6564000000000000000000000060448201526064016104f6565b6006548151101561093d5760405162461bcd60e51b815260206004820152600e60248201527f616d6f756e7420746f6f2066657700000000000000000000000000000000000060448201526064016104f6565b6007548160a0015110156109935760405162461bcd60e51b815260206004820152601260248201527f6272696467652066656520746f6f20666577000000000000000000000000000060448201526064016104f6565b6009548160c0015110156109e95760405162461bcd60e51b815260206004820152601460248201527f6578656375746f722066656520746f6f2066657700000000000000000000000060448201526064016104f6565b600a548160e001511015610a3f5760405162461bcd60e51b815260206004820152601260248201527f726f6c6c75702066656520746f6f20666577000000000000000000000000000060448201526064016104f6565b6000610a58826040015183600001518460600151611065565b905080826020015114610aad5760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f72726563740000000000000060448201526064016104f6565b610ab6336111eb565b15610b035760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e65642061646472657373000000000000000000000000000060448201526064016104f6565b60035460e083015160c08401518451610b3e936001600160a01b03169291610b2a916122f5565b610b3491906122f5565b8460a0015161128c565b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610b8182611387565b9050610b918460a00151826113f6565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b600b546001600160a01b03163314610c105760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610c7d5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b60008054911515600160a01b0260ff60a01b19909216919091179055565b600b546001600160a01b03163314610ce65760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b6003805467ffffffffffffffff909316600160a01b027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff90931692909217909155600480546001600160a01b039092166001600160a01b0319909216919091179055565b600b546001600160a01b03163314610d955760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016104f6565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b610de96040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b610e1b6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6000610e278482611479565b9083529050610e368482611479565b60208401919091529050610e4a8482611479565b60408401919091529050610e5e8482611479565b60608401919091529050610e7284826115aa565b5060808301525092915050565b6004546001600160a01b03848116911614610edc5760405162461bcd60e51b815260206004820152601e60248201527f66726f6d2070726f78792061646472657373206e6f74206d617463686564000060448201526064016104f6565b60035467ffffffffffffffff858116600160a01b9092041614610f415760405162461bcd60e51b815260206004820152601960248201527f66726f6d20636861696e206964206e6f74206d6174636865640000000000000060448201526064016104f6565b8051610f8f5760405162461bcd60e51b815260206004820152601f60248201527f616d6f756e742073686f756c642062652067726561746572207468616e20300060448201526064016104f6565b6003546040516378d60cd760e01b81526001600160a01b03909116906378d60cd790610fc1908490869060040161226e565b602060405180830381600087803b158015610fdb57600080fd5b505af1158015610fef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110139190611f44565b61105f5760405162461bcd60e51b815260206004820152601260248201527f63616c6c20656e7175657565206572726f72000000000000000000000000000060448201526064016104f6565b50505050565b600060015484106110c45760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b60648201526084016104f6565b600154831061113b5760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a45000000000000000000000000000000000000000000000000000060648201526084016104f6565b60025460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916111939160040161222a565b60206040518083038186803b1580156111ab57600080fd5b505afa1580156111bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e39190612038565b949350505050565b60008054600160a01b900460ff161561120657506000919050565b60005460405163df592f7d60e01b81526001600160a01b03848116600483015290911690819063df592f7d9060240160206040518083038186803b15801561124d57600080fd5b505afa158015611261573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112859190611f44565b9392505050565b61129681836122f5565b34146112e45760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064016104f6565b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114611331576040519150601f19603f3d011682016040523d82523d6000602084013e611336565b606091505b505090508061105f5760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c65640000000000000000000060448201526064016104f6565b60608061139783600001516116b7565b6113a484602001516116b7565b6113b185604001516116b7565b6113be86606001516116b7565b6113cb876080015161174f565b6040516020016113df959493929190612184565b60408051601f198184030181529190529392505050565b6005546004805460035460405163c81739cd60e01b81526001600160a01b039485169463c81739cd94889461144394921692600160a01b90920467ffffffffffffffff16918891016121ef565b6000604051808303818588803b15801561145c57600080fd5b505af1158015611470573d6000803e3d6000fd5b50505050505050565b600080835183602061148b91906122f5565b111580156114a2575061149f8360206122f5565b83105b6114fa5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b60648201526084016104f6565b600060405160206000600182038760208a0101515b8383101561152f5780821a8386015360018301925060018203915061150f565b50505081016040525190506001600160ff1b038111156115915760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e676500000000000000000060448201526064016104f6565b8061159d8560206122f5565b92509250505b9250929050565b60606000806115b98585611786565b86519095509091506115cb82866122f5565b111580156115e157506115de81856122f5565b84105b6116395760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b60648201526084016104f6565b6060811580156116545760405191506020820160405261169e565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561168d578051835260209283019201611675565b5050848452601f01601f1916604052505b50806116aa83876122f5565b9350935050509250929050565b60606001600160ff1b038211156117105760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e6765000000000060448201526064016104f6565b60405160208082526000601f5b8282101561173f5785811a82602086010153600191909101906000190161171d565b5050506040818101905292915050565b805160609061175d8161198c565b8360405160200161176f929190612155565b604051602081830303815290604052915050919050565b60008060006117958585611a5b565b94509050600060fd60f81b6001600160f81b03198316141561182e576117bb8686611ae3565b955061ffff16905060fd81108015906117d6575061ffff8111155b6118225760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e67650060448201526064016104f6565b92508391506115a39050565b607f60f91b6001600160f81b0319831614156118b95761184e8686611b9c565b955063ffffffff16905061ffff8111801561186d575063ffffffff8111155b6118225760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016104f6565b6001600160f81b03198083161415611936576118d58686611c6e565b955067ffffffffffffffff16905063ffffffff81116118225760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016104f6565b5060f881901c60fd81106118225760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e676560448201526064016104f6565b606060fd8267ffffffffffffffff1610156119c157604080516001815260f884901b6020820152602181019091525b92915050565b61ffff8267ffffffffffffffff1611611a11576119e160fd60f81b611d40565b6119ea83611d67565b6040516020016119fb929190612155565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611a3c57611a33607f60f91b611d40565b6119ea83611daa565b611a4d6001600160f81b0319611d40565b6119ea83611ded565b919050565b6000808351836001611a6d91906122f5565b11158015611a845750611a818360016122f5565b83105b611ad05760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d60448201526064016104f6565b838301602001518061159d8560016122f5565b6000808351836002611af591906122f5565b11158015611b0c5750611b098360026122f5565b83105b611b635760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016104f6565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261159d91906122f5565b6000808351836004611bae91906122f5565b11158015611bc55750611bc28360046122f5565b83105b611c1c5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016104f6565b600060405160046000600182038760208a0101515b83831015611c515780821a83860153600183019250600182039150611c31565b50505081810160405260200390035190508061159d8560046122f5565b6000808351836008611c8091906122f5565b11158015611c975750611c948360086122f5565b83105b611cee5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b60648201526084016104f6565b600060405160086000600182038760208a0101515b83831015611d235780821a83860153600183019250600182039150611d03565b50505081810160405260200390035190508061159d8560086122f5565b60408051600181526001600160f81b031983166020820152602181019091526060906119bb565b6040516002808252606091906000601f5b82821015611d9a5785811a826020860101536001919091019060001901611d78565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611ddd5785811a826020860101536001919091019060001901611dbb565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611e205785811a826020860101536001919091019060001901611dfe565b5050506028810160405292915050565b80356001600160a01b0381168114611a5657600080fd5b600082601f830112611e5857600080fd5b813567ffffffffffffffff80821115611e7357611e73612347565b604051601f8301601f19908116603f01168101908282118183101715611e9b57611e9b612347565b81604052838152866020858801011115611eb457600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356fffffffffffffffffffffffffffffffff81168114611a5657600080fd5b803567ffffffffffffffff81168114611a5657600080fd5b600060208284031215611f1e57600080fd5b61128582611e30565b600060208284031215611f3957600080fd5b81356112858161235d565b600060208284031215611f5657600080fd5b81516112858161235d565b600060208284031215611f7357600080fd5b813567ffffffffffffffff80821115611f8b57600080fd5b908301906101008286031215611fa057600080fd5b611fa86122cb565b823581526020830135602082015260408301356040820152611fcc60608401611ed4565b6060820152608083013582811115611fe357600080fd5b611fef87828601611e47565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b60006020828403121561203157600080fd5b5035919050565b60006020828403121561204a57600080fd5b5051919050565b6000806040838503121561206457600080fd5b61206d83611ef4565b915061207b60208401611e30565b90509250929050565b60008060008060006080868803121561209c57600080fd5b6120a586611ef4565b94506120b360208701611e30565b9350604086013567ffffffffffffffff808211156120d057600080fd5b818801915088601f8301126120e457600080fd5b8135818111156120f357600080fd5b89602082850101111561210557600080fd5b60208301955080945050505061211d60608701611e30565b90509295509295909350565b6000815180845261214181602086016020860161231b565b601f01601f19169290920160200192915050565b6000835161216781846020880161231b565b83519083019061217b81836020880161231b565b01949350505050565b60008651612196818460208b0161231b565b8651908301906121aa818360208b0161231b565b86519101906121bd818360208a0161231b565b85519101906121d081836020890161231b565b84519101906121e381836020880161231b565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff831660208201526060604082015260006122216060830184612129565b95945050505050565b60608101818360005b6003811015612252578151835260209283019290910190600101612233565b50505092915050565b6020815260006112856020830184612129565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526122b260e0840182612129565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff811182821017156122ef576122ef612347565b60405290565b6000821982111561231657634e487b7160e01b600052601160045260246000fd5b500190565b60005b8381101561233657818101518382015260200161231e565b8381111561105f5750506000910152565b634e487b7160e01b600052604160045260246000fd5b801515811461236b57600080fd5b5056fea2646970667358221220929f6a4b0838096f94b988c31d6345d84a12d0129117e219578bb9f9d227d52c64736f6c63430008070033';

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
