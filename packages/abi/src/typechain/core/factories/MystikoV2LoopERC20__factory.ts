/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2LoopERC20, MystikoV2LoopERC20Interface, IMystikoLoop } from '../MystikoV2LoopERC20';

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
      {
        internalType: 'address',
        name: '_settingsCenter',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMystikoLoop.LoopLocalConfig',
        name: '_localConfig',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
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
    name: 'AssociatedPoolNotSet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CertificateInvalid',
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
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HashKGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotSupport',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RandomSGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SanctionedAddress',
    type: 'error',
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
        internalType: 'struct IMystikoLoop.LoopDepositRequest',
        name: '_request',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '_certificateDeadline',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_certificateSignature',
        type: 'bytes',
      },
    ],
    name: 'certDeposit',
    outputs: [],
    stateMutability: 'payable',
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
        internalType: 'struct IMystikoLoop.LoopDepositRequest',
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
    name: 'isCertificateCheckEnabled',
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
    name: 'settings',
    outputs: [
      {
        internalType: 'contract MystikoSettings',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60a06040523461013e576040516110b338819003601f8101601f191683016001600160401b038111848210176101285783928291604052833981010360a0811261013e5781516001600160a01b0381169081900361013e576020830151926001600160a01b038416840361013e5760408101516001600160a01b038116939084900361013e57604090605f19011261013e576040805190810192906001600160401b038411818510176101285760209360405260806060840151938483520151938491015260018060a01b0319600054161760005560015560025560018060a01b03196003541617600355608052604051610f6f90816101448239608051818181610221015281816102c0015281816106840152818161090801528181610a930152610adc0152f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c80630ba9590914610b2d578063176de7a814610ab75780631ba46cfd14610a735780632421e15514610a2b5780633c245a6f146103b05780633fe3347a14610394578063bc58770614610346578063c2d416011461029a578063c9230c5d146101fc578063cfc7e2da146101d9578063ddac5dc1146101ad578063e06174e414610186578063ed6ea33a146100f95763f6afe88f146100b757600080fd5b60203660031901126100f65760043567ffffffffffffffff81116100f257906100e560049236908401610c30565b5063e7a24ff960e01b8152fd5b5080fd5b80fd5b50346100f657806003193601126100f657602460206001600160a01b03600354166040519283809263bb07320560e01b82523060048301525afa90811561017b576020929161014e575b506040519015158152f35b61016e9150823d8411610174575b6101668183610b90565b810190610dae565b38610143565b503d61015c565b6040513d84823e3d90fd5b50346100f657806003193601126100f65760206001600160a01b0360035416604051908152f35b50346100f657806003193601126100f65760206101c8610e3d565b6001600160a01b0360405191168152f35b50346100f657806003193601126100f65760206101f4610dc6565b604051908152f35b50346100f657806003193601126100f6576040516306fdde0360e01b815281816004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561017b57826102739392610277575b5050604051918291602083526020830190610b6b565b0390f35b61029392503d8091833e61028b8183610b90565b810190610d4f565b388061025d565b50346100f657806003193601126100f65760405163313ce56760e01b81526020816004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561017b578291610306575b60208260ff60405191168152f35b90506020813d60201161033e575b8161032160209383610b90565b810103126100f2575160ff811681036100f25760209150386102f8565b3d9150610314565b50346100f657806003193601126100f657600460206001600160a01b036003541660405192838092635e2c3b8360e11b82525afa90811561017b576020929161014e57506040519015158152f35b50346100f657806003193601126100f657602090604051908152f35b5060603660031901126100f65760043567ffffffffffffffff81116100f2576103dd903690600401610c30565b60443567ffffffffffffffff8111610a27576103fd903690600401610be4565b906001600160a01b03600354169160405163bb07320560e01b8152306004820152602081602481875afa9081156107c5578591610a08575b506109f957604051635e2c3b8360e11b8152602081600481875afa9081156107c55785916109da575b506108d2575b50805161046f610dc6565b116108c357805161047e610cc9565b106108b45760408101519181516fffffffffffffffffffffffffffffffff6060840151167f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018510156108a5577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001811015610896576001600160a01b0386541691604051956060870187811067ffffffffffffffff8211176108825760405286526020860152604085015260405180946304b98e1d60e31b82526004820187905b60038210610868575050506064816020935afa928315610816578493610830575b5060208201928351036108215760206024916040519283809263df592f7d60e01b82523260048301525afa9081156108165784916107f7575b506107e8578051915190608060a0820151910151916040519060a0820182811067ffffffffffffffff8211176107d45790869160405285835260208301908152604083019282845260608101858152608082019687526001600160a01b036105fe610e3d565b1696873b156107d05761064e9160405196879586956378d60cd760e01b8752604060048801525160448701525160648601525160848501525160a48401525160a060c484015260e4830190610b6b565b836024830152038183875af180156107c5576107b1575b50820180921161079d573461075857828061070c926001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016946040519060208201926323b872dd60e01b845233602484015260448301526064820152606481526106d7608482610b90565b519082865af13d15610750573d906106ee82610bc8565b916106fc6040519384610b90565b82523d85602084013e5b83610edb565b8051908115159182610735575b5050610723575080f35b635274afe760e01b8252600452602490fd5b6107489250602080918301019101610dae565b153880610719565b606090610706565b60405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d61746368000000000000000000000000006044820152606490fd5b634e487b7160e01b83526011600452602483fd5b846107be91959295610b90565b9238610665565b6040513d87823e3d90fd5b8480fd5b634e487b7160e01b87526041600452602487fd5b632e70c0b160e01b8352600483fd5b610810915060203d602011610174576101668183610b90565b38610598565b6040513d86823e3d90fd5b6301bfaa2560e51b8452600484fd5b9092506020813d602011610860575b8161084c60209383610b90565b8101031261085c5751913861055f565b8380fd5b3d915061083f565b82935060208091600193945181520193019101869261053e565b634e487b7160e01b89526041600452602489fd5b633bbde0bf60e21b8652600486fd5b63805f2a4960e01b8652600486fd5b630625040160e01b8352600483fd5b63617ab12d60e11b8352600483fd5b6040516080810181811067ffffffffffffffff8211176109c6576020916001600160a01b039160405232815261097983820194837f00000000000000000000000000000000000000000000000000000000000000001686526040830160243581526060840191825284604051978896879663849e8b9f60e01b88528960048901525116602487015251166044850152516064840152516080608484015260a4830190610b6b565b0381865afa9081156108165784916109a7575b50156109985738610464565b633042041f60e21b8352600483fd5b6109c0915060203d602011610174576101668183610b90565b3861098c565b634e487b7160e01b86526041600452602486fd5b6109f3915060203d602011610174576101668183610b90565b3861045e565b630e2f42c960e31b8452600484fd5b610a21915060203d602011610174576101668183610b90565b38610435565b8280fd5b50346100f657806003193601126100f65750610273604051610a4e604082610b90565b600481526306c6f6f760e41b6020820152604051918291602083526020830190610b6b565b50346100f657806003193601126100f65760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346100f657806003193601126100f6576040516395d89b4160e01b815281816004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561017b57826102739392610277575050604051918291602083526020830190610b6b565b50346100f657806003193601126100f65760206101f4610cc9565b60005b838110610b5b5750506000910152565b8181015183820152602001610b4b565b90602091610b8481518092818552858086019101610b48565b601f01601f1916010190565b90601f8019910116810190811067ffffffffffffffff821117610bb257604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff8111610bb257601f01601f191660200190565b81601f82011215610c2b57803590610bfb82610bc8565b92610c096040519485610b90565b82845260208383010111610c2b57816000926020809301838601378301015290565b600080fd5b91909160c081840312610c2b576040519060c0820182811067ffffffffffffffff821117610bb257604052819381358352602082013560208401526040820135604084015260608201356fffffffffffffffffffffffffffffffff81168103610c2b57606084015260808201359167ffffffffffffffff8311610c2b57610cbd60a0939284938301610be4565b60808501520135910152565b602460206001600160a01b03600354166040519283809263473a063160e01b82523060048301525afa908115610d4357600091610d11575b5080610d0e575060025490565b90565b906020823d602011610d3b575b81610d2b60209383610b90565b810103126100f657505138610d01565b3d9150610d1e565b6040513d6000823e3d90fd5b602081830312610c2b5780519067ffffffffffffffff8211610c2b570181601f82011215610c2b578051610d8281610bc8565b92610d906040519485610b90565b81845260208284010111610c2b57610d0e9160208085019101610b48565b90816020910312610c2b57518015158103610c2b5790565b602460206001600160a01b036003541660405192838092635525984960e01b82523060048301525afa908115610d4357600091610e0b575b5080610d0e575060015490565b906020823d602011610e35575b81610e2560209383610b90565b810103126100f657505138610dfe565b3d9150610e18565b602460206001600160a01b0360035416604051928380926341fb697960e01b82523060048301525afa908115610d4357600091610e99575b506001600160a01b03811615610e885790565b6306f3d63360e51b60005260046000fd5b6020813d602011610ed3575b81610eb260209383610b90565b810103126100f25751906001600160a01b03821682036100f6575038610e75565b3d9150610ea5565b90610f015750805115610ef057805190602001fd5b630a12f52160e11b60005260046000fd5b81511580610f30575b610f12575090565b6001600160a01b0390639996b31560e01b6000521660045260246000fd5b50803b15610f0a56fea2646970667358221220b2af916d243b6f65838307b5ab2c03eb4455406f10f7785dc029be308936f76f64736f6c634300081a0033';

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
    _settingsCenter: string,
    _localConfig: IMystikoLoop.LoopLocalConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2LoopERC20> {
    return super.deploy(
      _hasher3,
      _token,
      _settingsCenter,
      _localConfig,
      overrides || {},
    ) as Promise<MystikoV2LoopERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    _settingsCenter: string,
    _localConfig: IMystikoLoop.LoopLocalConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _token, _settingsCenter, _localConfig, overrides || {});
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
