/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Rollup16Verifier, Rollup16VerifierInterface } from '../Rollup16Verifier';

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
            internalType: 'struct Rollup16Pairing.G1Point',
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
            internalType: 'struct Rollup16Pairing.G2Point',
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
            internalType: 'struct Rollup16Pairing.G1Point',
            name: 'c',
            type: 'tuple',
          },
        ],
        internalType: 'struct Rollup16Verifier.Proof',
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
  '0x608060405234801561001057600080fd5b5061115e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004610f4f565b610057565b604051901515815260200160405180910390f35b600081516004146100ae5760405162461bcd60e51b815260206004820152601460248201527f696e76616c696420696e707574206c656e677468000000000000000000000000604482015260640160405180910390fd5b6100b882846100ce565b6100c4575060016100c8565b5060005b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100fa610251565b905080608001515185516001610110919061105b565b1461011a57600080fd5b604080518082019091526000808252602082018190525b86518110156101c8578387828151811061014d5761014d6110fc565b60200260200101511061015f57600080fd5b6101b4826101af8560800151846001610178919061105b565b81518110610188576101886110fc565b60200260200101518a85815181106101a2576101a26110fc565b6020026020010151610751565b6107b5565b9150806101c0816110a9565b915050610131565b506101f18183608001516000815181106101e4576101e46110fc565b60200260200101516107b5565b9050610235856000015186602001516102098461080f565b856040015161021b8a6040015161080f565b6060880151885161022b9061080f565b89602001516108ae565b61024557600193505050506100c8565b50600095945050505050565b610259610d19565b6040805180820182527f2343cbd8d4983aec15bb189e2a96a598110a5255dce870ff1959d1352a084b8681527f1f53b04aad4d61e69bd5d622da4416b19572c1710a0b60a07091ff7109fbc5346020808301919091529083528151608080820184527f2c6250f036da057868cc78f7f24b9c92cb2acb2946d89bea5b418f52fb2c37a98285019081527f1220094901e1e81b377026a6ebdd6a4884e101a4947abd32bd32c76664654446606080850191909152908352845180860186527f25c0f7796cdf73170fa43b9387dfa1276ca1ec5cc294d12299a6d3fd1c49bb9881527f02d6d2fde0c1630a9e9e5e863f60f11243400ddd011aff1b53cc61665d9f0774818601528385015285840192909252835180820185527f17d5646de16a93d6df8388ad9f188a2b96375d2ed4feffb1a4159a39c283e8648186019081527f091469d885f51194364102c389935e34e98ee0c29a835682ff904c60bc21752f828501528152845180860186527f0f9c7e5cb043508ec62083eac58f95e6ef656928327368dfcee5c8fe8ffd96e381527f11533e23b0032385d7d4d94a8433a0e3d815dc68499964476cc9bc30adc5c421818601528185015285850152835190810184527f1363faa2d7cddd5d047683e8020426f95887778a89d6e2599cad8fe0d94ea8578185019081527f21659548f8816da819b8877764918b2298a5e1e7da3747eb6e86bc33b6493d5c828401528152835180850185527f0e4cef62818570a45ef27f3c153ce4d4a86b49a4a115231ebda3d7908cab6c7681527f22890d66731426165d3a4665d1cbc85f15128be4a8d1e03a48edca382dcdf6708185015281840152908401528151600580825260c08201909352919082015b60408051808201909152600080825260208201528152602001906001900390816104d457505060808201908152604080518082019091527f28e78c2427a3f67f8e3e08021ed8ac9632cf68ca7ff20d0ed2778802254f62b381527f1f744cba3f38532fea8f7a8a4ce7fd69f07c4048b0fb7356ac2f080f180e43b0602082015290518051600090610567576105676110fc565b602002602001018190525060405180604001604052807f0e89a0475f1a7fac670ebdffc64a53235143c7610082125621e5295941d4c9b181526020017f22c481017f4cd712bb5216a91c191ee58d9a997158e2a387e9ffd39792e77eee81525081608001516001815181106105de576105de6110fc565b602002602001018190525060405180604001604052807f2b059ecc389296c8c018e6be1a9cedcda2cfef5d866d17ca847b1502384a826f81526020017f219873f2af5bbb693666a1a64385d1c7353f807ecdfa5a1e83e7731f33b36ef68152508160800151600281518110610655576106556110fc565b602002602001018190525060405180604001604052807f2f721dd06675f438979ce46a24cf0cb4e6fbef374501b4f0c2e0e22b83dacf5c81526020017f0577de4b80f34d170276110b0e176d490635758ace11a9f24cba46c9e13a1dbf81525081608001516003815181106106cc576106cc6110fc565b602002602001018190525060405180604001604052807f2411ba5dbb28aa424849c905445d990a5acade2c2f1653bb4450156b5526ba4c81526020017f14fcd2d15f86949d189901d43a0bbe88360332be5e471807049ec545d6823c818152508160800151600481518110610743576107436110fc565b602002602001018190525090565b604080518082019091526000808252602082015261076d610d6a565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508080156107a0576107a2565bfe5b50806107ad57600080fd5b505092915050565b60408051808201909152600080825260208201526107d1610d88565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080156107a0576107a2565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479015801561085657506020830151155b156108765750506040805180820190915260008082526020820152919050565b60405180604001604052808460000151815260200182856020015161089b91906110c4565b6108a59084611092565b90529392505050565b60408051600480825260a08201909252600091829190816020015b60408051808201909152600080825260208201528152602001906001900390816108c957505060408051600480825260a0820190925291925060009190602082015b610913610da6565b81526020019060019003908161090b5790505090508a8260008151811061093c5761093c6110fc565b6020026020010181905250888260018151811061095b5761095b6110fc565b6020026020010181905250868260028151811061097a5761097a6110fc565b60200260200101819052508482600381518110610999576109996110fc565b602002602001018190525089816000815181106109b8576109b86110fc565b602002602001018190525087816001815181106109d7576109d76110fc565b602002602001018190525085816002815181106109f6576109f66110fc565b60200260200101819052508381600381518110610a1557610a156110fc565b6020026020010181905250610a2a8282610a39565b9b9a5050505050505050505050565b60008151835114610a4957600080fd5b82516000610a58826006611073565b905060008167ffffffffffffffff811115610a7557610a75611112565b604051908082528060200260200182016040528015610a9e578160200160208202803683370190505b50905060005b83811015610cd957868181518110610abe57610abe6110fc565b60200260200101516000015182826006610ad89190611073565b610ae390600061105b565b81518110610af357610af36110fc565b602002602001018181525050868181518110610b1157610b116110fc565b60200260200101516020015182826006610b2b9190611073565b610b3690600161105b565b81518110610b4657610b466110fc565b602002602001018181525050858181518110610b6457610b646110fc565b60209081029190910181015151015182610b7f836006611073565b610b8a90600261105b565b81518110610b9a57610b9a6110fc565b602002602001018181525050858181518110610bb857610bb86110fc565b6020908102919091010151515182610bd1836006611073565b610bdc90600361105b565b81518110610bec57610bec6110fc565b602002602001018181525050858181518110610c0a57610c0a6110fc565b602002602001015160200151600160028110610c2857610c286110fc565b602002015182610c39836006611073565b610c4490600461105b565b81518110610c5457610c546110fc565b602002602001018181525050858181518110610c7257610c726110fc565b602002602001015160200151600060028110610c9057610c906110fc565b602002015182610ca1836006611073565b610cac90600561105b565b81518110610cbc57610cbc6110fc565b602090810291909101015280610cd1816110a9565b915050610aa4565b50610ce2610dcb565b6000602082602086026020860160086107d05a03fa90508080156107a0575080610d0b57600080fd5b505115159695505050505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101610d43610da6565b8152602001610d50610da6565b8152602001610d5d610da6565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280610db9610de9565b8152602001610dc6610de9565b905290565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f830112610e1857600080fd5b610e2061100f565b808385604086011115610e3257600080fd5b60005b6002811015610e54578135845260209384019390910190600101610e35565b509095945050505050565b600082601f830112610e7057600080fd5b8135602067ffffffffffffffff80831115610e8d57610e8d611112565b8260051b604051601f19603f83011681018181108482111715610eb257610eb2611112565b60405284815283810192508684018288018501891015610ed157600080fd5b600092505b85831015610ef4578035845292840192600192909201918401610ed6565b50979650505050505050565b600060408284031215610f1257600080fd5b6040516040810181811067ffffffffffffffff82111715610f3557610f35611112565b604052823581526020928301359281019290925250919050565b600080828403610120811215610f6457600080fd5b61010080821215610f7457600080fd5b610f7c611038565b610f868787610f00565b81526080603f1984011215610f9a57600080fd5b610fa261100f565b9250610fb18760408801610e07565b8352610fc08760808801610e07565b6020840152826020820152610fd88760c08801610f00565b60408201529350840135905067ffffffffffffffff811115610ff957600080fd5b61100585828601610e5f565b9150509250929050565b6040805190810167ffffffffffffffff8111828210171561103257611032611112565b60405290565b6040516060810167ffffffffffffffff8111828210171561103257611032611112565b6000821982111561106e5761106e6110e6565b500190565b600081600019048311821515161561108d5761108d6110e6565b500290565b6000828210156110a4576110a46110e6565b500390565b60006000198214156110bd576110bd6110e6565b5060010190565b6000826110e157634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e8f1441a91b65a13a5cff3559f3f985c0ebfdfd4ec5f31749ebaa8096fcaca5864736f6c63430008070033';

type Rollup16VerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Rollup16VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rollup16Verifier__factory extends ContractFactory {
  constructor(...args: Rollup16VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Rollup16Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Rollup16Verifier> {
    return super.deploy(overrides || {}) as Promise<Rollup16Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Rollup16Verifier {
    return super.attach(address) as Rollup16Verifier;
  }
  connect(signer: Signer): Rollup16Verifier__factory {
    return super.connect(signer) as Rollup16Verifier__factory;
  }
  static readonly contractName: 'Rollup16Verifier';
  public readonly contractName: 'Rollup16Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Rollup16VerifierInterface {
    return new utils.Interface(_abi) as Rollup16VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Rollup16Verifier {
    return new Contract(address, _abi, signerOrProvider) as Rollup16Verifier;
  }
}
