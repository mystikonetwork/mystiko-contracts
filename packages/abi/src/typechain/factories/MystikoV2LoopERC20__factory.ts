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
        internalType: 'contract IHasher3',
        name: '_hasher3',
        type: 'address',
      },
      {
        internalType: 'contract IERC20Metadata',
        name: '_token',
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
        indexed: false,
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: 'DepositsDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minAmount',
        type: 'uint256',
      },
    ],
    name: 'MinAmount',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'OperatorChanged',
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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb17905534801561003657600080fd5b5060405161154538038061154583398101604081905261005591610091565b60048054336001600160a01b0319918216179091556001805482166001600160a01b0394851617905560058054909116919092161790556100e3565b600080604083850312156100a457600080fd5b82516100af816100cb565b60208401519092506100c0816100cb565b809150509250929050565b6001600160a01b03811681146100e057600080fd5b50565b611453806100f26000396000f3fe60806040526004361061010e5760003560e01c8063c2d41601116100a5578063e19abef811610074578063ec571c6a11610059578063ec571c6a14610306578063ed6ea33a14610326578063f6afe88f1461034557600080fd5b8063e19abef8146102c6578063ea0cde85146102e657600080fd5b8063c2d416011461023a578063c9230c5d14610261578063cfc7e2da14610276578063ddac5dc11461029457600080fd5b806330f49cac116100e157806330f49cac146101ad5780633fe3347a146101cd578063830d9ebe146101e9578063897b06371461021a57600080fd5b806306394c9b1461011357806306b2ad5914610135578063176de7a8146101555780632421e15514610180575b600080fd5b34801561011f57600080fd5b5061013361012e366004611019565b610358565b005b34801561014157600080fd5b50610133610150366004611036565b61040b565b34801561016157600080fd5b5061016a6104a4565b604051610177919061129d565b60405180910390f35b34801561018c57600080fd5b5060408051808201909152600481526306c6f6f760e41b602082015261016a565b3480156101b957600080fd5b506101336101c8366004611019565b61052a565b3480156101d957600080fd5b5060006040516101779190611275565b3480156101f557600080fd5b5060005461020a90600160a01b900460ff1681565b6040519015158152602001610177565b34801561022657600080fd5b506101336102353660046111a7565b6105d1565b34801561024657600080fd5b5061024f610652565b60405160ff9091168152602001610177565b34801561026d57600080fd5b5061016a6106cf565b34801561028257600080fd5b50600354604051908152602001610177565b3480156102a057600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610177565b3480156102d257600080fd5b506101336102e1366004611019565b610714565b3480156102f257600080fd5b50610133610301366004611036565b61078f565b34801561031257600080fd5b506000546102ae906001600160a01b031681565b34801561033257600080fd5b50600454600160a01b900460ff1661020a565b6101336103533660046110e7565b610828565b6004546001600160a01b031633146103a95760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e54906020015b60405180910390a150565b6004546001600160a01b031633146104575760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016103a0565b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a4439061040090831515815260200190565b600554604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b1580156104e957600080fd5b505afa1580156104fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105259190810190611070565b905090565b6004546001600160a01b031633146105765760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016103a0565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b190602001610400565b6004546001600160a01b0316331461061d5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016103a0565b60038190556040518181527f1c853e705f5e96d9076d1f48114d62650faf218827df3fed720227b3dbf18c5a90602001610400565b6005546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b15801561069757600080fd5b505afa1580156106ab573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052591906111d9565b600554604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b1580156104e957600080fd5b6004546001600160a01b031633146107605760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016103a0565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6004546001600160a01b031633146107db5760405163973d02cb60e01b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064016103a0565b60048054821515600160a01b0260ff60a01b199091161790556040517fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e099061040090831515815260200190565b600454600160a01b900460ff16156108835760405163c83ad1cd60e01b815260206004820152601560248201527f6465706f73697473206172652064697361626c6564000000000000000000000060448201526064016103a0565b600354815110156108d75760405163c83ad1cd60e01b815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c0000000000000000000000000000000060448201526064016103a0565b60006108f08260400151836000015184606001516109bd565b9050808260200151146109465760405163c83ad1cd60e01b815260206004820152601960248201527f636f6d6d69746d656e74206861736820696e636f72726563740000000000000060448201526064016103a0565b61094f33610b95565b1561099d5760405163c83ad1cd60e01b815260206004820152601260248201527f73616e6374696f6e65642061646472657373000000000000000000000000000060448201526064016103a0565b6109b9826000015183602001518460a001518560800151610c33565b5050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018410610a3b5760405163c83ad1cd60e01b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b60648201526084016103a0565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff1610610ae35760405163c83ad1cd60e01b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a45000000000000000000000000000000000000000000000000000060648201526084016103a0565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610b3b91600401611244565b60206040518083038186803b158015610b5357600080fd5b505afa158015610b67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8b91906111c0565b90505b9392505050565b60008054600160a01b900460ff1615610bb057506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b158015610bf557600080fd5b505afa158015610c09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2d9190611053565b92915050565b6040805160a081018252858152602081018590526000818301819052606082018590526080820184905260025492516378d60cd760e01b815291926001600160a01b0316916378d60cd791610c8d918591906004016112b0565b600060405180830381600087803b158015610ca757600080fd5b505af1158015610cbb573d6000803e3d6000fd5b5050600254610ce192506001600160a01b03169050610cda858861138f565b6000610ce8565b5050505050565b803414610d385760405163c83ad1cd60e01b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064016103a0565b600554610d50906001600160a01b0316338585610d55565b505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052610dc4908590610dca565b50505050565b6000610e1f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610eaf9092919063ffffffff16565b805190915015610d505780806020019051810190610e3d9190611053565b610d505760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103a0565b6060610b8b8484600085856001600160a01b0385163b610f115760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103a0565b600080866001600160a01b03168587604051610f2d9190611228565b60006040518083038185875af1925050503d8060008114610f6a576040519150601f19603f3d011682016040523d82523d6000602084013e610f6f565b606091505b5091509150610f7f828286610f8a565b979650505050505050565b60608315610f99575081610b8e565b825115610fa95782518084602001fd5b8160405162461bcd60e51b81526004016103a0919061129d565b600082601f830112610fd457600080fd5b8135610fe7610fe282611367565b611336565b818152846020838601011115610ffc57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561102b57600080fd5b8135610b8e816113f7565b60006020828403121561104857600080fd5b8135610b8e8161140f565b60006020828403121561106557600080fd5b8151610b8e8161140f565b60006020828403121561108257600080fd5b815167ffffffffffffffff81111561109957600080fd5b8201601f810184136110aa57600080fd5b80516110b8610fe282611367565b8181528560208385010111156110cd57600080fd5b6110de8260208301602086016113b5565b95945050505050565b6000602082840312156110f957600080fd5b813567ffffffffffffffff8082111561111157600080fd5b9083019060c0828603121561112557600080fd5b61112d61130d565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff8116811461116857600080fd5b606082015260808301358281111561117f57600080fd5b61118b87828601610fc3565b60808301525060a083013560a082015280935050505092915050565b6000602082840312156111b957600080fd5b5035919050565b6000602082840312156111d257600080fd5b5051919050565b6000602082840312156111eb57600080fd5b815160ff81168114610b8e57600080fd5b600081518084526112148160208601602086016113b5565b601f01601f19169290920160200192915050565b6000825161123a8184602087016113b5565b9190910192915050565b60608101818360005b600381101561126c57815183526020928301929091019060010161124d565b50505092915050565b602081016002831061129757634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000610b8e60208301846111fc565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526112f460e08401826111fc565b9150506001600160a01b03831660208301529392505050565b60405160c0810167ffffffffffffffff81118282101715611330576113306113e1565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561135f5761135f6113e1565b604052919050565b600067ffffffffffffffff821115611381576113816113e1565b50601f01601f191660200190565b600082198211156113b057634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156113d05781810151838201526020016113b8565b83811115610dc45750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461140c57600080fd5b50565b801515811461140c57600080fdfea2646970667358221220badcdb56a703b528cd78bcb4d65a00276832f2849e8920fdafe0ae73777f8d1964736f6c63430008070033';

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
