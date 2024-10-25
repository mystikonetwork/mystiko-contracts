/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { MainAssetPool, MainAssetPoolInterface } from '../MainAssetPool';

const _abi = [
  {
    inputs: [],
    name: 'assetAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assetType',
    outputs: [
      {
        internalType: 'enum AssetPool.AssetType',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

export class MainAssetPool__factory {
  static readonly abi = _abi;
  static createInterface(): MainAssetPoolInterface {
    return new utils.Interface(_abi) as MainAssetPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MainAssetPool {
    return new Contract(address, _abi, signerOrProvider) as MainAssetPool;
  }
}
