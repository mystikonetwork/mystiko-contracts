/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction1x1Verifier, Transaction1x1VerifierInterface } from '../Transaction1x1Verifier';

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
            internalType: 'struct Transaction1x1Pairing.G1Point',
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
            internalType: 'struct Transaction1x1Pairing.G2Point',
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
            internalType: 'struct Transaction1x1Pairing.G1Point',
            name: 'c',
            type: 'tuple',
          },
        ],
        internalType: 'struct Transaction1x1Verifier.Proof',
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
  '0x608060405234801561001057600080fd5b506116b6806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611471565b610057565b604051901515815260200160405180910390f35b600081516008146100ae5760405162461bcd60e51b815260206004820152601460248201527f696e76616c696420696e707574206c656e677468000000000000000000000000604482015260640160405180910390fd5b6100b882846100ce565b6100c4575060016100c8565b5060005b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100fa610337565b905080608001515185516001610110919061157d565b1461011a57600080fd5b835151821161012857600080fd5b835160200151821161013957600080fd5b60208401515151821161014b57600080fd5b602084810151015151821161015f57600080fd5b602084810151510151821161017357600080fd5b6020848101518101510151821161018957600080fd5b604084015151821161019a57600080fd5b81846040015160200151106101ae57600080fd5b83516101b990610a14565b6101c257600080fd5b6101cf8460200151610a7b565b6101d857600080fd5b6101e58460400151610a14565b6101ee57600080fd5b604080518082019091526000808252602082018190525b865181101561029c578387828151811061022157610221611634565b60200260200101511061023357600080fd5b61028882610283856080015184600161024c919061157d565b8151811061025c5761025c611634565b60200260200101518a858151811061027657610276611634565b6020026020010151610bb2565b610c16565b915080610294816115cb565b915050610205565b506102c58183608001516000815181106102b8576102b8611634565b6020026020010151610c16565b90506102d081610a14565b6102d957600080fd5b61031b856000015186602001516102ef84610c70565b85604001516103018a60400151610c70565b6060880151885161031190610c70565b8960200151610cf9565b61032b57600193505050506100c8565b50600095945050505050565b61033f61123b565b6040805180820182527f240dbe0d917b669acf6d9707aa556c1caae7103510a0f3b51f0813c5953d8b0681527f1932a16097016a0994145cdc5829635a89692fac1683a1fbb6efc84d962053c36020808301919091529083528151608080820184527f21fd4c5ea51dd3cf9c0f30d76ff87ee3f768307c2d7f7b6b461a56a70a0b379d8285019081527f3038a8567dc4f49526833be5274f4ab75fadc9d54acfdf854fe5bc330eb1400b606080850191909152908352845180860186527f2d3cd48b586dbb250fe25db49722bccfb8031187e71085d58ad722d7afd0675281527f21621eae61598a2ea835dfe9ad42c7569e07b22b4c519930198786d35ebea4e4818601528385015285840192909252835180820185527f024e9331ebcbc29d00bb274cf7c6a36369e7d15b695c37e6e688f7aba4a479be8186019081527f149970b5fdb94f4078bdeafb60a8a24b7255c97870b85e9f6f8f1bf7b4208215828501528152845180860186527f2f3a0678d107deac9af7b48c031dd0f833673e6f5a109665f9c79a406728e8e181527f1b3988e62f1b5b40cb588dd4f9832261762da1805205f6319faa792dd2672093818601528185015285850152835190810184527f28e22bcf70457f35753e4ab2f3e26c291461834781309b540e951ce118dad0958185019081527f274f4b27d7c6c391ed6ff89cd0cb15efab222faaa063669eba2d7496cf0a4008828401528152835180850185527f0fa4d83b80e738df12b765a1707e8e9b10676fe6b8b3e069affefb9f2e3929bd81527f102646b828300be66610436f11e33961fcf31d364d4f3a40b0bf69e08083d6af818501528184015290840152815160098082526101408201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105bb57505060808201908152604080518082019091527f1fe073af706f095f8ba455ae03ef7c7e85e0d703c82f6b33fffc93d1982f9dee81527f1f6e1b19f2f1644b85dbf82072d52e62076393fa9708c71496c3f2c68632c07a60208201529051805160009061064e5761064e611634565b602002602001018190525060405180604001604052807f0ef73c51ea044df5c3191c192a850a223f0f8b59af33283d7e4e71c06de5bb6781526020017f29a69b83434ea2a9c53e47638e05f249ca474b2ac6f5c54ad9c885a0c90f6cf281525081608001516001815181106106c5576106c5611634565b602002602001018190525060405180604001604052807f303c666d45cb48301e68b5cb0cca37c3a30ef6b744a174a939aff70432e9caa681526020017f1b1c46c862a8bb4e8037cc40e8579b5cc4cc1c54d9d276fe62b5d3e9d60a7eda815250816080015160028151811061073c5761073c611634565b602002602001018190525060405180604001604052807f2de2e66c4384906f90b48535a0982d540ebc6997ea44bb585b8d91bca9c38c6281526020017f22bf1de90ba81c4b76d9fc91603317abf3f1b0e7bfe5d4ad638afd9e35c70dfe81525081608001516003815181106107b3576107b3611634565b602002602001018190525060405180604001604052807f201d8d3f636340c1df0981ddf6b1877ae205229f46019bb9e8b56ff223d9f66f81526020017f13115abe4ced5921b547098efb269ada9f26207571cb2d9608c5d2f4aede705f815250816080015160048151811061082a5761082a611634565b602002602001018190525060405180604001604052807f13dc74e0f8cf02c0be3b26904f8d349e7708158b890e54f9a98e3f73011aa62d81526020017f2d578548e8440b5ac790277f1a3e7294b3f0a9d797ef8e510e03bd65e3e151ac81525081608001516005815181106108a1576108a1611634565b602002602001018190525060405180604001604052807f28614ff9bd9b8b93d3374bdc806c274a72a082699f95213a5bc03b04409bab5f81526020017f1eddab692da4e71f961ffcdf1729f3d5ce7fc2c1c3a6ac768aab2ef24577c40b815250816080015160068151811061091857610918611634565b602002602001018190525060405180604001604052807f0e1cf3fe28265bb3ba42c452b510f7a9d533ca352cde7a79cc20464bf3e819b281526020017f2ce65c124f74d08ae00cd64e0020873f651f4fa980acdbeafb6bce4140585bee815250816080015160078151811061098f5761098f611634565b602002602001018190525060405180604001604052807f2372f39481d3a886820d44f5db3c7207276e8a3376cbc1d3e3ad72d87f0b133681526020017f0504b288821f3654d25f88851ca95225785e7b3069f52af37a461d562d02c22b8152508160800151600881518110610a0657610a06611634565b602002602001018190525090565b6000610a2f60008051602061166183398151915260036115e6565b6000805160206116618339815191528351600080516020611661833981519152855180090960008051602061166183398151915260208501518009610a7491906115b4565b1492915050565b6000806000806000610afb8660200151600060028110610a9d57610a9d611634565b60200201518760200151600160028110610ab957610ab9611634565b60200201518860200151600060028110610ad557610ad5611634565b60200201518960200151600160028110610af157610af1611634565b6020020151610e84565b875180516020820151939750919550610b20929060005b602002015189516001610af1565b87519193509150610b3690839083906000610b12565b9092509050610b4784848484610ef5565b9094509250610b9784847f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e57e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d2610ef5565b909450925083158015610ba8575082155b9695505050505050565b6040805180820190915260008082526020820152610bce61128c565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610c0157610c03565bfe5b5080610c0e57600080fd5b505092915050565b6040805180820190915260008082526020820152610c326112aa565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610c0157610c03565b60408051808201909152600080825260208201526020820151610ca6575060408051808201909152905181526000602082015290565b6040518060400160405280836000015181526020016000805160206116618339815191528460200151610cd991906115e6565b610cf1906000805160206116618339815191526115b4565b905292915050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610d1457505060408051600480825260a0820190925291925060009190602082015b610d5e6112c8565b815260200190600190039081610d565790505090508a82600081518110610d8757610d87611634565b60200260200101819052508882600181518110610da657610da6611634565b60200260200101819052508682600281518110610dc557610dc5611634565b60200260200101819052508482600381518110610de457610de4611634565b60200260200101819052508981600081518110610e0357610e03611634565b60200260200101819052508781600181518110610e2257610e22611634565b60200260200101819052508581600281518110610e4157610e41611634565b60200260200101819052508381600381518110610e6057610e60611634565b6020026020010181905250610e758282610f37565b9b9a5050505050505050505050565b600080610ec2600080516020611661833981519152858809600080516020611661833981519152858809600080516020611661833981519152611217565b60008051602061166183398151915280868809600080516020611661833981519152868a09089150915094509492505050565b600080610f118685600080516020611661833981519152611217565b610f2a8685600080516020611661833981519152611217565b9150915094509492505050565b60008151835114610f4757600080fd5b82516000610f56826006611595565b905060008167ffffffffffffffff811115610f7357610f7361164a565b604051908082528060200260200182016040528015610f9c578160200160208202803683370190505b50905060005b838110156111d757868181518110610fbc57610fbc611634565b60200260200101516000015182826006610fd69190611595565b610fe190600061157d565b81518110610ff157610ff1611634565b60200260200101818152505086818151811061100f5761100f611634565b602002602001015160200151828260066110299190611595565b61103490600161157d565b8151811061104457611044611634565b60200260200101818152505085818151811061106257611062611634565b6020908102919091018101515101518261107d836006611595565b61108890600261157d565b8151811061109857611098611634565b6020026020010181815250508581815181106110b6576110b6611634565b60209081029190910101515151826110cf836006611595565b6110da90600361157d565b815181106110ea576110ea611634565b60200260200101818152505085818151811061110857611108611634565b60200260200101516020015160016002811061112657611126611634565b602002015182611137836006611595565b61114290600461157d565b8151811061115257611152611634565b60200260200101818152505085818151811061117057611170611634565b60200260200101516020015160006002811061118e5761118e611634565b60200201518261119f836006611595565b6111aa90600561157d565b815181106111ba576111ba611634565b6020908102919091010152806111cf816115cb565b915050610fa2565b506111e06112ed565b6000602082602086026020860160086107d05a03fa9050808015610c0157508061120957600080fd5b505115159695505050505050565b600081806112275761122761161e565b61123184846115b4565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016112656112c8565b81526020016112726112c8565b815260200161127f6112c8565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806112db61130b565b81526020016112e861130b565b905290565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261133a57600080fd5b611342611531565b80838560408601111561135457600080fd5b60005b6002811015611376578135845260209384019390910190600101611357565b509095945050505050565b600082601f83011261139257600080fd5b8135602067ffffffffffffffff808311156113af576113af61164a565b8260051b604051601f19603f830116810181811084821117156113d4576113d461164a565b604052848152838101925086840182880185018910156113f357600080fd5b600092505b858310156114165780358452928401926001929092019184016113f8565b50979650505050505050565b60006040828403121561143457600080fd5b6040516040810181811067ffffffffffffffff821117156114575761145761164a565b604052823581526020928301359281019290925250919050565b60008082840361012081121561148657600080fd5b6101008082121561149657600080fd5b61149e61155a565b6114a88787611422565b81526080603f19840112156114bc57600080fd5b6114c4611531565b92506114d38760408801611329565b83526114e28760808801611329565b60208401528260208201526114fa8760c08801611422565b60408201529350840135905067ffffffffffffffff81111561151b57600080fd5b61152785828601611381565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156115545761155461164a565b60405290565b6040516060810167ffffffffffffffff811182821017156115545761155461164a565b6000821982111561159057611590611608565b500190565b60008160001904831182151516156115af576115af611608565b500290565b6000828210156115c6576115c6611608565b500390565b60006000198214156115df576115df611608565b5060010190565b60008261160357634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47a2646970667358221220ca6f71a4d6d20e73272a93b19b828ddf223a23d9f01d6546df1f5e39b3c563c964736f6c63430008070033';

type Transaction1x1VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction1x1VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction1x1Verifier__factory extends ContractFactory {
  constructor(...args: Transaction1x1VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction1x1Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction1x1Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction1x1Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction1x1Verifier {
    return super.attach(address) as Transaction1x1Verifier;
  }
  connect(signer: Signer): Transaction1x1Verifier__factory {
    return super.connect(signer) as Transaction1x1Verifier__factory;
  }
  static readonly contractName: 'Transaction1x1Verifier';
  public readonly contractName: 'Transaction1x1Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction1x1VerifierInterface {
    return new utils.Interface(_abi) as Transaction1x1VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction1x1Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction1x1Verifier;
  }
}
