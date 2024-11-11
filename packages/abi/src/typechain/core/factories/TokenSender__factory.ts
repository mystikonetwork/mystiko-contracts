/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { TokenSender, TokenSenderInterface } from '../TokenSender';

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
    name: 'tokenBridge',
    outputs: [
      {
        internalType: 'contract ITokenBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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

export class TokenSender__factory {
  static readonly abi = _abi;
  static createInterface(): TokenSenderInterface {
    return new utils.Interface(_abi) as TokenSenderInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TokenSender {
    return new Contract(address, _abi, signerOrProvider) as TokenSender;
  }
}
