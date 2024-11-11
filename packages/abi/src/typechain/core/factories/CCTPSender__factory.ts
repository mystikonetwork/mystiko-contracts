/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { CCTPSender, CCTPSenderInterface } from '../CCTPSender';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    name: 'chainIdToCCTPDomain',
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
        internalType: 'uint16',
        name: 'chain',
        type: 'uint16',
      },
      {
        internalType: 'uint32',
        name: 'cctpDomain',
        type: 'uint32',
      },
    ],
    name: 'setCCTPDomain',
    outputs: [],
    stateMutability: 'nonpayable',
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

export class CCTPSender__factory {
  static readonly abi = _abi;
  static createInterface(): CCTPSenderInterface {
    return new utils.Interface(_abi) as CCTPSenderInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CCTPSender {
    return new Contract(address, _abi, signerOrProvider) as CCTPSender;
  }
}
