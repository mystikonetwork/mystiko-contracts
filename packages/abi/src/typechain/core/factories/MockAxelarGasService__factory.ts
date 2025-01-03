/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MockAxelarGasService, MockAxelarGasServiceInterface } from '../MockAxelarGasService';

const _abi = [
  {
    inputs: [],
    name: 'NothingReceived',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferFailed',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gasToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasFeeAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'GasPaidForContractCall',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gasToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasFeeAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'GasPaidForContractCallWithToken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasFeeAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'NativeGasPaidForContractCall',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasFeeAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'NativeGasPaidForContractCallWithToken',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
    ],
    name: 'collectFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractId',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: 'gasToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'gasFeeAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'payGasForContractCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'gasToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'gasFeeAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'payGasForContractCallWithToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'payNativeGasForContractCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'destinationChain',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'payNativeGasForContractCallWithToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60808060405234601557610a0e908161001b8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80630c93e3bb146106915780638291286c1461065657806382ad6f35146105d2578063c62c20021461048c578063da854d751461033a578063edb6b3a5146101945763fd09e3bd1461006957600080fd5b3461018f5760e036600319011261018f57610082610789565b60243567ffffffffffffffff811161018f576100a29036906004016107cb565b60449291923567ffffffffffffffff811161018f576100c59036906004016107cb565b9390916064359267ffffffffffffffff841161018f57610149946001600160a01b0380926101768261011c7f99206760f0be19dd093729bd35e5924daff5e217bcedc5223ed067b60008cf8a9936906004016107cb565b92909361012761079f565b9b8c9560a435956101428761013a6107b5565b993390610997565b369161084d565b602081519101209c6101686040519b8c9b60a08d5260a08d0191610884565b918a830360208c0152610884565b99166040870152606086015216608084015216930390a3005b600080fd5b3461018f5761012036600319011261018f576101ae610789565b60243567ffffffffffffffff811161018f576101ce9036906004016107cb565b60443567ffffffffffffffff811161018f576101ee9036906004016107cb565b60649291923567ffffffffffffffff811161018f576102119036906004016107cb565b959060843567ffffffffffffffff811161018f573660238201121561018f5761024490369060248160040135910161084d565b9661024d6107b5565b9560e4359461010435936001600160a01b03851680950361018f5761027f610299916102a7956101428a8d3390610997565b60208151910120996040519860e08a5260e08a0191610884565b918783036020890152610884565b92848403604086015287519586855260005b8781106103255750602093869592937f8875f9764f28fa82d3e7ff1b80bd5c8f665e1f42fcd8c2faebc7c400a4ba1bbd97946001600160a01b0380946000898d8901015260a435606089015216608087015260a086015260c08501521695601f801991011601030190a3005b80602080928c010151828289010152016102b9565b3461018f57604036600319011261018f57610353610789565b60243567ffffffffffffffff811161018f573660238201121561018f5780600401359067ffffffffffffffff821161018f573660248360051b8301011161018f5760005b8281101561048a57600060248260051b840101356001600160a01b038116808203610486578061040157505080808080478181156103f8575b6001600160a01b038b1690f1156103ec57506001905b01610397565b604051903d90823e3d90fd5b506108fc6103d0565b6020602491604051928380926370a0823160e01b82523060048301525afa9283156103ec57809361044c575b505060019291610447916001600160a01b038816906108ed565b6103e6565b909192506020823d821161047e575b81610468602093836107f9565b8101031261047b5750519080600161042d565b80fd5b3d915061045b565b8280fd5b005b60e036600319011261018f576104a0610789565b60243567ffffffffffffffff811161018f576104c09036906004016107cb565b60449291923567ffffffffffffffff811161018f576104e39036906004016107cb565b93909160643567ffffffffffffffff811161018f576105069036906004016107cb565b9460843567ffffffffffffffff811161018f576105279036906004016107cb565b9590966105326107b5565b9734156105c1577f999d431b58761213cf53af96262b67a069cbd963499fd8effd1e21556217b841976105976001600160a01b03969461057888966105a596369161084d565b602081519101209c6101686040519b8c9b60c08d5260c08d0191610884565b918783036040890152610884565b9660a43560608601523460808601521660a084015216930390a3005b63b5c74a2760e01b60005260046000fd5b3461018f57606036600319011261018f576105eb610789565b602435906001600160a01b0382169182810361018f576044359261064257506000808093819382908215610638575b6001600160a01b031690f11561062c57005b6040513d6000823e3d90fd5b6108fc915061061a565b6001600160a01b0361048a939216906108ed565b3461018f57600036600319011261018f5760206040517ffaa2f015f2ce5aee225904728de2def86eb8837491efd21f1a04fc20d8e923f68152f35b60a036600319011261018f576106a5610789565b60243567ffffffffffffffff811161018f576106c59036906004016107cb565b909160443567ffffffffffffffff811161018f576106e79036906004016107cb565b93909260643567ffffffffffffffff811161018f5761070a9036906004016107cb565b94909361071561079f565b9534156105c1576107756001600160a01b03936107567f617332c1832058df6ee45fcbdf471251474c9945a8e5d229287a21a5f67ccf0a988694369161084d565b602081519101209961029960405198899860808a5260808a0191610884565b9634604086015216606084015216930390a3005b600435906001600160a01b038216820361018f57565b608435906001600160a01b038216820361018f57565b60c435906001600160a01b038216820361018f57565b9181601f8401121561018f5782359167ffffffffffffffff831161018f576020838186019501011161018f57565b90601f8019910116810190811067ffffffffffffffff82111761081b57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161081b57601f01601f191660200190565b92919261085982610831565b9161086760405193846107f9565b82948184528183011161018f578281602093846000960137010152565b908060209392818452848401376000828201840152601f01601f1916010190565b3d156108d0573d906108b682610831565b916108c460405193846107f9565b82523d6000602084013e565b606090565b9081602091031261018f5751801515810361018f5790565b916000918291604051906001600160a01b03602083019363a9059cbb60e01b85521660248301526044820152604481526109286064826107f9565b519082855af16109366108a5565b81610968575b501590811561095e575b5061094d57565b6312171d8360e31b60005260046000fd5b90503b1538610946565b805180159250821561097d575b50503861093c565b61099092506020809183010191016108d5565b3880610975565b916000918291604051906001600160a01b0360208301936323b872dd60e01b85521660248301523060448301526064820152606481526109286084826107f956fea26469706673582212200f7cab70874d6a9b75aa201d3ece347807133003a9b909d3399445d7c8fcf0b064736f6c634300081a0033';

type MockAxelarGasServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAxelarGasServiceConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAxelarGasService__factory extends ContractFactory {
  constructor(...args: MockAxelarGasServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MockAxelarGasService';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MockAxelarGasService> {
    return super.deploy(overrides || {}) as Promise<MockAxelarGasService>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockAxelarGasService {
    return super.attach(address) as MockAxelarGasService;
  }
  connect(signer: Signer): MockAxelarGasService__factory {
    return super.connect(signer) as MockAxelarGasService__factory;
  }
  static readonly contractName: 'MockAxelarGasService';
  public readonly contractName: 'MockAxelarGasService';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAxelarGasServiceInterface {
    return new utils.Interface(_abi) as MockAxelarGasServiceInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockAxelarGasService {
    return new Contract(address, _abi, signerOrProvider) as MockAxelarGasService;
  }
}
