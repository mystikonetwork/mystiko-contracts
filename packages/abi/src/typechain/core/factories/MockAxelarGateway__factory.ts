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
  '0x60808060405234601557610e41908161001b8239f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c90816309c5eabe146108dd57816310ef779514610c0d5750806314bfd6d014610bae5780631876eed914610b385780631c92115f14610a0f57806326ef699d1461099957806334ff6983146108dd578063364940d81461097d5780635c60da1b1461097d5780635f6970c314610929578063646c5d34146108dd5780637b1b769e1461091a57806388b30587146108fd578063935b13f6146108e25780639ded06df146108dd578063a3499c73146108a2578063aa1e1f0a14610886578063add0a55314610493578063b52b38e1146103ec578063b54170841461034f578063bbfb52fb14610328578063bc00c2161461029c578063d26ff2101461027f578063d2bc37f8146101ba578063d3137c85146101bf578063e3dfa299146101ba5763f6a5f9f51461014a57600080fd5b346101b75760a03660031901126101b75760243567ffffffffffffffff81116101b35761017b903690600401610c32565b505060443567ffffffffffffffff81116101b35761019d903690600401610c32565b50506101a7610d5f565b50602060405160018152f35b5080fd5b80fd5b610df8565b50346101b757806003193601126101b75760405190808054906101e182610d75565b80855291600181169081156102585750600114610219575b6102158461020981860382610c98565b60405191829182610daf565b0390f35b80805260208120939250905b80821061023e57509091508101602001610209826101f9565b919260018160209254838588010152019101909291610225565b60ff191660208087019190915292151560051b8501909201925061020991508390506101f9565b50346101b75760203660031901126101b757602060405160018152f35b50346101b75760e03660031901126101b75760243567ffffffffffffffff81116101b3576102ce903690600401610c32565b505060443567ffffffffffffffff81116101b3576102f0903690600401610c32565b50506102fa610d5f565b5060a43567ffffffffffffffff81116101b35761031b903690600401610c32565b5050602060405160018152f35b50346101b757806003193601126101b75760206001600160a01b0360035416604051908152f35b50346101b75760a03660031901126101b75760043567ffffffffffffffff81116101b357610381903690600401610c32565b505060243567ffffffffffffffff81116101b3576103a3903690600401610c32565b505060443567ffffffffffffffff81116101b3576103c5903690600401610c32565b505060643567ffffffffffffffff81116101b3576103e7903690600401610c32565b505080f35b50346101b757806003193601126101b75760405190806002549061040f82610d75565b80855291600181169081156102585750600114610436576102158461020981860382610c98565b600281527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace939250905b80821061047957509091508101602001610209826101f9565b919260018160209254838588010152019101909291610460565b50346101b75760803660031901126101b75760043567ffffffffffffffff81116101b3576104c5903690600401610c32565b602435906001600160a01b0382168092036108825760443567ffffffffffffffff811161087e576104fa903690600401610c32565b929091610505610d5f565b9467ffffffffffffffff821161086a5781906105218854610d75565b601f81116107c0575b508790601f831160011461073d578892610732575b50508160011b916000199060031b1c19161785555b73ffffffffffffffffffffffffffffffffffffffff19600154161760015567ffffffffffffffff821161071e5761058c600254610d75565b601f8111610681575b508390601f83116001146105f9576001600160a01b039392918591836105ee575b50508160011b916000199060031b1c1916176002555b1673ffffffffffffffffffffffffffffffffffffffff19600354161760035580f35b0135905038806105b6565b7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace91601f198416865b81811061066957509160019391856001600160a01b039796941061064f575b505050811b016002556105cc565b0135600019600384901b60f8161c19169055388080610641565b91936020600181928787013581550195019201610622565b601f830160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190602084106106f6575b601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01905b8181106106eb5750610595565b8581556001016106de565b7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace91506106b4565b634e487b7160e01b84526041600452602484fd5b01359050388061053f565b8880527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563925090601f198416895b8181106107a8575090846001959493921061078e575b505050811b018555610554565b0135600019600384901b60f8161c19169055388080610781565b9193602060018192878701358155019501920161076b565b909150878052601f830160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563019060208410610842575b90601f8493920160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301905b818110610834575061052a565b898155849350600101610827565b7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56391506107f9565b634e487b7160e01b87526041600452602487fd5b8480fd5b8380fd5b50346101b757806003193601126101b757602060405160018152f35b50346101b75760603660031901126101b7576108bc610d49565b5060443567ffffffffffffffff81116101b3576103e7903690600401610c32565b610c65565b50346101b7576020906108f436610cd0565b50604051908152f35b50346101b75760203660031901126101b757602090604051908152f35b50346101b7576101a736610cd0565b50346101b75760803660031901126101b75760243567ffffffffffffffff81116101b35761095b903690600401610c32565b505060443567ffffffffffffffff81116101b35761031b903690600401610c32565b50346101b757806003193601126101b757602090604051908152f35b50346101b75760803660031901126101b75760043567ffffffffffffffff81116101b3576109cb903690600401610c32565b505060243567ffffffffffffffff81116101b3576109ed903690600401610c32565b505060443567ffffffffffffffff81116101b3576103e7903690600401610c32565b50346101b75760603660031901126101b75760043567ffffffffffffffff81116101b357610a41903690600401610c32565b505060243567ffffffffffffffff81116101b357610a63903690600401610c32565b50508060443567ffffffffffffffff8111610b3557610a86903690600401610c32565b91906001600160a01b036003541690813b15610b31578291849183610104604051809881968295630922c0cb60e31b84528560048501526080602485015260016084850152600360fc1b60a485015260c060448501528560c485015260e060648501528160e4850152848401378181018301849052601f01601f191681010301925af18015610b2457610b165780f35b610b1f91610c98565b388180f35b50604051903d90823e3d90fd5b8280fd5b50fd5b50346101b75760c03660031901126101b75760243567ffffffffffffffff81116101b357610b6a903690600401610c32565b505060443567ffffffffffffffff81116101b357610b8c903690600401610c32565b505060843567ffffffffffffffff81116101b35761031b903690600401610c32565b50346101b75760203660031901126101b757604051809160208201906020835260605180925260408301916080915b818110610beb575050500390f35b82516001600160a01b0316845285945060209384019390920191600101610bdd565b9050346101b357816003193601126101b3576020906001600160a01b03600154168152f35b9181601f84011215610c605782359167ffffffffffffffff8311610c605760208381860195010111610c6057565b600080fd5b34610c60576020366003190112610c605760043567ffffffffffffffff8111610c6057610c96903690600401610c32565b005b90601f8019910116810190811067ffffffffffffffff821117610cba57604052565b634e487b7160e01b600052604160045260246000fd5b6020600319820112610c605760043567ffffffffffffffff8111610c605781602382011215610c605780600401359067ffffffffffffffff8211610cba5760405192610d26601f8401601f191660200185610c98565b82845260248383010111610c605781600092602460209301838601378301015290565b600435906001600160a01b0382168203610c6057565b606435906001600160a01b0382168203610c6057565b90600182811c92168015610da5575b6020831014610d8f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d84565b91909160208152825180602083015260005b818110610de2575060409293506000838284010152601f8019910116010190565b8060208092870101516040828601015201610dc1565b34610c60576000366003190112610c605700fea2646970667358221220157ba04e2f2728a96e5ca515dd63dc5df31256f73acf14d48cc83fd6c11c6d4164736f6c634300081a0033';

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
