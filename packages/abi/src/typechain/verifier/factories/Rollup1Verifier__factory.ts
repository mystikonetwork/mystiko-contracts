/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Rollup1Verifier, Rollup1VerifierInterface } from '../Rollup1Verifier';

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
  '0x608060405234801561001057600080fd5b506115ba806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e3660046113b4565b610057565b604051901515815260200160405180910390f35b6000815160041461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce91906114c0565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b906108ff565b610248576040516361586bdd60e01b815260040160405180910390fd5b6102558460200151610977565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f84604001516108ff565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf611558565b6020026020010151610a61565b905060005b865181101561038c57838782815181106102fd576102fd611558565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c91906114c0565b8151811061034c5761034c611558565b60200260200101518a858151811061036657610366611558565b6020026020010151610ade565b610a61565b915080610384816114ef565b9150506102e1565b50610396816108ff565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c984610b2d565b85604001516103db8a60400151610b2d565b606088015188516103eb90610b2d565b8960200151610bdb565b9695505050505050565b61040761117e565b6040805180820182527f24cebde30b16773160dbd57f441d2ee6539749880045d1eb764aba381c56515481527f11cc1fb33ea648b878eb27c9291ba97054327c924b7d57c6929111df843c481c6020808301919091529083528151608080820184527f09da9d0669f537e57b6ca065b5ef288c76cd85da4ade2d69ee9640202826713d8285019081527f1f4790467ec0ecd1ea865f786bc59b3779e4f87e526e5fccc91b283db24c5948606080850191909152908352845180860186527f24ffec70dca2171e1f6ee54004598ac637252e67391a3a43d6c9382c4f24736a81527f300f0266e2831ca5a8c66cd1050a46aba8f9a379741438610220b41dad9b9df0818601528385015285840192909252835180820185527f1be8fb76ae1f811357f96472ac1cf46daecb83e06b095183dba7d69b82be5fb78186019081527f2ae800267f40325bf11ee7c420b3f2c8fe905d714971d4adbf3d8dd7ec722530828501528152845180860186527f0e671145c7bd4960c8bbd129e5c8fc3bec0e7b0219ad801fd263226200f782dc81527f1c5611ac4494153159608d2cf451fdc3325326c08e25c4e48cb859da0d597c47818601528185015285850152835190810184527f031ef8f147f20d79976da68a04f67a5272a85c120ecc289bd95d24369b0cb3998185019081527f1fd3cc1c237978a52f6d95b9c2960948bac68cc6a89c643b696f9afdacec20a8828401528152835180850185527f09809e37d71e6d0eecf5bfc313dfddf23507854d76fd12468c45c71521822c4b81527f2c938265fe44ff2ae86c3a0cb331f8770129c0b6d64b792ecb313149c0d1a9ae8185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068257505060808201908152604080518082019091527f03a08ef5a30b168486c7ba77b1c75676c86f660301cda72808fa6614a3ccbbc581527f12d43c81c98315257debf19959c948b09851f39ea716256f1ca1ee6dcdcfde5e60208201529051805160009061071557610715611558565b602002602001018190525060405180604001604052807f2598de405e2a544ad1372a457c2ffbda9517bf084b3d0dd11f7959321a9440eb81526020017f2bbafe91ab2e6e6bdd0628e4f3b27a597dafcf91b758e3cb693aacf23cbf2af3815250816080015160018151811061078c5761078c611558565b602002602001018190525060405180604001604052807f23c31982f45dcea1664a483ad076ee3e111f1d9c58a90bbc5d2609009a4298fd81526020017f2154ae01998ba8a3a430743600d6b85da4d439dfb3e3f335a33f3a594e279851815250816080015160028151811061080357610803611558565b602002602001018190525060405180604001604052807f2869ceb1a19e31feb7aecaa58fba547bcfb865e3282f08c43267da3ae1b380c681526020017f16a6fe2617f5a7cf0f391ae2bd76db5a1b521485508d01ecdbd3cd0a7c2e649f815250816080015160038151811061087a5761087a611558565b602002602001018190525060405180604001604052807f0bf22ea5a7c1c6ebc22d29a278fdd36d906b840bc4711c2ad0a258469dd87d7781526020017f07d5d87f301a730c40874d78a8f00154f8a2b17a5fa0b14c36f043c37b6e0b6181525081608001516004815181106108f1576108f1611558565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761092d81600361150a565b818061093b5761093b611542565b8451838061094b5761094b611542565b8651800909828061095e5761095e611542565b6020860151800961096f91906114d8565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926109e792909190829060015b602002015161103c565b895180516020820151939750919550610a0c929060005b60200201518b5160016109dd565b89519193509150610a22908390839060006109fe565b9092509050610a33848484846110bd565b9094509250610a44848488886110bd565b909450925083158015610a55575082155b98975050505050505050565b6040805180820190915260008082526020820152610a7d6111cf565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b5080610ad657604051633842fc7360e21b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610afa6111ed565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b57610ab7565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790610b98576040518060400160405280828560000151610b87919061150a565b815260006020909101529392505050565b6040518060400160405280828560000151610bb3919061150a565b8152602001828560200151610bc8919061150a565b610bd290846114d8565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a6000015181600081518110610c1c57610c1c611558565b6020026020010181815250508a6020015181600181518110610c4057610c40611558565b602090810291909101015289516001602002015181600281518110610c6757610c67611558565b6020908102919091010152895151815182906003908110610c8a57610c8a611558565b6020026020010181815250508960200151600160028110610cad57610cad611558565b602002015181600481518110610cc557610cc5611558565b6020026020010181815250508960200151600060028110610ce857610ce8611558565b602002015181600581518110610d0057610d00611558565b602002602001018181525050886000015181600681518110610d2457610d24611558565b602002602001018181525050886020015181600781518110610d4857610d48611558565b602090810291909101015287516001602002015181600881518110610d6f57610d6f611558565b6020908102919091010152875151815182906009908110610d9257610d92611558565b6020026020010181815250508760200151600160028110610db557610db5611558565b602002015181600a81518110610dcd57610dcd611558565b6020026020010181815250508760200151600060028110610df057610df0611558565b602002015181600b81518110610e0857610e08611558565b602002602001018181525050866000015181600c81518110610e2c57610e2c611558565b602002602001018181525050866020015181600d81518110610e5057610e50611558565b602090810291909101015285516001602002015181600e81518110610e7757610e77611558565b602090810291909101015285515181518290600f908110610e9a57610e9a611558565b6020026020010181815250508560200151600160028110610ebd57610ebd611558565b602002015181601081518110610ed557610ed5611558565b6020026020010181815250508560200151600060028110610ef857610ef8611558565b602002015181601181518110610f1057610f10611558565b602002602001018181525050846000015181601281518110610f3457610f34611558565b602002602001018181525050846020015181601381518110610f5857610f58611558565b602090810291909101015283516001602002015181601481518110610f7f57610f7f611558565b6020908102919091010152835151815182906015908110610fa257610fa2611558565b6020026020010181815250508360200151600160028110610fc557610fc5611558565b602002015181601681518110610fdd57610fdd611558565b602002602001018181525050836020015160006002811061100057611000611558565b60200201518160178151811061101857611018611558565b60200260200101818152505061102d81611105565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761107e81868909828061107557611075611542565b8689098361115a565b818061108c5761108c611542565b828061109a5761109a611542565b87890983806110ab576110ab611542565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476110ec87868361115a565b6110f787868461115a565b925092505094509492505050565b805160009061111261120b565b6000602082602085026020880160086107d05a03fa905080801561002b57508061114f57604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b6000818061116a5761116a611542565b61117484846114d8565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111a8611229565b81526020016111b5611229565b81526020016111c2611229565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b604051806040016040528061123c61124e565b815260200161124961124e565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261127d57600080fd5b611285611474565b80838560408601111561129757600080fd5b60005b60028110156112b957813584526020938401939091019060010161129a565b509095945050505050565b600082601f8301126112d557600080fd5b8135602067ffffffffffffffff808311156112f2576112f261156e565b8260051b604051601f19603f830116810181811084821117156113175761131761156e565b6040528481528381019250868401828801850189101561133657600080fd5b600092505b8583101561135957803584529284019260019290920191840161133b565b50979650505050505050565b60006040828403121561137757600080fd5b6040516040810181811067ffffffffffffffff8211171561139a5761139a61156e565b604052823581526020928301359281019290925250919050565b6000808284036101208112156113c957600080fd5b610100808212156113d957600080fd5b6113e161149d565b6113eb8787611365565b81526080603f19840112156113ff57600080fd5b611407611474565b9250611416876040880161126c565b8352611425876080880161126c565b602084015282602082015261143d8760c08801611365565b60408201529350840135905067ffffffffffffffff81111561145e57600080fd5b61146a858286016112c4565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156114975761149761156e565b60405290565b6040516060810167ffffffffffffffff811182821017156114975761149761156e565b600082198211156114d3576114d361152c565b500190565b6000828210156114ea576114ea61152c565b500390565b60006000198214156115035761150361152c565b5060010190565b60008261152757634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ae01cc39829288aaf52fd987e0f563c6fe2f386cf9902595ec14ff973928beb064736f6c63430008070033';

type Rollup1VerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Rollup1VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rollup1Verifier__factory extends ContractFactory {
  constructor(...args: Rollup1VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Rollup1Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Rollup1Verifier> {
    return super.deploy(overrides || {}) as Promise<Rollup1Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Rollup1Verifier {
    return super.attach(address) as Rollup1Verifier;
  }
  connect(signer: Signer): Rollup1Verifier__factory {
    return super.connect(signer) as Rollup1Verifier__factory;
  }
  static readonly contractName: 'Rollup1Verifier';
  public readonly contractName: 'Rollup1Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Rollup1VerifierInterface {
    return new utils.Interface(_abi) as Rollup1VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Rollup1Verifier {
    return new Contract(address, _abi, signerOrProvider) as Rollup1Verifier;
  }
}
