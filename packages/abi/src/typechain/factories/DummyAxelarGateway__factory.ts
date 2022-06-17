/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { DummyAxelarGateway, DummyAxelarGatewayInterface } from '../DummyAxelarGateway';

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
  '0x608060405234801561001057600080fd5b50610e40806100206000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c8063935b13f6116100f9578063bbfb52fb11610097578063d2bc37f811610071578063d2bc37f8146101d0578063d3137c851461037d578063e3dfa299146101d0578063f6a5f9f51461038557600080fd5b8063bbfb52fb1461033e578063bc00c21614610351578063d26ff2101461036f57600080fd5b8063aa1e1f0a116100d3578063aa1e1f0a146102f6578063add0a553146102fd578063b52b38e114610310578063b54170841461032557600080fd5b8063935b13f6146102d45780639ded06df146101be578063a3499c73146102e257600080fd5b806334ff6983116101665780635f6970c3116101405780635f6970c314610292578063646c5d34146101be5780637b1b769e146102ac57806388b30587146102c057600080fd5b806334ff6983146101be578063364940d81461027a5780635c60da1b1461028b57600080fd5b80631876eed9116101975780631876eed9146102235780631c92115f1461025057806326ef699d1461026357600080fd5b806309c5eabe146101be57806310ef7795146101d257806314bfd6d014610202575b600080fd5b6101d06101cc366004610929565b5050565b005b6001546101e5906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610216610210366004610678565b50606090565b6040516101f99190610cb8565b610240610231366004610874565b60019998505050505050505050565b60405190151581526020016101f9565b6101d061025e3660046109fe565b6103a0565b6101d0610271366004610b64565b50505050505050565b60005b6040519081526020016101f9565b60006101e5565b6102406102a03660046107f2565b60019695505050505050565b6102406102ba366004610c07565b50600190565b61027d6102ce366004610678565b50600090565b6101e56102ce366004610c07565b6101d06102f036600461061e565b50505050565b6001610240565b6101d061030b36600461096b565b61040f565b610318610485565b6040516101f99190610d64565b6101d0610333366004610a98565b505050505050505050565b6003546101e5906001600160a01b031681565b61024061035f366004610725565b60019a9950505050505050505050565b6102406102ba366004610678565b610318610513565b610240610393366004610691565b6001979650505050505050565b600354604051630922c0cb60e31b81526001600160a01b03909116906349160658906103d59060009086908690600401610d05565b600060405180830381600087803b1580156103ef57600080fd5b505af1158015610403573d6000803e3d6000fd5b50505050505050505050565b61041b60008787610520565b506001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861617905561045060028484610520565b506003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790555050505050565b6002805461049290610db9565b80601f01602080910402602001604051908101604052809291908181526020018280546104be90610db9565b801561050b5780601f106104e05761010080835404028352916020019161050b565b820191906000526020600020905b8154815290600101906020018083116104ee57829003601f168201915b505050505081565b6000805461049290610db9565b82805461052c90610db9565b90600052602060002090601f01602090048101928261054e5760008555610594565b82601f106105675782800160ff19823516178555610594565b82800160010185558215610594579182015b82811115610594578235825591602001919060010190610579565b506105a09291506105a4565b5090565b5b808211156105a057600081556001016105a5565b80356001600160a01b03811681146105d057600080fd5b919050565b60008083601f8401126105e757600080fd5b50813567ffffffffffffffff8111156105ff57600080fd5b60208301915083602082850101111561061757600080fd5b9250929050565b6000806000806060858703121561063457600080fd5b61063d856105b9565b935060208501359250604085013567ffffffffffffffff81111561066057600080fd5b61066c878288016105d5565b95989497509550505050565b60006020828403121561068a57600080fd5b5035919050565b600080600080600080600060a0888a0312156106ac57600080fd5b87359650602088013567ffffffffffffffff808211156106cb57600080fd5b6106d78b838c016105d5565b909850965060408a01359150808211156106f057600080fd5b506106fd8a828b016105d5565b90955093506107109050606089016105b9565b91506080880135905092959891949750929550565b60008060008060008060008060008060e08b8d03121561074457600080fd5b8a35995060208b013567ffffffffffffffff8082111561076357600080fd5b61076f8e838f016105d5565b909b50995060408d013591508082111561078857600080fd5b6107948e838f016105d5565b90995097508791506107a860608e016105b9565b965060808d0135955060a08d01359150808211156107c557600080fd5b506107d28d828e016105d5565b9150809450508092505060c08b013590509295989b9194979a5092959850565b6000806000806000806080878903121561080b57600080fd5b86359550602087013567ffffffffffffffff8082111561082a57600080fd5b6108368a838b016105d5565b9097509550604089013591508082111561084f57600080fd5b5061085c89828a016105d5565b979a9699509497949695606090950135949350505050565b600080600080600080600080600060c08a8c03121561089257600080fd5b8935985060208a013567ffffffffffffffff808211156108b157600080fd5b6108bd8d838e016105d5565b909a50985060408c01359150808211156108d657600080fd5b6108e28d838e016105d5565b909850965060608c0135955060808c013591508082111561090257600080fd5b5061090f8c828d016105d5565b9a9d999c50979a9699959894979660a00135949350505050565b6000806020838503121561093c57600080fd5b823567ffffffffffffffff81111561095357600080fd5b61095f858286016105d5565b90969095509350505050565b6000806000806000806080878903121561098457600080fd5b863567ffffffffffffffff8082111561099c57600080fd5b6109a88a838b016105d5565b90985096508691506109bc60208a016105b9565b955060408901359150808211156109d257600080fd5b506109df89828a016105d5565b90945092506109f29050606088016105b9565b90509295509295509295565b60008060008060008060608789031215610a1757600080fd5b863567ffffffffffffffff80821115610a2f57600080fd5b610a3b8a838b016105d5565b90985096506020890135915080821115610a5457600080fd5b610a608a838b016105d5565b90965094506040890135915080821115610a7957600080fd5b50610a8689828a016105d5565b979a9699509497509295939492505050565b600080600080600080600080600060a08a8c031215610ab657600080fd5b893567ffffffffffffffff80821115610ace57600080fd5b610ada8d838e016105d5565b909b50995060208c0135915080821115610af357600080fd5b610aff8d838e016105d5565b909950975060408c0135915080821115610b1857600080fd5b610b248d838e016105d5565b909750955060608c0135915080821115610b3d57600080fd5b50610b4a8c828d016105d5565b9a9d999c50979a9699959894979660800135949350505050565b60008060008060008060006080888a031215610b7f57600080fd5b873567ffffffffffffffff80821115610b9757600080fd5b610ba38b838c016105d5565b909950975060208a0135915080821115610bbc57600080fd5b610bc88b838c016105d5565b909750955060408a0135915080821115610be157600080fd5b50610bee8a828b016105d5565b989b979a50959894979596606090950135949350505050565b600060208284031215610c1957600080fd5b813567ffffffffffffffff80821115610c3157600080fd5b818401915084601f830112610c4557600080fd5b813581811115610c5757610c57610df4565b604051601f8201601f19908116603f01168101908382118183101715610c7f57610c7f610df4565b81604052828152876020848701011115610c9857600080fd5b826020860160208301376000928101602001929092525095945050505050565b6020808252825182820181905260009190848201906040850190845b81811015610cf95783516001600160a01b031683529284019291840191600101610cd4565b50909695505050505050565b8381526080602082015260016080820152600360fc1b60a082015260c06040820152600060c082015260e060608201528160e082015260006101008385828501376000838501820152601f909301601f19169091019091019392505050565b600060208083528351808285015260005b81811015610d9157858101830151858201604001528201610d75565b81811115610da3576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c90821680610dcd57607f821691505b60208210811415610dee57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220d24db84e4c98b85f11fd950b274365cb705457f11b1b1d2a180a1829f0ce7c5e64736f6c63430008070033';

type DummyAxelarGatewayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyAxelarGatewayConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyAxelarGateway__factory extends ContractFactory {
  constructor(...args: DummyAxelarGatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'DummyAxelarGateway';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<DummyAxelarGateway> {
    return super.deploy(overrides || {}) as Promise<DummyAxelarGateway>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyAxelarGateway {
    return super.attach(address) as DummyAxelarGateway;
  }
  connect(signer: Signer): DummyAxelarGateway__factory {
    return super.connect(signer) as DummyAxelarGateway__factory;
  }
  static readonly contractName: 'DummyAxelarGateway';
  public readonly contractName: 'DummyAxelarGateway';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyAxelarGatewayInterface {
    return new utils.Interface(_abi) as DummyAxelarGatewayInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DummyAxelarGateway {
    return new Contract(address, _abi, signerOrProvider) as DummyAxelarGateway;
  }
}
