/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MockMystikoVoteToken, MockMystikoVoteTokenInterface } from '../MockMystikoVoteToken';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_xzk',
        type: 'address',
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
    name: 'CheckpointUnorderedInsertion',
    type: 'error',
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
        internalType: 'uint256',
        name: 'increasedSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'cap',
        type: 'uint256',
      },
    ],
    name: 'ERC20ExceededSafeSupply',
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
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidUnderlying',
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
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
      {
        internalType: 'uint48',
        name: 'clock',
        type: 'uint48',
      },
    ],
    name: 'ERC5805FutureLookup',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC6372InconsistentClock',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
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
        internalType: 'uint8',
        name: 'bits',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCastOverflowedUintDowncast',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
    ],
    name: 'VotesExpiredSignature',
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
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'fromDelegate',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'toDelegate',
        type: 'address',
      },
    ],
    name: 'DelegateChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousVotes',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newVotes',
        type: 'uint256',
      },
    ],
    name: 'DelegateVotesChanged',
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
    name: 'CLOCK_MODE',
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
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'pos',
        type: 'uint32',
      },
    ],
    name: 'checkpoints',
    outputs: [
      {
        components: [
          {
            internalType: 'uint48',
            name: '_key',
            type: 'uint48',
          },
          {
            internalType: 'uint208',
            name: '_value',
            type: 'uint208',
          },
        ],
        internalType: 'struct Checkpoints.Checkpoint208',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clock',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
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
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
    ],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
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
    name: 'delegateBySig',
    outputs: [],
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
    name: 'delegates',
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
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'depositFor',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
    ],
    name: 'getPastTotalSupply',
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
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
    ],
    name: 'getPastVotes',
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
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getVotes',
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
        name: '_owner',
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
        name: 'account',
        type: 'address',
      },
    ],
    name: 'numCheckpoints',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
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
  {
    inputs: [],
    name: 'underlying',
    outputs: [
      {
        internalType: 'contract IERC20',
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
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'withdrawTo',
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
  '0x61018060405234801561001157600080fd5b506040516127ee3803806127ee83398101604081905261003091610247565b806040518060400160405280601281526020017126bcb9ba34b5b7902b37ba32902a37b5b2b760711b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280601281526020017126bcb9ba34b5b7902b37ba32902a37b5b2b760711b8152506040518060400160405280600481526020016376585a4b60e01b81525081600390816100ce9190610316565b5060046100db8282610316565b506100eb915083905060056101d6565b610120526100fa8160066101d6565b61014052815160208084019190912060e052815190820120610100524660a05261018760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c08190526001600160a01b0383160390506101c35760405163438d6fe360e01b81523060048201526024015b60405180910390fd5b6001600160a01b03166101605250610446565b60006020835110156101f2576101eb83610209565b9050610203565b816101fd8482610316565b5060ff90505b92915050565b600080829050601f81511115610234578260405163305a27a960e01b81526004016101ba91906103d4565b805161023f82610422565b179392505050565b60006020828403121561025957600080fd5b81516001600160a01b038116811461027057600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806102a157607f821691505b6020821081036102c157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561031157806000526020600020601f840160051c810160208510156102ee5750805b601f840160051c820191505b8181101561030e57600081556001016102fa565b50505b505050565b81516001600160401b0381111561032f5761032f610277565b6103438161033d845461028d565b846102c7565b6020601f821160018114610377576000831561035f5750848201515b600019600385901b1c1916600184901b17845561030e565b600084815260208120601f198516915b828110156103a75787850151825560209485019460019092019101610387565b50848210156103c55786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b8181101561040257602081860181015160408684010152016103e5565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156102c15760001960209190910360031b1b16919050565b60805160a05160c05160e0516101005161012051610140516101605161232e6104c06000396000818161030801528181610596015281816106490152610c4301526000610fe301526000610fb601526000610da401526000610d7c01526000610cd701526000610d0101526000610d2b015261232e6000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c80636fcfff45116100ee57806395d89b4111610097578063c3cda52011610071578063c3cda52014610402578063d505accf14610415578063dd62ed3e14610428578063f1127ed81461046157600080fd5b806395d89b41146103d45780639ab24eb0146103dc578063a9059cbb146103ef57600080fd5b806384b0196e116100c857806384b0196e146103905780638e539e8c146103ab57806391ddadf4146103be57600080fd5b80636fcfff451461032c57806370a08231146103545780637ecebe001461037d57600080fd5b8063313ce5671161015b5780634bf5d7e9116101355780634bf5d7e914610274578063587cde1e146102ad5780635c19a95c146102f15780636f307dc31461030657600080fd5b8063313ce5671461023f5780633644e515146102595780633a46b1a81461026157600080fd5b8063205c28781161018c578063205c28781461020657806323b872dd146102195780632f4f21e21461022c57600080fd5b806306fdde03146101b3578063095ea7b3146101d157806318160ddd146101f4575b600080fd5b6101bb6104a0565b6040516101c89190611edf565b60405180910390f35b6101e46101df366004611f09565b610532565b60405190151581526020016101c8565b6002545b6040519081526020016101c8565b6101e4610214366004611f09565b61054c565b6101e4610227366004611f33565b6105c5565b6101e461023a366004611f09565b6105eb565b61024761067a565b60405160ff90911681526020016101c8565b6101f8610689565b6101f861026f366004611f09565b610693565b60408051808201909152600e81527f6d6f64653d74696d657374616d7000000000000000000000000000000000000060208201526101bb565b6102d96102bb366004611f70565b6001600160a01b039081166000908152600860205260409020541690565b6040516001600160a01b0390911681526020016101c8565b6103046102ff366004611f70565b61070a565b005b7f00000000000000000000000000000000000000000000000000000000000000006102d9565b61033f61033a366004611f70565b610719565b60405163ffffffff90911681526020016101c8565b6101f8610362366004611f70565b6001600160a01b031660009081526020819052604090205490565b6101f861038b366004611f70565b610724565b61039861072f565b6040516101c89796959493929190611f8b565b6101f86103b9366004612023565b610775565b60405165ffffffffffff421681526020016101c8565b6101bb6107d5565b6101f86103ea366004611f70565b6107e4565b6101e46103fd366004611f09565b610814565b61030461041036600461204b565b610822565b6103046104233660046120a5565b6108df565b6101f8610436366004612112565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61047461046f366004612145565b610a19565b60408051825165ffffffffffff1681526020928301516001600160d01b031692810192909252016101c8565b6060600380546104af90612185565b80601f01602080910402602001604051908101604052809291908181526020018280546104db90612185565b80156105285780601f106104fd57610100808354040283529160200191610528565b820191906000526020600020905b81548152906001019060200180831161050b57829003601f168201915b5050505050905090565b600033610540818585610a37565b60019150505b92915050565b6000306001600160a01b038416036105875760405163ec442f0560e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6105913383610a49565b6105bc7f00000000000000000000000000000000000000000000000000000000000000008484610a7f565b50600192915050565b6000336105d3858285610af3565b6105de858585610b71565b60019150505b9392505050565b60003330810361061057604051634b637e8f60e11b815230600482015260240161057e565b306001600160a01b038516036106445760405163ec442f0560e01b81526001600160a01b038516600482015260240161057e565b6106707f0000000000000000000000000000000000000000000000000000000000000000823086610bd0565b6105408484610c09565b6000610684610c3f565b905090565b6000610684610cca565b60004265ffffffffffff811683106106cf57604051637669fc0f60e11b81526004810184905265ffffffffffff8216602482015260440161057e565b6106f96106db84610df5565b6001600160a01b038616600090815260096020526040902090610e2c565b6001600160d01b0316949350505050565b336107158183610ee5565b5050565b600061054682610f6f565b600061054682610f91565b600060608060008060006060610743610faf565b61074b610fdc565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60004265ffffffffffff811683106107b157604051637669fc0f60e11b81526004810184905265ffffffffffff8216602482015260440161057e565b6107c56107bd84610df5565b600a90610e2c565b6001600160d01b03169392505050565b6060600480546104af90612185565b6001600160a01b038116600090815260096020526040812061080590611009565b6001600160d01b031692915050565b600033610540818585610b71565b8342111561084657604051632341d78760e11b81526004810185905260240161057e565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590526000906108c0906108b89060a00160405160208183030381529060405280519060200120611045565b858585611072565b90506108cc81876110a0565b6108d68188610ee5565b50505050505050565b834211156109035760405163313c898160e11b81526004810185905260240161057e565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886109508c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006109ab82611045565b905060006109bb82878787611072565b9050896001600160a01b0316816001600160a01b031614610a02576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161057e565b610a0d8a8a8a610a37565b50505050505050505050565b60408051808201909152600080825260208201526105e483836110f3565b610a448383836001611129565b505050565b6001600160a01b038216610a7357604051634b637e8f60e11b81526000600482015260240161057e565b610715826000836111fe565b6040516001600160a01b03838116602483015260448201839052610a4491859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611209565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610b6b5781811015610b5c57604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161057e565b610b6b84848484036000611129565b50505050565b6001600160a01b038316610b9b57604051634b637e8f60e11b81526000600482015260240161057e565b6001600160a01b038216610bc55760405163ec442f0560e01b81526000600482015260240161057e565b610a448383836111fe565b6040516001600160a01b038481166024830152838116604483015260648201839052610b6b9186918216906323b872dd90608401610aac565b6001600160a01b038216610c335760405163ec442f0560e01b81526000600482015260240161057e565b610715600083836111fe565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610cbb575060408051601f3d908101601f19168201909252610cb8918101906121bf565b60015b610cc55750601290565b919050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610d2357507f000000000000000000000000000000000000000000000000000000000000000046145b15610d4d57507f000000000000000000000000000000000000000000000000000000000000000090565b610684604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b600065ffffffffffff821115610e28576040516306dfcc6560e41b8152603060048201526024810183905260440161057e565b5090565b815460009081816005811115610e8b576000610e478461126c565b610e5190856121f2565b60008881526020902090915081015465ffffffffffff9081169087161015610e7b57809150610e89565b610e86816001612205565b92505b505b6000610e9987878585611354565b90508015610ed757610ebe87610eb06001846121f2565b600091825260209091200190565b54660100000000000090046001600160d01b0316610eda565b60005b979650505050505050565b6001600160a01b0382811660008181526008602052604080822080548686167fffffffffffffffffffffffff0000000000000000000000000000000000000000821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610a448183610f6a866113b6565b6113d4565b6001600160a01b03811660009081526009602052604081205461054690611540565b6001600160a01b038116600090815260076020526040812054610546565b60606106847f00000000000000000000000000000000000000000000000000000000000000006005611571565b60606106847f00000000000000000000000000000000000000000000000000000000000000006006611571565b8054600090801561103c5761102383610eb06001846121f2565b54660100000000000090046001600160d01b03166105e4565b60009392505050565b6000610546611052610cca565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806110848888888861161c565b92509250925061109482826116eb565b50909695505050505050565b6001600160a01b0382166000908152600760205260409020805460018101909155818114610a44576040516301d4b62360e61b81526001600160a01b03841660048201526024810182905260440161057e565b60408051808201909152600080825260208201526001600160a01b03831660009081526009602052604090206105e490836117a4565b6001600160a01b0384166111535760405163e602df0560e01b81526000600482015260240161057e565b6001600160a01b03831661117d57604051634a1406b160e11b81526000600482015260240161057e565b6001600160a01b0380851660009081526001602090815260408083209387168352929052208290558015610b6b57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516111f091815260200190565b60405180910390a350505050565b610a44838383611817565b600061121e6001600160a01b0384168361187e565b905080516000141580156112435750808060200190518101906112419190612218565b155b15610a4457604051635274afe760e01b81526001600160a01b038416600482015260240161057e565b60008160000361127e57506000919050565b6000600161128b8461188c565b901c6001901b905060018184816112a4576112a461223a565b048201901c905060018184816112bc576112bc61223a565b048201901c905060018184816112d4576112d461223a565b048201901c905060018184816112ec576112ec61223a565b048201901c905060018184816113045761130461223a565b048201901c9050600181848161131c5761131c61223a565b048201901c905060018184816113345761133461223a565b048201901c90506105e48182858161134e5761134e61223a565b04611920565b60005b818310156113ae57600061136b8484611936565b60008781526020902090915065ffffffffffff86169082015465ffffffffffff16111561139a578092506113a8565b6113a5816001612205565b93505b50611357565b509392505050565b6001600160a01b038116600090815260208190526040812054610546565b816001600160a01b0316836001600160a01b0316141580156113f65750600081115b15610a44576001600160a01b0383161561149e576001600160a01b03831660009081526009602052604081208190611439906119516114348661195d565b611991565b6001600160d01b031691506001600160d01b03169150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611493929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610a44576001600160a01b038216600090815260096020526040812081906114d7906119c36114348661195d565b6001600160d01b031691506001600160d01b03169150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611531929190918252602082015260400190565b60405180910390a25050505050565b600063ffffffff821115610e28576040516306dfcc6560e41b8152602060048201526024810183905260440161057e565b606060ff831461158b57611584836119cf565b9050610546565b81805461159790612185565b80601f01602080910402602001604051908101604052809291908181526020018280546115c390612185565b80156116105780601f106115e557610100808354040283529160200191611610565b820191906000526020600020905b8154815290600101906020018083116115f357829003601f168201915b50505050509050610546565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561165757506000915060039050826116e1565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156116ab573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116d7575060009250600191508290506116e1565b9250600091508190505b9450945094915050565b60008260038111156116ff576116ff612250565b03611708575050565b600182600381111561171c5761171c612250565b0361173a5760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561174e5761174e612250565b0361176f5760405163fce698f760e01b81526004810182905260240161057e565b600382600381111561178357611783612250565b03610715576040516335e2f38360e21b81526004810182905260240161057e565b6040805180820190915260008082526020820152826000018263ffffffff16815481106117d3576117d3612266565b60009182526020918290206040805180820190915291015465ffffffffffff81168252660100000000000090046001600160d01b0316918101919091529392505050565b611822838383611a0e565b6001600160a01b03831661187357600061183b60025490565b90506001600160d01b038082111561187057604051630e58ae9360e11b8152600481018390526024810182905260440161057e565b50505b610a44838383611b38565b60606105e483836000611bae565b600080608083901c156118a157608092831c92015b604083901c156118b357604092831c92015b602083901c156118c557602092831c92015b601083901c156118d757601092831c92015b600883901c156118e957600892831c92015b600483901c156118fb57600492831c92015b600283901c1561190d57600292831c92015b600183901c156105465760010192915050565b600081831061192f57816105e4565b5090919050565b6000611945600284841861227c565b6105e490848416612205565b60006105e4828461229e565b60006001600160d01b03821115610e28576040516306dfcc6560e41b815260d060048201526024810183905260440161057e565b6000806119b6426119ae6119a488611009565b868863ffffffff16565b879190611c4b565b915091505b935093915050565b60006105e482846122bd565b606060006119dc83611c59565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6001600160a01b038316611a39578060026000828254611a2e9190612205565b90915550611aab9050565b6001600160a01b03831660009081526020819052604090205481811015611a8c5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161057e565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216611ac757600280548290039055611ae6565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611b2b91815260200190565b60405180910390a3505050565b6001600160a01b038316611b5a57611b57600a6119c36114348461195d565b50505b6001600160a01b038216611b7c57611b79600a6119516114348461195d565b50505b6001600160a01b03838116600090815260086020526040808220548584168352912054610a44929182169116836113d4565b606081471015611bd35760405163cd78605960e01b815230600482015260240161057e565b600080856001600160a01b03168486604051611bef91906122dc565b60006040518083038185875af1925050503d8060008114611c2c576040519150601f19603f3d011682016040523d82523d6000602084013e611c31565b606091505b5091509150611c41868383611c81565b9695505050505050565b6000806119b6858585611cdd565b600060ff8216601f81111561054657604051632cd44ac360e21b815260040160405180910390fd5b606082611c9657611c9182611e63565b6105e4565b8151158015611cad57506001600160a01b0384163b155b15611cd657604051639996b31560e01b81526001600160a01b038516600482015260240161057e565b50806105e4565b825460009081908015611e05576000611cfb87610eb06001856121f2565b60408051808201909152905465ffffffffffff80821680845266010000000000009092046001600160d01b031660208401529192509087161015611d5257604051632520601d60e01b815260040160405180910390fd5b805165ffffffffffff808816911603611da15784611d7588610eb06001866121f2565b80546001600160d01b039290921666010000000000000265ffffffffffff909216919091179055611df5565b6040805180820190915265ffffffffffff80881682526001600160d01b0380881660208085019182528b54600181018d5560008d815291909120945191519092166601000000000000029216919091179101555b6020015192508391506119bb9050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a5560008a81529182209551925190931666010000000000000291909316179201919091559050816119bb565b805115611e735780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60005b83811015611eaa578181015183820152602001611e92565b50506000910152565b60008151808452611ecb816020860160208601611e8f565b601f01601f19169290920160200192915050565b6020815260006105e46020830184611eb3565b80356001600160a01b0381168114610cc557600080fd5b60008060408385031215611f1c57600080fd5b611f2583611ef2565b946020939093013593505050565b600080600060608486031215611f4857600080fd5b611f5184611ef2565b9250611f5f60208501611ef2565b929592945050506040919091013590565b600060208284031215611f8257600080fd5b6105e482611ef2565b60ff60f81b8816815260e060208201526000611faa60e0830189611eb3565b8281036040840152611fbc8189611eb3565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015612012578351835260209384019390920191600101611ff4565b50909b9a5050505050505050505050565b60006020828403121561203557600080fd5b5035919050565b60ff81168114611e8c57600080fd5b60008060008060008060c0878903121561206457600080fd5b61206d87611ef2565b95506020870135945060408701359350606087013561208b8161203c565b9598949750929560808101359460a0909101359350915050565b600080600080600080600060e0888a0312156120c057600080fd5b6120c988611ef2565b96506120d760208901611ef2565b9550604088013594506060880135935060808801356120f58161203c565b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561212557600080fd5b61212e83611ef2565b915061213c60208401611ef2565b90509250929050565b6000806040838503121561215857600080fd5b61216183611ef2565b9150602083013563ffffffff8116811461217a57600080fd5b809150509250929050565b600181811c9082168061219957607f821691505b6020821081036121b957634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156121d157600080fd5b81516105e48161203c565b634e487b7160e01b600052601160045260246000fd5b81810381811115610546576105466121dc565b80820180821115610546576105466121dc565b60006020828403121561222a57600080fd5b815180151581146105e457600080fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008261229957634e487b7160e01b600052601260045260246000fd5b500490565b6001600160d01b038281168282160390811115610546576105466121dc565b6001600160d01b038181168382160190811115610546576105466121dc565b600082516122ee818460208701611e8f565b919091019291505056fea264697066735822122027cf0aeffe1d3f464711893432cf3b6aff85b8011dfe67db580f4a3dd4eb59a364736f6c634300081a0033';

type MockMystikoVoteTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockMystikoVoteTokenConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockMystikoVoteToken__factory extends ContractFactory {
  constructor(...args: MockMystikoVoteTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MockMystikoVoteToken';
  }

  deploy(
    _xzk: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MockMystikoVoteToken> {
    return super.deploy(_xzk, overrides || {}) as Promise<MockMystikoVoteToken>;
  }
  getDeployTransaction(
    _xzk: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_xzk, overrides || {});
  }
  attach(address: string): MockMystikoVoteToken {
    return super.attach(address) as MockMystikoVoteToken;
  }
  connect(signer: Signer): MockMystikoVoteToken__factory {
    return super.connect(signer) as MockMystikoVoteToken__factory;
  }
  static readonly contractName: 'MockMystikoVoteToken';
  public readonly contractName: 'MockMystikoVoteToken';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockMystikoVoteTokenInterface {
    return new utils.Interface(_abi) as MockMystikoVoteTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockMystikoVoteToken {
    return new Contract(address, _abi, signerOrProvider) as MockMystikoVoteToken;
  }
}
