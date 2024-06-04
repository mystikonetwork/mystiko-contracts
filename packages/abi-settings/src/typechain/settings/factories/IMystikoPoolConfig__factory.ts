/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IMystikoPoolConfig, IMystikoPoolConfigInterface } from '../IMystikoPoolConfig';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
    ],
    name: 'isTransferDisable',
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
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
    ],
    name: 'queryMinRollupFee',
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
];

export class IMystikoPoolConfig__factory {
  static readonly abi = _abi;
  static createInterface(): IMystikoPoolConfigInterface {
    return new utils.Interface(_abi) as IMystikoPoolConfigInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMystikoPoolConfig {
    return new Contract(address, _abi, signerOrProvider) as IMystikoPoolConfig;
  }
}
