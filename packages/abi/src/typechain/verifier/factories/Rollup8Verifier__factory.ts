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
  '0x608060405234801561001057600080fd5b506115ba806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e3660046113b4565b610057565b604051901515815260200160405180910390f35b6000815160041461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce91906114c0565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b906108ff565b610248576040516361586bdd60e01b815260040160405180910390fd5b6102558460200151610977565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f84604001516108ff565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf611558565b6020026020010151610a61565b905060005b865181101561038c57838782815181106102fd576102fd611558565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c91906114c0565b8151811061034c5761034c611558565b60200260200101518a858151811061036657610366611558565b6020026020010151610ade565b610a61565b915080610384816114ef565b9150506102e1565b50610396816108ff565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c984610b2d565b85604001516103db8a60400151610b2d565b606088015188516103eb90610b2d565b8960200151610bdb565b9695505050505050565b61040761117e565b6040805180820182527f0b0cb45bb3dcf2242b7f87eae31021b0e3f70a153edeebc412d4265f902a4eb381527f2a1e72a48cdbd3532c311303a20f69cf850bbd2cf491845438eb2f7deaae3b566020808301919091529083528151608080820184527f16db76d8fde8d68ff361b4c517a97f4883a8262a25714f84fdfe4ff67fabec8e8285019081527f093f88ba5993c2dc3cd903a4d87ca02caca7ebcef44b8b269b43fc079cfb648a606080850191909152908352845180860186527f300c0322af52f85b372ef295f260c3b1359cbb6203c429112ba4b0fb8b5b818981527f20f27c86e3f63e8d093f880fc1fab8840f04f9a287dd3292dd86460f24fa107c818601528385015285840192909252835180820185527f15ba3896b40afa24957f98fc929fdab22c722b9b0b1de250a12717a293f6ca2d8186019081527f14d483cf90c697b0ca18eb871522675b1bfb9631702540a735ba66dea063f0ae828501528152845180860186527f29fc7f6d523933373a38e2d372a6fe68c22be3b7d0339de5c974266236d7d39c81527f1458660e7da6042f090506569a519069047833912e91f390e408df88bbed8446818601528185015285850152835190810184527f23dd7a8f050d3b0a7560d0b888b4c8605f641a86ca8958bad34fcf7680023dec8185019081527f0be4ea9c26b02898c5fa9b1f827a6f365ad167a2071fb411e98cd4aefded3675828401528152835180850185527f260afd271600efeda25992092a8f977ffd980b8e9ac5bd09423ee57fbe0bee0b81527f0c1a52a18c105dc126fca4a031cab72b1fe6458dcef00b7f53111f677c48f2898185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068257505060808201908152604080518082019091527f1e10e00d14008a90a13a48198ff48cee3775307d759797580bbd78aa6c1d27e881527f163d001724d9646274e930f91a89613a4eae9c571604cde17febb6e1dab5e37460208201529051805160009061071557610715611558565b602002602001018190525060405180604001604052807f17d7c593dcae272ddd611b4d2d7d862cec026dd82fa4741241c8ac34915f5c3981526020017f1f3719b5d090826b2c50ca1de9a6746dea0b34ea35ab13828a06d6de261bb988815250816080015160018151811061078c5761078c611558565b602002602001018190525060405180604001604052807f1befa5a2261c1b98ce4f9dcdee59cd9bd35bfc5f43ce8037079e35c1e8128e1e81526020017f164cf0085d0957e775dc87576c32f943582a1eab94f6f03137d90f28f69c0c20815250816080015160028151811061080357610803611558565b602002602001018190525060405180604001604052807f2a2325f2b031a489e460ebb242020121a0757821c742a5c4b39893be48d8375d81526020017f194b4f8a528bffe377ba51418b260c9daeaa69c0000d138dd0511019743020fd815250816080015160038151811061087a5761087a611558565b602002602001018190525060405180604001604052807f24487b685c26c92d063b355263f13b950694f5f21bf692501532771d4690bf1281526020017f2c13de97426641304ae72bde576080fe37c15acd960ac0309c9ccdd0be3370e281525081608001516004815181106108f1576108f1611558565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761092d81600361150a565b818061093b5761093b611542565b8451838061094b5761094b611542565b8651800909828061095e5761095e611542565b6020860151800961096f91906114d8565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926109e792909190829060015b602002015161103c565b895180516020820151939750919550610a0c929060005b60200201518b5160016109dd565b89519193509150610a22908390839060006109fe565b9092509050610a33848484846110bd565b9094509250610a44848488886110bd565b909450925083158015610a55575082155b98975050505050505050565b6040805180820190915260008082526020820152610a7d6111cf565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b5080610ad657604051633842fc7360e21b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610afa6111ed565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b57610ab7565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790610b98576040518060400160405280828560000151610b87919061150a565b815260006020909101529392505050565b6040518060400160405280828560000151610bb3919061150a565b8152602001828560200151610bc8919061150a565b610bd290846114d8565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a6000015181600081518110610c1c57610c1c611558565b6020026020010181815250508a6020015181600181518110610c4057610c40611558565b602090810291909101015289516001602002015181600281518110610c6757610c67611558565b6020908102919091010152895151815182906003908110610c8a57610c8a611558565b6020026020010181815250508960200151600160028110610cad57610cad611558565b602002015181600481518110610cc557610cc5611558565b6020026020010181815250508960200151600060028110610ce857610ce8611558565b602002015181600581518110610d0057610d00611558565b602002602001018181525050886000015181600681518110610d2457610d24611558565b602002602001018181525050886020015181600781518110610d4857610d48611558565b602090810291909101015287516001602002015181600881518110610d6f57610d6f611558565b6020908102919091010152875151815182906009908110610d9257610d92611558565b6020026020010181815250508760200151600160028110610db557610db5611558565b602002015181600a81518110610dcd57610dcd611558565b6020026020010181815250508760200151600060028110610df057610df0611558565b602002015181600b81518110610e0857610e08611558565b602002602001018181525050866000015181600c81518110610e2c57610e2c611558565b602002602001018181525050866020015181600d81518110610e5057610e50611558565b602090810291909101015285516001602002015181600e81518110610e7757610e77611558565b602090810291909101015285515181518290600f908110610e9a57610e9a611558565b6020026020010181815250508560200151600160028110610ebd57610ebd611558565b602002015181601081518110610ed557610ed5611558565b6020026020010181815250508560200151600060028110610ef857610ef8611558565b602002015181601181518110610f1057610f10611558565b602002602001018181525050846000015181601281518110610f3457610f34611558565b602002602001018181525050846020015181601381518110610f5857610f58611558565b602090810291909101015283516001602002015181601481518110610f7f57610f7f611558565b6020908102919091010152835151815182906015908110610fa257610fa2611558565b6020026020010181815250508360200151600160028110610fc557610fc5611558565b602002015181601681518110610fdd57610fdd611558565b602002602001018181525050836020015160006002811061100057611000611558565b60200201518160178151811061101857611018611558565b60200260200101818152505061102d81611105565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761107e81868909828061107557611075611542565b8689098361115a565b818061108c5761108c611542565b828061109a5761109a611542565b87890983806110ab576110ab611542565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476110ec87868361115a565b6110f787868461115a565b925092505094509492505050565b805160009061111261120b565b6000602082602085026020880160086107d05a03fa905080801561002b57508061114f57604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b6000818061116a5761116a611542565b61117484846114d8565b8508949350505050565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111a8611229565b81526020016111b5611229565b81526020016111c2611229565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b604051806040016040528061123c61124e565b815260200161124961124e565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261127d57600080fd5b611285611474565b80838560408601111561129757600080fd5b60005b60028110156112b957813584526020938401939091019060010161129a565b509095945050505050565b600082601f8301126112d557600080fd5b8135602067ffffffffffffffff808311156112f2576112f261156e565b8260051b604051601f19603f830116810181811084821117156113175761131761156e565b6040528481528381019250868401828801850189101561133657600080fd5b600092505b8583101561135957803584529284019260019290920191840161133b565b50979650505050505050565b60006040828403121561137757600080fd5b6040516040810181811067ffffffffffffffff8211171561139a5761139a61156e565b604052823581526020928301359281019290925250919050565b6000808284036101208112156113c957600080fd5b610100808212156113d957600080fd5b6113e161149d565b6113eb8787611365565b81526080603f19840112156113ff57600080fd5b611407611474565b9250611416876040880161126c565b8352611425876080880161126c565b602084015282602082015261143d8760c08801611365565b60408201529350840135905067ffffffffffffffff81111561145e57600080fd5b61146a858286016112c4565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156114975761149761156e565b60405290565b6040516060810167ffffffffffffffff811182821017156114975761149761156e565b600082198211156114d3576114d361152c565b500190565b6000828210156114ea576114ea61152c565b500390565b60006000198214156115035761150361152c565b5060010190565b60008261152757634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212209949988fd24ee7a016bfaf13ebdf7a861caa097d5315c9f891656caaa6dc18f464736f6c63430008070033';

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