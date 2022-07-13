/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction2x1Verifier, Transaction2x1VerifierInterface } from '../Transaction2x1Verifier';

const _abi = [
  {
    inputs: [],
    name: 'InvalidParam',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotOnCurve',
    type: 'error',
  },
  {
    inputs: [],
    name: 'StaticCallFailed',
    type: 'error',
  },
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
            internalType: 'struct Pairing.G1Point',
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
            internalType: 'struct Pairing.G2Point',
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
            internalType: 'struct Pairing.G1Point',
            name: 'c',
            type: 'tuple',
          },
        ],
        internalType: 'struct VerifierLib.Proof',
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
  '0x608060405234801561001057600080fd5b50611885806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e36600461167f565b610057565b604051901515815260200160405180910390f35b60008151600a1461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce919061178b565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b90610bca565b610248576040516361586bdd60e01b815260040160405180910390fd5b6102558460200151610c42565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f8460400151610bca565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf611823565b6020026020010151610d2c565b905060005b865181101561038c57838782815181106102fd576102fd611823565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c919061178b565b8151811061034c5761034c611823565b60200260200101518a858151811061036657610366611823565b6020026020010151610da9565b610d2c565b915080610384816117ba565b9150506102e1565b5061039681610bca565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c984610df8565b85604001516103db8a60400151610df8565b606088015188516103eb90610df8565b8960200151610ea6565b9695505050505050565b610407611449565b6040805180820182527f2b0f694d2609916d58f8b8fe4cbe1a713141811913f6d7736a3073ecb5b3fe8081527f09344c6d5ca8fbbfdb58bb857dd576fd8fab156bfedda58a6878792b965ad3d16020808301919091529083528151608080820184527f2b9d686a17f12ebeeb919832ccf9a96f904b75a5507b6e3d0bccb288cd12407c8285019081527f1f2030ec5244d07eef40d7d3247db371af57f59732d06f622c112a6264a2fd28606080850191909152908352845180860186527f2c5211d02d38b7862d8aed27f3b16a77a27f93a1590ba782d49689b8941aa5e981527f1d723f26c4b5ae3adf71d983a966b27c83f4923cd2a930812e176680fa9a191f818601528385015285840192909252835180820185527f195dff06a027d149b96a410fef47ce7d0a6b6c458b384f90b0d5a38afdf6f0c88186019081527f251cbce4e335e84b7ff5a265b8bc4ee13bad86b120820031d064696c8d00c6db828501528152845180860186527f1c6b46a0457fb01033afbe6ea919a1fe05c02ae1502494c48bb6fd522626a89e81527f02b46cdd0fcf9d94fb605088c72d33343f711e5ad581307c444757559c4b70bb818601528185015285850152835190810184527f2d4d1f32578c99b504a145833842cfca2ec0db371698bea4ba91f45d38f0abe78185019081527f169fdd11263b7ec7bc512a5244b2d9ac1fe6ed87b717c8d44ec69543d41d8b00828401528152835180850185527f12308a508f182ae1c92a509bb0f21b59113a3b861840cff709522a77f04ced4281527f2f2090195bf8f7cce423b2f03b4233c740bde6272a0fee302b4e9ee10e261b2a8185015281840152908401528151600b8082526101808201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068357505060808201908152604080518082019091527f26d168c52751b3ac03231700fe779ecddfc0e5db544bbb28ce12b6671476d5a381527f2f4d1362392c6748a4a6fc306702fa3d34ad4dbc19516af6f3ca88a49b5fcd6560208201529051805160009061071657610716611823565b602002602001018190525060405180604001604052807f0ea4fcf479f44c8de13564587de40f103aa1a2f548e53e968a3fed704242ae5a81526020017f136d9c82fd0a33c865be1a01a9378ff3b511bbb17932bf13943ff261cbaedd9f815250816080015160018151811061078d5761078d611823565b602002602001018190525060405180604001604052807f10cf80cb888fc063db4d263eb28b0b5ff76b48a1f9fa1ffc48ad473d7a51558281526020017f126e66bbf7f8ca3ebb9edb882fb6865e237852b156848fb1a1d9946fad3c085c815250816080015160028151811061080457610804611823565b602002602001018190525060405180604001604052807f1aeb52cb91e72a1094ebdedd60bd8eb67c89b14f8f179dfd3bef5ffd3dcee51e81526020017f30066f5fa4e43bc3a68bbb93cf2e1be0f79c9acf842bc5bf304ddac02048bda6815250816080015160038151811061087b5761087b611823565b602002602001018190525060405180604001604052807f1498c36d9bc15066867ca9b491ea296a441d1fe924edc5e878d6181536c73a3f81526020017f159cf0c7707ee85a6a4b46de217f54df326634ef57e68e4c9f8ec492474a5cd381525081608001516004815181106108f2576108f2611823565b602002602001018190525060405180604001604052807f1582db4a3bb475988001aa6403f5fab22ca7193b28d42c46197baed583a4558d81526020017f05861abb3716d765c56054e9611b36a4549d5f6697994798966d14bdf9ce7dc6815250816080015160058151811061096957610969611823565b602002602001018190525060405180604001604052807f23120aacf80dfe28d6b6a6e2de0f3558f930aaef85df325e5680ca8f3ac2c25a81526020017f1f16db56e7a4dc993555237605b72f001c3e1770117ecf6756465863ecdb770f81525081608001516006815181106109e0576109e0611823565b602002602001018190525060405180604001604052807f28a72186d5f5417fcc37200ca0d278d5474ac13a2a9749f26ab171bcaa9a2f0781526020017f08feec9d20a4269c6fc310a7e294d1d7d70fd8cc329f757d51f5e4fe2554ac2a8152508160800151600781518110610a5757610a57611823565b602002602001018190525060405180604001604052807f06ad2e31ca7018dd6083842668e1e81c26d43c41eb1e6b8e76c52a7875b8d89a81526020017f2695a834c7a74705c62f21cf59e1729f4fc6f9a5e819451f1c5b9f3a2a8c4b478152508160800151600881518110610ace57610ace611823565b602002602001018190525060405180604001604052807f1d42f613879f2e14dcaf87bd19e100ab64177355da4e00914ef13b82d814936581526020017f0421af449846ccb94431c8fcfc2b94874caf6070278c1bda7b80dad2fd65052d8152508160800151600981518110610b4557610b45611823565b602002602001018190525060405180604001604052807f16f4ec75e888e1615875143cb96048a84133dd4246fc19e3483c97825bfe4ffa81526020017f2dc3af2f0c38282c96d9fe10f7fae746c4df7937124e1f2c97ad5eeec68f0fba8152508160800151600a81518110610bbc57610bbc611823565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610bf88160036117d5565b8180610c0657610c0661180d565b84518380610c1657610c1661180d565b86518009098280610c2957610c2961180d565b60208601518009610c3a91906117a3565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d2928592839283928392610cb292909190829060015b6020020151611307565b895180516020820151939750919550610cd7929060005b60200201518b516001610ca8565b89519193509150610ced90839083906000610cc9565b9092509050610cfe84848484611388565b9094509250610d0f84848888611388565b909450925083158015610d20575082155b98975050505050505050565b6040805180820190915260008082526020820152610d4861149a565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b5080610da157604051633842fc7360e21b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610dc56114b8565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b57610d82565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790610e63576040518060400160405280828560000151610e5291906117d5565b815260006020909101529392505050565b6040518060400160405280828560000151610e7e91906117d5565b8152602001828560200151610e9391906117d5565b610e9d90846117a3565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a6000015181600081518110610ee757610ee7611823565b6020026020010181815250508a6020015181600181518110610f0b57610f0b611823565b602090810291909101015289516001602002015181600281518110610f3257610f32611823565b6020908102919091010152895151815182906003908110610f5557610f55611823565b6020026020010181815250508960200151600160028110610f7857610f78611823565b602002015181600481518110610f9057610f90611823565b6020026020010181815250508960200151600060028110610fb357610fb3611823565b602002015181600581518110610fcb57610fcb611823565b602002602001018181525050886000015181600681518110610fef57610fef611823565b60200260200101818152505088602001518160078151811061101357611013611823565b60209081029190910101528751600160200201518160088151811061103a5761103a611823565b602090810291909101015287515181518290600990811061105d5761105d611823565b602002602001018181525050876020015160016002811061108057611080611823565b602002015181600a8151811061109857611098611823565b60200260200101818152505087602001516000600281106110bb576110bb611823565b602002015181600b815181106110d3576110d3611823565b602002602001018181525050866000015181600c815181106110f7576110f7611823565b602002602001018181525050866020015181600d8151811061111b5761111b611823565b602090810291909101015285516001602002015181600e8151811061114257611142611823565b602090810291909101015285515181518290600f90811061116557611165611823565b602002602001018181525050856020015160016002811061118857611188611823565b6020020151816010815181106111a0576111a0611823565b60200260200101818152505085602001516000600281106111c3576111c3611823565b6020020151816011815181106111db576111db611823565b6020026020010181815250508460000151816012815181106111ff576111ff611823565b60200260200101818152505084602001518160138151811061122357611223611823565b60209081029190910101528351600160200201518160148151811061124a5761124a611823565b602090810291909101015283515181518290601590811061126d5761126d611823565b602002602001018181525050836020015160016002811061129057611290611823565b6020020151816016815181106112a8576112a8611823565b60200260200101818152505083602001516000600281106112cb576112cb611823565b6020020151816017815181106112e3576112e3611823565b6020026020010181815250506112f8816113d0565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476113498186890982806113405761134061180d565b86890983611425565b81806113575761135761180d565b82806113655761136561180d565b87890983806113765761137661180d565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476113b7878683611425565b6113c2878684611425565b925092505094509492505050565b80516000906113dd6114d6565b6000602082602085026020880160086107d05a03fa905080801561002b57508061141a57604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b600081806114355761143561180d565b61143f84846117a3565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016114736114f4565b81526020016114806114f4565b815260200161148d6114f4565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611507611519565b8152602001611514611519565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261154857600080fd5b61155061173f565b80838560408601111561156257600080fd5b60005b6002811015611584578135845260209384019390910190600101611565565b509095945050505050565b600082601f8301126115a057600080fd5b8135602067ffffffffffffffff808311156115bd576115bd611839565b8260051b604051601f19603f830116810181811084821117156115e2576115e2611839565b6040528481528381019250868401828801850189101561160157600080fd5b600092505b85831015611624578035845292840192600192909201918401611606565b50979650505050505050565b60006040828403121561164257600080fd5b6040516040810181811067ffffffffffffffff8211171561166557611665611839565b604052823581526020928301359281019290925250919050565b60008082840361012081121561169457600080fd5b610100808212156116a457600080fd5b6116ac611768565b6116b68787611630565b81526080603f19840112156116ca57600080fd5b6116d261173f565b92506116e18760408801611537565b83526116f08760808801611537565b60208401528260208201526117088760c08801611630565b60408201529350840135905067ffffffffffffffff81111561172957600080fd5b6117358582860161158f565b9150509250929050565b6040805190810167ffffffffffffffff8111828210171561176257611762611839565b60405290565b6040516060810167ffffffffffffffff8111828210171561176257611762611839565b6000821982111561179e5761179e6117f7565b500190565b6000828210156117b5576117b56117f7565b500390565b60006000198214156117ce576117ce6117f7565b5060010190565b6000826117f257634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e98551c08005edc25fb342434df30d1490d813e88d844b015ac8b5e08e44cb5e64736f6c63430008070033';

type Transaction2x1VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction2x1VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction2x1Verifier__factory extends ContractFactory {
  constructor(...args: Transaction2x1VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction2x1Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction2x1Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction2x1Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction2x1Verifier {
    return super.attach(address) as Transaction2x1Verifier;
  }
  connect(signer: Signer): Transaction2x1Verifier__factory {
    return super.connect(signer) as Transaction2x1Verifier__factory;
  }
  static readonly contractName: 'Transaction2x1Verifier';
  public readonly contractName: 'Transaction2x1Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction2x1VerifierInterface {
    return new utils.Interface(_abi) as Transaction2x1VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction2x1Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction2x1Verifier;
  }
}
