/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MystikoV2CelerERC20, MystikoV2CelerERC20Interface } from '../MystikoV2CelerERC20';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IHasher3',
        name: '_hasher3',
        type: 'address',
      },
      {
        internalType: 'contract IERC20Metadata',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_daoCenter',
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
    name: 'OnlyMystikoDAO',
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
    name: 'assetAddress',
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
    name: 'assetDecimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assetName',
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
    name: 'assetSymbol',
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
    inputs: [],
    name: 'center',
    outputs: [
      {
        internalType: 'contract IMystikoGovernorCenter',
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
  '0x60806040525f80546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb17905534801562000036575f80fd5b5060405162002f4a38038062002f4a8339810160408190526200005991620000c7565b600180546001600160a01b039283166001600160a01b031991821617909155600280549483169490911693909317909255600d80549290911661010002610100600160a81b031990921691909117905562000118565b6001600160a01b0381168114620000c4575f80fd5b50565b5f805f60608486031215620000da575f80fd5b8351620000e781620000af565b6020850151909350620000fa81620000af565b60408501519092506200010d81620000af565b809150509250925092565b612e2480620001265f395ff3fe608060405260043610610229575f3560e01c8063825b5f8d11610131578063dd757c34116100ac578063ea0cde851161007c578063ed6ea33a11610062578063ed6ea33a1461061d578063efbfb2ae14610634578063f4ad17c614610648575f80fd5b8063ea0cde85146105e0578063ec571c6a146105ff575f80fd5b8063dd757c3414610571578063ddac5dc114610585578063e19abef8146105a2578063e8183c44146105c1575f80fd5b8063b1c3942211610101578063c9230c5d116100e7578063c9230c5d14610509578063cdfceeba1461051d578063cfc7e2da1461055d575f80fd5b8063b1c39422146104c4578063c2d41601146104e3575f80fd5b8063825b5f8d1461045b5780639a03636c1461046f5780639c649fdf14610482578063a3bc64f2146104a5575f80fd5b80632421e155116101c15780634e3c10b7116101915780635898a0a8116101775780635898a0a8146104095780635e10b2b71461041d5780637d2c85201461043c575f80fd5b80634e3c10b7146103d6578063521ff057146103ea575f80fd5b80632421e155146103395780632cd26d451461037e57806330f49cac1461039d5780633fe3347a146103bc575f80fd5b806319e75d6e116101fc57806319e75d6e146102a65780631ba46cfd146102c55780631f02d715146102fb57806321e32d551461031a575f80fd5b806301dbf19f1461022d5780630ba9590914610243578063153dc45014610266578063176de7a814610285575b5f80fd5b348015610238575f80fd5b5061024161065c565b005b34801561024e575f80fd5b506008545b6040519081526020015b60405180910390f35b348015610271575f80fd5b50610241610280366004612637565b610746565b348015610290575f80fd5b50610299610814565b60405161025d919061269b565b3480156102b1575f80fd5b506102416102c0366004612637565b610892565b3480156102d0575f80fd5b50600d5461010090046001600160a01b03165b6040516001600160a01b03909116815260200161025d565b348015610306575f80fd5b506001546102e3906001600160a01b031681565b348015610325575f80fd5b506005546102e3906001600160a01b031681565b348015610344575f80fd5b5060408051808201909152600581527f63656c65720000000000000000000000000000000000000000000000000000006020820152610299565b348015610389575f80fd5b506006546102e3906001600160a01b031681565b3480156103a8575f80fd5b506102416103b73660046126c4565b610958565b3480156103c7575f80fd5b505f60405161025d91906126df565b3480156103e1575f80fd5b50610299610a37565b3480156103f5575f80fd5b50610241610404366004612637565b610ac3565b348015610414575f80fd5b50600b54610253565b348015610428575f80fd5b50610241610437366004612637565b610bdf565b348015610447575f80fd5b506102416104563660046127ed565b610ca6565b348015610466575f80fd5b50600c54610253565b61024161047d36600461289b565b610da3565b610495610490366004612954565b610fa8565b604051901515815260200161025d565b3480156104b0575f80fd5b506102416104bf3660046126c4565b61102f565b3480156104cf575f80fd5b505f5461049590600160a01b900460ff1681565b3480156104ee575f80fd5b506104f76110e3565b60405160ff909116815260200161025d565b348015610514575f80fd5b50610299611159565b348015610528575f80fd5b5060035461054490600160a01b900467ffffffffffffffff1681565b60405167ffffffffffffffff909116815260200161025d565b348015610568575f80fd5b50600754610253565b34801561057c575f80fd5b506102416111ab565b348015610590575f80fd5b506003546001600160a01b03166102e3565b3480156105ad575f80fd5b506102416105bc3660046126c4565b611289565b3480156105cc575f80fd5b506102416105db3660046129f7565b61133d565b3480156105eb575f80fd5b506102416105fa366004612a24565b611437565b34801561060a575f80fd5b505f546102e3906001600160a01b031681565b348015610628575f80fd5b50600d5460ff16610495565b34801561063f575f80fd5b50600954610253565b348015610653575f80fd5b50600a54610253565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156106a3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106c79190612a3f565b6001600160a01b0316146106ee5760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261073c92900460ff161515815260200190565b60405180910390a1565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561078d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107b19190612a3f565b6001600160a01b0316146107d85760405163177bc95160e11b815260040160405180910390fd5b600b8190556040518181527f14988234d3e50a12aeec2d6ee595b70c2fae163caff28baab5802b122bf2a753906020015b60405180910390a150565b6060600d60019054906101000a90046001600160a01b03166001600160a01b03166395d89b416040518163ffffffff1660e01b81526004015f60405180830381865afa158015610866573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261088d9190810190612a5a565b905090565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156108d9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108fd9190612a3f565b6001600160a01b0316146109245760405163177bc95160e11b815260040160405180910390fd5b60098190556040518181527e91f5f5db3092e39ecb701218d4af20b7571e0429595937c334f3acd14fe2fe90602001610809565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561099f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109c39190612a3f565b6001600160a01b0316146109ea5760405163177bc95160e11b815260040160405180910390fd5b5f80546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b190602001610809565b60048054610a4490612acc565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7090612acc565b8015610abb5780601f10610a9257610100808354040283529160200191610abb565b820191905f5260205f20905b815481529060010190602001808311610a9e57829003601f168201915b505050505081565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610b0a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b2e9190612a3f565b6001600160a01b031614610b555760405163177bc95160e11b815260040160405180910390fd5b805f03610baa576040516314e8955b60e21b815260206004820152601760248201527f70656572206d696e696d616c20726f6c6c75702066656500000000000000000060448201526064015b60405180910390fd5b600c8190556040518181527f878075a8e8aa1c7c15e6932752520f7812bf5744785e6df605373729da41554590602001610809565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610c26573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c4a9190612a3f565b6001600160a01b031614610c715760405163177bc95160e11b815260040160405180910390fd5b600a8190556040518181527f88d210dfa198f7519579294721f90c771153a7b49101eefb95147037cc8ce48190602001610809565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610ced573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d119190612a3f565b6001600160a01b031614610d385760405163177bc95160e11b815260040160405180910390fd5b600380547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff8616021790556004610d7e8382612b51565b50600580546001600160a01b0319166001600160a01b03929092169190911790555050565b600d5460ff1615610dc757604051630e2f42c960e31b815260040160405180910390fd5b60075481511015610deb5760405163617ab12d60e11b815260040160405180910390fd5b60085481511115610e0f57604051630625040160e01b815260040160405180910390fd5b6009548160a001511015610e365760405163c4d8d00d60e01b815260040160405180910390fd5b600b548160c001511015610e5d576040516355a6d6a160e11b815260040160405180910390fd5b600c548160e001511015610e845760405163784f02bd60e11b815260040160405180910390fd5b5f610e9b8260400151835f0151846060015161150a565b905080826020015114610ec1576040516301bfaa2560e51b815260040160405180910390fd5b610eca33611620565b15610ee857604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201525f610f2a826116a9565b9050610f3a8460a0015182611717565b60035460e085015160c08601518651610f75936001600160a01b03169291610f6191612c0d565b610f6b9190612c0d565b8660a00151611799565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe905f90a250505050565b6006545f906001600160a01b03163314610fd557604051633dca01cf60e11b815260040160405180910390fd5b5f61101485858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061180a92505050565b9050611022868885846118c9565b5060019695505050505050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015611076573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061109a9190612a3f565b6001600160a01b0316146110c15760405163177bc95160e11b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b0392909216919091179055565b5f600d60019054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611135573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061088d9190612c2c565b6060600d60019054906101000a90046001600160a01b03166001600160a01b03166306fdde036040518163ffffffff1660e01b81526004015f60405180830381865afa158015610866573d5f803e3d5ffd5b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156111f2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112169190612a3f565b6001600160a01b03161461123d5760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161073c91600160a01b90910460ff161515815260200190565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156112d0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112f49190612a3f565b6001600160a01b03161461131b5760405163177bc95160e11b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015611384573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113a89190612a3f565b6001600160a01b0316146113cf5760405163177bc95160e11b815260040160405180910390fd5b818111156113f057604051636003e82160e11b815260040160405180910390fd5b6008829055600781905560408051838152602081018390527f7633004c7a229869aeea10db4ff3e57e3b1534aeb2c9e72c5db25f965895c330910160405180910390a15050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561147e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114a29190612a3f565b6001600160a01b0316146114c95760405163177bc95160e11b815260040160405180910390fd5b600d805460ff19168215159081179091556040519081527fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e0990602001610809565b5f7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180851061154c5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061157e57604051633bbde0bf60e21b815260040160405180910390fd5b60025460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916115d691600401612c4c565b602060405180830381865afa1580156115f1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116159190612c7c565b9150505b9392505050565b5f8054600160a01b900460ff1661163857505f919050565b5f5460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d90602401602060405180830381865afa15801561167f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116a39190612c93565b92915050565b6060806116b8835f01516119b3565b6116c584602001516119b3565b6116d285604001516119b3565b6116df86606001516119b3565b6116ec8760800151611a49565b604051602001611700959493929190612cae565b60408051601f198184030181529190529392505050565b600654600554600354604051634f9e72ad60e11b81526001600160a01b0393841693639f3ce55a93879361176793919092169167ffffffffffffffff600160a01b90910416908790600401612d18565b5f604051808303818588803b15801561177e575f80fd5b505af1158015611790573d5f803e3d5ffd5b50505050505050565b8034146117e85760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d61746368000000000000000000000000006044820152606401610ba1565b600d546118059061010090046001600160a01b0316338585611a80565b505050565b6118386040518060a001604052805f81526020015f81526020015f81526020015f8152602001606081525090565b6118666040518060a001604052805f81526020015f81526020015f81526020015f8152602001606081525090565b5f6118718482611af5565b90835290506118808482611af5565b602084019190915290506118948482611af5565b604084019190915290506118a88482611af5565b606084019190915290506118bc8482611c23565b5060808301525092915050565b6005546001600160a01b038481169116146118f757604051631440e07960e11b815260040160405180910390fd5b60035467ffffffffffffffff858116600160a01b909204161461192d57604051633876304f60e21b815260040160405180910390fd5b80515f0361194e5760405163820bf1e560e01b815260040160405180910390fd5b6003546040516378d60cd760e01b81526001600160a01b03909116906378d60cd7906119809084908690600401612d49565b5f604051808303815f87803b158015611997575f80fd5b505af11580156119a9573d5f803e3d5ffd5b5050505050505050565b60606001600160ff1b03821115611a0c5760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401610ba1565b60405160208082525f601f5b82821015611a395785811a82602086010153600191909101905f1901611a18565b5050506040818101905292915050565b8051606090611a5781611d2f565b83604051602001611a69929190612da5565b604051602081830303815290604052915050919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052611aef908590611dfc565b50505050565b5f808351836020611b069190612c0d565b11158015611b1d5750611b1a836020612c0d565b83105b611b755760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401610ba1565b5f60405160205f600182038760208a0101515b83831015611ba85780821a83860153600183019250600182039150611b88565b50505081016040525190506001600160ff1b03811115611c0a5760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401610ba1565b80611c16856020612c0d565b92509250505b9250929050565b60605f80611c318585611ee0565b8651909550909150611c438286612c0d565b11158015611c595750611c568185612c0d565b84105b611cb15760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401610ba1565b606081158015611ccc57604051915060208201604052611d16565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611d05578051835260209283019201611ced565b5050848452601f01601f1916604052505b5080611d228387612c0d565b9350935050509250929050565b606060fd8267ffffffffffffffff161015611d6257604080516001815260f884901b6020820152602181019091526116a3565b61ffff8267ffffffffffffffff1611611db257611d8260fd60f81b6120e1565b611d8b83612108565b604051602001611d9c929190612da5565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611ddd57611dd4607f60f91b6120e1565b611d8b83612149565b611dee6001600160f81b03196120e1565b611d8b8361218a565b919050565b5f611e50826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121cb9092919063ffffffff16565b8051909150156118055780806020019051810190611e6e9190612c93565b6118055760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ba1565b5f805f611eed85856121e1565b945090505f6001600160f81b0319821660fd60f81b03611f8457611f118686612268565b955061ffff16905060fd8110801590611f2c575061ffff8111155b611f785760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401610ba1565b9250839150611c1c9050565b6001600160f81b03198216607f60f91b0361200e57611fa3868661231e565b955063ffffffff16905061ffff81118015611fc2575063ffffffff8111155b611f785760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610ba1565b6001600160f81b0319808316900361208b5761202a86866123ec565b955067ffffffffffffffff16905063ffffffff8111611f785760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610ba1565b5060f881901c60fd8110611f785760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610ba1565b60408051600181526001600160f81b031983166020820152602181019091526060906116a3565b6040516002808252606091905f601f5b828210156121395785811a82602086010153600191909101905f1901612118565b5050506022810160405292915050565b6040516004808252606091905f601f5b8282101561217a5785811a82602086010153600191909101905f1901612159565b5050506024810160405292915050565b6040516008808252606091905f601f5b828210156121bb5785811a82602086010153600191909101905f190161219a565b5050506028810160405292915050565b60606121d984845f856124ba565b949350505050565b5f8083518360016121f29190612c0d565b111580156122095750612206836001612c0d565b83105b6122555760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401610ba1565b8383016020015180611c16856001612c0d565b5f8083518360026122799190612c0d565b11158015612290575061228d836002612c0d565b83105b6122e75760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610ba1565b5f604051846020870101518060011a8253805f1a60018301535060028101604052601e81035191505080846002611c169190612c0d565b5f80835183600461232f9190612c0d565b111580156123465750612343836004612c0d565b83105b61239d5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610ba1565b5f60405160045f600182038760208a0101515b838310156123d05780821a838601536001830192506001820391506123b0565b505050016040819052601f190151905080611c16856004612c0d565b5f8083518360086123fd9190612c0d565b111580156124145750612411836008612c0d565b83105b61246b5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610ba1565b5f60405160085f600182038760208a0101515b8383101561249e5780821a8386015360018301925060018203915061247e565b505050016040819052601f190151905080611c16856008612c0d565b6060824710156125325760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ba1565b6001600160a01b0385163b6125895760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ba1565b5f80866001600160a01b031685876040516125a49190612dd3565b5f6040518083038185875af1925050503d805f81146125de576040519150601f19603f3d011682016040523d82523d5f602084013e6125e3565b606091505b50915091506125f38282866125fe565b979650505050505050565b6060831561260d575081611619565b82511561261d5782518084602001fd5b8160405162461bcd60e51b8152600401610ba1919061269b565b5f60208284031215612647575f80fd5b5035919050565b5f5b83811015612668578181015183820152602001612650565b50505f910152565b5f815180845261268781602086016020860161264e565b601f01601f19169290920160200192915050565b602081525f6116196020830184612670565b6001600160a01b03811681146126c1575f80fd5b50565b5f602082840312156126d4575f80fd5b8135611619816126ad565b60208101600283106126ff57634e487b7160e01b5f52602160045260245ffd5b91905290565b803567ffffffffffffffff81168114611df7575f80fd5b634e487b7160e01b5f52604160045260245ffd5b604051610100810167ffffffffffffffff811182821017156127545761275461271c565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156127835761278361271c565b604052919050565b5f67ffffffffffffffff8211156127a4576127a461271c565b50601f01601f191660200190565b5f6127c46127bf8461278b565b61275a565b90508281528383830111156127d7575f80fd5b828260208301375f602084830101529392505050565b5f805f606084860312156127ff575f80fd5b61280884612705565b9250602084013567ffffffffffffffff811115612823575f80fd5b8401601f81018613612833575f80fd5b612842868235602084016127b2565b9250506040840135612853816126ad565b809150509250925092565b80356fffffffffffffffffffffffffffffffff81168114611df7575f80fd5b5f82601f83011261288c575f80fd5b611619838335602085016127b2565b5f602082840312156128ab575f80fd5b813567ffffffffffffffff808211156128c2575f80fd5b9083019061010082860312156128d6575f80fd5b6128de612730565b8235815260208301356020820152604083013560408201526129026060840161285e565b6060820152608083013582811115612918575f80fd5b6129248782860161287d565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b5f805f805f60808688031215612968575f80fd5b8535612973816126ad565b945061298160208701612705565b9350604086013567ffffffffffffffff8082111561299d575f80fd5b818801915088601f8301126129b0575f80fd5b8135818111156129be575f80fd5b8960208285010111156129cf575f80fd5b60208301955080945050505060608601356129e9816126ad565b809150509295509295909350565b5f8060408385031215612a08575f80fd5b50508035926020909101359150565b80151581146126c1575f80fd5b5f60208284031215612a34575f80fd5b813561161981612a17565b5f60208284031215612a4f575f80fd5b8151611619816126ad565b5f60208284031215612a6a575f80fd5b815167ffffffffffffffff811115612a80575f80fd5b8201601f81018413612a90575f80fd5b8051612a9e6127bf8261278b565b818152856020838501011115612ab2575f80fd5b612ac382602083016020860161264e565b95945050505050565b600181811c90821680612ae057607f821691505b602082108103612afe57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115611805575f81815260208120601f850160051c81016020861015612b2a5750805b601f850160051c820191505b81811015612b4957828155600101612b36565b505050505050565b815167ffffffffffffffff811115612b6b57612b6b61271c565b612b7f81612b798454612acc565b84612b04565b602080601f831160018114612bb2575f8415612b9b5750858301515b5f19600386901b1c1916600185901b178555612b49565b5f85815260208120601f198616915b82811015612be057888601518255948401946001909101908401612bc1565b5085821015612bfd57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156116a357634e487b7160e01b5f52601160045260245ffd5b5f60208284031215612c3c575f80fd5b815160ff81168114611619575f80fd5b6060810181835f5b6003811015612c73578151835260209283019290910190600101612c54565b50505092915050565b5f60208284031215612c8c575f80fd5b5051919050565b5f60208284031215612ca3575f80fd5b815161161981612a17565b5f8651612cbf818460208b0161264e565b865190830190612cd3818360208b0161264e565b8651910190612ce6818360208a0161264e565b8551910190612cf981836020890161264e565b8451910190612d0c81836020880161264e565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff83166020820152606060408201525f612ac36060830184612670565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201525f608084015160a060c0840152612d8c60e0840182612670565b9150506001600160a01b03831660208301529392505050565b5f8351612db681846020880161264e565b835190830190612dca81836020880161264e565b01949350505050565b5f8251612de481846020870161264e565b919091019291505056fea2646970667358221220affc5b78a022a0a2ba377962be946a4407bed700a4462df26e3508775e61d4f964736f6c63430008140033';

type MystikoV2CelerERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2CelerERC20ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2CelerERC20__factory extends ContractFactory {
  constructor(...args: MystikoV2CelerERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MystikoV2CelerERC20';
  }

  deploy(
    _hasher3: string,
    _token: string,
    _daoCenter: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2CelerERC20> {
    return super.deploy(_hasher3, _token, _daoCenter, overrides || {}) as Promise<MystikoV2CelerERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    _daoCenter: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _token, _daoCenter, overrides || {});
  }
  attach(address: string): MystikoV2CelerERC20 {
    return super.attach(address) as MystikoV2CelerERC20;
  }
  connect(signer: Signer): MystikoV2CelerERC20__factory {
    return super.connect(signer) as MystikoV2CelerERC20__factory;
  }
  static readonly contractName: 'MystikoV2CelerERC20';
  public readonly contractName: 'MystikoV2CelerERC20';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2CelerERC20Interface {
    return new utils.Interface(_abi) as MystikoV2CelerERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MystikoV2CelerERC20 {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2CelerERC20;
  }
}
