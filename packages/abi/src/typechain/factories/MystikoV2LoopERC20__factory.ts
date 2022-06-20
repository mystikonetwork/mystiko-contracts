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
  '0x6080604052600080546001600160a81b0319167340c57923924b5c5c5455c48d93317139addac8fb17905534801561003657600080fd5b506040516114e03803806114e083398101604081905261005591610091565b60048054336001600160a01b0319918216179091556001805482166001600160a01b0394851617905560058054909116919092161790556100e3565b600080604083850312156100a457600080fd5b82516100af816100cb565b60208401519092506100c0816100cb565b809150509250929050565b6001600160a01b03811681146100e057600080fd5b50565b6113ee806100f26000396000f3fe60806040526004361061010e5760003560e01c8063c2d41601116100a5578063e19abef811610074578063ec571c6a11610059578063ec571c6a14610306578063ed6ea33a14610326578063f6afe88f1461034557600080fd5b8063e19abef8146102c6578063ea0cde85146102e657600080fd5b8063c2d416011461023a578063c9230c5d14610261578063cfc7e2da14610276578063ddac5dc11461029457600080fd5b806330f49cac116100e157806330f49cac146101ad5780633fe3347a146101cd578063830d9ebe146101e9578063897b06371461021a57600080fd5b806306394c9b1461011357806306b2ad5914610135578063176de7a8146101555780632421e15514610180575b600080fd5b34801561011f57600080fd5b5061013361012e366004610fb4565b610358565b005b34801561014157600080fd5b50610133610150366004610fd1565b61040a565b34801561016157600080fd5b5061016a6104a2565b6040516101779190611238565b60405180910390f35b34801561018c57600080fd5b5060408051808201909152600481526306c6f6f760e41b602082015261016a565b3480156101b957600080fd5b506101336101c8366004610fb4565b610528565b3480156101d957600080fd5b5060006040516101779190611210565b3480156101f557600080fd5b5060005461020a90600160a01b900460ff1681565b6040519015158152602001610177565b34801561022657600080fd5b50610133610235366004611142565b6105ce565b34801561024657600080fd5b5061024f61064e565b60405160ff9091168152602001610177565b34801561026d57600080fd5b5061016a6106cb565b34801561028257600080fd5b50600354604051908152602001610177565b3480156102a057600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610177565b3480156102d257600080fd5b506101336102e1366004610fb4565b610710565b3480156102f257600080fd5b50610133610301366004610fd1565b61078a565b34801561031257600080fd5b506000546102ae906001600160a01b031681565b34801561033257600080fd5b50600454600160a01b900460ff1661020a565b610133610353366004611082565b610822565b6004546001600160a01b031633146103a85760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b60448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e54906020015b60405180910390a150565b6004546001600160a01b031633146104555760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161039f565b60008054821515600160a01b0260ff60a01b199091161790556040517fcdc31f40dac54b1c36a4e7d0cc192a99c3dd73a03d73ace4aeaa2bb3f655a443906103ff90831515815260200190565b600554604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b1580156104e757600080fd5b505afa1580156104fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610523919081019061100b565b905090565b6004546001600160a01b031633146105735760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161039f565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016103ff565b6004546001600160a01b031633146106195760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161039f565b60038190556040518181527f1c853e705f5e96d9076d1f48114d62650faf218827df3fed720227b3dbf18c5a906020016103ff565b6005546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b15801561069357600080fd5b505afa1580156106a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105239190611174565b600554604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b1580156104e757600080fd5b6004546001600160a01b0316331461075b5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161039f565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6004546001600160a01b031633146107d55760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9037b832b930ba37b91760911b604482015260640161039f565b60048054821515600160a01b0260ff60a01b199091161790556040517fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e09906103ff90831515815260200190565b600454600160a01b900460ff161561087c5760405162461bcd60e51b815260206004820152601560248201527f6465706f73697473206172652064697361626c65640000000000000000000000604482015260640161039f565b600354815110156108cf5760405162461bcd60e51b815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c00000000000000000000000000000000604482015260640161039f565b60006108e882604001518360000151846060015161095c565b90506108f333610b32565b156109405760405162461bcd60e51b815260206004820152601260248201527f73616e6374696f6e656420616464726573730000000000000000000000000000604482015260640161039f565b6109588260000151828460a001518560800151610bd0565b5050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184106109d95760405162461bcd60e51b8152602060048201526024808201527f686173684b2073686f756c64206265206c657373207468616e204649454c445f60448201526353495a4560e01b606482015260840161039f565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001826fffffffffffffffffffffffffffffffff1610610a805760405162461bcd60e51b815260206004820152602660248201527f72616e646f6d532073686f756c64206265206c657373207468616e204649454c60448201527f445f53495a450000000000000000000000000000000000000000000000000000606482015260840161039f565b60015460408051606081018252868152602081018690526fffffffffffffffffffffffffffffffff85168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610ad8916004016111df565b60206040518083038186803b158015610af057600080fd5b505afa158015610b04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b28919061115b565b90505b9392505050565b60008054600160a01b900460ff1615610b4d57506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b158015610b9257600080fd5b505afa158015610ba6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bca9190610fee565b92915050565b600254610bf1906001600160a01b0316610bea848761132a565b6000610c84565b6040805160a081018252858152602081018590526000818301819052606082018590526080820184905260025492516378d60cd760e01b815291926001600160a01b0316916378d60cd791610c4b9185919060040161124b565b600060405180830381600087803b158015610c6557600080fd5b505af1158015610c79573d6000803e3d6000fd5b505050505050505050565b803414610cd35760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d6174636800000000000000000000000000604482015260640161039f565b600554610ceb906001600160a01b0316338585610cf0565b505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052610d5f908590610d65565b50505050565b6000610dba826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e4a9092919063ffffffff16565b805190915015610ceb5780806020019051810190610dd89190610fee565b610ceb5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161039f565b6060610b288484600085856001600160a01b0385163b610eac5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161039f565b600080866001600160a01b03168587604051610ec891906111c3565b60006040518083038185875af1925050503d8060008114610f05576040519150601f19603f3d011682016040523d82523d6000602084013e610f0a565b606091505b5091509150610f1a828286610f25565b979650505050505050565b60608315610f34575081610b2b565b825115610f445782518084602001fd5b8160405162461bcd60e51b815260040161039f9190611238565b600082601f830112610f6f57600080fd5b8135610f82610f7d82611302565b6112d1565b818152846020838601011115610f9757600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610fc657600080fd5b8135610b2b81611392565b600060208284031215610fe357600080fd5b8135610b2b816113aa565b60006020828403121561100057600080fd5b8151610b2b816113aa565b60006020828403121561101d57600080fd5b815167ffffffffffffffff81111561103457600080fd5b8201601f8101841361104557600080fd5b8051611053610f7d82611302565b81815285602083850101111561106857600080fd5b611079826020830160208601611350565b95945050505050565b60006020828403121561109457600080fd5b813567ffffffffffffffff808211156110ac57600080fd5b9083019060c082860312156110c057600080fd5b6110c86112a8565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff8116811461110357600080fd5b606082015260808301358281111561111a57600080fd5b61112687828601610f5e565b60808301525060a083013560a082015280935050505092915050565b60006020828403121561115457600080fd5b5035919050565b60006020828403121561116d57600080fd5b5051919050565b60006020828403121561118657600080fd5b815160ff81168114610b2b57600080fd5b600081518084526111af816020860160208601611350565b601f01601f19169290920160200192915050565b600082516111d5818460208701611350565b9190910192915050565b60608101818360005b60038110156112075781518352602092830192909101906001016111e8565b50505092915050565b602081016002831061123257634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000610b2b6020830184611197565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261128f60e0840182611197565b9150506001600160a01b03831660208301529392505050565b60405160c0810167ffffffffffffffff811182821017156112cb576112cb61137c565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156112fa576112fa61137c565b604052919050565b600067ffffffffffffffff82111561131c5761131c61137c565b50601f01601f191660200190565b6000821982111561134b57634e487b7160e01b600052601160045260246000fd5b500190565b60005b8381101561136b578181015183820152602001611353565b83811115610d5f5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146113a757600080fd5b50565b80151581146113a757600080fdfea264697066735822122075755a8c683460e7f1e87779a08e2a89e92270e48e66a76cc521dd3a8c59815564736f6c63430008070033';

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
