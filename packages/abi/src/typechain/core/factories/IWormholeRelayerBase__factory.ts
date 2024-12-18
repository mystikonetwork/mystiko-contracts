/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IWormholeRelayerBase, IWormholeRelayerBaseInterface } from '../IWormholeRelayerBase';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'sequence',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deliveryQuote',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'paymentForExtraReceiverValue',
        type: 'uint256',
      },
    ],
    name: 'SendEvent',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'deliveryHash',
        type: 'bytes32',
      },
    ],
    name: 'deliveryAttempted',
    outputs: [
      {
        internalType: 'bool',
        name: 'attempted',
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
        name: 'deliveryHash',
        type: 'bytes32',
      },
    ],
    name: 'deliveryFailureBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'deliveryHash',
        type: 'bytes32',
      },
    ],
    name: 'deliverySuccessBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'chainId',
        type: 'uint16',
      },
    ],
    name: 'getRegisteredWormholeRelayerContract',
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
];

export class IWormholeRelayerBase__factory {
  static readonly abi = _abi;
  static createInterface(): IWormholeRelayerBaseInterface {
    return new utils.Interface(_abi) as IWormholeRelayerBaseInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IWormholeRelayerBase {
    return new Contract(address, _abi, signerOrProvider) as IWormholeRelayerBase;
  }
}
