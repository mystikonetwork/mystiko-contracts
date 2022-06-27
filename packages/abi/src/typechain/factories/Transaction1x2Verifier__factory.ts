/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction1x2Verifier, Transaction1x2VerifierInterface } from '../Transaction1x2Verifier';

const _abi = [
  {
    inputs: [
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
            internalType: 'struct Transaction1x2Pairing.G1Point',
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
            internalType: 'struct Transaction1x2Pairing.G2Point',
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
            internalType: 'struct Transaction1x2Pairing.G1Point',
            name: 'c',
            type: 'tuple',
          },
        ],
        internalType: 'struct Transaction1x2Verifier.Proof',
        name: 'proof',
        type: 'tuple',
      },
      {
        internalType: 'uint256[]',
        name: 'input',
        type: 'uint256[]',
      },
    ],
    name: 'verifyTx',
    outputs: [
      {
        internalType: 'bool',
        name: 'r',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50611428806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611219565b610057565b604051901515815260200160405180910390f35b60008151600a146100ae5760405162461bcd60e51b815260206004820152601460248201527f696e76616c696420696e707574206c656e677468000000000000000000000000604482015260640160405180910390fd5b6100b882846100ce565b6100c4575060016100c8565b5060005b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100fa610251565b9050806080015151855160016101109190611325565b1461011a57600080fd5b604080518082019091526000808252602082018190525b86518110156101c8578387828151811061014d5761014d6113c6565b60200260200101511061015f57600080fd5b6101b4826101af85608001518460016101789190611325565b81518110610188576101886113c6565b60200260200101518a85815181106101a2576101a26113c6565b6020026020010151610a1b565b610a7f565b9150806101c081611373565b915050610131565b506101f18183608001516000815181106101e4576101e46113c6565b6020026020010151610a7f565b90506102358560000151866020015161020984610ad9565b856040015161021b8a60400151610ad9565b6060880151885161022b90610ad9565b8960200151610b78565b61024557600193505050506100c8565b50600095945050505050565b610259610fe3565b6040805180820182527f0b6d93d64afe82e54c4909fc07d6d327818c0a8704214a2b23b3895aeb1a443c81527f10092e7f9879f51eb56708bc127b1f31219c64d3578e804a66f009cca27d38786020808301919091529083528151608080820184527f2cf222c07fe2f3b58f939023a57f87af9ddd6117632c1dbb389425ee6b4b479b8285019081527f069fb5a6799a711b22eb0f4b4c98beac47a457b2aceae04c5c412056a8df24ba606080850191909152908352845180860186527f09bf04bda24043621f144313fc6fa39b50dfe1173f73221d29a93670de0dbeb981527f06dd35fc6157b8db49969910f3fc2df262b80f96d92271685c358754cff7f9de818601528385015285840192909252835180820185527f1bd2f537abec4d11ef865b285dcf07e7065a01dd7cb562655338470639303d958186019081527ef6984a9d6d4dfaf5889b79e31483f360a9e0be46ddb1dc3e3854d9648b7011828501528152845180860186527f1bdbdb1b6a1ac153f56812f665512f892038449a6494721e61b0901ed06bdbf581527f0a806ef9c17e2e8f07a7ccaff8534b3da58eed6e0e1bfbbdeb6968927e3aa240818601528185015285850152835190810184527f08e8726e27933bdefbad557501287e292cb596aa2e30626bcef1c38be2969d248185019081527f2d688bff1352ffdb1601d4c15be31a1017cc49af1ace6fb124eefdc94d628e2e828401528152835180850185527f093d8bf0cc7265b1413e70af5d1e48fe7ad8e039de0c1188536ca6f961b8829681527f0a9955676c9b3015f83ff59a2170a91b86b01f82d66d2b115dbd33e9d12d733f8185015281840152908401528151600b8082526101808201909352919082015b60408051808201909152600080825260208201528152602001906001900390816104d457505060808201908152604080518082019091527f11ab7e03c0d18f511d1bad62dc684a797f237b2b1ba758a6b3ad433815c45afd81527f1c60a75dfa7b54c5f5829aae9a2dc0d15fa6ee08b212727ee46935ecb69f3bb7602082015290518051600090610567576105676113c6565b602002602001018190525060405180604001604052807f29baa55131e71d4604b79643c106123daf498a14b870d89ec8fde68d114322ec81526020017f2676986e2cd287d6e1ac144fd7d44454b917297f4b4daba684b2119d28bc0ec381525081608001516001815181106105de576105de6113c6565b602002602001018190525060405180604001604052807f1e4f5b98793d4337ffa982d76eb9f3f234c9225271ebbfbd5e679e86e73cf01e81526020017f1d9cb2ea71f31766a3fc67d1adfd3b6b45ef5e563db78735df65be75fedccd968152508160800151600281518110610655576106556113c6565b602002602001018190525060405180604001604052807f2938e10c4b6945997fa2a9e25b94d0d3591bcd07696ae187e35290470167e2a281526020017f19f265c169fe839e16fa6ba631da81444c7ae3e0048b45eeb6b5413e113336bd81525081608001516003815181106106cc576106cc6113c6565b602002602001018190525060405180604001604052807f22b5521c05eb39eca9b63dc8c813059869559f8ef9b19eb9c0eaa96bca08778181526020017f22612fbfe4382631fd9f5443bb32be5795b0bff99b5c96c8c85c4b4ec5534cdd8152508160800151600481518110610743576107436113c6565b602002602001018190525060405180604001604052807f1018231b686e04177d2fb20c9bf7e8465bb4fb039d70281130a28126b8ee8f5c81526020017f2bd21bfe65b95d709b1ea81ab2ddd611d2b0f211eb273add3789369e27ad882081525081608001516005815181106107ba576107ba6113c6565b602002602001018190525060405180604001604052807f0b7699b00bd8de8cc728827391a423bc06ddc83da8396c94b490d85e1c18441b81526020017f0bc8f2b5ebce80115631be6f45a8c5dfda71930cf15bef613a8f407d8ba905248152508160800151600681518110610831576108316113c6565b602002602001018190525060405180604001604052807f1444235a2fc84d8c0fea2846070e375d679e6e6d70d65c3899b863cfe36925ad81526020017f121baf65f1c944b9781341892d890997a63fb64641b08999267dfcbd0b02e70b81525081608001516007815181106108a8576108a86113c6565b602002602001018190525060405180604001604052807f2ea2fb6db26612bf59e02c0ce5f53e5d5b37fa49f1d033478d44e800aa5e532f81526020017f13eb31d20fbfd66a2e57d8b2a6cc4d21a1b09d08fc3b9a4e17ec58b07e25fcf9815250816080015160088151811061091f5761091f6113c6565b602002602001018190525060405180604001604052807f2386eb69c5dc327045e69c0813aac0836235972c7b4ef99a1dfa808d6e503c7781526020017f0da60583d7e83f264a8d8ad8756b12cbaa8e374b41605aa297e94bf39e1b2fd78152508160800151600981518110610996576109966113c6565b602002602001018190525060405180604001604052807f20db1b3e26545a43e7c32997f4881ed06192f39e9c3ded72c6eee6860244b4e681526020017f27bc02463b6dba1f6b7a1530126ed6d79d4d4980f7137bc57bae3b04552477d98152508160800151600a81518110610a0d57610a0d6113c6565b602002602001018190525090565b6040805180820190915260008082526020820152610a37611034565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610a6a57610a6c565bfe5b5080610a7757600080fd5b505092915050565b6040805180820190915260008082526020820152610a9b611052565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610a6a57610a6c565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610b2057506020830151155b15610b405750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610b65919061138e565b610b6f908461135c565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610b9357505060408051600480825260a0820190925291925060009190602082015b610bdd611070565b815260200190600190039081610bd55790505090508a82600081518110610c0657610c066113c6565b60200260200101819052508882600181518110610c2557610c256113c6565b60200260200101819052508682600281518110610c4457610c446113c6565b60200260200101819052508482600381518110610c6357610c636113c6565b60200260200101819052508981600081518110610c8257610c826113c6565b60200260200101819052508781600181518110610ca157610ca16113c6565b60200260200101819052508581600281518110610cc057610cc06113c6565b60200260200101819052508381600381518110610cdf57610cdf6113c6565b6020026020010181905250610cf48282610d03565b9b9a5050505050505050505050565b60008151835114610d1357600080fd5b82516000610d2282600661133d565b905060008167ffffffffffffffff811115610d3f57610d3f6113dc565b604051908082528060200260200182016040528015610d68578160200160208202803683370190505b50905060005b83811015610fa357868181518110610d8857610d886113c6565b60200260200101516000015182826006610da2919061133d565b610dad906000611325565b81518110610dbd57610dbd6113c6565b602002602001018181525050868181518110610ddb57610ddb6113c6565b60200260200101516020015182826006610df5919061133d565b610e00906001611325565b81518110610e1057610e106113c6565b602002602001018181525050858181518110610e2e57610e2e6113c6565b60209081029190910181015151015182610e4983600661133d565b610e54906002611325565b81518110610e6457610e646113c6565b602002602001018181525050858181518110610e8257610e826113c6565b6020908102919091010151515182610e9b83600661133d565b610ea6906003611325565b81518110610eb657610eb66113c6565b602002602001018181525050858181518110610ed457610ed46113c6565b602002602001015160200151600160028110610ef257610ef26113c6565b602002015182610f0383600661133d565b610f0e906004611325565b81518110610f1e57610f1e6113c6565b602002602001018181525050858181518110610f3c57610f3c6113c6565b602002602001015160200151600060028110610f5a57610f5a6113c6565b602002015182610f6b83600661133d565b610f76906005611325565b81518110610f8657610f866113c6565b602090810291909101015280610f9b81611373565b915050610d6e565b50610fac611095565b6000602082602086026020860160086107d05a03fa9050808015610a6a575080610fd557600080fd5b505115159695505050505050565b6040805160e08101909152600060a0820181815260c083019190915281526020810161100d611070565b815260200161101a611070565b8152602001611027611070565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806110836110b3565b81526020016110906110b3565b905290565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126110e257600080fd5b6110ea6112d9565b8083856040860111156110fc57600080fd5b60005b600281101561111e5781358452602093840193909101906001016110ff565b509095945050505050565b600082601f83011261113a57600080fd5b8135602067ffffffffffffffff80831115611157576111576113dc565b8260051b604051601f19603f8301168101818110848211171561117c5761117c6113dc565b6040528481528381019250868401828801850189101561119b57600080fd5b600092505b858310156111be5780358452928401926001929092019184016111a0565b50979650505050505050565b6000604082840312156111dc57600080fd5b6040516040810181811067ffffffffffffffff821117156111ff576111ff6113dc565b604052823581526020928301359281019290925250919050565b60008082840361012081121561122e57600080fd5b6101008082121561123e57600080fd5b611246611302565b61125087876111ca565b81526080603f198401121561126457600080fd5b61126c6112d9565b925061127b87604088016110d1565b835261128a87608088016110d1565b60208401528260208201526112a28760c088016111ca565b60408201529350840135905067ffffffffffffffff8111156112c357600080fd5b6112cf85828601611129565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156112fc576112fc6113dc565b60405290565b6040516060810167ffffffffffffffff811182821017156112fc576112fc6113dc565b60008219821115611338576113386113b0565b500190565b6000816000190483118215151615611357576113576113b0565b500290565b60008282101561136e5761136e6113b0565b500390565b6000600019821415611387576113876113b0565b5060010190565b6000826113ab57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220eedc3ed6ac87a89954f2e0807885035ee09f722c90de890b79809b9cf3e9639a64736f6c63430008070033';

type Transaction1x2VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction1x2VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction1x2Verifier__factory extends ContractFactory {
  constructor(...args: Transaction1x2VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction1x2Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction1x2Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction1x2Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction1x2Verifier {
    return super.attach(address) as Transaction1x2Verifier;
  }
  connect(signer: Signer): Transaction1x2Verifier__factory {
    return super.connect(signer) as Transaction1x2Verifier__factory;
  }
  static readonly contractName: 'Transaction1x2Verifier';
  public readonly contractName: 'Transaction1x2Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction1x2VerifierInterface {
    return new utils.Interface(_abi) as Transaction1x2VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction1x2Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction1x2Verifier;
  }
}
