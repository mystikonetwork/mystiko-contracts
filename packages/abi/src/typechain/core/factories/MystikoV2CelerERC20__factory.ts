/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MystikoV2CelerERC20,
  MystikoV2CelerERC20Interface,
} from "../MystikoV2CelerERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IHasher3",
        name: "_hasher3",
        type: "address",
      },
      {
        internalType: "contract IERC20Metadata",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AmountLessThanZero",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountTooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "BridgeFeeTooFew",
    type: "error",
  },
  {
    inputs: [],
    name: "CommitmentHashIncorrect",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositsDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "ExecutorFeeTooFew",
    type: "error",
  },
  {
    inputs: [],
    name: "FromChainIdNotMatched",
    type: "error",
  },
  {
    inputs: [],
    name: "FromProxyAddressNotMatched",
    type: "error",
  },
  {
    inputs: [],
    name: "HashKGreaterThanFieldSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "param",
        type: "string",
      },
    ],
    name: "Invalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxAmountLessThanMinAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "MinAmountGreaterThanMaxAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NotChanged",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOperator",
    type: "error",
  },
  {
    inputs: [],
    name: "RandomSGreaterThanFieldSize",
    type: "error",
  },
  {
    inputs: [],
    name: "RollupFeeToFew",
    type: "error",
  },
  {
    inputs: [],
    name: "SanctionedAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderIsNotBridgeProxy",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "commitment",
        type: "uint256",
      },
    ],
    name: "CommitmentCrossChain",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "DepositsDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
    ],
    name: "MaxAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "MinAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minBridgeFee",
        type: "uint256",
      },
    ],
    name: "MinBridgeFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minExecutorFee",
        type: "uint256",
      },
    ],
    name: "MinExecutorFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "peerMinExecutorFee",
        type: "uint256",
      },
    ],
    name: "PeerMinExecutorFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "peerMinRollupFee",
        type: "uint256",
      },
    ],
    name: "PeerMinRollupFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "SanctionsCheck",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ISanctionsList",
        name: "sanctions",
        type: "address",
      },
    ],
    name: "SanctionsList",
    type: "event",
  },
  {
    inputs: [],
    name: "assetDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetSymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetType",
    outputs: [
      {
        internalType: "enum AssetPool.AssetType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "bridgeProxyAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridgeType",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOperator",
        type: "address",
      },
    ],
    name: "changeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commitment",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hashK",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "randomS",
            type: "uint128",
          },
          {
            internalType: "bytes",
            name: "encryptedNote",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "bridgeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executorFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rollupFee",
            type: "uint256",
          },
        ],
        internalType: "struct IMystikoBridge.DepositRequest",
        name: "_request",
        type: "tuple",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "disableSanctionsCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enableSanctionsCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessage",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAssociatedCommitmentPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinBridgeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinExecutorFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPeerMinExecutorFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPeerMinRollupFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isDepositsDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "peerChainId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "peerChainName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "peerContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sanctionsCheck",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sanctionsList",
    outputs: [
      {
        internalType: "contract ISanctionsList",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_commitmentPoolAddress",
        type: "address",
      },
    ],
    name: "setAssociatedCommitmentPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeProxyAddress",
        type: "address",
      },
    ],
    name: "setBridgeProxyAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setDepositsDisabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
    ],
    name: "setMaxAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256",
      },
    ],
    name: "setMinAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minBridgeFee",
        type: "uint256",
      },
    ],
    name: "setMinBridgeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minExecutorFee",
        type: "uint256",
      },
    ],
    name: "setMinExecutorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_peerChainId",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "_peerChainName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_peerContract",
        type: "address",
      },
    ],
    name: "setPeerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_peerMinExecutorFee",
        type: "uint256",
      },
    ],
    name: "setPeerMinExecutorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_peerMinRollupFee",
        type: "uint256",
      },
    ],
    name: "setPeerMinRollupFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISanctionsList",
        name: "_sanction",
        type: "address",
      },
    ],
    name: "updateSanctionsListAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080546001600160a81b031916740140c57923924b5c5c5455c48d93317139addac8fb1790553480156200003857600080fd5b5060405162002bba38038062002bba8339810160408190526200005b9162000098565b600c8054336001600160a01b0319918216179091556001805482166001600160a01b03948516179055600d805490911691909216179055620000f0565b60008060408385031215620000ac57600080fd5b8251620000b981620000d7565b6020840151909250620000cc81620000d7565b809150509250929050565b6001600160a01b0381168114620000ed57600080fd5b50565b612aba80620001006000396000f3fe6080604052600436106102345760003560e01c8063825b5f8d11610138578063cfc7e2da116100b0578063ea0cde851161007f578063ed6ea33a11610064578063ed6ea33a1461064b578063efbfb2ae1461066a578063f4ad17c61461067f57600080fd5b8063ea0cde851461060b578063ec571c6a1461062b57600080fd5b8063cfc7e2da146105a3578063dd757c34146105b8578063ddac5dc1146105cd578063e19abef8146105eb57600080fd5b8063a3bc64f211610107578063c2d41601116100ec578063c2d4160114610526578063c9230c5d1461054d578063cdfceeba1461056257600080fd5b8063a3bc64f2146104e5578063b1c394221461050557600080fd5b8063825b5f8d1461047a578063897b06371461048f5780639a03636c146104af5780639c649fdf146104c257600080fd5b80632cd26d45116101cb5780634fe47f701161019a5780635898a0a81161017f5780635898a0a8146104255780635e10b2b71461043a5780637d2c85201461045a57600080fd5b80634fe47f70146103e5578063521ff0571461040557600080fd5b80632cd26d451461037457806330f49cac146103945780633fe3347a146103b45780634e3c10b7146103d057600080fd5b8063176de7a811610207578063176de7a8146102b457806319e75d6e146102d657806321e32d55146102f65780632421e1551461032e57600080fd5b806301dbf19f1461023957806306394c9b146102505780630ba9590914610270578063153dc45014610294575b600080fd5b34801561024557600080fd5b5061024e610694565b005b34801561025c57600080fd5b5061024e61026b366004612459565b610718565b34801561027c57600080fd5b506007545b6040519081526020015b60405180910390f35b3480156102a057600080fd5b5061024e6102af366004612690565b6107bc565b3480156102c057600080fd5b506102c9610823565b60405161028b91906128c8565b3480156102e257600080fd5b5061024e6102f1366004612690565b6108a9565b34801561030257600080fd5b50600454610316906001600160a01b031681565b6040516001600160a01b03909116815260200161028b565b34801561033a57600080fd5b5060408051808201909152600581527f63656c657200000000000000000000000000000000000000000000000000000060208201526102c9565b34801561038057600080fd5b50600554610316906001600160a01b031681565b3480156103a057600080fd5b5061024e6103af366004612459565b610908565b3480156103c057600080fd5b50600060405161028b91906128a0565b3480156103dc57600080fd5b506102c9610981565b3480156103f157600080fd5b5061024e610400366004612690565b610a0f565b34801561041157600080fd5b5061024e610420366004612690565b610a92565b34801561043157600080fd5b50600a54610281565b34801561044657600080fd5b5061024e610455366004612690565b610b45565b34801561046657600080fd5b5061024e6104753660046126c2565b610ba5565b34801561048657600080fd5b50600b54610281565b34801561049b57600080fd5b5061024e6104aa366004612690565b610c42565b61024e6104bd3660046125d2565b610cc5565b6104d56104d0366004612476565b610ed5565b604051901515815260200161028b565b3480156104f157600080fd5b5061024e610500366004612459565b610f5f565b34801561051157600080fd5b506000546104d590600160a01b900460ff1681565b34801561053257600080fd5b5061053b610fac565b60405160ff909116815260200161028b565b34801561055957600080fd5b506102c9611029565b34801561056e57600080fd5b5060025461058a90600160a01b900467ffffffffffffffff1681565b60405167ffffffffffffffff909116815260200161028b565b3480156105af57600080fd5b50600654610281565b3480156105c457600080fd5b5061024e61106e565b3480156105d957600080fd5b506002546001600160a01b0316610316565b3480156105f757600080fd5b5061024e610606366004612459565b6110e6565b34801561061757600080fd5b5061024e610626366004612521565b611133565b34801561063757600080fd5b50600054610316906001600160a01b031681565b34801561065757600080fd5b50600c54600160a01b900460ff166104d5565b34801561067657600080fd5b50600854610281565b34801561068b57600080fd5b50600954610281565b600c546001600160a01b031633146106bf576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916600160a01b908117918290556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699261070e92900460ff161515815260200190565b60405180910390a1565b600c546001600160a01b03163314610743576040516327e1f1e560e01b815260040160405180910390fd5b600c546001600160a01b0382811691161415610772576040516336a1c33f60e01b815260040160405180910390fd5b600c80546001600160a01b0319166001600160a01b0383169081179091556040517f4721129e0e676ed6a92909bb24e853ccdd63ad72280cc2e974e38e480e0e6e5490600090a250565b600c546001600160a01b031633146107e7576040516327e1f1e560e01b815260040160405180910390fd5b600a8190556040518181527f14988234d3e50a12aeec2d6ee595b70c2fae163caff28baab5802b122bf2a753906020015b60405180910390a150565b600d54604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b41916004808301926000929190829003018186803b15801561086857600080fd5b505afa15801561087c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108a4919081019061255b565b905090565b600c546001600160a01b031633146108d4576040516327e1f1e560e01b815260040160405180910390fd5b60088190556040518181527e91f5f5db3092e39ecb701218d4af20b7571e0429595937c334f3acd14fe2fe90602001610818565b600c546001600160a01b03163314610933576040516327e1f1e560e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527fbe1808917e09814fca7d80289a9760a4065f10d624ac1aee0b9f903c4f5d92b190602001610818565b6003805461098e90612a0d565b80601f01602080910402602001604051908101604052809291908181526020018280546109ba90612a0d565b8015610a075780601f106109dc57610100808354040283529160200191610a07565b820191906000526020600020905b8154815290600101906020018083116109ea57829003601f168201915b505050505081565b600c546001600160a01b03163314610a3a576040516327e1f1e560e01b815260040160405180910390fd5b600654811015610a5d5760405163c91c531760e01b815260040160405180910390fd5b60078190556040518181527f09cd51dbb3863eb5590065f7de41ae4950c3ede201a9f214669deadb855d395590602001610818565b600c546001600160a01b03163314610abd576040516327e1f1e560e01b815260040160405180910390fd5b80610b10576040516314e8955b60e21b815260206004820152601760248201527f70656572206d696e696d616c20726f6c6c75702066656500000000000000000060448201526064015b60405180910390fd5b600b8190556040518181527f878075a8e8aa1c7c15e6932752520f7812bf5744785e6df605373729da41554590602001610818565b600c546001600160a01b03163314610b70576040516327e1f1e560e01b815260040160405180910390fd5b60098190556040518181527f88d210dfa198f7519579294721f90c771153a7b49101eefb95147037cc8ce48190602001610818565b600c546001600160a01b03163314610bd0576040516327e1f1e560e01b815260040160405180910390fd5b600280547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b67ffffffffffffffff8616021790558151610c1d90600390602085019061232a565b50600480546001600160a01b0319166001600160a01b03929092169190911790555050565b600c546001600160a01b03163314610c6d576040516327e1f1e560e01b815260040160405180910390fd5b600754811115610c9057604051636003e82160e11b815260040160405180910390fd5b60068190556040518181527f1c853e705f5e96d9076d1f48114d62650faf218827df3fed720227b3dbf18c5a90602001610818565b600c54600160a01b900460ff1615610cf057604051630e2f42c960e31b815260040160405180910390fd5b60065481511015610d145760405163617ab12d60e11b815260040160405180910390fd5b60075481511115610d3857604051630625040160e01b815260040160405180910390fd5b6008548160a001511015610d5f5760405163c4d8d00d60e01b815260040160405180910390fd5b600a548160c001511015610d86576040516355a6d6a160e11b815260040160405180910390fd5b600b548160e001511015610dad5760405163784f02bd60e11b815260040160405180910390fd5b6000610dc68260400151836000015184606001516111ab565b905080826020015114610dec576040516301bfaa2560e51b815260040160405180910390fd5b610df5336112d3565b15610e1357604051632e70c0b160e01b815260040160405180910390fd5b6040805160a081018252835181526020808501519082015260c08401519181019190915260e08301516060820152608080840151908201526000610e5682611370565b9050610e668460a00151826113df565b60025460e085015160c08601518651610ea1936001600160a01b03169291610e8d916129bb565b610e9791906129bb565b8660a00151611462565b60208401516040517fd106eb38b3368b7c294e36fae5513fdefe880be5abfad529b37b044f2fdd2dbe90600090a250505050565b6005546000906001600160a01b03163314610f0357604051633dca01cf60e11b815260040160405180910390fd5b6000610f4485858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506114ce92505050565b9050610f5286888584611596565b5060019695505050505050565b600c546001600160a01b03163314610f8a576040516327e1f1e560e01b815260040160405180910390fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600d546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b158015610ff157600080fd5b505afa158015611005573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a49190612738565b600d54604080516306fdde0360e01b815290516060926001600160a01b0316916306fdde03916004808301926000929190829003018186803b15801561086857600080fd5b600c546001600160a01b03163314611099576040516327e1f1e560e01b815260040160405180910390fd5b6000805460ff60a01b1916908190556040517fa5ffe1601eb93a7fefd0d0eeb5fc94a2f65475f333836fe2b87fd7bbf59520699161070e91600160a01b90910460ff161515815260200190565b600c546001600160a01b03163314611111576040516327e1f1e560e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b0316331461115e576040516327e1f1e560e01b815260040160405180910390fd5b600c8054821515600160a01b0260ff60a01b199091161790556040517fcd162c6fc24285bfbe399ec0cc2ce2c380ad27d2eb1fca418c652df1257e7e099061081890831515815260200190565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018085106111ee5760405163805f2a4960e01b815260040160405180910390fd5b80836fffffffffffffffffffffffffffffffff161061122057604051633bbde0bf60e21b815260040160405180910390fd5b60015460408051606081018252878152602081018790526fffffffffffffffffffffffffffffffff86168183015290516304b98e1d60e31b81526001600160a01b03909216916325cc70e8916112789160040161286f565b60206040518083038186803b15801561129057600080fd5b505afa1580156112a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c891906126a9565b9150505b9392505050565b60008054600160a01b900460ff166112ed57506000919050565b60005460405163df592f7d60e01b81526001600160a01b0384811660048301529091169063df592f7d9060240160206040518083038186803b15801561133257600080fd5b505afa158015611346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136a919061253e565b92915050565b6060806113808360000151611683565b61138d8460200151611683565b61139a8560400151611683565b6113a78660600151611683565b6113b4876080015161171b565b6040516020016113c89594939291906127d2565b60408051601f198184030181529190529392505050565b60055460048054600254604051634f9e72ad60e11b81526001600160a01b0394851694639f3ce55a94889461142c94921692600160a01b90920467ffffffffffffffff169188910161283d565b6000604051808303818588803b15801561144557600080fd5b505af1158015611459573d6000803e3d6000fd5b50505050505050565b8034146114b15760405162461bcd60e51b815260206004820152601360248201527f62726964676520666565206d69736d61746368000000000000000000000000006044820152606401610b07565b600d546114c9906001600160a01b0316338585611752565b505050565b6115006040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6115326040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b600061153e84826117c7565b908352905061154d84826117c7565b6020840191909152905061156184826117c7565b6040840191909152905061157584826117c7565b6060840191909152905061158984826118f8565b5060808301525092915050565b6004546001600160a01b038481169116146115c457604051631440e07960e11b815260040160405180910390fd5b60025467ffffffffffffffff858116600160a01b90920416146115fa57604051633876304f60e21b815260040160405180910390fd5b80516116195760405163820bf1e560e01b815260040160405180910390fd5b6002546040516378d60cd760e01b81526001600160a01b03909116906378d60cd79061164b90849086906004016128db565b600060405180830381600087803b15801561166557600080fd5b505af1158015611679573d6000803e3d6000fd5b5050505050505050565b60606001600160ff1b038211156116dc5760405162461bcd60e51b815260206004820152601b60248201527f56616c756520657863656564732075696e743235352072616e676500000000006044820152606401610b07565b60405160208082526000601f5b8282101561170b5785811a8260208601015360019190910190600019016116e9565b5050506040818101905292915050565b805160609061172981611a05565b8360405160200161173b9291906127a3565b604051602081830303815290604052915050919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526117c1908590611ad2565b50505050565b60008083518360206117d991906129bb565b111580156117f057506117ed8360206129bb565b83105b6118485760405162461bcd60e51b815260206004820152602360248201527f4e65787455696e743235352c206f66667365742065786365656473206d6178696044820152626d756d60e81b6064820152608401610b07565b600060405160206000600182038760208a0101515b8383101561187d5780821a8386015360018301925060018203915061185d565b50505081016040525190506001600160ff1b038111156118df5760405162461bcd60e51b815260206004820152601760248201527f56616c75652065786365656473207468652072616e67650000000000000000006044820152606401610b07565b806118eb8560206129bb565b92509250505b9250929050565b60606000806119078585611bb7565b865190955090915061191982866129bb565b1115801561192f575061192c81856129bb565b84105b6119875760405162461bcd60e51b8152602060048201526024808201527f4e65787456617242797465732c206f66667365742065786365656473206d6178604482015263696d756d60e01b6064820152608401610b07565b6060811580156119a2576040519150602082016040526119ec565b6040519150601f8316801560200281840101848101888315602002848c0101015b818310156119db5780518352602092830192016119c3565b5050848452601f01601f1916604052505b50806119f883876129bb565b9350935050509250929050565b606060fd8267ffffffffffffffff161015611a3857604080516001815260f884901b60208201526021810190915261136a565b61ffff8267ffffffffffffffff1611611a8857611a5860fd60f81b611dbd565b611a6183611de4565b604051602001611a729291906127a3565b6040516020818303038152906040529050919050565b63ffffffff8267ffffffffffffffff1611611ab357611aaa607f60f91b611dbd565b611a6183611e27565b611ac46001600160f81b0319611dbd565b611a6183611e6a565b919050565b6000611b27826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611ead9092919063ffffffff16565b8051909150156114c95780806020019051810190611b45919061253e565b6114c95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b07565b6000806000611bc68585611ec4565b94509050600060fd60f81b6001600160f81b031983161415611c5f57611bec8686611f4c565b955061ffff16905060fd8110801590611c07575061ffff8111155b611c535760405162461bcd60e51b815260206004820152601f60248201527f4e65787455696e7431362c2076616c7565206f7574736964652072616e6765006044820152606401610b07565b92508391506118f19050565b607f60f91b6001600160f81b031983161415611cea57611c7f8686612005565b955063ffffffff16905061ffff81118015611c9e575063ffffffff8111155b611c535760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610b07565b6001600160f81b03198083161415611d6757611d0686866120d7565b955067ffffffffffffffff16905063ffffffff8111611c535760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610b07565b5060f881901c60fd8110611c535760405162461bcd60e51b815260206004820181905260248201527f4e65787456617255696e742c2076616c7565206f7574736964652072616e67656044820152606401610b07565b60408051600181526001600160f81b0319831660208201526021810190915260609061136a565b6040516002808252606091906000601f5b82821015611e175785811a826020860101536001919091019060001901611df5565b5050506022810160405292915050565b6040516004808252606091906000601f5b82821015611e5a5785811a826020860101536001919091019060001901611e38565b5050506024810160405292915050565b6040516008808252606091906000601f5b82821015611e9d5785811a826020860101536001919091019060001901611e7b565b5050506028810160405292915050565b6060611ebc84846000856121a9565b949350505050565b6000808351836001611ed691906129bb565b11158015611eed5750611eea8360016129bb565b83105b611f395760405162461bcd60e51b815260206004820181905260248201527f4e657874427974652c204f66667365742065786365656473206d6178696d756d6044820152606401610b07565b83830160200151806118eb8560016129bb565b6000808351836002611f5e91906129bb565b11158015611f755750611f728360026129bb565b83105b611fcc5760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7431362c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610b07565b6000604051846020870101518060011a82538060001a60018301535060028101604052601e810351915050808460026118eb91906129bb565b600080835183600461201791906129bb565b1115801561202e575061202b8360046129bb565b83105b6120855760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7433322c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610b07565b600060405160046000600182038760208a0101515b838310156120ba5780821a8386015360018301925060018203915061209a565b5050508181016040526020039003519050806118eb8560046129bb565b60008083518360086120e991906129bb565b1115801561210057506120fd8360086129bb565b83105b6121575760405162461bcd60e51b815260206004820152602260248201527f4e65787455696e7436342c206f66667365742065786365656473206d6178696d604482015261756d60f01b6064820152608401610b07565b600060405160086000600182038760208a0101515b8383101561218c5780821a8386015360018301925060018203915061216c565b5050508181016040526020039003519050806118eb8560086129bb565b6060824710156122215760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b07565b6001600160a01b0385163b6122785760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b07565b600080866001600160a01b031685876040516122949190612787565b60006040518083038185875af1925050503d80600081146122d1576040519150601f19603f3d011682016040523d82523d6000602084013e6122d6565b606091505b50915091506122e68282866122f1565b979650505050505050565b606083156123005750816112cc565b8251156123105782518084602001fd5b8160405162461bcd60e51b8152600401610b0791906128c8565b82805461233690612a0d565b90600052602060002090601f016020900481019282612358576000855561239e565b82601f1061237157805160ff191683800117855561239e565b8280016001018555821561239e579182015b8281111561239e578251825591602001919060010190612383565b506123aa9291506123ae565b5090565b5b808211156123aa57600081556001016123af565b60006123d66123d184612993565b612962565b90508281528383830111156123ea57600080fd5b828260208301376000602084830101529392505050565b600082601f83011261241257600080fd5b6112cc838335602085016123c3565b80356fffffffffffffffffffffffffffffffff81168114611acd57600080fd5b803567ffffffffffffffff81168114611acd57600080fd5b60006020828403121561246b57600080fd5b81356112cc81612a5e565b60008060008060006080868803121561248e57600080fd5b853561249981612a5e565b94506124a760208701612441565b9350604086013567ffffffffffffffff808211156124c457600080fd5b818801915088601f8301126124d857600080fd5b8135818111156124e757600080fd5b8960208285010111156124f957600080fd5b602083019550809450505050606086013561251381612a5e565b809150509295509295909350565b60006020828403121561253357600080fd5b81356112cc81612a76565b60006020828403121561255057600080fd5b81516112cc81612a76565b60006020828403121561256d57600080fd5b815167ffffffffffffffff81111561258457600080fd5b8201601f8101841361259557600080fd5b80516125a36123d182612993565b8181528560208385010111156125b857600080fd5b6125c98260208301602086016129e1565b95945050505050565b6000602082840312156125e457600080fd5b813567ffffffffffffffff808211156125fc57600080fd5b90830190610100828603121561261157600080fd5b612619612938565b82358152602083013560208201526040830135604082015261263d60608401612421565b606082015260808301358281111561265457600080fd5b61266087828601612401565b60808301525060a083013560a082015260c083013560c082015260e083013560e082015280935050505092915050565b6000602082840312156126a257600080fd5b5035919050565b6000602082840312156126bb57600080fd5b5051919050565b6000806000606084860312156126d757600080fd5b6126e084612441565b9250602084013567ffffffffffffffff8111156126fc57600080fd5b8401601f8101861361270d57600080fd5b61271c868235602084016123c3565b925050604084013561272d81612a5e565b809150509250925092565b60006020828403121561274a57600080fd5b815160ff811681146112cc57600080fd5b600081518084526127738160208601602086016129e1565b601f01601f19169290920160200192915050565b600082516127998184602087016129e1565b9190910192915050565b600083516127b58184602088016129e1565b8351908301906127c98183602088016129e1565b01949350505050565b600086516127e4818460208b016129e1565b8651908301906127f8818360208b016129e1565b865191019061280b818360208a016129e1565b855191019061281e8183602089016129e1565b84519101906128318183602088016129e1565b01979650505050505050565b6001600160a01b038416815267ffffffffffffffff831660208201526060604082015260006125c9606083018461275b565b60608101818360005b6003811015612897578151835260209283019290910190600101612878565b50505092915050565b60208101600283106128c257634e487b7160e01b600052602160045260246000fd5b91905290565b6020815260006112cc602083018461275b565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c084015261291f60e084018261275b565b9150506001600160a01b03831660208301529392505050565b604051610100810167ffffffffffffffff8111828210171561295c5761295c612a48565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561298b5761298b612a48565b604052919050565b600067ffffffffffffffff8211156129ad576129ad612a48565b50601f01601f191660200190565b600082198211156129dc57634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156129fc5781810151838201526020016129e4565b838111156117c15750506000910152565b600181811c90821680612a2157607f821691505b60208210811415612a4257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114612a7357600080fd5b50565b8015158114612a7357600080fdfea2646970667358221220698635773451a9e04186fe40d6b4b73ba2181012549c2dd871a379b6327b2a8f64736f6c63430008070033";

type MystikoV2CelerERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MystikoV2CelerERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MystikoV2CelerERC20__factory extends ContractFactory {
  constructor(...args: MystikoV2CelerERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MystikoV2CelerERC20";
  }

  deploy(
    _hasher3: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MystikoV2CelerERC20> {
    return super.deploy(
      _hasher3,
      _token,
      overrides || {}
    ) as Promise<MystikoV2CelerERC20>;
  }
  getDeployTransaction(
    _hasher3: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_hasher3, _token, overrides || {});
  }
  attach(address: string): MystikoV2CelerERC20 {
    return super.attach(address) as MystikoV2CelerERC20;
  }
  connect(signer: Signer): MystikoV2CelerERC20__factory {
    return super.connect(signer) as MystikoV2CelerERC20__factory;
  }
  static readonly contractName: "MystikoV2CelerERC20";
  public readonly contractName: "MystikoV2CelerERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MystikoV2CelerERC20Interface {
    return new utils.Interface(_abi) as MystikoV2CelerERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MystikoV2CelerERC20 {
    return new Contract(address, _abi, signerOrProvider) as MystikoV2CelerERC20;
  }
}