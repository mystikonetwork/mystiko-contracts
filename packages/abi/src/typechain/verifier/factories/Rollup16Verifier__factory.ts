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
  '0x608060405234801561001057600080fd5b5061158d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e3660046113f4565b610057565b604051901515815260200160405180910390f35b6000815160041461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008e565b90505b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100ba610401565b9050806080015151855160016100d091906114ca565b146100ee57604051633494a40d60e21b815260040160405180910390fd5b835151821161011057604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013557604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015b57604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018357604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101ab57604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d557604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101fa57604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022257604051633494a40d60e21b815260040160405180910390fd5b835161022d90610901565b61024a576040516361586bdd60e01b815260040160405180910390fd5b6102578460200151610979565b610274576040516361586bdd60e01b815260040160405180910390fd5b6102818460400151610901565b61029e576040516361586bdd60e01b815260040160405180910390fd5b60006102de604051806040016040528060008152602001600081525083608001516000815181106102d1576102d16114dd565b6020026020010151610a63565b905060005b865181101561038e57838782815181106102ff576102ff6114dd565b60200260200101511061032557604051633494a40d60e21b815260040160405180910390fd5b61037a82610375856080015184600161033e91906114ca565b8151811061034e5761034e6114dd565b60200260200101518a8581518110610368576103686114dd565b6020026020010151610ae3565b610a63565b915080610386816114f3565b9150506102e3565b5061039881610901565b6103b5576040516361586bdd60e01b815260040160405180910390fd5b6103f7856000015186602001516103cb84610b31565b85604001516103dd8a60400151610b31565b606088015188516103ed90610b31565b8960200151610be2565b9695505050505050565b610409611189565b6040805180820182527f01466d75545a3e41948e235b89b959934454d2df2c4deeeb56e3e585b6ede56a81527f1b9748cff672f36b22d9fcaf62b0b72d0208a694623f1096507a31bc87eb02206020808301919091529083528151608080820184527f2e99e7c4d47c4de2a6d41733dcb1a71b187b73fae61b1373c503f4f838b70ad78285019081527f279a8aefff628bab3c3baf41c45228797900eebe4027624a0ba76a553249930d606080850191909152908352845180860186527f10c34e4d26c9eaf34051406206f5697d517aad45f9d427a59fb7fa540d18414681527f026fe90695fbae62743722d24094dbaf7576f85a5726976640853bab5965b612818601528385015285840192909252835180820185527f2b3beeb485f68af782c5f0110ac2682764a681e53ed5b88458c5d53ada90ceef8186019081527f16c2fbb9e29f90d1bf78a1dfb2ca428f88acd07800c2cd314558bfe947e51ec0828501528152845180860186527f0f8e3466639ac78083920942ced0d099c3c44dfa1a0fc1c86fcf604f491bb7a381527f100be80216e127275db17d81d0bf988c2c52ae6eacaf4db2d5c5f62d5b73239d818601528185015285850152835190810184527f2bb8743046b7a50bb7e662bf714b5a5d2efc71535851a9c7883fb102aeb8dbee8185019081527f0634f89dece0c7e02dc9f1af84e5ec826c68315cb78362954b06f1a024fe4046828401528152835180850185527f16ad072fecffbdd33ba9974b0ae556c4e7ca8b9d3cce99c6ce9bacb0809dbd5281527f1de61bc752f498c2eb66215d37049ba1fc81cebef146bf9668821f15b8e0069c8185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068457505060808201908152604080518082019091527f2665ef3d43764c4c6c83b291e27438b1f15f84d26321f0bd3aee997597faad5e81527f02f49b3d16d31b606e8c790459ed49e3e108d4655c081886ac9fd146d098d585602082015290518051600090610717576107176114dd565b602002602001018190525060405180604001604052807f24bd7ff6421e09ff10b3d294e6d7437048b197318955a96e5d6bc1314113b21181526020017f1e7e81f8cc88146bbb2354ed14d511b06a525350b1ee8f70b777bade86eddf6d815250816080015160018151811061078e5761078e6114dd565b602002602001018190525060405180604001604052807f2b1df994759dd741c4342f64faa569718d0865a5d67dabf12ac8ae85181071e281526020017f073d3c8f00c5782d3d2c9fc880da9e26df3cf6e367578f0cec2b86b191be3e448152508160800151600281518110610805576108056114dd565b602002602001018190525060405180604001604052807f122ac0a4d8f48f3c1e34d3847573e238d3a13333aabfc6fc11cf94210121d03a81526020017f082e2df740bdd387e72af0a1ef00f26a51dfe8f105af63b3d141741f31a15d89815250816080015160038151811061087c5761087c6114dd565b602002602001018190525060405180604001604052807f1de398e92e23b8333c7ea39005a2dc65d0698119a76e0f7880c1ce7661b9d33781526020017f03671ef8cc40a264ffdf39cca7f95844a3f8607803a0065da710486a7dde617e81525081608001516004815181106108f3576108f36114dd565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761092f816003611522565b818061093d5761093d61150c565b8451838061094d5761094d61150c565b865180090982806109605761096061150c565b602086015180096109719190611544565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926109e992909190829060015b6020020151611043565b895180516020820151939750919550610a0e929060005b60200201518b5160016109df565b89519193509150610a2490839083906000610a00565b9092509050610a35848484846110c4565b9094509250610a46848488886110c4565b909450925083158015610a57575082155b98975050505050505050565b6040805180820190915260008082526020820152610a7f6111da565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080610abc57600080fd5b5080610adb57604051633842fc7360e21b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610aff6111f8565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508080610abc57600080fd5b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790600003610b9f576040518060400160405280828560000151610b8e9190611522565b815260006020909101529392505050565b6040518060400160405280828560000151610bba9190611522565b8152602001828560200151610bcf9190611522565b610bd99084611544565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a6000015181600081518110610c2357610c236114dd565b6020026020010181815250508a6020015181600181518110610c4757610c476114dd565b602090810291909101015289516001602002015181600281518110610c6e57610c6e6114dd565b6020908102919091010152895151815182906003908110610c9157610c916114dd565b6020026020010181815250508960200151600160028110610cb457610cb46114dd565b602002015181600481518110610ccc57610ccc6114dd565b6020026020010181815250508960200151600060028110610cef57610cef6114dd565b602002015181600581518110610d0757610d076114dd565b602002602001018181525050886000015181600681518110610d2b57610d2b6114dd565b602002602001018181525050886020015181600781518110610d4f57610d4f6114dd565b602090810291909101015287516001602002015181600881518110610d7657610d766114dd565b6020908102919091010152875151815182906009908110610d9957610d996114dd565b6020026020010181815250508760200151600160028110610dbc57610dbc6114dd565b602002015181600a81518110610dd457610dd46114dd565b6020026020010181815250508760200151600060028110610df757610df76114dd565b602002015181600b81518110610e0f57610e0f6114dd565b602002602001018181525050866000015181600c81518110610e3357610e336114dd565b602002602001018181525050866020015181600d81518110610e5757610e576114dd565b602090810291909101015285516001602002015181600e81518110610e7e57610e7e6114dd565b602090810291909101015285515181518290600f908110610ea157610ea16114dd565b6020026020010181815250508560200151600160028110610ec457610ec46114dd565b602002015181601081518110610edc57610edc6114dd565b6020026020010181815250508560200151600060028110610eff57610eff6114dd565b602002015181601181518110610f1757610f176114dd565b602002602001018181525050846000015181601281518110610f3b57610f3b6114dd565b602002602001018181525050846020015181601381518110610f5f57610f5f6114dd565b602090810291909101015283516001602002015181601481518110610f8657610f866114dd565b6020908102919091010152835151815182906015908110610fa957610fa96114dd565b6020026020010181815250508360200151600160028110610fcc57610fcc6114dd565b602002015181601681518110610fe457610fe46114dd565b6020026020010181815250508360200151600060028110611007576110076114dd565b60200201518160178151811061101f5761101f6114dd565b6020026020010181815250506110348161110c565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761108581868909828061107c5761107c61150c565b86890983611165565b81806110935761109361150c565b82806110a1576110a161150c565b87890983806110b2576110b261150c565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476110f3878683611165565b6110fe878684611165565b925092505094509492505050565b8051600090611119611216565b6000602082602085026020880160086107d05a03fa9050808061113b57600080fd5b508061115a57604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b600081806111755761117561150c565b61117f8484611544565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111b3611234565b81526020016111c0611234565b81526020016111cd611234565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611247611259565b8152602001611254611259565b905290565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156112b0576112b0611277565b60405290565b6040516060810167ffffffffffffffff811182821017156112b0576112b0611277565b6000604082840312156112eb57600080fd5b6112f361128d565b9050813581526020820135602082015292915050565b600082601f83011261131a57600080fd5b61132261128d565b80604084018581111561133457600080fd5b845b8181101561134e578035845260209384019301611336565b509095945050505050565b600082601f83011261136a57600080fd5b8135602067ffffffffffffffff8083111561138757611387611277565b8260051b604051601f19603f830116810181811084821117156113ac576113ac611277565b6040529384528581018301938381019250878511156113ca57600080fd5b83870191505b848210156113e9578135835291830191908301906113d0565b979650505050505050565b60008082840361012081121561140957600080fd5b6101008082121561141957600080fd5b6114216112b6565b61142b87876112d9565b81526080603f198401121561143f57600080fd5b61144761128d565b92506114568760408801611309565b83526114658760808801611309565b602084015282602082015261147d8760c088016112d9565b60408201529350840135905067ffffffffffffffff81111561149e57600080fd5b6114aa85828601611359565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610088576100886114b4565b634e487b7160e01b600052603260045260246000fd5b600060018201611505576115056114b4565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261153f57634e487b7160e01b600052601260045260246000fd5b500690565b81810381811115610088576100886114b456fea26469706673582212203d23659b80d80ddb602b70f1558b47fe40193b233255ab473830eb7a4ac62e6464736f6c63430008140033';

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
