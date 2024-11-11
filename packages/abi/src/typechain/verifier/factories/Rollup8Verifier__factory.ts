/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Rollup8Verifier, Rollup8VerifierInterface } from '../Rollup8Verifier';

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
  '0x6080604052348015600f57600080fd5b5061157b8061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e3660046113fa565b610057565b604051901515815260200160405180910390f35b6000815160041461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008e565b90505b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100ba6103f7565b9050806080015151855160016100d091906114d1565b146100ee57604051633494a40d60e21b815260040160405180910390fd5b835151821161011057604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013557604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015b57604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018357604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101ab57604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d557604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101fa57604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022257604051633494a40d60e21b815260040160405180910390fd5b835161022d906108f7565b61024a576040516361586bdd60e01b815260040160405180910390fd5b610257846020015161096f565b610274576040516361586bdd60e01b815260040160405180910390fd5b61028184604001516108f7565b61029e576040516361586bdd60e01b815260040160405180910390fd5b60006102de604051806040016040528060008152602001600081525083608001516000815181106102d1576102d16114e4565b6020026020010151610a59565b905060005b865181101561038457838782815181106102ff576102ff6114e4565b60200260200101511061032557604051633494a40d60e21b815260040160405180910390fd5b61037a82610375856080015184600161033e91906114d1565b8151811061034e5761034e6114e4565b60200260200101518a8581518110610368576103686114e4565b6020026020010151610ad9565b610a59565b91506001016102e3565b5061038e816108f7565b6103ab576040516361586bdd60e01b815260040160405180910390fd5b6103ed856000015186602001516103c184610b27565b85604001516103d38a60400151610b27565b606088015188516103e390610b27565b8960200151610bd8565b9695505050505050565b6103ff61117f565b6040805180820182527f1e544ce14c454ea604a9307c6a4ea4ec4f99d21870b253b15b5489eec64c3e1b81527f09dc1b345cf3bc3187e3b42dc471414a4f330bedc082ba127a91a5f4a00d13ac6020808301919091529083528151608080820184527f1a18cc3549c0dc294c58a4aa4df87ab1ae0c50025483954c119f70e8579adbea8285019081527f3042f66c234dd78ea9a231f07e637ec4aff86a636968ffe3c37e7305bfd6d876606080850191909152908352845180860186527f171506a1c6383196d88bec16ca6be15d21241bb1a049352a4c9bb5e24ccb687881527f28adaf890b740a61452352bf983df4bb65f306869d635588939b424c21981edd818601528385015285840192909252835180820185527f2dc3d3ac5353dd22f6bb216f0f9f4b99a0fee5967fdc7c9f6ec57498d118fdd88186019081527f129bbfe6791d44663e55daf8b6494723faffa2de031d31fd2669741e560ca64a828501528152845180860186527f281a84414817a4adbb980286f47c9e615ce74eb920d98cd5a1c82b4293ac1c5481527f2d9d38b431c083a61d5e069877febb8e4971d237f3fe71cfd57c48c03b8a9449818601528185015285850152835190810184527f25e9f2d5c9eba6fedb6a500f94a086ad880cc5e1cdeff66f573418989b7de9508185019081527f012ec27787cf1bc712b306e1a67d9b84874e0ca38e0bbc9ccc8d37eb8bcac90f828401528152835180850185527f22eeb03d0a570dc080a28c7029beb7076895817c64e55b80587a57eef6f7a48e81527f015808ed9bd3cf1c54497ac484b85f896550183a748ad30edb979330b95e4e898185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161067a57505060808201908152604080518082019091527f1f95aad6c1d587a35727705214d2769ad14ea077c8a4ba8ab8592783869a729481527f1d70f227286f93ac2204ac63fe4c7601df95955fdd11dc2cb8a3dbb60b1f6d6260208201529051805160009061070d5761070d6114e4565b602002602001018190525060405180604001604052807f12a67eeabf2d9cd0c6b5d3ffc561e761f6368e8c5e24af3c8de28e37cf40913d81526020017f13480937153499e50b87fd6927b25ec074f11e4e18e0529bb6b6bc24cb931a1d8152508160800151600181518110610784576107846114e4565b602002602001018190525060405180604001604052807f1ce21c200f70c18054e30f1a6c2cb6f0af7f36f6fc3a8815a2d81026895d99e081526020017f1d69a1536927bce071b033ffcd07d591903ffd18672ef86ed4744296b7215f9d81525081608001516002815181106107fb576107fb6114e4565b602002602001018190525060405180604001604052807f1cc15fd5bd8e08b08ae98afcc09571e424d37bb25a3443126b27c15e80afb76a81526020017f0685a3948d4674d5fe555e82c6b2c4bff210248f600e3b69b0eeaa5e1e8981a48152508160800151600381518110610872576108726114e4565b602002602001018190525060405180604001604052807f302f20dad0fe29bf3e026043d5de3b765a4d248b3fec100ffa4e4cfcfe746bb181526020017f0a7f63f750c893e79a99f2d556df65670e746cdb2be8db0c51a50bcd04e855d881525081608001516004815181106108e9576108e96114e4565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610925816003611510565b8180610933576109336114fa565b84518380610943576109436114fa565b86518009098280610956576109566114fa565b602086015180096109679190611532565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926109df92909190829060015b6020020151611039565b895180516020820151939750919550610a04929060005b60200201518b5160016109d5565b89519193509150610a1a908390839060006109f6565b9092509050610a2b848484846110ba565b9094509250610a3c848488886110ba565b909450925083158015610a4d575082155b98975050505050505050565b6040805180820190915260008082526020820152610a756111d0565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080610ab257600080fd5b5080610ad157604051633842fc7360e21b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610af56111ee565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508080610ab257600080fd5b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790600003610b95576040518060400160405280828560000151610b849190611510565b815260006020909101529392505050565b6040518060400160405280828560000151610bb09190611510565b8152602001828560200151610bc59190611510565b610bcf9084611532565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a6000015181600081518110610c1957610c196114e4565b6020026020010181815250508a6020015181600181518110610c3d57610c3d6114e4565b602090810291909101015289516001602002015181600281518110610c6457610c646114e4565b6020908102919091010152895151815182906003908110610c8757610c876114e4565b6020026020010181815250508960200151600160028110610caa57610caa6114e4565b602002015181600481518110610cc257610cc26114e4565b6020026020010181815250508960200151600060028110610ce557610ce56114e4565b602002015181600581518110610cfd57610cfd6114e4565b602002602001018181525050886000015181600681518110610d2157610d216114e4565b602002602001018181525050886020015181600781518110610d4557610d456114e4565b602090810291909101015287516001602002015181600881518110610d6c57610d6c6114e4565b6020908102919091010152875151815182906009908110610d8f57610d8f6114e4565b6020026020010181815250508760200151600160028110610db257610db26114e4565b602002015181600a81518110610dca57610dca6114e4565b6020026020010181815250508760200151600060028110610ded57610ded6114e4565b602002015181600b81518110610e0557610e056114e4565b602002602001018181525050866000015181600c81518110610e2957610e296114e4565b602002602001018181525050866020015181600d81518110610e4d57610e4d6114e4565b602090810291909101015285516001602002015181600e81518110610e7457610e746114e4565b602090810291909101015285515181518290600f908110610e9757610e976114e4565b6020026020010181815250508560200151600160028110610eba57610eba6114e4565b602002015181601081518110610ed257610ed26114e4565b6020026020010181815250508560200151600060028110610ef557610ef56114e4565b602002015181601181518110610f0d57610f0d6114e4565b602002602001018181525050846000015181601281518110610f3157610f316114e4565b602002602001018181525050846020015181601381518110610f5557610f556114e4565b602090810291909101015283516001602002015181601481518110610f7c57610f7c6114e4565b6020908102919091010152835151815182906015908110610f9f57610f9f6114e4565b6020026020010181815250508360200151600160028110610fc257610fc26114e4565b602002015181601681518110610fda57610fda6114e4565b6020026020010181815250508360200151600060028110610ffd57610ffd6114e4565b602002015181601781518110611015576110156114e4565b60200260200101818152505061102a81611102565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761107b818689098280611072576110726114fa565b8689098361115b565b8180611089576110896114fa565b8280611097576110976114fa565b87890983806110a8576110a86114fa565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476110e987868361115b565b6110f487868461115b565b925092505094509492505050565b805160009061110f61120c565b6000602082602085026020880160086107d05a03fa9050808061113157600080fd5b508061115057604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b6000818061116b5761116b6114fa565b6111758484611532565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111a961122a565b81526020016111b661122a565b81526020016111c361122a565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b604051806040016040528061123d61124f565b815260200161124a61124f565b905290565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156112a6576112a661126d565b60405290565b6040516060810167ffffffffffffffff811182821017156112a6576112a661126d565b604051601f8201601f1916810167ffffffffffffffff811182821017156112f8576112f861126d565b604052919050565b60006040828403121561131257600080fd5b61131a611283565b823581526020928301359281019290925250919050565b600082601f83011261134257600080fd5b61134a611283565b80604084018581111561135c57600080fd5b845b8181101561137657803584526020938401930161135e565b509095945050505050565b600082601f83011261139257600080fd5b813567ffffffffffffffff8111156113ac576113ac61126d565b8060051b6113bc602082016112cf565b918252602081850181019290810190868411156113d857600080fd5b6020860192505b838310156103ed5782358252602092830192909101906113df565b60008082840361012081121561140f57600080fd5b61010081121561141e57600080fd5b6114266112ac565b6114308686611300565b81526080603f198301121561144457600080fd5b61144c611283565b915061145b8660408701611331565b825261146a8660808701611331565b60208301528160208201526114828660c08701611300565b604082015292505061010083013567ffffffffffffffff8111156114a557600080fd5b6114b185828601611381565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610088576100886114bb565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b60008261152d57634e487b7160e01b600052601260045260246000fd5b500690565b81810381811115610088576100886114bb56fea26469706673582212204bcfa1641ad0f150001ac754d185e4e3bd81f8324ba843af1970e7eca36dcd1864736f6c634300081a0033';

type Rollup8VerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Rollup8VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rollup8Verifier__factory extends ContractFactory {
  constructor(...args: Rollup8VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Rollup8Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Rollup8Verifier> {
    return super.deploy(overrides || {}) as Promise<Rollup8Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Rollup8Verifier {
    return super.attach(address) as Rollup8Verifier;
  }
  connect(signer: Signer): Rollup8Verifier__factory {
    return super.connect(signer) as Rollup8Verifier__factory;
  }
  static readonly contractName: 'Rollup8Verifier';
  public readonly contractName: 'Rollup8Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Rollup8VerifierInterface {
    return new utils.Interface(_abi) as Rollup8VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Rollup8Verifier {
    return new Contract(address, _abi, signerOrProvider) as Rollup8Verifier;
  }
}
