/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2CelerMain, MystikoV2CelerMainInterface } from '../MystikoV2CelerMain';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IHasher3',
        name: '_hasher3',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AmountLessThanZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AmountTooLarge',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AmountTooSmall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'BridgeFeeTooFew',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CommitmentHashIncorrect',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DepositsDisabled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ExecutorFeeTooFew',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FromChainIdNotMatched',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FromProxyAddressNotMatched',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HashKGreaterThanFieldSize',
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
    name: 'MinAmountGreaterThanMaxAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotChanged',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyOperator',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RandomSGreaterThanFieldSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RollupFeeToFew',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SanctionedAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SenderIsNotBridgeProxy',
    type: 'error',
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
    name: 'CommitmentCrossChain',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minAmount',
        type: 'uint256',
      },
    ],
    name: 'DepositAmountLimits',
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
    name: 'DepositsDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minBridgeFee',
        type: 'uint256',
      },
    ],
    name: 'MinBridgeFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minExecutorFee',
        type: 'uint256',
      },
    ],
    name: 'MinExecutorFee',
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
        internalType: 'uint256',
        name: 'peerMinExecutorFee',
        type: 'uint256',
      },
    ],
    name: 'PeerMinExecutorFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'peerMinRollupFee',
        type: 'uint256',
      },
    ],
    name: 'PeerMinRollupFee',
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
  {
    inputs: [],
    name: 'bridgeProxyAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridgeType',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
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
            name: 'hashK',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'randomS',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'encryptedNote',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'bridgeFee',
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
        ],
        internalType: 'struct IMystikoBridge.DepositRequest',
        name: '_request',
        type: 'tuple',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
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
    inputs: [],
    name: 'enableSanctionsCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
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
  {
    inputs: [],
    name: 'getAssociatedCommitmentPool',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMaxAmount',
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
    name: 'getMinAmount',
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
    name: 'getMinBridgeFee',
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
    name: 'getMinExecutorFee',
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
    name: 'getPeerMinExecutorFee',
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
    name: 'getPeerMinRollupFee',
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
    name: 'isDepositsDisabled',
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
    name: 'peerChainId',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'peerChainName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'peerContract',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
        internalType: 'address',
        name: '_commitmentPoolAddress',
        type: 'address',
      },
    ],
    name: 'setAssociatedCommitmentPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridgeProxyAddress',
        type: 'address',
      },
    ],
    name: 'setBridgeProxyAddress',
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
    name: 'setDepositsDisabled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_minBridgeFee',
        type: 'uint256',
      },
    ],
    name: 'setMinBridgeFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_minExecutorFee',
        type: 'uint256',
      },
    ],
    name: 'setMinExecutorFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_peerChainId',
        type: 'uint64',
      },
      {
        internalType: 'string',
        name: '_peerChainName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_peerContract',
        type: 'address',
      },
    ],
    name: 'setPeerContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_peerMinExecutorFee',
        type: 'uint256',
      },
    ],
    name: 'setPeerMinExecutorFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_peerMinRollupFee',
        type: 'uint256',
      },
    ],
    name: 'setPeerMinRollupFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_maxAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minAmount',
        type: 'uint256',
      },
    ],
    name: 'updateDepositAmountLimits',
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

