/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MockToken, MockTokenInterface } from '../MockToken';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: '_decimals',
        type: 'uint8',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'allowance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'ERC20InsufficientAllowance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'ERC20InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'approver',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidApprover',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidSender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidSpender',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
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
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
    name: 'decimals',
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
    name: 'name',
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
    name: 'symbol',
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
    name: 'totalSupply',
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
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'transfer',
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
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
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
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162000d5538038062000d558339810160408190526200003491620002d5565b82826003620000448382620003e9565b506004620000538282620003e9565b50506005805460ff191660ff841690811790915562000092915033906200007c90600a620005ca565b6200008c90633b9aca00620005df565b6200009b565b5050506200060f565b6001600160a01b038216620000cb5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000d960008383620000dd565b5050565b6001600160a01b0383166200010c578060026000828254620001009190620005f9565b90915550620001809050565b6001600160a01b03831660009081526020819052604090205481811015620001615760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000c2565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166200019e57600280548290039055620001bd565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200020391815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200023857600080fd5b81516001600160401b038082111562000255576200025562000210565b604051601f8301601f19908116603f0116810190828211818310171562000280576200028062000210565b816040528381526020925086838588010111156200029d57600080fd5b600091505b83821015620002c15785820183015181830184015290820190620002a2565b600093810190920192909252949350505050565b600080600060608486031215620002eb57600080fd5b83516001600160401b03808211156200030357600080fd5b620003118783880162000226565b945060208601519150808211156200032857600080fd5b50620003378682870162000226565b925050604084015160ff811681146200034f57600080fd5b809150509250925092565b600181811c908216806200036f57607f821691505b6020821081036200039057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003e457600081815260208120601f850160051c81016020861015620003bf5750805b601f850160051c820191505b81811015620003e057828155600101620003cb565b5050505b505050565b81516001600160401b0381111562000405576200040562000210565b6200041d816200041684546200035a565b8462000396565b602080601f8311600181146200045557600084156200043c5750858301515b600019600386901b1c1916600185901b178555620003e0565b600085815260208120601f198616915b82811015620004865788860151825594840194600190910190840162000465565b5085821015620004a55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156200050c578160001904821115620004f057620004f0620004b5565b80851615620004fe57918102915b93841c9390800290620004d0565b509250929050565b6000826200052557506001620005c4565b816200053457506000620005c4565b81600181146200054d5760028114620005585762000578565b6001915050620005c4565b60ff8411156200056c576200056c620004b5565b50506001821b620005c4565b5060208310610133831016604e8410600b84101617156200059d575081810a620005c4565b620005a98383620004cb565b8060001904821115620005c057620005c0620004b5565b0290505b92915050565b6000620005d8838362000514565b9392505050565b8082028115828204841417620005c457620005c4620004b5565b80820180821115620005c457620005c4620004b5565b610736806200061f6000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063313ce5671161007657806395d89b411161005b57806395d89b411461014c578063a9059cbb14610154578063dd62ed3e1461016757600080fd5b8063313ce5671461010e57806370a082311461012357600080fd5b806306fdde03146100a8578063095ea7b3146100c657806318160ddd146100e957806323b872dd146100fb575b600080fd5b6100b06101a0565b6040516100bd9190610580565b60405180910390f35b6100d96100d43660046105ea565b610232565b60405190151581526020016100bd565b6002545b6040519081526020016100bd565b6100d9610109366004610614565b61024c565b60055460405160ff90911681526020016100bd565b6100ed610131366004610650565b6001600160a01b031660009081526020819052604090205490565b6100b0610270565b6100d96101623660046105ea565b61027f565b6100ed610175366004610672565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101af906106a5565b80601f01602080910402602001604051908101604052809291908181526020018280546101db906106a5565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b5050505050905090565b60003361024081858561028d565b60019150505b92915050565b60003361025a85828561029f565b610265858585610322565b506001949350505050565b6060600480546101af906106a5565b600033610240818585610322565b61029a8383836001610381565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461031c578181101561030d57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61031c84848484036000610381565b50505050565b6001600160a01b03831661034c57604051634b637e8f60e11b815260006004820152602401610304565b6001600160a01b0382166103765760405163ec442f0560e01b815260006004820152602401610304565b61029a838383610456565b6001600160a01b0384166103ab5760405163e602df0560e01b815260006004820152602401610304565b6001600160a01b0383166103d557604051634a1406b160e11b815260006004820152602401610304565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561031c57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161044891815260200190565b60405180910390a350505050565b6001600160a01b03831661048157806002600082825461047691906106df565b909155506104f39050565b6001600160a01b038316600090815260208190526040902054818110156104d45760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610304565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661050f5760028054829003905561052e565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161057391815260200190565b60405180910390a3505050565b600060208083528351808285015260005b818110156105ad57858101830151858201604001528201610591565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146105e557600080fd5b919050565b600080604083850312156105fd57600080fd5b610606836105ce565b946020939093013593505050565b60008060006060848603121561062957600080fd5b610632846105ce565b9250610640602085016105ce565b9150604084013590509250925092565b60006020828403121561066257600080fd5b61066b826105ce565b9392505050565b6000806040838503121561068557600080fd5b61068e836105ce565b915061069c602084016105ce565b90509250929050565b600181811c908216806106b957607f821691505b6020821081036106d957634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561024657634e487b7160e01b600052601160045260246000fdfea26469706673582212208511c12dc00bab9b3763086fe8e9e866f4d81b6e1782aadd2472b54719d6c80964736f6c63430008140033';

type MockTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MockTokenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class MockToken__factory extends ContractFactory {
  constructor(...args: MockTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'MockToken';
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MockToken> {
    return super.deploy(_name, _symbol, _decimals, overrides || {}) as Promise<MockToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, _decimals, overrides || {});
  }
  attach(address: string): MockToken {
    return super.attach(address) as MockToken;
  }
  connect(signer: Signer): MockToken__factory {
    return super.connect(signer) as MockToken__factory;
  }
  static readonly contractName: 'MockToken';
  public readonly contractName: 'MockToken';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenInterface {
    return new utils.Interface(_abi) as MockTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockToken {
    return new Contract(address, _abi, signerOrProvider) as MockToken;
  }
}
