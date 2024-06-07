/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MockMystikoToken, MockMystikoTokenInterface } from '../MockMystikoToken';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ECDSAInvalidSignature',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256',
      },
    ],
    name: 'ECDSAInvalidSignatureLength',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'ECDSAInvalidSignatureS',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'allowance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'ERC20InsufficientAllowance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'ERC20InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'approver',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidApprover',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidSender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidSpender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'ERC2612ExpiredSignature',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC2612InvalidSigner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'currentNonce',
        type: 'uint256',
      },
    ],
    name: 'InvalidAccountNonce',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidShortString',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str',
        type: 'string',
      },
    ],
    name: 'StringTooLong',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'EIP712DomainChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
    name: 'decimals',
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
    name: 'eip712Domain',
    outputs: [
      {
        internalType: 'bytes1',
        name: 'fields',
        type: 'bytes1',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'verifyingContract',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        internalType: 'uint256[]',
        name: 'extensions',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
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
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
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
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
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
    name: 'totalSupply',
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
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x61016060405234801561001157600080fd5b506040518060400160405280600d81526020016c26bcb9ba34b5b7902a37b5b2b760991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c26bcb9ba34b5b7902a37b5b2b760991b81525060405180604001604052806003815260200162585a4b60e81b81525081600390816100a49190610408565b5060046100b18282610408565b506100c19150839050600561018f565b610120526100d081600661018f565b61014052815160208084019190912060e052815190820120610100524660a05261015d60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c0525061018a336101776012600a6105c3565b61018590633b9aca006105d9565b6101c2565b610675565b60006020835110156101ab576101a483610201565b90506101bc565b816101b68482610408565b5060ff90505b92915050565b6001600160a01b0382166101f15760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b6101fd6000838361023f565b5050565b600080829050601f8151111561022c578260405163305a27a960e01b81526004016101e891906105f0565b80516102378261063e565b179392505050565b6001600160a01b03831661026a57806002600082825461025f9190610662565b909155506102dc9050565b6001600160a01b038316600090815260208190526040902054818110156102bd5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101e8565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166102f857600280548290039055610317565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161035c91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061039357607f821691505b6020821081036103b357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561040357806000526020600020601f840160051c810160208510156103e05750805b601f840160051c820191505b8181101561040057600081556001016103ec565b50505b505050565b81516001600160401b0381111561042157610421610369565b6104358161042f845461037f565b846103b9565b6020601f82116001811461046957600083156104515750848201515b600019600385901b1c1916600184901b178455610400565b600084815260208120601f198516915b828110156104995787850151825560209485019460019092019101610479565b50848210156104b75786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b6001815b6001841115610517578085048111156104fb576104fb6104c6565b600184161561050957908102905b60019390931c9280026104e0565b935093915050565b60008261052e575060016101bc565b8161053b575060006101bc565b8160018114610551576002811461055b57610577565b60019150506101bc565b60ff84111561056c5761056c6104c6565b50506001821b6101bc565b5060208310610133831016604e8410600b841016171561059a575081810a6101bc565b6105a760001984846104dc565b80600019048211156105bb576105bb6104c6565b029392505050565b60006105d260ff84168361051f565b9392505050565b80820281158282048414176101bc576101bc6104c6565b602081526000825180602084015260005b8181101561061e5760208186018101516040868401015201610601565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156103b35760001960209190910360031b1b16919050565b808201808211156101bc576101bc6104c6565b60805160a05160c05160e051610100516101205161014051610f0f6106cf600039600061070e015260006106e10152600061068901526000610661015260006105bc015260006105e6015260006106100152610f0f6000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806370a082311161008c57806395d89b411161006657806395d89b41146101b8578063a9059cbb146101c0578063d505accf146101d3578063dd62ed3e146101e857600080fd5b806370a08231146101615780637ecebe001461018a57806384b0196e1461019d57600080fd5b806323b872dd116100bd57806323b872dd14610137578063313ce5671461014a5780633644e5151461015957600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec610221565b6040516100f99190610c72565b60405180910390f35b610115610110366004610ca8565b6102b3565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b610115610145366004610cd2565b6102cd565b604051601281526020016100f9565b6101296102f1565b61012961016f366004610d0f565b6001600160a01b031660009081526020819052604090205490565b610129610198366004610d0f565b610300565b6101a561031e565b6040516100f99796959493929190610d2a565b6100ec610364565b6101156101ce366004610ca8565b610373565b6101e66101e1366004610dc2565b610381565b005b6101296101f6366004610e35565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461023090610e68565b80601f016020809104026020016040519081016040528092919081815260200182805461025c90610e68565b80156102a95780601f1061027e576101008083540402835291602001916102a9565b820191906000526020600020905b81548152906001019060200180831161028c57829003601f168201915b5050505050905090565b6000336102c18185856104c0565b60019150505b92915050565b6000336102db8582856104d2565b6102e6858585610550565b506001949350505050565b60006102fb6105af565b905090565b6001600160a01b0381166000908152600760205260408120546102c7565b6000606080600080600060606103326106da565b61033a610707565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461023090610e68565b6000336102c1818585610550565b834211156103aa5760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886103f78c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061045282610734565b9050600061046282878787610761565b9050896001600160a01b0316816001600160a01b0316146104a9576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016103a1565b6104b48a8a8a6104c0565b50505050505050505050565b6104cd838383600161078f565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461054a578181101561053b57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016103a1565b61054a8484848403600061078f565b50505050565b6001600160a01b03831661057a57604051634b637e8f60e11b8152600060048201526024016103a1565b6001600160a01b0382166105a45760405163ec442f0560e01b8152600060048201526024016103a1565b6104cd838383610864565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561060857507f000000000000000000000000000000000000000000000000000000000000000046145b1561063257507f000000000000000000000000000000000000000000000000000000000000000090565b6102fb604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606102fb7f0000000000000000000000000000000000000000000000000000000000000000600561098e565b60606102fb7f0000000000000000000000000000000000000000000000000000000000000000600661098e565b60006102c76107416105af565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061077388888888610a39565b9250925092506107838282610b08565b50909695505050505050565b6001600160a01b0384166107b95760405163e602df0560e01b8152600060048201526024016103a1565b6001600160a01b0383166107e357604051634a1406b160e11b8152600060048201526024016103a1565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561054a57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161085691815260200190565b60405180910390a350505050565b6001600160a01b03831661088f5780600260008282546108849190610ea2565b909155506109019050565b6001600160a01b038316600090815260208190526040902054818110156108e25760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016103a1565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661091d5760028054829003905561093c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161098191815260200190565b60405180910390a3505050565b606060ff83146109a8576109a183610bc5565b90506102c7565b8180546109b490610e68565b80601f01602080910402602001604051908101604052809291908181526020018280546109e090610e68565b8015610a2d5780601f10610a0257610100808354040283529160200191610a2d565b820191906000526020600020905b815481529060010190602001808311610a1057829003601f168201915b505050505090506102c7565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610a745750600091506003905082610afe565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610ac8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610af457506000925060019150829050610afe565b9250600091508190505b9450945094915050565b6000826003811115610b1c57610b1c610ec3565b03610b25575050565b6001826003811115610b3957610b39610ec3565b03610b575760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610b6b57610b6b610ec3565b03610b8c5760405163fce698f760e01b8152600481018290526024016103a1565b6003826003811115610ba057610ba0610ec3565b03610bc1576040516335e2f38360e21b8152600481018290526024016103a1565b5050565b60606000610bd283610c04565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156102c757604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610c5257602081850181015186830182015201610c36565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610c856020830184610c2c565b9392505050565b80356001600160a01b0381168114610ca357600080fd5b919050565b60008060408385031215610cbb57600080fd5b610cc483610c8c565b946020939093013593505050565b600080600060608486031215610ce757600080fd5b610cf084610c8c565b9250610cfe60208501610c8c565b929592945050506040919091013590565b600060208284031215610d2157600080fd5b610c8582610c8c565b60ff60f81b8816815260e060208201526000610d4960e0830189610c2c565b8281036040840152610d5b8189610c2c565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610db1578351835260209384019390920191600101610d93565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610ddd57600080fd5b610de688610c8c565b9650610df460208901610c8c565b95506040880135945060608801359350608088013560ff81168114610e1857600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610e4857600080fd5b610e5183610c8c565b9150610e5f60208401610c8c565b90509250929050565b600181811c90821680610e7c57607f821691505b602082108103610e9c57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102c757634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212204cc311cdd533c27902e3021e27258bd271161d1c1b324b44bc23f38f71da0cf164736f6c634300081a0033';

type MockMystikoTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockMystikoTokenConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockMystikoToken__factory extends ContractFactory {
  constructor(...args: MockMystikoTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MockMystikoToken';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MockMystikoToken> {
    return super.deploy(overrides || {}) as Promise<MockMystikoToken>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockMystikoToken {
    return super.attach(address) as MockMystikoToken;
  }
  connect(signer: Signer): MockMystikoToken__factory {
    return super.connect(signer) as MockMystikoToken__factory;
  }
  static readonly contractName: 'MockMystikoToken';
  public readonly contractName: 'MockMystikoToken';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockMystikoTokenInterface {
    return new utils.Interface(_abi) as MockMystikoTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockMystikoToken {
    return new Contract(address, _abi, signerOrProvider) as MockMystikoToken;
  }
}
