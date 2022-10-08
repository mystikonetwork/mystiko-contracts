/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Transaction1x0Verifier,
  Transaction1x0VerifierInterface,
} from "../Transaction1x0Verifier";

const _abi = [
  {
    inputs: [],
    name: "InvalidParam",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOnCurve",
    type: "error",
  },
  {
    inputs: [],
    name: "StaticCallFailed",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "a",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "X",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "Y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "b",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "c",
            type: "tuple",
          },
        ],
        internalType: "struct VerifierLib.Proof",
        name: "proof",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "input",
        type: "uint256[]",
      },
    ],
    name: "verifyTx",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611e8f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611c89565b610057565b604051901515815260200160405180910390f35b6000815160171461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce9190611d95565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b906111d4565b610248576040516361586bdd60e01b815260040160405180910390fd5b610255846020015161124c565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f84604001516111d4565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf611e2d565b6020026020010151611336565b905060005b865181101561038c57838782815181106102fd576102fd611e2d565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c9190611d95565b8151811061034c5761034c611e2d565b60200260200101518a858151811061036657610366611e2d565b60200260200101516113b3565b611336565b91508061038481611dc4565b9150506102e1565b50610396816111d4565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c984611402565b85604001516103db8a60400151611402565b606088015188516103eb90611402565b89602001516114b0565b9695505050505050565b610407611a53565b6040805180820182527f107dac8b53f44c8606d57a292c0f0df03dfd958696d0a524445e4f5cabc3adea81527f10c02d09d284c6243b02988416bc8e0cd52cf1bc89653f3b9ab076f1ea07806a6020808301919091529083528151608080820184527f07159b27712e4b16dbf3491efe5bc8938dcb23e751cead4c35fd8ca60902df2e8285019081527f1a717833bc51ddd0b21cf56f1e4d387676b4301814b009a209cfe14daa8e3629606080850191909152908352845180860186527f1b239c4fe18ea484ff25f1e83e4d5356e2e29db4e0ea92dbdbc00b2b17b5204981527f215b84f9fe3d99b59723ca20ff86c04a18c2919ad636bddc89fd2ba37322eef9818601528385015285840192909252835180820185527f300c2352fa50346118c2b5f2e6ddc60463b19a188b9ed0fa015fbd7456d908828186019081527f189b91d46979b143d0cbd905b9e874f394a41679e2cb1f9ed5cd4c4383041b79828501528152845180860186527f1744f4974898c878deb33afa168554556517451dd79d9c1dab6ce5f49fd8932681527f0e38fb0636a85d711a72f99ff14618aa595da201eda2ea913461ba3c54b86500818601528185015285850152835190810184527f24ed072b590607dea3d2b69717ac049d65e20506fc91aaf14f587b2b7aa376928185019081527f26a00241c2b142fa1ceb0ae37d1659f9218208f0902e1fc6c44f65ddff4315e3828401528152835180850185527f2ee492ba02de33d0b55c3025c3fdad3b8378624960c30e695b4a53ecf041c1db81527f148f04b946cc59cc1aa256e4220ed7b56700893331032ff40c2c2c165e5567c8818501528184015290840152815160188082526103208201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068357505060808201908152604080518082019091527f077b051feab749fede3afc2feedca6a49a65c4c8c7392ccc727b896f3a04932481527f253f3dd25d007dc73cf1f6ba4990b9f73728f7b9a870871a4bf490fd090a99a860208201529051805160009061071657610716611e2d565b602002602001018190525060405180604001604052807f21e85001d15e0a0d1d681c4267eb5be0b542d19cf70eb7686e29160d73913cd881526020017f22d28a0f05fedc87716184bae2ef814dabd505e2b9b6c35ba368f8fda2664fd0815250816080015160018151811061078d5761078d611e2d565b602002602001018190525060405180604001604052807f1f755e3ef7795eab88bdc94615542478929528a655e40ada144663efff53b71581526020017f2bf2e9380c46b3b7f811a348c95d93c0b5ea18b41ec67b58cdb04771f9af380c815250816080015160028151811061080457610804611e2d565b602002602001018190525060405180604001604052807f1f1c8e0a9b33c07935e7f8bfd678c237d6084e15dbf0067a45f7c74c61ee8b1881526020017f099940705ed1fe5ae30450a134190e2ad8c91a7509e83411beca1d6a22f9f511815250816080015160038151811061087b5761087b611e2d565b602002602001018190525060405180604001604052807f04890fe04a71cde34e71ad20df62b84e044f768178db9288da210f4267cce46381526020017f07856d65dbdaf581d02e90b0f9f7b3c82b55b2475e4ad7d3432ccf85f080367c81525081608001516004815181106108f2576108f2611e2d565b602002602001018190525060405180604001604052807f190ac0994c48e57d7414a9b4c8d0b85925a339d289033b3b97108bfb7fc16a5b81526020017eb6356c8eeb567448299da68c0cdc866e0d8a93f026cdc7ebce6e7ff287c79d815250816080015160058151811061096857610968611e2d565b602002602001018190525060405180604001604052807f05a234985afec6705b6ad02df9c730f2b1c4edb2caa638f514e9bcb3e75d8e3681526020017f2ae023feae828789b10ecf11e606db1c30af58a6819d9d21c95380e130d9d05081525081608001516006815181106109df576109df611e2d565b602002602001018190525060405180604001604052807f239c320d8abe0efdb38def6ac81c2a01ace528ffe946a43b9600b2d4934966ac81526020017f1dae0fdce83c9f49be05a4c44ccd41d057ff647536ed6f1a902bb42bad7bafce8152508160800151600781518110610a5657610a56611e2d565b602002602001018190525060405180604001604052807f0364ba41d22c0c16543325562b0fc8ba4ad7e311e0fb631b2cfe2d2e68d3534081526020017f12c25732b3c935ce208f511ae7bdc17a796bf6e5cfcc80be6398d4ee027cf3888152508160800151600881518110610acd57610acd611e2d565b602002602001018190525060405180604001604052807f1a466781801d5b7f40fc81e1704228e785b63e9d66f8d811c55afd9830f4beff81526020017f2b411b450c4f423cd9d0bee5055fa54b4ba75e351d54a395552ffa9a9097e5218152508160800151600981518110610b4457610b44611e2d565b602002602001018190525060405180604001604052807f0b22f92e2759b61920a2b19ca945990f563858087ad5fcae7d9458d444e91f3d81526020017f1ab1dfcec66a8c9373f81076f70dd6606220a7ab1702e3377cb0a6d084df9bd98152508160800151600a81518110610bbb57610bbb611e2d565b602002602001018190525060405180604001604052807f05ac1af65c29d3f637297f5dd4123c662a6249d5136f5b0553b5a4b26ae026ca81526020017f169c32598e972245ecae5790b71d2dd11e02d58cba1d333bdb346b29ee3700348152508160800151600b81518110610c3257610c32611e2d565b602002602001018190525060405180604001604052807f1fec2f4ea07adbbcad4519470d87165c755a732df41a72e01b90eb9a35b8b9f081526020017f1015a0df08a6d56c28acd24fb0163b071881277087fa159cc150c866f5b6f2c08152508160800151600c81518110610ca957610ca9611e2d565b602002602001018190525060405180604001604052807f1f47f55689b559b52ef0959c05af7a5db5b78f629f46e35384c56864950e343f81526020017f2ffeb91d65cd3f4eeeb7ea38efaf3c75b6ff9cbce11c454e42d2834fdf0f7ae48152508160800151600d81518110610d2057610d20611e2d565b602002602001018190525060405180604001604052807f0983c4113237bba4dc839e44a6676f09e334c2428fcf6d0024fa4a7c22c356c081526020017f22de6833020533a2a426e31f632aaa2b1d53dd4ba0b98a79c75d970dbe56ce748152508160800151600e81518110610d9757610d97611e2d565b602002602001018190525060405180604001604052807f267db56696135c1cefced53c0baac646fa5cc37aba7cc319639096cdb8819ca581526020017f25348f41d5e40996c16de2fd20eddb6f54caf802d8de73e0938be00a6201869a8152508160800151600f81518110610e0e57610e0e611e2d565b602002602001018190525060405180604001604052807f01c31bcfbfe2b7dc3ba8e5d2652f22e4ff46b04232402392a6193faed5ce851181526020017f06e4c55bc01237b9686e143301baf93f9c06c4aa0fa7af061b12af36b915c6ba8152508160800151601081518110610e8557610e85611e2d565b602002602001018190525060405180604001604052807f1625010dc079fd2aca6401e5633e5fdc1dcb4383d50f5e3d026fb656087a812281526020017f050f4811f942d9dd5f25acce94a43bfdcb8137bc81e2decb0ff97648c6c2c9b68152508160800151601181518110610efc57610efc611e2d565b602002602001018190525060405180604001604052807f2682de70d89f5c33a9948fff3f05dc11e191c428e9464c29880f1cfc73e58cf781526020017f1165cc360e4bcb184699d5489cb93815f09cea4e5b063f89a6d7ce8033123c748152508160800151601281518110610f7357610f73611e2d565b602002602001018190525060405180604001604052807f12a5199f9f3c3d8d8ddb3c91dc6b5bc0f595c3fb03fa7bd94d0c319ac992e6fc81526020017f1c3222fa29b9050b55c1131f2cc653311582c39d3887346653efd5ba6168b9a58152508160800151601381518110610fea57610fea611e2d565b602002602001018190525060405180604001604052807f2364bd8ad402eb074579a2821fe5633ca3bbb0dc0d204acb127602cab828092481526020017f09f2a80561d2d300e5fd5114826d3fa7063863118a5aff87bf6f443b9c85235a815250816080015160148151811061106157611061611e2d565b602002602001018190525060405180604001604052807f2c7de49be8855be23830ea893d5afee266f2cabc2ad6d1fa869732b6071607d481526020017f04548fae17ad3a5ead7105faadcb58fba05b8d5cb6988de3a207e004d4f434f681525081608001516015815181106110d8576110d8611e2d565b602002602001018190525060405180604001604052807f1cd1e12fabbb1dce8662f2a88fa4b9ada917a2eddf0e4e4b948776ca49ec8bfb81526020017f06be3a5a59a2f4a77684229e54daf4983cc5cdc4f49fdd924321b181c9ba8add815250816080015160168151811061114f5761114f611e2d565b602002602001018190525060405180604001604052807f1f967a677acb8e11dce20edda8bc7296842acc1957de86169fa110d3fca07b7181526020017f2cdd00560a9061a0f4c1aa434e926dd11f3e2db521b1da3589c9f29d87d212bf81525081608001516017815181106111c6576111c6611e2d565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611202816003611ddf565b818061121057611210611e17565b8451838061122057611220611e17565b8651800909828061123357611233611e17565b602086015180096112449190611dad565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926112bc92909190829060015b6020020151611911565b8951805160208201519397509195506112e1929060005b60200201518b5160016112b2565b895191935091506112f7908390839060006112d3565b909250905061130884848484611992565b909450925061131984848888611992565b90945092508315801561132a575082155b98975050505050505050565b6040805180820190915260008082526020820152611352611aa4565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b50806113ab57604051633842fc7360e21b815260040160405180910390fd5b505092915050565b60408051808201909152600080825260208201526113cf611ac2565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b5761138c565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479061146d57604051806040016040528082856000015161145c9190611ddf565b815260006020909101529392505050565b60405180604001604052808285600001516114889190611ddf565b815260200182856020015161149d9190611ddf565b6114a79084611dad565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a60000151816000815181106114f1576114f1611e2d565b6020026020010181815250508a602001518160018151811061151557611515611e2d565b60209081029190910101528951600160200201518160028151811061153c5761153c611e2d565b602090810291909101015289515181518290600390811061155f5761155f611e2d565b602002602001018181525050896020015160016002811061158257611582611e2d565b60200201518160048151811061159a5761159a611e2d565b60200260200101818152505089602001516000600281106115bd576115bd611e2d565b6020020151816005815181106115d5576115d5611e2d565b6020026020010181815250508860000151816006815181106115f9576115f9611e2d565b60200260200101818152505088602001518160078151811061161d5761161d611e2d565b60209081029190910101528751600160200201518160088151811061164457611644611e2d565b602090810291909101015287515181518290600990811061166757611667611e2d565b602002602001018181525050876020015160016002811061168a5761168a611e2d565b602002015181600a815181106116a2576116a2611e2d565b60200260200101818152505087602001516000600281106116c5576116c5611e2d565b602002015181600b815181106116dd576116dd611e2d565b602002602001018181525050866000015181600c8151811061170157611701611e2d565b602002602001018181525050866020015181600d8151811061172557611725611e2d565b602090810291909101015285516001602002015181600e8151811061174c5761174c611e2d565b602090810291909101015285515181518290600f90811061176f5761176f611e2d565b602002602001018181525050856020015160016002811061179257611792611e2d565b6020020151816010815181106117aa576117aa611e2d565b60200260200101818152505085602001516000600281106117cd576117cd611e2d565b6020020151816011815181106117e5576117e5611e2d565b60200260200101818152505084600001518160128151811061180957611809611e2d565b60200260200101818152505084602001518160138151811061182d5761182d611e2d565b60209081029190910101528351600160200201518160148151811061185457611854611e2d565b602090810291909101015283515181518290601590811061187757611877611e2d565b602002602001018181525050836020015160016002811061189a5761189a611e2d565b6020020151816016815181106118b2576118b2611e2d565b60200260200101818152505083602001516000600281106118d5576118d5611e2d565b6020020151816017815181106118ed576118ed611e2d565b602002602001018181525050611902816119da565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761195381868909828061194a5761194a611e17565b86890983611a2f565b818061196157611961611e17565b828061196f5761196f611e17565b878909838061198057611980611e17565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476119c1878683611a2f565b6119cc878684611a2f565b925092505094509492505050565b80516000906119e7611ae0565b6000602082602085026020880160086107d05a03fa905080801561002b575080611a2457604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b60008180611a3f57611a3f611e17565b611a498484611dad565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611a7d611afe565b8152602001611a8a611afe565b8152602001611a97611afe565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611b11611b23565b8152602001611b1e611b23565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611b5257600080fd5b611b5a611d49565b808385604086011115611b6c57600080fd5b60005b6002811015611b8e578135845260209384019390910190600101611b6f565b509095945050505050565b600082601f830112611baa57600080fd5b8135602067ffffffffffffffff80831115611bc757611bc7611e43565b8260051b604051601f19603f83011681018181108482111715611bec57611bec611e43565b60405284815283810192508684018288018501891015611c0b57600080fd5b600092505b85831015611c2e578035845292840192600192909201918401611c10565b50979650505050505050565b600060408284031215611c4c57600080fd5b6040516040810181811067ffffffffffffffff82111715611c6f57611c6f611e43565b604052823581526020928301359281019290925250919050565b600080828403610120811215611c9e57600080fd5b61010080821215611cae57600080fd5b611cb6611d72565b611cc08787611c3a565b81526080603f1984011215611cd457600080fd5b611cdc611d49565b9250611ceb8760408801611b41565b8352611cfa8760808801611b41565b6020840152826020820152611d128760c08801611c3a565b60408201529350840135905067ffffffffffffffff811115611d3357600080fd5b611d3f85828601611b99565b9150509250929050565b6040805190810167ffffffffffffffff81118282101715611d6c57611d6c611e43565b60405290565b6040516060810167ffffffffffffffff81118282101715611d6c57611d6c611e43565b60008219821115611da857611da8611e01565b500190565b600082821015611dbf57611dbf611e01565b500390565b6000600019821415611dd857611dd8611e01565b5060010190565b600082611dfc57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212201627ae1535f53660d3fe5786470b27212e931ad7363a55055ffdcf6663f6d70464736f6c63430008070033";

type Transaction1x0VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction1x0VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction1x0Verifier__factory extends ContractFactory {
  constructor(...args: Transaction1x0VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Transaction1x0Verifier";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Transaction1x0Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction1x0Verifier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction1x0Verifier {
    return super.attach(address) as Transaction1x0Verifier;
  }
  connect(signer: Signer): Transaction1x0Verifier__factory {
    return super.connect(signer) as Transaction1x0Verifier__factory;
  }
  static readonly contractName: "Transaction1x0Verifier";
  public readonly contractName: "Transaction1x0Verifier";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction1x0VerifierInterface {
    return new utils.Interface(_abi) as Transaction1x0VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Transaction1x0Verifier {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Transaction1x0Verifier;
  }
}