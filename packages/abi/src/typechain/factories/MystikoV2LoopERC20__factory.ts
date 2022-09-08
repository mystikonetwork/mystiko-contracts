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
    name: 'AmountTooLarge',
    type: 'error',
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
    name: 'MaxAmountLessThanMinAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MinAmountGreaterThanMaxAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
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
        name: 'maxAmount',
        type: 'uint256',
      },
    ],
    name: 'MaxAmount',
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
        indexed: true,
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
    name: 'SanctionsCheck',
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
    name: 'disableSanctionsCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'enableSanctionsCheck',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'getMaxAmount',
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
    name: 'sanctionsCheck',
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
        name: '_maxAmount',
        type: 'uint256',
      },
    ],
    name: 'setMaxAmount',
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
  '0x6080604052600080546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb17905534801561003757600080fd5b5060405161159838038061159883398101604081905261005691610092565b60058054336001600160a01b0319918216179091556001805482166001600160a01b0394851617905560068054909116919092161790556100e4565b600080604083850312156100a557600080fd5b82516100b0816100cc565b60208401519092506100c1816100cc565b809150509250929050565b6001600160a01b03811681146100e157600080fd5b50565b6114a5806100f36000396000f3fe60806040526004361061015f5760003560e01c8063c2d41601116100c0578063e19abef811610074578063ec571c6a11610059578063ec571c6a14610393578063ed6ea33a146103b3578063f6afe88f146103d257600080fd5b8063e19abef814610353578063ea0cde851461037357600080fd5b8063cfc7e2da116100a5578063cfc7e2da146102f7578063dd757c341461030c578063ddac5dc11461032157600080fd5b8063c2d41601146102bb578063c9230c5d146102e257600080fd5b806330f49cac116101175780634fe47f70116100fc5780634fe47f701461024a578063897b06371461026a578063b1c394221461028a57600080fd5b806330f49cac1461020e5780633fe3347a1461022e57600080fd5b80630ba95909116101485780630ba959091461019b578063176de7a8146101bf5780632421e155146101e157600080fd5b806301dbf19f1461016457806306394c9b1461017b575b600080fd5b34801561017057600080fd5b506101796103e5565b005b34801561018757600080fd5b5061017961019636600461106b565b610469565b3480156101a757600080fd5b506004545b6040519081526020015b60405180910390f35b3480156101cb57600080fd5b506101d461051a565b6040516101b691906112ef565b3480156101ed57600080fd5b5060408051808201909152600481526306c6f6f760e41b60208201526101d4565b34801561021a57600080fd5b5061017961022936600461106b565b6105a0565b34801561023a57600080fd5b5060006040516101b691906112c7565b34801561025657600080fd5b506101796102653660046111f9565b61062d565b34801561027657600080fd5b506101796102853660046111f9565b6106b0565b34801561029657600080fd5b506000546102ab90600160a01b900460ff1681565b60405190151581526020016101b6565b3480156102c757600080fd5b506102d0610733565b60405160ff90911681526020016101b6565b3480156102ee57600080fd5b506101d46107b0565b34801561030357600080fd5b506003546101ac565b34801561031857600080fd5b506101796107f5565b34801561032d57600080fd5b506002546001600160a01b03165b6040516001600160a01b0390911681526020016101b6565b34801561035f57600080fd5b5061017961036e36600461106b565b61086d565b34801561037f57600080fd5b5061017961038e366004611088565b6108c7565b34801561039f57600080fd5b5060005461033b906001600160a01b031681565b3480156103bf57600080fd5b50600554600160a01b900460ff166102ab565b6101796103e0366004611139565b61093f565b6005546001600160a01b03163314610410576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261045f92900460ff161515815260200190565b60405180910390a1565b6005546001600160a01b03163314610494576040516327e1f1e560e01b815260040160405180910390fd5b6005546001600160a01b03828116911614156104c3576040516336a1c33f60e01b815260040160405180910390fd5b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e5490600090a250565b600654604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b15801561055f57600080fd5b505afa158015610573573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261059b91908101906110c2565b905090565b6005546001600160a01b031633146105cb576040516327e1f1e560e01b815260040160405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020015b60405180910390a150565b6005546001600160a01b03163314610658576040516327e1f1e560e01b815260040160405180910390fd5b60035481101561067b5760405163c91c531760e01b815260040160405180910390fd5b60048190556040518181527f09cd51dbb3863eb5590065f7de41ae4950c3ede201a9f214669deadb855d395590602001610622565b6005546001600160a01b031633146106db576040516327e1f1e560e01b815260040160405180910390fd5b6004548111156106fe57604051636003e82160e11b815260040160405180910390fd5b60038190556040518181527f1c853e705f5e96d9076d1f48114d62650faf218827df3fed720227b3dbf18c5a90602001610622565b6006546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b15801561077857600080fd5b505afa15801561078c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059b919061122b565b600654604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b15801561055f57600080fd5b6005546001600160a01b03163314610820576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161045f91600160a01b90910460ff161515815260200190565b6005546001600160a01b03163314610898576040516327e1f1e560e01b815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6005546001600160a01b031633146108f2576040516327e1f1e560e01b815260040160405180910390fd5b60058054821515600160a01b0260ff60a01b199091161790556040517fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e099061062290831515815260200190565b600554600160a01b900460ff161561096a57604051630e2f42c960e31b815260040160405180910390fd5b6003548151101561098e5760405163617ab12d60e11b815260040160405180910390fd5b600454815111156109b257604051630625040160e01b815260040160405180910390fd5b60006109cb826040015183600001518460600151610a38565b9050808260200151146109f1576040516301bfaa2560e51b815260040160405180910390fd5b6109fa33610b60565b15610a1857604051632e70c0b160e01b815260040160405180910390fd5b610a34826000015183602001518460a001518560800151610bfd565b5050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001808510610a7b5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff1610610aad57604051633bbde0bf60e21b815260040160405180910390fd5b60015460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610b0591600401611296565b60206040518083038186803b158015610b1d57600080fd5b505afa158015610b31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b559190611212565b9150505b9392505050565b60008054600160a01b900460ff16610b7a57506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b158015610bbf57600080fd5b505afa158015610bd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf791906110a5565b92915050565b6040805160a081018252858152602081018590526000818301819052606082018590526080820184905260025492516378d60cd760e01b815291926001600160a01b0316916378d60cd791610c5791859190600401611302565b600060405180830381600087803b158015610c7157600080fd5b505af1158015610c85573d6000803e3d6000fd5b5050600254610cab92506001600160a01b03169050610ca485886113e1565b6000610cb2565b5050505050565b803414610d065760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600654610d1e906001600160a01b0316338585610d23565b505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052610d92908590610d98565b50505050565b6000610ded826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e7d9092919063ffffffff16565b805190915015610d1e5780806020019051810190610e0b91906110a5565b610d1e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610cfd565b6060610e8c8484600085610e94565b949350505050565b606082471015610f0c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610cfd565b6001600160a01b0385163b610f635760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610cfd565b600080866001600160a01b03168587604051610f7f919061127a565b60006040518083038185875af1925050503d8060008114610fbc576040519150601f19603f3d011682016040523d82523d6000602084013e610fc1565b606091505b5091509150610fd1828286610fdc565b979650505050505050565b60608315610feb575081610b59565b825115610ffb5782518084602001fd5b8160405162461bcd60e51b8152600401610cfd91906112ef565b600082601f83011261102657600080fd5b8135611039611034826113b9565b611388565b81815284602083860101111561104e57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561107d57600080fd5b8135610b5981611449565b60006020828403121561109a57600080fd5b8135610b5981611461565b6000602082840312156110b757600080fd5b8151610b5981611461565b6000602082840312156110d457600080fd5b815167ffffffffffffffff8111156110eb57600080fd5b8201601f810184136110fc57600080fd5b805161110a611034826113b9565b81815285602083850101111561111f57600080fd5b611130826020830160208601611407565b95945050505050565b60006020828403121561114b57600080fd5b813567ffffffffffffffff8082111561116357600080fd5b9083019060c0828603121561117757600080fd5b61117f61135f565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff811681146111ba57600080fd5b60608201526080830135828111156111d157600080fd5b6111dd87828601611015565b60808301525060a083013560a082015280935050505092915050565b60006020828403121561120b57600080fd5b5035919050565b60006020828403121561122457600080fd5b5051919050565b60006020828403121561123d57600080fd5b815160ff81168114610b5957600080fd5b60008151808452611266816020860160208601611407565b601f01601f19169290920160200192915050565b6000825161128c818460208701611407565b9190910192915050565b60608101818360005b60038110156112be57815183526020928301929091019060010161129f565b50505092915050565b60208101600283106112e957634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000610b59602083018461124e565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261134660e084018261124e565b9150506001600160a01b03831660208301529392505050565b60405160c0810167ffffffffffffffff8111828210171561138257611382611433565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156113b1576113b1611433565b604052919050565b600067ffffffffffffffff8211156113d3576113d3611433565b50601f01601f191660200190565b6000821982111561140257634e487b7160e01b600052601160045260246000fd5b500190565b60005b8381101561142257818101518382015260200161140a565b83811115610d925750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461145e57600080fd5b50565b801515811461145e57600080fdfea264697066735822122093107f9605d2aad433cca489bfc8d59d4dae53d3824117c514bb45e0e7d5ea8364736f6c63430008070033';

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
