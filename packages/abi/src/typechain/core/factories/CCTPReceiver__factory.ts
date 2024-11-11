/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { CCTPReceiver, CCTPReceiverInterface } from '../CCTPReceiver';

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'bytes[]',
        name: 'additionalMessages',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'sourceAddress',
        type: 'bytes32',
      },
      {
        internalType: 'uint16',
        name: 'sourceChain',
        type: 'uint16',
      },
      {
        internalType: 'bytes32',
        name: 'deliveryHash',
        type: 'bytes32',
      },
    ],
    name: 'receiveWormholeMessages',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'sourceChain',
        type: 'uint16',
      },
      {
        internalType: 'bytes32',
        name: 'sourceAddress',
        type: 'bytes32',
      },
    ],
    name: 'setRegisteredSender',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wormhole',
    outputs: [
      {
        internalType: 'contract IWormhole',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wormholeRelayer',
    outputs: [
      {
        internalType: 'contract IWormholeRelayer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class CCTPReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): CCTPReceiverInterface {
    return new utils.Interface(_abi) as CCTPReceiverInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CCTPReceiver {
    return new Contract(address, _abi, signerOrProvider) as CCTPReceiver;
  }
}
