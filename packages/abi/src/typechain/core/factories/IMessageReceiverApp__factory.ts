/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IMessageReceiverApp, IMessageReceiverAppInterface } from '../IMessageReceiverApp';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: '_srcChainId',
        type: 'uint64',
      },
      {
        internalType: 'bytes',
        name: '_message',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
    ],
    name: 'executeMessage',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
];

export class IMessageReceiverApp__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageReceiverAppInterface {
    return new utils.Interface(_abi) as IMessageReceiverAppInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMessageReceiverApp {
    return new Contract(address, _abi, signerOrProvider) as IMessageReceiverApp;
  }
}
