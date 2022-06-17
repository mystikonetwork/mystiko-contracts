/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2LoopMain, MystikoV2LoopMainInterface } from '../MystikoV2LoopMain';

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
            name: 'rollupFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoLoop.DepositRequest',
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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb17905534801561003657600080fd5b50604051610ffd380380610ffd83398101604081905261005591610088565b600480546001600160a01b03199081163317909155600180546001600160a01b03909316929091169190911790556100b8565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b610f36806100c76000396000f3fe6080604052600436106100dd5760003560e01c8063cfc7e2da1161007f578063ea0cde8511610059578063ea0cde851461025d578063ec571c6a1461027d578063ed6ea33a1461029d578063f6afe88f146102bc57600080fd5b8063cfc7e2da146101ed578063ddac5dc11461020b578063e19abef81461023d57600080fd5b806330f49cac116100bb57806330f49cac146101605780633fe3347a14610180578063830d9ebe1461019c578063897b0637146101cd57600080fd5b806306394c9b146100e257806306b2ad59146101045780632421e15514610124575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610c0f565b6102cf565b005b34801561011057600080fd5b5061010261011f366004610c33565b61034e565b34801561013057600080fd5b50604080518082018252600481526306c6f6f760e41b602082015290516101579190610e05565b60405180910390f35b34801561016c57600080fd5b5061010261017b366004610c0f565b6103f1565b34801561018c57600080fd5b5060016040516101579190610ddd565b3480156101a857600080fd5b506000546101bd90600160a01b900460ff1681565b6040519015158152602001610157565b3480156101d957600080fd5b506101026101e8366004610d2d565b610497565b3480156101f957600080fd5b50600354604051908152602001610157565b34801561021757600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610157565b34801561024957600080fd5b50610102610258366004610c0f565b6104e7565b34801561026957600080fd5b50610102610278366004610c33565b610561565b34801561028957600080fd5b50600054610225906001600160a01b031681565b3480156102a957600080fd5b50600454600160a01b900460ff166101bd565b6101026102ca366004610c6d565b6105ca565b6004546001600160a01b0316331461031f5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6004546001600160a01b031633146103995760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610316565b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a443906103e690831515815260200190565b60405180910390a150565b6004546001600160a01b0316331461043c5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610316565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016103e6565b6004546001600160a01b031633146104e25760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610316565b600355565b6004546001600160a01b031633146105325760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610316565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6004546001600160a01b031633146105ac5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b6044820152606401610316565b60048054911515600160a01b0260ff60a01b19909216919091179055565b600454600160a01b900460ff16156106245760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c656400000000000000000000006044820152606401610316565b600354815110156106775760405162461bcd60e51b815260206004820152600e60248201527f616d6f756e7420746f6f206665770000000000000000000000000000000000006044820152606401610316565b600061069082604001518360000151846060015161075b565b9050808260200151146106e55760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f7272656374000000000000006044820152606401610316565b6106ee3361092f565b1561073b5760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e6564206164647265737300000000000000000000000000006044820152606401610316565b610757826000015183602001518460a0015185608001516109cd565b5050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184106107d85760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b6064820152608401610316565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff161061087f5760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a4500000000000000000000000000000000000000000000000000006064820152608401610316565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916108d791600401610dac565b60206040518083038186803b1580156108ef57600080fd5b505afa158015610903573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109279190610d46565b949350505050565b60008054600160a01b900460ff161561094a57506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b15801561098f57600080fd5b505afa1580156109a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c79190610c50565b92915050565b6002546109ee906001600160a01b03166109e78487610e9e565b6000610a81565b6040805160a081018252858152602081018590526000818301819052606082018590526080820184905260025492516378d60cd760e01b815291926001600160a01b0316916378d60cd791610a4891859190600401610e18565b600060405180830381600087803b158015610a6257600080fd5b505af1158015610a76573d6000803e3d6000fd5b505050505050505050565b610a8b8183610e9e565b3414610ad95760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e00000000000000000000000000006044820152606401610316565b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114610b26576040519150601f19603f3d011682016040523d82523d6000602084013e610b2b565b606091505b5050905080610b7c5760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c6564000000000000000000006044820152606401610316565b50505050565b600082601f830112610b9357600080fd5b813567ffffffffffffffff80821115610bae57610bae610ec4565b604051601f8301601f19908116603f01168101908282118183101715610bd657610bd6610ec4565b81604052838152866020858801011115610bef57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060208284031215610c2157600080fd5b8135610c2c81610eda565b9392505050565b600060208284031215610c4557600080fd5b8135610c2c81610ef2565b600060208284031215610c6257600080fd5b8151610c2c81610ef2565b600060208284031215610c7f57600080fd5b813567ffffffffffffffff80821115610c9757600080fd5b9083019060c08286031215610cab57600080fd5b610cb3610e75565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff81168114610cee57600080fd5b6060820152608083013582811115610d0557600080fd5b610d1187828601610b82565b60808301525060a083013560a082015280935050505092915050565b600060208284031215610d3f57600080fd5b5035919050565b600060208284031215610d5857600080fd5b5051919050565b6000815180845260005b81811015610d8557602081850181015186830182015201610d69565b81811115610d97576000602083870101525b50601f01601f19169290920160200192915050565b60608101818360005b6003811015610dd4578151835260209283019290910190600101610db5565b50505092915050565b6020810160028310610dff57634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000610c2c6020830184610d5f565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c0840152610e5c60e0840182610d5f565b9150506001600160a01b03831660208301529392505050565b60405160c0810167ffffffffffffffff81118282101715610e9857610e98610ec4565b60405290565b60008219821115610ebf57634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610eef57600080fd5b50565b8015158114610eef57600080fdfea264697066735822122071ade50d3a53e25b0cc8ff83831d879a6012149c3c98056ec1b0ff9362eed8e764736f6c63430008070033';

type MystikoV2LoopMainConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2LoopMainConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2LoopMain__factory extends ContractFactory {
  constructor(...args: MystikoV2LoopMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2LoopMain';
  }

  deploy(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2LoopMain> {
    return super.deploy(_hasher3, overrides || {}) as Promise<MystikoV2LoopMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, overrides || {});
  }
  attach(address: string): MystikoV2LoopMain {
    return super.attach(address) as MystikoV2LoopMain;
  }
  connect(signer: Signer): MystikoV2LoopMain__factory {
    return super.connect(signer) as MystikoV2LoopMain__factory;
  }
  static readonly contractName: 'MystikoV2LoopMain';
  public readonly contractName: 'MystikoV2LoopMain';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2LoopMainInterface {
    return new utils.Interface(_abi) as MystikoV2LoopMainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2LoopMain {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2LoopMain;
  }
}
