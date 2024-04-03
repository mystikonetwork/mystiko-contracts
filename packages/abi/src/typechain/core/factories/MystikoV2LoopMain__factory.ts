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
  '0x60806040525f80546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb179055348015610035575f80fd5b50604051611316380380611316833981016040819052610054916100ab565b600180546001600160a01b03199081166001600160a01b0394851617909155600380548216948416949094179093556002805490931691161790556100f5565b6001600160a01b03811681146100a8575f80fd5b50565b5f805f606084860312156100bd575f80fd5b83516100c881610094565b60208501519093506100d981610094565b60408501519092506100ea81610094565b809150509250925092565b611214806101025f395ff3fe608060405260043610610123575f3560e01c8063cfc7e2da116100a1578063e8183c4411610071578063ec571c6a11610057578063ec571c6a14610301578063ed6ea33a1461031f578063f6afe88f14610336575f80fd5b8063e8183c44146102c3578063ea0cde85146102e2575f80fd5b8063cfc7e2da1461025f578063dd757c3414610273578063ddac5dc114610287578063e19abef8146102a4575f80fd5b80632421e155116100f65780633fe3347a116100dc5780633fe3347a146101f6578063a49f78c414610211578063b1c3942214610230575f80fd5b80632421e155146101a557806330f49cac146101d7575f80fd5b806301dbf19f146101275780630ba959091461013d5780631ba46cfd146101605780631f02d71514610186575b5f80fd5b348015610132575f80fd5b5061013b610349565b005b348015610148575f80fd5b506006545b6040519081526020015b60405180910390f35b34801561016b575f80fd5b505f5b6040516001600160a01b039091168152602001610157565b348015610191575f80fd5b5060015461016e906001600160a01b031681565b3480156101b0575f80fd5b50604080518082018252600481526306c6f6f760e41b602082015290516101579190610e59565b3480156101e2575f80fd5b5061013b6101f1366004610e89565b610433565b348015610201575f80fd5b5060016040516101579190610ea4565b34801561021c575f80fd5b5060025461016e906001600160a01b031681565b34801561023b575f80fd5b505f5461024f90600160a01b900460ff1681565b6040519015158152602001610157565b34801561026a575f80fd5b5060055461014d565b34801561027e575f80fd5b5061013b610526565b348015610292575f80fd5b506004546001600160a01b031661016e565b3480156102af575f80fd5b5061013b6102be366004610e89565b610604565b3480156102ce575f80fd5b5061013b6102dd366004610eca565b6106c5565b3480156102ed575f80fd5b5061013b6102fc366004610ef7565b6107bf565b34801561030c575f80fd5b505f5461016e906001600160a01b031681565b34801561032a575f80fd5b5060075460ff1661024f565b61013b610344366004610fd8565b610892565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610390573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103b49190611092565b6001600160a01b0316146103db5760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261042992900460ff161515815260200190565b60405180910390a1565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561047a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049e9190611092565b6001600160a01b0316146104c55760405163177bc95160e11b815260040160405180910390fd5b5f805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020015b60405180910390a150565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561056d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105919190611092565b6001600160a01b0316146105b85760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161042991600160a01b90910460ff161515815260200190565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561064b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061066f9190611092565b6001600160a01b0316146106965760405163177bc95160e11b815260040160405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561070c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107309190611092565b6001600160a01b0316146107575760405163177bc95160e11b815260040160405180910390fd5b8181111561077857604051636003e82160e11b815260040160405180910390fd5b6006829055600581905560408051838152602081018390527f7633004c7a229869aeea10db4ff3e57e3b1534aeb2c9e72c5db25f965895c330910160405180910390a15050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610806573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061082a9190611092565b6001600160a01b0316146108515760405163177bc95160e11b815260040160405180910390fd5b6007805460ff19168215159081179091556040519081527fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e099060200161051b565b60075460ff16156108b657604051630e2f42c960e31b815260040160405180910390fd5b600554815110156108da5760405163617ab12d60e11b815260040160405180910390fd5b600654815111156108fe57604051630625040160e01b815260040160405180910390fd5b5f6109158260400151835f01518460600151610981565b90508082602001511461093b576040516301bfaa2560e51b815260040160405180910390fd5b61094433610a95565b1561096257604051632e70c0b160e01b815260040160405180910390fd5b61097d825f015183602001518460a001518560800151610b1e565b5050565b5f7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106109c35760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff16106109f557604051633bbde0bf60e21b815260040160405180910390fd5b60035460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610a4d916004016110ad565b602060405180830381865afa158015610a68573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a8c91906110dd565b95945050505050565b5f8054600160a01b900460ff16610aad57505f919050565b5f5460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d90602401602060405180830381865afa158015610af4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b1891906110f4565b92915050565b6040805160a081018252858152602081018590525f81830181905260608201859052608082018490526004805493516378d60cd760e01b815292936001600160a01b0316926378d60cd792610b759286920161110f565b5f604051808303815f87803b158015610b8c575f80fd5b505af1158015610b9e573d5f803e3d5ffd5b505050505f6040518060400160405280610bb55f90565b6001600160a01b039081168252602091820189905260025460405163474aa58960e01b81528451831660048201529284015160248401529293505f92169063474aa589906044016040805180830381865afa158015610c16573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c3a919061116b565b6004546020820151919250610c67916001600160a01b0390911690610c5f888b6111bf565b84515f610c70565b50505050505050565b80610c7b83856111bf565b610c8591906111bf565b3414610cd85760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e000000000000000000000000000060448201526064015b60405180910390fd5b5f856001600160a01b0316846040515f6040518083038185875af1925050503d805f8114610d21576040519150601f19603f3d011682016040523d82523d5f602084013e610d26565b606091505b5050905080610d775760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c6564000000000000000000006044820152606401610ccf565b5f856001600160a01b0316846040515f6040518083038185875af1925050503d805f8114610dc0576040519150601f19603f3d011682016040523d82523d5f602084013e610dc5565b606091505b5050905080610c675760405162461bcd60e51b815260206004820152601660248201527f747820666565207472616e73666572206661696c6564000000000000000000006044820152606401610ccf565b5f81518084525f5b81811015610e3a57602081850181015186830182015201610e1e565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f610e6b6020830184610e16565b9392505050565b6001600160a01b0381168114610e86575f80fd5b50565b5f60208284031215610e99575f80fd5b8135610e6b81610e72565b6020810160028310610ec457634e487b7160e01b5f52602160045260245ffd5b91905290565b5f8060408385031215610edb575f80fd5b50508035926020909101359150565b8015158114610e86575f80fd5b5f60208284031215610f07575f80fd5b8135610e6b81610eea565b634e487b7160e01b5f52604160045260245ffd5b60405160c0810167ffffffffffffffff81118282101715610f4957610f49610f12565b60405290565b5f82601f830112610f5e575f80fd5b813567ffffffffffffffff80821115610f7957610f79610f12565b604051601f8301601f19908116603f01168101908282118183101715610fa157610fa1610f12565b81604052838152866020858801011115610fb9575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f60208284031215610fe8575f80fd5b813567ffffffffffffffff80821115610fff575f80fd5b9083019060c08286031215611012575f80fd5b61101a610f26565b82358152602083013560208201526040830135604082015260608301356fffffffffffffffffffffffffffffffff81168114611054575f80fd5b606082015260808301358281111561106a575f80fd5b61107687828601610f4f565b60808301525060a083013560a082015280935050505092915050565b5f602082840312156110a2575f80fd5b8151610e6b81610e72565b6060810181835f5b60038110156110d45781518352602092830192909101906001016110b5565b50505092915050565b5f602082840312156110ed575f80fd5b5051919050565b5f60208284031215611104575f80fd5b8151610e6b81610eea565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201525f608084015160a060c084015261115260e0840182610e16565b9150506001600160a01b03831660208301529392505050565b5f6040828403121561117b575f80fd5b6040516040810181811067ffffffffffffffff8211171561119e5761119e610f12565b6040528251815260208301516111b381610e72565b60208201529392505050565b80820180821115610b1857634e487b7160e01b5f52601160045260245ffdfea264697066735822122055d25c3d80c77057be6764a01c437f3ca886d62f294c9055724763dcf5b80d2a64736f6c63430008140033';

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
