/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  ILayerZeroUserApplicationConfig,
  ILayerZeroUserApplicationConfigInterface,
} from '../ILayerZeroUserApplicationConfig';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_srcChainId',
        type: 'uint16',
      },
      {
        internalType: 'bytes',
        name: '_srcAddress',
        type: 'bytes',
      },
    ],
    name: 'forceResumeReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_version',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: '_chainId',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: '_configType',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_config',
        type: 'bytes',
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_version',
        type: 'uint16',
      },
    ],
    name: 'setReceiveVersion',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_version',
        type: 'uint16',
      },
    ],
    name: 'setSendVersion',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class ILayerZeroUserApplicationConfig__factory {
  static readonly abi = _abi;
  static createInterface(): ILayerZeroUserApplicationConfigInterface {
    return new utils.Interface(_abi) as ILayerZeroUserApplicationConfigInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ILayerZeroUserApplicationConfig {
    return new Contract(address, _abi, signerOrProvider) as ILayerZeroUserApplicationConfig;
  }
}
