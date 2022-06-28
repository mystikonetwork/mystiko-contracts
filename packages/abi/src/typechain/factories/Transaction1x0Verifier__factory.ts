/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction1x0Verifier, Transaction1x0VerifierInterface } from '../Transaction1x0Verifier';

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
            internalType: 'struct Transaction1x0Pairing.G1Point',
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
            internalType: 'struct Transaction1x0Pairing.G2Point',
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
            internalType: 'struct Transaction1x0Pairing.G1Point',
            name: 'c',
            type: 'tuple',
          },
        ],
        internalType: 'struct Transaction1x0Verifier.Proof',
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
  '0x608060405234801561001057600080fd5b506115c7806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611382565b610057565b604051901515815260200160405180910390f35b600081516006146100ae5760405162461bcd60e51b815260206004820152601460248201527f696e76616c696420696e707574206c656e677468000000000000000000000000604482015260640160405180910390fd5b6100b882846100ce565b6100c4575060016100c8565b5060005b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100fa610337565b905080608001515185516001610110919061148e565b1461011a57600080fd5b835151821161012857600080fd5b835160200151821161013957600080fd5b60208401515151821161014b57600080fd5b602084810151015151821161015f57600080fd5b602084810151510151821161017357600080fd5b6020848101518101510151821161018957600080fd5b604084015151821161019a57600080fd5b81846040015160200151106101ae57600080fd5b83516101b990610925565b6101c257600080fd5b6101cf846020015161098c565b6101d857600080fd5b6101e58460400151610925565b6101ee57600080fd5b604080518082019091526000808252602082018190525b865181101561029c578387828151811061022157610221611545565b60200260200101511061023357600080fd5b61028882610283856080015184600161024c919061148e565b8151811061025c5761025c611545565b60200260200101518a858151811061027657610276611545565b6020026020010151610ac3565b610b27565b915080610294816114dc565b915050610205565b506102c58183608001516000815181106102b8576102b8611545565b6020026020010151610b27565b90506102d081610925565b6102d957600080fd5b61031b856000015186602001516102ef84610b81565b85604001516103018a60400151610b81565b6060880151885161031190610b81565b8960200151610c0a565b61032b57600193505050506100c8565b50600095945050505050565b61033f61114c565b6040805180820182527f2b8d66f3ed3683a4d81eb9ae7a63d3e26f5c02cfa4ac99f849c8b6ccfe6d640881527f302a0e735f209f980e3029609d68fa4796d2af3cefab3c9ede7036681f0ea5a26020808301919091529083528151608080820184527f15d243f7b20a46947d52feddc27551570af452179562a9a9ad2d40f28a4c9f398285019081527f1381c183bfce16a9b9fc8a0e00d424e98e381053dabbe907c864ce0f1d965fca606080850191909152908352845180860186527f19ab7b19090096fdb4ff0f082c50c25f38a85a57c606450eba6bc745b718b0b281527f03fa717034cda32cdef38a97d61f764cdb097b89fa12b823379d29339d65f4f4818601528385015285840192909252835180820185527f27aa27554d5afc55467b7f7b9ef8f21b515045b9db1ff9a9414ebbf4363cf1468186019081527f0d763c0c197a37ae791feaeda947a6670822d798eef6aada3a376682f9bf6191828501528152845180860186527f1dd1dff54796364f60716a8f13faa52576c39d1eb58a9b19d5cf876f6ab7d33d81527f2b0d7a3cedc0c8a6f733cc47f3055f323b6c82a45313ff162cf86c3569e28c95818601528185015285850152835190810184527f0329a029ea55d0a78fabd3f56b057a0802e2e3d31b1019cb7e1715d0bcbef8bc8185019081527f1c3c2d15b2d23ab409546e3261f64c969d0b8ddda7f3fb1c6f6ecc267da82db6828401528152835180850185527f2d84fb386fa7b62460707181f0115611fca290f8a5a3bf2d26813824f0d7180081527f062e9deac01069aab59c07db808550466625f89389c42756c14245e43f08361e818501528184015290840152815160078082526101008201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105bb57505060808201908152604080518082019091527f2fe1fa2dc8f4f71eb4f6a7e42822e82f9be0069bfdbd40d7a4f1fe3fed98419a81527f1a6791e58b4a2ef03632413497e39f07a1d9f881c33201b80d8f19a6228744a760208201529051805160009061064e5761064e611545565b602002602001018190525060405180604001604052807f21ddc3600c6d6de7e4ddcde454d065d437c8f011b61ebd22555377650d1cc5f181526020017f04906ae984827b7b016c23f75b50ddc2e75a4e4d8932e6fd941403f8d6dae47981525081608001516001815181106106c5576106c5611545565b602002602001018190525060405180604001604052807f1887a84f56f8fb8707b9869334d24f6e315ab05a4c9dd3f18ed99107d31e2cd881526020017f06b6bdbc2674f934ed4f83eddb57656af7a7e7fe02b03af37b06b0d40208db3b815250816080015160028151811061073c5761073c611545565b602002602001018190525060405180604001604052807f26556fa26ebee22acea82ca2f483e9c55c87f3f3ad9bb619b68b2d56849feb7281526020017f29c11971b5b70eb4b38ca6577c804cd8cfa43fcf5d7a304879ed7093bc539c0081525081608001516003815181106107b3576107b3611545565b602002602001018190525060405180604001604052807f08d84d6ca5490a688d52d7334731602658f1a34f2056031be0b579c78973a90381526020017f24acb2fed526f191d44363da410e6e5d6553b57921b2c6cb9d8f8f1b10d30f93815250816080015160048151811061082a5761082a611545565b602002602001018190525060405180604001604052807f1cf585afc2f7a7d0f1ba259cbd1c8ae776af179aac13f0743fec6d2ca4d58ce381526020017e1c431150dd66e9d3fc4188b8ead2f8aea41e1809f00d5cfb98b610d082b12481525081608001516005815181106108a0576108a0611545565b602002602001018190525060405180604001604052807f1dca364a14db6ddb369d101e080c31b4aaaf6e04a22aee08ec14207c64dd209481526020017f1b86a00e265ca1e82b5eb8ae23fede583be1c32d275d4b1bb803d172cd56c389815250816080015160068151811061091757610917611545565b602002602001018190525090565b600061094060008051602061157283398151915260036114f7565b600080516020611572833981519152835160008051602061157283398151915285518009096000805160206115728339815191526020850151800961098591906114c5565b1492915050565b6000806000806000610a0c86602001516000600281106109ae576109ae611545565b602002015187602001516001600281106109ca576109ca611545565b602002015188602001516000600281106109e6576109e6611545565b60200201518960200151600160028110610a0257610a02611545565b6020020151610d95565b875180516020820151939750919550610a31929060005b602002015189516001610a02565b87519193509150610a4790839083906000610a23565b9092509050610a5884848484610e06565b9094509250610aa884847f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e57e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d2610e06565b909450925083158015610ab9575082155b9695505050505050565b6040805180820190915260008082526020820152610adf61119d565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610b1257610b14565bfe5b5080610b1f57600080fd5b505092915050565b6040805180820190915260008082526020820152610b436111bb565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610b1257610b14565b60408051808201909152600080825260208201526020820151610bb7575060408051808201909152905181526000602082015290565b6040518060400160405280836000015181526020016000805160206115728339815191528460200151610bea91906114f7565b610c02906000805160206115728339815191526114c5565b905292915050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610c2557505060408051600480825260a0820190925291925060009190602082015b610c6f6111d9565b815260200190600190039081610c675790505090508a82600081518110610c9857610c98611545565b60200260200101819052508882600181518110610cb757610cb7611545565b60200260200101819052508682600281518110610cd657610cd6611545565b60200260200101819052508482600381518110610cf557610cf5611545565b60200260200101819052508981600081518110610d1457610d14611545565b60200260200101819052508781600181518110610d3357610d33611545565b60200260200101819052508581600281518110610d5257610d52611545565b60200260200101819052508381600381518110610d7157610d71611545565b6020026020010181905250610d868282610e48565b9b9a5050505050505050505050565b600080610dd3600080516020611572833981519152858809600080516020611572833981519152858809600080516020611572833981519152611128565b60008051602061157283398151915280868809600080516020611572833981519152868a09089150915094509492505050565b600080610e228685600080516020611572833981519152611128565b610e3b8685600080516020611572833981519152611128565b9150915094509492505050565b60008151835114610e5857600080fd5b82516000610e678260066114a6565b905060008167ffffffffffffffff811115610e8457610e8461155b565b604051908082528060200260200182016040528015610ead578160200160208202803683370190505b50905060005b838110156110e857868181518110610ecd57610ecd611545565b60200260200101516000015182826006610ee791906114a6565b610ef290600061148e565b81518110610f0257610f02611545565b602002602001018181525050868181518110610f2057610f20611545565b60200260200101516020015182826006610f3a91906114a6565b610f4590600161148e565b81518110610f5557610f55611545565b602002602001018181525050858181518110610f7357610f73611545565b60209081029190910181015151015182610f8e8360066114a6565b610f9990600261148e565b81518110610fa957610fa9611545565b602002602001018181525050858181518110610fc757610fc7611545565b6020908102919091010151515182610fe08360066114a6565b610feb90600361148e565b81518110610ffb57610ffb611545565b60200260200101818152505085818151811061101957611019611545565b60200260200101516020015160016002811061103757611037611545565b6020020151826110488360066114a6565b61105390600461148e565b8151811061106357611063611545565b60200260200101818152505085818151811061108157611081611545565b60200260200101516020015160006002811061109f5761109f611545565b6020020151826110b08360066114a6565b6110bb90600561148e565b815181106110cb576110cb611545565b6020908102919091010152806110e0816114dc565b915050610eb3565b506110f16111fe565b6000602082602086026020860160086107d05a03fa9050808015610b1257508061111a57600080fd5b505115159695505050505050565b600081806111385761113861152f565b61114284846114c5565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111766111d9565b81526020016111836111d9565b81526020016111906111d9565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806111ec61121c565b81526020016111f961121c565b905290565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261124b57600080fd5b611253611442565b80838560408601111561126557600080fd5b60005b6002811015611287578135845260209384019390910190600101611268565b509095945050505050565b600082601f8301126112a357600080fd5b8135602067ffffffffffffffff808311156112c0576112c061155b565b8260051b604051601f19603f830116810181811084821117156112e5576112e561155b565b6040528481528381019250868401828801850189101561130457600080fd5b600092505b85831015611327578035845292840192600192909201918401611309565b50979650505050505050565b60006040828403121561134557600080fd5b6040516040810181811067ffffffffffffffff821117156113685761136861155b565b604052823581526020928301359281019290925250919050565b60008082840361012081121561139757600080fd5b610100808212156113a757600080fd5b6113af61146b565b6113b98787611333565b81526080603f19840112156113cd57600080fd5b6113d5611442565b92506113e4876040880161123a565b83526113f3876080880161123a565b602084015282602082015261140b8760c08801611333565b60408201529350840135905067ffffffffffffffff81111561142c57600080fd5b61143885828601611292565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156114655761146561155b565b60405290565b6040516060810167ffffffffffffffff811182821017156114655761146561155b565b600082198211156114a1576114a1611519565b500190565b60008160001904831182151516156114c0576114c0611519565b500290565b6000828210156114d7576114d7611519565b500390565b60006000198214156114f0576114f0611519565b5060010190565b60008261151457634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47a2646970667358221220e2d8c4710ad80417ec9a8f6681a1261d08ee7a952a7cb5945dbcedca43376b1e64736f6c63430008070033';

type Transaction1x0VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction1x0VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction1x0Verifier__factory extends ContractFactory {
  constructor(...args: Transaction1x0VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction1x0Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction1x0Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction1x0Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction1x0Verifier {
    return super.attach(address) as Transaction1x0Verifier;
  }
  connect(signer: Signer): Transaction1x0Verifier__factory {
    return super.connect(signer) as Transaction1x0Verifier__factory;
  }
  static readonly contractName: 'Transaction1x0Verifier';
  public readonly contractName: 'Transaction1x0Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction1x0VerifierInterface {
    return new utils.Interface(_abi) as Transaction1x0VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction1x0Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction1x0Verifier;
  }
}
