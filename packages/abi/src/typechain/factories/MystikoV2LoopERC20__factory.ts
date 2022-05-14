/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2LoopERC20, MystikoV2LoopERC20Interface } from '../MystikoV2LoopERC20';

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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb17905534801561003657600080fd5b5060405161144b38038061144b833981016040819052610055916100ad565b60048054336001600160a01b0319918216179091556001805482166001600160a01b0394851617905560058054909116919092161790556100e0565b80516001600160a01b03811681146100a857600080fd5b919050565b600080604083850312156100c057600080fd5b6100c983610091565b91506100d760208401610091565b90509250929050565b61135c806100ef6000396000f3fe6080604052600436106100f35760003560e01c8063b4318ead1161008a578063cfc7e2da11610059578063cfc7e2da146102c7578063e19abef8146102e5578063ed6ea33a14610305578063f6afe88f1461032457600080fd5b8063b4318ead14610243578063c2d4160114610263578063c9230c5d1461028a578063ce7461021461029f57600080fd5b806334c33e83116100c657806334c33e831461019d5780633fe3347a146101bd578063897b06371461020357806399383f781461022357600080fd5b806306394c9b146100f8578063176de7a81461011a5780632421e1551461014557806330d7803614610172575b600080fd5b34801561010457600080fd5b50610118610113366004610f53565b610337565b005b34801561012657600080fd5b5061012f6103b6565b60405161013c91906111bb565b60405180910390f35b34801561015157600080fd5b5060408051808201909152600481526306c6f6f760e41b602082015261012f565b34801561017e57600080fd5b50600054600160a01b900460ff165b604051901515815260200161013c565b3480156101a957600080fd5b506101186101b8366004610f53565b61043c565b3480156101c957600080fd5b5060408051808201909152600581527f6572633230000000000000000000000000000000000000000000000000000000602082015261012f565b34801561020f57600080fd5b5061011861021e3660046110ed565b6104b6565b34801561022f57600080fd5b5061011861023e366004610f7c565b610506565b34801561024f57600080fd5b5061011861025e366004610f7c565b61056f565b34801561026f57600080fd5b506102786105d8565b60405160ff909116815260200161013c565b34801561029657600080fd5b5061012f610655565b3480156102ab57600080fd5b506000546040516001600160a01b03909116815260200161013c565b3480156102d357600080fd5b5060035460405190815260200161013c565b3480156102f157600080fd5b50610118610300366004610f53565b61069a565b34801561031157600080fd5b50600454600160a01b900460ff1661018d565b61011861033236600461102d565b610714565b6004546001600160a01b031633146103875760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600554604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b1580156103fb57600080fd5b505afa15801561040f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104379190810190610fb6565b905090565b6004546001600160a01b031633146104875760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161037e565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6004546001600160a01b031633146105015760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161037e565b600355565b6004546001600160a01b031633146105515760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161037e565b60048054911515600160a01b0260ff60a01b19909216919091179055565b6004546001600160a01b031633146105ba5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161037e565b60008054911515600160a01b0260ff60a01b19909216919091179055565b6005546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b15801561061d57600080fd5b505afa158015610631573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610437919061111f565b600554604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b1580156103fb57600080fd5b6004546001600160a01b031633146106e55760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161037e565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600454600160a01b900460ff161561076e5760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c65640000000000000000000000604482015260640161037e565b600354815110156107c15760405162461bcd60e51b815260206004820152600e60248201527f616d6f756e7420746f6f20666577000000000000000000000000000000000000604482015260640161037e565b60006107da8260400151836000015184606001516108a5565b90508082602001511461082f5760405162461bcd60e51b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f727265637400000000000000604482015260640161037e565b61083833610a69565b156108855760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e656420616464726573730000000000000000000000000000604482015260640161037e565b6108a1826000015183602001518460a001518560800151610b03565b5050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184106109225760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b606482015260840161037e565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183106109b75760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a450000000000000000000000000000000000000000000000000000606482015260840161037e565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610a0f9160040161118a565b60206040518083038186803b158015610a2757600080fd5b505afa158015610a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5f9190611106565b90505b9392505050565b60008054600160a01b900460ff1615610a8457506000919050565b60005460405163df592f7d60e01b81526001600160a01b03848116600483015290911690819063df592f7d9060240160206040518083038186803b158015610acb57600080fd5b505afa158015610adf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a629190610f99565b600254610b24906001600160a01b0316610b1d84876112ad565b6000610c23565b6040805160a081018252858152602081018590526000818301819052606082018590526080820184905260025492516378d60cd760e01b815291926001600160a01b0316916378d60cd791610b7e918591906004016111ce565b602060405180830381600087803b158015610b9857600080fd5b505af1158015610bac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd09190610f99565b610c1c5760405162461bcd60e51b815260206004820152601260248201527f63616c6c20656e7175657565206572726f720000000000000000000000000000604482015260640161037e565b5050505050565b803414610c725760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d6174636800000000000000000000000000604482015260640161037e565b600554610c8a906001600160a01b0316338585610c8f565b505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052610cfe908590610d04565b50505050565b6000610d59826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610de99092919063ffffffff16565b805190915015610c8a5780806020019051810190610d779190610f99565b610c8a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161037e565b6060610a5f8484600085856001600160a01b0385163b610e4b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161037e565b600080866001600160a01b03168587604051610e67919061116e565b60006040518083038185875af1925050503d8060008114610ea4576040519150601f19603f3d011682016040523d82523d6000602084013e610ea9565b606091505b5091509150610eb9828286610ec4565b979650505050505050565b60608315610ed3575081610a62565b825115610ee35782518084602001fd5b8160405162461bcd60e51b815260040161037e91906111bb565b600082601f830112610f0e57600080fd5b8135610f21610f1c82611285565b611254565b818152846020838601011115610f3657600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610f6557600080fd5b81356001600160a01b0381168114610a6257600080fd5b600060208284031215610f8e57600080fd5b8135610a6281611315565b600060208284031215610fab57600080fd5b8151610a6281611315565b600060208284031215610fc857600080fd5b815167ffffffffffffffff811115610fdf57600080fd5b8201601f81018413610ff057600080fd5b8051610ffe610f1c82611285565b81815285602083850101111561101357600080fd5b6110248260208301602086016112d3565b95945050505050565b60006020828403121561103f57600080fd5b813567ffffffffffffffff8082111561105757600080fd5b9083019060c0828603121561106b57600080fd5b61107361122b565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff811681146110ae57600080fd5b60608201526080830135828111156110c557600080fd5b6110d187828601610efd565b60808301525060a083013560a082015280935050505092915050565b6000602082840312156110ff57600080fd5b5035919050565b60006020828403121561111857600080fd5b5051919050565b60006020828403121561113157600080fd5b815160ff81168114610a6257600080fd5b6000815180845261115a8160208601602086016112d3565b601f01601f19169290920160200192915050565b600082516111808184602087016112d3565b9190910192915050565b60608101818360005b60038110156111b2578151835260209283019290910190600101611193565b50505092915050565b602081526000610a626020830184611142565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261121260e0840182611142565b9150506001600160a01b03831660208301529392505050565b60405160c0810167ffffffffffffffff8111828210171561124e5761124e6112ff565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561127d5761127d6112ff565b604052919050565b600067ffffffffffffffff82111561129f5761129f6112ff565b50601f01601f191660200190565b600082198211156112ce57634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156112ee5781810151838201526020016112d6565b83811115610cfe5750506000910152565b634e487b7160e01b600052604160045260246000fd5b801515811461132357600080fd5b5056fea26469706673582212207387ee1428b3241b2480e0fa9e22606a12c793432a644f03da51a1b58fc8c4e664736f6c63430008070033';

type MystikoV2LoopERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2LoopERC20ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2LoopERC20__factory extends ContractFactory {
  constructor(...args: MystikoV2LoopERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2LoopERC20';
  }

  deploy(
    _hasher3: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2LoopERC20> {
    return super.deploy(_hasher3, _token, overrides || {}) as Promise<MystikoV2LoopERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _token, overrides || {});
  }
  attach(address: string): MystikoV2LoopERC20 {
    return super.attach(address) as MystikoV2LoopERC20;
  }
  connect(signer: Signer): MystikoV2LoopERC20__factory {
    return super.connect(signer) as MystikoV2LoopERC20__factory;
  }
  static readonly contractName: 'MystikoV2LoopERC20';
  public readonly contractName: 'MystikoV2LoopERC20';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2LoopERC20Interface {
    return new utils.Interface(_abi) as MystikoV2LoopERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2LoopERC20 {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2LoopERC20;
  }
}