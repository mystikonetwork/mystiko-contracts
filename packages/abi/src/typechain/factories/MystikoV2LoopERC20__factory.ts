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
    inputs: [],
    name: 'AmountTooSmall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CommitmentHashIncorrect',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DepositsDisabled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HashKGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyOperator',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RandomSGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SanctionedAddress',
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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb17905534801561003657600080fd5b5060405161132c38038061132c83398101604081905261005591610091565b60048054336001600160a01b0319918216179091556001805482166001600160a01b0394851617905560058054909116919092161790556100e3565b600080604083850312156100a457600080fd5b82516100af816100cb565b60208401519092506100c0816100cb565b809150509250929050565b6001600160a01b03811681146100e057600080fd5b50565b61123a806100f26000396000f3fe60806040526004361061010e5760003560e01c8063c2d41601116100a5578063e19abef811610074578063ec571c6a11610059578063ec571c6a14610306578063ed6ea33a14610326578063f6afe88f1461034557600080fd5b8063e19abef8146102c6578063ea0cde85146102e657600080fd5b8063c2d416011461023a578063c9230c5d14610261578063cfc7e2da14610276578063ddac5dc11461029457600080fd5b806330f49cac116100e157806330f49cac146101ad5780633fe3347a146101cd578063830d9ebe146101e9578063897b06371461021a57600080fd5b806306394c9b1461011357806306b2ad5914610135578063176de7a8146101555780632421e15514610180575b600080fd5b34801561011f57600080fd5b5061013361012e366004610e00565b610358565b005b34801561014157600080fd5b50610133610150366004610e1d565b6103e5565b34801561016157600080fd5b5061016a61045d565b6040516101779190611084565b60405180910390f35b34801561018c57600080fd5b5060408051808201909152600481526306c6f6f760e41b602082015261016a565b3480156101b957600080fd5b506101336101c8366004610e00565b6104e3565b3480156101d957600080fd5b506000604051610177919061105c565b3480156101f557600080fd5b5060005461020a90600160a01b900460ff1681565b6040519015158152602001610177565b34801561022657600080fd5b50610133610235366004610f8e565b610569565b34801561024657600080fd5b5061024f6105c9565b60405160ff9091168152602001610177565b34801561026d57600080fd5b5061016a610646565b34801561028257600080fd5b50600354604051908152602001610177565b3480156102a057600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610177565b3480156102d257600080fd5b506101336102e1366004610e00565b61068b565b3480156102f257600080fd5b50610133610301366004610e1d565b6106e5565b34801561031257600080fd5b506000546102ae906001600160a01b031681565b34801561033257600080fd5b50600454600160a01b900460ff1661020a565b610133610353366004610ece565b61075d565b6004546001600160a01b03163314610383576040516327e1f1e560e01b815260040160405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e54906020015b60405180910390a150565b6004546001600160a01b03163314610410576040516327e1f1e560e01b815260040160405180910390fd5b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a443906103da90831515815260200190565b600554604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b1580156104a257600080fd5b505afa1580156104b6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104de9190810190610e57565b905090565b6004546001600160a01b0316331461050e576040516327e1f1e560e01b815260040160405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016103da565b6004546001600160a01b03163314610594576040516327e1f1e560e01b815260040160405180910390fd5b60038190556040518181527f1c853e705f5e96d9076d1f48114d62650faf218827df3fed720227b3dbf18c5a906020016103da565b6005546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b15801561060e57600080fd5b505afa158015610622573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104de9190610fc0565b600554604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b1580156104a257600080fd5b6004546001600160a01b031633146106b6576040516327e1f1e560e01b815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6004546001600160a01b03163314610710576040516327e1f1e560e01b815260040160405180910390fd5b60048054821515600160a01b0260ff60a01b199091161790556040517fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e09906103da90831515815260200190565b600454600160a01b900460ff161561078857604051630e2f42c960e31b815260040160405180910390fd5b600354815110156107ac5760405163617ab12d60e11b815260040160405180910390fd5b60006107c5826040015183600001518460600151610832565b9050808260200151146107eb576040516301bfaa2560e51b815260040160405180910390fd5b6107f433610978565b1561081257604051632e70c0b160e01b815260040160405180910390fd5b61082e826000015183602001518460a001518560800151610a16565b5050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184106108745760405163805f2a4960e01b815260040160405180910390fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff16106108c657604051633bbde0bf60e21b815260040160405180910390fd5b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e89161091e9160040161102b565b60206040518083038186803b15801561093657600080fd5b505afa15801561094a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096e9190610fa7565b90505b9392505050565b60008054600160a01b900460ff161561099357506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b1580156109d857600080fd5b505afa1580156109ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a109190610e3a565b92915050565b6040805160a081018252858152602081018590526000818301819052606082018590526080820184905260025492516378d60cd760e01b815291926001600160a01b0316916378d60cd791610a7091859190600401611097565b600060405180830381600087803b158015610a8a57600080fd5b505af1158015610a9e573d6000803e3d6000fd5b5050600254610ac492506001600160a01b03169050610abd8588611176565b6000610acb565b5050505050565b803414610b1f5760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600554610b37906001600160a01b0316338585610b3c565b505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052610bab908590610bb1565b50505050565b6000610c06826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610c969092919063ffffffff16565b805190915015610b375780806020019051810190610c249190610e3a565b610b375760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b16565b606061096e8484600085856001600160a01b0385163b610cf85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b16565b600080866001600160a01b03168587604051610d14919061100f565b60006040518083038185875af1925050503d8060008114610d51576040519150601f19603f3d011682016040523d82523d6000602084013e610d56565b606091505b5091509150610d66828286610d71565b979650505050505050565b60608315610d80575081610971565b825115610d905782518084602001fd5b8160405162461bcd60e51b8152600401610b169190611084565b600082601f830112610dbb57600080fd5b8135610dce610dc98261114e565b61111d565b818152846020838601011115610de357600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610e1257600080fd5b8135610971816111de565b600060208284031215610e2f57600080fd5b8135610971816111f6565b600060208284031215610e4c57600080fd5b8151610971816111f6565b600060208284031215610e6957600080fd5b815167ffffffffffffffff811115610e8057600080fd5b8201601f81018413610e9157600080fd5b8051610e9f610dc98261114e565b818152856020838501011115610eb457600080fd5b610ec582602083016020860161119c565b95945050505050565b600060208284031215610ee057600080fd5b813567ffffffffffffffff80821115610ef857600080fd5b9083019060c08286031215610f0c57600080fd5b610f146110f4565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff81168114610f4f57600080fd5b6060820152608083013582811115610f6657600080fd5b610f7287828601610daa565b60808301525060a083013560a082015280935050505092915050565b600060208284031215610fa057600080fd5b5035919050565b600060208284031215610fb957600080fd5b5051919050565b600060208284031215610fd257600080fd5b815160ff8116811461097157600080fd5b60008151808452610ffb81602086016020860161119c565b601f01601f19169290920160200192915050565b6000825161102181846020870161119c565b9190910192915050565b60608101818360005b6003811015611053578151835260209283019290910190600101611034565b50505092915050565b602081016002831061107e57634e487b7160e01b600052602160045260246000fd5b91905290565b6020815260006109716020830184610fe3565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526110db60e0840182610fe3565b9150506001600160a01b03831660208301529392505050565b60405160c0810167ffffffffffffffff81118282101715611117576111176111c8565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611146576111466111c8565b604052919050565b600067ffffffffffffffff821115611168576111686111c8565b50601f01601f191660200190565b6000821982111561119757634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156111b757818101518382015260200161119f565b83811115610bab5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146111f357600080fd5b50565b80151581146111f357600080fdfea2646970667358221220a66d60385f72463f374ebf9e937f08442671aab458b432a7f4cb6ba3bbbf922f64736f6c63430008070033';

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
