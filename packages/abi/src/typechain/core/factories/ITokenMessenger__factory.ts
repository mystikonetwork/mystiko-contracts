/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ITokenMessenger, ITokenMessengerInterface } from '../ITokenMessenger';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'burnToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'depositor',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'mintRecipient',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'destinationDomain',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'destinationTokenMessenger',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'destinationCaller',
        type: 'bytes32',
      },
    ],
    name: 'DepositForBurn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'localMinter',
        type: 'address',
      },
    ],
    name: 'LocalMinterAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'localMinter',
        type: 'address',
      },
    ],
    name: 'LocalMinterRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'mintRecipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'mintToken',
        type: 'address',
      },
    ],
    name: 'MintAndWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'tokenMessenger',
        type: 'bytes32',
      },
    ],
    name: 'RemoteTokenMessengerAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'tokenMessenger',
        type: 'bytes32',
      },
    ],
    name: 'RemoteTokenMessengerRemoved',
    type: 'event',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newLocalMinter',
        type: 'address',
      },
    ],
    name: 'addLocalMinter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: 'tokenMessenger',
        type: 'bytes32',
      },
    ],
    name: 'addRemoteTokenMessenger',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'destinationDomain',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: 'mintRecipient',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'burnToken',
        type: 'address',
      },
    ],
    name: 'depositForBurn',
    outputs: [
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'destinationDomain',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: 'mintRecipient',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'burnToken',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'destinationCaller',
        type: 'bytes32',
      },
    ],
    name: 'depositForBurnWithCaller',
    outputs: [
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'remoteDomain',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: 'sender',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'messageBody',
        type: 'bytes',
      },
    ],
    name: 'handleReceiveMessage',
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
    name: 'localMessageTransmitter',
    outputs: [
      {
        internalType: 'contract IMessageTransmitter',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'localMinter',
    outputs: [
      {
        internalType: 'contract ITokenMinter',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'messageBodyVersion',
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
    inputs: [],
    name: 'owner',
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
    name: 'pendingOwner',
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
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
    ],
    name: 'remoteTokenMessengers',
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
    inputs: [],
    name: 'removeLocalMinter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
    ],
    name: 'removeRemoteTokenMessenger',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'originalMessage',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'originalAttestation',
        type: 'bytes',
      },
      {
        internalType: 'bytes32',
        name: 'newDestinationCaller',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'newMintRecipient',
        type: 'bytes32',
      },
    ],
    name: 'replaceDepositForBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class ITokenMessenger__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenMessengerInterface {
    return new utils.Interface(_abi) as ITokenMessengerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ITokenMessenger {
    return new Contract(address, _abi, signerOrProvider) as ITokenMessenger;
  }
}