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
      {
        internalType: 'address',
        name: '_daoCenter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_txFeeProxy',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'queryDepositFee',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'feePool',
            type: 'address',
          },
        ],
        internalType: 'struct QueryFeeResponse',
        name: '',
        type: 'tuple',
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
    inputs: [],
    name: 'txFeeProxy',
    outputs: [
      {
        internalType: 'contract IFeeQuery',
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
  '0x60806040525f80546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb17905534801562000036575f80fd5b5060405162002c6d38038062002c6d8339810160408190526200005991620000b2565b600180546001600160a01b03199081166001600160a01b03948516179091556002805482169484169490941790935560078054909316911617905562000103565b6001600160a01b0381168114620000af575f80fd5b50565b5f805f60608486031215620000c5575f80fd5b8351620000d2816200009a565b6020850151909350620000e5816200009a565b6040850151909250620000f8816200009a565b809150509250925092565b612b5c80620001115f395ff3fe60806040526004361061020f575f3560e01c8063825b5f8d11610117578063dd757c34116100ac578063ea0cde851161007c578063ed6ea33a11610062578063ed6ea33a14610604578063efbfb2ae1461061b578063f4ad17c61461062f575f80fd5b8063ea0cde85146105c7578063ec571c6a146105e6575f80fd5b8063dd757c3414610558578063ddac5dc11461056c578063e19abef814610589578063e8183c44146105a8575f80fd5b8063a49f78c4116100e7578063a49f78c4146104c6578063b1c39422146104e5578063cdfceeba14610504578063cfc7e2da14610544575f80fd5b8063825b5f8d1461045d5780639a03636c146104715780639c649fdf14610484578063a3bc64f2146104a7575f80fd5b80632421e155116101a75780634e3c10b7116101775780635898a0a81161015d5780635898a0a81461040b5780635e10b2b71461041f5780637d2c85201461043e575f80fd5b80634e3c10b7146103d8578063521ff057146103ec575f80fd5b80632421e155146103315780632cd26d451461037f57806330f49cac1461039e5780633fe3347a146103bd575f80fd5b806319e75d6e116101e257806319e75d6e146102ae5780631ba46cfd146102cd5780631f02d715146102f357806321e32d5514610312575f80fd5b806301dbf19f146102135780630ab62f1b146102295780630ba9590914610271578063153dc4501461028f575b5f80fd5b34801561021e575f80fd5b50610227610643565b005b348015610234575f80fd5b506102486102433660046123e7565b61072d565b60408051825181526020928301516001600160a01b031692810192909252015b60405180910390f35b34801561027c575f80fd5b506009545b604051908152602001610268565b34801561029a575f80fd5b506102276102a93660046123e7565b6107e0565b3480156102b9575f80fd5b506102276102c83660046123e7565b6108ae565b3480156102d8575f80fd5b505f5b6040516001600160a01b039091168152602001610268565b3480156102fe575f80fd5b506001546102db906001600160a01b031681565b34801561031d575f80fd5b506005546102db906001600160a01b031681565b34801561033c575f80fd5b5060408051808201909152600581527f63656c657200000000000000000000000000000000000000000000000000000060208201525b604051610268919061244b565b34801561038a575f80fd5b506006546102db906001600160a01b031681565b3480156103a9575f80fd5b506102276103b8366004612474565b610974565b3480156103c8575f80fd5b506001604051610268919061248f565b3480156103e3575f80fd5b50610372610a53565b3480156103f7575f80fd5b506102276104063660046123e7565b610adf565b348015610416575f80fd5b50600c54610281565b34801561042a575f80fd5b506102276104393660046123e7565b610bfb565b348015610449575f80fd5b5061022761045836600461257d565b610cc2565b348015610468575f80fd5b50600d54610281565b61022761047f36600461262b565b610dbf565b6104976104923660046126e4565b610fde565b6040519015158152602001610268565b3480156104b2575f80fd5b506102276104c1366004612474565b611065565b3480156104d1575f80fd5b506007546102db906001600160a01b031681565b3480156104f0575f80fd5b505f5461049790600160a01b900460ff1681565b34801561050f575f80fd5b5060035461052b90600160a01b900467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610268565b34801561054f575f80fd5b50600854610281565b348015610563575f80fd5b50610227611119565b348015610577575f80fd5b506003546001600160a01b03166102db565b348015610594575f80fd5b506102276105a3366004612474565b6111f7565b3480156105b3575f80fd5b506102276105c2366004612787565b6112ab565b3480156105d2575f80fd5b506102276105e13660046127b4565b6113a5565b3480156105f1575f80fd5b505f546102db906001600160a01b031681565b34801561060f575f80fd5b50600e5460ff16610497565b348015610626575f80fd5b50600a54610281565b34801561063a575f80fd5b50600b54610281565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561068a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106ae91906127cf565b6001600160a01b0316146106d55760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261072392900460ff161515815260200190565b60405180910390a1565b604080518082019091525f80825260208201525f60405180604001604052806107535f90565b6001600160a01b039081168252602091820186905260075460405163474aa58960e01b8152845183166004820152928401516024840152929350919091169063474aa589906044016040805180830381865afa1580156107b5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107d991906127ea565b9392505050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610827573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061084b91906127cf565b6001600160a01b0316146108725760405163177bc95160e11b815260040160405180910390fd5b600c8190556040518181527f14988234d3e50a12aeec2d6ee595b70c2fae163caff28baab5802b122bf2a753906020015b60405180910390a150565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156108f5573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061091991906127cf565b6001600160a01b0316146109405760405163177bc95160e11b815260040160405180910390fd5b600a8190556040518181527e91f5f5db3092e39ecb701218d4af20b7571e0429595937c334f3acd14fe2fe906020016108a3565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156109bb573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109df91906127cf565b6001600160a01b031614610a065760405163177bc95160e11b815260040160405180910390fd5b5f80546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b1906020016108a3565b60048054610a609061283e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8c9061283e565b8015610ad75780601f10610aae57610100808354040283529160200191610ad7565b820191905f5260205f20905b815481529060010190602001808311610aba57829003601f168201915b505050505081565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610b26573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b4a91906127cf565b6001600160a01b031614610b715760405163177bc95160e11b815260040160405180910390fd5b805f03610bc6576040516314e8955b60e21b815260206004820152601760248201527f70656572206d696e696d616c20726f6c6c75702066656500000000000000000060448201526064015b60405180910390fd5b600d8190556040518181527f878075a8e8aa1c7c15e6932752520f7812bf5744785e6df605373729da415545906020016108a3565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610c42573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c6691906127cf565b6001600160a01b031614610c8d5760405163177bc95160e11b815260040160405180910390fd5b600b8190556040518181527f88d210dfa198f7519579294721f90c771153a7b49101eefb95147037cc8ce481906020016108a3565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015610d09573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d2d91906127cf565b6001600160a01b031614610d545760405163177bc95160e11b815260040160405180910390fd5b600380547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff8616021790556004610d9a83826128c4565b50600580546001600160a01b0319166001600160a01b03929092169190911790555050565b600e5460ff1615610de357604051630e2f42c960e31b815260040160405180910390fd5b60085481511015610e075760405163617ab12d60e11b815260040160405180910390fd5b60095481511115610e2b57604051630625040160e01b815260040160405180910390fd5b600a548160a001511015610e525760405163c4d8d00d60e01b815260040160405180910390fd5b600c548160c001511015610e79576040516355a6d6a160e11b815260040160405180910390fd5b600d548160e001511015610ea05760405163784f02bd60e11b815260040160405180910390fd5b5f610eb78260400151835f01518460600151611478565b905080826020015114610edd576040516301bfaa2560e51b815260040160405180910390fd5b610ee63361158c565b15610f0457604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201525f610f4682611615565b9050610f568460a0015182611683565b5f610f63855f015161072d565b600354602082015160e088015160c08901518951949550610faa946001600160a01b0390941693610f949190612980565b610f9e9190612980565b845160a08a0151611705565b60208501516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe905f90a25050505050565b6006545f906001600160a01b0316331461100b57604051633dca01cf60e11b815260040160405180910390fd5b5f61104a85858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506118a692505050565b905061105886888584611965565b5060019695505050505050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156110ac573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d091906127cf565b6001600160a01b0316146110f75760405163177bc95160e11b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b0392909216919091179055565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa158015611160573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061118491906127cf565b6001600160a01b0316146111ab5760405163177bc95160e11b815260040160405180910390fd5b5f805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161072391600160a01b90910460ff161515815260200190565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa15801561123e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061126291906127cf565b6001600160a01b0316146112895760405163177bc95160e11b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156112f2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061131691906127cf565b6001600160a01b03161461133d5760405163177bc95160e11b815260040160405180910390fd5b8181111561135e57604051636003e82160e11b815260040160405180910390fd5b6009829055600881905560408051838152602081018390527f7633004c7a229869aeea10db4ff3e57e3b1534aeb2c9e72c5db25f965895c330910160405180910390a15050565b600154604080516361070aa960e01b8152905133926001600160a01b0316916361070aa99160048083019260209291908290030181865afa1580156113ec573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061141091906127cf565b6001600160a01b0316146114375760405163177bc95160e11b815260040160405180910390fd5b600e805460ff19168215159081179091556040519081527fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e09906020016108a3565b5f7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106114ba5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff16106114ec57604051633bbde0bf60e21b815260040160405180910390fd5b60025460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916115449160040161299f565b602060405180830381865afa15801561155f573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061158391906129cf565b95945050505050565b5f8054600160a01b900460ff166115a457505f919050565b5f5460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d90602401602060405180830381865afa1580156115eb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061160f91906129e6565b92915050565b606080611624835f0151611a4f565b6116318460200151611a4f565b61163e8560400151611a4f565b61164b8660600151611a4f565b6116588760800151611ae5565b60405160200161166c959493929190612a01565b60408051601f198184030181529190529392505050565b600654600554600354604051634f9e72ad60e11b81526001600160a01b0393841693639f3ce55a9387936116d393919092169167ffffffffffffffff600160a01b90910416908790600401612a6b565b5f604051808303818588803b1580156116ea575f80fd5b505af11580156116fc573d5f803e3d5ffd5b50505050505050565b806117108385612980565b61171a9190612980565b34146117685760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e7420746f6b656e00000000000000000000000000006044820152606401610bbd565b5f856001600160a01b0316846040515f6040518083038185875af1925050503d805f81146117b1576040519150601f19603f3d011682016040523d82523d5f602084013e6117b6565b606091505b50509050806118075760405162461bcd60e51b815260206004820152601660248201527f616d6f756e74207472616e73666572206661696c6564000000000000000000006044820152606401610bbd565b5f856001600160a01b0316846040515f6040518083038185875af1925050503d805f8114611850576040519150601f19603f3d011682016040523d82523d5f602084013e611855565b606091505b50509050806116fc5760405162461bcd60e51b815260206004820152601660248201527f747820666565207472616e73666572206661696c6564000000000000000000006044820152606401610bbd565b6118d46040518060a001604052805f81526020015f81526020015f81526020015f8152602001606081525090565b6119026040518060a001604052805f81526020015f81526020015f81526020015f8152602001606081525090565b5f61190d8482611b1c565b908352905061191c8482611b1c565b602084019190915290506119308482611b1c565b604084019190915290506119448482611b1c565b606084019190915290506119588482611c4a565b5060808301525092915050565b6005546001600160a01b0384811691161461199357604051631440e07960e11b815260040160405180910390fd5b60035467ffffffffffffffff858116600160a01b90920416146119c957604051633876304f60e21b815260040160405180910390fd5b80515f036119ea5760405163820bf1e560e01b815260040160405180910390fd5b6003546040516378d60cd760e01b81526001600160a01b03909116906378d60cd790611a1c9084908690600401612a9c565b5f604051808303815f87803b158015611a33575f80fd5b505af1158015611a45573d5f803e3d5ffd5b5050505050505050565b60606001600160ff1b03821115611aa85760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401610bbd565b60405160208082525f601f5b82821015611ad55785811a82602086010153600191909101905f1901611ab4565b5050506040818101905292915050565b8051606090611af381611d56565b83604051602001611b05929190612af8565b604051602081830303815290604052915050919050565b5f808351836020611b2d9190612980565b11158015611b445750611b41836020612980565b83105b611b9c5760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401610bbd565b5f60405160205f600182038760208a0101515b83831015611bcf5780821a83860153600183019250600182039150611baf565b50505081016040525190506001600160ff1b03811115611c315760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401610bbd565b80611c3d856020612980565b92509250505b9250929050565b60605f80611c588585611e23565b8651909550909150611c6a8286612980565b11158015611c805750611c7d8185612980565b84105b611cd85760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401610bbd565b606081158015611cf357604051915060208201604052611d3d565b6040519150601f8316801560200281840101848101888315602002848c0101015b81831015611d2c578051835260209283019201611d14565b5050848452601f01601f1916604052505b5080611d498387612980565b9350935050509250929050565b606060fd8267ffffffffffffffff161015611d8957604080516001815260f884901b60208201526021810190915261160f565b61ffff8267ffffffffffffffff1611611dd957611da960fd60f81b612024565b611db28361204b565b604051602001611dc3929190612af8565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611e0457611dfb607f60f91b612024565b611db28361208c565b611e156001600160f81b0319612024565b611db2836120cd565b919050565b5f805f611e30858561210e565b945090505f6001600160f81b0319821660fd60f81b03611ec757611e548686612195565b955061ffff16905060fd8110801590611e6f575061ffff8111155b611ebb5760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401610bbd565b9250839150611c439050565b6001600160f81b03198216607f60f91b03611f5157611ee6868661224b565b955063ffffffff16905061ffff81118015611f05575063ffffffff8111155b611ebb5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610bbd565b6001600160f81b03198083169003611fce57611f6d8686612319565b955067ffffffffffffffff16905063ffffffff8111611ebb5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610bbd565b5060f881901c60fd8110611ebb5760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610bbd565b60408051600181526001600160f81b0319831660208201526021810190915260609061160f565b6040516002808252606091905f601f5b8282101561207c5785811a82602086010153600191909101905f190161205b565b5050506022810160405292915050565b6040516004808252606091905f601f5b828210156120bd5785811a82602086010153600191909101905f190161209c565b5050506024810160405292915050565b6040516008808252606091905f601f5b828210156120fe5785811a82602086010153600191909101905f19016120dd565b5050506028810160405292915050565b5f80835183600161211f9190612980565b111580156121365750612133836001612980565b83105b6121825760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401610bbd565b8383016020015180611c3d856001612980565b5f8083518360026121a69190612980565b111580156121bd57506121ba836002612980565b83105b6122145760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610bbd565b5f604051846020870101518060011a8253805f1a60018301535060028101604052601e81035191505080846002611c3d9190612980565b5f80835183600461225c9190612980565b111580156122735750612270836004612980565b83105b6122ca5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610bbd565b5f60405160045f600182038760208a0101515b838310156122fd5780821a838601536001830192506001820391506122dd565b505050016040819052601f190151905080611c3d856004612980565b5f80835183600861232a9190612980565b11158015612341575061233e836008612980565b83105b6123985760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610bbd565b5f60405160085f600182038760208a0101515b838310156123cb5780821a838601536001830192506001820391506123ab565b505050016040819052601f190151905080611c3d856008612980565b5f602082840312156123f7575f80fd5b5035919050565b5f5b83811015612418578181015183820152602001612400565b50505f910152565b5f81518084526124378160208601602086016123fe565b601f01601f19169290920160200192915050565b602081525f6107d96020830184612420565b6001600160a01b0381168114612471575f80fd5b50565b5f60208284031215612484575f80fd5b81356107d98161245d565b60208101600283106124af57634e487b7160e01b5f52602160045260245ffd5b91905290565b803567ffffffffffffffff81168114611e1e575f80fd5b634e487b7160e01b5f52604160045260245ffd5b604051610100810167ffffffffffffffff81118282101715612504576125046124cc565b60405290565b5f67ffffffffffffffff80841115612524576125246124cc565b604051601f8501601f19908116603f0116810190828211818310171561254c5761254c6124cc565b81604052809350858152868686011115612564575f80fd5b858560208301375f602087830101525050509392505050565b5f805f6060848603121561258f575f80fd5b612598846124b5565b9250602084013567ffffffffffffffff8111156125b3575f80fd5b8401601f810186136125c3575f80fd5b6125d28682356020840161250a565b92505060408401356125e38161245d565b809150509250925092565b80356fffffffffffffffffffffffffffffffff81168114611e1e575f80fd5b5f82601f83011261261c575f80fd5b6107d98383356020850161250a565b5f6020828403121561263b575f80fd5b813567ffffffffffffffff80821115612652575f80fd5b908301906101008286031215612666575f80fd5b61266e6124e0565b823581526020830135602082015260408301356040820152612692606084016125ee565b60608201526080830135828111156126a8575f80fd5b6126b48782860161260d565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b5f805f805f608086880312156126f8575f80fd5b85356127038161245d565b9450612711602087016124b5565b9350604086013567ffffffffffffffff8082111561272d575f80fd5b818801915088601f830112612740575f80fd5b81358181111561274e575f80fd5b89602082850101111561275f575f80fd5b60208301955080945050505060608601356127798161245d565b809150509295509295909350565b5f8060408385031215612798575f80fd5b50508035926020909101359150565b8015158114612471575f80fd5b5f602082840312156127c4575f80fd5b81356107d9816127a7565b5f602082840312156127df575f80fd5b81516107d98161245d565b5f604082840312156127fa575f80fd5b6040516040810181811067ffffffffffffffff8211171561281d5761281d6124cc565b6040528251815260208301516128328161245d565b60208201529392505050565b600181811c9082168061285257607f821691505b60208210810361287057634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156128bf575f81815260208120601f850160051c8101602086101561289c5750805b601f850160051c820191505b818110156128bb578281556001016128a8565b5050505b505050565b815167ffffffffffffffff8111156128de576128de6124cc565b6128f2816128ec845461283e565b84612876565b602080601f831160018114612925575f841561290e5750858301515b5f19600386901b1c1916600185901b1785556128bb565b5f85815260208120601f198616915b8281101561295357888601518255948401946001909101908401612934565b508582101561297057878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111561160f57634e487b7160e01b5f52601160045260245ffd5b6060810181835f5b60038110156129c65781518352602092830192909101906001016129a7565b50505092915050565b5f602082840312156129df575f80fd5b5051919050565b5f602082840312156129f6575f80fd5b81516107d9816127a7565b5f8651612a12818460208b016123fe565b865190830190612a26818360208b016123fe565b8651910190612a39818360208a016123fe565b8551910190612a4c8183602089016123fe565b8451910190612a5f8183602088016123fe565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff83166020820152606060408201525f6115836060830184612420565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201525f608084015160a060c0840152612adf60e0840182612420565b9150506001600160a01b03831660208301529392505050565b5f8351612b098184602088016123fe565b835190830190612b1d8183602088016123fe565b0194935050505056fea2646970667358221220bc2061257f0dc36cebecf9ff087a635820689977a06efcd1a51a9519cb9b66f264736f6c63430008140033';

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
    _daoCenter: string,
    _txFeeProxy: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MystikoV2CelerMain> {
    return super.deploy(_hasher3, _daoCenter, _txFeeProxy, overrides || {}) as Promise<MystikoV2CelerMain>;
  }
  getDeployTransaction(
    _hasher3: string,
    _daoCenter: string,
    _txFeeProxy: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _daoCenter, _txFeeProxy, overrides || {});
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
