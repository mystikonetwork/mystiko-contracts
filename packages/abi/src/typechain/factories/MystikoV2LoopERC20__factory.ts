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
    inputs: [],
    name: 'ServiceFeeDividerTooSmall',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'serviceFee',
        type: 'uint256',
      },
    ],
    name: 'ServiceFeeChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'collector',
        type: 'address',
      },
    ],
    name: 'ServiceFeeCollectorChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'serviceFeeDivider',
        type: 'uint256',
      },
    ],
    name: 'ServiceFeeDividerChanged',
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
        internalType: 'uint256',
        name: '_newServiceFee',
        type: 'uint256',
      },
    ],
    name: 'changeServiceFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newCollector',
        type: 'address',
      },
    ],
    name: 'changeServiceFeeCollector',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newServiceFeeDivider',
        type: 'uint256',
      },
    ],
    name: 'changeServiceFeeDivider',
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
    name: 'getServiceFee',
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
    name: 'getServiceFeeCollector',
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
    name: 'getServiceFeeDivider',
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
  '0x6080604052600080546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb17905534801561003757600080fd5b50604051620017df380380620017df833981016040819052610058916100b2565b600480546001600160a01b03199081163317909155600180546001600160a01b0394851692169190911790556103e8600655620f4240600755600880549190921661010002610100600160a81b0319909116179055610104565b600080604083850312156100c557600080fd5b82516100d0816100ec565b60208401519092506100e1816100ec565b809150509250929050565b6001600160a01b038116811461010157600080fd5b50565b6116cb80620001146000396000f3fe60806040526004361061018b5760003560e01c8063b1c39422116100d6578063ddac5dc11161007f578063ec571c6a11610059578063ec571c6a14610432578063ed6ea33a14610452578063f6afe88f1461046a57600080fd5b8063ddac5dc1146103d4578063e19abef8146103f2578063ea0cde851461041257600080fd5b8063cfc7e2da116100b0578063cfc7e2da1461038a578063d3e256bf1461039f578063dd757c34146103bf57600080fd5b8063b1c394221461031d578063c2d416011461034e578063c9230c5d1461037557600080fd5b80632421e155116101385780633fe3347a116101125780633fe3347a146102c1578063897b0637146102dd578063b1a0b358146102fd57600080fd5b80632421e1551461024257806330f49cac1461026f5780633fc8c4d61461028f57600080fd5b80630f087d76116101695780630f087d76146101eb57806311a1933c1461020b578063176de7a81461022057600080fd5b806301dbf19f1461019057806306394c9b146101a75780630a5ea9eb146101c7575b600080fd5b34801561019c57600080fd5b506101a561047d565b005b3480156101b357600080fd5b506101a56101c2366004611248565b610501565b3480156101d357600080fd5b506007545b6040519081526020015b60405180910390f35b3480156101f757600080fd5b506101a5610206366004611248565b6105a5565b34801561021757600080fd5b506006546101d8565b34801561022c57600080fd5b50610235610649565b6040516101e291906114cc565b34801561024e57600080fd5b5060408051808201909152600481526306c6f6f760e41b6020820152610235565b34801561027b57600080fd5b506101a561028a366004611248565b6106da565b34801561029b57600080fd5b506005546001600160a01b03165b6040516001600160a01b0390911681526020016101e2565b3480156102cd57600080fd5b5060006040516101e291906114a4565b3480156102e957600080fd5b506101a56102f83660046113d6565b61075a565b34801561030957600080fd5b506101a56103183660046113d6565b6107ba565b34801561032957600080fd5b5060005461033e90600160a01b900460ff1681565b60405190151581526020016101e2565b34801561035a57600080fd5b5061036361085b565b60405160ff90911681526020016101e2565b34801561038157600080fd5b506102356108e3565b34801561039657600080fd5b506003546101d8565b3480156103ab57600080fd5b506101a56103ba3660046113d6565b610933565b3480156103cb57600080fd5b506101a56109b6565b3480156103e057600080fd5b506002546001600160a01b03166102a9565b3480156103fe57600080fd5b506101a561040d366004611248565b610a2e565b34801561041e57600080fd5b506101a561042d366004611265565b610a7b565b34801561043e57600080fd5b506000546102a9906001600160a01b031681565b34801561045e57600080fd5b5060085460ff1661033e565b6101a5610478366004611316565b610ae7565b6004546001600160a01b031633146104a8576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf5952069926104f792900460ff161515815260200190565b60405180910390a1565b6004546001600160a01b0316331461052c576040516327e1f1e560e01b815260040160405180910390fd5b6004546001600160a01b038281169116141561055b576040516336a1c33f60e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e5490600090a250565b6004546001600160a01b031633146105d0576040516327e1f1e560e01b815260040160405180910390fd5b6005546001600160a01b03828116911614156105ff576040516336a1c33f60e01b815260040160405180910390fd5b600580546001600160a01b0319166001600160a01b0383169081179091556040517fe6bc4ba4d04102f8f1140ad88cba6b7bd753b0391069bca06f44a955507dbb9390600090a250565b6060600860019054906101000a90046001600160a01b03166001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561069957600080fd5b505afa1580156106ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106d5919081019061129f565b905090565b6004546001600160a01b03163314610705576040516327e1f1e560e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020015b60405180910390a150565b6004546001600160a01b03163314610785576040516327e1f1e560e01b815260040160405180910390fd5b60038190556040518181527f1c853e705f5e96d9076d1f48114d62650faf218827df3fed720227b3dbf18c5a9060200161074f565b6004546001600160a01b031633146107e5576040516327e1f1e560e01b815260040160405180910390fd5b806007541415610808576040516336a1c33f60e01b815260040160405180910390fd5b80610826576040516313a2a85760e21b815260040160405180910390fd5b60078190556040518181527fc9993a13ab327e43d2c7222016ea042dc8e0889c91571ae6062990deacb4540c9060200161074f565b6000600860019054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156108ab57600080fd5b505afa1580156108bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d59190611408565b6060600860019054906101000a90046001600160a01b03166001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561069957600080fd5b6004546001600160a01b0316331461095e576040516327e1f1e560e01b815260040160405180910390fd5b806006541415610981576040516336a1c33f60e01b815260040160405180910390fd5b60068190556040518181527f1c068decb3b5138b265d62b22c4c2d8191a2e0bd3745e97b5b0ff66fa852eca59060200161074f565b6004546001600160a01b031633146109e1576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf5952069916104f791600160a01b90910460ff161515815260200190565b6004546001600160a01b03163314610a59576040516327e1f1e560e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b03163314610aa6576040516327e1f1e560e01b815260040160405180910390fd5b6008805460ff19168215159081179091556040519081527fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e099060200161074f565b60085460ff1615610b0b57604051630e2f42c960e31b815260040160405180910390fd5b60035481511015610b2f5760405163617ab12d60e11b815260040160405180910390fd5b6000610b48826040015183600001518460600151610bb5565b905080826020015114610b6e576040516301bfaa2560e51b815260040160405180910390fd5b610b7733610cdd565b15610b9557604051632e70c0b160e01b815260040160405180910390fd5b610bb1826000015183602001518460a001518560800151610d7a565b5050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001808510610bf85760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff1610610c2a57604051633bbde0bf60e21b815260040160405180910390fd5b60015460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610c8291600401611473565b60206040518083038186803b158015610c9a57600080fd5b505afa158015610cae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd291906113ef565b9150505b9392505050565b60008054600160a01b900460ff16610cf757506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b158015610d3c57600080fd5b505afa158015610d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d749190611282565b92915050565b6040805160a081018252858152602081018590526000818301819052606082018590526080820184905260025492516378d60cd760e01b815291926001600160a01b0316916378d60cd791610dd4918591906004016114df565b600060405180830381600087803b158015610dee57600080fd5b505af1158015610e02573d6000803e3d6000fd5b5050600254600554600754600654610e4c95506001600160a01b0393841694509190921691610e3b91610e35908b610e53565b90610e5f565b610e45878a6115be565b6000610e6b565b5050505050565b6000610cd682846115f8565b6000610cd682846115d6565b803414610ebf5760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d617463680000000000000000000000000060448201526064015b60405180910390fd5b600854610edc9061010090046001600160a01b0316338785610efb565b8215610e4c57600854610e4c9061010090046001600160a01b03163386865b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052610f6a908590610f70565b50505050565b6000610fc5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661105a9092919063ffffffff16565b8051909150156110555780806020019051810190610fe39190611282565b6110555760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610eb6565b505050565b60606110698484600085611071565b949350505050565b6060824710156110e95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610eb6565b6001600160a01b0385163b6111405760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610eb6565b600080866001600160a01b0316858760405161115c9190611457565b60006040518083038185875af1925050503d8060008114611199576040519150601f19603f3d011682016040523d82523d6000602084013e61119e565b606091505b50915091506111ae8282866111b9565b979650505050505050565b606083156111c8575081610cd6565b8251156111d85782518084602001fd5b8160405162461bcd60e51b8152600401610eb691906114cc565b600082601f83011261120357600080fd5b813561121661121182611596565b611565565b81815284602083860101111561122b57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561125a57600080fd5b8135610cd68161166f565b60006020828403121561127757600080fd5b8135610cd681611687565b60006020828403121561129457600080fd5b8151610cd681611687565b6000602082840312156112b157600080fd5b815167ffffffffffffffff8111156112c857600080fd5b8201601f810184136112d957600080fd5b80516112e761121182611596565b8181528560208385010111156112fc57600080fd5b61130d826020830160208601611617565b95945050505050565b60006020828403121561132857600080fd5b813567ffffffffffffffff8082111561134057600080fd5b9083019060c0828603121561135457600080fd5b61135c61153c565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff8116811461139757600080fd5b60608201526080830135828111156113ae57600080fd5b6113ba878286016111f2565b60808301525060a083013560a082015280935050505092915050565b6000602082840312156113e857600080fd5b5035919050565b60006020828403121561140157600080fd5b5051919050565b60006020828403121561141a57600080fd5b815160ff81168114610cd657600080fd5b60008151808452611443816020860160208601611617565b601f01601f19169290920160200192915050565b60008251611469818460208701611617565b9190910192915050565b60608101818360005b600381101561149b57815183526020928301929091019060010161147c565b50505092915050565b60208101600283106114c657634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000610cd6602083018461142b565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261152360e084018261142b565b9150506001600160a01b03831660208301529392505050565b60405160c0810167ffffffffffffffff8111828210171561155f5761155f611659565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561158e5761158e611659565b604052919050565b600067ffffffffffffffff8211156115b0576115b0611659565b50601f01601f191660200190565b600082198211156115d1576115d1611643565b500190565b6000826115f357634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561161257611612611643565b500290565b60005b8381101561163257818101518382015260200161161a565b83811115610f6a5750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461168457600080fd5b50565b801515811461168457600080fdfea26469706673582212202b4477478de4ad9c5352feef2ed42b54df9881eb5af86b39124faf3d721d9cc364736f6c63430008070033';

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