const _bytecode =
  '0x6080604052600080546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb1790553480156200003857600080fd5b50604051620025f2380380620025f28339810160408190526200005b916200008f565b600c80546001600160a01b03199081163317909155600180546001600160a01b0390931692909116919091179055620000c1565b600060208284031215620000a257600080fd5b81516001600160a01b0381168114620000ba57600080fd5b9392505050565b61252180620000d16000396000f3fe6080604052600436106101d85760003560e01c8063825b5f8d11610102578063ddac5dc111610095578063ec571c6a11610064578063ec571c6a1461055a578063ed6ea33a1461057a578063efbfb2ae14610599578063f4ad17c6146105ae57600080fd5b8063ddac5dc1146104dc578063e19abef8146104fa578063e8183c441461051a578063ea0cde851461053a57600080fd5b8063b1c39422116100d1578063b1c3942214610450578063cdfceeba14610471578063cfc7e2da146104b2578063dd757c34146104c757600080fd5b8063825b5f8d146103e55780639a03636c146103fa5780639c649fdf1461040d578063a3bc64f21461043057600080fd5b80632cd26d451161017a578063521ff05711610149578063521ff057146103705780635898a0a8146103905780635e10b2b7146103a55780637d2c8520146103c557600080fd5b80632cd26d45146102ff57806330f49cac1461031f5780633fe3347a1461033f5780634e3c10b71461035b57600080fd5b8063153dc450116101b6578063153dc4501461023857806319e75d6e1461025857806321e32d55146102785780632421e155146102b057600080fd5b806301dbf19f146101dd57806306394c9b146101f45780630ba9590914610214575b600080fd5b3480156101e957600080fd5b506101f26105c3565b005b34801561020057600080fd5b506101f261020f366004611fad565b610647565b34801561022057600080fd5b506007545b6040519081526020015b60405180910390f35b34801561024457600080fd5b506101f261025336600461216d565b6106eb565b34801561026457600080fd5b506101f261027336600461216d565b610752565b34801561028457600080fd5b50600454610298906001600160a01b031681565b6040516001600160a01b03909116815260200161022f565b3480156102bc57600080fd5b5060408051808201909152600581527f63656c657200000000000000000000000000000000000000000000000000000060208201525b60405161022f9190612388565b34801561030b57600080fd5b50600554610298906001600160a01b031681565b34801561032b57600080fd5b506101f261033a366004611fad565b6107b1565b34801561034b57600080fd5b50600160405161022f9190612360565b34801561036757600080fd5b506102f261082a565b34801561037c57600080fd5b506101f261038b36600461216d565b6108b8565b34801561039c57600080fd5b50600a54610225565b3480156103b157600080fd5b506101f26103c036600461216d565b61096b565b3480156103d157600080fd5b506101f26103e03660046121c1565b6109cb565b3480156103f157600080fd5b50600b54610225565b6101f26104083660046120af565b610a68565b61042061041b366004611fca565b610c78565b604051901515815260200161022f565b34801561043c57600080fd5b506101f261044b366004611fad565b610d02565b34801561045c57600080fd5b5060005461042090600160a01b900460ff1681565b34801561047d57600080fd5b5060025461049990600160a01b900467ffffffffffffffff1681565b60405167ffffffffffffffff909116815260200161022f565b3480156104be57600080fd5b50600654610225565b3480156104d357600080fd5b506101f2610d4f565b3480156104e857600080fd5b506002546001600160a01b0316610298565b34801561050657600080fd5b506101f2610515366004611fad565b610dc7565b34801561052657600080fd5b506101f261053536600461219f565b610e14565b34801561054657600080fd5b506101f2610555366004612075565b610ea7565b34801561056657600080fd5b50600054610298906001600160a01b031681565b34801561058657600080fd5b50600c54600160a01b900460ff16610420565b3480156105a557600080fd5b50600854610225565b3480156105ba57600080fd5b50600954610225565b600c546001600160a01b031633146105ee576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261063d92900460ff161515815260200190565b60405180910390a1565b600c546001600160a01b03163314610672576040516327e1f1e560e01b815260040160405180910390fd5b600c546001600160a01b03828116911614156106a1576040516336a1c33f60e01b815260040160405180910390fd5b600c80546001600160a01b0319166001600160a01b0383169081179091556040517f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e5490600090a250565b600c546001600160a01b03163314610716576040516327e1f1e560e01b815260040160405180910390fd5b600a8190556040518181527f14988234d3e50a12aeec2d6ee595b70c2fae163caff28baab5802b122bf2a753906020015b60405180910390a150565b600c546001600160a01b0316331461077d576040516327e1f1e560e01b815260040160405180910390fd5b60088190556040518181527e91f5f5db3092e39ecb701218d4af20b7571e0429595937c334f3acd14fe2fe90602001610747565b600c546001600160a01b031633146107dc576040516327e1f1e560e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b190602001610747565b6003805461083790612474565b80601f016020809104026020016040519081016040528092919081815260200182805461086390612474565b80156108b05780601f10610885576101008083540402835291602001916108b0565b820191906000526020600020905b81548152906001019060200180831161089357829003601f168201915b505050505081565b600c546001600160a01b031633146108e3576040516327e1f1e560e01b815260040160405180910390fd5b80610936576040516314e8955b60e21b815260206004820152601760248201527f70656572206d696e696d616c20726f6c6c75702066656500000000000000000060448201526064015b60405180910390fd5b600b8190556040518181527f878075a8e8aa1c7c15e6932752520f7812bf5744785e6df605373729da41554590602001610747565b600c546001600160a01b03163314610996576040516327e1f1e560e01b815260040160405180910390fd5b60098190556040518181527f88d210dfa198f7519579294721f90c771153a7b49101eefb95147037cc8ce48190602001610747565b600c546001600160a01b031633146109f6576040516327e1f1e560e01b815260040160405180910390fd5b600280547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff8616021790558151610a43906003906020850190611e3f565b50600480546001600160a01b0319166001600160a01b03929092169190911790555050565b600c54600160a01b900460ff1615610a9357604051630e2f42c960e31b815260040160405180910390fd5b60065481511015610ab75760405163617ab12d60e11b815260040160405180910390fd5b60075481511115610adb57604051630625040160e01b815260040160405180910390fd5b6008548160a001511015610b025760405163c4d8d00d60e01b815260040160405180910390fd5b600a548160c001511015610b29576040516355a6d6a160e11b815260040160405180910390fd5b600b548160e001511015610b505760405163784f02bd60e11b815260040160405180910390fd5b6000610b69826040015183600001518460600151610f1f565b905080826020015114610b8f576040516301bfaa2560e51b815260040160405180910390fd5b610b9833611045565b15610bb657604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610bf9826110e2565b9050610c098460a0015182611151565b60025460e085015160c08601518651610c44936001600160a01b03169291610c3091612422565b610c3a9190612422565b8660a001516111d4565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b6005546000906001600160a01b03163314610ca657604051633dca01cf60e11b815260040160405180910390fd5b6000610ce785858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112d592505050565b9050610cf58688858461139d565b5060019695505050505050565b600c546001600160a01b03163314610d2d576040516327e1f1e560e01b815260040160405180910390fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b03163314610d7a576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161063d91600160a01b90910460ff161515815260200190565b600c546001600160a01b03163314610df2576040516327e1f1e560e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b03163314610e3f576040516327e1f1e560e01b815260040160405180910390fd5b81811115610e6057604051636003e82160e11b815260040160405180910390fd5b6007829055600681905560408051838152602081018390527f7633004c7a229869aeea10db4ff3e57e3b1534aeb2c9e72c5db25f965895c330910160405180910390a15050565b600c546001600160a01b03163314610ed2576040516327e1f1e560e01b815260040160405180910390fd5b600c8054821515600160a01b0260ff60a01b199091161790556040517fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e099061074790831515815260200190565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001808510610f625760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff1610610f9457604051633bbde0bf60e21b815260040160405180910390fd5b60015460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e891610fec9160040161232f565b60206040518083038186803b15801561100457600080fd5b505afa158015611018573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103c9190612186565b95945050505050565b60008054600160a01b900460ff1661105f57506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b1580156110a457600080fd5b505afa1580156110b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110dc9190612092565b92915050565b6060806110f2836000015161148a565b6110ff846020015161148a565b61110c856040015161148a565b611119866060015161148a565b6111268760800151611522565b60405160200161113a959493929190612292565b60408051601f198184030181529190529392505050565b60055460048054600254604051634f9e72ad60e11b81526001600160a01b0394851694639f3ce55a94889461119e94921692600160a01b90920467ffffffffffffffff16918891016122fd565b6000604051808303818588803b1580156111b757600080fd5b505af11580156111cb573d6000803e3d6000fd5b50505050505050565b6111de8183612422565b341461122c5760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e0000000000000000000000000000604482015260640161092d565b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114611279576040519150601f19603f3d011682016040523d82523d6000602084013e61127e565b606091505b50509050806112cf5760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c656400000000000000000000604482015260640161092d565b50505050565b6113076040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6113396040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b60006113458482611559565b90835290506113548482611559565b602084019190915290506113688482611559565b6040840191909152905061137c8482611559565b60608401919091529050611390848261168a565b5060808301525092915050565b6004546001600160a01b038481169116146113cb57604051631440e07960e11b815260040160405180910390fd5b60025467ffffffffffffffff858116600160a01b909204161461140157604051633876304f60e21b815260040160405180910390fd5b80516114205760405163820bf1e560e01b815260040160405180910390fd5b6002546040516378d60cd760e01b81526001600160a01b03909116906378d60cd790611452908490869060040161239b565b600060405180830381600087803b15801561146c57600080fd5b505af1158015611480573d6000803e3d6000fd5b5050505050505050565b60606001600160ff1b038211156114e35760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e67650000000000604482015260640161092d565b60405160208082526000601f5b828210156115125785811a8260208601015360019190910190600019016114f0565b5050506040818101905292915050565b805160609061153081611797565b83604051602001611542929190612263565b604051602081830303815290604052915050919050565b600080835183602061156b9190612422565b11158015611582575061157f836020612422565b83105b6115da5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b606482015260840161092d565b600060405160206000600182038760208a0101515b8383101561160f5780821a838601536001830192506001820391506115ef565b50505081016040525190506001600160ff1b038111156116715760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e6765000000000000000000604482015260640161092d565b8061167d856020612422565b92509250505b9250929050565b60606000806116998585611864565b86519095509091506116ab8286612422565b111580156116c157506116be8185612422565b84105b6117195760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b606482015260840161092d565b6060811580156117345760405191506020820160405261177e565b6040519150601f8316801560200281840101848101888315602002848c0101015b8183101561176d578051835260209283019201611755565b5050848452601f01601f1916604052505b508061178a8387612422565b9350935050509250929050565b606060fd8267ffffffffffffffff1610156117ca57604080516001815260f884901b6020820152602181019091526110dc565b61ffff8267ffffffffffffffff161161181a576117ea60fd60f81b611a6a565b6117f383611a91565b604051602001611804929190612263565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff16116118455761183c607f60f91b611a6a565b6117f383611ad4565b6118566001600160f81b0319611a6a565b6117f383611b17565b919050565b60008060006118738585611b5a565b94509050600060fd60f81b6001600160f81b03198316141561190c576118998686611be2565b955061ffff16905060fd81108015906118b4575061ffff8111155b6119005760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e676500604482015260640161092d565b92508391506116839050565b607f60f91b6001600160f81b0319831614156119975761192c8686611c9b565b955063ffffffff16905061ffff8111801561194b575063ffffffff8111155b6119005760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161092d565b6001600160f81b03198083161415611a14576119b38686611d6d565b955067ffffffffffffffff16905063ffffffff81116119005760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161092d565b5060f881901c60fd81106119005760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e6765604482015260640161092d565b60408051600181526001600160f81b031983166020820152602181019091526060906110dc565b6040516002808252606091906000601f5b82821015611ac45785811a826020860101536001919091019060001901611aa2565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611b075785811a826020860101536001919091019060001901611ae5565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611b4a5785811a826020860101536001919091019060001901611b28565b5050506028810160405292915050565b6000808351836001611b6c9190612422565b11158015611b835750611b80836001612422565b83105b611bcf5760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d604482015260640161092d565b838301602001518061167d856001612422565b6000808351836002611bf49190612422565b11158015611c0b5750611c08836002612422565b83105b611c625760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161092d565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e8103519150508084600261167d9190612422565b6000808351836004611cad9190612422565b11158015611cc45750611cc1836004612422565b83105b611d1b5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161092d565b600060405160046000600182038760208a0101515b83831015611d505780821a83860153600183019250600182039150611d30565b50505081810160405260200390035190508061167d856004612422565b6000808351836008611d7f9190612422565b11158015611d965750611d93836008612422565b83105b611ded5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b606482015260840161092d565b600060405160086000600182038760208a0101515b83831015611e225780821a83860153600183019250600182039150611e02565b50505081810160405260200390035190508061167d856008612422565b828054611e4b90612474565b90600052602060002090601f016020900481019282611e6d5760008555611eb3565b82601f10611e8657805160ff1916838001178555611eb3565b82800160010185558215611eb3579182015b82811115611eb3578251825591602001919060010190611e98565b50611ebf929150611ec3565b5090565b5b80821115611ebf5760008155600101611ec4565b600067ffffffffffffffff80841115611ef357611ef36124af565b604051601f8501601f19908116603f01168101908282118183101715611f1b57611f1b6124af565b81604052809350858152868686011115611f3457600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611f5f57600080fd5b611f6e83833560208501611ed8565b9392505050565b80356fffffffffffffffffffffffffffffffff8116811461185f57600080fd5b803567ffffffffffffffff8116811461185f57600080fd5b600060208284031215611fbf57600080fd5b8135611f6e816124c5565b600080600080600060808688031215611fe257600080fd5b8535611fed816124c5565b9450611ffb60208701611f95565b9350604086013567ffffffffffffffff8082111561201857600080fd5b818801915088601f83011261202c57600080fd5b81358181111561203b57600080fd5b89602082850101111561204d57600080fd5b6020830195508094505050506060860135612067816124c5565b809150509295509295909350565b60006020828403121561208757600080fd5b8135611f6e816124dd565b6000602082840312156120a457600080fd5b8151611f6e816124dd565b6000602082840312156120c157600080fd5b813567ffffffffffffffff808211156120d957600080fd5b9083019061010082860312156120ee57600080fd5b6120f66123f8565b82358152602083013560208201526040830135604082015261211a60608401611f75565b606082015260808301358281111561213157600080fd5b61213d87828601611f4e565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b60006020828403121561217f57600080fd5b5035919050565b60006020828403121561219857600080fd5b5051919050565b600080604083850312156121b257600080fd5b50508035926020909101359150565b6000806000606084860312156121d657600080fd5b6121df84611f95565b9250602084013567ffffffffffffffff8111156121fb57600080fd5b8401601f8101861361220c57600080fd5b61221b86823560208401611ed8565b925050604084013561222c816124c5565b809150509250925092565b6000815180845261224f816020860160208601612448565b601f01601f19169290920160200192915050565b60008351612275818460208801612448565b835190830190612289818360208801612448565b01949350505050565b600086516122a4818460208b01612448565b8651908301906122b8818360208b01612448565b86519101906122cb818360208a01612448565b85519101906122de818360208901612448565b84519101906122f1818360208801612448565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820152600061103c6060830184612237565b60608101818360005b6003811015612357578151835260209283019290910190600101612338565b50505092915050565b602081016002831061238257634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000611f6e6020830184612237565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526123df60e0840182612237565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff8111828210171561241c5761241c6124af565b60405290565b6000821982111561244357634e487b7160e01b600052601160045260246000fd5b500190565b60005b8381101561246357818101518382015260200161244b565b838111156112cf5750506000910152565b600181811c9082168061248857607f821691505b602082108114156124a957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146124da57600080fd5b50565b80151581146124da57600080fdfea2646970667358221220b1261cf3de75b41be9d309d1ccba847f540e679c10092da89ce2caa14590863164736f6c63430008070033';

type MystikoV2CelerMainConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2CelerMainConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2CelerMain__factory extends ContractFactory {
  constructor(...args: MystikoV2CelerMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2CelerMain';
  }

  deploy(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2CelerMain> {
    return super.deploy(_hasher3, overrides || {}) as Promise<MystikoV2CelerMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, overrides || {});
  }
  attach(address: string): MystikoV2CelerMain {
    return super.attach(address) as MystikoV2CelerMain;
  }
  connect(signer: Signer): MystikoV2CelerMain__factory {
    return super.connect(signer) as MystikoV2CelerMain__factory;
  }
  static readonly contractName: 'MystikoV2CelerMain';
  public readonly contractName: 'MystikoV2CelerMain';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2CelerMainInterface {
    return new utils.Interface(_abi) as MystikoV2CelerMainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2CelerMain {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2CelerMain;
  }
}
