/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { CommitmentPool, CommitmentPoolInterface } from '../CommitmentPool';

const _abi = [
  {
    inputs: [],
    name: 'AuditorIndexError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AuditorNotesLengthError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AuditorPublicKeyNotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CommitmentHasBeenSubmitted',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'Duplicated',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IndexOutOfBound',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'Invalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NewRootIsDuplicated',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoteHasBeenSpent',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NumInputsGreaterThanZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyOperator',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyWhitelistedRoller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyWhitelistedSender',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OutputNotesLessThanThree',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupFeeToFew',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupSizeNotPowerOfTwo',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SanctionedAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TreeHeightLessThanZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TreeHeightOutOfBounds',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TreeIsFull',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VerifierUpdatesHasBeenDisabled',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'publicKey',
        type: 'uint256',
      },
    ],
    name: 'AuditorPublicKey',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'commitment',
        type: 'uint256',
      },
    ],
    name: 'CommitmentIncluded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'commitment',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rollupFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'leafIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'encryptedNote',
        type: 'bytes',
      },
    ],
    name: 'CommitmentQueued',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'rootHash',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serialNumber',
        type: 'uint256',
      },
    ],
    name: 'CommitmentSpent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'auditorPublicKey',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'encryptedAuditorNote',
        type: 'uint256',
      },
    ],
    name: 'EncryptedAuditorNote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'id',
            type: 'uint64',
          },
          {
            internalType: 'uint256',
            name: 'publicKey',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'note',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct CommitmentPool.AuditorNote[]',
        name: 'notes',
        type: 'tuple[]',
      },
    ],
    name: 'EncryptedAuditorNotes',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'OperatorChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: 'RollupWhitelistDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: 'SanctionsCheck',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract ISanctionsList',
        name: 'sanctions',
        type: 'address',
      },
    ],
    name: 'SanctionsList',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: 'VerifierUpdateDisabled',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_fullPath',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_rollupSize',
        type: 'uint32',
      },
    ],
    name: '_pathIndices',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_actor',
        type: 'address',
      },
    ],
    name: 'addEnqueueWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_roller',
        type: 'address',
      },
    ],
    name: 'addRollupWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'auditorCount',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOperator',
        type: 'address',
      },
    ],
    name: 'changeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_rollupSize',
        type: 'uint32',
      },
    ],
    name: 'disableRollupVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'disableSanctionsCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_numInputs',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_numOutputs',
        type: 'uint32',
      },
    ],
    name: 'disableTransactVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_rollupSize',
        type: 'uint32',
      },
      {
        internalType: 'contract IVerifier',
        name: '_rollupVerifier',
        type: 'address',
      },
    ],
    name: 'enableRollupVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'enableSanctionsCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_numInputs',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_numOutputs',
        type: 'uint32',
      },
      {
        internalType: 'contract IVerifier',
        name: '_transactVerifier',
        type: 'address',
      },
    ],
    name: 'enableTransactVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'commitment',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executorFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rollupFee',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'encryptedNote',
            type: 'bytes',
          },
        ],
        internalType: 'struct ICommitmentPool.CommitmentRequest',
        name: '_request',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
    ],
    name: 'enqueue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllAuditorPublicKeys',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getAuditorPublicKey',
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
  {
    inputs: [],
    name: 'getCommitmentCount',
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
  {
    inputs: [],
    name: 'getCommitmentQueueSize',
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
  {
    inputs: [],
    name: 'getCommitmentQueuedCount',
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
  {
    inputs: [],
    name: 'getMinRollupFee',
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
  {
    inputs: [],
    name: 'getNullifierCount',
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
  {
    inputs: [],
    name: 'getQueuedCommitments',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTreeCapacity',
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
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_commitment',
        type: 'uint256',
      },
    ],
    name: 'isHistoricCommitment',
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
        internalType: 'uint256',
        name: 'root',
        type: 'uint256',
      },
    ],
    name: 'isKnownRoot',
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
    inputs: [],
    name: 'isRollupWhitelistDisabled',
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
        internalType: 'uint256',
        name: '_serialNumber',
        type: 'uint256',
      },
    ],
    name: 'isSpentSerialNumber',
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
    inputs: [],
    name: 'isVerifierUpdateDisabled',
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
        name: '_actor',
        type: 'address',
      },
    ],
    name: 'removeEnqueueWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_roller',
        type: 'address',
      },
    ],
    name: 'removeRollupWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'X',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'Y',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IVerifier.G1Point',
                name: 'a',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'uint256[2]',
                    name: 'X',
                    type: 'uint256[2]',
                  },
                  {
                    internalType: 'uint256[2]',
                    name: 'Y',
                    type: 'uint256[2]',
                  },
                ],
                internalType: 'struct IVerifier.G2Point',
                name: 'b',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'X',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'Y',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IVerifier.G1Point',
                name: 'c',
                type: 'tuple',
              },
            ],
            internalType: 'struct IVerifier.Proof',
            name: 'proof',
            type: 'tuple',
          },
          {
            internalType: 'uint32',
            name: 'rollupSize',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'newRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leafHash',
            type: 'uint256',
          },
        ],
        internalType: 'struct ICommitmentPool.RollupRequest',
        name: '_request',
        type: 'tuple',
      },
    ],
    name: 'rollup',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sanctionsCheck',
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
    inputs: [],
    name: 'sanctionsList',
    outputs: [
      {
        internalType: 'contract ISanctionsList',
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
        internalType: 'uint256',
        name: '_minRollupFee',
        type: 'uint256',
      },
    ],
    name: 'setMinRollupFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setRollupWhitelistDisabled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setVerifierUpdateDisabled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'X',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'Y',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IVerifier.G1Point',
                name: 'a',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'uint256[2]',
                    name: 'X',
                    type: 'uint256[2]',
                  },
                  {
                    internalType: 'uint256[2]',
                    name: 'Y',
                    type: 'uint256[2]',
                  },
                ],
                internalType: 'struct IVerifier.G2Point',
                name: 'b',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'X',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'Y',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IVerifier.G1Point',
                name: 'c',
                type: 'tuple',
              },
            ],
            internalType: 'struct IVerifier.Proof',
            name: 'proof',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'rootHash',
            type: 'uint256',
          },
          {
            internalType: 'uint256[]',
            name: 'serialNumbers',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'sigHashes',
            type: 'uint256[]',
          },
          {
            internalType: 'bytes32',
            name: 'sigPk',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'publicAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'relayerFeeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256[]',
            name: 'outCommitments',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'outRollupFees',
            type: 'uint256[]',
          },
          {
            internalType: 'address',
            name: 'publicRecipient',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'relayerAddress',
            type: 'address',
          },
          {
            internalType: 'bytes[]',
            name: 'outEncryptedNotes',
            type: 'bytes[]',
          },
          {
            internalType: 'uint256',
            name: 'randomAuditingPublicKey',
            type: 'uint256',
          },
          {
            internalType: 'uint256[]',
            name: 'encryptedAuditorNotes',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct ICommitmentPool.TransactRequest',
        name: '_request',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_signature',
        type: 'bytes',
      },
    ],
    name: 'transact',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_publicKey',
        type: 'uint256',
      },
    ],
    name: 'updateAuditorPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ISanctionsList',
        name: '_sanction',
        type: 'address',
      },
    ],
    name: 'updateSanctionsListAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class CommitmentPool__factory {
  static readonly abi = _abi;
  static createInterface(): CommitmentPoolInterface {
    return new utils.Interface(_abi) as CommitmentPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CommitmentPool {
    return new Contract(address, _abi, signerOrProvider) as CommitmentPool;
  }
}
