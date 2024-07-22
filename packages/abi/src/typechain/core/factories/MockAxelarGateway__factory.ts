/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MockAxelarGateway, MockAxelarGatewayInterface } from '../MockAxelarGateway';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AccountBlacklisted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AccountWhitelisted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'AllTokensFrozen',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'AllTokensUnfrozen',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationContractAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'ContractCall',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'sourceTxHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sourceEventIndex',
        type: 'uint256',
      },
    ],
    name: 'ContractCallApproved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'sourceTxHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sourceEventIndex',
        type: 'uint256',
      },
    ],
    name: 'ContractCallApprovedWithMint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationContractAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'ContractCallWithToken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
    ],
    name: 'Executed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenAddresses',
        type: 'address',
      },
    ],
    name: 'TokenDeployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'TokenFrozen',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TokenSent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'TokenUnfrozen',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'adminEpoch',
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
        internalType: 'uint256',
        name: 'epoch',
        type: 'uint256',
      },
    ],
    name: 'adminThreshold',
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
        internalType: 'uint256',
        name: 'epoch',
        type: 'uint256',
      },
    ],
    name: 'admins',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allTokensFrozen',
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
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'contractAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'callContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'contractAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'callContractWithToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'chainNameA',
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
    name: 'chainNameB',
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
    name: 'contractAddressA',
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
    name: 'contractAddressB',
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
        internalType: 'bytes',
        name: 'input',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'freezeAllTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'freezeToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
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
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
    ],
    name: 'isCommandExecuted',
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
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'isContractCallAndMintApproved',
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
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
    ],
    name: 'isContractCallApproved',
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
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'sendToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_chainNameA',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_contractAddressA',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_chainNameB',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_contractAddressB',
        type: 'address',
      },
    ],
    name: 'setChainPair',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'setup',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'tokenAddresses',
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
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'tokenFrozen',
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
    name: 'unfreezeAllTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'unfreezeToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'newImplementationCodeHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'setupParams',
        type: 'bytes',
      },
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
    ],
    name: 'validateContractCall',
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
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'sourceChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'validateContractCallAndMint',
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
  '0x6080604052348015600f57600080fd5b50610f078061001f6000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c8063935b13f6116100f9578063bbfb52fb11610097578063d2bc37f811610071578063d2bc37f8146101d0578063d3137c851461037d578063e3dfa299146101d0578063f6a5f9f51461038557600080fd5b8063bbfb52fb1461033e578063bc00c21614610351578063d26ff2101461036f57600080fd5b8063aa1e1f0a116100d3578063aa1e1f0a146102f6578063add0a553146102fd578063b52b38e114610310578063b54170841461032557600080fd5b8063935b13f6146102d45780639ded06df146101be578063a3499c73146102e257600080fd5b806334ff6983116101665780635f6970c3116101405780635f6970c314610292578063646c5d34146101be5780637b1b769e146102ac57806388b30587146102c057600080fd5b806334ff6983146101be578063364940d81461027a5780635c60da1b1461028b57600080fd5b80631876eed9116101975780631876eed9146102235780631c92115f1461025057806326ef699d1461026357600080fd5b806309c5eabe146101be57806310ef7795146101d257806314bfd6d014610202575b600080fd5b6101d06101cc36600461056b565b5050565b005b6001546101e5906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6102166102103660046105ad565b50606090565b6040516101f991906105c6565b610240610231366004610612565b60019998505050505050505050565b60405190151581526020016101f9565b6101d061025e3660046106d3565b6103a0565b6101d0610271366004610779565b50505050505050565b60005b6040519081526020016101f9565b60006101e5565b6102406102a0366004610828565b60019695505050505050565b6102406102ba3660046108c5565b50600190565b61027d6102ce3660046105ad565b50600090565b6101e56102ce3660046108c5565b6101d06102f036600461099a565b50505050565b6001610240565b6101d061030b3660046109f4565b61040f565b610318610487565b6040516101f99190610a8a565b6101d0610333366004610ad8565b505050505050505050565b6003546101e5906001600160a01b031681565b61024061035f366004610bb7565b60019a9950505050505050505050565b6102406102ba3660046105ad565b610318610515565b610240610393366004610c8e565b6001979650505050505050565b600354604051630922c0cb60e31b81526001600160a01b03909116906349160658906103d59060009086908690600401610d2a565b600060405180830381600087803b1580156103ef57600080fd5b505af1158015610403573d6000803e3d6000fd5b50505050505050505050565b600061041c868883610e11565b506001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386161790556002610452838583610e11565b506003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790555050505050565b6002805461049490610d88565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090610d88565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b505050505081565b6000805461049490610d88565b60008083601f84011261053457600080fd5b50813567ffffffffffffffff81111561054c57600080fd5b60208301915083602082850101111561056457600080fd5b9250929050565b6000806020838503121561057e57600080fd5b823567ffffffffffffffff81111561059557600080fd5b6105a185828601610522565b90969095509350505050565b6000602082840312156105bf57600080fd5b5035919050565b602080825282518282018190526000918401906040840190835b818110156106075783516001600160a01b03168352602093840193909201916001016105e0565b509095945050505050565b600080600080600080600080600060c08a8c03121561063057600080fd5b8935985060208a013567ffffffffffffffff81111561064e57600080fd5b61065a8c828d01610522565b90995097505060408a013567ffffffffffffffff81111561067a57600080fd5b6106868c828d01610522565b90975095505060608a0135935060808a013567ffffffffffffffff8111156106ad57600080fd5b6106b98c828d01610522565b9a9d999c50979a9699959894979660a00135949350505050565b600080600080600080606087890312156106ec57600080fd5b863567ffffffffffffffff81111561070357600080fd5b61070f89828a01610522565b909750955050602087013567ffffffffffffffff81111561072f57600080fd5b61073b89828a01610522565b909550935050604087013567ffffffffffffffff81111561075b57600080fd5b61076789828a01610522565b979a9699509497509295939492505050565b60008060008060008060006080888a03121561079457600080fd5b873567ffffffffffffffff8111156107ab57600080fd5b6107b78a828b01610522565b909850965050602088013567ffffffffffffffff8111156107d757600080fd5b6107e38a828b01610522565b909650945050604088013567ffffffffffffffff81111561080357600080fd5b61080f8a828b01610522565b989b979a50959894979596606090950135949350505050565b6000806000806000806080878903121561084157600080fd5b86359550602087013567ffffffffffffffff81111561085f57600080fd5b61086b89828a01610522565b909650945050604087013567ffffffffffffffff81111561088b57600080fd5b61089789828a01610522565b979a9699509497949695606090950135949350505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156108d757600080fd5b813567ffffffffffffffff8111156108ee57600080fd5b8201601f810184136108ff57600080fd5b803567ffffffffffffffff811115610919576109196108af565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610948576109486108af565b60405281815282820160200186101561096057600080fd5b81602084016020830137600091810160200191909152949350505050565b80356001600160a01b038116811461099557600080fd5b919050565b600080600080606085870312156109b057600080fd5b6109b98561097e565b935060208501359250604085013567ffffffffffffffff8111156109dc57600080fd5b6109e887828801610522565b95989497509550505050565b60008060008060008060808789031215610a0d57600080fd5b863567ffffffffffffffff811115610a2457600080fd5b610a3089828a01610522565b9097509550610a4390506020880161097e565b9350604087013567ffffffffffffffff811115610a5f57600080fd5b610a6b89828a01610522565b9094509250610a7e90506060880161097e565b90509295509295509295565b602081526000825180602084015260005b81811015610ab85760208186018101516040868401015201610a9b565b506000604082850101526040601f19601f83011684010191505092915050565b600080600080600080600080600060a08a8c031215610af657600080fd5b893567ffffffffffffffff811115610b0d57600080fd5b610b198c828d01610522565b909a5098505060208a013567ffffffffffffffff811115610b3957600080fd5b610b458c828d01610522565b90985096505060408a013567ffffffffffffffff811115610b6557600080fd5b610b718c828d01610522565b90965094505060608a013567ffffffffffffffff811115610b9157600080fd5b610b9d8c828d01610522565b9a9d999c50979a9699959894979660800135949350505050565b60008060008060008060008060008060e08b8d031215610bd657600080fd5b8a35995060208b013567ffffffffffffffff811115610bf457600080fd5b610c008d828e01610522565b909a5098505060408b013567ffffffffffffffff811115610c2057600080fd5b610c2c8d828e01610522565b9098509650610c3f905060608c0161097e565b945060808b0135935060a08b013567ffffffffffffffff811115610c6257600080fd5b610c6e8d828e01610522565b9b9e9a9d50989b979a96999598949794969560c090950135949350505050565b600080600080600080600060a0888a031215610ca957600080fd5b87359650602088013567ffffffffffffffff811115610cc757600080fd5b610cd38a828b01610522565b909750955050604088013567ffffffffffffffff811115610cf357600080fd5b610cff8a828b01610522565b9095509350610d1290506060890161097e565b96999598509396929591949193505060809091013590565b8381526080602082015260016080820152600360fc1b60a082015260c06040820152600060c082015260e060608201528160e08201528183610100830137600081830161010090810191909152601f909201601f1916010192915050565b600181811c90821680610d9c57607f821691505b602082108103610dbc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610e0c57806000526020600020601f840160051c81016020851015610de95750805b601f840160051c820191505b81811015610e095760008155600101610df5565b50505b505050565b67ffffffffffffffff831115610e2957610e296108af565b610e3d83610e378354610d88565b83610dc2565b6000601f841160018114610e715760008515610e595750838201355b600019600387901b1c1916600186901b178355610e09565b600083815260209020601f19861690835b82811015610ea25786850135825560209485019460019092019101610e82565b5086821015610ebf5760001960f88860031b161c19848701351681555b505060018560011b018355505050505056fea264697066735822122040af78434139560816a5ebac12ee055daa9a3876641920da8906caed0e4c965c64736f6c634300081a0033';

type MockAxelarGatewayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAxelarGatewayConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAxelarGateway__factory extends ContractFactory {
  constructor(...args: MockAxelarGatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MockAxelarGateway';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MockAxelarGateway> {
    return super.deploy(overrides || {}) as Promise<MockAxelarGateway>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockAxelarGateway {
    return super.attach(address) as MockAxelarGateway;
  }
  connect(signer: Signer): MockAxelarGateway__factory {
    return super.connect(signer) as MockAxelarGateway__factory;
  }
  static readonly contractName: 'MockAxelarGateway';
  public readonly contractName: 'MockAxelarGateway';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAxelarGatewayInterface {
    return new utils.Interface(_abi) as MockAxelarGatewayInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockAxelarGateway {
    return new Contract(address, _abi, signerOrProvider) as MockAxelarGateway;
  }
}
