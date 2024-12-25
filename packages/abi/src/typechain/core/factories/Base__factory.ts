/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { Base, BaseInterface } from '../Base';

const _abi = [
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

export class Base__factory {
  static readonly abi = _abi;
  static createInterface(): BaseInterface {
    return new utils.Interface(_abi) as BaseInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Base {
    return new Contract(address, _abi, signerOrProvider) as Base;
  }
}