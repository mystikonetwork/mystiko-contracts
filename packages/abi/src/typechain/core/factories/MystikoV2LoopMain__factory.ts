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
      {
        internalType: 'address',
        name: '_daoCenter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_txFeeProxy',
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
    name: 'MinAmountGreaterThanMaxAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyMystikoDAO',
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
        internalType: 'uint256',
        name: 'maxAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minAmount',
        type: 'uint256',
      },
    ],
    name: 'DepositAmountLimits',
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
    name: 'DepositsDisabled',
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
    name: 'assetAddress',
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
    name: 'assetType',
    outputs: [
      {
        internalType: 'enum AssetPool.AssetType',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
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
    inputs: [],
    name: 'center',
    outputs: [
      {
        internalType: 'contract IMystikoGovernorCenter',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'queryDepositFee',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'feePool',
            type: 'address',
          },
        ],
        internalType: 'struct QueryFeeResponse',
        name: '',
        type: 'tuple',
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
    inputs: [],
    name: 'txFeeProxy',
    outputs: [
      {
        internalType: 'contract IFeeQuery',
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
        internalType: 'uint256',
        name: '_maxAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minAmount',
        type: 'uint256',
      },
    ],
    name: 'updateDepositAmountLimits',
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
  '0x60806040525f80546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb179055348015610035575f80fd5b50604051620013b3380380620013b3833981016040819052610056916100ad565b600180546001600160a01b03199081166001600160a01b0394851617909155600380548216948416949094179093556002805490931691161790556100f7565b6001600160a01b03811681146100aa575f80fd5b50565b5f805f606084860312156100bf575f80fd5b83516100ca81610096565b60208501519093506100db81610096565b60408501519092506100ec81610096565b809150509250925092565b6112ae80620001055f395ff3fe60806040526004361061013d575f3560e01c8063b1c39422116100bb578063e8183c4411610071578063ec571c6a11610057578063ec571c6a1461035e578063ed6ea33a1461037c578063f6afe88f14610393575f80fd5b8063e8183c4414610320578063ea0cde851461033f575f80fd5b8063dd757c34116100a1578063dd757c34146102d0578063ddac5dc1146102e4578063e19abef814610301575f80fd5b8063b1c394221461028d578063cfc7e2da146102bc575f80fd5b80631f02d7151161011057806330f49cac116100f657806330f49cac146102345780633fe3347a14610253578063a49f78c41461026e575f80fd5b80631f02d715146101e35780632421e15514610202575f80fd5b806301dbf19f146101415780630ab62f1b146101575780630ba959091461019f5780631ba46cfd146101bd575b5f80fd5b34801561014c575f80fd5b506101556103a6565b005b348015610162575f80fd5b50610176610171366004610ea0565b610490565b60408051825181526020928301516001600160a01b031692810192909252015b60405180910390f35b3480156101aa575f80fd5b506006545b604051908152602001610196565b3480156101c8575f80fd5b505f5b6040516001600160a01b039091168152602001610196565b3480156101ee575f80fd5b506001546101cb906001600160a01b031681565b34801561020d575f80fd5b50604080518082018252600481526306c6f6f760e41b602082015290516101969190610efa565b34801561023f575f80fd5b5061015561024e366004610f23565b610543565b34801561025e575f80fd5b5060016040516101969190610f3e565b348015610279575f80fd5b506002546101cb906001600160a01b031681565b348015610298575f80fd5b505f546102ac90600160a01b900460ff1681565b6040519015158152602001610196565b3480156102c7575f80fd5b506005546101af565b3480156102db575f80fd5b50610155610636565b3480156102ef575f80fd5b506004546001600160a01b03166101cb565b34801561030c575f80fd5b5061015561031b366004610f23565b610714565b34801561032b575f80fd5b5061015561033a366004610f64565b6107d5565b34801561034a575f80fd5b50610155610359366004610f91565b6108cf565b348015610369575f80fd5b505f546101cb906001600160a01b031681565b348015610387575f80fd5b5060075460ff166102ac565b6101556103a1366004611072565b6109a2565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156103ed573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610411919061112c565b6001600160a01b0316146104385760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261048692900460ff161515815260200190565b60405180910390a1565b604080518082019091525f80825260208201525f60405180604001604052806104b65f90565b6001600160a01b039081168252602091820186905260025460405163474aa58960e01b8152845183166004820152928401516024840152929350919091169063474aa589906044016040805180830381865afa158015610518573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061053c9190611147565b9392505050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561058a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105ae919061112c565b6001600160a01b0316146105d55760405163177bc95160e11b815260040160405180910390fd5b5f805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020015b60405180910390a150565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561067d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106a1919061112c565b6001600160a01b0316146106c85760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161048691600160a01b90910460ff161515815260200190565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561075b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061077f919061112c565b6001600160a01b0316146107a65760405163177bc95160e11b815260040160405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561081c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610840919061112c565b6001600160a01b0316146108675760405163177bc95160e11b815260040160405180910390fd5b8181111561088857604051636003e82160e11b815260040160405180910390fd5b6006829055600581905560408051838152602081018390527f7633004c7a229869aeea10db4ff3e57e3b1534aeb2c9e72c5db25f965895c330910160405180910390a15050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610916573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061093a919061112c565b6001600160a01b0316146109615760405163177bc95160e11b815260040160405180910390fd5b6007805460ff19168215159081179091556040519081527fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e099060200161062b565b60075460ff16156109c657604051630e2f42c960e31b815260040160405180910390fd5b600554815110156109ea5760405163617ab12d60e11b815260040160405180910390fd5b60065481511115610a0e57604051630625040160e01b815260040160405180910390fd5b5f610a258260400151835f01518460600151610a91565b905080826020015114610a4b576040516301bfaa2560e51b815260040160405180910390fd5b610a5433610ba5565b15610a7257604051632e70c0b160e01b815260040160405180910390fd5b610a8d825f015183602001518460a001518560800151610c2e565b5050565b5f7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001808510610ad35760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff1610610b0557604051633bbde0bf60e21b815260040160405180910390fd5b60035460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610b5d9160040161119b565b602060405180830381865afa158015610b78573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b9c91906111cb565b95945050505050565b5f8054600160a01b900460ff16610bbd57505f919050565b5f5460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d90602401602060405180830381865afa158015610c04573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c2891906111e2565b92915050565b6040805160a081018252858152602081018590525f81830181905260608201859052608082018490526004805493516378d60cd760e01b815292936001600160a01b0316926378d60cd792610c85928692016111fd565b5f604051808303815f87803b158015610c9c575f80fd5b505af1158015610cae573d5f803e3d5ffd5b505050505f610cbc86610490565b6004546020820151919250610ce9916001600160a01b0390911690610ce1878a611259565b84515f610cf1565b505050505050565b80610cfc8385611259565b610d069190611259565b3414610d595760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064015b60405180910390fd5b5f856001600160a01b0316846040515f6040518083038185875af1925050503d805f8114610da2576040519150601f19603f3d011682016040523d82523d5f602084013e610da7565b606091505b5050905080610df85760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c6564000000000000000000006044820152606401610d50565b5f856001600160a01b0316846040515f6040518083038185875af1925050503d805f8114610e41576040519150601f19603f3d011682016040523d82523d5f602084013e610e46565b606091505b5050905080610e975760405162461bcd60e51b815260206004820152601660248201527f747820666565207472616e73666572206661696c6564000000000000000000006044820152606401610d50565b50505050505050565b5f60208284031215610eb0575f80fd5b5035919050565b5f81518084525f5b81811015610edb57602081850181015186830182015201610ebf565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f61053c6020830184610eb7565b6001600160a01b0381168114610f20575f80fd5b50565b5f60208284031215610f33575f80fd5b813561053c81610f0c565b6020810160028310610f5e57634e487b7160e01b5f52602160045260245ffd5b91905290565b5f8060408385031215610f75575f80fd5b50508035926020909101359150565b8015158114610f20575f80fd5b5f60208284031215610fa1575f80fd5b813561053c81610f84565b634e487b7160e01b5f52604160045260245ffd5b60405160c0810167ffffffffffffffff81118282101715610fe357610fe3610fac565b60405290565b5f82601f830112610ff8575f80fd5b813567ffffffffffffffff8082111561101357611013610fac565b604051601f8301601f19908116603f0116810190828211818310171561103b5761103b610fac565b81604052838152866020858801011115611053575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f60208284031215611082575f80fd5b813567ffffffffffffffff80821115611099575f80fd5b9083019060c082860312156110ac575f80fd5b6110b4610fc0565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff811681146110ee575f80fd5b6060820152608083013582811115611104575f80fd5b61111087828601610fe9565b60808301525060a083013560a082015280935050505092915050565b5f6020828403121561113c575f80fd5b815161053c81610f0c565b5f60408284031215611157575f80fd5b6040516040810181811067ffffffffffffffff8211171561117a5761117a610fac565b60405282518152602083015161118f81610f0c565b60208201529392505050565b6060810181835f5b60038110156111c25781518352602092830192909101906001016111a3565b50505092915050565b5f602082840312156111db575f80fd5b5051919050565b5f602082840312156111f2575f80fd5b815161053c81610f84565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201525f608084015160a060c084015261124060e0840182610eb7565b9150506001600160a01b03831660208301529392505050565b80820180821115610c2857634e487b7160e01b5f52601160045260245ffdfea2646970667358221220c953e9469f3cda22e513b330e19edf23e28364c88124629e4407f8383c4b6d5464736f6c63430008140033';

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
    _daoCenter: string,
    _txFeeProxy: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2LoopMain> {
    return super.deploy(_hasher3, _daoCenter, _txFeeProxy, overrides || {}) as Promise<MystikoV2LoopMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    _daoCenter: string,
    _txFeeProxy: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _daoCenter, _txFeeProxy, overrides || {});
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
