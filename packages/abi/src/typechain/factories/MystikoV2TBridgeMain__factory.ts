/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2TBridgeMain, MystikoV2TBridgeMainInterface } from '../MystikoV2TBridgeMain';

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
    inputs: [],
    name: 'ServiceFeeDividerTooSmall',
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
        name: 'minAmount',
        type: 'uint256',
      },
    ],
    name: 'MinAmount',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'serviceFee',
        type: 'uint256',
      },
    ],
    name: 'ServiceFeeChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'collector',
        type: 'address',
      },
    ],
    name: 'ServiceFeeCollectorChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'serviceFeeDivider',
        type: 'uint256',
      },
    ],
    name: 'ServiceFeeDividerChanged',
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
        internalType: 'uint256',
        name: '_newServiceFee',
        type: 'uint256',
      },
    ],
    name: 'changeServiceFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newCollector',
        type: 'address',
      },
    ],
    name: 'changeServiceFeeCollector',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newServiceFeeDivider',
        type: 'uint256',
      },
    ],
    name: 'changeServiceFeeDivider',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_fromChainId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: '_fromContract',
        type: 'address',
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
    name: 'crossChainSyncTx',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
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
    name: 'getServiceFee',
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
    name: 'getServiceFeeCollector',
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
    name: 'getServiceFeeDivider',
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
        name: '_minAmount',
        type: 'uint256',
      },
    ],
    name: 'setMinAmount',
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
  '0x6080604052600080546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb1790553480156200003857600080fd5b506040516200298a3803806200298a8339810160408190526200005b916200009c565b600b80546001600160a01b03199081163317909155600180546001600160a01b03909316929091169190911790556103e8600d55620f4240600e55620000ce565b600060208284031215620000af57600080fd5b81516001600160a01b0381168114620000c757600080fd5b9392505050565b6128ac80620000de6000396000f3fe60806040526004361061024f5760003560e01c8063825b5f8d11610138578063d3e256bf116100b0578063ea0cde851161007f578063ed6ea33a11610064578063ed6ea33a14610691578063efbfb2ae146106a9578063f4ad17c6146106be57600080fd5b8063ea0cde8514610651578063ec571c6a1461067157600080fd5b8063d3e256bf146105de578063dd757c34146105fe578063ddac5dc114610613578063e19abef81461063157600080fd5b8063a3bc64f211610107578063b1c39422116100ec578063b1c3942214610567578063cdfceeba14610588578063cfc7e2da146105c957600080fd5b8063a3bc64f214610527578063b1a0b3581461054757600080fd5b8063825b5f8d146104af57806382d21cd8146104c4578063897b0637146104f45780639a03636c1461051457600080fd5b80632cd26d45116101cb5780634e3c10b71161019a5780635898a0a81161017f5780635898a0a81461045a5780635e10b2b71461046f5780637d2c85201461048f57600080fd5b80634e3c10b714610425578063521ff0571461043a57600080fd5b80632cd26d45146103ab57806330f49cac146103cb5780633fc8c4d6146103eb5780633fe3347a1461040957600080fd5b806311a1933c1161022257806319e75d6e1161020757806319e75d6e1461030457806321e32d55146103245780632421e1551461035c57600080fd5b806311a1933c146102cf578063153dc450146102e457600080fd5b806301dbf19f1461025457806306394c9b1461026b5780630a5ea9eb1461028b5780630f087d76146102af575b600080fd5b34801561026057600080fd5b506102696106d3565b005b34801561027757600080fd5b5061026961028636600461230d565b610757565b34801561029757600080fd5b50600e545b6040519081526020015b60405180910390f35b3480156102bb57600080fd5b506102696102ca36600461230d565b6107fb565b3480156102db57600080fd5b50600d5461029c565b3480156102f057600080fd5b506102696102ff366004612422565b61089f565b34801561031057600080fd5b5061026961031f366004612422565b610906565b34801561033057600080fd5b50600454610344906001600160a01b031681565b6040516001600160a01b0390911681526020016102a6565b34801561036857600080fd5b5060408051808201909152600781527f746272696467650000000000000000000000000000000000000000000000000060208201525b6040516102a691906126c6565b3480156103b757600080fd5b50600554610344906001600160a01b031681565b3480156103d757600080fd5b506102696103e636600461230d565b610965565b3480156103f757600080fd5b50600c546001600160a01b0316610344565b34801561041557600080fd5b5060016040516102a6919061269e565b34801561043157600080fd5b5061039e6109de565b34801561044657600080fd5b50610269610455366004612422565b610a6c565b34801561046657600080fd5b5060095461029c565b34801561047b57600080fd5b5061026961048a366004612422565b610b1f565b34801561049b57600080fd5b506102696104aa3660046124ff565b610b7f565b3480156104bb57600080fd5b50600a5461029c565b3480156104d057600080fd5b506104e46104df366004612454565b610c1c565b60405190151581526020016102a6565b34801561050057600080fd5b5061026961050f366004612422565b610ca6565b610269610522366004612364565b610d06565b34801561053357600080fd5b5061026961054236600461230d565b610f0f565b34801561055357600080fd5b50610269610562366004612422565b610f5c565b34801561057357600080fd5b506000546104e490600160a01b900460ff1681565b34801561059457600080fd5b506002546105b090600160a01b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016102a6565b3480156105d557600080fd5b5060065461029c565b3480156105ea57600080fd5b506102696105f9366004612422565b610ffd565b34801561060a57600080fd5b50610269611080565b34801561061f57600080fd5b506002546001600160a01b0316610344565b34801561063d57600080fd5b5061026961064c36600461230d565b6110f8565b34801561065d57600080fd5b5061026961066c36600461232a565b611145565b34801561067d57600080fd5b50600054610344906001600160a01b031681565b34801561069d57600080fd5b50600f5460ff166104e4565b3480156106b557600080fd5b5060075461029c565b3480156106ca57600080fd5b5060085461029c565b600b546001600160a01b031633146106fe576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261074d92900460ff161515815260200190565b60405180910390a1565b600b546001600160a01b03163314610782576040516327e1f1e560e01b815260040160405180910390fd5b600b546001600160a01b03828116911614156107b1576040516336a1c33f60e01b815260040160405180910390fd5b600b80546001600160a01b0319166001600160a01b0383169081179091556040517f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e5490600090a250565b600b546001600160a01b03163314610826576040516327e1f1e560e01b815260040160405180910390fd5b600c546001600160a01b0382811691161415610855576040516336a1c33f60e01b815260040160405180910390fd5b600c80546001600160a01b0319166001600160a01b0383169081179091556040517fe6bc4ba4d04102f8f1140ad88cba6b7bd753b0391069bca06f44a955507dbb9390600090a250565b600b546001600160a01b031633146108ca576040516327e1f1e560e01b815260040160405180910390fd5b60098190556040518181527f14988234d3e50a12aeec2d6ee595b70c2fae163caff28baab5802b122bf2a753906020015b60405180910390a150565b600b546001600160a01b03163314610931576040516327e1f1e560e01b815260040160405180910390fd5b60078190556040518181527e91f5f5db3092e39ecb701218d4af20b7571e0429595937c334f3acd14fe2fe906020016108fb565b600b546001600160a01b03163314610990576040516327e1f1e560e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016108fb565b600380546109eb906127e9565b80601f0160208091040260200160405190810160405280929190818152602001828054610a17906127e9565b8015610a645780601f10610a3957610100808354040283529160200191610a64565b820191906000526020600020905b815481529060010190602001808311610a4757829003601f168201915b505050505081565b600b546001600160a01b03163314610a97576040516327e1f1e560e01b815260040160405180910390fd5b80610aea576040516314e8955b60e21b815260206004820152601760248201527f70656572206d696e696d616c20726f6c6c75702066656500000000000000000060448201526064015b60405180910390fd5b600a8190556040518181527f878075a8e8aa1c7c15e6932752520f7812bf5744785e6df605373729da415545906020016108fb565b600b546001600160a01b03163314610b4a576040516327e1f1e560e01b815260040160405180910390fd5b60088190556040518181527f88d210dfa198f7519579294721f90c771153a7b49101eefb95147037cc8ce481906020016108fb565b600b546001600160a01b03163314610baa576040516327e1f1e560e01b815260040160405180910390fd5b600280547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff8616021790558151610bf79060039060208501906121a6565b50600480546001600160a01b0319166001600160a01b03929092169190911790555050565b6005546000906001600160a01b03163314610c4a57604051633dca01cf60e11b815260040160405180910390fd5b6000610c8b85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111b192505050565b9050610c9987878584611279565b5060019695505050505050565b600b546001600160a01b03163314610cd1576040516327e1f1e560e01b815260040160405180910390fd5b60068190556040518181527f1c853e705f5e96d9076d1f48114d62650faf218827df3fed720227b3dbf18c5a906020016108fb565b600f5460ff1615610d2a57604051630e2f42c960e31b815260040160405180910390fd5b60065481511015610d4e5760405163617ab12d60e11b815260040160405180910390fd5b6007548160a001511015610d755760405163c4d8d00d60e01b815260040160405180910390fd5b6009548160c001511015610d9c576040516355a6d6a160e11b815260040160405180910390fd5b600a548160e001511015610dc35760405163784f02bd60e11b815260040160405180910390fd5b6000610ddc826040015183600001518460600151611366565b905080826020015114610e02576040516301bfaa2560e51b815260040160405180910390fd5b610e0b3361148c565b15610e2957604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610e6c82611529565b9050610e7c8460a0015182611598565b600254600c54600e548651600d54610edb946001600160a01b03908116941692610eb1929091610eab9161161b565b9061162e565b60e088015160c08901518951610ec79190612760565b610ed19190612760565b8860a0015161163a565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b600b546001600160a01b03163314610f3a576040516327e1f1e560e01b815260040160405180910390fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314610f87576040516327e1f1e560e01b815260040160405180910390fd5b80600e541415610faa576040516336a1c33f60e01b815260040160405180910390fd5b80610fc8576040516313a2a85760e21b815260040160405180910390fd5b600e8190556040518181527fc9993a13ab327e43d2c7222016ea042dc8e0889c91571ae6062990deacb4540c906020016108fb565b600b546001600160a01b03163314611028576040516327e1f1e560e01b815260040160405180910390fd5b80600d54141561104b576040516336a1c33f60e01b815260040160405180910390fd5b600d8190556040518181527f1c068decb3b5138b265d62b22c4c2d8191a2e0bd3745e97b5b0ff66fa852eca5906020016108fb565b600b546001600160a01b031633146110ab576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161074d91600160a01b90910460ff161515815260200190565b600b546001600160a01b03163314611123576040516327e1f1e560e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b03163314611170576040516327e1f1e560e01b815260040160405180910390fd5b600f805460ff19168215159081179091556040519081527fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e09906020016108fb565b6111e36040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6112156040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b600061122184826117f1565b908352905061123084826117f1565b6020840191909152905061124484826117f1565b6040840191909152905061125884826117f1565b6060840191909152905061126c8482611922565b5060808301525092915050565b6004546001600160a01b038481169116146112a757604051631440e07960e11b815260040160405180910390fd5b60025467ffffffffffffffff858116600160a01b90920416146112dd57604051633876304f60e21b815260040160405180910390fd5b80516112fc5760405163820bf1e560e01b815260040160405180910390fd5b6002546040516378d60cd760e01b81526001600160a01b03909116906378d60cd79061132e90849086906004016126d9565b600060405180830381600087803b15801561134857600080fd5b505af115801561135c573d6000803e3d6000fd5b5050505050505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106113a95760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff16106113db57604051633bbde0bf60e21b815260040160405180910390fd5b60015460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916114339160040161266d565b60206040518083038186803b15801561144b57600080fd5b505afa15801561145f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611483919061243b565b95945050505050565b60008054600160a01b900460ff166114a657506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b1580156114eb57600080fd5b505afa1580156114ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115239190612347565b92915050565b6060806115398360000151611a2f565b6115468460200151611a2f565b6115538560400151611a2f565b6115608660600151611a2f565b61156d8760800151611ac7565b6040516020016115819594939291906125d0565b60408051601f198184030181529190529392505050565b6005546004805460025460405163c81739cd60e01b81526001600160a01b039485169463c81739cd9488946115e594921692600160a01b90920467ffffffffffffffff169188910161263b565b6000604051808303818588803b1580156115fe57600080fd5b505af1158015611612573d6000803e3d6000fd5b50505050505050565b6000611627828461279a565b9392505050565b60006116278284612778565b826116458284612760565b61164f9190612760565b341461169d5760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e00000000000000000000000000006044820152606401610ae1565b6000856001600160a01b03168360405160006040518083038185875af1925050503d80600081146116ea576040519150601f19603f3d011682016040523d82523d6000602084013e6116ef565b606091505b50509050806117405760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c6564000000000000000000006044820152606401610ae1565b83156117e9576000856001600160a01b03168560405160006040518083038185875af1925050503d8060008114611793576040519150601f19603f3d011682016040523d82523d6000602084013e611798565b606091505b50509050806116125760405162461bcd60e51b815260206004820152601b60248201527f7365727669636520666565207472616e73666572206661696c656400000000006044820152606401610ae1565b505050505050565b60008083518360206118039190612760565b1115801561181a5750611817836020612760565b83105b6118725760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401610ae1565b600060405160206000600182038760208a0101515b838310156118a75780821a83860153600183019250600182039150611887565b50505081016040525190506001600160ff1b038111156119095760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401610ae1565b80611915856020612760565b92509250505b9250929050565b60606000806119318585611afe565b86519095509091506119438286612760565b1115801561195957506119568185612760565b84105b6119b15760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401610ae1565b6060811580156119cc57604051915060208201604052611a16565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611a055780518352602092830192016119ed565b5050848452601f01601f1916604052505b5080611a228387612760565b9350935050509250929050565b60606001600160ff1b03821115611a885760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401610ae1565b60405160208082526000601f5b82821015611ab75785811a826020860101536001919091019060001901611a95565b5050506040818101905292915050565b8051606090611ad581611d04565b83604051602001611ae79291906125a1565b604051602081830303815290604052915050919050565b6000806000611b0d8585611dd1565b94509050600060fd60f81b6001600160f81b031983161415611ba657611b338686611e59565b955061ffff16905060fd8110801590611b4e575061ffff8111155b611b9a5760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401610ae1565b925083915061191b9050565b607f60f91b6001600160f81b031983161415611c3157611bc68686611f12565b955063ffffffff16905061ffff81118015611be5575063ffffffff8111155b611b9a5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610ae1565b6001600160f81b03198083161415611cae57611c4d8686611fe4565b955067ffffffffffffffff16905063ffffffff8111611b9a5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610ae1565b5060f881901c60fd8110611b9a5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610ae1565b606060fd8267ffffffffffffffff161015611d3757604080516001815260f884901b602082015260218101909152611523565b61ffff8267ffffffffffffffff1611611d8757611d5760fd60f81b6120b6565b611d60836120dd565b604051602001611d719291906125a1565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611db257611da9607f60f91b6120b6565b611d6083612120565b611dc36001600160f81b03196120b6565b611d6083612163565b919050565b6000808351836001611de39190612760565b11158015611dfa5750611df7836001612760565b83105b611e465760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401610ae1565b8383016020015180611915856001612760565b6000808351836002611e6b9190612760565b11158015611e825750611e7f836002612760565b83105b611ed95760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610ae1565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026119159190612760565b6000808351836004611f249190612760565b11158015611f3b5750611f38836004612760565b83105b611f925760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610ae1565b600060405160046000600182038760208a0101515b83831015611fc75780821a83860153600183019250600182039150611fa7565b505050818101604052602003900351905080611915856004612760565b6000808351836008611ff69190612760565b1115801561200d575061200a836008612760565b83105b6120645760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610ae1565b600060405160086000600182038760208a0101515b838310156120995780821a83860153600183019250600182039150612079565b505050818101604052602003900351905080611915856008612760565b60408051600181526001600160f81b03198316602082015260218101909152606090611523565b6040516002808252606091906000601f5b828210156121105785811a8260208601015360019190910190600019016120ee565b5050506022810160405292915050565b6040516004808252606091906000601f5b828210156121535785811a826020860101536001919091019060001901612131565b5050506024810160405292915050565b6040516008808252606091906000601f5b828210156121965785811a826020860101536001919091019060001901612174565b5050506028810160405292915050565b8280546121b2906127e9565b90600052602060002090601f0160209004810192826121d4576000855561221a565b82601f106121ed57805160ff191683800117855561221a565b8280016001018555821561221a579182015b8281111561221a5782518255916020019190600101906121ff565b5061222692915061222a565b5090565b5b80821115612226576000815560010161222b565b600067ffffffffffffffff8084111561225a5761225a61283a565b604051601f8501601f19908116603f011681019082821181831017156122825761228261283a565b8160405280935085815286868601111561229b57600080fd5b858560208301376000602087830101525050509392505050565b600082601f8301126122c657600080fd5b6116278383356020850161223f565b80356fffffffffffffffffffffffffffffffff81168114611dcc57600080fd5b803567ffffffffffffffff81168114611dcc57600080fd5b60006020828403121561231f57600080fd5b813561162781612850565b60006020828403121561233c57600080fd5b813561162781612868565b60006020828403121561235957600080fd5b815161162781612868565b60006020828403121561237657600080fd5b813567ffffffffffffffff8082111561238e57600080fd5b9083019061010082860312156123a357600080fd5b6123ab612736565b8235815260208301356020820152604083013560408201526123cf606084016122d5565b60608201526080830135828111156123e657600080fd5b6123f2878286016122b5565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b60006020828403121561243457600080fd5b5035919050565b60006020828403121561244d57600080fd5b5051919050565b60008060008060006080868803121561246c57600080fd5b612475866122f5565b9450602086013561248581612850565b9350604086013567ffffffffffffffff808211156124a257600080fd5b818801915088601f8301126124b657600080fd5b8135818111156124c557600080fd5b8960208285010111156124d757600080fd5b60208301955080945050505060608601356124f181612850565b809150509295509295909350565b60008060006060848603121561251457600080fd5b61251d846122f5565b9250602084013567ffffffffffffffff81111561253957600080fd5b8401601f8101861361254a57600080fd5b6125598682356020840161223f565b925050604084013561256a81612850565b809150509250925092565b6000815180845261258d8160208601602086016127b9565b601f01601f19169290920160200192915050565b600083516125b38184602088016127b9565b8351908301906125c78183602088016127b9565b01949350505050565b600086516125e2818460208b016127b9565b8651908301906125f6818360208b016127b9565b8651910190612609818360208a016127b9565b855191019061261c8183602089016127b9565b845191019061262f8183602088016127b9565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff831660208201526060604082015260006114836060830184612575565b60608101818360005b6003811015612695578151835260209283019290910190600101612676565b50505092915050565b60208101600283106126c057634e487b7160e01b600052602160045260246000fd5b91905290565b6020815260006116276020830184612575565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261271d60e0840182612575565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff8111828210171561275a5761275a61283a565b60405290565b6000821982111561277357612773612824565b500190565b60008261279557634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156127b4576127b4612824565b500290565b60005b838110156127d45781810151838201526020016127bc565b838111156127e3576000848401525b50505050565b600181811c908216806127fd57607f821691505b6020821081141561281e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461286557600080fd5b50565b801515811461286557600080fdfea2646970667358221220a5d186d92a2cf78d56cce46df8a6e3bbf4c1e1594551f794526bad1284e1e7a064736f6c63430008070033';

type MystikoV2TBridgeMainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2TBridgeMainConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2TBridgeMain__factory extends ContractFactory {
  constructor(...args: MystikoV2TBridgeMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2TBridgeMain';
  }

  deploy(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2TBridgeMain> {
    return super.deploy(_hasher3, overrides || {}) as Promise<MystikoV2TBridgeMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, overrides || {});
  }
  attach(address: string): MystikoV2TBridgeMain {
    return super.attach(address) as MystikoV2TBridgeMain;
  }
  connect(signer: Signer): MystikoV2TBridgeMain__factory {
    return super.connect(signer) as MystikoV2TBridgeMain__factory;
  }
  static readonly contractName: 'MystikoV2TBridgeMain';
  public readonly contractName: 'MystikoV2TBridgeMain';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2TBridgeMainInterface {
    return new utils.Interface(_abi) as MystikoV2TBridgeMainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2TBridgeMain {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2TBridgeMain;
  }
}
