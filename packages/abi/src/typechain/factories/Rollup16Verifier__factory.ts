/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Rollup16Verifier, Rollup16VerifierInterface } from '../Rollup16Verifier';

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
  '0x608060405234801561001057600080fd5b506115b8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e3660046113b2565b610057565b604051901515815260200160405180910390f35b6000815160041461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce91906114be565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b906108fd565b610248576040516361586bdd60e01b815260040160405180910390fd5b6102558460200151610975565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f84604001516108fd565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf611556565b6020026020010151610a5f565b905060005b865181101561038c57838782815181106102fd576102fd611556565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c91906114be565b8151811061034c5761034c611556565b60200260200101518a858151811061036657610366611556565b6020026020010151610adc565b610a5f565b915080610384816114ed565b9150506102e1565b50610396816108fd565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c984610b2b565b85604001516103db8a60400151610b2b565b606088015188516103eb90610b2b565b8960200151610bd9565b9695505050505050565b61040761117c565b6040805180820182527f2c7762da39e2ff9080ee45e041a3996dd29724409a43c76b391eccf69ff3f15581527f0a756a28ebf393811037011e9ef58fe5add285c96b101ea0564902becf5c6f6d6020808301919091529083528151608080820184527f1ec57cd391b5b1c076a1f336feeb767beed5659342bcbac282321d016d1473008285019081527ebff69f46c8e63d920a41d61bdad806803b626a6fd9e5951175a815e38a05e3606080850191909152908352845180860186527f156fb68f14345a7bf01fa4138363127072aeb10109367755b0aae324c3dce7a081527f0435b887e6fe26abbe5763905dde6c596c45399dee8b953b45b9b721e7d83678818601528385015285840192909252835180820185527f2211449dd60484d52efdb8454a773dc3dee68d1cd891d2b7228d05cc1b8035188186019081527f181c1d5999ccb8192ed564bba377d6a451616780daa4b8056379c0e32e443d54828501528152845180860186527f0bb0c41e139b520483fd0064d8f94cf20ddb629526ca57c225f448c95cbfd06d81527f2c741a5581e9c7613205b43708e6ce2b518bccfc82d775c47418d9743756d404818601528185015285850152835190810184527f17337aefad3eb9db6105ab4f27a4541c8558d90cba1894855751f87a210d08be8185019081527f1a713b71b7c4fd2d9d1c9fb8e8dbece402d164b3d0653e587f86ae354f70f8de828401528152835180850185527f119276e04ee9b47b06227d3bf5876900209a929e23a9dfab015f7d69c6b1669581527f1f96a989bf9dfb99a437150ebeac4ae6f33f45684cbb969af9ea88f01a8d63bc8185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068157505060808201908152604080518082019091527f10de3d72cbe5ff6166f4e74c6a534a0b5c8bab8ae4867595bf87fbbd4ad199b381527f158d89b6cfc41c020369ccc5001070cc2f0ee1b3924808e7ea7d510f64fc9b7a60208201529051805160009061071457610714611556565b602002602001018190525060405180604001604052807f0397014db138e08ad92767d0a1b9c2caf8dedb67de6e13f58fbcd79e95fd332981526020017f07372776e40fb4627be6e9b02109a5e3ce469238df8ee0412c170f48fa0d4108815250816080015160018151811061078b5761078b611556565b602002602001018190525060405180604001604052807f0ed847f8c6f88d219733b89c903679d884a446e76ca0c3ab3c44938894352a6e81526020017f0d124ae18c762d1918e8c14a4eb1b39cb3456c3bedbac793263c826eeed24b62815250816080015160028151811061080257610802611556565b602002602001018190525060405180604001604052807f0dcb9ad9a728d8dfeed4dafb5bb1d9d0dc0da12131c80cada397cc18ca7f6ebf81526020017eb8c989a8fd0f482731c55c1af8180afe33e1d98123f40a8438e1445569dcdd815250816080015160038151811061087857610878611556565b602002602001018190525060405180604001604052807f2c282c015f7ee2e6e029cc9c2f1964796c5bb975b97fd16a526ee56271c7d1ec81526020017f25becb5c200e8659c99df32e88d9bec41ad5f8b4c27563a3d22e859c9841227081525081608001516004815181106108ef576108ef611556565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761092b816003611508565b818061093957610939611540565b8451838061094957610949611540565b8651800909828061095c5761095c611540565b6020860151800961096d91906114d6565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926109e592909190829060015b602002015161103a565b895180516020820151939750919550610a0a929060005b60200201518b5160016109db565b89519193509150610a20908390839060006109fc565b9092509050610a31848484846110bb565b9094509250610a42848488886110bb565b909450925083158015610a53575082155b98975050505050505050565b6040805180820190915260008082526020820152610a7b6111cd565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b5080610ad457604051633842fc7360e21b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610af86111eb565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b57610ab5565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790610b96576040518060400160405280828560000151610b859190611508565b815260006020909101529392505050565b6040518060400160405280828560000151610bb19190611508565b8152602001828560200151610bc69190611508565b610bd090846114d6565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a6000015181600081518110610c1a57610c1a611556565b6020026020010181815250508a6020015181600181518110610c3e57610c3e611556565b602090810291909101015289516001602002015181600281518110610c6557610c65611556565b6020908102919091010152895151815182906003908110610c8857610c88611556565b6020026020010181815250508960200151600160028110610cab57610cab611556565b602002015181600481518110610cc357610cc3611556565b6020026020010181815250508960200151600060028110610ce657610ce6611556565b602002015181600581518110610cfe57610cfe611556565b602002602001018181525050886000015181600681518110610d2257610d22611556565b602002602001018181525050886020015181600781518110610d4657610d46611556565b602090810291909101015287516001602002015181600881518110610d6d57610d6d611556565b6020908102919091010152875151815182906009908110610d9057610d90611556565b6020026020010181815250508760200151600160028110610db357610db3611556565b602002015181600a81518110610dcb57610dcb611556565b6020026020010181815250508760200151600060028110610dee57610dee611556565b602002015181600b81518110610e0657610e06611556565b602002602001018181525050866000015181600c81518110610e2a57610e2a611556565b602002602001018181525050866020015181600d81518110610e4e57610e4e611556565b602090810291909101015285516001602002015181600e81518110610e7557610e75611556565b602090810291909101015285515181518290600f908110610e9857610e98611556565b6020026020010181815250508560200151600160028110610ebb57610ebb611556565b602002015181601081518110610ed357610ed3611556565b6020026020010181815250508560200151600060028110610ef657610ef6611556565b602002015181601181518110610f0e57610f0e611556565b602002602001018181525050846000015181601281518110610f3257610f32611556565b602002602001018181525050846020015181601381518110610f5657610f56611556565b602090810291909101015283516001602002015181601481518110610f7d57610f7d611556565b6020908102919091010152835151815182906015908110610fa057610fa0611556565b6020026020010181815250508360200151600160028110610fc357610fc3611556565b602002015181601681518110610fdb57610fdb611556565b6020026020010181815250508360200151600060028110610ffe57610ffe611556565b60200201518160178151811061101657611016611556565b60200260200101818152505061102b81611103565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761107c81868909828061107357611073611540565b86890983611158565b818061108a5761108a611540565b828061109857611098611540565b87890983806110a9576110a9611540565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476110ea878683611158565b6110f5878684611158565b925092505094509492505050565b8051600090611110611209565b6000602082602085026020880160086107d05a03fa905080801561002b57508061114d57604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b6000818061116857611168611540565b61117284846114d6565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111a6611227565b81526020016111b3611227565b81526020016111c0611227565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b604051806040016040528061123a61124c565b815260200161124761124c565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261127b57600080fd5b611283611472565b80838560408601111561129557600080fd5b60005b60028110156112b7578135845260209384019390910190600101611298565b509095945050505050565b600082601f8301126112d357600080fd5b8135602067ffffffffffffffff808311156112f0576112f061156c565b8260051b604051601f19603f830116810181811084821117156113155761131561156c565b6040528481528381019250868401828801850189101561133457600080fd5b600092505b85831015611357578035845292840192600192909201918401611339565b50979650505050505050565b60006040828403121561137557600080fd5b6040516040810181811067ffffffffffffffff821117156113985761139861156c565b604052823581526020928301359281019290925250919050565b6000808284036101208112156113c757600080fd5b610100808212156113d757600080fd5b6113df61149b565b6113e98787611363565b81526080603f19840112156113fd57600080fd5b611405611472565b9250611414876040880161126a565b8352611423876080880161126a565b602084015282602082015261143b8760c08801611363565b60408201529350840135905067ffffffffffffffff81111561145c57600080fd5b611468858286016112c2565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156114955761149561156c565b60405290565b6040516060810167ffffffffffffffff811182821017156114955761149561156c565b600082198211156114d1576114d161152a565b500190565b6000828210156114e8576114e861152a565b500390565b60006000198214156115015761150161152a565b5060010190565b60008261152557634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212207ed77e9860bd628afdeda64b444a88facd3c74929095922eaaa388abba70e67564736f6c63430008070033';

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
